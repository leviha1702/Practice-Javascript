class Rice{
    constructor(time){
        this.time=time;
    }
    cook(){
        if(this.time) console.log("Rive have cooked finished ");
        else console.log("Raw rice");
    }
    runTime(){
        return this.time>15;
    }
}
const rice=new Rice(20);
rice.cook();
