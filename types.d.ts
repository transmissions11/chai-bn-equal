declare namespace Chai {
  interface Assertion {
    bnEqual(input: any): PromiseLike<void>;
  }

  interface PromisedAssertion {
    bnEqual(input: any): PromiseLike<void>;
  }
}
