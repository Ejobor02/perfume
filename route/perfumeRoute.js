const express = require("express");
const router = express.Router();
const { create_perfume,get_all_perfume,update_perfume,delete_perfume } = require("../controller/perfumeController");

router.post("/create", create_perfume);

router.get('/getAll', get_all_perfume);

router.patch("/update/:postId", update_perfume);

router.delete("/delete/:postId", delete_perfume);

module.exports = router;
