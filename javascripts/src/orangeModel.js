FRUIT_BEARING_AGE = 5;
MAX_AGE = 40;

function Tree() {
  this.age = 0;
  this.height = 0;
  this.age = 0;
  this.orangeCount = 0;
  this.isAlive = true;
  this.bearingAge = false;
}

Tree.prototype = {
  grow: function(controller) {
    this.age++;
    this.height += 10;

    if (this.age === FRUIT_BEARING_AGE) {
      this.orangeCount += Math.floor(Math.random() + 1);
      this.bearingAge = true;

    } else if (this.age === FRUIT_BEARING_AGE + 3 ||
      this.age === FRUIT_BEARING_AGE + 6 ||
      this.age === FRUIT_BEARING_AGE + 9 ||
      this.age === FRUIT_BEARING_AGE + 12 ||
      this.age === FRUIT_BEARING_AGE + 15 ||
      this.age === FRUIT_BEARING_AGE + 18 ||
      this.age === FRUIT_BEARING_AGE + 21 ||
      this.age === FRUIT_BEARING_AGE + 24 ||
      this.age === FRUIT_BEARING_AGE + 27 ||
      this.age === FRUIT_BEARING_AGE + 30 ||
      this.age === FRUIT_BEARING_AGE + 33)

    {
      this.orangeCount += Math.floor(Math.random() + 1);
      this.bearingAge = true;
    } else {
      this.bearingAge = false;

    }
    if (this.age > MAX_AGE) {
      this.die();
    }
  },
  die: function() {
    this.isAlive = false
  },
  dropOrange: function() {
    return this.orangeCount -= 1;
  },
  ageTree: function() {
    this.grow();
    return this.age
  },
  generateRandomOrangeTopLocation: function() {
    return Math.floor((Math.random() * 230) + 200);
  },
  generateRandomOrangeLeftLocation: function() {
    return Math.floor(Math.random() * 570) + 540;
  }
}

//------------------------

function Orange() {
  this.diameter = (Math.random() + 1) * 3;
}

function pickOrange() {
  var orange = new Orange
  return orange
}