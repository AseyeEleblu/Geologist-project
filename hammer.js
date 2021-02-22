class Hammer {
    constructor(x, y) {
        var options = {
            'restitution': 2,
            'friction': 1.0,
            'density': 0.5
        }
        this.body = Bodies.rectangle(x, y, 100, 30, options);
        this.width = 120;
        this.height = 30;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle

        pos.x = mouseX;
        pos.y = mouseY
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("white");
        strokeWeight(3);
        fill("orange");
        rect(0, 0, this.width, this.height);
        pop();
    }
};
