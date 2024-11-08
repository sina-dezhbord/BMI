let formBmi = document.querySelector(".form");
let title = document.querySelector(".box1");
let btnSub = document.querySelector(".button1");
let btnRef = document.querySelector(".button2");
let inputName = document.querySelector("#name");
let inputVazn = document.querySelector("#vazn");
let inputGad = document.querySelector("#ghad");
let radioMan = document.querySelector("#man");
let radioWoman = document.querySelector("#woman");
let afterInfo = document.querySelector(".afterinfo");
let imgArrow = document.querySelector(".arrow");
let finalText = document.querySelector(".finaltext");
let state;
let gender;
let bmi;


inputName.addEventListener("click", function () {
  inputName.value = "";
});
inputVazn.addEventListener("click", function () {
  inputVazn.value = "";
});
inputGad.addEventListener("click", function () {
  inputGad.value = "";
});

btnSub.addEventListener("click", function () {
  if (inputName.value.length >= 3 && inputGad.value > 20 && inputVazn.value.length > 1) {
    if (radioMan.checked == true || radioWoman.checked == true) {
        let gender;
        if (radioMan.checked) {
          gender = "آقای";
        } else  {
          gender = "خانم";
        }
        
      formBmi.classList.remove("d-flex");
      formBmi.classList.add("d-none");
      title.classList.add("d-none");
      title.classList.remove("d-flex");
      afterInfo.classList.remove("d-none");
      afterInfo.classList.add("d-flex");
      finalText.classList.remove("d-none");
      finalText.classList.add("d-flex");
      myBmi();
      finalText.innerHTML = `${gender} ${inputName.value} BMI شما:${Number(
        bmi
      )} عه این یعنی شما ${state}`;
    } else {
      alert("جنسیت را انتخاب کنید");
    }
  } else {
    alert(`لطفا آیتم های خالی را با دقت پر کنید(نام و قد و وزن)`);
  }
});
btnRef.addEventListener("click", function () {
  inputName.value = "";
  inputVazn.value = "";
  inputGad.value = "";
  radioMan.checked = false;
  radioWoman.checked = false;
});

function myBmi() {
  bmi = Math.ceil((inputVazn.value / inputGad.value ** 2) * 100000);
  bmi = bmi / 10;
  if (bmi < 16.0) {
    imgArrow.classList.add("areaone");
    state = " لاغری مفرط داری";
  } else if (16.0 <= bmi && bmi < 18.4) {
    imgArrow.classList.add("areatwo");
    state = "لاغری";
  } else if (18.5 <= bmi && bmi < 24.9) {
    imgArrow.classList.add("areathree");
    state = "سالمی";
  } else if (25.0 <= bmi && bmi < 29.9) {
    imgArrow.classList.add("areafour");
    state = "اضافه وزن داری";
  } else if (30.0 <= bmi && bmi < 34.9) {
    imgArrow.classList.add("areafive");
    state = "اضافه وزن زیاد داری";
  } else if (35.0 <= bmi && bmi < 39.9) {
    imgArrow.classList.add("areasix");
    state = "اضافه وزن مفرط داری";
  } else if (40.0 <= bmi) {
    imgArrow.classList.add("areaseven");
    state = "اضافه وزن مرگ بار داری";
  }
  return bmi;
}

