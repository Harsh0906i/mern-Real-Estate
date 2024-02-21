require('dotenv').config({ path: '.env' });
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserRouter = require('./routes/User');
const AuthRouter = require('./routes/auth');
const bodyParser = require('body-parser');
const ListingRoute = require('./routes/listing');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/api/user', UserRouter);
app.use('/api/auth', AuthRouter);
app.use('/api/listing', ListingRoute);
app.use((err, req, res, next) => {
    const statuscode = err.statusCode || 500;
    const message = err.message || 'Internal server error'
    return res.status(statuscode).json({
        success: false,
        statuscode,
        message
    });
});

main()
    .then(() => {
        console.log("success");
    }).catch((err) => {
        console.log(err);
    });
async function main() {
    await mongoose.connect(process.env.MONGO2);
};

app.post('/signup', (req, res) => {
    console.log(req.body)
});

app.listen(8080, () => {
    console.log('Running on port 8080');
});