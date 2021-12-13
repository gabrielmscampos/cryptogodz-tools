import { SmartContract } from '../contracts.js';

// Return unix timestamp string of last engaged combat
// Cooldown resets when currentUnixTimestamp - result >= 86400
// If result is 0, then account never engaged
const getEngageCooldown = async (walletAddress) => {

  return await SmartContract.CombatManagerV3.methods.getCoolDown().call({
    from: walletAddress
  })

}

export {
  getEngageCooldown
}
