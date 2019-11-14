import { SVG_NS } from '../settings';
import AttackSound from '../../public/sounds/pong-02.wav';

export default class Shot {
    constructor(boardWidth, width, height, direction, shot1Key, shot2Key) {
        this.boardWidth = boardWidth;
        this.width = width;
        this.height = height;
        this.direction = direction;
        this.shot1Key = shot1Key;
        this.shot2Key = shot2Key;
        this.speed = 7;
        this.x = 0;
        this.y = 0;
        this.sound1 = new Audio(AttackSound);
        this.shooting = false;
    }

    fireMove() {
        this.x += (this.speed * this.direction);
    }

    reset() {
        this.shooting = false;
        this.x = 0;
        this.y = 0;
    }

    position(paddle1, paddle2) {
        if (this.direction === -1) {
            const p1Walls = paddle1.getCoordinates();
            this.x = p1Walls.left - this.width * 2;
            this.y = (p1Walls.bottom + p1Walls.top) / 2;
        } else {
            const p2Walls = paddle2.getCoordinates();
            this.x = p2Walls.right + this.width;
            this.y = (p2Walls.bottom + p2Walls.top) / 2;
        };
        this.shooting = true;
    }

    check() {
        return this.shooting;
    }

    wallCollision() {
        const hitLeft = (this.x - this.width / 2 < 0);
        const hitRight = (this.x + this.width / 2 > this.boardWidth)
        if (hitLeft) {
            this.reset();
        } else if (hitRight) {
            this.reset();
        }
    }

    paddleAttack(paddle1, paddle2) {
        let hitLeft = false, hitRight = false, checkTop = false, checkBottom = false;
        if (this.direction === 1) {
            const p1Walls = paddle1.getCoordinates();
            hitLeft = (this.x + this.width / 2 >= p1Walls.left);
            checkTop = (this.y - this.height / 2 >= p1Walls.top);
            checkBottom = (this.y + this.height / 2 <= p1Walls.bottom);
        } else {
            const p2Walls = paddle2.getCoordinates();
            hitRight = (this.x - this.width / 2 <= p2Walls.right);
            checkTop = (this.y - this.height / 2 >= p2Walls.top);
            checkBottom = (this.y + this.height / 2 <= p2Walls.bottom);
        }

        if (hitLeft && checkTop && checkBottom) {
            this.sound1.play();
            paddle1.decreaseScore();
            this.reset();
        } else if (hitRight && checkTop && checkBottom) {
            this.sound1.play();
            paddle2.decreaseScore();
            this.reset();
        }
    }

    render(svg, paddle1, paddle2, score) {
        const shot = document.createElementNS(SVG_NS, "rect");
        shot.setAttributeNS(null, "width", this.width);
        shot.setAttributeNS(null, "height", this.height);
        shot.setAttributeNS(null, "x", this.x);
        shot.setAttributeNS(null, "y", this.y);
        shot.setAttributeNS(null, "fill", "#FCDA4B");
        this.wallCollision();
        this.paddleAttack(paddle1, paddle2, score);
        svg.appendChild(shot);
        shot.style.display = "none";
        if (this.check()) {
            shot.style.display = "block";
            this.fireMove();
        }
    }
}