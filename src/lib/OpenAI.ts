import { Configuration, OpenAIApi } from "openai";

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error("Invalid OpenAI key!");
}

const configuration = new Configuration({
  apiKey,
});

const openai = new OpenAIApi(configuration);

export default openai;
