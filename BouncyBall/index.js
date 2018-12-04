
let context = document.querySelector("canvas").getContext("2d");
const Ball = function(x, y, radius) {
    this.color = "rgb(255, 0, 0)";
    this.direction = Math.random() * Math.PI * 2;
    this.radius = radius;
    this.speed = Math.random() * 3 + 1;
    this.x = x;
    this.y = y;

}

Ball.prototype = {
    updatePosition:function(w, h) {
        this.x += Math.cos(this.direction) * this.speed;
        this.y += Math.sin(this.direction) * this.speed;

        if (this.x - this.radius < 0) {
            this.x = 0 + this.radius
            this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction) * -1);
        } else if (this.x + this.radius > w) {
            this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction) * -1);
        }

        if (this.y - this.radius < 0) {
            this.y = this.radius;
            this.direction = Math.atan2(Math.sin(this.direction) * -1, Math.cos(this.direction));

        } else if (this.y + this.radius > h) {
            this.y = h - this.radius;
            this.direction = Math.atan2(Math.sin(this.direction) * -1, Math.cos(this.direction));
        }

    }
}

let nball = new Ball(100, 100, 200);

loop();


//----------------------------------
function loop() {
    window.requestAnimationFrame(loop);
    let height = document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;
    nball.updatePosition(width, height);
    context.canvas.height = height;
    context.canvas.width = width;
    context.fillStyle = nball.color;
    context.beginPath();
    context.arc(nball.x, nball.y, nball.radius, 0, Math.PI * 2);
    context.fill();
    for (i = 150, c = 0; i > 0 ; i = i - 1, c = c + 2) {
    context.fillStyle = "RGB(255," + c + "," + c + ")";
    context.beginPath();
    context.arc(nball.x + 20, nball.y - 30, i, 0, Math.PI * 2);
    context.fill();
    }

};