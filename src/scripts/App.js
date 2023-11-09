import * as PIXI from "pixi.js";
import { Loader } from "./Loader";
import { Globals } from './Globals';
import { SceneManager } from './SceneManager';
import { MainScene } from './MainScene';

export class App {
    run() {
        // create canvas
        this.app = new PIXI.Application({ resizeTo: window });
        document.body.appendChild(this.app.view);

        Globals.scene = new SceneManager();
        this.app.stage.addChild(Globals.scene.container);
        this.app.ticker.add(dt => Globals.scene.update(dt));

        // load sprites
        this.loader = new Loader(this.app.loader);
        this.loader.preload().then(() => {
            Globals.scene.start(new MainScene());
        });
    }
}