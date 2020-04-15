## Initial tooling setup

 ### Tools Used
  yarn, webpack, react, babel

 ### Steps

* create package.json with
```
  yarn init
```

* add the package dependencies
```
  yarn add react react-dom
  yarn add --dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader html-webpack-plugin
```

* create webpack.config file and add enties for entry point, output location, rules, and plugins if any
 Following folder structure followed
  #### src
    -  all the react components, start file and the template files index.html resides here
  #### dist
    -  The compiled/ bundled files are placed in this location

* based on the config settings, add the folders and files

* if using html-webpack-plugin , create a template for the index.html, if not then create the html file index.html with a div for root element, add the script tag

* either add the babel presets in the package file or create a .babelrc file with the following presets
```
{
  "presets": ["env", "react"]
}
```

* update the package.json file with the scripts for starting and build using webpack

* if using git, use the .gitignore file to add the files/folders which need to be ignored with git


## References
* [React & Webpack 4 From Scratch - No CLI](https://www.youtube.com/watch?v=deyxI-6C2u4)
* [markdown](https://guides.github.com/features/mastering-markdown/)
