# 🖼️ Gallery Plus

Um projeto full-stack (frontend e backend) moderno, utilizando **pnpm** para uma gestão eficiente de dependências.

Este documento serve como um guia para a **instalação**, **execução** e **desenvolvimento** local do projeto.

---

## 📦 Instalação

Antes de começar, certifique-se de que possui o **Node.js** e o **pnpm** instalados em seu sistema.

Para instalar todas as dependências do projeto (tanto para o backend quanto para o frontend), execute o seguinte comando na raiz do projeto:

```bash
pnpm install
```

---

## 🚀 Como Executar o Projeto

O projeto é dividido em dois serviços independentes que precisam ser iniciados separadamente: o **Servidor Backend** e a **Aplicação Frontend**.

Você precisará de **dois terminais** abertos para rodar o projeto completamente.

### 1. ▶️ Executar o Servidor (Backend)

Abra o **primeiro terminal** e execute:

```bash
pnpm dev-server
```

O backend será iniciado e estará pronto para responder às requisições da aplicação frontend.

### 2. ▶️ Executar o Frontend

Abra o **segundo terminal** e execute:

```bash
pnpm dev
```

A aplicação frontend será iniciada em modo de desenvolvimento. Você poderá acessá-la em seu navegador (geralmente em `http://localhost:3000` ou similar, dependendo da configuração).

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Plataforma de execução para o backend.
* **pnpm**: Gerenciador de pacotes rápido e eficiente.
* **Typescript**: Linguagem de programação para tipagem estática e segura.
* **React**: Biblioteca para construção da interface de usuário (frontend).

---

## 🤝 Contribuição

Contribuições são **muito bem-vindas**! Sinta-se à vontade para enviar *pull requests*.

Para alterações maiores ou novas funcionalidades, é recomendado abrir uma *issue* primeiro para discutir a mudança proposta.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais detalhes.