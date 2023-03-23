let rangeValueEl = document.getElementById('myRange');
let resetButtonEl = document.getElementById('resetBtn');
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

rangeValueEl.addEventListener('input', function () {
    rangeValue = rangeValueEl.value;
})

resetButtonEl.addEventListener('click', function () {
    rangeValueEl.value = 0;
    drawCircles(0, 'rgb(0, 0, 0)');
})

function drawCircles(count, color) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var x = canvas.width / (count + 1);
    var y = canvas.height / 2;
    var radius = 30;
    for (var i = 0; i < count; i++) {
        ctx.beginPath();
        ctx.arc((i + 1) * x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }
}

document.getElementById("myRange").addEventListener("input", function () {
    var count = parseInt(this.value);
    var red = count * 25.5;
    var green = (10 - count) * 25.5;
    var blue = (count % 5) * 51;
    var color = "rgb(" + red + "," + green + "," + blue + ")";
    drawCircles(count, color);
});