const fetch = require('node-fetch')

module.exports = rawhex => {
  return fetch('https://btc.com/api/v1/tools/tx-publish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({rawhex})
  }).then(r => {
    return r.json()
  })
}