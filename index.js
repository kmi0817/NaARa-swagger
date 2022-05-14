const express = require("express");
const api = require("./routers");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api", api);

const { swaggerUi, specs } = require("./swagger/swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(3000, () => {
    console.log("localhost:3000 runs");
});