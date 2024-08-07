var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.70;
setInterval(drawClock, 1000);

function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
    drawDate(ctx, radius); // Draw the date at the bottom of the clock
}

function drawFace(ctx, radius) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    
    // Create a radial gradient for the face
    var grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, 'black');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, 'black');
    ctx.fillStyle = grad;
    
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = 'white';  // Set the color of the numbers to white
    for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        // Determine font size based on number
        if (num === 12 || num === 3 || num === 6 || num === 9) {
            ctx.font = radius * 0.2 + "px arial"; // Larger font for 12, 3, 6, 9
        } else {
            ctx.font = radius * 0.15 + "px arial"; // Smaller font for other numbers
        }
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
  
    hour = hour % 12;
    hour = (hour * Math.PI / 6) +
           (minute * Math.PI / (6 * 60)) +
           (second * Math.PI / (360 * 60));
    drawHand(ctx, hour, radius * 0.5, radius * 0.07, 'white'); // Pass 'white' as color
  
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(ctx, minute, radius * 0.8, radius * 0.07, 'white'); // Pass 'white' as color
  
    second = (second * Math.PI / 30);
    drawHand(ctx, second, radius * 0.9, radius * 0.02, 'white'); // Pass 'white' as color
}

function drawHand(ctx, pos, length, width, color) {
    ctx.beginPath();
    ctx.strokeStyle = color; // Set stroke color to 'white'
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

function drawDate(ctx, radius) {
    var now = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var day = days[now.getDay()];
    var date = now.getDate();
    var month = months[now.getMonth()];
    var year = now.getFullYear();
    
    var dateStr = day + ', ' + month + ' ' + date + ', ' + year;
    
    ctx.font = radius * 0.1 + "px arial";
    ctx.fillStyle = 'white';
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    
    // Calculate position for the date text
    var offsetY = radius * 1.2; // Adjust the vertical position as needed
    
    ctx.fillText(dateStr, 0, offsetY);
}

/*
<------Old Styling----------->

function drawFace(ctx, radius) {
	var grad;
	ctx.beginPath();
	ctx.arc(0, 0, radius, 0, 2 * Math.PI);
	ctx.fillStyle = 'white';
	ctx.fill();
	grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
	grad.addColorStop(0, '#333');
	grad.addColorStop(0.5, 'gold');
	grad.addColorStop(1, '#333');
	ctx.strokeStyle = grad;
	ctx.lineWidth = radius * 0.1;
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
	ctx.fillStyle = '#333';
	ctx.fill();
}

function drawNumbers(ctx, radius) {
	var ang;
	var num;
	ctx.font = radius * 0.15 + "px arial";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	for (num = 1; num < 13; num++) {
		ang = num * Math.PI / 6;
		ctx.rotate(ang);
		ctx.translate(0, -radius * 0.85);
		ctx.rotate(-ang);
		ctx.fillText(num.toString(), 0, 0);
		ctx.rotate(ang);
		ctx.translate(0, radius * 0.85);
		ctx.rotate(-ang);
	}
}


function drawTime(ctx, radius) {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();

	hour = hour % 12;
	hour = (hour * Math.PI / 6) +
		(minute * Math.PI / (6 * 60)) +
		(second * Math.PI / (360 * 60));
	drawHand(ctx, hour, radius * 0.5, radius * 0.07);

	minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
	drawHand(ctx, minute, radius * 0.8, radius * 0.07);

	second = (second * Math.PI / 30);
	drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.lineCap = "round";
	ctx.moveTo(0, 0);
	ctx.rotate(pos);
	ctx.lineTo(0, -length);
	ctx.stroke();
	ctx.rotate(-pos);
}

*/