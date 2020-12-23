module.exports = (chai) => {
  var Assertion = chai.Assertion;
  Assertion.addMethod("bnEqual", function (input) {
    new Assertion(this._obj.toString()).to.equal(input.toString());
  });
};
