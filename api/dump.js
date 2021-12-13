/*
Given the fact that CryptoGodz developers keep the source code
at the SmartContracts objects we can dump the game solidity files.
*/

import fs from 'fs';

import { CryptoGodzSmartContracts } from './core.js';

const dumpSourceCode = (dumpDirectory) => {

  if (!fs.existsSync(dumpDirectory)){
    fs.mkdirSync(dumpDirectory);
  }

  for (let key of Object.keys(CryptoGodzSmartContracts)) {
    const contract = CryptoGodzSmartContracts[key];
    const filePath = dumpDirectory + '/' + contract.contractName + '.sol';
    fs.writeFileSync(filePath, contract.source);
  }

}

export { dumpSourceCode };
