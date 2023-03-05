const koa = require('koa')
const Router = require('@koa/router')
const { NotionAI } = require('./src/NotionAI.js')
const dotenv = require('dotenv')
const { TOPICS, TONE, LANGUAGE } = require('./src/types.js')
const router = new Router();
const app = new koa();
dotenv.config({ path: './.env' });
const notionAI = new NotionAI(process.env["TOKEN"], process.env["SPACE_ID"]);


let type = "";
let title = "";
let inputText = "";
let topic = "helpMeDraft";
//let prompt = "Help me write a beginner's guide for product managers";
let result = "";



async function writingPrompt() {
    let prompt = "a joke"
    try {
        const result = await notionAI.writingPrompt(prompt);
        console.log(`Writing with topic "${topic}": ${result}`);
    } catch (err) {
        console.error(err);
    }
}

writingPrompt();