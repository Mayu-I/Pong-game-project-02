import { SVG_NS } from '../settings';

export default class Paddle {
    constructor(boardHeight, width, height, x, y, speed, upKey, downKey) {
        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.score = 0;
        this.maxNum = this.boardHeight - this.height;
        this.minNum = 0;
        document.addEventListener("keydown", event => {
            switch (event.key) {
                case upKey:
                    this.moveUp();
                    break;
                case downKey:
                    this.moveDown();
                    break;
            }
        });
    }

    moveUp() {
        this.y = Math.max(this.minNum, this.y - this.speed)
    }
    moveDown() {
        this.y = Math.min(this.maxNum, this.y + this.speed)
    }
    getCoordinates() {
        return {
            left: this.x,
            top: this.y,
            right: this.x + this.width,
            bottom: this.y + this.height
        };
    }
    render(svg) {
        const paddle = document.createElementNS(SVG_NS, "rect");
        paddle.setAttributeNS(null, "width", this.width);
        paddle.setAttributeNS(null, "height", this.height);
        paddle.setAttributeNS(null, "x", this.x);
        paddle.setAttributeNS(null, "y", this.y);
        paddle.setAttributeNS(null, "fill", "#ffffff");

        svg.appendChild(paddle);
    }

}


