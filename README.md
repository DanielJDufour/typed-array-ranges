# typed-array-ranges
Get the Smallest and Largest Possible Numbers for a Typed Array

# install
```bash
npm install typed-array-ranges
```

# usage
```js
const { getMax, getMin, getRange } = require("typed-array-ranges");

const max = getMax('Uint8Array');
// max is 255

const min = getMin('Int8Array');
// min is -128

const range = getRange('Uint16Array');
// range is [0, 65535]
```