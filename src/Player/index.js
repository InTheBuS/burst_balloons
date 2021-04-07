export class Player {
    constructor(canvas) {
        this.x = canvas.height / 2
        this.y = 0
        this.sharpTip = 73
        this.frameX = 0
        this.frameY = 0
        this.pencilWidth = 100
        this.pencilHeight = 300
        this.image = new Image()
        this.image.src = "src/images/pencil.png"
    }

    update(mouse) {
        const dx = this.x - mouse.x
        if (mouse.x !== this.x) {
            this.x -= dx / 10
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.frameX * this.pencilWidth, this.frameY * this.pencilHeight,
            this.pencilWidth * 15, this.pencilHeight * 12, this.x, 0, this.pencilWidth, this.pencilHeight)
        ctx.stroke();

    }
}