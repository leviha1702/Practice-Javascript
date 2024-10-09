class laptop{
    constructor(brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    sell(){
        console.log(`${this.brand}${this.model}is selling at ${this.year}`);

    }
}
const myLaptop = new laptop("Asus","Vivobook 15",2024);
myLaptop.sell();