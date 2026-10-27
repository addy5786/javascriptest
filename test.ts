// Q2.
// class Student{
//     name: string
//     studentid :number
//     grade:string 
//     address :string

//     constructor(name:string ,studentid:number ,grade :string ,address:string ){
//         this.name = name
//         this.studentid = studentid
//         this.grade = grade
//         this.address = address

//     }
//     displayInfo(){
//         console.log(this.name);
//         console.log(this.studentid);
//         console.log(this.grade);
//         console.log(this.address); 
//     }
// }

// const ob = new Student("tom",40,"A","Mumbai")
// ob.displayInfo()


// Q3.

// class School{
//     static totalStudent
// }

//Q4.

// abstract class Person{

//     name:string
//     id:number
//     role:string

//     constructor(name:string,id:number,role:string){
//         this.name=name
//         this.id=id
//         this.role=role
//     }
//     abstract  getDetalis():void

//     abstract getRole():void

// }
// class Student extends Person{
//     getDetalis(): void {
//         console.log("Student name:"+ this.name);
//         console.log("Student id:"+ this.id);  
//     }
//     getRole(): void {
//         console.log("Student role:"+this.role);
        
//     }

// }
// class Teacher extends Person{

//     getDetalis(): void {
//         console.log("Teacher name:"+ this.name);
//         console.log("Teacher id:"+ this.id);  
//     }
//     getRole(): void {
//         console.log("Teacher Role:"+ this.role);
        
//     }

// }
// const s1 = new Student("Jack",1001,"Java developer")
// const s2 = new Teacher("Janiliya",102,"Math Teacher")

// s1.getDetalis()
// s1.getRole()

// s2.getDetalis()
// s2.getRole()

//Q5.

