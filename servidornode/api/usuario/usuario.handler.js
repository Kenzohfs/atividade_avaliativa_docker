const listaUsuarios = [];

function listarUsuarios() {
    return listaUsuarios;
}

function cadastrarUsuario(usuario) {
    if (!usuario.login) {
        return { erro: "Login não informado" };
    }

    if (!usuario.senha) {
        return { erro: "Senha não informada" };
    }
    
    usuario.id = listaUsuarios.length + 1;
    listaUsuarios.push(usuario);

    return listaUsuarios[listaUsuarios.length - 1];
}

function login(login) {
    if (!login.login) {
        return { erro: "Login não informado" };
    }

    if (!login.senha) {
        return { erro: "Senha não informada" };
    }

    const usuario = listaUsuarios.find(user => user.login == login.login && user.senha == login.senha);

    if (!usuario) {
        return { erro: "Usuário não encontrado" };
    }

    return usuario;
}

module.exports = {
    listarUsuarios,
    cadastrarUsuario,
    login
}