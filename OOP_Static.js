class MathUtils{
    // Static Properties
    static Pi = 3.14;
    // Static Methods
    static add(a){
        return a+MathUtils.Pi;
    }
}
console.log(MathUtils.add(4));
console.log(MathUtils.Pi);