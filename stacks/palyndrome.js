/*
STACKS
*/ 

var letters = [];

var word = "nun";

var rword = "";

// put letters of word into the stack (var letters)
for (var i = 0; i < word.length; i++){
    letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++){
    rword += letters.pop();
}

if (word === rword){
    console.log(`Word: ${word}, is a palyndrome`)
} else {
    console.log(`Word: ${word}, is not palyndrome`)
}
