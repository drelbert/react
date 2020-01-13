//let and const 
//diff ways to create a variable 

//old 
    var name = 'Elle';
    console.log(name);

//let = the new var 
    //use with values that are variable 
    let nombre = 'Ir';
    console.log(nombre);


//const 
    //use with constant values 


//arrow functions
    //diff syntax for JavaScript functions

    const elFunct = (argumentsHere) => {
        //function body 
    }

    //Solves for this keyword issues
        //when used in =>, this will always keep context

    const printName = (name, age) => {
        console.log(name, age);
    }

    printName('Chucho', 33);

    //shortcuts 
    const multiply = (number) => {
        return number * 2;
    }

    console.log(multiply(2));

    //can be 
    const multiply = (number) => number * 2;

    console.log(multiply(2));


//modular code exports and imports
    export default bax 


//classes 
    //blueprints for JavaScript objects 
        //can have properties and methods

    class Person {
        //property
        name = 'Iria'
        //method
        call = () => {}
    }

    //useage
    const myPerson = new Person()
        myPerson.call()
        console.log(myPerson.name);


    //example 
    //a super class
    class RoleName {
        constructor() {
            this.description = 'Writes code';
        }

        printDescription() {
            console.log(this.description);
        }
    }

    class Person extends RoleName {
        constructor() {
            super();
            this.name = 'India';
        }

        printName() {
            console.log(this.name);
        }
    }

    const person = new Person();
    person.printName();
    person.printDescription();

    //use in jsbin
    //returns "India" "Writes code"

//classes properties and methods 

    //properties = variables attatched to classes/objects
    //methods = functions attatched to classes/objects

    //modern approach in ES7 that eliminates the need for constructor() and someMethod() {}

    someProperty = 'value';

    someMethod = () => {

    }

    //example revised 
    class Role {
        description = 'Writes code';
      
        printDescription = () => {
          console.log(this.description);
          
        }
      }
      
      class Person extends Role {
        name = 'India';
      
       printName = () => {
         console.log(this.name);
       }
      }
      
      const person = new Person();
      person.printName();
      person.printDescription();
      

//spread and rest operators 
      //spread = for splitting up array elements or object properties 

      //... with arrays 
        const oldArray = [3, 66, 'Dave', 9];
        const newArray = [...oldArray, 5, 77];

        console.log(newArray);

     //... with objects
        const object = {
            name: 'Hondo'
        };
        const newObject = { 
            ... object, devTotal: 66 
        };

        console.log(newObject);

    
    //rest = used to merge a list of function arguments into an array 


//destructuring
        //pulls out single elements or properties 
        //as opposed to spread which pulls out all elements or properties 

        //for easily extracting array elements or object properties and store them in variables 

        //array 
            const set = [1, 'Dave', 5, true];
            const [extOne, extTwo] = set;
            // to change up what is returned use this
            //[extOne, , extBar]
            console.log(extOne, extTwo);

        //object 
            {bar} = {bar: 'Value', bax: true}
            console.log(bar);


//ref and primitive types 
        //primitive types = numbers, strings, booleans 

        //create a variable
            const bar = 1;
        //create a real copy 
            const bax = bar;

            console.log(bax) //returns 1


        //reference types = objects and arrays 
        //note: copying may manipulate one object in place in app but manipulate the usage of the same object in another location in app
        //solution = copy in an immutable way 
        //example using the spread operator 

            const bax = { 
                title: 'Hondo'
            };

            const bax = {
                ...bax
            };

            bax.title = 'Ele';
            console.log(bax);


//refreshing 'array functions' 

        //example 
        const bar = [3, 6, 77];

        const dblBar = bar.map((baz) => {
            return baz * 2;
        });

        console.log(dblBar);
        