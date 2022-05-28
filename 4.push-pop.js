 
 // array টির মধ্যে নতুন element add করা হয়েছে অর্থাৎ push 
 let lastBench = ['soumik', 'sandip', 'shivam', 'shiba', 'rahul', 78, 85]; 
 lastBench.push('sourav');
 lastBench.push('suvankar')
 lastBench.push(56)
 console.log(lastBench)

 // array টির মধ্যে old element delete করা হয়েছে অর্থাৎ pop
 let lastBench1 = ['soumik', 'sandip', 'shivam', 'shiba', 'rahul', 78, 85];
 lastBench1.pop();
 let popElement = lastBench1.pop()
 console.log(popElement)//show the last delete element
 console.log(lastBench1);
 
 //H/W => How javaScript remove first item from an array?
 //H/W => How javaScript add item to an array in the beginning?

// [
// Summary: push => array টির last এ element add  করবে,
//          pop => array টির last  element delete করবে।
// ]