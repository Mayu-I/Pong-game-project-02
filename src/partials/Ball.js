import { SVG_NS } from '../settings';
import PingSound from '../../public/sounds/pong-01.wav';

export default class Ball {
    constructor(radius, boardWidth, boardHeight, paddleGap, paddleWidth, color) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.paddleGap = paddleGap;
        this.paddleWidth = paddleWidth;
        this.color = color;
        this.direction = 1;
        this.sound1 = new Audio(PingSound);
        this.reset();
    }

    ballMove() {
        this.x += this.vx;
        this.y += this.vy;
    }

    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
        this.vy = 0;
        while (this.vy === 0) {
            this.vy = Math.floor(Math.random() * (Math.random() * 10) - 5);
        }
        this.vx = this.direction * (6 + Math.floor((Math.random() * 3)) - Math.abs(this.vy));
    }

    wallCollision(paddle1, paddle2) {
        const hitTop = (this.y - this.radius <= 0);
        const hitBottom = (this.y + this.radius >= this.boardHeight);
        const hitLeft = (this.x + this.radius < 0);
        const hitRight = (this.x - this.radius > this.boardWidth);
        if (hitTop || hitBottom) {
            this.vy = this.vy * -1;
        }
        if (hitLeft) {
            this.direction = 1;
            paddle1.increaseScore();
            this.reset();
        } else if (hitRight) {
            this.direction = -1;
            paddle2.increaseScore();
            this.reset();
        }
    }

    paddleCollision(paddle1, paddle2) {
        let hitWall = false, checkTop = false, checkBottom = false;
        if (this.direction === 1) {
            const p1Walls = paddle1.getCoordinates();
            hitWall = (this.x + this.radius >= p1Walls.left && this.x + this.radius <= p1Walls.right);
            checkTop = (this.y - this.radius >= p1Walls.top);
            checkBottom = (this.y + this.radius <= p1Walls.bottom);
        } else {
            const p2Walls = paddle2.getCoordinates();
            hitWall = (this.x - this.radius <= p2Walls.right && this.x - this.radius >= p2Walls.left);
            checkTop = (this.y - this.radius >= p2Walls.top);
            checkBottom = (this.y + this.radius <= p2Walls.bottom);
        }
        if (hitWall && checkTop && checkBottom) {
            this.sound1.play();
            this.vx = this.vx * -1;
        }
    }

    render(svg, paddle1, paddle2) {
        const circle = document.createElementNS(SVG_NS, "circle");
        circle.setAttributeNS(null, "r", this.radius);
        circle.setAttributeNS(null, "cx", this.x);
        circle.setAttributeNS(null, "cy", this.y);
        circle.setAttributeNS(null, "fill", this.color);
        svg.appendChild(circle);
        this.ballMove();
        this.wallCollision(paddle1, paddle2);
        this.paddleCollision(paddle1, paddle2);
    }

}


