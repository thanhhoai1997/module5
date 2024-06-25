let person = [
    {
        name : 'hoai',
        age: 17
    },
    {
        name : 'nam',
        age: 18
    },
    {
        name : 'tuan',
        age: 19
    },
    {
        name : 'thanh',
        age: 20
    }
]
let[...arr] = person

arr.forEach(function(item){
    console.log('name : ' + item.name +','+ 'age : ' + item.age);
    
})
