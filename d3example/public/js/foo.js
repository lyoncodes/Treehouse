export function hello() {
  return "ALL GOOD TO GO";
}

export function add(x, y) {
  return x + y;
}

export function calculateTeamAverages(player, team){
  let ppg = (player[0] / team[0]) * 100;
  let reb = (player[1] / team[1]) * 100;
  let ast = (player[2] / team [2]) * 100;
  return [ppg, reb, ast]
}