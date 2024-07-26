Claro, Diego! Aqui está um exemplo de README para o seu sistema. Certifique-se de ajustar os detalhes específicos de acordo com o seu projeto.

---

# Sistema de Gestão de Restaurante

Este é um sistema de gestão de restaurante que permite criar e fazer login de usuários, criar categorias de produtos, selecionar produtos, criar mesas (orders) e definir a quantidade de produtos para cada mesa.

## Funcionalidades

- **Registro e Login de Usuários**
  - Usuários podem se registrar e fazer login para acessar o sistema.

- **Criação de Categorias**
  - Usuários autenticados podem criar categorias de produtos.

- **Seleção de Produtos**
  - Usuários podem selecionar produtos dentro de cada categoria.

- **Criação de Mesas (Orders)**
  - Usuários podem criar mesas e adicionar produtos com quantidades específicas a cada mesa.

## Tecnologias Utilizadas

- **Front-end:** React, TypeScript, CSS
- **Back-end:** NodeJS, Express, TypeScript, Prisma
- **Banco de Dados:** PostgreSQL

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navegue até o diretório do projeto:
   ```sh
   cd seu-repositorio
   ```

3. Instale as dependências do back-end:
   ```sh
   cd backend
   npm install
   ```

4. Instale as dependências do front-end:
   ```sh
   cd ../frontend
   npm install
   ```

5. Configure o banco de dados:
   - Crie um banco de dados PostgreSQL.
   - Atualize as configurações do banco de dados no arquivo `.env` no diretório `backend`.

6. Execute as migrações do Prisma:
   ```sh
   cd backend
   npx prisma migrate deploy
   ```

7. Inicie o servidor do back-end:
   ```sh
   npm run dev
   ```

8. Inicie o servidor do front-end:
   ```sh
   cd ../frontend
   npm start
   ```

## Uso

1. Acesse a aplicação no navegador em `http://localhost:3333`.

2. Registre-se ou faça login para acessar o sistema.

3. Como usuário autenticado, você pode:
   - Criar categorias de produtos.
   - Selecionar produtos e adicioná-los a categorias.
   - Criar mesas (orders) e definir a quantidade de produtos para cada mesa.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`).
3. Commite suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

