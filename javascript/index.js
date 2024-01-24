const barChartContainer = document.querySelector("#bar-chart-container");
const barChart = document.querySelector("#bar-chart");
const labels = document.querySelector("#label");

const height = document.querySelector("main").getBoundingClientRect().height;
const width = document.querySelector("#bar-chart-container").getBoundingClientRect().width;


d3.json("./data.json").then(dataset => {
    // Scale
    const xScale = d3.scaleBand().domain(dataset.map((d) => d.day)).range([0, width]).padding(0.3);
    const yScale = d3.scaleLinear().domain([0, d3.max(dataset, (d) => +d.amount)]).range([height, 0]);
    // Label
    const xAxis = d3.axisBottom(xScale);


    // Create svg container for bar chart
    const svg = d3.select(barChartContainer)
        .append("svg")
        .attr("width", width)
        .attr("height", height * 1.2);

    // Create g element for bars and labels 
    const bars = svg.selectAll("g")
        .data(dataset)
        .enter()
        .append("g")
        .attr("width", xScale.bandwidth())
        .attr("height", height)
        .attr("class", "bar-container")
        ;

    // Create bars
    bars.append("rect")
        .attr("class", "bar")
        .attr("x", (d) => xScale(d.day))
        .attr("y", (d) => yScale(d.amount) + 35)
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => height - yScale(d.amount))
        .attr("rx", 5 + "px")
        .attr("ry", 5 + "px")
        ;

    // Style the tallest bar 
    const largestAmountSpent = d3.max(dataset, (d) => d.amount);
    bars.selectAll(".bar")
        .filter((d) => d.amount === largestAmountSpent)
        .style("fill", "#76b5bc");

    // Create prices 
    // price container (for background)
    bars.append("rect")
        .attr("class", "label-container")
        .attr("width", 47)
        .attr("height", 32)
        .attr("x", (d) => xScale(d.day))
        .attr("y", (d) => yScale(d.amount))
        .attr("rx", 5 + "px")
        .attr("ry", 5 + "px")
        .attr("fill", "#382314")

    // price
    bars.append("text")
        .attr("width", width)
        .attr("height", 30)
        .attr("class", "bar-label")
        .attr("x", (d) => xScale(d.day))
        .attr("y", (d) => yScale(d.amount))
        .attr("dy", "1.7em")
        .text((d) => "$" + d.amount);

    // Create svg for x-axis
    const labelSvg = d3.select(barChartContainer)
        .append("svg")
        .attr("width", width)
        .attr("height", 20);

    // Add x-axis to the chart 
    labelSvg.append("g")
        .attr("transform", "translate(0, " + (-8) + ")").call(xAxis);
})