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
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'selectedCubemapTex', this.scene.cubemapTextures).onChange(this.scene.onSelectedCubemapTexture.bind(this.scene)).name('Cubemap Texture');
        this.gui.add(this.scene, 'speedFactor', 0.1, 3).name('Speed factor');
        this.gui.add(this.scene, 'speedFactor', 0.1, 2).name('Turning radius');
        this.gui.add(this.scene, 'scaleFactor', 0.5, 3).name('Scale');


        // Init keys
        this.initKeys();

        return true;
    }

    initKeys() {
        // create reference from the scene to the GUI
        this.scene.gui = this;

        // disable the processKeyboard function
        this.processKeyboard=function(){};

        // create a named array (aka a dictionary? you dumb dumb) to store wich keys are being pressed
        this.activeKeys={};
    }

    processKeyDown(event) {
        // called when a key is pressed down
        // mark it as active in the array
        this.activeKeys[event.code]=true;
    }

    processKeyUp(event) {
        // called when a key is released, mark it as inactive in the array
        this.activeKeys[event.code]=false;
    }

    isKeyPressed(keyCode) {
        // returns true if a key is marked as pressed, false otherwise
        return this.activeKeys[keyCode] || false;
    }

}