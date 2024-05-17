const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

checkButton.addEventListener("click", function () {
  const text = textInput.value.trim();

  if (!text) {
    alert("Please input a value");
    return;
  }

  const processedText = processText(text);
  const isPalindrome = checkPalindrome(processedText);

  resultDiv.textContent = `${text} is ${
    isPalindrome ? "" : "not"
  } a palindrome`;
});

function processText(text) {
  // Convert to lowercase and remove non-alphanumeric characters
  return text.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function checkPalindrome(text) {
  const reversedText = text.split("").reverse().join("");
  return text === reversedText;
}

/*************************************************
 * 
 Solved and tested by Emmanuel Tete Boye ( tboye.tech )
 
 * ******************************************************* */
