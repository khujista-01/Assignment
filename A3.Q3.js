const express = require('express');
const path = require('path');
const port = 5010;
const app = express();
app.use(
  express.json(),
  express.urlencoded({
    extended: true,
  }));
app.use(express.static(path.join(__dirname, 'public')));
function validateNumber(string){
    var pattern = /^\d{3}-\d{3}-\d{4}$/
    var matches = string.match(pattern);
    message= ""
    if(matches){
        message = "You've entered a CORRECT phone number.";
    }else{
        message = "You've entered an INCORRECT phone number.";
    }
    return message;
}
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public','exercise3.html'));
});
app.post('/validateNumber', (req,res) =>{
    const {phoneNumber} = req.body;
    const result = validateNumber(phoneNumber);
    res.json({result});
})
app.listen(port, () => {
    console.log(`Server is listening on http://soen287.encs.concordia.ca:${port}/`);
});