import { hello, add } from './foo.js';

let val = hello(); // val's value is 'ALL GOOD TO GO'
let sum = add(10, 20); // sum's value is 30
console.log(sum);
// alert(val);

const playerStats = [26.4, 4, 6.4]

//
function circleMaker() {
  let svg = d3.select("svg");
  // selection
  let circle = svg.selectAll("circle")
    .data(playerStats, (d) => d);
  circle.enter().append("circle")
    .attr("cy", 60)
    .attr("cx", (d, i) => i * 100 + 50)
    .attr("r", (d) => Math.sqrt(d * 75));
  circle.exit().remove();
};
circleMaker();
