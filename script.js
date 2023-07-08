document.addEventListener("click", (e) => {
  //create span for snowflake
  var snowflake = document.createElement("span");
  snowflake.classList.add("snowflake");

  //set position of snowflake to mouse pointer's position
  snowflake.style.left = e.offsetX + "px";
  snowflake.style.top = e.offsetY + "px";

  //select random number between 20 and 100
  var size = Math.random() * (100 - 20 + 1) + 20;

  //set width and height
  snowflake.style.width = size + "px";
  snowflake.style.height = size + "px";
  document.body.appendChild(snowflake);
  setTimeout(() => {
    snowflake.remove();
  }, 1000);
});
let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let endDate = new Date(2023, 6, 17, 23, 59); // July is represented by 6 (0-indexed month)
let endTime = endDate.getTime();


function countdown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  if (endTime < todayTime) {
    clearInterval(i);
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1>Countdown Has Expired</h1>`;
  } else {
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}

let i = setInterval(countdown, 1000);
countdown();
