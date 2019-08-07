import { calcUSG, calcAP, calcEFG, calcTSP, calcPPP } from './foo.js'

const data = [
  {
    "season": 2013,
    "astPer": calcAP(531, 553, 3167, 19855, 3009),
    "efg": calcEFG(553, 185, 1288),
    "tsp": calcTSP(1562, 1288, 321)
  },
  {
    "season": 2014,
    "astPer": calcAP(457, 553, 2937, 19855, 3207),
    "efg": calcEFG(553, 218, 1304),
    "tsp": calcTSP(1695, 1304, 426)

  },
  {
    "season": 2015,
    "astPer": calcAP(507, 590, 2925, 19855, 3175),
    "efg": calcEFG(590, 196, 1360),
    "tsp": calcTSP(1720, 1360, 398),
  },
  {
    "season": 2016,
    "astPer": calcAP(512, 618, 2676, 19805, 3167),
    "efg": calcEFG(618, 229, 1474),
    "tsp": calcTSP(1879, 1474, 464),
  },
  {
    "season": 2017,
    "astPer": calcAP(440, 661, 2694, 19930, 3243),
    "efg": calcEFG(661, 214, 1488),
    "tsp": calcTSP(2024, 1488, 545),
  },
  {
    "season": 2018,
    "astPer": calcAP(481, 621, 2670, 19755, 3222),
    "efg": calcEFG(621, 227, 1415),
    "tsp": calcTSP(1962, 1415, 538),
  },
  {
    "season": 2019,
    "astPer": calcAP(551, 681, 2838, 19855, 3470),
    "efg": calcEFG(681, 237, 1533),
    "tsp": calcTSP(2067, 1533, 513),
  },
];

export function linechart(){
  let svgContainer = d3.select("#lineChart");

  // Data Specific & Layout Values
  const xValue = d => d.season;
  const yValue = d => d.astPer;
  const margin = {top: 20, right: 50, bottom: 75, left: 100}

  const width = +svgContainer._groups[0][0].width.baseVal.value;
  const height = +svgContainer._groups[0][0].height.baseVal.value;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // X scale
  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice();
  
  // Y scale
  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([innerHeight, 0])
    .nice();
  
  // Group element
  const g = svgContainer.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  // Y Axis & X Axis
  const xAxis = d3.axisBottom(xScale)
    .tickSize(-innerHeight)
    .tickPadding(20);
  const yAxis = d3.axisLeft(yScale)
    .tickSize(-innerWidth)
    .tickPadding(20);

  // Axis Labels
  const yAxisG = g.append('g').call(yAxis);

  yAxisG.append('text')
    .attr('class', 'axis-label')
    .attr('y', -50)
    .attr('x', -innerHeight / 2)
    .attr('fill', 'black')
    .attr('transform', `rotate(-90)`)
    .attr('text-anchor', 'middle')
    .text('Assist %');

  const xAxisG = g.append('g').call(xAxis)
    .attr('transform', `translate(0,${innerHeight})`);
  xAxisG.select('domain').remove();
  
  xAxisG.append('text')
    .attr('class', 'axis-label')
    .attr('y', 50)
    .attr('x', innerWidth / 2)
    .attr('fill', 'black')
    .text('Season (FORMAT THE NUMBERS YOU HACK)');
  //
  const lineGenerator = d3.line()
    .x(d => xScale(xValue(d)))
    .y(d => yScale(yValue(d)))
    .curve(d3.curveBasis);

  g.append('path')
    .attr('class', 'line-path')
    .attr('d', lineGenerator(data));

  let rect = g.selectAll("circle")
    .data(data)
    .enter().append('circle')
      .attr('cy', d => yScale(yValue(d)))
      .attr('cx', d => xScale(xValue(d)))
      .attr('r', 10);
  
  
}
