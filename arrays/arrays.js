// let superHeros = ["spiderman","xmen","hamed","batman","flash","iron-man","doaa"];
// // console.log(superHeros);
// // superHeros.unshift("hisham");
// // // superHeros.splice(1,2,"Hisham","tariq");
// // console.log(superHeros);
// // console.log(superHeros.includes("Hisham".toLowerCase()))

// for (let index = 0; index < superHeros.length; index++) {
//     console.log(superHeros[index]);
    
// }
let numbers = [1,2,3,4,5];

function sum(arr) {

    let sum =0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
        
    }
    console.log(sum);

    
}

sum(numbers);

function product(arr) {

    let product =1;
    for (let index = 0; index < arr.length; index++) {
        product *= arr[index];
        
    }
    console.log(product);

    
}
product(numbers);


