const assert = require("assert");
const Decorator = require("../decorator.js");
const PaintCan = require("../paint_can.js")

describe("Decorator", function(){

  let decorator;

  beforeEach(function(){
    decorator = new Decorator();
    paintCan1 = new PaintCan(5);
    paintCan2 = new PaintCan(3);
  });

  it("should be able to check paint stock", function(){
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, []);
  });

  it("should be able to add a can of paint to stock", function(){
    decorator.addPaintCan(paintCan1);
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 1);
  });

  it("should be able to calculate total litres of paint in stock", function(){
    decorator.addPaintCan(paintCan1);
    decorator.addPaintCan(paintCan2);
    const actual = decorator.totalPaintLitres;
    assert.strictEqual(actual, 8);
  });

});
