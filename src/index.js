import './style.css';
import loadScores from './modules/scores.js';

const scoresTable = document.querySelector('.scores-table');
loadScores(scoresTable);