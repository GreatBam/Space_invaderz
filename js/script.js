let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let shot = false;

const shuttle = new Player(ctx, 220, 400, 50, 50, 0, 0, "blue");
let bullet = new Bullet(ctx, 0, 0, 7);
const alien = new Player(ctx, 220, 80, 50, 50, 2, 0, "red")

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
            if(shot == false){
                let bulletx = (shuttle.x + ((shuttle.w/2)-5));
                let bullety = (shuttle.y-bullet.r);
                bullet = new Bullet(ctx, bulletx, bullety, 7);
                shot = true;
            }
            break;
    }
}

function hit() {
    if(bullet.x <= (alien.x + alien.w) &&
    (bullet.x + bullet.w) >= alien.x &&
    bullet.y <= (alien.y + alien.h) &&
    (bullet.y + bullet.h) >= alien.y) {
        shot = false;
    }
}

window.requestAnimationFrame(gameLoop);

function gameLoop() {
    clear();
    window.addEventListener("keydown", playerControl, false);
    shuttle.draw();
    shuttle.borderCollision(canvas.width, canvas.height);
    alien.draw();
    alien.move();
    alien.alienPath(canvas.width);
    if(shot == true) {
        bullet.draw();
        bullet.shoot();
        if(bullet.y < 0) {
            shot = false;
        }
    }
    hit();
    window.requestAnimationFrame(gameLoop);
}