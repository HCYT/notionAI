# Hello user

If you need the latest information or want to raise an issue, please visit my Github page. Note that the NPM page will only be updated when new versions are released.

I just fixed an issue that prevented NPM from being referenced correctly. (2023/3/6)

# NotionAI.js

NotionAI.js is a JavaScript library that provides a simple and convenient interface for interacting with the Notion API. It includes functions for writing prompts, changing the tone of text, translating text, and more.

## Installation 

To get started, you can either clone or fork the project from GitHub, or use "npm install" to install it.
To install NotionAI.js, you can use npm:

```
npm i @cyh0809/notionai
```

### usage

```
// setting and import
const { NotionAI,TOPICS,TONE,LANGUAGE } = require('@cyh0809/notionai')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' });
const notionAI = new NotionAI(process.env["NOTION_TOKEN"], process.env["NOTION_SPACE_ID"]);


// usage example
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
```

Make sure to replace process.env["TOKEN"] and process.env["SPACE_ID"] with your actual Notion API token and space ID, respectively.

The NotionAI class relies on the setting class for its configuration options, which include the Notion API token and spaceId.

To use the NotionAI class, you can import it and create a new instance with the Notion API token and space ID. Then, you can call any of its methods with the appropriate parameters to make a request to the Notion API.

## How to get the token and spaceId

Make sure you subscribe to NotionAI; otherwise, you will only be able to use it 20 times.

You can refer to https://github.com/HCYT/notionAI/issues/1 to learn how to get the token and spaceId.


------------------------------------------

The NotionAI supports multiple types:

## option usage
### TOPICS, TONE, LANGUAGE
```
/// TOPICS
TOPICS.helpMeWrite
TOPICS.helpMeEdit
TOPICS.helpMeDraft
TOPICS.continueWriting
TOPICS.changeTone
TOPICS.summarize
TOPICS.improveWriting
TOPICS.fixSpellingGrammar
TOPICS.translate
TOPICS.explainThis
TOPICS.makeLonger
TOPICS.makeShorter
TOPICS.findActionItems
TOPICS.simplifyLanguage
/// TONE
TONE.professional
TONE.casual
TONE.straightforward
TONE.confident
TONE.friendly
/// LANGUAGE
LANGUAGE.english
LANGUAGE.korean
LANGUAGE.chinese
LANGUAGE.japanese
LANGUAGE.spanish
LANGUAGE.russiab
LANGUAGE.french
LANGUAGE.german
LANGUAGE.italian
LANGUAGE.portuguese
LANGUAGE.dutch
LANGUAGE.indonesia
LANGUAGE.tagalog
LANGUAGE.vietnamese
```

## usage

If you use the `helpMeWrite` or `helpMeDraft` option, you can follow this example

```
async function example2(topic, prompt) {
    try {
        const result = await notionAI.writing(topic, prompt);
        console.log(`Writing with topic "${topic}": ${result}`);
        return result;
    } catch (err) {
        console.error(err);
    }
}

const prompt="give me a joke";
example2(TOPICS.helpMeDraft,prompt)

```


If you use the `helpMeEdit` option, you can follow this example

```
let prompt="help Me Edit the article "
let pageTitle="the page title you already has"
let pageContent="the page content you already has"
let selectedText="you need ai help you edit content"

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

  example3(TOPICS.helpMeEdit, prompt, pageTitle, pageContent, selectedText);

```


If you use the `continueWriting` option, you can follow this example

```

let pageTitle="the article title"
let previousContent="the previous Content"
let restContent="paragraph you need to continue"

async function example4(pageTitle, previousContent, restContent) {
  try {
    const text = await notionAI.writing(TOPICS.helpMeEdit, pageTitle, previousContent, restContent);
    console.log(`Writing with topic "${TOPICS.helpMeEdit}": ${text}`);
    return text;
  } catch (err) {
    console.error(err);
  }
}
```



If you use the `summarize`,`improveWriting`,`fixSpellingGrammar`,`explainThis`,`makeLonger`,`makeShorter`,`findActionItems`,`simplifyLanguage` option, you can follow this example

```

let pageTitle="joke"
let selectedText="joke","Why did the scarecrow win an award? Because he was outstanding in his field.";
async function example5(pageTitle, selectedText) {
  try {
    const result = await notionAI.writing(TOPICS.makeLonger, pageTitle, selectedText);
    console.log(`Writing with topic "${TOPICS.makeLonger}": ${result}`);
  } catch (err) {
    console.error(err);
  }
}

```


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

async function example6() {
  try {
    const result = await notionAI.changeTone(TONE.professional, text);
    console.log(`Writing with topic "${topic}": ${result}`);
  } catch (err) {
    console.error(err);
  }
}

```
Result
This document will introduce you to the members of a Scrum team, including the Scrum Master, the Product Owner, and the development team members.


### writingPrompt

pageTitle,selectedText,pageContent allow null,you can use ""

#### usage

```
writingPrompt(prompt, pageTitle, selectedText, pageContent)

let prompt = "tell me a joke"
writingPrompt(prompt, "", "", "")

```

#### You can refer to the following prompt list
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

async function myFunction() {
  try {
    const result = await notionAI.translateText(LANGUAGE.chinese, text);
    console.log(`translateText "${topic}": ${result}`);
  } catch (err) {
    console.error(err);
  }
}

```




## Contributing
Welcome to contribute to NotionAI.js by creating pull requests or issues. If you find any bugs or have suggestions for new features, please feel free to open an issue on the GitHub repository. We appreciate any contributions and will review them as soon as possible.

## License
NotionAI is licensed under the [MIT](https://github.com/HCYT/notionAI/blob/master/LICENSE) License.

