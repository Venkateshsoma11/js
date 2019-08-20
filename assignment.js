var employees=[
    {
         id: 1,
         dep:'HR',
         salary:25000,
         name:'Krishna'
    },
    {
        id: 2,
        dep:'HR',
        salary:25000,
        name:'Rama'

    },
    {
        id: 3,
        dep:'HR',
        salary:25000,
        name:'Hari'

    },
    {
        id: 4,
        dep:'HR',
        salary:25000,
        name:'Ravi'

    },
    {
        id: 5,
        dep:'HR',
        salary:25000,
        name:'Raghu'

    },
    {
        id: 6,
        dep:'dev',
        salary:50000,
        name:'Ramesh'

    },
    {
        id: 7,
        dep:'dev',
        salary:50000,
        name:'Krishna'

    },



]
var result = employees.filter(function(emp){
     if(emp.dep=='HR')
     salary+=emp.salary;
})


console.log(result)