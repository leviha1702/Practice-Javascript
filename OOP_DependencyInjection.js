class Engine{
    start(){
        console.log("Car's Engine is starting");
    }
}
class Car{
    constructor(engine){
        this.engine=engine;
    }
    start(){
        this.engine.start();
    }
}
const engine = new Engine();
const myCar =new Car(engine);
myCar.start();