export function hello() {
  return "ALL GOOD TO GO";
};

export function add(x, y) {
  return x + y;
};

export function calcTeamAverages(player, team){
  let ppg = (player[0] / team[0]) * 100;
  let reb = (player[1] / team[1]) * 100;
  let ast = (player[2] / team [2]) * 100;
  return [ppg, reb, ast]
};

export function calcUSG(fga, fta, tov, teamMin, min, teamFga, teamFta, teamTov){
  let usg = 100 * ((fga + 0.44 * fta + tov)*(teamMin/5))/(min*(teamFga + 0.44 * teamFta + teamTov));
  return usg;
};

export function calcAP(ast, fg, min, teamMin, teamFg){
  let astPer = 100*ast/(((min/(teamMin/5))*teamFg)-fg);
  return astPer;
};

export function calcEFG(fg, tpfg, fga){
  let efg = (fg + 0.5 * tpfg)/fga;
  return efg;
}

export function calcTSP(pts, fga, fta){
  let tsp = pts/(2*(fga + 0.44 * fta))
  return tsp;
}

export function calcPPP(pts, fga, fta, tov){
  let ppp = pts/(fga + 0.44 * fta + tov);
  return ppp;
}