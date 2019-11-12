import { SVG_NS } from '../settings';

export default class Winner {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }


    render(svg, score) {
        const winnerText = document.createElementNS(SVG_NS, "text");
        winnerText.setAttributeNS(null, "x", this.x);
        winnerText.setAttributeNS(null, "y", this.y);
        winnerText.setAttributeNS(null, "fill", "#ffffff");
        winnerText.setAttributeNS(null, "font-size", this.size);
        winnerText.textContent = "Win!";
        winnerText.style.display = "none";
        if (score >= 5) {
            winnerText.style.display = "block";
        }
        svg.appendChild(winnerText);
    }
}



