module.exports = (str) => {
  const idx = str.split(' ').map(w => w.split('').reduce((s, l) => s + l.charCodeAt(0) - 96, 0)).reduce((highscore, curscore, idx, arr) => curscore > arr[highscore] ? idx : highscore, 0);
  return str.split(' ')[idx];
};
