const express = require("express");
const helmet = require("helmet");
const userRouter = require('./routes/users.router');
const profileRouter = require('./routes/profile.router');
const contactRouter = require('./routes/contact.router');

const cors = require("cors");
const morgan = require('morgan');
// const serverless = require("serverless-http");
// const PORT = 3001;

const app = express();
app.use(helmet());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

app.use('/user', userRouter);
app.use('/profile', profileRouter);
app.use('/contact', contactRouter);

// app.listen(PORT, () => {
//   console.log(`app is running on port ${PORT}`);
// });

module.exports = app;
