import express from 'express';
import { getJokeById, getJokes, getRandomJoke } from './jokes';

const app = express();

const jokeRoute = (request, response) => {
  const { id } = request.params || {};
  const joke = getJokeById(parseFloat(id));
  response.json(joke);
};
app.get('/api/joke/:id', jokeRoute);

const randomRoute = (request, response) => {
  const joke = getRandomJoke();
  response.json(joke);
};
app.get('/api/random', randomRoute);

const searchRoute = (request, response) => {
  const jokes = getJokes(request.query);
  response.json(jokes);
};
app.get('/api/search', searchRoute);

const staticRoute = express.static('public');
app.use('/static', staticRoute);
app.use('/', staticRoute);

export default app;
