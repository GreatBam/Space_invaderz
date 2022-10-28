class Shuttle {
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

    borderCollision() {
        
    }
}