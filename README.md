# Standalone Nodejs-Webpack-Tailwind generator

Based on a hacked version of 'Tailwind CSS Webpack Starter Project' available on <a href="https://github.com/tailwindcss/webpack-starter">here on github</a>.

Reasoning: Building old-fashioned LAMP sites without node and other tooling integrated into development workflow, we want to utilise node/webpack for stand-alone generation of css/js and other self contained components. This project supports tailwind so far, but could easily be adapted for other dev workflow processing.

Requirements: nodejs and npm

To get started, clone the project somewhere inside your project root, cd into it and install the dependencies:

```
npm install
```

Source files for processing reside in src/ (`tailwind.js` and `styles.css`). You'll want to modify these files; the generator will use them to generate the output css.

## Configuration

- output for npm run watch is configured in `localconfig.js` which needs to be created. Path specified within is relative to the package root. A sample config is contained in the file `sample-localconfig.js`:

```
// output path and filename for npm run watch go here...
module.exports = {
  path: "../public_html/css/",
  file: "twstyle.css"
};
```
- files `index.html` and `styles.css` in src/ are the same as those provided in <a href="https://github.com/tailwindcss/webpack-starter">Tailwind CSS Webpack Starter</a>.
- for a fresh tailwind.js config, in the src/ folder delete `tailwind.js` and, from that folder, run `npx init tailwind`

## Using

Main usecase is css generation in the desired output directory. The following command in a console will live-monitor files in src/ (styles.css and tailwind.js) and generate the output css when they are modified

```
npm run watch

```

To use the generator as a webserver at localhost:8080 (for testing and tailwind playground), additionally modify the src/index.html to taste and run

```
npm run dev

```

Finally, we can generate optimised and minified CSS along with the webpack stub main.js and processed index.html in the dist/ folder by running

```
npm run prod

```

## Thanks and Contributing

This tool is a hack of 'Tailwind CSS Webpack Starter Project' available <a href="https://github.com/tailwindcss/webpack-starter">here on github</a>. Thanks to Adam Wathan and the contributors on that project.

If you have experience with Webpack and suggestions on how this generator could be improved PR's are welcome.
