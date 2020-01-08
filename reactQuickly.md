# 1 Meet React 
    const reactIs = {
        isA: 'UI component library',
        approach: 'creating compostable UI's',
        components: 'highly self-contianed concern specific blocks of functionality'
    };

    simplicty elements 
        declarative over imperative style = views update automatically 

        componetn based = pure JavaScript 

        powerful abstractions = simplified way of DOM interaction 
    
    under the hood 
        use of the virtual DOM to deterimine deltas 
            browser -> new view 

    React only updates parts that are absolutely needed
    DOM 
        internal state(virtual) 
        same as 
        view (real)
    
# 2 B Steps 

    elements are instances of components 
    
    nesting elements 
        simple enough way to have element hierarchy 
        <h1> for example 

    component classes 
        reusable functionality 
            is
        component classes or components 
            built with standard html tags 

        components 
            conceptually like JavaScript functions 
            accept inputs(props) 
                and return React elements that describe on screen items

        define the component with a JavaScript function 
        const doBar = (props) => {
            return <h1>Data Here<h1>;
        }
    
        this is a 
            functional component 


    when components need modification or customization ...

    properties 
        (cornerstone of declarative style)
        are 
        unchangeable values within elements 
            allowing elements to have diff variations 

    React looks for such props 