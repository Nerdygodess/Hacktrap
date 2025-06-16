const width = 800, height = 500;
const svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Load world map data (simplified)
const countries = [
    { name: "USA", coords: [100, 100] },
    { name: "China", coords: [500, 150] },
    { name: "Russia", coords: [400, 100] },
    { name: "India", coords: [450, 250] },
    { name: "Brazil", coords: [200, 350] },
];

// Draw fake countries
svg.selectAll(".country")
    .data(countries)
    .enter()
    .append("circle")
    .attr("class", "country")
    .attr("cx", d => d.coords[0])
    .attr("cy", d => d.coords[1])
    .attr("r", 30);

// Simulate random attacks
setInterval(() => {
    const target = countries[Math.floor(Math.random() * countries.length)];
    
    // Add attack animation
    const attack = svg.append("circle")
        .attr("class", "attack")
        .attr("cx", target.coords[0])
        .attr("cy", target.coords[1])
        .attr("r", 5)
        .transition()
        .duration(1000)
        .attr("r", 20)
        .remove();
    
    // Log the attack
    const log = document.getElementById("attack-log");
    log.innerHTML += `[${new Date().toLocaleTimeString()}] ⚡ Attack from ${target.name}<br>`;
    log.scrollTop = log.scrollHeight;
}, 2000);