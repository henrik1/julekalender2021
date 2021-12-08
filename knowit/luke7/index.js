let strikk = 20, maur = 1;

while (maur < strikk) {
  maur += 1 + ((20/strikk)*maur);
  strikk += 20;
}
console.log(strikk/100);

