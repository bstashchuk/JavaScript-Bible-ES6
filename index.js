/*typeof return's type is "string". The value is :
    1- the underlying primitive type for primitive type operands (string, number, undefined, boolean, etc...)
    2- "object" for all reference types 
    3- "object" for null
    4- "function" for functions
    */

    // console.log(typeof(undefined)) //undefined
    // console.log(typeof(null)) //object
    // console.log(typeof({})) //object 
    //  console.log(typeof([])) //object not array
    //  console.log(typeof( ()=>{})) //function not object
    //  console.log(typeof( function(){})) //function not object
    //  console.log(typeof( function(){})) //function not object

/* Intanceof :
    1- always return false for primitive types as they don't have function constructor in the proto list 
    2- true if the function constructor on the right is in the proto list of the argument

    
    */