// PARI DISPARI
function isEven(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}
// PALINDROMO
function palindrome(str) {
    var lowStr = str.toLowerCase();
    var reverseStr = lowStr.split('').reverse().join(''); 
    return reverseStr === lowStr;
}
// NUMERO RANDOM
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}