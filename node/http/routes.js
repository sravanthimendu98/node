import { handleGetRequest, handlePostRequest, handlePutRequest, handleDeleteRequest } from './handlers.js';

export const routeRequest = (req, res) => {
  const urlParts = req.url.split('/');
  const id = parseInt(urlParts[2], 10); 

  if (req.method === 'GET' && req.url === '/') {
    handleGetRequest(res);
  } 
  else if (req.method === 'POST' && req.url === '/data') {
    handlePostRequest(req, res);
  } 
  else if (req.method === 'PUT' && urlParts[1] === 'data' && !isNaN(id)) {
    handlePutRequest(req, res, id);
  } 
  else if (req.method === 'DELETE' && urlParts[1] === 'data' && !isNaN(id)) {
    handleDeleteRequest(res, id);
  } 
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
};
