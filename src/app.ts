import {ProjectInput} from './components/project-input.js';
import {ProjectList} from './components/project-list.js';

//enables TS to utilize a namespace import
//then must include bundle in the tsconfig file to route the browser to the correct files
//if you want namespace tutorial go to udemy Typescrypt

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
