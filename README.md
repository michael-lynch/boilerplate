#Boilerplate

This boilerplate is framework agnostic, mobile first, and only contains a simple html file to get you started.

It uses Node Package Manager and includes some basic [Grunt](http://gruntjs.com/) tasks as well as some basic [LESS](http://lesscss.org) styles.

###Node Package Manager

To start using the Grunt tasks, you'll need to install [Node.js](http://nodejs.org/) and [Node Package Manager](https://www.npmjs.org/), which is included with Node. Once installed, simply navigate to your project's root directory and run:

```
npm install
```

###Grunt

To get started with your Grunt tasks, navigate to your project's root directory and run:

```
grunt watch
```

This will watch for changes in:

```
resources/less/style.less
resources/js/scripts.js
```

The Grunt tasks included are:

- [grunt](https://www.npmjs.org/package/grunt)
	
- [grunt-contrib-less](https://www.npmjs.org/package/grunt-contrib-less)

- [grunt-contrib-jshint](https://www.npmjs.org/package/grunt-contrib-jshint)

- [grunt-contrib-concat](https://www.npmjs.org/package/grunt-contrib-concat)

- [grunt-contrib-uglify](https://www.npmjs.org/package/grunt-contrib-uglify)

- [grunt-contrib-imagemin](https://www.npmjs.org/package/grunt-contrib-imagemin)

- [grunt-contrib-shell](https://www.npmjs.org/package/grunt-contrib-shell)

- [grunt-contrib-watch](https://www.npmjs.org/package/grunt-contrib-watch)

###LESS

The boilerplate includes some default LESS stylesheets for mixins, fonts, icons, forms, animations etc. It also defines two basic breakpoints for tablet (800px) and desktop (1000px), while the default styles are mobile.