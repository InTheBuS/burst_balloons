export function createText(ctx, textParams) {
    if (!Array.isArray(textParams)) return

    ctx.font = "30px Arial"
    ctx.fillStyle = "black"

    textParams.forEach((textParams) => {
        ctx.fillText(textParams.text, textParams.x, textParams.y)
    })
}