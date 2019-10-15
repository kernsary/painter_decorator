const assert = require("assert");
const Decorator = require("../decorator.js");
const PaintCan = require("../paint_can.js")
const Room = require("../room.js")

describe("Decorator", function(){

  let decorator;

  beforeEach(function(){
    decorator = new Decorator();
    paintCan1 = new PaintCan(5);
    paintCan2 = new PaintCan(6);
    room = new Room(20);
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
    assert.strictEqual(actual, 11);
  });

  it("should be able to calculate if can paint room - false", function(){
    decorator.addPaintCan(paintCan1);
    decorator.addPaintCan(paintCan2);
    const actual = decorator.canPaintRoom(room);
    assert.strictEqual(actual, false);
  });

  it("should be able to calculate if can paint room - true", function(){
    decorator.addPaintCan(paintCan1);
    decorator.addPaintCan(paintCan2);
    decorator.addPaintCan(paintCan1);
    decorator.addPaintCan(paintCan2);
    const actual = decorator.canPaintRoom(room);
    assert.strictEqual(actual, true);
  });

  it("should be able to paint room if enough paint", function(){
    decorator.addPaintCan(paintCan1);
    decorator.addPaintCan(paintCan2);
    decorator.addPaintCan(paintCan1);
    decorator.addPaintCan(paintCan2);
    decorator.paintRoom(room);
    const actual = room.painted;
    assert.strictEqual(actual, true);
  });

  it("should not be able to paint room if not enough paint", function(){
    decorator.addPaintCan(paintCan1);
    decorator.addPaintCan(paintCan2);
    decorator.paintRoom(room);
    const actual = room.painted;
    assert.strictEqual(actual, false);
  });

  it("should decrease amount of paint in stock when painting a room", function(){
    decorator.addPaintCan(paintCan1);
    decorator.addPaintCan(paintCan2);
    decorator.addPaintCan(paintCan1);
    decorator.addPaintCan(paintCan2);
    decorator.addPaintCan(paintCan1);
    decorator.addPaintCan(paintCan2);
    decorator.paintRoom(room);
    const actual = decorator.totalPaintLitres;
    assert.strictEqual(actual, 13);
  });

  it("should be able to remove empty paint cans from stock - paintCan1", function(){
    decorator.addPaintCan(paintCan1);
    decorator.addPaintCan(paintCan2);
    paintCan1.empty();
    decorator.removeEmptyPaintCans();
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [paintCan2]);
  });

  it("should be able to remove empty paint cans from stock - paintCan2", function(){
    decorator.addPaintCan(paintCan1);
    decorator.addPaintCan(paintCan2);
    paintCan2.empty();
    decorator.removeEmptyPaintCans();
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [paintCan1]);
  });

  it("should be able to remove empty paint cans from stock - both", function(){
    decorator.addPaintCan(paintCan1);
    decorator.addPaintCan(paintCan2);
    paintCan2.empty();
    paintCan1.empty();
    decorator.removeEmptyPaintCans();
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, []);
  });

});
