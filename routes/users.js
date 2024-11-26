const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");
const validate = require("../middleware/validate");

router.post("/add",validate.validate, UserController.add);

router.get("/showusers", UserController.showusers);

router.get("/showuser/:id", UserController.showuserbyid);

router.get("/showbyusername/:username", UserController.showusersbyusername);

router.get(
  "/showusersbyusername/:username",
  UserController.showusersbyusername
);
router.put("/update/:id", UserController.update);

router.delete("/delete/:id", UserController.deleteuser);

module.exports = router;
