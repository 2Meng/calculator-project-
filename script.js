const numberBox = document.getElementById("numberbox");
let input = "";

function displayNumber(num) {
  input += num;
  numberBox.value = input;
  console.log(input);
}

function clearDisplay() {
  input = "";
  numberBox.value = "";
}

function calculateTotal() {
  try {
    let result = eval(input);
    numberBox.value = result;
    input = result.toString();
  } catch (error) {
    numberBox.value = "Error";
    input = "";
  }
}
