require("dotenv").config(); // Load environment variables
const deepl = require("deepl-node");
const readline = require("readline");

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

// Set up readline for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Prompt the user for input and translate it.
 */
function promptUser() {
  rl.question(
    "Enter the text you want to translate (or type 'exit' to quit): ",
    async (text) => {
      if (text.toLowerCase() === "exit") {
        console.log("Goodbye!");
        rl.close();
        return;
      }

      rl.question(
        "Enter the target language code (e.g., es for Spanish): ",
        async (targetLanguage) => {
          try {
            const translatedText = await translateText(text, targetLanguage);
            console.log(`Translated text: ${translatedText}`);
          } catch (err) {
            console.error(`Translation failed: ${err.message}`);
          }

          // Prompt the user again
          promptUser();
        }
      );
    }
  );
}

// Start the program
console.log("Welcome to the DeepL Translator!");
promptUser();
