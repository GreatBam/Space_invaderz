class Player {
    constructor(ctx, x, y, w, h, dirX, dirY, fill) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dirX = dirX;
        this.dirY = dirY;
        this.fill = fill;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.w, this.h);
        this.ctx.fillStyle = this.fill;
        this.ctx.stroke();
        this.ctx.fill()
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

    borderCollision(w, h) {
        if((this.x + this.w) >= w) this.x -= 10;
        if(this.x <= 0) this.x += 10;
        if((this.y + this.h) >= h) this.y -= 10;
        if(this.y <= 0) this.y += 10;
    }

    move() {
        this.x += this.dirX;
    }

    alienPath(w) {
        if((this.x + this.w) >= w) this.dirX = -this.dirX;
        if(this.x <= 0) this.dirX = -this.dirX;
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
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.ctx.fillStyle = "black";
        this.ctx.stroke();
        this.ctx.fill()
    }

    shoot() {
        this.y -= 5;
    }

}