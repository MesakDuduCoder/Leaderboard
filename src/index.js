import _ from 'lodash';
import './style.css';
import { createGame } from './createGame.js';
import { addScore } from './addScore.js';
import { getScores } from './getScores.js';
import { showScores } from './showScores.js';

const game = await createGame();

const gameId = 'CvCuFW4QPCTH7GbK5ogT';

const submitScore = document.getElementById('add-score-button');
submitScore.addEventListener('click', (e) => {
  e.preventDefault();
  const score = document.getElementById('score');
  const name = document.getElementById('name');
  addScore(name.value, score.value, gameId);
  name.value = '';
  score.value = '';
});

const refreshScores = document.getElementById('show-scores-button');
refreshScores.addEventListener('click', async (e) => {
  e.preventDefault();
  const updateScores = await getScores(gameId);
  showScores(updateScores.result);
});

const scores = await getScores(gameId);
showScores(scores.result);