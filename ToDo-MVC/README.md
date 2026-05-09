</head>
<body>
  <h1>To-Do List</h1>
  <img src="https://github.com/DanielSCustodio/To-Do-List/assets/29557187/a7c0ff55-ca00-4558-8b48-c02e09784b9b" />
  <p>Este é um projeto Node.js de um To-Do List, onde você pode executar as operações de CRUD (Create, Read, Update e Delete) em tarefas, além de poder desfazer uma tarefa.</p>
  <h2>Tecnologias utilizadas</h2>
  <ul>
    <li>JavaScript</li>
    <li>Handlebars</li> 
    <li>Express</li>
     <li>Sequelize</li>
    <li>CSS</li>
    <li>MySQL</li>
  </ul>
  <h2>Arquitetura</h2>
  <p>Este projeto foi desenvolvido utilizando a arquitetura MVC (Model-View-Controller), que é um padrão de projeto amplamente utilizado para separar as preocupações em uma aplicação.</p>
  <p>A arquitetura MVC consiste em:</p>
  <ul>
    <li><strong>Model</strong>: Responsável pela manipulação dos dados e regras de negócio.</li>
    <li><strong>View</strong>: Responsável pela exibição dos dados ao usuário.</li>
    <li><strong>Controller</strong>: Responsável por receber as requisições do usuário, interagir com o modelo e retornar a resposta adequada.</li>
  </ul>
  <h2>Configuração do ambiente</h2>
  <ol>
    <li>Crie um arquivo chamado <code>.env</code> na raiz do projeto.</li>
    <li>Abra o arquivo <code>.env</code> e adicione as seguintes informações:</li>
  </ol>
  <pre><code>
    DB_PASS=XXXX
    DB_HOST=XXXX
    DB_USER=XXXX
    DB_NAME=XXXX
    PORT=XXXX
  </code></pre>
  <p>Substitua <code>XXXX</code> pelas informações reais do seu banco de dados MySQL.</p>
  <ol start="3">
    <li>Importe o arquivo <code>mvc_Tasks.sql</code> que se encontra no diretório do projeto para um banco de dados vazio. Esse arquivo contém a estrutura de tabelas necessárias para o funcionamento do projeto.</li>
  </ol>
  <h2>Como executar o projeto</h2>
  <ol>
    <li>Certifique-se de ter todas as dependências necessárias instaladas. Caso ainda não tenha instalado, execute o seguinte comando para instalar as dependências:</li>
  </ol>
  <pre><code>npm install</code></pre>
  <ol start="2">
    <li>Após configurar o ambiente e importar o arquivo SQL, execute o seguinte comando para iniciar o servidor:</li>
  </ol>
  <pre><code>npm start</code></pre>
  <ol start="3">
    <li>Abra o seu navegador e acesse <code>http://localhost:XXXX</code> (substitua <code>XXXX</code> pela porta configurada no arquivo <code>.env</code>).</li>
  </ol>
