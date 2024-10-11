class car{
    constructor(model){
        this.model=model;
    }
    color(){
        console.log("car's color is ...");
    }
}
class Mec extends car{
    constructor(model,name){
    super(model);
    this.name=name;    
    }
    color(){
        console.log(`${this.name}'s color is ${this.model}`);
    }
}
class BMW extends car{
    constructor(model,name){
     super(model);
    this.name=name;
    }
    color(){
        console.log(`${this.name}'s color is ${this.model}`);
    }
}
const myMec=new Mec("Mecedes GLC 300","White Black");
myMec.color();
const myBMW= new BMW("BMW I5X","Golden");
myBMW.color();
