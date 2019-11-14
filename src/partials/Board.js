import { SVG_NS, BOARD_COLOR, BOARD_STROKE } from '../settings';

export default class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    render(svg) {
        const rect = document.createElementNS(SVG_NS, "rect");
        rect.setAttributeNS(null, "width", this.width);
        rect.setAttributeNS(null, "height", this.height);
        rect.setAttributeNS(null, "x", 0);
        rect.setAttributeNS(null, "y", 0);
        rect.setAttributeNS(null, "stroke", BOARD_STROKE);
        rect.setAttributeNS(null, "stroke-width", 3);
        rect.setAttributeNS(null, "fill", BOARD_COLOR);

        const line = document.createElementNS(SVG_NS, "line");
        line.setAttributeNS(null, "x1", this.width / 2);
        line.setAttributeNS(null, "y1", 0);
        line.setAttributeNS(null, "x2", this.width / 2);
        line.setAttributeNS(null, "y2", this.height);
        line.setAttributeNS(null, "stroke", "#ffffff");
        line.setAttributeNS(null, "stroke-width", 7);
        line.setAttributeNS(null, "stroke-dasharray", "7, 15");

        svg.appendChild(rect);
        svg.appendChild(line);


    }

}


