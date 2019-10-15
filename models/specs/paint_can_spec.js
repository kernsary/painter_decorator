const assert = require("assert");
const PaintCan = require("../paint_can.js");

describe("Paint Can", function(){

  let paintCan;

  beforeEach(function(){
    paintCan = new PaintCan(5);
  });

  it("should have a capacity", function(){
    const actual = paintCan.capacity;
    assert.strictEqual(actual, 5);
  });

  it("should check whether it is empty", function(){
    const actual = paintCan.emptied;
    assert.strictEqual(actual, false);
  });

  it("should be able to empty itself", function(){
    paintCan.empty();
    const actual = paintCan.emptied;
    assert.strictEqual(actual, true);
  });

});
