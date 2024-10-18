import { parseRequestBody } from './utils.js';
import sampleData from './data.js';

let dataStore = [...sampleData]; 

export const handleGetRequest = (res) => {
  res.statusCode = 200;
  res.end(JSON.stringify(dataStore));
};

export const handlePostRequest = async (req, res) => {
  try {
    const data = await parseRequestBody(req);
    dataStore.push(data);
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Data received for post request', data: dataStore }));
  } catch (error) {
    res.statusCode = 400;
    res.end(JSON.stringify({ message: 'Invalid data format', error }));
  }
};

export const handlePutRequest = async (req, res, id) => {
  try {
    const updatedData = await parseRequestBody(req);
    const index = dataStore.findIndex(item => item.id === id);
    if (index !== -1) {
      dataStore[index] = { ...dataStore[index], ...updatedData };
      res.statusCode = 200;
      res.end(JSON.stringify({ message: `Data with id ${id} updated successfully`, data: dataStore[index] }));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: `Data with id ${id} not found` }));
    }
  } catch (error) {
    res.statusCode = 400;
    res.end(JSON.stringify({ message: 'Invalid data format', error }));
  }
};

export const handleDeleteRequest = (res, id) => {
  const index = dataStore.findIndex(item => item.id === id);
  if (index !== -1) {
    const deletedItem = dataStore.splice(index, 1);
    res.statusCode = 200;
    res.end(JSON.stringify({ message: `Data with id ${id} deleted successfully`, data: deletedItem }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: `Data with id ${id} not found` }));
  }
};
