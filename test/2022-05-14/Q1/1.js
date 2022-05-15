function demo (name) {
    this.name = name;
}

demo.prototype.greet = function () {
    console.log(this.name)
}

demo.prototype.greetDelay = function(time){
    setTimeout(() => {
        console.log(`Hi, my name is ${this.name}`);
    }, time);
}

let xin = new demo("hello");
xin.greet();
//console.log("dd");
xin.greetDelay(1);