# food-explorer-front-end
### Front-end do Flood Explorer, aplicação desenvolvida no desafio final do curso Explorer da Rocketseat

- repositório do back-end [food-exlorer-back-end](https://github.com/Alecsander-Cruz/food-explorer-back-end/)

- O banco de dados já está populado com dois usuários:
    - admin:
        - email: admin@email.com
        - senha: 123456
  - usuário:
      - email: usuario@email.com
      - senha: 123456 

## Requisitos do Front-end:

-   [x] Implementação das telas de login, página principal, página de detalhes do prato, e outras conforme o layout disponibilizado no Figma.
-   [x] Funcionalidades para visualização de pratos, busca por nome e ingredientes, e interação com os pratos.
-   [x] Suporte para upload de imagens durante o cadastro dos pratos.
    -   [x]    Interface de usuário responsiva de acordo com o conceito Mobile First.
-   [x] Implementação de animações e transições para melhorar a experiência do usuário.
-   [x] Integração com a API do back-end para o consumo de dados.


## Dependências do projeto:
  - [axios](https://www.npmjs.com/package/axios) versão 1.6.1
  - [keen-slider](https://www.npmjs.com/package/keen-slider) versão 6.8.6
  - [react](https://www.npmjs.com/package/react) versão 18.2.0
  - [react-dom](https://www.npmjs.com/package/react-dom) versão 18.2.0
  - [react-icons](https://www.npmjs.com/package/react-icons) versão 4.11.0
  - [react-router-dom](https://www.npmjs.com/package/react-router-dom) versão 6.18.0
  - [styled-components](https://www.npmjs.com/package/styled-components) versão 6.1.1

#### Dependências de dev:
  - [@types/react](https://www.npmjs.com/package/@types/react) versão 18.2.15
  - [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) versão 18.2.7
  - [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react) versão 4.0.3
  - [eslint](https://www.npmjs.com/package/eslint) versão 8.45.0
  - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) versão 7.32.2
  - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) versão 4.6.0
  - [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh) versão 0.4.3
  - [vite](https://www.npmjs.com/package/vite) versão 4.4.5

## Instruções para execução do projeto:

  - Clonar o repositório.
  - Para instalar as dependências rode o comando
    ```
    npm install
    ```
  - Para executar no modo DEV, com vite, rode o comando
    ```
    npm run dev
    ```
  - Para executar no modo Normal, rode o comando
    ```
    npm start
    ```
  

    - Obs.: para rodar localmente troque a baseURL do axios no arquivo [api,js](src/services/api.js) para a url em que o back-end usará. A url usada no desenvolvimento foi a "http://localhost:3333"


## :link:[Deploy do projeto](https://alecsander-cruz-food-explorer-front.netlify.app/)

- Recomendado testar o projeto localmente, pois o deploy do Front e Back estão muito lentos e bugando a visualização...


## Previews das telas mobile:

### Tela SignIn
![mobile-signin](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/2857712c-4c1d-4e9a-8f17-26c2b86d3677)

### Tela SignUp
![mobile-signup](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/adc549a2-7f68-47f3-86f9-e5fcef9d774b)

### Tela Home user
![mobile-home1-user](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/57fe3d81-50a7-4316-b7d9-55fb09794087)
![mobile-home2](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/8ae9ae68-1c8c-4fa4-b0f9-31035bd0be88)

### Side Menu user
![mobile-side-menu-user](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/528511dc-3ec4-4b5b-aa5f-6e39f6d0e7e4)

### Tela Details user
![mobile-details-user](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/163c7ff8-aeaa-4c18-94db-4df6ee613275)

### Tela Home admin
![mobile-home1-admin](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/c3a4bb56-9f79-4557-a935-fee83d78ebd8)
![mobile-home2](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/8ae9ae68-1c8c-4fa4-b0f9-31035bd0be88)

### Side Menu admin
![mobile-side-menu-admin](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/ece7935e-08b9-4e96-a60b-9bca453bd7d4)

### Tela Details admin
![mobile-details-admin](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/d46acb27-fafe-4e0c-9916-9ab7ae38fe51)

### Tela New Dish admin
![mobile-new-dish](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/a45e489f-0e66-49a8-8744-8da18e06c1fe)

### Tela Edit Dish admin
![mobile-edit-dish](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/db1b1475-6941-4ba2-8775-42591ec46ab0)

## Previews das telas desktop:

### Tela SignIn
![desktop-signin](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/629c4409-5253-435e-9117-30b2de728ead)

### Tela SignUp
![desktop-signup](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/509cac3f-125d-418a-b87a-122373835ac3)

### Tela Home user
![desktop-home1-user](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/1701d316-ade2-4ff2-b078-8bdbaad18152)
![desktop-home2](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/4f80fd36-53bf-4438-a30a-daa138bd4c1f)

### Tela Details user
![desktop-details-user](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/828bd669-bbf9-43b6-9c8a-fac7fdd28c51)

### Tela Home admin
![desktop-home1-admin](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/78c7f046-d696-4698-8a67-471e49b8e166)
![desktop-home2](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/975309bc-8b68-478f-ac8e-a679b4c0d3b3)

### Tela Details admin
![desktop-details-admin](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/ba80dddc-90c3-48c5-b4cd-737538482ede)

### Tela New Dish admin
![desktop-new-dish](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/f4e6dfc5-64bf-4aa7-abaf-797805daeb9b)

### Tela Edit Dish admin
![desktop-edit-dish](https://github.com/Alecsander-Cruz/food-explorer-front-end/assets/17745018/29b383e5-99c3-410b-8f1e-614dd3616aa4)




