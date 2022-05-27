const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const time = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  // const second = String(date.getSeconds()).padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");
  // let second;
  // if (date.getSeconds() < 10) {
  //   second = "0" + date.getSeconds();
  // } else {
  //   second = date.getSeconds();
  // }

  clock.innerText = `${year} ${month} ${day} ${time}:${minute}:${second}`;
}
getClock();
setInterval(getClock, 1000);
