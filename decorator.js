const Decorator = function(){
  this.stock = [];
};

Decorator.prototype.addPaintCan = function(paintCan) {
  this.stock.push(paintCan);
};

module.exports = Decorator;
