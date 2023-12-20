const animalData = require('./animal-data.json');

//Step 1
class Animal {
    constructor(name, species, color, hunger) {
        this.name = name;
        this.species = species;
        this.color = color;
        this.hunger = hunger;  
    }
    greet(){
        console.log(`Hi, I am ${this.name} the ${this.species}`)
    };
    feed(){
        this.hunger = this.hunger - 20;
        console.log(`Yum! I love food`);
    };
}

class Cat extends Animal {
    constructor(name, color, hunger){
        super(name, 'cat', color, hunger)
        this.food = 'fish'
    }
    greet(){
        console.log(`Meow, my name is ${this.name}. I am ${this.species}`)
    };
    feed(){
        this.hunger -= 20;
        console.log(`Yum! I love ${this.food}`);
    }
}

class Dog extends Animal {
    constructor(name, color, hunger){
        super(name, 'dog', color, hunger)
        this.food = 'kibble'
    }
    greet(){
        console.log(`Woof, my name is ${this.name}. I am ${this.species}`)
    };
    feed(){
        this.hunger -= 20;
        console.log(`Yum! I love ${this.food}`);
    }
}

const fluffy2 = new Cat('fluffy2', 'blue', 200)
console.log(fluffy2.greet())
console.log(fluffy2.feed())


const barky = new Dog('barky2', 'red', 300)
console.log(barky.greet())
console.log(barky.feed())


const fluffy = new Animal('Fluffy', 'cat', 'green', 100)
// console.log(fluffy.name);
// console.log(fluffy.feed());
// console.log(fluffy.greet());
// console.log(fluffy.hunger);


//Step 2
class AnimalShelter{
    constructor(){
       this.animals = []; 
    }
    addAnimal(animal){
       this.animals.push(animal)
    }
    adopt(animal) {
        const animalIndex = this.animals.indexOf(animal);  // find the index of the animal in the `this.animals` array
        this.animals.splice(animalIndex, 1);  // remove that animal from the `this.animals` array
      }
    getAnimalsBySpecies(species){
        let speciesArr = []
        for(const a of animalData){
          
            if(a.species === species){
                speciesArr.push(a)   
            } 
            }console.log(speciesArr)
    }
}


//Step 3
const shelter = new AnimalShelter()
    
for(const a of animalData){
    let hunger = 50
    if(a.hunger){
        hunger = a.hunger
    } 

    if(a.species === "cat"){
        const cat = new Cat(a.name, a.color, hunger)
        shelter.addAnimal(cat)
    } else if (a.species === "dog"){
        const dog = new Dog(a.name, a.color, hunger)
        shelter.addAnimal(dog)
    } else {
        const animal = new Animal(a.name, a.species, a.color, hunger)
        shelter.addAnimal(animal)
    }
    }


shelter.getAnimalsBySpecies('dog')


//Step 4
// see above



//Step 5
// see above


//Step 6
for(let greeting of shelter.animals){
    // console.log(greeting.greet())
    // console.log(greeting.feed())
}


//Step 7
