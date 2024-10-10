//OPP
class laptop{
    constructor(brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    buy(){
        console.log(`${this.brand}${this.model} purchased by me in ${this.year}`);
    }
    sell(){
        return `My${this.brand}${this.model} will sell in future.`
    }
}
const myLaptop = new laptop("Asus","Vivobook 15",2024);
myLaptop.buy ();
console.log(myLaptop.sell());
//Inheritance:tính kế thừa
class phone extends laptop{
    constructor(brand,model,year,phoneNumber){
    super(brand,model,year);//goi lai construct để thừa hưởng
    this.phoneNumber=phoneNumber;
    }
    own(){
        console.log(`I'm owning ${this.brand} ${this.model} ${this.year} and mt phone number:${this.phoneNumber}`);
    }
}
const myPhone = new phone("Iphone","11 Pro Max",2024,"00039828");
myPhone.own();
