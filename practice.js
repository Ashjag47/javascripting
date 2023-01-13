const isPrime = (n) => {
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i==0){
            return false
        }
    }
    return true
}


const isArmstrong = (number) => {
const numberOfDigits = number.toString().length;
let sum = 0;
let temp = number;

while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numberOfDigits;
    temp = parseInt(temp / 10); 
}

if (sum == number) {
    return true
}
else {
    return false
}
}


let n=153

if (isPrime(n)){
    console.log("number is prime ")
}
else{
    console.log("number is not a prime ")
}
if (isArmstrong(n)){
    console.log("number is Armstrong")
}
else{
    console.log("number is not Armstrong ")
}