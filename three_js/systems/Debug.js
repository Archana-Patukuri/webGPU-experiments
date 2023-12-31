import { GridHelper, AxesHelper, Group } from "three";
import Stats from "../../node_modules/three/examples/jsm/libs/stats.module.js";
import { GUI } from "../../node_modules/three/examples/jsm/libs/lil-gui.module.min.js"
let stats,
  gui,
  guiStatsEl;    
class Debug {
  createHelpers(scene) {
    const axexHelper = new AxesHelper(5);
    const gridHelper = new GridHelper(10, 10);

    const helperGroup = new Group();
    helperGroup.add(axexHelper);
    helperGroup.add(gridHelper);
    scene.add(helperGroup);
  }

  logSceneInfo(renderer) {
    console.log(renderer.info.render);
    console.log(renderer.info.memory);
    console.log(renderer.info.programs);
  }

  createGui(renderer) {
    //CREATE GUI FOR DEBUGGING
    gui = new GUI();

    const perfFolder = gui.addFolder("Performance");

    guiStatsEl = document.createElement("div");
    perfFolder.$children.appendChild(guiStatsEl);
    perfFolder.open();

    //PIXEL RATIO TEST FOR LOW END DEVICES
    let obj1 = { x: 1 };
    let pixelTest = function () {
      renderer.setPixelRatio(window.devicePixelRatio / obj1.x);
    };
  }
  

  displayStats() {
    //SHOW FPS
    stats = new Stats();          
    //document.body.appendChild(stats.dom);   
    
    
  }

  update(renderer) {
    //UPDATE
    stats.update();
  
  }
}

export { Debug };
