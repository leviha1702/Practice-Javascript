class car{
    constructor(brand){
        this.brand=brand;
        this.speed=0;
    }
    accelerate(amount){
        this.speed+=amount;
        return this;
    }
    brake(amount){
        this.speed-=amount;
        return this;
    }
    displaySpeed(){
        console.log(`${this.brand} is running ${this.speed}km/h`);
        return this;
    }
}
const myCar=new car("Rolls-Royce");
myCar.accelerate(100).brake(10).displaySpeed();
