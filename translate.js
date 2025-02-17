require("dotenv").config();
const deepl = require("deepl-node");

const translator = new deepl.Translator(process.env.DEEPL_API_KEY);

async function translateText(text, targetLanguage) {
  if (!text || typeof text !== "string") {
    throw new Error("Invalid text input. Please provide a valid string.");
  }

  if (!targetLanguage || typeof targetLanguage !== "string") {
    throw new Error(
      "Invalid target language. Please provide a valid language code."
    );
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



  