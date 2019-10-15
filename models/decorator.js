const Decorator = function(){
  this.stock = [];
};

Decorator.prototype.addPaintCan = function(paintCan){
  this.stock.push(paintCan);
};

Decorator.prototype.totalPaintLitres = function(){
  let total = 0;
  for(paintCan of this.stock){
    total += paintCan.capacity;
  };
  return total;
};

Decorator.prototype.canPaintRoom = function(room) {
  return this.totalPaintLitres() >= room.area;
};

Decorator.prototype.paintRoom = function (room) {
  if(this.canPaintRoom){
    room.paint();
  };
};

module.exports = Decorator;
