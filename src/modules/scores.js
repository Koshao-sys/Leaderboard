const scoresObj = [
  { name: 'Name', score: 100 },
  { name: 'Name', score: 20 },
  { name: 'Name', score: 50 },
  { name: 'Name', score: 78 },
  { name: 'Name', score: 125 },
  { name: 'Name', score: 77 },
  { name: 'Name', score: 42 },
];

const loadScores = (scoresTable) => {
  scoresTable.innerHTML = '';
  const list = document.createElement('ul');
  list.classList = 'list-items';
  scoresTable.appendChild(list);
  for (let i = 0; i < scoresObj.length; i += 1) {
    const item = document.createElement('li');
    item.classList = 'list-item';
    item.innerHTML = `
    <li>
      <span>${scoresObj[i].name}</span>
      <span>:</span>
      <span>${scoresObj[i].score}</span>
    </li>
    `;
    list.appendChild(item);
  }
};

export default loadScores;