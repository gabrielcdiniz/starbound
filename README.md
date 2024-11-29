# Starbound

## Descrição

O Starbound é uma ferramenta prática para gerenciar suas compras diárias. Com ele, você pode criar, editar e excluir itens da sua lista, assim como acompanhar o histórico delas.

## Instalação

### Pré-requisitos

- Node.js (versão 20 ou superior);
- NPM (versão 10 ou superior);
- Next (versão 15 ou superior);
- React (versão 19 ou superior);

### Passos para instalação

1. Clone o repositório: git clone <https://seu-repositorio.git>
2. Instale as dependências: `npm install`
   1. caso tenha erros de dependências, tente o comando `npm install --force`, pois ainda a versão 19 do React não saiu oficialmente
3. Configure o arquivo **.env** à partir do arquivo **.env.example**
4. Inicie o banco de dados local: `docker compose -f ".docker/docker-compose.yml" up -d`
5. Execute as **migrations**: `npm run prisma:migrate:dev`
6. Inicie a aplicação: `npm run dev`

## Como usar

1. Abra o aplicativo em <http://localhost:3000>
2. Crie uma nova lista ou selecione uma existente
3. Adicione itens à lista
4. Edite ou exclua itens conforme necessário
5. Finalize a sua lista
6. Veja seu histórico

## Funcionalidades

- Criação e gerenciamento de listas
- Adição, edição e exclusão de itens
- Histórico de listas

## Tecnologias Utilizadas

- [Next](https://nextjs.org/docs)
- [React](https://react.dev/)
- [Joy UI](https://mui.com/joy-ui/getting-started/)
- [Next-Intl](https://next-intl-docs.vercel.app/docs/getting-started)
- [Prisma](https://www.prisma.io/docs/orm/overview/introduction)

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para sua alteração
3. Envie um pull request

### Créditos

#### Desenvolvedores

- [gabrielcdiniz](https://github.com/gabrielcdiniz)

#### Assets

- [favicon - criado por: iconixar - Flaticon](https://www.flaticon.com/br/icones-gratis/supermercado)

### Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para detalhes.

## Contato

Para mais informações, dúvidas ou sugestões, entre em contato:

- [LinkedIn](https://www.linkedin.com/in/gabriel-dinizz/)
- [GitHub](https://github.com/gabrieldinizdev)
