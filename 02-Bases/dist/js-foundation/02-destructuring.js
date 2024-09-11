"use strict";
// console.log(process.env);
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
// desestructuro
const { USERDOMAIN, PUBLIC } = process.env;
// console.table({USERDOMAIN,PUBLIC});
exports.characters = ['Flash', 'Superman', 'Batman', 'Hulk'];
const { 2: bat } = exports.characters;
const [, , , hulk] = exports.characters;
// console.table(bat)
