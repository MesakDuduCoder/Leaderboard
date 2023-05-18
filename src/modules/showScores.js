const showScores = (scores) => {
  const scoresTable = document.getElementById('display-scores');
  scoresTable.innerHTML = '';
  scores.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.user}: ${item.score}`;
    scoresTable.appendChild(li);
  });
};

export default showScores;