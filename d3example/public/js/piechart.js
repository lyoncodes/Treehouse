var nodeData = {
    "name": "TOPICS", "children": [
      {
        "name": "Lillard",
        "children": [
          {"name": "min", "size": 35}, 
        ]
      }, 
      {
        "name": "McCollum",
        "children": [
          {"name": "min", "size": 34}, 
        ]
      }, 
      {
        "name": "Aminu",
        "children": [
          {"name": "min", "size": 28}, 
        ]
      },
      {
        "name": "Nurkic",
        "children": [
          {"name": "min", "size": 27}, 
        ]
      },
      {
        "name": "Hood",
        "children": [
          {"name": "min", "size": 24}, 
        ]
      }
    ]
};
export function piechart() {
  const width = 500;
  const height = 500;
  const radius = Math.min(width, height) / 2;
  const color = d3.scaleOrdinal(d3.schemeCategory20c);

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
  
  g.selectAll('g')
    .data(root.descendants())
    .enter().append('g').attr("class", "node")
    .append('path')
    .attr('display', function(d) {
      return d.depth ? null : "none"; 
    })
    .attr("d", arc)
    .style('stroke', '#fff')
    .style("fill", function (d) { return color((d.children ? d : d.parent).data.name); });
  g.selectAll('.node')

  // Add a label
  g.selectAll('.node')
    .append("text")
    .attr("transform", function (d) {
      return "translate(" + arc.centroid(d) + ")rotate(" + computeTextRotation(d) + ")";
    })
    .attr("dx", "-20")
    .attr("dy", ".5em")
    .text(function(d) { return d.parent ? d.data.name : "" })
};

function computeTextRotation(d) {
    var angle = (d.x0 + d.x1) / Math.PI * 90;

    // Avoid upside-down labels
    // return (angle < 90 || angle > 270) ? angle : angle + 180;  // <--2 "labels aligned with slices"

    // Alternate label formatting
    return (angle < 180) ? angle - 90 : angle + 90;  // <-- 3 "labels as spokes"
}