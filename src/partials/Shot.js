import { SVG_NS } from '../settings';
import FireSound from '../../public/sounds/pong-04.wav';

export default class Shot {
    constructor(width, height, direction, shot1Key, shot2Key) {
        this.width = width;
        this.height = height;
        this.direction = direction;
        this.shot1Key = shot1Key;
        this.shot2Key = shot2Key;
        this.speed = 5;
        this.sound = new Audio(FireSound);
        this.fired = false;
        this.reset()
    }

    shotMove() {
        this.x += (this.speed * this.direction);
    }

    reset(paddle1, paddle2) {
        if (this.direction === -1) {
            const p1Walls = paddle1.getCoordinates();
            this.x = p1Walls.left - this.width * 2;
            this.y = (p1Walls.bottom + p1Walls.top) / 2;
        } else {
            const p2Walls = paddle2.getCoordinates();
            this.x = p2Walls.right + this.width;
            this.y = (p2Walls.bottom + p2Walls.top) / 2;
        };
    }

    isFired() {
        return this.fired;
    }

    // paddleAttack(paddle1, paddle2) {
    //     let hitLeft = false, hitRight = false, checkTop = false, checkBottom = false;
    //     if (this.direction === 1) {
    //         const p1Walls = paddle1.getCoordinates();
    //         hitLeft = (this.x + this.width / 2 >= p1Walls.left);
    //         checkTop = (this.y - this.height / 2 >= p1Walls.top);
    //         checkBottom = (this.y + this.height / 2 <= p1Walls.bottom);
    //     } else {
    //         const p2Walls = paddle2.getCoordinates();
    //         hitRight = (this.x - this.width / 2 <= p2Walls.right);
    //         checkTop = (this.y - this.height / 2 >= p2Walls.top);
    //         checkBottom = (this.y + this.height / 2 <= p2Walls.bottom);
    //     }
    //     if (hitLeft && checkTop && checkBottom) {
    //         this.sound.play();
    //         paddle1.decreaseScore();
    //     } else if (hitRight && checkTop && checkBottom) {
    //         this.sound.play();
    //         paddle2.decreaseScore();
    //     }
    // }

    render(svg, paddle1, paddle2, score) {
        const shot = document.createElementNS(SVG_NS, "rect");
        shot.setAttributeNS(null, "width", this.width);
        shot.setAttributeNS(null, "height", this.height);
        shot.setAttributeNS(null, "x", this.x);
        shot.setAttributeNS(null, "y", this.y);
        shot.setAttributeNS(null, "fill", "#ffffff");
        // this.paddleAttack(paddle1, paddle2, score);
        svg.appendChild(shot);

        if (this.isFired()) {
            this.shotMove();
        }
    }
}