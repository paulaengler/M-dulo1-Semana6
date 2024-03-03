/* Crie um arquivo JSON chamado data.json com a seguinte estrutura interna:

{
  "nome": "João",
  "idade": 30,
  "email": "joao@example.com"
}
‌

Após isso, utilize a fetch API para obter o arquivo JSON e, em seguida, 
a resposta deve ser convertida para o formato JSON usando o método .json() . O conteúdo JSON deve ser então exibido na página HTML. */

const url = 'data.json';

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    document.getElementById('json-content').innerHTML = `
      <p><strong>Nome:</strong> ${data.nome}</p>
      <p><strong>Idade:</strong> ${data.idade}</p>
      <p><strong>Email:</strong> ${data.email}</p>
    `;
  })
  .catch(error => {
    console.error('Erro ao buscar o arquivo JSON:', error);
  });
