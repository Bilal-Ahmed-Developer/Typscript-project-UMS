"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.courses = [];
        this.rollNumber = rollNumber;
    }
    registerforCourse(...course) {
        this.courses.push(...course);
    }
}
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.courses = [];
        this.i = 0;
        this.salary = salary;
    }
    assigncourse(...course) {
        this.i++;
        if (this.i == 2) {
            console.log(`Sorry you already teaching these${this.courses} courses`);
        }
        else
            [
                this.courses.push(...course)
            ];
    }
}
// Student 1
const stu1 = new Student("bilal Ahmed", 17, 2194);
stu1.registerforCourse("Web3 and Metaverse", "blockchain", "cloud computing");
console.log(stu1.courses);
// Student 2 
const stu2 = new Student("Ali khan", 19, 2164);
stu2.registerforCourse("Web3 and Metaverse");
// Stuudent 3
const stu3 = new Student("Sumama", 13, 6194);
stu3.registerforCourse("Web3 and Metaverse");
// Instructor1
const int1 = new Instructor("Mushtaq", 40, 50000);
int1.assigncourse("Blockchain");
// Instructor2
const int2 = new Instructor("Adil", 40, 50000);
int2.assigncourse("Metaverse", "bcc", "cnn", "app", "web");
console.log(int2.courses);
