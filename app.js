const { NotionAI } = require('./src/NotionAI.js')
const dotenv = require('dotenv')
const { TOPICS, TONE, LANGUAGE } = require('./src/types.js')
dotenv.config({ path: './.env' });
const notionAI = new NotionAI(process.env["NOTION_TOKEN"], process.env["NOTION_SPACE_ID"]);


let prompt = "";
let topic ="poem"
prompt = "give me a poem";
async function example1(topic, prompt) {
    
    try {
        const result = await notionAI.writingPrompt(prompt);
        console.log(`Writing with topic "${topic}": ${result}`);
    } catch (err) {
        console.error(err);
    }
}

example1(topic,prompt);


// async function example2(topic, prompt) {
//     try {
//         const result = await notionAI.writing(topic, prompt);
//         console.log(`Writing with topic "${topic}": ${result}`);
//         return result;
//     } catch (err) {
//         console.error(err);
//     }
// }

// prompt = "give me a joke";
// example2(TOPICS.helpMeDraft, prompt)


async function example3(topic, prompt, pageTitle, pageContent, selectedText) {
    try {
      const result = await notionAI.writing(topic, prompt, pageTitle, pageContent, selectedText);
      console.log(`Writing with topic "${topic}": ${result}`);
      return result;
    } catch (err) {
      console.error(err);
      return err;
    }
  }


  async function example4(pageTitle, previousContent, restContent) {
    try {
      const text = await notionAI.writing(TOPICS.helpMeEdit, pageTitle, previousContent, restContent);
      console.log(`Writing with topic "${TOPICS.helpMeEdit}": ${text}`);
      return text;
    } catch (err) {
      console.error(err);
    }
  }
