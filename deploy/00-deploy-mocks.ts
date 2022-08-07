import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  developmentChains,
  networkConfig,
  VERIFICATION_BLOCK_CONFIRMATIONS,
} from "../helper-hardhat-config";
import verify from "../utils/verify";

const deployMocks = async (hre: HardhatRuntimeEnvironment) => {};
export default deployMocks;
deployMocks.tags = ["all", "mocks"];
