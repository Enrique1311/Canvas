const d = document,
	$canvas = d.getElementById("canvas"),
	ctx = $canvas.getContext("2d"),
	dif = $canvas.getBoundingClientRect(); // gets the distance from the top and left corner into the canvas context

let painting, color, lineW, difX, difY;

$canvas.addEventListener("mousedown", (e) => {
	difX = e.clientX - dif.left;
	difY = e.clientY - dif.top;
	painting = true;
	color = d.getElementById("color").value;
	lineW = d.getElementById("line-width").value;
	ctx.beginPath();
});

$canvas.addEventListener("mousemove", (e) => {
	if (painting) {
		draw(difX, difY, e.clientX - dif.left, e.clientY - dif.top);
		difX = e.clientX - difX.left;
		difY = e.clientY - difY.top;
	}
});

$canvas.addEventListener("mouseup", (e) => {
	ctx.closePath();
	painting = false;
});

const draw = (x1, y1, x2, y2) => {
	ctx.strokeStyle = color;
	ctx.lineWidth = lineW;
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
};
