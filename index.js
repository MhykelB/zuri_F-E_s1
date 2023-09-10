const weekDay = document.querySelector(".day");
const utcTime = document.querySelector(".time");

const weekDays = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};
weekDay.textContent = weekDays[new Date().getDay()];
setInterval(() => {
  utcTime.textContent = Date.now();
}, 1000);
