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
  let svgContainer = d3.select("#barChart");

  // Data Specific & Layout Values
  const xValue = d => d.min;
  const yValue = d => d.player;
  const margin = {top: 20, right: 20, bottom: 20, left: 20}

  const width = +svgContainer._groups[0][0].width.baseVal.value;
  const height = +svgContainer._groups[0][0].height.baseVal.value;

  console.log(height, width);

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // X scale
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(minData, xValue)])
    .range([0, innerWidth]);
  // Y scale
  const yScale = d3.scaleBand()
    .domain(minData.map(yValue))
    .range([0, innerHeight]);
  // Group element
  const g = svgContainer.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);
  let rect = g.selectAll("rect")
    .data(minData)
    .enter().append('rect')
      .attr('y', d => yScale(yValue(d)))
      .attr('width', d => xScale(xValue(d)))
      .attr('height', yScale.bandwidth());
  
}
barchart();