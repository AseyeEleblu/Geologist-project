class Iron {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 1,
            'friction': 3,
            'density': 3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("black");
        //strokeWeight - defines the thickness of the line
        strokeWeight(1);
        //255 - white, 0 - black and between those two numbers are shades of grey. 
        //alt + shft + f - to correct the formatting
        fill("darkred");
        rect(0, 0, this.width, this.height);
        pop();
    }
};
