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

function playerMove(e) {
    switch(e.keyCode) {
        case 37:
            shuttle.moveLeft();
            break;
        case 39:
            shuttle.moveRight();
            break;
        case 38:
            shuttle.moveUp();
            break;
        case 40:
            shuttle.moveDown();
            break;
    }

}

const shuttle = new Shuttle(ctx, 220, 400, 50, 50, 0, 0, "blue")

setInterval(() => {
    clear();
    window.addEventListener("keydown", playerMove, false);
    shuttle.draw();
    shuttle.borderCollision(canvas.width, canvas.height);
}, 1000/60);