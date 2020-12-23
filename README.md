# chai-bn-equal

Adds a `bnEqual` method to chai that compares the string version of the BN to a string version of its input.

#### Pairs well with `chai-as-promised`!

## Installation:

`npm i --save-dev chai-bn-equal`

## Example:

```js
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const chaiBnEqual = require("chai-bn-equal");
const BN = require("bn.js");
chai.use(chaiBnEqual);
chai.use(chaiAsPromised);
chai.should();

describe("chai-bn-equal", () => {
  it("should pass", () => {
    return Promise.resolve(new BN("2")).should.eventually.bnEqual(2);
  });
});
```
