# Projeto Frontend - Consulta CEP

Este é o frontend para o projeto de consulta de CEP. O frontend foi desenvolvido utilizando Vue 3, TypeScript, Vite e Ant Design Vue. Este projeto pode ser executado localmente ou em um contêiner Docker.

## Tecnologias Utilizadas

- [Vue 3](https://vuejs.org/) ![image](https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
- [TypeScript](https://www.typescriptlang.org/) ![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- [Vite](https://vitejs.dev/) ![image](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
- [Ant Design Vue](https://www.antdv.com/docs/vue/introduce) ![image](https://img.shields.io/badge/Ant%20Design-1890FF?style=for-the-badge&logo=antdesign&logoColor=white)   
- [Docker](https://www.docker.com/) ![image](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)

## Rodando Localmente

1. **Certifique-se de que você tenha o Node.js v22.5.1 instalado.** Você pode baixar e instalar o Node.js a partir do [site oficial](https://nodejs.org/en/).

2. **Clone este repositório:**

   ```bash
   git clone git@github.com:Baizch/consulta-viacep-frontend.git
   
   cd consulta-viacep-frontend

3. **Instale as dependências do projeto:**
   ```bash
   npm install
   
   ou
   
   yarn install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev

   ou

   yarn run dev
   ```
## Rodando com Docker

1. Certifique-se de que o Docker Desktop está instalado e em execução. Você pode baixar e instalar o Docker Desktop a partir do [site oficial](https://www.docker.com/).

2. **Clone este repositório:**

   ```bash
   git clone git@github.com:Baizch/consulta-viacep-frontend.git
   
   cd consulta-viacep-frontend

3. **Crie a imagem Docker:**
   ```bash
   docker-compose build
   ```

4. **Inicie o contêiner Docker:**
   ```bash
   docker-compose up
   ```

   O projeto estará disponível em http://localhost:5173.



