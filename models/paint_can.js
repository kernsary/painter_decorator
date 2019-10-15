const PaintCan = function(capacity){
  this.capacity = capacity;
  this.emptied = false;
};

PaintCan.prototype.empty = function () {
  this.emptied = true;
};

module.exports = PaintCan;
