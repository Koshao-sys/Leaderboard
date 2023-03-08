import './style.css';
import { loadScores } from './modules/scores.js';
import { getScores, postScores } from './modules/scores-api.js';

/*getScores().then(result => {
  if (result.success) {
    const scores = result.data;
    const scoresTable = document.querySelector('.scores-table');
    loadScores(scoresTable, scores.result);
  } else {
    const error = result.error;
  }
});*/

getScores().then(result => {
  return (result.success) ? loadScores(document.querySelector('.scores-table'), result.data.result) : result.error;
});
  

const btnRefresh = document.getElementById('btnFresh');
btnRefresh.onclick = () => {
  getScores().then(result => {
    if (result.success) {
      const scores = result.data;
      const scoresTable = document.querySelector('.scores-table');
      loadScores(scoresTable, scores.result);
    } else {
      const error = result.error;
    }
  });
}

const addScore = document.getElementById('addScore');
addScore.onclick = (e) => {
  e.preventDefault();
  const form = document.getElementById('addForm');
  const error = document.querySelector('.errmsg');
  const user = form.elements.user.value;
  const score = parseInt(form.elements.score.value);
  const data = {
    "user": user,
    "score": score
  };
  postScores(data).then(result => {
    if (result.success) {
      const resp = result.data;
      error.textContent = resp.message;
      if(error.textContent !== '') {
        error.style.color = 'red';
      } else {
        error.textContent = resp.result; 
        error.style.color = 'green';
      }
    } else {
      const error = result.error;
      error.textContent = error;
    }
  });
  form.reset();
}