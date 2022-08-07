import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { assert } from 'chai';
import { Contract } from 'ethers';
import { ethers, getNamedAccounts, network } from 'hardhat';
import { developmentChains } from '../helper-hardhat-config';

!developmentChains.includes(network.name) &&
  describe('Lottery Staging Tests', () => {
    let lotteryContract: Contract, entranceFee: any, deployer: SignerWithAddress;
    const chainId = network.config.chainId;

    beforeEach(async () => {
      deployer = (await ethers.getSigners())[0];
    });

  }