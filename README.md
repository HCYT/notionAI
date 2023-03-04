# NotionAI.js

NotionAI.js is a JavaScript library that provides a simple and convenient interface for interacting with the Notion API. It includes functions for writing prompts, changing the tone of text, translating text, and more.

## Installation (not ready yet)

To install NotionAI.js, you can use npm:

```
npm install notionai
```

The NotionAI class has four methods:

- `writingTopic(topic, prompt)`: This method takes a topic and prompt as input and returns a result from the Notion API.

- `changeTone(tone, text)`: This method takes a tone and text as input and returns a result from the Notion API.

- `writingPromptType(type, title, text)`: This method takes a type, title, and text as input and returns a result from the Notion API.

- `translateText(language, text)`: This method takes a language and text as input and returns a result from the Notion API.

The NotionAI class relies on the setting class for its configuration options, which include the Notion API token and space ID.

To use the NotionAI class, you can import it and create a new instance with the Notion API token and space ID. Then, you can call any of its methods with the appropriate parameters to make a request to the Notion API.

Example usage in app.js:

```
import { NotionAI } from './src/NotionAI.js';
const notionAI = new NotionAI(process.env["TOKEN"], process.env["SPACE_ID"]);
await notionAI.writingTopic(topic, prompt).then((text) => {
    result = text;
    console.log(`Writing with topic "${topic}": ${result}`);
}).catch((err) => {
    console.error(err);
});
```

Make sure to replace process.env["TOKEN"] and process.env["SPACE_ID"] with your actual Notion API token and space ID, respectively.

## Contributing
Welcome to contribute to NotionAI.js by creating pull requests or issues. If you find any bugs or have suggestions for new features, please feel free to open an issue on the GitHub repository. If you would like to contribute to the project, please submit a pull request with your changes. We appreciate any contributions and will review them as soon as possible.

## License
NotionAI is licensed under the MIT License.

