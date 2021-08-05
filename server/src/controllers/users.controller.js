const db = require('../models/users.model');
const bcrypt = require("bcryptjs");

function getUsers(req, res) {
    db.select("*")
      .from("users")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.status(400).json({ error: "Unable to get users" + err}));
}

function loginUser(req, res) {
    db.select("email", "hash")
      .from("login")
      .where("email", req.body.email)
      .then((data) => {
        const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
        isValid
          ? db
              .select("*")
              .from("users")
              .where("email", req.body.email)
              .then((user) => {
                res.json(user[0]);
              })
              .catch((err) => res.status(400).json({ error: "Unable to get user"}))
          : res.status(400).json({ error: "Nombre de usuario y/o contraseña incorrecta" });
      })
      .catch((err) => res.status(400).json({ error: "Nombre de usuario y/o contraseña incorrecta"}));
}

function registerUser(req, res) {
  
    if (!req.body) {
      return res.status(400).json({error: "Unable to register"})
    }
  
    const {
      email,
      first_name,
      last_name,
      password,
      address,
      city,
      postal,
      state,
      phone,
      country,
    } = req.body;
  
    const hash = bcrypt.hashSync(password);

  
    db.transaction((trx) => {
      trx
        .insert({
          hash: hash,
          email: email,
        })
        .into("login")
        .returning("email")
        .then((loginEmail) => {
          return trx("users")
            .returning("*")
            .insert({
              first_name: first_name,
              last_name: last_name,
              email: loginEmail[0],
              address: address,
              city: city,
              postal: postal,
              country: country,
              state: state,
              phone: phone,
              joined: new Date(),
            })
            .then((user) => {
              res.json(user[0]);
            });
        })
        .then(trx.commit)
        .catch(trx.rollback);
    }).catch((err) => res.status(400).json({ error: "unable to register" + err}));
}



module.exports = {
    getUsers,
    loginUser,
    registerUser,

}