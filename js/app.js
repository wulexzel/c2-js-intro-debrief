let myNumber = 25;
if (typeof myNumber !== 'number') {
  console.log('This is not a number')
} else if (myNumber%3 == 0){
    console.log('Gen')
}else if (myNumber%5 == 0){
    console.log('Buzz')
}else if (myNumber%15 == 0){
    console.log('GenBuzz')
}else {
    console.log('myNumber')
}


// E-Commerce Item List
let storeItem = 'shoes'; 
 
switch (storeItem) {
    case shoes:
        console.log('Shoes are $50');
        break;
    case Jeans:
        console.log('Jeans are $25');
    case Hat:
        console.log('Hat are $25');
    case Socks:
        console.log('Socks are $2');
    default:
        console.log('Invalid item');
    break;
}

//random integer (whole number)
let min = 50:
let max = 100:
    console.log(Math.floor(Math.random()* (max - min) + min;
  
  