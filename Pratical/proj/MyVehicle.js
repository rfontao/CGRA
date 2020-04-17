/**
* MyVehicle
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene) {
        super(scene);

        this.sphere = new MySphere(this.scene, 16, 16);
        this.cilinder = new MyCilinder(this.scene, 16);
        this.rudder = new MyRudder(this.scene);

        this.lastT = 0;

        this.reset();
    }

    onEngineChange(engine) {
        if (engine == this.scene.DEFAULT_ENGINE) {
            this.speed[0] = Math.sqrt(this.speed[0]**2 + this.speed[1]**2 + this.speed[2]**2);
        }
        else { // IMPROVED_ENGINE
            this.speed[2] = this.speed[0] * Math.cos(this.curAngle);
            this.speed[1] = 0;
            this.speed[0] = this.speed[0] * Math.sin(this.curAngle);
        }
    }

    update(t) {

        if (this.lastT == 0)
            this.deltaTime = 50; // Default time between calls
        else
            this.deltaTime = this.lastT - t;
        this.lastT = t;



        if (this.scene.engineVersion == this.scene.DEFAULT_ENGINE) {
            this.rotorAngle += this.speed[0] * 0.5;
        }
        else {
            if (this.thrusting > 0)
                this.rotorAngle += 0.4 * this.scene.speedFactor;
            else if (this.thrusting < 0)
                this.rotorAngle -= 0.4 * this.scene.speedFactor;
        }

        if (this.turning > 0)
            this.rudderAngle = -0.3 * this.scene.turnRadius;
        else if (this.turning < 0)
            this.rudderAngle = 0.3 * this.scene.turnRadius;
        else
            this.rudderAngle = 0;

        if (this.scene.engineVersion == this.scene.DEFAULT_ENGINE) {
            this.position[0] += this.speed[0] * Math.sin(this.curAngle);
            this.position[2] += this.speed[0] * Math.cos(this.curAngle);
        }
        else {
            this.position[0] += this.speed[0];
            this.position[2] += this.speed[2];

            this.speed[0] *= 0.95;
            this.speed[2] *= 0.95;
        }

        this.thrusting = 0;
        this.turning = 0;
    }

    turn(val) {
        this.turning = val;
        this.curAngle += val;
    }

    accelerate(val) {
        this.thrusting = val;
        if (this.scene.engineVersion == this.scene.DEFAULT_ENGINE) {
            this.speed[0] += val;
        }
        else {
            this.speed[0] += Math.sin(this.curAngle) * val;
            this.speed[2] += Math.cos(this.curAngle) * val;
        }
    }

    reset() {
        // Physics
        this.curAngle = 0;
        this.speed = [0, 0, 0];
        this.position = [0, 10, 0];

        // Display
        this.thrusting = 0;
        this.rotorAngle = 0;
        this.turning = 0;
        this.rudderAngle = 0;
    }

    displayRudders() {
        var separation = 0.15;
        // Top
        this.scene.pushMatrix();
        this.scene.translate(0, separation, -1.5);
        this.scene.rotate(this.rudderAngle, 0, 1, 0);
        this.rudder.display();
        this.scene.popMatrix();

        // Bottom
        this.scene.pushMatrix();
        this.scene.translate(0, -separation, -1.5);
        this.scene.rotate(this.rudderAngle, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.rudder.display();
        this.scene.popMatrix();

        // Right
        this.scene.pushMatrix();
        this.scene.translate(separation, 0, -1.5);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.rudder.display();
        this.scene.popMatrix();

        // Left
        this.scene.pushMatrix();
        this.scene.translate(-separation, 0, -1.5);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.rudder.display();
        this.scene.popMatrix();
    }

    displayHull(){
        this.scene.pushMatrix();
        this.scene.translate(0, 0.15, 0);
        this.scene.pushMatrix();
        this.scene.scale(0.85, 0.85, 2);
        this.sphere.display();
        this.scene.popMatrix();
        this.displayRudders();
        this.scene.popMatrix();
    }

    displayPropeller(){
        this.scene.pushMatrix();
        this.scene.scale(0.08, 0.08, 0.2);
        this.sphere.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.23);
        this.scene.rotate(this.rotorAngle, 0, 0, 1);
        this.scene.scale(0.01, 0.12, 0.03);
        this.sphere.display();
        this.scene.popMatrix();
    }

    displayDeck(){
        
        // TODO: Refactor this
        this.scene.pushMatrix();
        this.scene.translate(0, -0.75, -0.6);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.25, 1.4, 0.25);
        this.cilinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        
        this.scene.translate(0, -0.75, 0);
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.6);
        this.scene.scale(0.25, 0.25, 0.25);
        this.sphere.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.8);
        this.scene.scale(0.25, 0.25, 0.25);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

        // Proppellers
        this.scene.pushMatrix();
        this.scene.translate(0.3, -0.85, -0.65);
        this.displayPropeller();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-0.3, -0.85, -0.65);
        this.displayPropeller();
        this.scene.popMatrix();
        // End propellers
    }

    display(){
        this.scene.pushMatrix();

        // Begin Movement
        this.scene.translate(...this.position);
        this.scene.rotate(this.curAngle, 0, 1, 0);
        // End Movement
        
        // Main display starts
        this.displayHull();
        this.displayDeck();
        // Main display ends

        this.scene.popMatrix();
    }
    
}
