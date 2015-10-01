// FIXME right now this is not reactive, rendered happens once, the window resize stuff seems broken

Template.Reports.rendered = function() {

     var generateSeries = function(data, covenant) {
        //  var series = Array.apply(null, Array(544 - 4)).map(Number.prototype.valueOf, 0);
         var levels = [];
         data.forEach(function(value) {
             console.log(value.covenant + "," + covenant);
             if (value.covenant === covenant) {
                 var level = value.level;
                 if (levels[level]) {
                     levels[level]++;
                 }
                 else {
                     levels[level] = 1;
                 }
             }
         });
         var series = [];
         _.each(levels, function(value, i) {
             series.push({x: i, y: value});
         });
         return series;
     };

     var generateChartData = function(data) {
         var neutral             = generateSeries(data, '');
         var cainhurstVilebloods = generateSeries(data, 'Cainhurst Vilebloods');
         var executioners        = generateSeries(data, 'Executioners');
         var hunterOfHunters     = generateSeries(data, 'Hunter of Hunters');

         // FIXME chart seems to have problems with zero or one item in the series, so i do > 1 here

         // FIXME chart stacked also seems a bit wrong, level is out of order, does not stack right when there is missing data?

         var result = [];
         if (neutral.length > 1) {
             result.push({
                 key   : 'Neutral',
                 values: neutral,
                 color : '#88cc88'
             });
         }
         if (cainhurstVilebloods.length > 1) {
             result.push({
                 key   : 'Cainhurst Vilebloods',
                 values: cainhurstVilebloods,
                 color : '#ffaaaa'
             });
         }
         if (executioners.length > 1) {
             result.push({
                 key   : 'Executioners',
                 values: executioners,
                 color : '#ffd1aa'
             });
         }
         if (hunterOfHunters.length > 1) {
             result.push({
                 key   : 'Hunter of Hunters',
                 values: hunterOfHunters,
                 color : '#669999'
             });
         }

         return result;
     };

     var chartData = generateChartData(this.data.hunterLevels);

     nv.addGraph({
         generate: function() {
             var width = nv.utils.windowSize().width,
                 height = nv.utils.windowSize().height;

                 width = 900;
                 height = 650;

             var chart = nv.models.multiBarChart()
                 .width(width)
                 .height(height)
                 .stacked(true)
                 ;

                 chart.xAxis.axisLabel("Blood Level");

                chart.yAxis.axisLabel("Number of Hunters").tickFormat(d3.format("d"));

             chart.dispatch.on('renderEnd', function(){
                 console.log('Render Complete');
             });



             var svg = d3.select('#test1 svg').datum(chartData);

             console.log('calling chart');
             svg.transition().duration(0).call(chart);
             return chart;
         },

         callback: function(graph) {
             nv.utils.windowResize(function() {
                 var width = nv.utils.windowSize().width;
                 var height = nv.utils.windowSize().height;
                 graph.width(width).height(height);
                 d3.select('#test1 svg')
                     .attr('width', width)
                     .attr('height', height)
                     .transition().duration(0)
                     .call(graph);
             });
         }
     });

};
