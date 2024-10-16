# API Champions - Node.js & Express

Este projeto é uma API desenvolvida com Node.js e Express, que gerencia informações sobre jogadores de futebol e seus clubes. A API permite operações de criação, leitura, atualização e exclusão (CRUD) de jogadores e seus dados estatísticos.

## Funcionalidades

- **Jogadores**:
    - Criar, listar, atualizar e remover informações de jogadores.
    - Cada jogador contém atributos como nome, clube, nacionalidade, posição e estatísticas detalhadas (Overall, Pace, Shooting, etc.).
- **Clubes**: 
    - Listar clubes de futebol disponíveis na base de dados.
  
### Principais Endpoints:

- `GET /api/players` - Retorna todos os jogadores.
- `GET /api/players/:id` - Retorna um jogador específico pelo ID.
- `POST /api/players` - Adiciona um novo jogador.
- `PATCH /api/players/:id` - Atualiza as informações de um jogador.
- `DELETE /api/players/:id` - Remove um jogador pelo ID.
- `GET /api/clubs` - Retorna a lista de clubes.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construção de APIs em Node.js.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **CORS**: Middleware para permitir requisições entre diferentes origens.
- **Tsup**: Ferramenta de build para TypeScript.
- **TSX**: Ferramenta para rodar arquivos TypeScript diretamente.
- **dotenv**: Biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env`.

## Configurações de CORS

O projeto tem a opção de usar ou não o middleware **CORS** para proteger a API de requisições não autorizadas. As requisições são permitidas apenas da origem de exemplo: `"http://lindemberg.system.com"`, com os métodos `GET` e `UPDATE`.

## Como Rodar o Projeto

1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/Lindembergol/api-champions-nodejs-express.git
2. **Instalar as dependências:**
    ```bash
    npm install
3. **Configurar as variáveis de ambiente:** Crie um arquivo .env na raiz do projeto e adicione a variável PORT, que define em qual porta o servidor irá rodar. Exemplo:
    ```bash
    PORT=3000
4. **Rodar o servidor em modo de desenvolvimento:**
    ```bash
    npm run start:dev
5. **Build para produção:**
    ```bash
    npm run start:dist
## Estrutura do Projeto

- **src/server.ts:** Configura o servidor e o faz ouvir as requisições.
- **src/app.ts:** Define o middleware, rotas e configurações principais do Express.
- **src/routes:** Gerencia as rotas da API.
- **src/controllers:** Lida com a lógica dos endpoints e interação com os serviços.
- **src/services:** Contém as regras de negócio da aplicação.
- **src/models:** Modelos de dados utilizados no projeto.
- **src/repositories:** Simulação de acesso a dados (banco de dados em memória).