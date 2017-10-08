# CSShortcurt APP

[![Build Status](https://travis-ci.org/vitebo/csshortcut-app.svg?branch=master)](https://travis-ci.org/vitebo/csshortcut-app)
[![devDependencies Status](https://david-dm.org/vitebo/csshortcut-app/dev-status.svg)](https://david-dm.org/vitebo/csshortcut-app?type=dev)
[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/vitebo/csshortcut-app/blob/master/LICENSE.md)

[view in gh-pages](https://vitebo.github.io/csshortcut-app/index.html)

## Stack

- Task Runner: [Gulp](http://gulpjs.com/)
- HTML Template Engine: [Pug](https://pugjs.org/api/getting-started.html)
- CSS Preprocessor: [Stylus](http://stylus-lang.com/)
- JS Transpiler: [Babel](https://babeljs.io/)

## Run the project locally

**1 -** Prepare the environment:

```sh
$ npm install -g gulp-cli
```

**2 -** Clone the project and install the dependencies:

```sh
$ git clone https://github.com/vitebo/csshortcut-app.git
$ cd csshortcut-app
$ npm install
```
**3 -** Run static server and livereload:

```sh
$ gulp server
```

## Folders Structure

	.
	├── README.md
	├── LICENSE.md
	├── CONTRIBUTING.md
	├── out/
	├── src/
	|   ├── icons/
	|   ├── assets/
	|   |   ├── img/
	|   |   ├── scripts/
	|   |   |   └── script.js
	|   |   └── styles/
	|   |       ├── modules/
	|   |       └── style.styl
	|   ├── partials/
	|   |   ├── footer.pug
	|   |   └── header.pug
	|   ├── layouts/
	|   |   └── default.pug
	|   ├── projects.pug
	|   └── index.pug
	├── gulpfile.js
	├── package.json
	├── projects.json
	├── .editorconfig
	└── .gitignore

## Automatic Tasks

- `$ gulp build`: Compile, concat and minify all files.
- `$ gulp server`: Watch the files to build and start a static server.
- `$ gulp deploy`: Deploy for gh-pages.

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing
Find on our [roadmap](https://github.com/vitebo/open-source-boilerplate/issues) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/vitebo/csshortcut-app/blob/master/CONTRIBUTING.md).

## History
See [Releases](https://github.com/vitebo/ocsshortcut-app/releases) for detailed changelog.

## License
[MIT License](https://github.com/afonsopacifer/open-source-boilerplate/blob/master/LICENSE.md) © [Afonso Pacifer](http://afonsopacifer.com/)
