for (let i = 1; i <= 100; i++){
  let divisors = 0;
  for (let x = 1; x <= i; x++){
    if (divisors > 2){
      break;
    } else if (i % x === 0){
      divisors++;
    }
  }
  
  if (divisors === 2 && i % 3 === 0){
    console.log("Prime Fizz");
  } else if (divisors === 2 && i % 5 === 0){
    console.log("Prime Buzz");
  } else if (divisors === 2){
    console.log("Prime");
  } else if (i % 3 === 0){
    console.log("Fizz");
  } else if (i % 5 === 0){
    console.log("Buzz");
  } else{
    console.log(i);
  }
}
