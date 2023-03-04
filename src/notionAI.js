import { setting } from './setting.js';

export class NotionAI extends setting {
    async writingTopic(topic, prompt) {
        const content = JSON.stringify({
            type: topic,
            prompt: prompt,
            selectedText: '',
            pageTitle: ''
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

    async writingPromptType(type, title, text) {
        const content = JSON.stringify({
            type: type,
            pageTitle: title,
            selectedText: text,
        });
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