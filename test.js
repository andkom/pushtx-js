const {pushtx} = require('./index')

pushtx('123123123123123')
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })