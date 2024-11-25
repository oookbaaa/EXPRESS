const User = require("../models/user");

async function add(req, res) {
  console.log(req.body);
  try {
    const user = new User(req.body);
    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err);
  }
}

async function showusers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("error getting users");
  }
}

async function showuserbyid(req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("error getting user");
  }
}

async function showusersbyusername(req, res) {
  try {
    const user = await User.findOne({ username: req.params.username });
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("error getting user");
  }
}

async function showusersbyusername(req, res) {
  try {
    const users = await User.find({ username: req.params.username });
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("error getting users");
  }
}

async function update(req, res) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("error updating user");
  }
}

async function deleteuser(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("error deleting user");
  }
}

module.exports = {
  add,
  showusers,
  showuserbyid,
  showusersbyusername,
  showusersbyusername,
  update,
  deleteuser,
};
