let iceCreamPrice = 100;
let biriyaniPrice = 150;
let friedRisePrice = 120;
let myBudget = 200;
let fresh = false;

//Normal Condotion :
if(iceCreamPrice < myBudget){
    console.log('I want to ice-cream ')
}
else if(iceCreamPrice < myBudget){
    console.log('I want to biriyani ')
}
else if(iceCreamPrice < myBudget){
    console.log('I want to fried-rice ')
}
else{
    console.log('I want to fresh Air ')
}

//Nested Condotion: Nested Condotion মানে শর্তের ভিতরে শর্ত 

if(iceCreamPrice < myBudget){
    if(fresh == true){
        console.log('I want to ice-cream ')
    }
    else{
        console.log('I do not want to ice-cream ')
    }
}
