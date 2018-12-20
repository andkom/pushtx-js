const fetch = require('node-fetch')

module.exports = url => {
  return rawtx => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({rawtx})
    }).then(r => {
      if (!r.ok) {
        return r.text().then(err => {
          throw err
        })
      }

      return r.json()
    })
  }
}