// This function clear all the values
function clearScreen() {
  document.getElementById("result").value = "";
}

// This function display values
function display(value) {
  document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}

//This function multiplies value by 2
function calculate_x2() {
  var x = document.getElementById("result").value;
  var x2 = x * 2;
  document.getElementById("result").value = x2;
}

//This Function Inverts the sign of symbol
function calculate_neg() {
  var x = document.getElementById("result").value;
  var x2 = -1 * x;
  document.getElementById("result").value = x2;
}
// Function Divides 1 by the given number
function calculate_div() {
  let given_number = Number(document.getElementById("result").value);
  let result = 1 / given_number;
  document.getElementById("result").value = result;
}
// Function saves the value in memory
let mem_value;
function memory_save() {
  mem_value = Number(document.getElementById("result").value);
}
// Function Adds the value in the value stored in register
function memory_add() {
  mem_value += Number(document.getElementById("result").value);

  console.log(mem_value);
}
function memory_return() {
  document.getElementById("result").value = mem_value;
}
