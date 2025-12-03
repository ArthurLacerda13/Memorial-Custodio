# 🏛️ Memorial Professor Luiz Custódio

> "O jornalismo não é apenas uma profissão, é um compromisso ético com a verdade."

Este projeto é um memorial digital interativo dedicado à vida e obra do **Professor Luiz Custódio**, que dedicou 45 anos ao ensino do jornalismo. 

Mais do que um arquivo estático, este projeto foi concebido como um **"Legado Vivo"**: uma plataforma que preserva as obras históricas do professor enquanto agrega novas produções (documentários, teses, artigos) de ex-alunos e da comunidade acadêmica influenciada por ele.

## 🎨 Conceito de Design
O projeto utiliza uma estética **"Sépia/Jornal Antigo"** para evocar a seriedade e a nostalgia do jornalismo clássico, combinada com uma UX moderna e fluida.
* **Paleta:** Tons de Creme, Café e Sépia (`#FDFBF7`, `#4A3B32`, `#D4A373`).
* **Tipografia:** Combinação de Serif (títulos clássicos) e Sans-Serif (leitura moderna).

## 🚀 Funcionalidades

* **Hero Carousel Interativo:** Destaque para obras audiovisuais e documentários recentes sobre o legado do professor.
* **Feed da Comunidade ("Legado Vivo"):** Uma seção dinâmica que agrega conteúdos externos (YouTube, PDFs, Artigos) produzidos por terceiros.
* **Acervo Histórico Digital:** Galeria das obras originais do professor (Teses, Livros) com funcionalidade de download/leitura de PDFs digitalizados.
* **Design Responsivo:** Layout adaptável para mobile e desktop.

## 🛠️ Tecnologias Utilizadas

* **Core:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (com configuração de tema personalizado)
* **Ícones:** [Lucide React](https://lucide.dev/)

## 📂 Estrutura do Projeto

A estrutura foi pensada para facilitar o gerenciamento de mídias estáticas via pasta pública:

```bash
memorial-custodio/
├── public/
│   ├── arquivos/        # PDFs para download (Teses, Dissertações)
│   └── img/             # Imagens das obras e capas (Acessíveis via /img/...)
├── src/
│   ├── components/      # Componentes React (Hero, Feed, Header...)
│   │   ├── CommunityFeed.jsx
│   │   ├── HistoricalFoundation.jsx
│   │   └── ...
│   ├── assets/          # Assets internos da UI
│   ├── App.jsx          # Montagem principal das seções
│   └── main.jsx         # Ponto de entrada
└── tailwind.config.js   # Configuração do tema Sépia