function View() {}
View.prototype = {
  renderTree: function() {
    $('.tree-image').show()
  },
  renderNewAge: function(newAge) {
    $('.age').closest('p').html(newAge);
  },
  renderNewOrangeCount: function(numOranges) {
    $('.fruit-count').html(numOranges);
  },
  renderOrangeImage: function(top, left) {
    // $('.orange-image:first').clone().appendTo('.orange-container').css
    $('.orange-image:first').clone().appendTo('.orange-container').css("bottom", top, "left", left).show()
    console.log(top);
    console.log(left)
  }
}