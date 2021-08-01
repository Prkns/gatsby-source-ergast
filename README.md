<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Ergast API for Gatsby
</h1>

Simple source plugin to grab the latest Formula 1 season data from the fantastic [Ergast API](http://ergast.com/mrd/" "Ergast API"). Inline with the request from Ergast to keep calls to a minimum, Gatsby will call the API to reqest data at build-time. The slight downside being that you'll need to manually build the site (or feel free to make a webhook) after a race meeting, to ensure the results/standings and times are all up to date.

If this is something i end up creating, i'll update the plugin readme to reflect this.

## 🏎 Quick start

Once i'm happy this plugin is usable to a good standard, i'll probably submit it to the NPM library to make it easier to install for others... for the meantime..

1. Clone this repo into a directory named `plugins` in your project root.
2. Add the below to your `gatsby-config.js`

```js
plugins: [
  "gatsby-source-ergast",
],
```

## 🧐 What's inside?

```text
/gatsby-source-ergast
├── .gitignore
├── gatsby-node.js
├── index.js
├── LICENSE
├── package.json
└── README.md
```

- **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.
- **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
- **`index.js`**: A file that will be loaded by default when the plugin is [required by another application](https://docs.npmjs.com/creating-node-js-modules#create-the-file-that-will-be-loaded-when-your-module-is-required-by-another-application0). You can adjust what file is used by updating the `main` field of the `package.json`.
- **`LICENSE`**: This source plugin is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.
- **`package.json`**: A manifest file for Node.js projects, which includes things like metadata.
- **`README.md`**: A text file containing useful reference information about the plugin.

## 🙏 Contributing

Feel free to submit updates/PRs for this source plugin. It's still very basic and could be expanded to include a lot more control over the data pulled from Ergast.
