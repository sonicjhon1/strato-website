## 🚀 Building Guide

Required Tools:

-   Git: https://git-scm.com/
-   Package manager: [PNPM](https://pnpm.io/) or [NPM](https://nodejs.org/en/) or [Bun](https://bun.sh/)
-   Astro: https://astro.build/

1.  **Clone the Repository.**

    Use the git CLI to clone this repository

    ```shell
    # clone this project's source
    git clone https://github.com/sonicjhon1/strato-website.git
    ```

2.  **Start developing.**

    Navigate into the site's directory and start it up.

    ```shell
    cd strato-website/
    # repacle "bun" with your package manager
    bun install
    bun run dev
    ```

3.  **Open the code and start customizing!**

    Your site is now running at localhost:4321!

    Edit `src/pages/index.astro` to see your site update in real-time!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── icons/strato-logo.svg
├── src/
│   ├── components/
│   │   └── Navbar.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
