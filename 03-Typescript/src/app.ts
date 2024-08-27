import { findHeroById } from "./services/hero.service";


const hero = findHeroById(3);
console.log("🚀 ~ hero:", hero?.name ?? 'Hero not found');

