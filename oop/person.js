// Prototypal Inheritance

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}
class Student extends Person{
    constructor(firstName, lastName, age, grades,likes = [])
    {
        super(firstName, lastName, age, likes = [])
        this.grades=grades
    }
    getBio(){
        if(this.grades>70)
        {
            return `${this.firstName} is passing`
        }
        else
        {
            return `${this.firstName} is failing`
        }
    }
    updateGrade(amount){
        this.grades=this.grades+amount
    }
}

const me = new Student('Andrew', 'Mead', 27, 40,['Teaching', 'Biking'])
me.setName('Alexis Turner')
console.log(me.getBio())
me.updateGrade(45)
console.log(me.getBio())

const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2.getBio())