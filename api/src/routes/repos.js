import { Router } from 'express';
import axios from 'axios';

export const repos = Router();

repos.get('/', async (req, res) => {
  res.header('Cache-Control', 'no-store');
  res.set('Content-Type', 'application/json');
  res.status(200);
  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  const response = await axios.get(
    'https://api.github.com/users/silverorange/repos'
  );
  const result = response.data.filter((repository) => repository.fork === false);
  res.json(result);
});
