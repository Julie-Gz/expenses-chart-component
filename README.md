# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![Desktop](./screenshot/Frontend%20Mentor%20Expenses%20chart%20component%20-%20Desktop.png)
![Mobile](./screenshot/Frontend%20Mentor%20Expenses%20chart%20component%20-%20Mobile.png)

### Links

- Solution URL:(https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt/hub?share=true)
- Live Site URL:(https://julie-gz.github.io/expenses-chart-component/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- D3 Library

### What I learned
In this project, I've learned some of the basics of D3. Setting up the width and height of some elements using the scale, domain and range is still a bit confusing for me, but I intend to come back to it and hopefully have a better understanding of it.

```js
    const xScale = d3.scaleBand().domain(dataset.map((d) => d.day)).range([0, width]).padding(0.3);
    const yScale = d3.scaleLinear().domain([0, d3.max(dataset, (d) => +d.amount)]).range([height, 0]);
    const xAxis = d3.axisBottom(xScale);
```

### Continued development

D3 is something I would love to continue learning about and I'm looking forward to working on more more projects similar to this one.

### Useful resources

- [How to import data from a local json file:](https://medium.com/@akshaykrdas001/how-to-fetch-data-from-local-json-file-and-render-it-to-html-document-with-using-vanilla-javascript-a0191a894f25) - 
This article helped me figure out how to import data from the json file provided

- [D3js course from free code camp](https://www.freecodecamp.org/learn/data-visualization/#data-visualization-with-d3) - Free code camp has a great introductory course to D3.

## Author

- Frontend Mentor - [@Julie-Gz](https://www.frontendmentor.io/profile/Julie-Gz)