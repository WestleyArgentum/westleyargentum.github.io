
var margin = {top: 20, right: 110, bottom: 10, left: 215},
    width = 700 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var y = d3.scale.ordinal()
    .rangeRoundBands([0, height], .3);

var x = d3.scale.linear()
    .rangeRound([0, width]);

var color = d3.scale.ordinal()
    .range(['#f6a580', '#92c6db']);

var xAxis = d3.svg.axis()
    .scale(x)
    .tickFormat(function(d) { return Math.abs(d) + '%'; })
    .orient('top');

var svg = d3.select('#opposing-groups').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .attr('id', 'd3-plot')
  .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  color.domain(['group1_percent', 'group2_percent']);

  d3.csv('data/opposing-group-stats.csv', function(error, data) {
  data.forEach(function(d) {
      d['group1_percent'] = +d['votes1']*100/d['totals'];
      d['group2_percent'] = +d['votes2']*100/d['totals'];
      var x0 = -1*(+d['group1_percent']);

    d.boxes = color.domain().map(function(name) {
        return {
            name: name,
            x0: x0,
            x1: x0 += +d[name],
            N: +d['totals'],
            groupname: d[name.split('_')[0]]
        };
    });
  });


  var min_val = d3.min(data, function(d) {
          return d.boxes['0'].x0;
          });

  var max_val = d3.max(data, function(d) {
          return d.boxes['1'].x1;
          });

  x.domain([min_val, max_val]).nice();
  y.domain(data.map(function(d) { return d['group1'] + ', ' + d['group2']; }));

  svg.append('g')
      .attr('class', 'x axis')
      .call(xAxis);

  var vakken = svg.selectAll('.question')
      .data(data)
    .enter().append('g')
      .attr('class', 'bar')
      .attr('transform', function(d) { return 'translate(0,' + y(d['group1'] + ', ' + d['group2']) + ')'; });

  var bars = vakken.selectAll('rect')
      .data(function(d) { return d.boxes; })
    .enter().append('g').attr('class', 'subbar');

  bars.append('rect')
      .attr('height', y.rangeBand())
      .attr('x', function(d) { return x(d.x0); })
      .attr('width', function(d) { return x(d.x1) - x(d.x0); })
      .style('fill', function(d) { return color(d.name); });

  bars.append('text')
      .attr('x', function(d) { return x(d.name.indexOf('group1') != -1 ? -105 : 40); })
      .attr('y', y.rangeBand() / 2)
      .attr('dy', '0.5em')
      .attr('dx', '0.5em')
      .style('font' ,'10px sans-serif')
      .style('text-anchor', function(d) { console.log('TEXT', d); return d.name.indexOf('group1') != -1 ? 'end' : 'begin'; })
      .text(function(d) { return d.groupname; });

  vakken.insert('rect',':first-child')
      .attr('height', y.rangeBand())
      .attr('x', '1')
      .attr('width', width)
      .attr('fill-opacity', '0.5')
      .style('fill', '#F5F5F5')
      .attr('class', function(d,index) { return index%2==0 ? 'even' : 'uneven'; });

  svg.append('g')
      .attr('class', 'y axis')
  .append('line')
      .attr('x1', x(0))
      .attr('x2', x(0))
      .attr('y2', height);

});
