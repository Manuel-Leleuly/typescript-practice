type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
): Combinable => {
  let result: Combinable;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;

  // if (resultConversion === "as-number") return +result;
  // return result.toString();
};

const combinedAges = combine(20, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
