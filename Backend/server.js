require('dotenv').config();
const express = require('express');
const dbConnect = require('./src/utils/dbConnect.js');
const app = express();

app.use(express.json());


const port = process.env.PORT || 3000;

app.listen(port, () => {
    dbConnect();
    console.log(`Server Running at Port ${port}`);
});
