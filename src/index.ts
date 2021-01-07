const num : number = +process.argv[2];
console.log(fizzbuzz(num));

function fizzbuzz(num:number) : string {
  if (num % 15 == 0) {
    return "fizzbuzz";
  } else if (num % 3 == 0) {
    return "buzz";
  } else if (num % 5 == 0) {
    return "fizz";
  }
  return num.toString()
}
