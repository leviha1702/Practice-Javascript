class student{
    #name
    #age
    constructor(name,age){
        this.#name=name;//Biến private
        this.#age=age;//Biến private
    }
    //dùng phương thức get để truy cập giá gtrị và dùng set để thay đổi giá trị
    getName(){
        return this.#name;
    }
    setName(){
        return this.#name=name;
    }
    getAge(){
        return this.#age;
    }
    setAge(age){
        if(age>0){  
            return this.#age=age;
        } else console.log("Invalid age ");
    }
}
const myStudent =new student("Lê Việt Hà",29);
console.log(myStudent.getName());
myStudent.setAge(-2);
myStudent.setAge(19);
console.log(myStudent.getAge());