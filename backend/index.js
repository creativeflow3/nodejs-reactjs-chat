const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users',
      { username: username, secret: username, first_name: username },
      {
        headers: {
          'private-key': '493c3e1e-de90-410e-a341-aa3659d120e2',
        },
      }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    console.log(e);
    return res.status(e.response.status).json(e.response.data);
  }
  return res.json({ username: username, secret: 'sha256...' });
});

app.listen(3001);

// project id df68a794-2655-4492-b246-2cf0e2715fba
// private key 493c3e1e-de90-410e-a341-aa3659d120e2
