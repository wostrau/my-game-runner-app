import * as PIXI from 'pixi.js';
export class LabelScore extends PIXI.Text {
    constructor() {
        super();
        this.x = 10;
        this.y = 10;
        this.style = {
            fontFamily: 'Verdana',
            fontWeight: 'bold',
            fontSize: 44,
            fill: ['#FF7F50']
        };
        this.renderScore();
    }

    renderScore(score = 0) {
        this.text = `Score: ${score}`;
    }
}