function fizz() {
  for (var n = 1; n <= 100; n++) {
    var result = "";
    if (n % 3 === 0)
      result += "Fizz";
    if (n % 5 === 0)
      result += "Buzz";
    console.log(result || n);
  }
}

fizz();

