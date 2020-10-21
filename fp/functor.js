class Functor {
  constructor(val) {
    this.val = val;
  }

  map(f) {
    return new Functor(f(this.val));
  }
}

(new Functor(2)).map(function(two){
  return two + 2;
});

