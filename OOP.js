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