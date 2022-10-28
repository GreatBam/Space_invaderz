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

    shoot() {
        this.y += 10;
    }

    moveRight() {
        this.x += 10;
    }
    moveLeft() {
        this.x -= 10;
    }
    moveUp() {
        this.y -= 10;
    }
    moveDown() {
        this.y += 10;
    }

    borderCollision(w, h) {
        if((this.x + this.w) >= w) this.x -= 10;
        if(this.x <= 0) this.x += 10;
        if((this.y + this.h) >= h) this.y -= 10;
        if(this.y <= 0) this.y += 10;
    }
}

class Bullet {
    constructor(ctx, x, y, h, w, dirX, dirY, fill) {
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

    shoot() {
        this.y -= 10;
    }
}