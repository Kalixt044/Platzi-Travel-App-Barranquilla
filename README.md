# Travel App

A travel app landing page built in **ReactJS** and styled with **TailwindCSS**.

Based on the PlatziTravel project from [TailwindCSS](https://platzi.com/cursos/tailwind/) 2 & 3 course in [platzi.com](https://platzi.com)

## Installation

1. Install dependencies

`npm install`

## Test in development mode

1. Run command

`npm run dev`

2. Open in browser [localhost:8080](http://localhost:8080)

## Build

- Run command

`npm run build`

- You can preview locally

`npm run preview`

## Extra

If you're using VSCode and are a little bit picky (like me 😆) with the linter plugin, you can skip **TailwindCSS** warnings with next steps.

1. Install [TailwindCSS VSCode](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension.
2. Create (if you haven't already) **.vscode** folder inside project's root.
3. Create (if you haven't already) **settings.json** file.
4. Paste these lines within **settings.json** file.

`{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false
}`