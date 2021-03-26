const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
var corsOptions = {
  origin: "http://localhost.8001",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome Here" });
});

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and resyn:�#~+kc9��Rβ��qѣ�
�[�����t�ZM�Ԩ͑�V_�].�` �ٗ�ҎL A��')��d@)J���Og��%niP��lc'o���5X̓)艽�ܣ�/]�3W[14������-�4N5���Y����HI*��m�
4�ɔ>���L��R�?G�q*f��&�ح6<������*L$�