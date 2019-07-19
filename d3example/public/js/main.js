import { hello, add, calculateTeamAverages } from './foo.js';

let val = hello(); // val's value is 'ALL GOOD TO GO'
let sum = add(10, 20); // sum's value is 30
console.log(sum);
// alert(val);


const playerAverages = [25.8, 4, 6.4]
const teamAverages = [114.7, 48, 23]
let stats = calculateTeamAverages(playerAverages, teamAverages);
const minData = [
  {
    "player":"Lillard",
    "min":35
  },
  {
    "player":"McCollum",
    "min":34
  },
  {
    "player":"Aminu",
    "min":28
  },
  {
    "player":"Nurkic",
    "min":27
  },
  {
    "player":"Hood",
    "min":24
  },
]


//
function circleMaker() {
  let svgContainer = d3.select("body").append("svg");
  let circle = svgContainer.selectAll("circle")
    .data(stats);
  circle.enter().append("circle")
    .style("fill", "lightgrey")
    .attr("cy", 60)
    .attr("cx", (d, i) => i * 100 + 30)
    .attr("r", (d) => d);
};
circleMaker();

//
function barchart(){
  let svgContainer = d3.select("body").append("svg");
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(minData, d => d.min)])
    .range([0, 400]);
  const yScale = d3.scaleBand()
    .domain(minData.map(d => d.player))
    .range([0, 1200]);

  let rect = svgContainer.selectAll("rect")
    .data(minData)
    .enter().append('rect')
      .attr('y', d => yScale(d.player))
      .attr('width', d => xScale(40))
      .attr('height', yScale.bandwidth());
  
}
barchart();