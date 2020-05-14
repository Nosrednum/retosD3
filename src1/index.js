const canvas = d3.select("#canvas");

//Datos a mostrar
var data = [
    {
        name: "burundi",
        url: "http://data.unhcr.org/burundi",
        updated_at: "2015-06-19 10:20:55",
        value: "14486"
        
    },
    {
        name: "car",
        url: "http://data.unhcr.org/car",
        updated_at: "2014-04-24 14:43:31",
        value: "399024"
    },
    {
        name: "horn",
        url: "http://data.unhcr.org/horn-of-africa",
        updated_at: "",
        value: "973306"
    },
    {
        name: "liberia",
        url: "http://data.unhcr.org/liberia",
        updated_at: "2014-04-24 14:45:00",
        value: "37951"
    },
    {
        name: "mali",
        url: "http://data.unhcr.org/sahelsituation",
        updated_at: "",
        value: "61920"
    },
    {
        name: "southsudan",
        url: "http://data.unhcr.org/SouthSudan",
        updated_at: "2014-05-16 10:09:21",
        value: "639848"
    },
    {
        name: "syria",
        url: "http://data.unhcr.org/syrianrefugees",
        updated_at: "2014-04-24 14:47:08",
        value: "180631"
    },
    {
        name: "thai",
        url: "http://data.unhcr.org/thailand",
        updated_at: "2014-04-24 14:48:20",
        "population": [],
        "instance_id": "thai",
         value: "380631"
    },
    {
        name: "yemen",
        url: "",
        updated_at: "2015-07-29 14:13:59",
        value: "121801"
    }];

//Definicion del area del grafico
const width = 700;
const height = 500;
const margin = { top:10, left:50, bottom: 40, right: 10};
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top -margin.bottom;

const svg = canvas.append("svg");
svg.attr("width", width);
svg.attr("height", height);

const xValue = d => d.value;
  const yValue = d => d.name;

const x = d3.scaleLinear() 
.domain([0, d3.max(data, d=>d.value)])
.range([0, innerWidth]);

const y = d3.scaleBand()
.domain(data.map(d => d.name)) 
.range([0, innerHeight])
// .padding(0.1); 

let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

//Insertamos todos los cuadrados
const bars = g.selectAll("rect").data(data)
.enter().append('rect')
.attr('y', d => y(yValue(d)))
      .attr('width', d => x(xValue(d)))
      .attr('height', y.bandwidth())
      .style("fill", "steelblue");

      g.append("g")
      .classed("x--axis", true)
      .call(d3.axisBottom(x))
      .attr("transform", `translate(0, ${innerHeight})`);  
      
      g.append("g")
      .classed("y--axis", true)
      .call(d3.axisLeft(y));    
