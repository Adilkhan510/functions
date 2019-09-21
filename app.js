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