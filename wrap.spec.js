const { expect } = require("chai");
const wrap = require("./wrap.js");

describe("wrap", () => {
  it("Returns an empty string if an empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  it("Correctly divides a string", () => {
    expect(
      wrap(
        "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.",
        20
      )
    ).to.equal(
      "Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula."
    );
  });
  it("Breaks a word if the word is longer than the column length", () => {
    expect(wrap("beauty is ok", 2)).to.equal("be\nau\nty\nis\nok");
  });
});

/*
- returns an empty string if the string was provided
- returns the unedited if the column is 0
- correctly divides a string
- when col === string.length, return the string
- doesn't break a word if its length is longer than the column length
- 
*/
