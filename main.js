var number = 121;
var originalNumber = number;
var reversedNumber = 0;

while (originalNumber > 0) {
    reversedNumber = reversedNumber * 10 + originalNumber % 10;
    originalNumber = Math.floor(originalNumber / 10);
}

var isPalindrome = number === reversedNumber;

console.log(`Is ${number} a isPalindrome? ${isPalindrome}`);
