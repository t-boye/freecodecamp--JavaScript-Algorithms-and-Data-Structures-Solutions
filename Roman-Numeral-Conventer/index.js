/*************************************************
 * 
 Solved and tested by Emmanuel Tete Boye ( tboye.tech )
 
 * ******************************************************* */
function convertToRoman(num) {
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = "";
  for (let i = 0; i < symbols.length; i++) {
    while (values[i] <= num) {
      roman += symbols[i];
      num -= values[i];
    }
  }
  return roman;
}

const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

convertBtn.addEventListener("click", convertNumber);

function convertNumber() {
  const number = parseInt(numberInput.value, 10); // Parse input as integer

  // Input validation
  if (isNaN(number)) {
    outputDiv.textContent = "Please enter a valid number.";
    return;
  }

  if (number < 1) {
    outputDiv.textContent = "Please enter a number greater than or equal to 1.";
    return;
  }

  if (number >= 4000) {
    outputDiv.textContent = "Please enter a number less than or equal to 3999.";
    return;
  }

  const romanNumeral = convertToRoman(number);
  outputDiv.textContent = romanNumeral;
}
