var nodeData = {
    "name": "TOPICS", "children": [{
        "name": "Topic A",
        "children": [{"name": "Sub A1", "size": 4}, {"name": "Sub A2", "size": 4}]
    }, {
        "name": "Topic B",
        "children": [{"name": "Sub B1", "size": 3}, {"name": "Sub B2", "size": 3}, {
            "name": "Sub B3", "size": 3}]
    }, {
        "name": "Topic C",
        "children": [{"name": "Sub A1", "size": 4}, {"name": "Sub A2", "size": 4}]
    }]
};
export function piechart() {
  const width = 500;
  const height = 500;
  const radius = Math.min(width, height) / 2;
  const color = d3.scaleOrdinal(d3.schemeCategory20b);

  const g = d3.select('#pieChart')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
  
  const partition = d3.partition()
    .size([2 * Math.PI, radius]);
  const root = d3.hierarchy(nodeData)
    .sum((d) => d.size);
  partition(root);

  const arc = d3.arc()
    .startAngle(d => d.x0)
    .endAngle(d => d.x1)
    .innerRadius(d => d.y0)
    .outerRadius(d => d.y1);
  
  g.selectAll('path')
    .data(root.descendants())
    .enter().append('path')
    .attr('display', function(d) {
      return d.depth ? null : "none"; 
    })
    .attr("d", arc)
    .style('stroke', '#fff')
    .style("fill", function (d) { return color((d.children ? d : d.parent).data.name); });
};
