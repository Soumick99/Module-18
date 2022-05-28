
let myAge = 23;
let yourAge = 25;

console.log(myAge < yourAge);  // myAge ছোট কিনা ? && true
console.log(myAge > yourAge);  // myAge বড় কিনা ? && false
console.log(myAge == yourAge); //সমান কিনা ? && false
console.log(myAge != yourAge); //myAge and yourAge অসমান কিনা? && true

// যখন দুটি শর্তের মধ্যে যেকোনো একটি পূরণ করা হয় । 
let Marriage1 = myAge<yourAge || myAge == yourAge
console.log(Marriage1)  //true

// যখন দুটি শর্তের মধ্যে দুটিই পূরণ করা হয় । 
let Marriage2 = myAge<yourAge && myAge == yourAge
console.log(Marriage2)  //false

//[Summary: console.log এ  ture and false গুলি  হল  output]