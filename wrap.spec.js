const { expect } = require("chai");
const wrap = require("./wrap.js");

describe("wrap", () => {
  it("Returns an empty string if an empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
});
