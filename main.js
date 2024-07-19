const d = document;
const canvas = d.getElementById("my-canvas");

const ctx = canvas.getContext("2d");

// First create the styles and then the figure
ctx.strokeStyle = "red";
ctx.lineWidth = 6;
ctx.strokeRect(50, 20, 200, 100); // (left, top, width, height) Creates a rectangle

ctx.fillStyle = "blue";
ctx.fillRect(100, 150, 200, 100); // Create a rectangle with background color

// Creates a line
ctx.strokeStyle = "black";
ctx.lineTo(10, 100); // The first point of the line (left, top)
ctx.lineTo(10, 50); // The second point of the line (left, top)
ctx.lineTo(50, 100); // The third point of the line (left, top)
ctx.stroke(); // Creates the figure
ctx.closePath(); // Stops the line

// Creates another line
ctx.beginPath(); // Starts a new line
ctx.strokeStyle = "lightblue";
ctx.lineTo(110, 100);
ctx.lineTo(110, 60);
ctx.stroke(); // Creates the line
ctx.closePath();

// Creates a circle
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.arc(130, 150, 50, 100, 30, 1); // (x, y, radius, startAngle, endAngle, clockwise)
ctx.stroke();
