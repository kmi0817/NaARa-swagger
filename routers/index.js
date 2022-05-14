const router = require("express").Router();
const user = require("./user");

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: 유저 수정 삭제
 */
router.use("/user", user)

module.exports = router;