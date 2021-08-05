const db = require('../models/users.model');
const {sendOrderConfirmation} = require("../mail");

function getAllOrders(req, res) {
    db.select("*")
      .from("order")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.status(400).json({ error: "Unable to get products" + err }));
}

function insertOrder(req, res) {    
    const {
        first_name,
        last_name,
        address,
        city,
        postal,
        state,
        phone,
        userCtx,
        cartCtx,
    } = req.body;
    
    db.transaction((trx) => {
        trx
          .insert({
            order_user_id: userCtx.id,
            order_price: cartCtx.cartTotal,
            order_products: cartCtx,
            order_date: new Date()
          })
          .into("order")
          .returning("order_id")
          
          .then((response)=> response.length ? res.json({order: response[0]}) : res.status(400).json({error: "failed"}))           
          .then(trx.commit)
          .catch((err)=> res.status(400).json({error: "failed"}))
          .catch(trx.rollback)
      }).catch((err) => console.log(err));
}

function getOrdersByUser(req, res) {
    const { id } = req.params

    db.select('*')
    .from('order')
    .where("order_user_id", id)
    .then((orders) => {
        orders.length ? res.json(orders) : res.json({ error: "Not found" });
      })
      .catch((err) => res.status(400).json({ error: "Error getting orders"}));
}

function sendOrderConf(req, res) {
    const { user, cart, orderId } = req.body;
  
    sendOrderConfirmation(user, cart, orderId, function (err, data) {
      if (err) {
        res.status(500).json({ message: "Internal Error", err: err });
      } else {
        res.status(200).json({ message: "Su mensaje ha sido enviado!", data: data });
      }
    });
}

module.exports = {
    getAllOrders,
    insertOrder,
    getOrdersByUser,
    sendOrderConf
}
