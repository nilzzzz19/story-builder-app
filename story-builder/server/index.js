const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: 'YOUR_API_KEY',
});
const openai = new OpenAIApi(configuration);
const history = [];

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/generate-text', async (req, res) => {
  const user_input = req.body.prompt;

  const messages = [];
  for (const [input_text, completion_text] of history) {
    messages.push({ role: "user", content: input_text });
    messages.push({ role: "assistant", content: completion_text });
  }

  messages.push({ role: "user", content: user_input });

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    const completion_text = completion.data.choices[0].message.content;
    history.push([user_input, completion_text]);

    res.json(completion_text);

  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      res.status(500).send('Error generating text');
    } else {
      console.log(error.message);
      res.status(500).send('Error generating text');
    }
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
