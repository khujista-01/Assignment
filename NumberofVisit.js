const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

function getCurrentDateTime(date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const month = months[date.getMonth()];
    const day = days[date.getDay()];
    const dayNum = date.getDate();
    const hours = ('0' + date.getHours()).slice(-2); // Ensure two digits
    const minutes = ('0' + date.getMinutes()).slice(-2); // Ensure two digits
    const seconds = ('0' + date.getSeconds()).slice(-2); // Ensure two digits
    const timeZone = 'EST'; 
    const year = date.getFullYear();

    return `${day} ${donth} ${dayNum} ${hours}:${minutes}:${seconds} ${timeZone} ${year}`;
}
app.get('/', (req, res) => {
  let visits = req.cookies.visits || 0;
  visits++;
  let isFirstVisit = visits === 1;
  let visitDate = new Date().toString();

  res.cookie('visits', visits);

  let response = '';
  if (isFirstVisit) {
    response = 'Welcome to my webpage! It is your first time that you are here.';
  } else {
    response = `Hello, this is the ${visits} time that you are visiting my webpage.<br>Last time you visited my webpage on: ${visitDate}`;
  }

  res.send(response);
});

const PORT = 5010;
app.listen(PORT, () => {
    console.log(`Server running at http://soen287.encs.concordia.ca:${PORT}`);
});