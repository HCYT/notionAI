# NotionAI.js

This is a JavaScript module that provides a class called NotionAI for making requests to the Notion API. It extends the setting class, which provides the configuration options for the API request.

The NotionAI class has four methods:

`writingTopic(topic, prompt)`: This method takes a topic and prompt as input and returns a result from the Notion API.
`changeTone(tone, text)`: This method takes a tone and text as input and returns a result from the Notion API.
`writingPromptType(type, title, text)`: This method takes a type, title, and text as input and returns a result from the Notion API.
`translateText(language, text)`: This method takes a language and text as input and returns a result from the Notion API.

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
If you want to contribute to NotionAI, please read the contributing guide for instructions.

## License
NotionAI is licensed under the MIT License.

