import { SVG_NS } from '../settings';
import WinSound from '../../public/sounds/winning.wav';

export default class Winner {
    constructor(x, y, size, winScore) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.winScore = winScore;
        this.sound = new Audio(WinSound);
    }

    /*
winScore() {
    const scoreBtn = document.querySelector('.scoreBtn');
    const scoreNum = document.querySelector('.score').value;
    const finalScore = document.querySelector('.finalScore');
    scoreBtn.addEventListener("click", function () {
        finalScore.innerHTML = scoreNum;
        // console.log(scoreNum);
        return scoreNum;
    });
}
*/

    render(svg, score) {
        const winnerText = document.createElementNS(SVG_NS, "text");
        winnerText.setAttributeNS(null, "x", this.x);
        winnerText.setAttributeNS(null, "y", this.y);
        winnerText.setAttributeNS(null, "fill", "#ffffff");
        winnerText.setAttributeNS(null, "font-size", this.size);
        winnerText.textContent = "Win!";
        winnerText.style.display = "none";
        if (score >= this.winScore && score < this.winScore + 1) {
            this.sound.loop = false;
            this.sound.play();
            winnerText.style.display = "block";
        }
        svg.appendChild(winnerText);
    }
}



