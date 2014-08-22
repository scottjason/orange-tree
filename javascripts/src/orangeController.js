window.onload = function() {
  var tree = new Tree()
  var view = new View;
  var controller = new Controller(tree, view);
  controller.bindListeners();
}

function Controller(tree, view) {
  this.tree = tree
  this.view = view
}

Controller.prototype = {
  bindListeners: function() {
    $('.plant').click(this.view.renderTree);
    $('.age').click(this.generateNewAge.bind(this))
  },
  generateNewAge: function() {
    this.view.renderNewAge(this.tree.ageTree());
    this.updateOrangeCount();
  },
  updateOrangeCount: function() {
    var numOranges = this.tree.orangeCount;
    this.view.renderNewOrangeCount(numOranges);
    this.updateOrangeImage();
  },
  updateOrangeImage: function() {
    if (this.tree.bearingAge) {
      this.view.renderOrangeImage(this.tree.generateRandomOrangeTopLocation(), this.tree.generateRandomOrangeLeftLocation());
    }
  }
}

