function rot13(str) {
  let decoded = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) { // uppercase letters
      decoded += String.fromCharCode((charCode - 65 + 13) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) { // lowercase letters
      decoded += String.fromCharCode((charCode - 97 + 13) % 26 + 97);
    } else {
      decoded += str[i]; // non-alphabetic characters
    }
  }
  return decoded;
}