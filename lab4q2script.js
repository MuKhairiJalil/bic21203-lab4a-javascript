const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkInput() {
  const rawValue = userInput.value.trim();
  const numValue = Number(rawValue);

  if (rawValue === "" || isNaN(numValue)) {
    result.textContent = "Please enter a valid number!";
  } else if (numValue < 10) {
    result.textContent = "The number is lower than 10";
  } else if (numValue > 10) {
    result.textContent = "The number is higher than 10";
  } else {
    result.textContent = "The number is equal to 10";
  }
}

checkBtn.addEventListener("click", checkInput);