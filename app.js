// What is the difference between a parameter and an argument?
// Within a function, what is the difference between return and console.log?
// What are the implications of the ability of a function to return a value?

//  1.parameter is used to when a function is being created and argument is what we put into the place of a parameter when running the function
// 2. return allows us to assign a variable to the value that was obtained throught the return function; while console.log just shows us the value.
// 3. we can assign the value to variables and use them.



// Write a function checkPalindrome that accepts a single argument, a string. Yes, you've done it before, but do it again. Later in this assignment we're gonna beef up our palindrome function some. See if you can do it without looking back at your previous answer. The function should return true if the string is a palindrome, false if not. Make sure your function will give the correct answer for words with capital letters.

checkPalindrome = (string) => {
    let reverseString = string.split("").reverse("").join("");
    if(string === reverseString){
        return true; 
    }
    
}

console.log(checkPalindrome("TENET"));

// DIGIT SUM 
digitSum = (num)=>{
    num1= num.toString('').split('');
    for(i=0; i<num1.length; i++) {
        num1 += num[i];
    } 

}
digitSum(20);

let num2 = 22;
let string1 = num2.split('')

console.log(string1); 

numSplit = (number) => {
    let num = number;
    let sum = null;
    let arr = number.toString("10").split("");
    for(let i=0; i<arr.length; i++) {
        arr[i] = parseInt(arr[i]);
        sum += arr[i]; 
    } return sum

};
console.log(numSplit(42))

//  Pythogoras 
pythogoras = (sideA, sideB) => {
    sideC = (Math.pow(sideA,2) + Math.pow(sideB,2));
    return sideC;
};
console.log(pythogoras(4,6)); 

// Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. Do not use .reduce().

sumArray = (array) => {
    let sum= null;
    for(i=0; i<array.length; i++) {
        sum += parseInt(array[i]);
    } return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.

checkPrime = (num) => {
    for (let i = 2; i<= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        } 
    } return true;
}

console.log(checkPrime(9)) 