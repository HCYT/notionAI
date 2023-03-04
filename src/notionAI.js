import { setting } from './setting.js';

export class NotionAI extends setting {

    /**
     * Sends a request to the Notion API based on the given type and arguments.
     *
     * @param {string} type - The type of action to be performed.
     * @param {...*} args - The required parameters for the specific action.
     * @returns {Promise<string>} - The result of the API request.
     * @throws {Error} - If an invalid type is provided.
     */
    async write(type, ...args) {
        let content = {};
        switch (type) {
            case 'helpMeWrite':
            case 'helpMeDraft':
                content = {
                    type: type,
                    prompt: args[0]
                };
                break;
            case 'helpMeEdit':
                content = {
                    type: type,
                    prompt: args[0],
                    pageTitle: args[1],
                    pageContent: args[2],
                    selectedText: args[3]
                };
                break;
            case 'continueWriting':
                content = {
                    type: type,
                    pageTitle: args[0],
                    previousContent: args[1],
                    restContent: args[2]
                };
                break;
            case 'summarize':
            case 'improveWriting':
            case 'fixSpellingGrammar':
            case 'explainThis':
            case 'makeLonger':
            case 'makeShorter':
            case 'findActionItems':
            case 'simplifyLanguage':
                content = {
                    type: type,
                    pageTitle: args[0],
                    selectedText: args[1]
                };
                break;
            default:
                throw new Error(`Invalid type: ${type}`);
        }
        const response = await this.request(JSON.stringify(content));
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