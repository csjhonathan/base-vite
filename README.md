# React + TypeScript + Vite

Este é um projeto base para iniciar um projeto com React, TypeScript e Vite.

# Tecnologias

- [React](https://reactjs.org/)
  - React é uma biblioteca JavaScript para criar interfaces de usuário.
  - É mantido pelo Facebook e por uma comunidade de desenvolvedores e empresas.

- [TypeScript](https://www.typescriptlang.org/)
  - TypeScript é um superset de JavaScript desenvolvido pela Microsoft que adiciona tipagem estática ao JavaScript.
  - Fornece segurança e produtividade ao desenvolvedor.

- [Vite](https://vitejs.dev/)
  - Vite é um construtor de aplicações web que visa fornecer uma experiência de desenvolvimento rápido e leve.
  - Desenvolvido por Evan You, criador do Vue.js.

- [Shadcn](https://ui.shadcn.com/)
  - Shadcn é uma biblioteca de componentes React com design moderno e responsivo.
  - Seus componentes são desenvolvidos com Tailwind CSS.

- [Tailwind CSS](https://tailwindcss.com/)
  - Tailwind CSS é um framework CSS que fornece classes utilitárias para estilizar elementos HTML.
  - É altamente customizável e permite criar designs únicos.
  - Mobile-first e responsivo.

- [TanStack Query (React Query)](https://tanstack.com/query/latest)
  - TanStack Query é uma biblioteca para gerenciamento de estado e cache de dados em aplicações React.
  - Facilita o gerenciamento de estados nas suas requisições, evita a criação excessiva de estados e simplifica a lógica de carregamento de dados.

- [Axios](https://axios-http.com/)
  - Axios é uma biblioteca JavaScript para realizar requisições HTTP.
  - É fácil de usar e possui uma API simples e intuitiva.

- [EsLint](https://eslint.org/)
  - EsLint é uma ferramenta de análise de código estática para identificar padrões problemáticos no código JavaScript.
  - Ajuda a manter um código limpo e padronizado.

- [JSON Server](https://www.npmjs.com/package/json-server)
  - JSON Server é uma biblioteca para criar uma API REST fake com um arquivo JSON.
  - Permite simular uma API real para testar a integração com o front-end.


# Instalação

Clone o repositório:

```bash
git clone https://github.com/csjhonathan/base-vite.git
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto e adicione a seguinte variável de ambiente:

```env
REACT_APP_API_URL=http://localhost:3001
```

Abra um novo terminal e inicie o servidor JSON Server:

```bash
npm run server
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse [http://localhost:5173/](http://localhost:5173/) no seu navegador.

O JSON Server serve apenas para simular uma API REST fake. Você pode adicionar, editar e excluir dados do arquivo `db.json` e as alterações serão refletidas na aplicação.

# Por que estou fazendo e disponibilizando este projeto?

Este projeto foi criado para servir como um ponto de partida para quem deseja iniciar um projeto com React, TypeScript e Vite. Fique a vontade para clonar o repositório e utilizar o projeto como base para o seu próximo projeto.

Ele será incrementado de acordo com as minhas necessidades e aprendizados. ❤️