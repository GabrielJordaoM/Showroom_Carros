# 🚗 Showroom de Carros

Este é um projeto simples e funcional de um showroom de carros desenvolvido com [Ember.js](https://emberjs.com/). Ele permite:

- Visualizar uma vitrine de veículos com imagens e detalhes
- Realizar cadastro e login de usuários
- Navegar entre páginas com uma interface responsiva e moderna
- Simular uma sessão com `localStorage`
- Testar autenticação com opção de logout


## ⚙️ Tecnologias Utilizadas

- **Ember.js** (CLI + Router + Services)
- **HTML/CSS Responsivo** (estilo profissional sem frameworks externos)
- `localStorage` para simular persistência de sessão
- Componentização via templates `.hbs`

---

## 🚀 Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/showroom-carros.git
cd showroom-carros
````

### 2. Instale as dependências

```bash
npm install
```

> Certifique-se de ter o [Node.js](https://nodejs.org/) e o [Ember CLI](https://cli.emberjs.com/release/) instalados:

```bash
npm install -g ember-cli
```

### 3. Rode o servidor de desenvolvimento

```bash
ember serve
```

Abra no navegador:
📍 [`http://localhost:4200`](http://localhost:4200)

---

## 👥 Funcionalidades

* ✅ Navegação com Navbar fixa
* ✅ Página inicial com showroom de carros (com imagens locais)
* ✅ Páginas de Login e Cadastro com validação simples
* ✅ Sessão de usuário simulada com `localStorage`
* ✅ Página "Sobre Nós" institucional
* ✅ Layout responsivo adaptado para mobile

---

## 📁 Estrutura principal

```
app/
├── controllers/
│   ├── application.js
│   ├── login.js
│   └── cadastro.js
├── templates/
│   ├── application.hbs
│   ├── login.hbs
│   ├── cadastro.hbs
│   ├── carros.hbs
│   └── sobre.hbs
├── services/
│   └── session.js
├── styles/
│   └── app.css
└── router.js
```

---

## 💡 Sugestões de melhoria futura

* Persistência com backend real (ex: Firebase, Node, Supabase)
* Upload de imagens dos carros via painel
* Página de detalhes de cada carro
* Favoritos/salvar veículos

---

## 🧑‍💻 Autor

**Gabriel Jordão, Bruno Gabriel, Giovanna Gutierrez, Caio Lemes, Danilo, Carol Tagliaferro**
Projeto educativo desenvolvido com foco em Ember.js, autenticação local e UX responsiva.

---