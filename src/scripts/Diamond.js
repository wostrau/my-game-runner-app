import * as PIXI from 'pixi.js';
import { Globals } from './Globals';

export class Diamond {
    constructor(x, y) {
        this.sprite = new PIXI.Sprite(Globals.resources['diamond'].texture);
        this.sprite.x = x;
        this.sprite.y = y;

    }

    checkCollision(hero) {
        if (!this.sprite) return;

        if (this.isOverlap(hero)) {
            hero.collectDiamonds();
            this.sprite.destroy();
            this.sprite = null;
        }
    }

    isOverlap(hero) {
        return (
            hero.bottom >= this.top &&
            hero.top <= this.bottom &&
            hero.right >= this.left &&
            hero.left <= this.right
        );
    }

    get left() {
        return this.sprite.x + this.sprite.parent.x;
    }

    get right() {
        return this.left + this.sprite.width;
    }

    get top() {
        return this.sprite.y + this.sprite.parent.y;
    }

    get bottom() {
        return this.top + this.sprite.height;
    }
}