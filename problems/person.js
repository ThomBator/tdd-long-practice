class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `${this.name} says hello!`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}.`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if(typeof obj !== 'object') {
      throw new TypeError('TypeError: Method argument must be a valid object.');
    }
    else {
      if(obj.hasOwnProperty('name') && obj.hasOwnProperty('age')) {
        this.name = obj.name;
        this.age = obj.age;
        return true;
      }
      else {
        throw new TypeError('TypeError: passed object does not have properties name and age');
      }
    }

  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    }
    catch {
      return false;
    }
  }

  static greetAll(people) {
    let greetPeople = []
    for(let person of people) {
      greetPeople.push(person.sayHello());

    }
    return greetPeople;
  }

}


  let person = new Person('Tony', 24);
  let otherPerson = new Person('Teddy', 54);

  console.log(person.switchVisit(otherPerson));


module.exports = Person;
