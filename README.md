# NotionAI.js

NotionAI.js is a JavaScript library that provides a simple and convenient interface for interacting with the Notion API. It includes functions for writing prompts, changing the tone of text, translating text, and more.

## Installation (not ready yet) 

You can start by cloning or forking the project from GitHub.

To install NotionAI.js, you can use npm:

```
npm install notionai
```

## usage ：

```
// setting and import
import { NotionAI } from './src/NotionAI.js';
import { TOPICS, TONE, LANGUAGE } from './src/types.js';
const notionAI = new NotionAI(process.env["TOKEN"], process.env["SPACE_ID"]);

// usage example
let pageTitle = "Scrum member summary"
let pageContent = "This document will introduce you to the members of a Scrum team, including the Scrum Master, the Product Owner, and the development team members"
let selectedText = ""
await notionAI.writingPrompt(prompt, pageTitle, selectedText, pageContent).then((text) => {
    result = text;
    console.log(`Writing with topic "${topic}": ${result}`);
}).catch((err) => {
    console.error(err);
});
```

Make sure to replace process.env["TOKEN"] and process.env["SPACE_ID"] with your actual Notion API token and space ID, respectively.

The NotionAI class relies on the setting class for its configuration options, which include the Notion API token and space ID.

To use the NotionAI class, you can import it and create a new instance with the Notion API token and space ID. Then, you can call any of its methods with the appropriate parameters to make a request to the Notion API.

## How to get the token and spaceId

Make sure you subscribe to NotionAI; otherwise, you will only be able to use it 20 times.

You can refer to https://github.com/HCYT/notionAI/issues/1 to learn how to get the token and spaceId.


------------------------------------------

The NotionAI class has four methods:

### helpMeWrite and continueWriting
`writingTopic(topic, prompt)`: This method takes a topic and prompt as input and returns a result from the Notion API.


### changeTone of article
`changeTone(tone, text)`: This method takes a tone and text as input and returns a result from the Notion API.

You can use the option

``` 
TONE.professional
TONE.casual
TONE.straightforward
TONE.confident
TONE.friendly
```
#### usage

```
let text = "This document provides an introduction to the composition of a Scrum team, including the Scrum Master, the Product Owner, and the development team members."
await notionAI.changeTone(TONE.professional, text).then((text) => {
    result = text;
    console.log(`Writing with topic "${topic}": ${result}`);
}).catch((err) => {
    console.error(err);
});


```
Result
This document will introduce you to the members of a Scrum team, including the Scrum Master, the Product Owner, and the development team members.


- `writingPrompt(prompt, pageTitle, selectedText, pageContent)`: This method takes a type, title, and text as input and returns a result from the Notion API.

```
Brainstorm Ideas - A process of generating a large number of creative ideas or solutions to a problem through group discussion or individual brainstorming.

Blog Post - An online article or entry written in a blog format that covers a specific topic, typically written in an informal or conversational style.

Outline - A structured plan or summary of a document, speech, or project, usually presented in bullet points or headings.

Social Media Post - A message or update posted on a social media platform, such as Facebook, Twitter, or Instagram, to communicate with an audience and engage with them.

Press Release - A written or recorded statement to the media announcing news, events, or product launches related to a business or organization.

Creative Story - A narrative work of fiction or non-fiction that uses imaginative language, vivid imagery, and creative techniques to convey a message or entertain the reader.

Essay - A short piece of writing that expresses the author's perspective or argument on a specific topic, typically written in a formal style and structured into paragraphs.

Poem - A piece of writing that uses language, sound, and rhythm to evoke emotions, express thoughts or feelings, or convey a message.

Meeting Agenda - A list of topics or items to be discussed during a meeting, usually arranged in a specific order and including the time allotted for each item.

Pros and Cons List - A method of decision-making or analysis that lists the advantages and disadvantages of a particular choice or option.

Job Description - A document that outlines the duties, responsibilities, and requirements of a particular job position.

Sales Email - An email message sent to potential customers to introduce a product or service, highlight its features and benefits, and persuade them to make a purchase.

Recruiting Email - An email message sent to job seekers to promote a job opportunity, explain the company's culture and values, and invite them to apply for the position.
```

### Translate Article
`translateText(language, text)`: This method takes a language and text as input and returns a result from the Notion API.

You can translate to these language
```
english, korean, chinese, japanese, spanish, russiab, french, german, italian, portuguese, dutch, indonesia, tagalog, vietnamese
```

usage
```
let text = "This document provides an introduction to the composition of a Scrum team, including the Scrum Master, the Product Owner, and the development team members."

await notionAI.translateText(LANGUAGE.chinese, text).then((text) => {
    result = text;
    console.log(`translateText "${topic}": ${result}`);
}).catch((err) => {
    console.error(err);
});

```




## Contributing
Welcome to contribute to NotionAI.js by creating pull requests or issues. If you find any bugs or have suggestions for new features, please feel free to open an issue on the GitHub repository. We appreciate any contributions and will review them as soon as possible.

## License
NotionAI is licensed under the MIT License.

