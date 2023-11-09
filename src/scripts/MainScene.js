import * as PIXI from "pixi.js";
import { Background } from "./Background";
import { Platforms } from './Platforms';
import { Hero } from './Hero';
import { LabelScore } from './LabelScore';
import { Globals } from './Globals';
import { FinalScene } from './FinalScene';

export class MainScene {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
        this.createPlatforms();
        this.createHero();
        this.createUI();
    }

    createUI() {
        this.labelScore = new LabelScore();
        this.container.addChild(this.labelScore);
        this.hero.sprite.on('score', () => {
            this.labelScore.renderScore(this.hero.score);
        });
    }

    createBackground() {
        this.bg = new Background();
        this.container.addChild(this.bg.container);
    }

    createPlatforms() {
        this.platforms = new Platforms();
        this.container.addChild(this.platforms.container);
    }

    createHero() {
        this.hero = new Hero();
        this.container.addChild(this.hero.sprite);
        this.container.interactive = true;
        this.container.on('pointerdown', () => {
            this.hero.startJump();
        });
        this.hero.sprite.once('die', () => {
            Globals.scene.start(new FinalScene());
        });
    }

    update(dt) {
        this.bg.update(dt);
        this.platforms.checkCollision(this.hero);
        this.platforms.update(dt);
        this.hero.update(dt);
    }
}