import express from 'express';
import { createServer } from 'node:http';
import sampleData from './data.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json(sampleData);
});

app.post('/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received for post request', data });
});

const server = createServer(app);

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
