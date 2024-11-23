export default class Particle {
    x: number;
    y: number;
    size: number;
    baseX: number;
    baseY: number;
    speed: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = 2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.speed = (Math.random() * 25) + 5;
    }

    draw(canvasContext: CanvasRenderingContext2D) {
        if (canvasContext) {
            canvasContext.fillStyle = "rgba(255,107,107,.25)";
            canvasContext.beginPath();
            canvasContext.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            canvasContext.closePath();
            canvasContext.fill();
        }
    }

    update(mouse: {
        x: undefined;
        y: undefined;
        radius: number;
    }) {
        const { x, y, radius } = mouse;
        if (x && y) {
            let dx = x - this.x;
            let dy = y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy)

            let maxDistance = radius;
            const force = (maxDistance - distance) / maxDistance;
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const directionX = forceDirectionX * force * this.speed;
            const directionY = forceDirectionY * force * this.speed;

            if (distance < radius) {
                this.x -= directionX;
                this.y -= directionY;
            } else {
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx / 10;
                }

                if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.y -= dy / 10;
                }
            }
        }
    }
}