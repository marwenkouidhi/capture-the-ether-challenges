import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  developmentChains,
  networkConfig,
  VERIFICATION_BLOCK_CONFIRMATIONS,
} from "../helper-hardhat-config";
import verify from "../utils/verify";

const deployNicknameChallenge: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { deployments, network, getNamedAccounts, ethers } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  let vrfCoordinatorV2Address;
  if (developmentChains.includes(network.name)) {
    vrfCoordinatorV2Address = await (
      await ethers.getContract("CaptureTheEtherMock")
    ).address;
  }
  vrfCoordinatorV2Address =
    networkConfig[network.config.chainId!]["captureTheEtherAddress"];

  const args = [deployer];
  const waitConfirmations = developmentChains.includes(network.name)
    ? 1
    : VERIFICATION_BLOCK_CONFIRMATIONS;

  const nicknameChallenge = await deploy("Lottery", {
    from: deployer,
    args,
    log: true,
    waitConfirmations,
  });

  // Verify the deployment
  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    log("Verifying...");
    await verify(nicknameChallenge.address, args);
  }
};

export default deployNicknameChallenge;
deployNicknameChallenge.tags = ["all", "nicknameChallenge"];
