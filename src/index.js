import "./index.css"
import {Player} from "./Player";
import {balloonColors, Balloon} from "./Balloons";
import {createText} from "./CreateText";

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const startGameButton = document.getElementById("starGame")

startGameButton.addEventListener('click', startGame)

let score = 0;
let total = 0
let gameFrame = 0;
let timer = 60;
let gameOver = true
let intervalID = null

canvas.width = 800;
canvas.height = 500;
let canvasPosition = canvas.getBoundingClientRect();

const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.x - canvasPosition.left
    mouse.y = 0
})

window.addEventListener('resize', function () {
    canvasPosition = canvas.getBoundingClientRect();
    mouse.x = canvas.width / 2;
    mouse.y = 10
});

const player = new Player(canvas)

let balloonsArray = []

function createBalloons() {

    if (gameFrame % 50 === 0 && !gameOver) {
        total++
        balloonsArray.push(new Balloon(canvas))
    }

    for (let i = 0; i < balloonsArray.length; i++) {
        balloonsArray[i].update(player)
        balloonsArray[i].draw(ctx)

        if (balloonsArray[i].y < -200) {
            i = deleteBalloon(i)
            continue
        }

        if (balloonsArray[i].distanceEllipse <= 1 || balloonsArray[i].counted) {
            popBalloon(i)
            if (balloonsArray[i].frameX > 10) {
                i = deleteBalloon(i)
            }
        }
    }
}

function deleteBalloon(i) {
    balloonsArray.splice(i, 1)
    return i - 1
}

function popBalloon(i) {
    if (!balloonsArray[i]) return

    if (!balloonsArray[i].counted) {
        balloonsArray[i].counted = true
        score++
    }

    popBalloonAnimate(i)

}

function popBalloonAnimate(i) {

    balloonsArray[i].frameX++
    if (balloonsArray[i].frameX % 2 === 0) {

        balloonsArray[i].image.src = balloonColors[balloonsArray[i].randomColor][balloonsArray[i].frameX / 2]
    }

    requestAnimationFrame(popBalloon)
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    createBalloons()
    player.update(mouse)
    player.draw(ctx)

    if (!gameOver || balloonsArray.length > 0) {

        scoreText()
        timerText()

    } else if (gameOver && balloonsArray.length > 0) {

        scoreText()
        timerText()

    } else if (gameOver && timer <= 0 && balloonsArray.length === 0) {

        scoreText()
        timerText()
        endGameText()

    }

    gameFrame++
    requestAnimationFrame(animate)
}

function scoreText() {
    let textParams = [{
        text: `score: ${score}`, x: 5, y: 25
    }]

    createText(ctx, textParams)
}

function timerText() {
    let textParams = [{
        text: `time: ${timer}`, x: 690, y: 25
    }]

    createText(ctx, textParams)
}

function endGameText() {
    let textParams = [
        {
            text: `Конец игры!`, x: 310, y: 170
        },
        {
            text: `Лопнуто: ${score}`, x: 310, y: 200
        },
        {
            text: `Всего: ${total}`, x: 310, y: 230
        },
        {
            text: `Пропущено: ${total - score}`, x: 310, y: 260
        },
    ]

    createText(ctx, textParams)
}

function startGame() {
    balloonsArray = []
    score = 0
    total = 0
    timer = 60
    gameFrame = 0

    clearInterval(intervalID)
    gameOver = false

    intervalID = setInterval(function () {
        if (timer > 0) timer -= 1
        if (timer <= 0 && !gameOver) {
            gameOver = true
        }
        if (timer <= 0 && balloonsArray.length === 0) {
            clearInterval(intervalID)
        }
    }, 1000)
}

animate()

