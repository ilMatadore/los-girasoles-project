const db = require('../models/users.model');

function getAllProducts(req, res) {
    db.select("*")
      .from("product")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.status(400).json({ error: "Unable to get products" + err }));
}

function getAvailableProducts(req, res) {
    db.select("*")
      .from("product")
      .where("available", true)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.status(400).json({ error: "Unable to get products" + err }));
}

function getAllCanastas(req, res) {
    db.select("*")
      .from("canasta")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.status(400).json({ error: "Unable to get products" + err }));
}

module.exports = {
    getAllProducts,
    getAvailableProducts,
    getAllCanastas

}

// SELECT 
// c.canasta_name, c.canasta_price, array_to_string(array_agg(product_name), ', ' ) AS products
// FROM 
//     canasta as c 
// INNER JOIN 
//     product as p 
// on 
//     c.canasta_prod_1 = p.product_id 
// OR 
//     c.canasta_prod_2 = p.product_id
// OR 
//     c.canasta_prod_3 = p.product_id
// OR 
//     c.canasta_prod_4 = p.product_id
// OR 
//     c.canasta_prod_5 = p.product_id
// OR 
//     c.canasta_prod_6 = p.product_id
// OR 
//     c.canasta_prod_7 = p.product_id
// OR 
//     c.canasta_prod_8 = p.product_id
// OR 
//     c.canasta_prod_9 = p.product_id
// OR 
//     c.canasta_prod_10 = p.product_id
// GROUP BY c.canasta_name, canasta_price
// ;


// .whereNotNull("canasta_prod_1", "canasta_prod_2", "canasta_prod_3", 
//                     "canasta_prod_4", "canasta_prod_5", "canasta_prod_6", 
//                     "canasta_prod_7", "canasta_prod_8", "canasta_prod_9", 
//                     "canasta_prod_10")