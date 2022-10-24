const express = require("express");
const router = express.Router();

const usuario_handler = require("./usuario.handler");

router.get("/", (req, res) => {
    res.json(usuario_handler.listarUsuarios());
});

router.get("/login", (req, res) => {
    res.json(usuario_handler.login(req.body));
});

router.post("/", (req, res) => {
    res.json(usuario_handler.cadastrarUsuario(req.body));
});

module.exports = router;