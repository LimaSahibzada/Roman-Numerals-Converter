document.getElementById("convert-btn").addEventListener("click", function() {
    const numberInput = document.getElementById("number").value;
    const output = document.getElementById("output");
  
    if (numberInput === "") {
      output.textContent = "Please enter a valid number";
      return;
    }
  
    const number = parseInt(numberInput);
  
    if (number < 1) {
      output.textContent = "Please enter a number greater than or equal to 1";
    } else if (number >= 4000) {
      output.textContent = "Please enter a number less than or equal to 3999";
    } else {
      output.textContent = convertToRoman(number);
    }
  });