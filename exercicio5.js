/* Construa uma comunicação com a fetch API para a url 
(https://api.thecatapi.com/v1/images/search?limit=10 ). 
Essa API retorna uma lista de objetos com 10 imagens aleatórias, sua missão será imprimir em um document.write todas as imagens com a seguinte formatação:

“<img src=’${url_da_imagem}’/> <br />”
OBS:

Para fazer a interação pela lista utilize forEach ou o laço for of.
A ideia será passar pelo array apenas para pegar a url_da_imagem e ir imprimindo em um document.write() a tag com a formatação dada acima.
a url_da_imagem virá em cada objeto dentro do array na propriedade url.
Para acessar a documentação da API acesse: Report Wrapper - Report Dashboards
(opcional) Caso queira uma visualização melhor coloque na tag img o atributo width: Ex: width='200' */

function exibirImagensDeGatos() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(response => response.json())
      .then(data => {
        const catImagesDiv = document.getElementById('cat-images');
        data.forEach(cat => {
          const imageUrl = cat.url;
          catImagesDiv.innerHTML += `<img src='${imageUrl}' width='200' /><br />`;
        });
      })
      .catch(error => console.error('Erro ao buscar as imagens de gatos:', error));
  }

exibirImagensDeGatos();
