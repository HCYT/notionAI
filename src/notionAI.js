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

    // write article with prompt 
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

    parseResponse(response) {
        let result = "";
        response.trim().split("\n").forEach((row) => {
            const resultTemp = this.parseResponseJson(row);
            result += resultTemp;
        });
        return result;
    }
}