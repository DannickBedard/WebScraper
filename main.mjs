import packageConfig from './package.json';
import { getRecipe } from './modules/ricardo.mjs';

var test = getRecipe('https://www.ricardocuisine.com/recettes/3856-pate-au-poulet');

console.log(test);