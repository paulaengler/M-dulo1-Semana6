/* Crie uma função que irá pedir 3 informações através do prompt, o nome, a idade e o email. 
Monte essas informações em um objeto igual ao do exercício 03, 
após isso salve esse objeto com a chave “user” no localStorage. */

function salvarInformacoesNoLocalStorage() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const email = document.getElementById('email').value;

    const usuario = {
            nome: nome,
            idade: idade,
            email: email
        };

    const usuarioJSON = JSON.stringify(usuario);

    localStorage.setItem("user", usuarioJSON);

    alert("Informações do usuário salvas com sucesso!");
}

document.getElementById('user-form').addEventListener('submit', salvarInformacoesNoLocalStorage);




