import { SVG_NS } from '../settings';
import FireSound from '../../public/sounds/pong-04.wav';

export default class Shot {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.speed = 5;
        this.direction = 1;
        this.sound2 = new Audio(FireSound);
    }



    paddleAttack(paddle1, paddle2) {
        let hitPaddle = false, checkTop = false, checkBottom = false;
        if (this.direction === 1) {
            const p1Walls = paddle1.getCoordinates();
            hitPaddle = (this.x + this.width / 2 >= p1Walls.left);
            checkTop = (this.y - this.height / 2 >= p1Walls.top);
            checkBottom = (this.y + this.height / 2 <= p1Walls.bottom);
        } else {
            const p2Walls = paddle2.getCoordinates();
            hitPaddle = (this.x - this.width / 2 <= p2Walls.right);
            checkTop = (this.y - this.height / 2 >= p2Walls.top);
            checkBottom = (this.y + this.height / 2 <= p2Walls.bottom);
        }
        if (hitPaddle && checkTop && checkBottom) {
            this.sound1.play();
            this.vx = this.vx * -1;
        }
    }

    render(svg) {
        const shot = document.createElementNS(SVG_NS, "rect");
        shot.setAttributeNS(null, "width", this.width);
        shot.setAttributeNS(null, "height", this.height);
        shot.setAttributeNS(null, "x", this.x);
        shot.setAttributeNS(null, "y", this.y);
        shot.setAttributeNS(null, "fill", "#ffffff");

        svg.appendChild(shot);
    }
}