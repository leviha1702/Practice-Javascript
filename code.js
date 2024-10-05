console.log('hello')
//khai bao bien
let name ="Ha";
let age = 20;
let isStudent= true;
 console.log("Name : " +name);
 console.log("Age: "+age);
 console.log("la hoc sinh "+ isStudent);
//ham tong
function sum(a, b){
    let s=0;
    s=a+b;
    return s;
 }
console.log('tong hai so:' + sum(5.1, 6));
console.log('tong hai so la:' + sum( 7, 12));
// kiem tra so chan và so le
function checkOddEven(number){
    if(number%2==0)
        console.log(number +" la so chan.");
    else console.log(number +" la so le.");
}
checkOddEven(9);
checkOddEven(18);
// vong lap
for(let i=0;i<=10;i++){
    console.log(i);
}
// vong lap va mang
let number = [12,35,33,44];
let total =0;
for(let i=0;i<4;i++){
    total +=number[i];
}
console.log("tong cac phan tu trong mang: "+total);
// chuoi
function toUpperCase(str){
    return str.toUpperCase();
}
console.log(toUpperCase("Le Viet Ha"));//"LE VIET HA"
// so nguyen to
function kt_SNT(num){
    if (num<2) return false;
    else for(let i=2;i<num/2;i++){
        if(num%i==0) return false;
    }
    return true;
}
console.log(kt_SNT(9));
console.log(kt_SNT(5));
// dao nguoc chuoi
function reverseString(str){
    let newString="";
    for(let i=str.length-1;i>=0;i--){
        newString+=str[i];
    }
    return newString;
}
console.log(reverseString(' L Vit Ha '));
// mang va doi tuong
let students=[{name:"Ha",grade:10},{name:"Hamter",grade:8.5},{name:"Allice",grade:5.5}];
for(let student of students ){
    if(student.grade>=8) console.log(student.name +" gioi");
}
// FizzBuzz
function fizzBuzz(n){
    for(let i=1;i<=n;i++){
        if(i%3==0&&i%5!=0) console.log('Fizz');
        else if(i%5==0&&i%3!=0) console.log('Buzz');
        else if(i%3==0&&i%5==0) console.log('FizzBuzz');
        else console.log(i);
    }
}
fizzBuzz(15);
// sap xep thu tu tang dan cua mang
function compareNumbers(a,b){
    return b-a;
}
let a = [1,5,5,8,8,4,2];
console.log(a.sort(compareNumbers));
// tong ptu trong mang
function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log('tong mang :' + sumArray([6,9,10,11]));
// xoa bo phan tu trung lap 
function removeDuplicates(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=1;j<arr.length;j++){
            if(arr[i]===a[j]) arr.splice(j,1);
        }
    }
    return arr;
}
const array = [1,2,2,3,3,4,6];
console.log(removeDuplicates(array));
// day fibonancci thu n
function fibonancci(n){
    let f0=0;
    let f1=1;
    let fn=1;
    if(n<0) return -1;
    else if(n==0 || n==1) return n;
    else {
        for(let i=2;i<n;i++){
            f0=f1;
            f1=fn;
            fn=f0+f1;
        }
    }
    return fn;
}
console.log(fibonancci(10));
// ktra chuoi doi xung
function isPalindrome(str){
    let temp=0;
    let n=str.length;
    for(let i=0;i<n/2;i++){
        if(str[i]!=str[n-1-i])
            temp++;
    }
    if (temp==0) return true;
    else return false;
}
console.log(isPalindrome("racecar"));
// tim so lon t2 trong mang
function secondLargest(arr){
    let n=arr.length;
    let second,largest;
    if(arr[1]>arr[0]){
        second=arr[0];
        largest=arr[1];
    } else {
        second=arr[1];
        largest=arr[0];
    }
    for(let i=2;i<n;i++){
        if(largest<arr[i]){
            second=largest;
            largest=arr[i];
        }else if(second<arr[i])
            second=arr[i];
    }
    return second;
}
console.log('so lon nhat thu 2:' + secondLargest([3,5,7,8]));
// delete space start and end
let s =" tha  yeu  duoi ";
let newString =s.trim();
console.log(newString);
// dao nguoc tu trong cau
function reverseWords(str){
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
console.log("chuoi sau khi dao nguoc: " + reverseWords(newString));
// tinh tong chu so
function sumDigits(n){
    let numStr = n.toString();//b1:chuyen so n thanh chuoi
    let digits = numStr.split('');//b2: su dung phuong thuc spkit de tach tung chu so
    let s=0;
    for(let digit of digits){
        s+=parseInt(digit);  //chuyen chu so tu chuoi sang roi tinh tong 
    }
    return s;
}
console.log('tong cua cac chu so 156 la:' + sumDigits(156));
// chartAt(index):tra ve ki tu ve vi tri chỉ dịnh
let str = "he lo co a";
console.log('ki tu o vi tri so 6 :' + str.charAt(6));//o
// indexOf:tim vi tri dau tien chuoi con
let ok = "con chim se ";
console.log(ok.indexOf("se"));//9
console.log(ok.indexOf("loc"));//-1
// so lan xuat hien nhiu nhat tron mang
function mostXuatHien(arr){
    let max=1;
    let x;
    for(let i=0;i<arr.length-1;i++){
        let dem=1;
        for(let j=1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                dem++;
                arr.splice(j,1);
            }
        }
        if(dem>max){
            max=dem;
            x=arr[i];
        }
    }
    return x;
}
console.log("phan tu xuat hien nhieu nhat trong mang:" + mostXuatHien([2,3,5,5,5,6,7,8]));
//delete falsy
function removeFalsyValues(arr){
    let newArr=[];
    let j=0;
    for(let i=0;i<arr.length;i++){
        if(Boolean(arr[i])==true){ 
            newArr[j]=arr[i]; 
            j++;
        }
    }
    return newArr;
}
console.log(removeFalsyValues([0,1,false,2,'',3]));
console.log(removeFalsyValues([null, NaN, undefined, 4, 5])); // [4, 5]
//sap xep theo so lan xuat hien cua phan tu
function sortByFrequency(arr){
    let newArr={};//tao doi tuong dem so lan xuat hien ptu
    for(let num of arr){
        if(newArr[num]){
            newArr[num]++
        }  else {
            newArr[num]=1;
        }
    }//sap xep mang dua tren so lan xuat hien
    return arr.sort((a,b)=> {
        if(newArr[b]!== newArr[a]){
            return newArr[b]-newArr[a];
        }
    })
}let arr=[4,5,5,5,4,6,3];
console.log(sortByFrequency(arr));
// dem so lan xuat hien tu trong chuoi do
function countWordFrequency(str){
    str=str.toLowerCase().replace(/[.,!?;:]/g, '');
    let word =str.split(' ');
    let wordFreq={};
    word.forEach(function(word) {
        if(wordFreq[word]){
            wordFreq[word]++;
        }else {
            wordFreq[word]=1;
        } 
    });
    return wordFreq;
}
let test ="xin chao toi ten ha toi 17 tuoi ";
console.log(countWordFrequency(test));
// đao nguoc so nguyen
function reverseInteger(num){
    //chuyen so thanh chuoi, tach ki tu va dao nguoc r gop lai chuoi
    let reversedStr = Math.abs(num).toString().split('').reverse().join('');
    // chuyen chuoi thanh so
    let reversedNum = parseInt(reversedStr) * Math.sign(num);
    return reversedNum;
}
console.log(reverseInteger(123));
// tim so duong nho nhat trong mang
//c1
function numDNN(arr){
    let n=arr.length;
    let min=-1,m=0;
    let newArr=[];
    for(let i=0;i<n;i++){
        if(arr[i]>0) newArr[m]=arr[i];
            m++; 
    }
    console.log(newArr);
    min=newArr[0];
    for(let j=0;j<newArr.length;j++){
        if(newArr[j]<min) min=newArr[j];
    }
    return min;
}
console.log(numDNN([4,-4,1,0,2,-1,3]));
//c2
function soSNN(arr){
    //loc so duong
    let positoveNumbers = arr.filter(num=>num>0);
    //neu khong co so duong trong mang
    if(positoveNumbers.length===0){
        return false;
    }
    let smallestPositive=Math.min(...positoveNumbers);
    return smallestPositive;
}
console.log(soSNN([4,-4,1,0,2,-1,3]));
console.log(soSNN([0,-2]));
// switch...case(so ung voi ngay thu may)
function getDayOfWeek(dayNumber){
    let dayName;
    switch(dayNumber){
        case 1:
            dayName = "chu nhat";
            break;
        case 2:
            dayName = "thu hai";
            break;
        case 3:
            dayName = "thu ba";
            break;
        case 4:
            dayName = "thu tu";
            break;
        case 5:
            dayName = "thu nam";
            break;
        case 6:
            dayName = "thu sau";
            break;
        case 7:
            dayName = "thu bay";
            break;
        default:
            dayName = "so khong hop le";
    }
    return dayName;
}
let dayNumber = 4;
console.log(getDayOfWeek(dayNumber));
// ham for...in
function countProperties(obj){
    let count=0;
    for(let key in obj){
        count++;
    }
    return count;
}
let person = {lastName: "Ha",age: 19, fistName:"Le",city: "Nha Trang" };
console.log(countProperties(person));
// ham tinh tong phan tu trong mang dùng for...of
function sumArr(arr){
    let s=0;
    for(let value of arr){
        s+=value;
    }
    return s;
}
let arr1 = [3,5,7,8];
console.log(sumArr(arr1));
// dung for...in kiem tra object co thhuoc tinh hay khong
function hasProperty(obj,prop){
    for(let key in obj){
        if (key === prop) return true;
    }
    return false;
}
console.log(hasProperty(person,"fistName"));
// ham promise
function taskOne(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("Task 1 complete!");},2000);
    });
}
function taskTwo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("Task 2 complete!");},1000);
    });
}
function taskThree(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("Task 3 complete!");},3000);
    });
}
taskOne().then((result)=>{console.log(result);
    return taskTwo();
})
.then((result)=>{ console.log(result);
    return taskThree();
})
.then((result)=>{ console.log(result);
})
.catch((error)=>{ console.error("Error:",error);
});
//tim cap co trong mang co tong bang tong cho truoc
function findPairs(arr,sum){
    let seen=new Set();
    let pairs=[];
    for(let num of arr){
       let complement = sum-num;
       if(seen.has(complement)){ pairs.push([complement,num]);
       }
       seen.add(num);
    }
    return pairs;
}
let arr2=[8,1,2,5,6];
let sum1 = 6;
console.log(findPairs(arr2,sum1));
// tinh tong cac phan tu trong mang long nhau
function sumArrLn(arr){
    let sum=0;
    for(let item of arr){
        if(Array.isArray(item)){
            sum+=sumArrLn(item);
        } else{
            sum+=item;
        }
    }
    return sum;
}
let arrLn = [1,2,[5,6,7],6,[6,3,[1,2]],7];
console.log(sumArrLn(arrLn));

