import { createServer } from 'node:http';
import { routeRequest } from './routes.js';

const server = createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  routeRequest(req, res); 
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
