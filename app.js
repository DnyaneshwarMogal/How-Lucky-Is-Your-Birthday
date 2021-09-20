const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

const alertCloseIcon = document.querySelector("#crossIcon");
const alertBoxDiv = document.querySelector("#alertBox");

alertCloseIcon.addEventListener("click", (e) => {
  alertBoxDiv.style.display = "none";
});

btn.addEventListener("click", checkLuckyBirthday);

const imgHappy = document.createElement("img");
imgHappy.src = "/images/happy.jpg";
const imgSad = document.createElement("img");
imgSad.src = "/images/sad.jpg";
const imgAngry = document.createElement("img");
imgAngry.src = "/images/angry.jpg";

function compareValues(sum, luckyNumber) {
  if (luckyNumber === "") {
    output.innerHTML = "Please Enter Lucky Number 😡<br><br>";
    document.querySelector("#output").appendChild(imgAngry);
  } else if (sum % luckyNumber === 0) {
    output.innerHTML = "Your birthday is lucky 🚀<br><br>";
    document.querySelector("#output").appendChild(imgHappy);
  } else {
    output.innerHTML = "Your birthday is not lucky 🤒<br><br>";
    document.querySelector("#output").appendChild(imgSad);
  }
}

function checkLuckyBirthday() {
  const birthDate = dateOfBirth.value;
  const sum = calculateSum(birthDate);
  if (sum && birthDate) {
    compareValues(sum, luckyNumber.value);
  } else {
    output.innerHTML = "Please enter BirthDate 😡<br><br>";
    document.querySelector("#output").appendChild(imgAngry);
  }
}

function calculateSum(birthDate) {
  birthDate = birthDate.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < birthDate.length; index++) {
    sum = sum + Number(birthDate.charAt(index));
  }
  return sum;
}
