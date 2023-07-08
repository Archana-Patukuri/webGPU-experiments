import {
  WebGLRenderer,
  ACESFilmicToneMapping,
  LinearToneMapping,
  sRGBEncoding,
  PCFSoftShadowMap,
} from "three";
import * as THREE from 'three';
import WebGPURenderer from 'three/addons/renderers/webgpu/WebGPURenderer.js';
function createRenderer() {
  /* const renderer = new WebGLRenderer({ antialias: true });
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.8;
  renderer.outputEncoding = sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.physicallyCorrectLights = true;
   renderer.xr.enabled = true; */
   
			let	renderer = new WebGPURenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.toneMapping = THREE.ACESFilmicToneMapping;
				
  return renderer;
}
export { createRenderer };
