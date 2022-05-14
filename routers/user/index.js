const userRouter = require("express").Router();
const userController = require("./user.controller");

/**
 * @swagger
 * paths:
 *  /api/user/users:
 *      get:
 *          summary: "유저 데이터 전체 조회"
 *          description: "서버에 데이터 안 본러ㅐㅈ댜러낼 GET 방식으로 요청"
 *          tags: [Users]
 *          responses: 
 *              "200":
 *                  description: 전체 유저 정보
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  ok:
 *                                      type: boolean
 *                                  users:
 *                                      type: object
 *                                      example:
 *                                          [
 *                                              { "id": 1, "name": "user1" },
 *                                              { "id": 2, "name": "user2" },
 *                                              { "id": 3, "name": "user3" }
 *                                          ]
 */
userRouter.get("/users", userController.getUsers);