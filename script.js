// people input-
let totalBill = 1;
let totalPeople = 1;
let isGiveTip = false;
let isTipClick = false;
let rate = 0;
let totalTips = 0;
let tipButtonElement;
const tipElement = document.getElementById("tip-amount");
const totalPeopleElement = document.getElementById("total-poeple");

// input functionality-
const startInput = (getElement) => {
  const getValue = parseInt(getElement.value);
  totalPeopleElement.innerText = getValue;
  if (getElement.name == "bill") {
    tipElement.innerText = parseInt(totalTips / totalPeople);
    return (totalBill = getValue);
  } else if (getElement.name == "people") {
    tipElement.innerText = parseInt(totalTips / totalPeople);
    return (totalPeople = getValue);
  }
};

function peopleInput(id) {
  document.getElementById(id).addEventListener("input", (event) => {
    startInput(event.target);
    tipElement.innerText = parseInt(totalTips / totalPeople);
    totalPeopleElement.innerText = parseInt(totalBill / totalPeople);
    totalBill = totalBill / totalPeople;
    // console.log(totalBill, totalPeople);
    if (isTipClick == true) {
      let resultTips = tipsAmount();
      console.log(resultTips);
      isTipClick == false;
    }
    isGiveTip = true;
    TipButtons();
  });
}
peopleInput("bill-input");
peopleInput("people-input");

// tips rate functionality common function-

const tipsAmount = () => {
  totalTips = (totalBill * rate) / 100;
  // tipElement.innerText = tipsMoney;
  // tipButtonElement.setAttribute("disabled", true);
  // console.log(totalBill);
  return totalTips;
};

// select tip functionality-
const TipButtons = () => {
  document.getElementById("tipBtn-box").addEventListener("click", (event) => {
    isTipClick = true;
    const tipButtonInnerText = event.target.innerText;
    tipButtonElement = event.target;
    if (isGiveTip) {
      if (tipButtonInnerText == "5%") {
        rate = 5;
        tipsAmount();
        tipElement.innerText = totalTips;
        totalPeopleElement.innerText = totalBill + totalTips;
        console.log(totalTips);
      } else if (tipButtonInnerText == "10%") {
        rate = 10;
        tipsAmount();
        tipElement.innerText = totalTips;
        totalPeopleElement.innerText = totalBill + totalTips;
        console.log(totalTips);
      } else if (tipButtonInnerText == "15%") {
        rate = 15;
        tipsAmount();
        tipElement.innerText = totalTips;
        totalPeopleElement.innerText = totalBill + totalTips;
        console.log(totalTips);
      } else if (tipButtonInnerText == "25%") {
        rate = 25;
        tipsAmount();
        tipElement.innerText = totalTips;
        totalPeopleElement.innerText = totalBill + totalTips;
        console.log(totalTips);
      } else if (tipButtonInnerText == "50%") {
        rate = 50;
        tipsAmount();
        tipElement.innerText = totalTips;
        totalPeopleElement.innerText = totalBill + totalTips;
        console.log(totalTips);
      }
    } else {
      console.log("plese input your bill first!");
    }
  });
};
