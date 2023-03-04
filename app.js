import Koa from 'koa';
import Router from '@koa/router';
import { NotionAI } from './src/NotionAI.js';
const router = new Router();
const app = new Koa();
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
const notionAI = new NotionAI(process.env["TOKEN"], process.env["SPACE_ID"]);
import { TOPICS, TONE, LANGUAGE } from './src/types.js';

let type = "";
let title = "";
let inputText = "";
let topic = "helpMeDraft";
//let prompt = "Help me write a beginner's guide for product managers";
let result = "";



let prompt = "a joke"
await notionAI.writingPrompt(prompt).then((text) => {
    result = text;
    console.log(`Writing with topic "${topic}": ${result}`);
}).catch((err) => {
    console.error(err);
});






// let pageTitle = "Scrum 團隊成員組成介紹"
// let pageContent = "這份文件介紹了 Scrum 團隊成員的組成，包括 Scrum Master、產品負責人和開發團隊成員"
// let selectedText = ""
// let prompt="寫一手情詩";
// await notionAI.writingPrompt(prompt, pageTitle, selectedText, pageContent).then((text) => {
//     result = text;
//     console.log(`Writing with topic "${topic}": ${result}`);
// }).catch((err) => {
//     console.error(err);
// });


// let text = "This document provides an introduction to the composition of a Scrum team, including the Scrum Master, the Product Owner, and the development team members."
// await notionAI.changeTone(TONE.professional, text).then((text) => {
//     result = text;
//     console.log(`Writing with topic "${topic}": ${result}`);
// }).catch((err) => {
//     console.error(err);
// });

// let text = "This document provides an introduction to the composition of a Scrum team, including the Scrum Master, the Product Owner, and the development team members."

// await notionAI.translateText(LANGUAGE.chinese, text).then((text) => {
//     result = text;
//     console.log(`translateText "${topic}": ${result}`);
// }).catch((err) => {
//     console.error(err);
// });
