let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let shot = false;

const shuttle = new Player(ctx, 220, 400, 50, 50, 0, 0, "blue");
let bulletx = (shuttle.x + shuttle.w/2);
let bullety = shuttle.y;
let bullet = new Bullet(ctx, bulletx, bullety, 10, 10, 0, 0, "black");

function clear() {
    ctx.beginPath();
    ctx.rect(0, 0, 500, 500)
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
            shot = true;
            let bulletx = (shuttle.x + shuttle.w/2);
            let bullety = shuttle.y;
            bullet = new Bullet(ctx, bulletx, bullety, 10, 10, 0, 0, "black");
            // bullet = new Bullet(ctx, bulletx, bullety, 10, 10, 0, 0, "black");
            break;
    }
}

window.requestAnimationFrame(gameLoop);

function gameLoop() {
    clear();
    // let bulletx = (shuttle.x + shuttle.w/2);
    // let bullety = shuttle.y;
    // bullet = new Bullet(ctx, bulletx, bullety, 10, 10, 0, 0, "black");
    window.addEventListener("keydown", playerControl, false);
    shuttle.draw();
    shuttle.borderCollision(canvas.clientWidth, canvas.height);
    while(shot) {
        bullet.draw()
        // bullet.shoot()
        if(bullet.y <= 0) {
            shot = false;
            // let bulletx = (shuttle.x + shuttle.w/2);
            // let bullety = shuttle.y;
            // bullet.clearBullet(bulletx, bullety)
        }
    }
    window.requestAnimationFrame(gameLoop);
}
