// NOTE: PLEASE READ EACH INSTRUCTION COMMENT CAREFULLY TO HELP YOU PROCESS THIS PROJECT
// IF YOU ARE STUCK ASK AN INSTRUCTOR FOR HELP, ALWAYS WRITE THE CODE BELOW THE ASSIGNMENTS.

// Assignment 1
// You need to change the id that this collects to product.
// You will need to create a div using javascript,
// Use this site to help you understand how: https://www.w3schools.com/jsref/met_document_createelement.asp

// CHALLENGE SECTION:
// If you feel up for a challenge, try and use an if statement if(condition){run this code}
// to return an alert if the input is empty. You will need to get the id as in previous assignments above
// and then get the value at the end and check if they are strictly equal to an empty string.
// If the code you will want to run after checking the condition is to run the alert method.
// If you do not know the alert method, look it up on google using the w3schools,
// do not forget to include a return false at the end to not reload your webpage.

// Assignment 2:
// You need to put the value of the input into an array to call later.
// That means you will need to assign your input using brackets around it
// to a newProduct variable, remember that assign can mean the equals sign(=).
// Hint: You could push your product to a new array once you create a new variable
// that makes a single object {} with the product variable you made above.
// use console.log and pass in the product array to check if you have it setup correctly.

// Assignment 3:
// Hint: Use a loop(look up the javascript loop on w3schools.) on your product array and set the max length of the loop to the array using
// dot notation (array.length) and then you do the following:
// set the input to empty, similar how you would check in the if statement previously,
// just get document.getElementById then set the .value to an empty string.
// then set the output div to display block, its normally set to none, which means invisible
// This means that you need to get your output variable use dot notation to set style.display = "block"
// set the div.textContent equal to the array index number [i] and dot notation of the product
// `${productArray[i].your input}`
// finally use the appendChild method from the output variable you had from earlier.

// this line is to prevent the webpage from reloading. DO NOT MODIFY IT.

// Global array to store products
let productArray = [];

function addProduct() {
  // -----------------------------
  // Assignment 1:
  // You need to change the id that this collects to product.
  // -----------------------------
  const inputElement = document.getElementById("product");
  const input = inputElement.value; // get the value from the input field

  // -----------------------------
  // Create a div using JavaScript to display the product
  // -----------------------------
  // (This will be used later in Assignment 3 as well)
  const outputDiv = document.getElementById("output");
  outputDiv.style.display = "block"; // make sure the output is visible

  // -----------------------------
  // CHALLENGE SECTION:
  // Check if the input is empty and alert the user
  // -----------------------------
  if (input === "") {
    alert("Input cannot be empty");
    return false; // prevent page reload
  }

  // -----------------------------
  // Assignment 2:
  // Put the value of the input into an array
  // -----------------------------
  let newProduct = { name: input }; // create a product object
  productArray.push(newProduct); // add it to the global array
  console.log(productArray); // check the array in console

  // -----------------------------
  // Assignment 3:
  // Loop through the array and display all products
  // -----------------------------
  outputDiv.innerHTML = ""; // clear previous content

  for (let i = 0; i < productArray.length; i++) {
    const para = document.createElement("div"); // create a new div
    para.textContent = `${productArray[i].name}`; // set text to the product name
    outputDiv.appendChild(para); // add it to the output container
  }

  // -----------------------------
  // Reset the input field after adding the product
  // -----------------------------
  inputElement.value = "";
}
