const db = require('../models/users.model');

function getUserById(req, res) {
    const { id } = req.params;
  
    db.select("*")
      .from("users")
      .where("id", id)
      .then((user) => {
        user.length ? res.json(user[0]) : res.status(400).json({ error: "Not found" });
      })
      .catch((err) => res.status(400).json({ error: "Error getting user"}));
}

function updateUserProfile(req, res) {
    const { id } = req.params;
  
    const {
      first_name,
      last_name,
      address,
      city,
      postal,
      state,
      phone,
      country,
    } = req.body;
  
    db("users")
      .where({ id: id })
      .update({
        first_name: first_name,
        last_name: last_name,
        address: address,
        city: city,
        postal: postal,
        country: country,
        state: state,
        phone: phone,
      })
      .then((user) => {
        user === 1
          ? db
              .select("*")
              .from("users")
              .where("id", id)
              .then((user) => {
                user.length
                  ? res.json(user[0])
                  : res.status(400).json({ error: "Not found" });
              })
          : res.status(400).json({ error: "Not found" });
      })
     .catch((err) => res.status(400).json({ error: "Error getting user"}));
}

module.exports = {
    getUserById,
    updateUserProfile
}