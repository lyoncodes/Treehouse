import { calcTeamAverages } from './foo.js';

const playerAverages = [25.8, 4, 6.4]
const teamAverages = [114.7, 48, 23]
let stats = calcTeamAverages(playerAverages, teamAverages);

export function circleMaker() {
  let svgContainer = d3.select("body").append("svg");
  let circle = svgContainer.selectAll("circle")
    .data(stats);
  circle.enter().append("circle")
    .style("fill", "lightgrey")
    .attr("cy", 60)
    .attr("cx", (d, i) => i * 100 + 30)
    .attr("r", (d) => d);
};
