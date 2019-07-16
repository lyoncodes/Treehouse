import { hello, add, calculateTeamAverages } from './foo.js';

let val = hello(); // val's value is 'ALL GOOD TO GO'
let sum = add(10, 20); // sum's value is 30
console.log(sum);
// alert(val);

const playerAverages = [25.8, 4, 6.4]
const teamAverages = [114.7, 48, 23]
let stats = calculateTeamAverages(playerAverages, teamAverages);

//
function circleMaker() {
  let svg = d3.select("svg");
  let circle = svg.selectAll("circle")
    .data(stats);
  circle.enter().append("circle")
    .style("fill", "lightgrey")
    .attr("cy", 60)
    .attr("cx", (d, i) => i * 100 + 30)
    .attr("r", (d) => d);
};
circleMaker();
