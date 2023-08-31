function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };


	let romanNumeral = '';

  //your code here
// console.log(convertToRoman(36));
for (let i = 0; i < 7; i++) {
        const symbol = obj[i][0];
        const value = obj[i][1];

        const quotient = Math.floor(num / value);

        if (quotient > 0) {
            if (quotient === 4 && i > 0) {
                // Handle subtractive notation like IV, XL, CD, etc.
                romanNumeral += obj[i][0] + obj[i - 1][0];
                num -= (value - obj[i - 1][1]);
            } else if (quotient === 9 && i > 0) {
                // Handle subtractive notation for 9, like IX, XC, CM, etc.
                romanNumeral += obj[i][0] + obj[i - 2][0];
                num -= (value - obj[i - 2][1]);
            } else {
                romanNumeral += symbol.repeat(quotient);
                num -= quotient * value;
            }
        }
    }

    return romanNumeral;


	
	

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line






// do not edit below this line
module.exports = convertToRoman
