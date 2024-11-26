const product = require("../models/product");
const User = require("../models/product");

async function add(req, res) {
  console.log(req.body);
  try {
    const prod = new product(req.body);
    await prod.save();

    res.json(prod);
  } catch (err) {
    console.error(err);
  }
}

async function showprods(req, res) {
  try {
    const prods = await product.find();
    res.status(200).json(prods);
  } catch (err) {
    console.error(err);
    res.status(500).send("error getting users");
  }
}

async function showprod(req, res) {
  try {
    const prod = await product.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("error getting user");
  }
}


async function update(req, res) {
  try {
    const prod = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(prod);
  } catch (err) {
    console.error(err);
    res.status(500).send("error updating user");
  }
}

async function deleteprod(req, res) {
  try {
    const prod = await product.findByIdAndDelete(req.params.id);
    res.status(200).json(prod);
  } catch (err) {
    console.error(err);
    res.status(500).send("error deleting user");
  }
}

module.exports = {
  add,
    showprods,
    showprod,
    update,
    deleteprod
};
