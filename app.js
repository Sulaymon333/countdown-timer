const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const expired = document.querySelector(".expired");

const targetDate = new Date("Oct 8, 2023 22:55:00").getTime();

let diff;
const dateManupulator = function () {
  const now = new Date().getTime();
  diff = targetDate - now;
  const daysRemaining = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesRemaining = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secondsRemaining = Math.floor((diff % (1000 * 60)) / 1000);

  const zeroPad = (val) => (val < 10 ? `0${val}` : val);
  day.innerText = zeroPad(daysRemaining);
  hour.innerText = zeroPad(hoursRemaining);
  minute.innerText = zeroPad(minutesRemaining);
  second.innerText = zeroPad(secondsRemaining);
};

const ref = setInterval(() => {
  dateManupulator();
  if (diff < 0) {
    clearInterval(dateManupulator);
    day.innerText = "00";
    hour.innerText = "00";
    minute.innerText = "00";
    second.innerText = "00";
    expired.classList.add("show");
  }
}, 1000);
