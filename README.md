# pushtx-js

JavaScript library for broadcasting Bitcoin raw transactions.

## Installation

```bash
npm install --save pushtx
```

## Usage

```javascript
const {pushtx} = require('pushtx')

pushtx(rawtx)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
```
