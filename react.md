React 
# Creating 
     to create app 
     create-react-app talent-app-reac --scripts=version 1.1.5
     this command defines a certain structure 

     or
    create-react-app 

 run 
     npm start

 npm installs:
    routing (3rd party) = npm install react-router-dom
      

# Getting Started 
 is a JavaScript library for building UI

## react apps run in the browser 

## built with components 

    allows for building in a modular fashion

## are custom HTML elements 
    so build once and use anywhere
        build actually a class and then reuse 

    why React?
        UI state gets diffuclt to manage with vanilla JS 

        focus on business logic 

# Next Gen JavaScript 

   // let 
        new var 
          use for var valuables 
   // const
        only for constant values
            assign and never change 

   // arrow functions 
     diff way to create functions

    traditionally 
     function evalData() {
         ...
     }

     arrow 
        allows for solving of 'this' keyword issues
       const myFunct = () => {
           ...
       }


       //example traditional
            function printStateChart(state) {
                console.log(state);
            }

            printStateData('AK');


        //example arrow function 
            const printStateChart = (state, ...) => {
                console.log(state, ...);
            }

            printStateChart('AK', ...);

        //example of a return function
            const multiply = number => number * 2;

            console.log(multiply(2));
    


    //modular code via exports and imports 
        inside of JavaScript file can import from another 

     //classes
           blueprints for objects 

                with properties = vars
                and methods
            
            more convenoent way to build constructor functions 

            classes comparable to constructor functions 
            where inheritance is comp to prototypes 

        classes are used by react to create components 

    //Classes Props and Methods 
        props are like variables 
            attatched to classes/objects
        methods are like functions 
            attatched to classes/objects


    //Spread and Rest operators 
        spread 
            used to split up an array of elements OR 
            object properties 

            take old array 
            and add old elements to a new array 

        rest 
            used to merge a list of function arguments into an array 

    //Destructuring 
        for 
            extracting array elements or object properties 
                and store them in a variable 

            note 
                where SPREAD takes out all elements or properties
            
            destrucuting 
                allows for extraction on single elements or properties and store in variables 

        syntax 
            array destructuring
            [a, b] = ['State', 'UT']
            console.log(a) // State
            console.log(b) // UT

            object destructuring
            {state}= {state: 'UT', licenses: 568} 
            console.log{state} //UT
            console.log(licences) //undefined 
        
    //Ref and Primitive Types

        reference types 
            objects 
            arrays 

            if ever reassigned
                just copying the pointer
                not the value

                so to really copy
                    create new object and 
                    then copy the properties not entire object 
                    

        primitive types 
            numbers 
            strings 
            boolean 
                whenever reasign or store var in var 
                it will copy the value 

    //Refreshing Array Types

        Array functions 

            example 
                double numbers in array 

                const numbers = [1, 2, 3];

                const dblTheNumbers = number.map(
                    //add the arrow function 
                    //Note, there are many array functions
                    (num) => {
                        return num * 2;
                    }
                );

                // bing! map creates a new array 
                console.log(numbers);  // [1, 2, 3]
                console.log(dblTheNumbers); //[2, 4, 6]

# Sect 3 Basics 

    //Build Workflow 

        need
            dependency management = npm 
            bundler = webpack for write mod code to split up and 
                to ensure correct bundling     

            compiler = Babel + Presets 
            dev server = locally    

        tool to execute this
        and offical way to create React app

    //Use 'Create React App' 

        in iTerm = dan@sixkiller-harbor 
         entered 
           sudo npm install create-react-app -g



    //State and props 

        only changes in either trigger React 
        to re-render components
        and possibly update the DOM       

        props
            allow for passing of data 
            from parent (wrapping) component 
            to 
            child (embedded) component