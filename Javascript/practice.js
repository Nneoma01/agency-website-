var greeting="Hello World";
console.log(greeting);

console.log("Test Scores");

var highScore = 11;
var score = 3;
console.log(highScore+score);
score=5;
console.log(highScore+score);

var numberOfFollowers=55;
console.log("Followers:"+numberOfFollowers);

var label="Posts:"+"13";
console.log(label);

var step = 10*7;
console.log("You're on step "+step);

var temperature ="3" + "1";
console.log(temperature);

console.log(true);
var correct = true;
console.log(!correct);

var day= false;
var night = !day;
console.log(night);

console.log(5440===5440);

var enteredPin = 2000;
var expectedPin = 2007;
console.log(enteredPin===expectedPin);

console.log(10!==10);

if(false){
    console.log("Hello");
}

if(true){
    console.log("Hello");
}

var one = 3;
var two = 1;
var number = one>=two;
console.log(number);

var big = 200;
var small = 100;
console.log( big >= small);

var answer = "Picasso";
if (answer === "Picasso"){
    console.log(answer + " "+"is correct");
}

var answer = "Favour";
if (answer !== "Picasso"){
    console.log(answer + " "+"is wrong");
}

var answer = "Favour";
if (answer === "Picasso"){
    console.log(answer + " "+"is correct");
} else{
    console.log(answer + " "+"is wrong");
}

var answer = "Favour";
if (answer === "Picasso"){
    console.log(answer + " "+"is correct");
} else if(answer !== "Picasso"){
    console.log(answer + " "+"is wrong");
}

var name = "Account name:";
name = name + "Nneoma";
name = name +" " +"Okagbue";
console.log(name);

var likes = 5;
likes += 5;
console.log(likes);

var likes = 10;
likes -= 3;
console.log(likes);

var likes = 5;
likes ++;
console.log(likes);


var likes = 10;
likes --;
console.log(likes);

//WHILE LOOP
var number= 1;
while(number<5){
    console.log(number + " " +"camera");
    number++
}

//FOR LOOP
for(i=1; i<5; i++){
    console.log(i +" Round");
}

console.log("1 Dog");
for(i=2; i<5; i++){
    console.log(i + " Dogs");
}

for(i=5; i>1; i--){
    console.log(i + " Cats");
}

//ARRAY
var friends = ["Nneoma", "Favour", "Chisom", "obianuju"];
console.log(friends);
console.log(friends[2]);
friends[1]= "Chinonye";
console.log(friends);
friends.push("Chidinma", "Chinenye");
console.log(friends); 
friends.pop();
console.log(friends);
var names=friends.pop();
console.log(names);
console.log(friends);
console.log(friends.length);
console.log(friends.sort());
console.log(friends.reverse());


if (friends.length>0){
    console.log("More friends");
}

for(var i=0; i<friends.length; i++){
    console.log(friends[i]);
}

//logical operators (AND)
var myAge =25;
if (myAge >=18 && myAge <= 30){
    console.log("You can come");
}else{
    console.log("You ain't coming");
}

var myAge =15;
if (myAge >=18 && myAge <= 30){
    console.log("You can come");
}else{
    console.log("You ain't coming");
}

//OR
var myAge =15;
if (myAge >=18 || myAge <= 30){
    console.log("You can come");
}else{
    console.log("You ain't coming");
}

//FUNCTIONS
function getAverage(a,b){
    var average = (a+b)/2;  //local var
    console.log(average);
}
getAverage(10,8,7);

function getAverage(a,b){
    var average = (a+b)/2;
    console.log(average);
    return average;
}
var myResult=getAverage(10,8,7);    //global var
console.log("The average is " + myResult);

function logResult(){
    console.log("The average becomes " + myResult);
}
logResult();


function userAge(number){
    var age= "user age: " + number;
    return age;
}
    console.log(userAge(10));

function displayNames(names){
    console.log("My names are " + names)
}  
var studentName= "Nneoma Okagbue"; 
displayNames(studentName); 
    

//NaN(issues with this)
var a= "7";
var b= 5;
if (isNaN(a)){
    console.log("that ain't even a number");
}else{
    console.log("James is "+ (a+b) + "years old");
}

var a= "7";
var b= 5;
if (!isNaN(a)){
    console.log("James is "+ (a+b) + "years old");
}else{
   console.log("that ain't even a number");
}

//STRINGS
var myString= "I am a fun string";
if (myString.indexOf("ninja") === -1){
    console.log("the word ninja is not in the string");
}

//SLICE AND SPLIT ARE OBJECT METHODS (VAR OR OBJECT.METHOD)
//slice string(at position)
var name = "My name is Nneoma Okagbue";
var name2 = name.slice(11,17);
console.log(name2);

var name = "My name is Nneoma Okagbue";
var name2 = name.slice(11);
console.log(name2);

//split string(array format)
var fruits= "apple, orange, pineapple, mango, melon, grape"
var fruits2= fruits.split(",");
console.log(fruits2); 

//CREATING A NEW OBJECT IN A FUNCTION(grouping similar functions) 
var myCar = {
   maxSpeed: 50,
   driver: "Shaun",
   drive: function(){
    console.log("now driving");
}
};
console.log(myCar.driver);
myCar.drive();


//CREATING A NEW OBJECT IN AN ARRAY(grouping similar variables)
var person = {
    myname: "Nneoma Okagbue",
    nickname: "Favy",
    Occupation: "web developer",
    ages: 23
};

person.nickname="Nneomzy";
console.log(person.nickname);

//CONSTRUCTIVE OBJECTS
class Car {
    constructor(minSpeed, driverName) {
        this.minSpeed = minSpeed;
        this.driverName = driverName;
        this.category = "vehicle"
        this.logDriver = function (speed, time) {
            console.log(speed * time);
        };
    }
    driving (opt) {
        return "the driver's name is " + opt || this.driverName;
    };


    // set category(newCategory){
    //     this.category = newCategory
    // }
} 


class Volvo extends Car {
    constructor(minSpeed, driverName) {
        super()
    }
    
}

var myVolvo = new Volvo(20, "Favour")
var myVolvoMsg = myVolvo.driving()

var myCar = new Car(20, "Shaun");
var myCar2 = new Car(30, "Tom");
var myCar3 = new Car(50, "Mike");

var msgg = myCar.driving("Biola");
console.log({msgg})
myCar.logDriver(20, 20);


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height
    }
}

const newRectangle = new Rectangle(20, 10)

console.log("new Rec Area: ", newRectangle.getArea())