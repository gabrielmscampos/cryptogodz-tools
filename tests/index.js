import { getSentzPrice, getLegionBadgePrice } from '../api/game/fees.js';
import { getEngageCooldown } from '../api/game/combat.js';
import { dumpSourceCode } from '../api/dump.js';

import { web3, SmartContract } from '../api/contracts.js';

const walletAddress2 = '0x45ef34df86f5d85de8e05ff8f99d953fa2eb9ac1';

// getSentzPrice(walletAddress2);
// getLegionBadgePrice(walletAddress2);
// getEngageCooldown(walletAddress2).then(console.log);
// dumpSourceCode('/home/gamoreir/Documents/Projects/cryptogodz/src');

for (let key of Object.keys(SmartContract)) {
  const contract = SmartContract[key];
  const methods = contract.methods;
  console.log(key)
  // console.log(methods)
  console.log(Object.keys(methods).filter(e => e.toLowerCase().includes('engage')))
  // console.log(contract._jsonInterface.filter(e => e.name == 'engageCombat').map(e => console.log(e.inputs)))
  // console.log(contract._jsonInterface.map(e => console.log(e.name)))
}

const contract = SmartContract['CryptoGodzMainGameV6'];
const methods = contract.methods;
// console.log(methods);

// engageCombat -> 0xe7535986 -> temporary method pre army launch
// engageCombat -> 0x514f2a8a -> official method post army launch

methods['0xe7535986'](1).send({from: walletAddress2}).then(console.log)
