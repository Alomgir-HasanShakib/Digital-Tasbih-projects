const subhanAllahDisplay = document.getElementById("subhanAllahDisplay");
const subhanAllahIncrimentBtn = document.getElementById(
  "subhanAllahIncrimentBtn"
);
const subhanAllahDecrimentBtn = document.getElementById(
  "subhanAllahDecrimentBtn"
);
const alhamdulillahDisplay = document.getElementById("alhamdulillahDisplay");
const alhamdulillahIncrimentBtn = document.getElementById(
  "alhamdulillahIncrimentBtn"
);
const alhamdulillahDecrimentBtn = document.getElementById(
  "alhamdulillahDecrimentBtn"
);
const allahAkberDisplay = document.getElementById("allahAkberDisplay");
const allahAkberIncrimentBtn = document.getElementById(
  "allahAkberIncrimentBtn"
);
const allahAkberDecrimentBtn = document.getElementById(
  "allahAkberDecrimentBtn"
);
const resetBtn = document.getElementById("resetBtn");

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuAkbarInitialValue = 0;

subhanAllahIncrimentBtn.addEventListener("click", function () {
  if (subhanAllahInitialValue === 33) {
    return alert(`You have complete the subhanAllah tasbih`);
  }
  subhanAllahInitialValue += 1;
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
});

subhanAllahDecrimentBtn.addEventListener("click", function () {
  if (subhanAllahInitialValue === 0) {
    return alert(`You can't count nagetive numbers`);
  }
  subhanAllahInitialValue -= 1;
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
});

alhamdulillahIncrimentBtn.addEventListener("click", function () {
  if (alhamdulillahInitialValue === 33) {
    return alert("You have complete your tasbih");
  }
  alhamdulillahInitialValue += 1;
  alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});
alhamdulillahDecrimentBtn.addEventListener("click", function () {
  if (alhamdulillahInitialValue === 0) {
    return alert(`You can't count nagetive numbers`);
  }
  alhamdulillahInitialValue -= 1;
  alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});

allahAkberIncrimentBtn.addEventListener("click", function () {
  if (allahuAkbarInitialValue === 33) {
    return alert("You have complete your tasbih");
  }
  allahuAkbarInitialValue += 1;
  allahAkberDisplay.innerText = allahuAkbarInitialValue;
});
allahAkberDecrimentBtn.addEventListener("click", function () {
  if (allahuAkbarInitialValue === 0) {
    return alert(`You can't count nagetive numbers`);
  }
  allahuAkbarInitialValue -= 1;
  allahAkberDisplay.innerText = allahuAkbarInitialValue;
});

resetBtn.addEventListener("click", function () {
  subhanAllahDisplay.innerText = 0;
  alhamdulillahDisplay.innerText = 0;
  allahAkberDisplay.innerText = 0;
  subhanAllahInitialValue = 0;
  alhamdulillahInitialValue = 0;
  allahuAkbarInitialValue = 0;
});
