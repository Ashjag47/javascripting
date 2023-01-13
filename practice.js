function prime(p) {
    for(let i=2; i<2; i++){
        if(p%i==0){
            return 0
        }
    }
    return 1
  }

function amstrong(number){
    const numberOfDigits = number.toString().length;
     let sum = 0;


let temp = number;

while (temp > 0) {

    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    
    temp = parseInt(temp / 10); 
}

if (sum == number) {
    return 1
}
else {
    return 0
}
}

let n=153

if (prime(n) && amstrong(n)){
    console.log("number is prime and it is amstrong number")
}