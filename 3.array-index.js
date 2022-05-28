//array এর মধ্যে value গুলি কে কোন position (position means 0 1 2 3 ...etc) এ আছে তা জানার জন্য indexof ইউজ করা হয় । 
let bookPages = ['ami', 'tumi', 'amra', 'tomra', 'ami-tumi'];
let tumiIndex = bookPages.indexOf('tumi')
console.log(tumiIndex);
console.log(bookPages.indexOf('ami'));

let number = [78, 45, 89, 99, 56 ,23]
console.log(number.indexOf(89)) 
console.log(number.indexOf(152))// এর output -1 দেখাবে কারণ array টির মধ্যে 152 value টি নেই । 
 
//----------------------------------------------------------------------

//আবার যদি মনে হয় 1,2 বা 3 number position এ কে আছে তা দেখবো => 
let bookPages1 = ['ami', 'tumi', 'amra', 'tomra', 'ami-tumi'];
let whosPosition = bookPages1[2]
console.log(whosPosition);
console.log(bookPages1[1]);

console.log(bookPages1)
//আবার 4 no. index এ যে আছে তাকে ডিলিট করে নতুন কাউকে আনবো then => 
bookPages1[4] = 'ami2'
console.log(bookPages1)

//----------------------------------------------------------------------