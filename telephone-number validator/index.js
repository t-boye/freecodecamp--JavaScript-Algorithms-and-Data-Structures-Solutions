/*************************************************
 * 
 Solved and tested by Emmanuel Tete Boye ( tboye.tech )
 
 * ******************************************************* */
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// Regular expression for valid US phone numbers
const phoneRegExp = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

checkBtn.addEventListener("click", validateNumber);
clearBtn.addEventListener("click", clearResults);

function validateNumber() {
  // Check if userInput has a value before accessing its properties
  if (!userInput.value) {
    alert("Please provide a phone number");
    return;
  }

  const phoneNumber = userInput.value.trim();

  if (phoneRegExp.test(phoneNumber)) {
    displayResult(`Valid US number: ${phoneNumber}`);
  } else {
    displayResult(`Invalid US number: ${phoneNumber}`);
  }
}

function clearResults() {
  resultsDiv.textContent = "";
}

function displayResult(message) {
  resultsDiv.textContent = message;
}
