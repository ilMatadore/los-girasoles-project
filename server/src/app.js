const express = require("express");
const helmet = require("helmet");
require('dotenv').config();
const path = require('path');

// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const db = require('./models/users.model');
// const bcrypt = require("bcryptjs");
const cookieSession = require('cookie-session');

const userRouter = require('./routes/users.router');
const profileRouter = require('./routes/profile.router');
const contactRouter = require('./routes/contact.router');
const productRouter = require('./routes/product.router');
const orderRouter = require('./routes/order.router');

const cors = require("cors");
const morgan = require('morgan');
// const serverless = require("serverless-http");
// const PORT = 3001;

// const strategyConfig = {
//         usernameField: 'email',
//         passwordField: 'pass' 
// }

// const verifyCallBack = (username, password, done) => {
//     return db.select("email", "hash")
//     .from("login")
//     .where("email", username)
//     .then((data) => {
//       const isValid = bcrypt.compareSync(password, data[0].hash);
//       isValid
//         ? db
//             .select("*")
//             .from("users")
//             .where("email", username)
//             .then((user) => {
//                 console.log(user)
//                 done(null,user)
//             })
//             .catch((err) => {
//                 console.log("/login: " + err);
//                 return done(null, false, {message:'Wrong user name or password'});
//               })
//             : done(null, { error: "Nombre de usuario y/o contraseña incorrecta" }) })
    
// }

// passport.use(new LocalStrategy(strategyConfig, verifyCallBack))

const app = express();
app.use(helmet());

app.use(cookieSession({
    name: 'session',
    maxAge: 60 * 60 * 1000,
    keys: [ process.env.COOKIE_KEY_1, process.env.COOKIE_KEY_2 ]
}));

// app.use(passport.initialize());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

app.use('/user', userRouter);
app.use('/profile', profileRouter);
app.use('/contact', contactRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);

// app.listen(PORT, () => {
//   console.log(`app is running on port ${PORT}`);
// });

module.exports = app;
