
function getUserInput(promptMessage) {
    return parseFloat(prompt(promptMessage));
}
function displayResult() {
    let num1 = getUserInput("Enter the first number:");
    let num2 = getUserInput("Enter the second number:");
    let sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
    let num3 = getUserInput("Enter another number:");

    // Multiply the sum by the third number and divide by 2
    let finalResult = (sum * num3) / 2;

    // Display the final result
    console.log(`The final result after multiplying by ${num3} and dividing by 2 is: ${finalResult}`);
}

// Call the function to run the program
displayResult();


