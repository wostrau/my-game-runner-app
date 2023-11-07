import * as PIXI from "pixi.js";
import { Globals } from './Globals';

export class Hero {
    constructor() {
        this.sprite = new PIXI.AnimatedSprite([
            Globals.resources['walk1'].texture,
            Globals.resources['walk2'].texture
        ]);

        this.sprite.x = window.innerWidth / 2;
        this.sprite.y = window.innerHeight / 2;

        this.sprite.loop = true;
        this.sprite.animationSpeed = 0.1;
        this.sprite.play();
    }
}