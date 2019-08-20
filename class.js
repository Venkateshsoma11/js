class Employee{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    getFirstName(){
        return this.firstname;
    }
    getLastName()
    {
        return this.lastname;
    }
    setFirstName(fname){
        this.firstname=fname;
    }
    setLatName(lname){
        this.lastname=lname;
    }
    printEmpDesc(){
        console.log(`firstname: ${this.firstname} lastname: ${this.lastname}`)
    }
}

let vinay=new Employee('vinay','krishna')
//console.log(vinay.getFirstName())

vinay.printEmpDesc()