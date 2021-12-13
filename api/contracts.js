import Web3 from 'web3';

import { CryptoGodzSmartContracts } from './core.js';

const web3 = new Web3("https://bsc-dataseed.binance.org");

const SmartContract = {
  CryptoGodzPresaleNFT: new web3.eth.Contract(
    CryptoGodzSmartContracts.CryptoGodzPresaleNFT.abi,
    CryptoGodzSmartContracts.CryptoGodzPresaleNFT.networks['56'].address
  ),
  FeeManagerV8: new web3.eth.Contract(
    CryptoGodzSmartContracts.FeeManager.abi,
    CryptoGodzSmartContracts.FeeManager.networks['56'].address
  ),
  CentralBankV1: new web3.eth.Contract(
    CryptoGodzSmartContracts.CentralBank.abi,
    CryptoGodzSmartContracts.CentralBank.networks['56'].address
  ),
  CryptoGodzMainGameV6: new web3.eth.Contract(
    CryptoGodzSmartContracts.CryptoGodzMainGame.abi,
    CryptoGodzSmartContracts.CryptoGodzMainGame.networks['56'].address
  ),
  CryptoGodzSentzV3: new web3.eth.Contract(
    CryptoGodzSmartContracts.CryptoGodzSentz.abi,
    CryptoGodzSmartContracts.CryptoGodzSentz.networks['56'].address
  ),
  CryptoGodzSentzLegionV3: new web3.eth.Contract(
    CryptoGodzSmartContracts.CryptoGodzSentzLegion.abi,
    CryptoGodzSmartContracts.CryptoGodzSentzLegion.networks['56'].address
  ),
  CryptoGodzOracle: new web3.eth.Contract(
    CryptoGodzSmartContracts.CryptoGodzOracle.abi,
    CryptoGodzSmartContracts.CryptoGodzOracle.networks['56'].address
  ),
  CryptoGodzPresaleV5: new web3.eth.Contract(
    CryptoGodzSmartContracts.CryptoGodzPresale.abi,
    CryptoGodzSmartContracts.CryptoGodzPresale.networks['56'].address
  ),
  CryptoGodzV4: new web3.eth.Contract(
    CryptoGodzSmartContracts.CryptoGodz.abi,
    CryptoGodzSmartContracts.CryptoGodz.networks['56'].address
  ),
  CombatManagerV3: new web3.eth.Contract(
    CryptoGodzSmartContracts.CombatManager.abi,
    CryptoGodzSmartContracts.CombatManager.networks['56'].address
  ),
  CryptoGodzTimelockVaultV2: new web3.eth.Contract(
    CryptoGodzSmartContracts.CryptoGodzTimelockVault.abi,
    CryptoGodzSmartContracts.CryptoGodzTimelockVault.networks['56'].address
  ),
  RewardManagerV3: new web3.eth.Contract(
    CryptoGodzSmartContracts.RewardManager.abi,
    CryptoGodzSmartContracts.RewardManager.networks['56'].address
  )
}

export {
  web3,
  SmartContract
};
