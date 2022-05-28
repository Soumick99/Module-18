let gotJob = true;
let moneySaved = 150000;
let hasFlat = false;

// যখন দুটি শর্তের মধ্যে দুটিই পূরণ করা হয় । 
 if(gotJob == true && moneySaved > 200000){
     console.log('Yes u are  accepted to marry my daughter');
 }
 // যখন দুটি শর্তের মধ্যে যেকোনো একটি পূরণ করা হয় । 
 else if(gotJob == true || moneySaved > 200000){
     console.log('Then ok');
 }
 // যখন তিনটি শর্তের মধ্যে প্রথম দুটি অথবা তৃতীয় টি পূরণ করা হয় । 
 else if((gotJob == true && moneySaved > 200000 )|| hasFlat == false){
     console.log('date final');
 }
 // যখন তিনটি  শর্তের মধ্যে তিনটিই পূরণ করা হয় । 
 else if(gotJob == true && moneySaved > 200000 && hasFlat == true){
     console.log('Yes u are already accepted to marry my daughter');
 }
 // যখন কোন শর্তই পূরণ করা হয় না । 
 else{
     console.log('U are not accepted')
 }