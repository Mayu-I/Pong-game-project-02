import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight, paddleGap, paddleWidth) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.paddleGap = paddleGap;
        this.paddleWidth = paddleWidth;
        this.direction = 1;
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
            this.vy = Math.floor(Math.random() * 10 - 5);
        }
        this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    wallCollision() {
        const hitTop = (this.y - this.radius <= 0);
        const hitBottom = (this.y + this.radius >= this.boardHeight);
        const hitLeft = (this.x + this.radius < 0);
        const hitRight = (this.x - this.radius > this.boardWidth);
        if (hitTop || hitBottom) {
            this.vy = this.vy * -1;
        }
        if (hitLeft) {
            console.log("hit wall");
            this.direction = 1;
            this.reset();
        } else if (hitRight) {
            console.log("hit wall");
            this.direction = -1;
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
            this.vx = this.vx * -1;
            this.direction = this.direction * -1;
        }
    }


    render(svg, paddle1, paddle2) {
        const circle = document.createElementNS(SVG_NS, "circle");
        circle.setAttributeNS(null, "r", this.radius);
        circle.setAttributeNS(null, "cx", this.x);
        circle.setAttributeNS(null, "cy", this.y);
        circle.setAttributeNS(null, "fill", "#ffffff");
        svg.appendChild(circle);
        this.ballMove();
        this.wallCollision();
        this.paddleCollision(paddle1, paddle2);
    }

}


