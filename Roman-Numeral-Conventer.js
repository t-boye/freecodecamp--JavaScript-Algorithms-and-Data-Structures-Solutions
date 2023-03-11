function convertToRoman(num) {
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
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