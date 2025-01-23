To-Do List Project

Este é um projeto simples de lista de tarefas, onde você pode se registrar, fazer login, e gerenciar suas tarefas de forma eficiente. O projeto possui três rotas principais e requer autenticação para acesso a algumas delas.

Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes itens instalados no seu computador:

Node.js (Recomendado: última versão LTS)

NPM (gerenciador de pacotes, geralmente incluído com o Node.js)

Como executar o projeto

1. Clone o repositório

Clone este projeto no seu computador local usando o comando:

git clone <URL_DO_REPOSITORIO>

Substitua <URL_DO_REPOSITORIO> pela URL do repositório GitHub.

2. Instale as dependências

Acesse a pasta do projeto no terminal e instale as dependências necessárias:

cd nome-do-projeto
npm install

3. Execute o projeto

Inicie o servidor de desenvolvimento com o comando:

npm run dev

O link do servidor local será exibido no terminal, geralmente algo como http://localhost:5173. Abra o link no seu navegador.

Rotas Disponíveis

1. /register

Descrição: Página para criar uma nova conta.

Funcionamento: Insira um e-mail válido e crie uma senha para se registrar.

2. /login

Descrição: Página para fazer login na aplicação.

Funcionamento:

Faça login com o e-mail e a senha cadastrados em /register.

Login com Google: Você também pode fazer login rapidamente usando a conta Google.

3. /tasks

Descrição: Página principal para gerenciamento de tarefas.

Funcionamento:

Acesso restrito: Você só pode acessar esta rota se estiver registrado e autenticado.

Modal de criação de tarefas: Permite criar uma nova tarefa preenchendo os campos necessários e escolhendo um dos três estados:

TODO

DOING

DONE

Funcionalidades

Registro de usuário: Crie uma conta com e-mail e senha.

Autenticação: Faça login com sua conta ou use a autenticação via Google.

Gerenciamento de tarefas:

Adicione tarefas com título, descrição e estado.

Os estados disponíveis são TODO, DOING e DONE.

Tecnologias Utilizadas

React: Biblioteca para construção de interfaces.

BoxIcons: Biblioteca de icones

Firebase: Backend para autenticação e banco de dados.


Observações

Certifique-se de que as variáveis de ambiente para a configuração do Firebase estejam corretamente configuradas no projeto.
