const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function getValues() {
  console.log(dateOfBirth.value, luckyNumber.value);
});
