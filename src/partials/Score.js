import { SVG_NS } from '../settings';

export default class Score {
    constructor(x, size) {
        this.x = x;
        this.y = 50;
        this.size = size;
    }
    render(svg, score) {
        const scoreText = document.createElementNS(SVG_NS, "text");
        scoreText.setAttributeNS(null, "x", this.x);
        scoreText.setAttributeNS(null, "y", this.y);
        scoreText.setAttributeNS(null, "fill", "#ffffff");
        scoreText.setAttributeNS(null, "font-size", this.size);
        scoreText.textContent = score;
        svg.appendChild(scoreText);
    }
}





