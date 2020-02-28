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

		//Slider element in GUI
		this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

		//Checkbox element for square and triangle(b)
		this.gui.add(this.scene, 'showSquare').name('Show square');
		this.gui.add(this.scene, 'showTriangle').name('Show triangle');
		this.gui.add(this.scene, 'showParallelogram').name('Show parallelogram');
		this.gui.add(this.scene, 'showTriangleBig').name('Show big triangle');
		this.gui.add(this.scene, 'showTriangleSmall').name('Show small triangle');

		return true;
	}
}