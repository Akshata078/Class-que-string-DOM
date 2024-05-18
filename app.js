// Class Questions - 
// 1 . Given a sentence, capitalize the first character of each word.
// 	input - this is javascript
// 	output - This Is JavaScript

// function firstCharCapitalize(){
// let sentence = "this is javascript";
// let a = sentence.split(" ");
// // console.log(a);
// for (let i=0; i<a.length; i++){
//     a[i] = a[i][0].toUpperCase() + a[i].substr(1);
// }
// console.log(a.join(" "));
// }
// firstCharCapitalize();




// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
// 	input - ["javascript", "react", "node"]
// 	output - [true, false, false]

// 	input - ["java","python","c"]
// 	output - [false, false, false]


// function containJSOrNot(){
//     let arr =  ["javascript", "react", "node", "Javascript","JAVASCRIPT"];

//     let boolean = [];
//     for (let i=0; i<arr.length; i++){
//          arr[i] = arr[i].toLowerCase();
//         if (arr[i]=="javascript"){
//             boolean[i]=true;~
//         }
//         else{
//             boolean[i]=false;
//         }
//     }
//     console.log(boolean);
// }
// containJSOrNot();




// 3. Given a string which contains an email address, return true if the given email is valid, else return false.
// 	input - puran@navgurukul.org
// 	output - true
	
// 	input - puran@navgurukul
// 	output - false
	
// 	input - puran@gmail.com
// 	output - true

// function validateEmail(){
//     let email = "puran@navgurukul.org";
//     if (email.includes("@") && email.endsWith(".org") || email.endsWith(".com") ){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }
// validateEmail();



// 4. Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
// 	input - below, elbow
// 	output - true

// 	input - night, thing
// 	output - true


// function strAnagramsOrNot(){
// let str1 = "night";
// let str2 = "thgin";
// let p = false;
// for (let i=0; i<str1.length; i++){
//     let j=0; 
//     while ( j<str1.length){
//         if (str1[i]==str2[j]){
//         p = true;
//         break;
//         }
//         else{
//             p=false;
//            j++;
//         }
//     }
//     if(p==false){
//       console.log(false);
//       break;
//     }
// }
// if(p !=false){
//     console.log(true);
// }
// }
// strAnagramsOrNot();


// 5. Reverse the given sentence.
// 	input- i am learning javascript.
// 	output - tpircsavaj gninrael ma i

// function reverseSentence(){
//     let sen = "i am learning javascript";
//     let s = sen.split("");
//     s.reverse();
//     console.log(s.join(""));
// }
// reverseSentence();




// 6. Reveres the given string word by word then return the reversed string.
// 	input - Success comes to those who work hard
// 	output - hard work who those to comes Success


// function reverseStrWords(){
//     let input = "Success comes to those who work hard";
//     let a = input.split(" ").reverse();
//     console.log(a.join(" "));
// }
// reverseStrWords();