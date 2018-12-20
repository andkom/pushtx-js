const services = require('./services')

function pushtx(hex) {
  return Promise.all([
    services.btccom(hex),
    services.bitpay(hex),
    services.blockchair(hex),
    services.blockchain(hex),
    services.blockexplorer(hex),
    services.localbitcoins(hex),
  ].map(p => p.catch(err => {
    return err
  })))
}

module.exports = {pushtx, services}