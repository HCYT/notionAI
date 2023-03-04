import { setting } from './setting.js';

export class NotionAI extends setting {

    //helpMeWrite

    async helpMeWrite(type, pageTitle, previousContent, restContent, prompt) {
        const content = JSON.stringify({
            type: type,
            prompt: prompt,
            pageTitle: pageTitle,
            previousContent: previousContent,
            restContent: restContent
        });
        const response = await this.request(content);
        const result = this.parseResponse(response);
        return result;
    }

    //continueWriting
    async continueWriting(type, pageTitle, previousContent, restContent) {
        const content = JSON.stringify({
            type: type,
            pageTitle: pageTitle,
            previousContent: previousContent,
            restContent: restContent
        });
        const response = await this.request(content);
        const result = this.parseResponse(response);
        return result;
    }


    /**
    * This is an async function to generate a writing prompt.
    * @param {string} prompt - The writing prompt to be generated.
    * @param {string} pageTitle - (optional) The title of the page where the writing prompt is to be used.
    * @param {string} selectedText - (optional) The selected text where the writing prompt is to be used.
    * @param {string} pageContent - (optional) The content of the page where the writing prompt is to be used.
    * @returns {Promise} - A Promise that resolves with the generated writing prompt.
    */
    async writingPrompt(prompt, pageTitle = "", selectedText = "", pageContent = "") {
        const content = JSON.stringify({
            type: "helpMeEdit",
            prompt: prompt,
            selectedText: selectedText,
            pageTitle: pageTitle,
            pageContent: pageContent
        });
        const response = await this.request(content);
        const result = this.parseResponse(response);
        return result;
    }


    /**
    * This is an async function to change the tone of text.
    * @param {string} tone - The tone to change the text to.
    * @param {string} text - The text to be changed.
    * @returns {Promise} - A Promise that resolves with the text with the changed tone.
    */
    async changeTone(tone, text) {
        const content = JSON.stringify({
            text: text,
            tone: tone,
            type: "changeTone"
        });
        console.log(content)
        const response = await this.request(content);
        const result = this.parseResponse(response);
        return result;
    }


    /**
     * This is an async function to translate text to the specified language.
     * @param {string} language - The language to translate the text to.
     * @param {string} text - The text to be translated.
     * @returns {Promise} - A Promise that resolves with the translated text.
     */

    async translateText(language, text) {
        const content = JSON.stringify({
            type: 'translate',
            language: language,
            text: text,
        });
        const response = await this.request(content);
        const result = this.parseResponse(response);
        return result;
    }

    /**
     * This function parses a response from the server and returns the result as a string.
     * @param {string} response - The response from the server.
     * @returns {string} - The parsed response as a string. 
     */
    parseResponse(response) {
        let result = "";
        // Trim the response and split it by newlines.
        response.trim().split("\n").forEach((row) => {
            // Parse the row as JSON and add it to the result.
            const resultTemp = this.parseResponseJson(row);
            result += resultTemp;
        });
        return result;
    }
}