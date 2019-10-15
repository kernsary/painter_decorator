const assert = require("assert");
const Room = require("../room.js");

describe("Room", function(){

  let room;

  beforeEach(function(){
    room = new Room(30);
  });

  it("should have an area", function(){
    const actual = room.area;
    assert.strictEqual(actual, 30);
  });

})
