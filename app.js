const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const btn = document.querySelector("#btn");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "Your birthday is lucky 🚀";
  } else {
    outputBox.innerText = "Your birthday is not lucky 🤒";
  }
}

function checkLuckyBirthday() {
  const birthDate = dateOfBirth.value;
  const sum = calculateSum(birthDate);
  if (sum && birthDate) compareValues(sum, luckyNumber.value);
  else outputBox.innerText = "Please enter both the fields 😡";
}

function calculateSum(birthDate) {
  birthDate = birthDate.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < birthDate.length; index++) {
    sum = sum + Number(birthDate.charAt(index));
  }
  return sum;
}

btn.addEventListener("click", checkLuckyBirthday);
