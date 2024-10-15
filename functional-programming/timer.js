setInterval(logTime, 1000);

function logTime() {
  const time = getTime();

  console.clear();
  console.log(time);
}

function getTime() {
  const date = new Date();

  let time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM",
  };

  if (time.hours == 12) {
    time.ampm = "PM";
  } else if (time.hours > 12) {
    time.ampm = "PM";
    time.hours -= 12;
  }

  if (time.hours < 10) {
    time.hours = time.hours.toString().padStart(2, "0");
  }

  if (time.minutes < 10) {
    time.minutes = time.minutes.toString().padStart(2, "0");
  }

  if (time.seconds < 10) {
    time.seconds = time.seconds.toString().padStart(2, "0");
  }

  return `${time.hours}:${time.minutes}:${time.seconds} ${time.ampm}`;
}
