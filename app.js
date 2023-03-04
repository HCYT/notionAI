import Koa from 'koa';
import Router from '@koa/router';
import { NotionAI } from './src/NotionAI.js';
const router = new Router();
const app = new Koa();
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
const notionAI = new NotionAI(process.env["TOKEN"], process.env["SPACE_ID"]);

let type = "";
let title = "";
let inputText = "";
let topic = "helpMeDraft";
let prompt = "Help me write a beginner's guide for product managers";
let result = "";


await notionAI.writingTopic(topic, prompt).then((text) => {
    result = text;
    console.log(`Writing with topic "${topic}": ${result}`);
}).catch((err) => {
    console.error(err);
});


//TODO: add example 