import { web3, SmartContract } from '../contracts.js';

// Current GODZ fee to mint a Sentz
const getSentzPrice = async (walletAddress) => {
  const result = await SmartContract.FeeManagerV8.methods.getSentzMintFee().call({
    from: walletAddress
  })
  const amount = web3.utils.fromWei(result.amount)
  const devFee = web3.utils.fromWei(result.devFee)
  const totalFee = Math.round(100 * (parseFloat(amount) + parseFloat(devFee))) / 100

  return totalFee;
}

// Current GODZ fee to mint a Legion Badge
const getLegionBadgePrice = async (walletAddress) => {
  const result = await SmartContract.FeeManagerV8.methods.getSentzLegionMintFee().call({
    from: walletAddress
  })
  const amount = web3.utils.fromWei(result.amount)
  const devFee = web3.utils.fromWei(result.devFee)
  const totalFee = Math.round(100 * (parseFloat(amount) + parseFloat(devFee))) / 100

  return totalFee;
}

export {
  getSentzPrice,
  getLegionBadgePrice
}
