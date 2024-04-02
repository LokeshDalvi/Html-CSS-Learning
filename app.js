let str = "Hello World";

let reverseString = (str) => {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;

    start++;
    end--;
  }

  return str;
};

console.log(reverseString(str)); // Output: "dlroW olleH"

var strs = "Loki"

var rev = strs.split("").reverse().join("")

console.log(rev);