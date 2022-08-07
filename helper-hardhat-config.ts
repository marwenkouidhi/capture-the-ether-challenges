export interface networkConfigItem {
  name?: string;
  captureTheEtherAddress?: string;
}
export interface networkConfigInfo {
  [key: number]: networkConfigItem;
}
export const networkConfig: networkConfigInfo = {
  3: {
    name: "ropsten",
    captureTheEtherAddress: "0x71c46Ed333C35e4E6c62D32dc7C8F00D125b4fee",
  },
};

export const developmentChains = ["hardhat", "localhost"];
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
