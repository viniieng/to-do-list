# 📝 To-Do List

> Uma aplicação moderna de gerenciamento de tarefas com autenticação e sincronização em tempo real.

## 📋 Sobre o Projeto

Este é um projeto de lista de tarefas completo e funcional, desenvolvido com React e Firebase. Permite que usuários se registrem, façam login (inclusive com Google) e gerenciem suas tarefas de forma eficiente e intuitiva.

### ✨ Funcionalidades

- 🔐 **Autenticação completa** (E-mail/Senha e Google)
- ➕ **Criar tarefas** com nome, descrição e estado
- ✏️ **Editar tarefas** existentes
- 🗑️ **Deletar tarefas** com modal de confirmação
- 🔄 **Sincronização em tempo real** com Firebase
- 📊 **Organização por estados**: A fazer, Fazendo e Feito
- 🎯 **Filtrar tarefas** pendentes e concluídas
- 📱 **Interface responsiva e moderna**
- 🚀 **Redirecionamento automático** para login na rota raiz

---

## 🚀 Começando

### 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- NPM ou PNPM (gerenciador de pacotes)

### 📦 Instalação

1. **Clone o repositório**

```bash
git clone <URL_DO_REPOSITORIO>
cd to-do-list
```

2. **Instale as dependências**

```bash
npm install
```

ou se estiver usando pnpm:

```bash
pnpm install
```

3. **Configure o Firebase**

Certifique-se de configurar as variáveis de ambiente do Firebase no arquivo `src/services/firebaseConfig.js`

### ▶️ Executando o projeto

**Modo desenvolvimento:**

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:5173`

**Build para produção:**

```bash
npm run build
```

**Preview da build:**

```bash
npm run preview
```

**Linter:**

```bash
npm run lint
```

---

## 🗺️ Rotas da Aplicação

| Rota | Descrição | Acesso |
|------|-----------|--------|
| `/` | Redireciona automaticamente para `/login` | Público |
| `/login` | Página de login (E-mail/Senha ou Google) | Público |
| `/register` | Página de cadastro de nova conta | Público |
| `/tasks` | Dashboard de gerenciamento de tarefas | Privado (requer autenticação) |

---

## 🎨 Funcionalidades Detalhadas

### 🔐 Autenticação

- **Registro**: Crie uma conta com e-mail e senha
- **Login tradicional**: Acesse com suas credenciais
- **Login com Google**: Autenticação rápida via conta Google
- **Rotas protegidas**: Apenas usuários autenticados acessam `/tasks`

### 📋 Gerenciamento de Tarefas

- **Criar tarefa**: Preencha nome, descrição e escolha o estado
- **Estados disponíveis**:
  - 🔵 **A fazer** - Tarefas que ainda não foram iniciadas
  - 🟡 **Fazendo** - Tarefas em andamento
  - 🟢 **Feito** - Tarefas concluídas
- **Editar tarefa**: Clique no ícone de edição para modificar
- **Deletar tarefa**: Remova tarefas com confirmação de segurança
- **Filtro inteligente**: Alterne entre tarefas pendentes e concluídas
- **Sincronização em tempo real**: Todas as mudanças são salvas automaticamente

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- ⚛️ **React** - Biblioteca para construção de interfaces
- 🚦 **React Router DOM** - Gerenciamento de rotas
- 🎨 **CSS3** - Estilização customizada

### Backend & Serviços
- 🔥 **Firebase** - Backend as a Service
  - Authentication (E-mail/Senha e Google)
  - Firestore Database (banco de dados em tempo real)

### Ferramentas & Bibliotecas
- ⚡ **Vite** - Build tool e dev server ultrarrápido
- 📦 **BoxIcons** - Biblioteca de ícones
- 🔧 **ESLint** - Linting e qualidade de código
- 🆔 **UUID** - Geração de IDs únicos

---

## 📁 Estrutura do Projeto

```
to-do-list/
├── src/
│   ├── auth/
│   │   └── PrivateRoutes.jsx       # Proteção de rotas privadas
│   ├── components/
│   │   ├── Card/                   # Componente de card de tarefa
│   │   ├── DeleteTaskModal/        # Modal de confirmação de exclusão
│   │   ├── EditTaskModal/          # Modal de edição de tarefa
│   │   └── Form/                   # Formulário de criação de tarefa
│   ├── contexts/
│   │   └── authContext.jsx         # Context API para autenticação
│   ├── pages/
│   │   ├── ListTasks/              # Dashboard de tarefas
│   │   ├── Login/                  # Página de login
│   │   └── Register/               # Página de registro
│   ├── routes/
│   │   └── routes.jsx              # Configuração de rotas
│   ├── services/
│   │   ├── firebaseConfig.js       # Configuração do Firebase
│   │   └── taskService.js          # Serviços de tarefas
│   ├── App.jsx                     # Componente raiz
│   └── main.jsx                    # Entrada da aplicação
├── package.json
├── vite.config.js
└── README.md
```

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é de código aberto e está disponível para uso educacional e pessoal.

---

## 👨‍💻 Autor

Desenvolvido com ❤️ por Vinicius Engelmann

---

## 📞 Suporte

Se você tiver alguma dúvida ou problema, sinta-se à vontade para abrir uma issue no repositório.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
