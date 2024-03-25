// #1
class BankAccount{
    constructor(accountHolder, initialBalance){
        this.name = accountHolder;
        this.balance = initialBalance;
    }
    deposit(amount){
        if(amount>0){
            this.balance = this.balance + amount;
            console.log(`Your new balance is ${this.balance}`);   
        }
        else{
            console.log("Invalid amount");
        }
    }
    withdraw(amount){
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrawn Rs.${amount}. New balance: Rs.${this.balance}`);
            } else {
                console.log('Insufficient funds for withdrawal.');
            }
        } else {
            console.log('Invalid withdrawal amount. Please enter a positive amount.');
        }
    }
    checkBalance(){
        console.log(`Account balance for ${this.accountHolder}: Rs.${this.balance}`);
    }
}
let Tehzeeb = new BankAccount("Tehzeeb", 1000);
// Tehzeeb.deposit(500);
// Tehzeeb.checkBalance();
Tehzeeb.withdraw(500);

// #2
class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.courses = [];
    }

    enroll(course) {
        this.courses.push(course);
        console.log(`${this.name} has enrolled in ${course}.`);
    }

    showCourses() {
        console.log(`${this.name}'s enrolled courses: ${this.courses.join(', ')}`);
    }
}

class Admission {
    constructor() {
        this.students = [];
    }

    enrollStudent(student) {
        this.students.push(student);
        console.log(`${student.name} has been enrolled.`);
    }

    assignCourse(student, course) {
        if (student instanceof Student && student.email && course) {
            student.enroll(course);
        } else {
            console.log('Invalid student or course information.');
        }
    }

    showEnrolledStudents() {
        console.log('Enrolled students:');
        this.students.forEach(student => {
            console.log(`- ${student.name} (${student.email})`);
        });
    }
}


const admissionOffice = new Admission();

const student1 = new Student('Mithun', 'mithun@pw.live');
const student2 = new Student('Farman', 'farman@pw.live');

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);
admissionOffice.assignCourse(student1, 'Full Stack Web Development'); 
admissionOffice.assignCourse(student2, 'Data Science Masters');

student1.showCourses(); 
student2.showCourses(); 

admissionOffice.showEnrolledStudents();

// #3
class Temperature{
    constructor(cel, fahr){
        this.cel = 0;
        this.fahr = 32;
    }
    get getCelsius(){
        return this.cel;
    }
    set setCelsius(value){
        if(typeof value==='number'){
            this.cel = value;
            this.fahr = (value * 9 / 5) + 32;
        }
        else{
            console.log('Invalid input. Please provide a number for Celsius temperature.');
        }
    }
    get getFahrenheit(){
        return this.fahr;
    }
    set setFahrenheit(value){
        if(typeof value==='number'){
            this.fahr = value;
            this.celsius = (value - 32) * 5 / 9;
        }
        else{
            console.log('Invalid input. Please provide a number for Celsius temperature.');
        }
    }
}
let temperature = new Temperature();

console.log(`Initial Celsius: ${temperature.getCelsius}°C`);
console.log(`Initial Fahrenheit: ${temperature.getFahrenheit}°F`);

temperature.setCelsius = 45;
console.log(`Celsius: ${temperature.getCelsius}°C`); 
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`);

// #4
class Shape {
    constructor() {
        this.type = "Shape";
    }

    calculateArea() {
        return "Area calculation not implemented for this shape.";
    }

    calculatePerimeter() {
        return "Perimeter calculation not implemented for this shape.";
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.type = "Circle";
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.type = "Rectangle";
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Triangle extends Shape {
    constructor(base, height, side1, side2, side3) {
        super();
        this.type = "Triangle";
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    calculateArea() {
        return 0.5 * this.base * this.height;
    }

    calculatePerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}


const circle = new Circle(5);
console.log(`Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`);

const rectangle = new Rectangle(4, 6);
console.log(`Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`);

const triangle = new Triangle(8, 6, 5, 7, 10);
console.log(`Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`);

// #5
function Product(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
}


function Inventory() {
    this.products = [];
}


Inventory.prototype.addProduct = function (product) {
    if (product instanceof Product) {
        this.products.push(product);
        console.log(`Added ${product.name} to the inventory.`);
    } else {
        console.log('Invalid product. Please provide a valid Product object.');
    }
};


Inventory.prototype.deleteProduct = function (productName) {
    const index = this.products.findIndex(product => product.name === productName);
    if (index !== -1) {
        this.products.splice(index, 1);
        console.log(`Deleted ${productName} from the inventory.`);
    } else {
        console.log(`${productName} not found in the inventory.`);
    }
};


const inventory = new Inventory();

const product1 = new Product('Laptop', 'Electronics', 899, 10);
const product2 = new Product('Book', 'Books', 20, 50);

inventory.addProduct(product1); // Added Laptop to the inventory.
inventory.addProduct(product2); // Added Book to the inventory.

inventory.deleteProduct('Laptop'); // Deleted Laptop from the inventory.
