const path = require('path');
const publicPath = path.join(__dirname, '../angular');
console.log(publicPath);
const cors = require('cors');
const express = require('express');
var app = express();
app.use(cors());

app.use("/", express.static(publicPath));


app.use((req, res, next) => {
    res.sendFile(path.join(publicPath, "index.html")); 
});

module.exports = {app};
