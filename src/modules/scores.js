const loadScores = (scoresTable, scores) => {
  scoresTable.innerHTML = '';
  const list = document.createElement('ul');
  list.classList = 'list-items';
  scoresTable.appendChild(list);
  for (let i = 0; i < scores.length; i += 1) {
    const item = document.createElement('li');
    item.classList = 'list-item';
    item.innerHTML = `
      <span>${scores[i].user}</span>
      <span>:</span>
      <span>${scores[i].score}</span>
    `;
    list.appendChild(item);
  }
};

export default loadScores;