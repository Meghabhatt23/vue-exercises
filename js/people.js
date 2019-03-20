var people = {
"1": { id: "001", name: "Mosa", age: 13 , city: "Edmonton"},
"2": { id: "456", name: "Rachel", age: 23 , city: "Miami" },
"3": { id: "789", name: "Megha", age: 25 , city: "Toronto"},
"4": { id: "101", name: "Bushra", age: 17 , city: "Vancouver"},
"5": { id: "102", name: "Brittany", age: 29 , city: "Calgary"}
}
new Vue({
    el: '#title',
    data:{
        title: 'PEOPLE',
    }
})
new Vue({
    el: '#people',
    data:{
        people: {

        "1": { id: "001", name: "Mosa", age: 13 , city: "Edmonton"},
        "2": { id: "456", name: "Rachel", age: 23 , city: "Miami" },
        "3": { id: "789", name: "Megha", age: 25 , city: "Toronto"},
        "4": { id: "101", name: "Bushra", age: 17 , city: "Vancouver"},
        "5": { id: "102", name: "Brittany", age: 29 , city: "Calgary"}
    }
}
    })
