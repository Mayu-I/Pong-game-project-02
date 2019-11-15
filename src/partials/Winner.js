import { SVG_NS } from '../settings';
import WinSound from '../../public/sounds/winning.wav';

export default class Winner {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.winscore = 100;
        this.sound = new Audio(WinSound);
    }


    changeWinscore() {
        const scoreBtn = document.querySelector('.scoreBtn');
        const scoreNum = document.querySelector('.score');
        const finalScore = document.querySelector('.finalScore');
        scoreBtn.addEventListener("click", function () {

            finalScore.innerHTML = scoreNum.value;
            this.winscore = scoreNum.value;
            return this.winscore;
        });
        this.winscore = scoreNum.value;
        return this.winscore;
    }

    // getWinscore() {
    //     return this.winscore;
    // }


    reset() {
        const scoreNum = document.querySelector('.score');
        const finalScore = document.querySelector('.finalScore');
        finalScore.innerHTML = scoreNum.value;
        scoreNum.value = "";
    }


    render(svg, score) {
        const winnerText = document.createElementNS(SVG_NS, "text");
        winnerText.setAttributeNS(null, "x", this.x);
        winnerText.setAttributeNS(null, "y", this.y);
        winnerText.setAttributeNS(null, "fill", "#ffffff");
        winnerText.setAttributeNS(null, "font-size", this.size);
        winnerText.textContent = "Win!";
        winnerText.style.display = "none";
        if (score >= this.winscore && score < this.winscore + 1 && this.winscore > 0) {
            this.sound.loop = false;
            this.sound.play();
            winnerText.style.display = "block";
        }
        // this.changeWinscore();
        svg.appendChild(winnerText);
    }
}



