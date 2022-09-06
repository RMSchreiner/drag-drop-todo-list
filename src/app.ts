
//npm start runs lite client
//tsc -w typescript wait server open in 2nd terminal
// webpack $ npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader 'remove.js extensions'
//tsconfig file for webpack 'es6','es2015', outDir"./dist", no need of root,

import {ProjectInput} from './components/project-input';
import {ProjectList} from './components/project-list';

//enables TS to utilize a namespace import
//then must include bundle in the tsconfig file to route the browser to the correct files
//if you want namespace tutorial go to udemy Typescrypt
//export is superior to namespace because you ask for specific imports and will get errors if parts are missing
//import * from ProjectInput './components/project-input.js'; is a way to get all the functions or classes as a object call ex. ProjectInput.projectinput

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
