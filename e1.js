function Circle(r){
    this.r = r;
    this.p = Math.PI;
    this.getArea= function(){
        return r*r*this.p;
    };
    this.getPerimeter= function(){
        return this.p*r*2;
    };
};
let circle1= new Circle(1);
console.log(circle1.getArea());  //3.141592653589793
console.log(circle1.getPerimeter());  //6.283185307179586
