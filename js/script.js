let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function clear() {
    ctx.beginPath();
    ctx.rect(0, 0, 500, 500)
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.stroke();
}

const shuttle = new Shuttle(ctx, 220, 400, 50, 50, 0, 0, "red")

setInterval(() => {
    clear();
    shuttle.draw();
}, 1000/60);