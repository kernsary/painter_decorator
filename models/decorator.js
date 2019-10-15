const Decorator = function(){
  this.stock = [];
  this.totalPaintLitres = 0;
};

Decorator.prototype.addPaintCan = function(paintCan){
  this.stock.push(paintCan);
  this.totalPaintLitres += paintCan.capacity;
};

Decorator.prototype.canPaintRoom = function(room) {
  return this.totalPaintLitres >= room.area;
};

Decorator.prototype.paintRoom = function (room) {
  if(this.canPaintRoom(room)){
    room.paint();
    this.totalPaintLitres -= room.area;
  };
};

Decorator.prototype.removeEmptyPaintCans = function () {
  for(let i = this.stock.length - 1; i>=0; i--){
    if(this.stock[i].emptied === true){
      this.stock.splice(i, 1);
    };
  };

};

module.exports = Decorator;
