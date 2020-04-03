/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'selectedCubemapTex', this.scene.cubemapTextures).onChange(this.scene.onSelectedCubemapTexture.bind(this.scene)).name('Cubemap Texture');
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        return true;
    }
}