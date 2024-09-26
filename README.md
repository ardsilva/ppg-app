
---

# 🌟 Powerpuff Girls Show - React + TypeScript 🌟

Bem-vindo ao projeto **Powerpuff Girls Show**! 💖 Este é um projeto front-end construído com **React**, **TypeScript**, **Jest** e **React Testing Library**, utilizando o padrão de design de **átomos e moléculas**. A aplicação exibe detalhes de um show e seus episódios, com testes unitários para garantir a funcionalidade.

## 🚀 Demo
🔗 [Clique aqui para ver a demo](https://ppg-app.vercel.app/)

## 🛠️ Tecnologias Utilizadas

- ⚛️ **React**: Biblioteca JavaScript para construção de interfaces dinâmicas.
- 🦸 **TypeScript**: Superconjunto do JavaScript com tipagem estática.
- 🧪 **Jest**: Testes unitários rápidos e confiáveis.
- 🧑‍🔬 **React Testing Library**: Para testes de componentes e interações.
- ⚙️ **Yarn**: Gerenciador de pacotes utilizado no projeto.
  
## 🌳 Estrutura de Componentes - Atomic Design

Este projeto segue a metodologia **Atomic Design** para a organização dos componentes. Abaixo, a estrutura simplificada:

```bash
src/
│
├── Atoms/
│   ├── Button.tsx
│   ├── Image.tsx
│   ├── Title.tsx
│   └── Typography.tsx
├── context/
│   ├── ShowContext.tsx
│
├── Molecules/
│   ├── EpisodeCard.tsx
│   ├── Home.tsx
│   └── ShowDetails.tsx
│
└── App.tsx
```

## 🧩 Funcionalidades

- 🔎 **Página Inicial**: Um botão que leva você ao show das Meninas Superpoderosas!
- 📺 **Detalhes do Show**: Exibe detalhes sobre o show, incluindo uma lista de episódios.
- 🎬 **Detalhes do Episódio**: Exibe informações detalhadas sobre o episódio selecionado.
- 🔙 **Botão de Voltar**: Fácil navegação para retornar à página anterior.

## 🧪 Testes Unitários

Todos os componentes principais foram testados utilizando **Jest** e **React Testing Library**. Os testes garantem que os títulos, botões e a navegação funcionam corretamente.

### 🚨 Como rodar os testes?

Para executar os testes unitários, rode o seguinte comando no terminal:

```bash
yarn test
```

Isso executará todos os testes definidos em arquivos `.test.tsx`.

## 🛠️ Como Rodar o Projeto Localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/ardsilva/ppg-app
   ```

2. Entre na pasta do projeto:

   ```bash
   cd ppg-app
   ```

3. Instale as dependências:

   ```bash
   yarn install
   ```

4. Execute o servidor de desenvolvimento:

   ```bash
   yarn start
   ```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o projeto.

## 🧰 Dependências

Aqui estão algumas das principais dependências do projeto:

- **react**: ^18.x
- **typescript**: ^4.x
- **jest**: ^27.x
- **react-testing-library**: ^12.x
- **styled-components**: Para estilização com CSS-in-JS.

## 🎨 Estilo

O estilo do projeto é gerenciado através de componentes estilizados com **styled-components**, garantindo uma estilização modular e eficiente.

## 🤝 Contribuições

Contribuições são super bem-vindas! Se encontrar algum bug ou tiver uma sugestão de melhoria, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.

---

Feito com 💖 por [Alexandre Silva] - [LinkedIn](https://linkedin.com/in/ardsilva87) ✨

---

### 🏅 Créditos
- Imagens e ícones utilizados no projeto pertencem às suas respectivas fontes.
  
---

![Powerpuff Girls](https://media.giphy.com/media/3o7TKFSylhd2pXGx3q/giphy.gif)

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

### 📎 Links Úteis

- [Documentação do React](https://reactjs.org/docs/getting-started.html)
- [Documentação do TypeScript](https://www.typescriptlang.org/docs/)
- [Documentação do Jest](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

---

🎉 **Divirta-se explorando os episódios das Meninas Superpoderosas!**

---

### ✨ Inspiração para usar emojis e markdowns:
- 📝 Títulos e seções com emojis.
- 🧑‍🔬 Representação dos testes.
- 🎬 Ícones para detalhes do show.
- 💻 Demonstração com link de acesso.

---

Espero que goste do projeto! 😊