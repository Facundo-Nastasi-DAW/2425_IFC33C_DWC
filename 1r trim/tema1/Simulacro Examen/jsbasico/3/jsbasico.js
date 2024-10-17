const button = document.querySelector("button");

button.onclick = function() {
    let input = document.querySelector("input");
    document.querySelector("text").innerHTML = esAnagrama(input.value);
    input.value = "";
}

function isAnagram(input){
    input = input.replace(" ", "");
    const abc = new Array(27).fill(0);
    for(letter of input){
        abc[letter.codePointAt(0)]++;
    }

    let anagram = true;
    for(value of abc){
        console.log(value);
        if (value % 2 == 1) anagram = false
    }

    if (anagram) return "Es un anagrama!";
    return "No es un anagrama.";
}

function esAnagrama(input1, input2){
    input1 = input1.split("").sort().join("");
    input2 = input2.split("").sort().join("");
    return input1 === input2;
}