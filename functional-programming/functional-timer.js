const getSecond = () => 1000;
const getTime = () => new Date();
const clearConsole = () => console.clear();
const log = (message) => console.log(message);

const serializeDate = (date) => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
  ampm: "ampm",
});

const conertDateToCivilianDate = (time) => {
  if (time.hours == 12) {
    time.ampm = "PM";
  } else if (time.hours > 12) {
    time.ampm = "PM";
    time.hours -= 12;
  }
};

const styleDate = (time) => {
  if (time.hours < 10) {
    time.hours = time.hours.toString().padStart(2, "0");
  }

  if (time.minutes < 10) {
    time.minutes = time.minutes.toString().padStart(2, "0");
  }

  if (time.seconds < 10) {
    time.seconds = time.seconds.toString().padStart(2, "0");
  }
};

const getResult = (time) =>
  `${time.hours}:${time.minutes}:${time.seconds} ${time.ampm}`;
