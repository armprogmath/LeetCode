function Animal(type) {
  this.type = type;
}

// instance method
Animal.prototype.speak = function () {
  console.log(`The ${this.type} makes a sound`);
};

// static method
Animal.isAnimal = function (obj) {
  return obj instanceof Animal;
};

const dog = new Animal("dog");
dog.speak();            // ✅ instance method
console.log(Animal.isAnimal(dog)); // ✅ static method → true
