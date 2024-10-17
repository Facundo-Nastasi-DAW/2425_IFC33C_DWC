/*
12. Check if a string is a palindrome
A palindrome is a word, phrase, number,
or other sequences of characters that reads the same forward and backward
(like the words “kayak,” “mom,” “radar,” and “refer”).
Create a function that takes a string as input and returns a Boolean
indicating whether the string is a palindrome.
Test your function with different strings to ensure it works correctly.
*/

function isPalindrome(input){
    input = input.toLowerCase();
    let isPalindrome = true;
    for (let current = 0; current < input.length / 2; current++){
        if (input[current] != input[input.length - 1 - current]){
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}

let palabras = ["Ivi", "Tomeu", "kayak", "Helen", "radar", "Yuk", "refer", "mom", "dad", "agua"];

for (let palabra of palabras){
    if (isPalindrome(palabra)) {
        console.log(palabra + " es un palindromo");
    }
    else {
        console.log(palabra + " no es palindromo");
    }
}