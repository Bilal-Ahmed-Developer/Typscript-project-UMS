class Person {
      name: string;
      age: number;
      constructor(name: string, age: number) {
            this.name = name;
            this.age = age
      }
      getName() {
            return this.name
      }
}

class Student extends Person {
      rollNumber: number;
      courses: Courses[] = []
      constructor(name: string, age: number, rollNumber: number,) {
            super(name, age)
            this.rollNumber = rollNumber
      }
      registerforCourse(course: Courses[]) {
                  this.courses.push()
}
}
class Instructor extends Person{
      salary:number;
      constructor(name:string,age:number,salary:number){
            super(name,age)
            this.salary = salary
      }
      courses:string[]=[];
      assigncourse(course:string[]){
  
                  this.courses.push(course)
      }
}
class Courses {
      id :string;
      name:string;
      students:Student[]=[];
      instructor : Instructor[]=[]
      constructor(name:string,id:string){
            this.name = name;
            this.id = id
      }
      addStudent(students : Student){
            this.students.push(students) 
            students.registerforCourse(this)
      }
      setInstructor(instructor:Instructor){
            this.instructor.push(instructor)

      }
}
// Student 1
const stu1 = new Student("bilal Ahmed", 17, 2194)
stu1.registerforCourse("Weab3 and Metaverse","blockchain","cloud computing")
console.log(stu1.courses)
// Student 2 
const stu2 = new Student("Ali khan", 19, 2164)
stu2.registerforCourse("Web3 and Metaverse")
// Stuudent 3
const stu3 = new Student("Sumama", 13, 6194)
stu3.registerforCourse("Web3 and Metaverse")

// Instructor1
const int1 = new Instructor("Mushtaq",40,50000)
int1.assigncourse("Blockchain")
// Instructor2
const int2 = new Instructor("Adil",40,50000)
int2.assigncourse("Metaverse","bcc","cnn","app","web")
console.log(int2.courses)