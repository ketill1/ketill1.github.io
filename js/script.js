// https://github.com/openai/openai-node
const express = require('express');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const OpenAI = require('openai');
const app = express();
const openai = new OpenAI("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");

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const message = req.body.message;

  try {
    const gptResponse = await openai.complete({
      engine: 'davinci',
      prompt: message,
      max_tokens: 150,
      n: 1,
      temperature: 0.5,
      stop: '\n'
    });
  
    const text = gptResponse.data.choices[0].text;
    res.json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(3000, () => console.log('Server started'));
