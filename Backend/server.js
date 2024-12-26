require('dotenv').config();
const express = require('express');
const dbConnect = require('./src/utils/dbConnect.js');
const responseHandler = require('./src/middlewares/responseHandler.js');
const cors = require('./src/middlewares/cors.js');
const logger = require('./src/middlewares/logger.js');
const app = express();

app.use(express.json());
app.use(cors);
app.use(logger);
app.use(responseHandler);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    dbConnect();
    console.log(`Server Running at Port ${port}`);
});
