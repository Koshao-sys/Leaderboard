import './style.css';
import loadScores from './modules/scores.js';
import { getScores, postScores } from './modules/scores-api.js';

const btnRefresh = document.getElementById('btnFresh');
btnRefresh.onclick = () => {
  getScores().then((result) => {
    if (result.success) {
      const scores = result.data;
      const scoresTable = document.querySelector('.scores-table');
      loadScores(scoresTable, scores.result);
    }
  });
};

const addScore = document.getElementById('addScore');
addScore.onclick = (e) => {
  e.preventDefault();
  const form = document.getElementById('addForm');
  const error = document.querySelector('.errmsg');
  const user = form.elements.user.value;
  const score = parseInt(form.elements.score.value, 10);
  const data = {
    user,
    score,
  };
  postScores(data).then((result) => {
    if (result.success) {
      const resp = result.data;
      error.textContent = resp.message;
      if (error.textContent !== '') {
        error.style.color = '#05fa11';
      } else {
        error.textContent = resp.result;
        error.style.color = 'green';
      }
    }
  });

  form.reset();
};