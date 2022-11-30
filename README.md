# Digital Garden

This is a digital garden using Tereza's tools. We're using the [zettel](https://github.com/terezatech/tereza-tech/tree/main/packages/zettel) package as the engine of our Zettelkasten notes. The notes are written in markdown and are stored in the `notes` directory. The notes are then compiled into a static site using [Next.js](https://nextjs.org/).

## Getting Started

To get started, clone the repo and install the dependencies:

```bash
git clone https://github.com/terezatech/digital-garden.git
cd digital-garden
yarn
```

To start the development server, run:

```bash
yarn dev
```

Open your browser and navigate to the same paths as the notes in the `notes` directory. For example, if you have a note at `notes/zettelkasten.md`, you can navigate to `http://localhost:3000/zettelkasten` to see the note.
