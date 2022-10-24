const express = require("express");
const router = express.Router();

const usuario = require("./api/usuario/usuario.controller");

router.use("/usuario", usuario);

module.exports = router;