<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Ergast API for Gatsby
</h1>

Simple source plugin to grab the latest Formula 1 season data from the fantastic [Ergast API](http://ergast.com/mrd/" "Ergast API").

---

## 🏎 Quick start

```bash
yarn add gatsby-source-ergast
```

or

```bash
npm i gatsby-source-ergast
```

Add this to your `gatsby-config.js` file 👍

```js
plugins: [
  "gatsby-source-ergast",
],
```

Enjoy 🎉

---

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

- **`.gitignore`**: Stuff not to track.
- **`gatsby-node.js`**: The good stuff 👀.
- **`index.js`**: A file that will be loaded by default when the plugin is [required by another application](https://docs.npmjs.com/creating-node-js-modules#create-the-file-that-will-be-loaded-when-your-module-is-required-by-another-application0).
- **`LICENSE`**: This source plugin is licensed under the 0BSD license.
- **`package.json`**: A manifest file, which includes things like metadata.
- **`README.md`**: A text file containing useful reference information.

## 🙏 Contributing

Feel free to submit updates/PRs for this source plugin. It's still very basic and could be expanded to include a lot more control over the data pulled from Ergast.

---

### Notes:

Inline with the request from Ergast to keep calls to a minimum, Gatsby will call the API to reqest data at build-time. The slight downside being that you'll need to manually build the site (or feel free to make a webhook) after a race meeting, to ensure the results/standings and times are all up to date.

If this is something i end up creating, i'll update the plugin readme to reflect this.
