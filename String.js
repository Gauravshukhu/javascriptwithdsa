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


// methods in string 


// 1- Length
let s = "sheryians"
console.log(s.length)

// 2-Slice
let g = "gaurav"
console.log(g.slice(0,5))// 0 - start , 5-1 = 4 is end
console.log(g.slice(-4,s.length))  // - for taking string from negative side or backside 

//3- substring
let m = "saurabh"
console.log(m.substring(2,5))

console.log(m.substr(2))

//- toUpperCase()

let n = "nikhil"
console.log(n.toUpperCase())


let p = "nikhil"
console.log(p.toUpperCase())


// for the include 
let email = "hfjewhgmailcom"
if(email.includes('@') && email.includes('.')){
    console.log("email is vaild")

}else{
    console.log("email is invalid")
}


 