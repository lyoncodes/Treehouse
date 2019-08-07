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

export function barchart(){
  let svgContainer = d3.select("#barChart");

  // Data Specific & Layout Values
  const xValue = d => d.min;
  const yValue = d => d.player;
  const margin = {top: 20, right: 10, bottom: 20, left: 80}

  const width = +svgContainer._groups[0][0].width.baseVal.value;
  const height = +svgContainer._groups[0][0].height.baseVal.value;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // X scale
  const xScale = d3.scaleLinear()
    .domain([0, 40])
    .range([0, innerWidth]);
  
  // Y scale
  const yScale = d3.scaleBand()
    .domain(minData.map(yValue))
    .range([0, innerHeight])
    .padding(0.2);
  
  // Group element
  const g = svgContainer.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  // Y Axis & X Axis
  g.append('g').call(d3.axisLeft(yScale));
  g.append('g').call(d3.axisBottom(xScale))
    .attr('transform', `translate(0,${innerHeight})`);

  let rect = g.selectAll("rect")
    .data(minData)
    .enter().append('rect')
      .attr('y', d => yScale(yValue(d)))
      .attr('width', d => xScale(xValue(d)))
      .attr('height', yScale.bandwidth());
  
}
