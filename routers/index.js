const router = require("express").Router();
// const user = require("./user");
const mypage = require("./mypage");

// /**
//  * @swagger
//  * tags:
//  *  name: Users
//  *  description: 유저 수정 삭제
//  */
// router.use("/user", user)

/**
 * @swagger
 * tags:
 *  name: Mypage
 *  description: 회원의 마이페이지
 */
    router.use("/mypage", mypage)

module.exports = router;