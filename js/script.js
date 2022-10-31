const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const shuttle = new Player(ctx, 220, 400, 50, 50, 0, 0, "blue");
const alien = new Alien(ctx, 220, 80, 50, 50, 2, 0, "red");
const bullets = [];

function clear() {
    ctx.beginPath();
    ctx.rect(0, 0, 500, 500);
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.stroke();
}

function playerControl(e) {
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
        case 32:
            let bulletx = (shuttle.x + (shuttle.w / 2));
            let bullety = shuttle.y - 7;
            const bullet = new Bullet(ctx, bulletx, bullety, 7);
            bullets.push(bullet);
            break;
    }
}

window.requestAnimationFrame(gameLoop);

function gameLoop() {
    clear();
    window.addEventListener("keydown", playerControl, false);
    shuttle.draw();
    shuttle.borderCollision(canvas.width, canvas.height);
    for(ammo of bullets) {
        ammo.draw();
    }
        window.requestAnimationFrame(gameLoop);
}