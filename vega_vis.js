var map_spec = "map.vg.json";

vegaEmbed("#map_vis", map_spec).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
