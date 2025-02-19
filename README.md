# Translate Text Using the DeepL API in Node.js

This guide will walk you through integrating the DeepL API into a Node.js application to translate text into over 29 supported languages. Whether you're building a multilingual website, a chatbot, or a content management system, this tutorial will help you add high-quality translation capabilities to your project.

## Table of Contents
- [What is DeepL?](#what-is-deepl)
- [Why Use DeepL?](#why-use-deepl)
- [Prerequisites](#prerequisites)
- [Step 1: Set Up Your Node.js Project](#step-1-set-up-your-nodejs-project)
- [Step 2: Store Your API Key Securely](#step-2-store-your-api-key-securely)
- [Step 3: Write the Translation Code](#step-3-write-the-translation-code)
- [Supported Languages](#supported-languages)
- [Step 4: Run the Code](#step-4-run-the-code)
- [Example Output](#example-output)
- [Conclusion](#conclusion)

## What is DeepL?
DeepL is a state-of-the-art translation service known for its high-quality, natural-sounding translations. It supports 29 languages and offers both free and paid API plans, making it accessible for developers of all levels. The DeepL API is easy to integrate and provides fast, accurate translations.

## Why Use DeepL?
- **High-Quality Translations**: DeepL is renowned for its accurate and context-aware translations.
- **Wide Language Support**: It supports 29 languages, including English, Spanish, French, German, Chinese, and more.
- **Easy Integration**: The DeepL API is straightforward to use and well-documented.
- **Flexible Pricing**: With both free and paid plans, DeepL is accessible for projects of all sizes.

## Prerequisites
Before you begin, ensure you have the following:

- Node.js installed on your machine. Download it from [nodejs.org](https://nodejs.org/).
- A DeepL API key. Sign up on the [DeepL API Developer Page](https://www.deepl.com/pro-api) to get your key.
- Basic knowledge of JavaScript and Node.js.

## Step 1: Set Up Your Node.js Project
Create a new project directory and navigate into it:

```bash
mkdir deepl-translator
cd deepl-translator
```

Initialize a Node.js project:

```bash
npm init -y
```

Install the required dependencies:

```bash
npm install deepl-node dotenv
```

- **deepl-node**: The official DeepL Node.js library.
- **dotenv**: A package to load environment variables from a `.env` file.

## Step 2: Store Your API Key Securely
Create a `.env` file in your project root directory and add your DeepL API key:

```env
DEEPL_API_KEY=your-api-key-here
```

Add `.env` to your `.gitignore` file to avoid committing sensitive information:

```bash
echo ".env" >> .gitignore
```

## Step 3: Write the Translation Code
Create a file named `translate.js` and add the following code:

```javascript
require("dotenv").config(); // Load environment variables
const deepl = require("deepl-node");

// Initialize the DeepL translator
const translator = new deepl.Translator(process.env.DEEPL_API_KEY);

/**
 * Translates text to the target language.
 * @param {string} text - The text to translate.
 * @param {string} targetLanguage - The target language code (e.g., "es" for Spanish).
 * @returns {Promise<string>} - The translated text.
 */
async function translateText(text, targetLanguage) {
  if (!text || typeof text !== "string") {
    throw new Error("Invalid text input. Please provide a valid string.");
  }

  if (!targetLanguage || typeof targetLanguage !== "string") {
    throw new Error("Invalid target language. Please provide a valid language code.");
  }

  try {
    const result = await translator.translateText(text, null, targetLanguage);
    return result.text;
  } catch (err) {
    console.error(`Error translating text: ${err.message}`);
    throw err;
  }
}

// Example usage
translateText("Hello, world!", "es")
  .then((translatedText) => {
    console.log(`Translated text: ${translatedText}`);
  })
  .catch((err) => {
    console.error(`Translation failed: ${err.message}`);
  });
```

## Supported Languages
DeepL supports 29 languages. Below is the list of supported languages and their corresponding language codes:

| Language               | Language Code |
|------------------------|---------------|
| Bulgarian             | bg            |
| Czech                 | cs            |
| Danish                | da            |
| German                | de            |
| Greek                 | el            |
| English               | en            |
| Spanish               | es            |
| Estonian              | et            |
| Finnish               | fi            |
| French                | fr            |
| Hungarian             | hu            |
| Indonesian            | id            |
| Italian               | it            |
| Japanese              | ja            |
| Korean                | ko            |
| Lithuanian            | lt            |
| Latvian               | lv            |
| Norwegian (Bokmål)    | nb            |
| Dutch                 | nl            |
| Polish                | pl            |
| Portuguese            | pt            |
| Romanian              | ro            |
| Russian               | ru            |
| Slovak                | sk            |
| Slovenian             | sl            |
| Swedish               | sv            |
| Turkish               | tr            |
| Ukrainian             | uk            |
| Chinese (Simplified)  | zh            |

## Step 4: Run the Code
Save the code in a file, e.g., `translate.js`.

Ensure your `.env` file contains the correct DeepL API key:

```env
DEEPL_API_KEY=your-api-key-here
```

Run the program:

```bash
node translate.js
```

## Example Output
If the setup is correct, you’ll see output like this:

```bash
Translated text: ¡Hola, mundo!
```

## Conclusion
Integrating the DeepL API into your Node.js application is a simple and effective way to add translation capabilities. With support for 29 languages, DeepL makes it easy to build multilingual applications that cater to a global audience.

Try it out in your next project! If you have any questions or run into issues, feel free to reach out.

