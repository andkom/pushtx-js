const fetch = require('node-fetch')

module.exports = tx => {
  return fetch('https://blockchain.info/pushtx', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'tx=' + tx
  }).then(r => {
    if (!r.ok) {
      return r.text().then(err => {
        throw err
      })
    }

    return r.text()
  })
}