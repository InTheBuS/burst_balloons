export class Balloon {
    constructor(canvas) {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + 200
        this.radiusX = 42
        this.radiusY = 50
        this.balloonWidth = 150
        this.balloonHeight = 140
        this.speed = Math.random() * 5 + 1
        this.frameX = 0
        this.distanceEllipse = 0
        this.counted = false
        this.image = new Image()
        this.randomColor = Math.floor(Math.random() * 7)
        this.image.src = balloonColors[this.randomColor][this.frameX / 2]
    }

    update(player) {
        this.y -= this.speed
        const dx = this.x - player.x
        const dy = this.y - player.sharpTip
        this.distanceEllipse = ((dx * dx) / (this.radiusX * this.radiusX) + (dy * dy) / (this.radiusY * this.radiusY))
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x - 75, this.y - 63, this.balloonWidth, this.balloonHeight)
        ctx.stroke()
    }
}

export const balloonColors = [
    [
        'src/images/blue-balloon/1.png',
        'src/images/blue-balloon/2.png',
        'src/images/blue-balloon/3.png',
        'src/images/blue-balloon/4.png',
        'src/images/blue-balloon/5.png',
        'src/images/blue-balloon/6.png'
    ],
    [
        'src/images/green-balloon/1.png',
        'src/images/green-balloon/2.png',
        'src/images/green-balloon/3.png',
        'src/images/green-balloon/4.png',
        'src/images/green-balloon/5.png',
        'src/images/green-balloon/6.png'
    ],
    [
        'src/images/orange-balloon/1.png',
        'src/images/orange-balloon/2.png',
        'src/images/orange-balloon/3.png',
        'src/images/orange-balloon/4.png',
        'src/images/orange-balloon/5.png',
        'src/images/orange-balloon/6.png'
    ],
    [
        'src/images/pink-balloon/1.png',
        'src/images/pink-balloon/2.png',
        'src/images/pink-balloon/3.png',
        'src/images/pink-balloon/4.png',
        'src/images/pink-balloon/5.png',
        'src/images/pink-balloon/6.png',
    ],
    [
        'src/images/purple-balloon/1.png',
        'src/images/purple-balloon/2.png',
        'src/images/purple-balloon/3.png',
        'src/images/purple-balloon/4.png',
        'src/images/purple-balloon/5.png',
        'src/images/purple-balloon/6.png',
    ],
    [
        'src/images/red-balloon/1.png',
        'src/images/red-balloon/2.png',
        'src/images/red-balloon/3.png',
        'src/images/red-balloon/4.png',
        'src/images/red-balloon/5.png',
        'src/images/red-balloon/6.png',

    ],
    [
        'src/images/yellow-balloon/1.png',
        'src/images/yellow-balloon/2.png',
        'src/images/yellow-balloon/3.png',
        'src/images/yellow-balloon/4.png',
        'src/images/yellow-balloon/5.png',
        'src/images/yellow-balloon/6.png',
    ]
]
