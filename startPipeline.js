/*jshint esversion: 8 */

// Get evnironment variable
const envVariable = process.env.MY_ENV_VAR;

// Define a variable
let myMessage = "Hello Azure DevOps Pipeline!";

// A simple function for testing
function writeMessage(text){
    console.log(text);
    return text;
}

// Call the function
let result = writeMessage(myMessage);

// Do something with the function result
console.log(result + " - " + envVariable);
