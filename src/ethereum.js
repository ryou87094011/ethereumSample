import Web3 from 'web3'
const infraEndPoint = 'https://ropsten.infura.io/v3/57fc37adf59a4dc2955326946837ebaf'
export default class Ethereum {
  constructor () {
    this.web3 = new Web3(new Web3.providers.HttpProvider(infraEndPoint))
  }
  // get Ethereum Balance
  getEthBalance () {
    return new Promise((resolve, reject) => {
      this.web3.eth.getBalance('0xf965F11947aC5C5F169fc276033a2ae9a0f2e9e1').then(value => {
        resolve(value)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
