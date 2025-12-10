// 21️⃣ Function to count vowels in a string.

function countVowels(str) {
    let count = 0 ;
    let Vowels  = "aeiouAEIOU"
    for(let i = 0 ; i<str.length ; i++){
    if(Vowels.includes(str[i])){
        count++
    }
    }
    return count   ;
}

console.log(countVowels("JavaScript"))


// Inverse Camel Case

function InverseCamel(str){
    let result = "";

    for(let i = 0; i < str.length; i++){
        let ch = str[i];
        if(ch >= "A" && ch <= "Z"){
            // Convert uppercase to lowercase
            result += ch.toLowerCase();
        } else if(ch >= "a" && ch <= "z"){
            // Convert lowercase to uppercase
            result += ch.toUpperCase();
        } else {
            // Non-alphabet characters remain same
            result += ch;
        }
    }

    return result;
}

// Example:
console.log(InverseCamel("IAmAJavaProgrammer")); 

 