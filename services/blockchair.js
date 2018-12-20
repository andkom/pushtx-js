const fetch = require('node-fetch')

module.exports = data => {
  return fetch('https://api.blockchair.com/bitcoin/push/transaction', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({data})
  }).then(r => {
    return r.json()
  })
}