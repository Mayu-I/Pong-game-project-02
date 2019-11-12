import { SVG_NS } from '../settings';

export default class Shot {
    constructor(width, height, x, y, ) {
        this.width = width;
        this.height = height;
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