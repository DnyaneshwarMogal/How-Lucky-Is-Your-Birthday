const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const btn = document.querySelector("#btn");

function checkLuckyBirthday() {
  const birthDate = dateOfBirth.value;
  const sum = calculateSum(birthDate);
  console.log(sum);
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
