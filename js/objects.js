class Player {
    constructor(ctx, x, y, w, h) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    moveRight() {
        this.x += 20;
    }
    moveLeft() {
        this.x -= 20;
    }
    moveUp() {
        this.y -= 20;
    }
    moveDown() {
        this.y += 20;
    }
    
    draw() {
        if(playerDeath == true) return

        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.w, this.h);
        this.ctx.fillStyle = "green";
        this.ctx.stroke();
        this.ctx.fill()
    }

    borderCollision(w, h) {
        if((this.x + this.w) >= w) this.x -= 10;
        if(this.x <= 0) this.x += 10;
        if((this.y + this.h) >= h) this.y -= 10;
        if(this.y <= 0) this.y += 10;
    }

    hitByAlien(alien) {
        if(
            alien.x < (this.x + this.w) &&
            (alien.x + alien.w) > this.x &&
            alien.y < (this.y + this.h) &&
            (alien.y + alien.h) > this.y
        ) {
            playerDeath = true;
        }
    }
}

class Alien {
    constructor(ctx, x, y, w, h, timeStamp, fill, alienDeath) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.timeStamp = timeStamp;
        this.fill = fill;
        this.alienDeath = alienDeath;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.w, this.h);
        this.ctx.fillStyle = this.fill;
        this.strokStyle = "black";
        this.ctx.stroke();
        this.ctx.fill()
    }

    move() {
        setInterval(() => {
            this.y += 10;
        }, this.timeStamp);
    }

    hitByBullet(bullet) {
        if(
            (bullet.x - bullet.r) < (this.x + this.w) &&
            (bullet.x + bullet.r) > this.x &&
            (bullet.y + bullet.r) < (this.y + this.h) &&
            (bullet.y + bullet.r) > this.y
        ) {
            this.alienDeath = true;
        }
    }

    killed() {
        return this.alienDeath
    }
}

class Bullet {
    constructor(ctx, x, y, r) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.r = r;
    }

    draw() {
        if(playerDeath == false) {
            this.ctx.beginPath();
            this.y -= 10;
            this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            this.ctx.fillStyle = "black";
            this.ctx.stroke();
            this.ctx.fill()
        }
    }
}