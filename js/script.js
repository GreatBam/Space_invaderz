const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let playerDeath = false;
let alienDeath = false;
const timeArray = [5000, 10000, 15000, 20000];

function colorRNG() {
    letter = "0123456789abcdef";
    color = "#";
    for(let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random()*16)]
    }
    return color;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(timeArray);
console.log(timeArray);

const player = new Player(ctx, 220, 400, 50, 50);
const bullets = [];
let aliens = [
    alien = new Alien(ctx, 75, 70, 50, 50, timeArray[0], colorRNG(), false),
    alien = new Alien(ctx, 175, 70, 50, 50, timeArray[1], colorRNG(), false),
    alien = new Alien(ctx, 275, 70, 50, 50, timeArray[2], colorRNG(), false),
    alien = new Alien(ctx, 375, 70, 50, 50, timeArray[3], colorRNG(), false),
];
let bullet = new Bullet(ctx, 0, 0, 7);
bullets.push(bullet);

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
            player.moveLeft();
            break;
        case 39:
            player.moveRight();
            break;
        case 38:
            player.moveUp();
            break;
        case 40:
            player.moveDown();
            break;
        case 32:
            let bulletx = (player.x + (player.w / 2));
            let bullety = player.y - 7;
            let bullet = new Bullet(ctx, bulletx, bullety, 7);
            bullets.push(bullet);
            break;
    }
}

window.requestAnimationFrame(gameLoop);

function gameLoop() {
    clear();
    window.addEventListener("keydown", playerControl, false);
    player.draw();
    player.borderCollision(canvas.width, canvas.height);
    for(let ammo of bullets) {
        ammo.draw();
        for(let alien of aliens) {
            alien.draw();
            alien.lateralMove();
            alien.fall();
            alien.borderCollision(canvas.width, canvas.height);
            player.hitByAlien(alien);
            alien.hitByBullet(ammo);
        }
    }
    aliens = aliens.filter(alien => alien.killed() == false);
        window.requestAnimationFrame(gameLoop);
}