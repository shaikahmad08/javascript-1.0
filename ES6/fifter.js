let emp=[{"id":"1","last_name":"Diem","gender":"Male"},
         {"id":"31498","last_name":"Sprowell","gender":"Female"},
         {"id":"69","last_name":"Earney","gender":"Female"},
         {"id":"11","last_name":"Fryett","gender":"Agender"},
         {"id":"7162","last_name":"Orringe","gender":"Female"},
{"id":"681","last_name":"Mattingson","gender":"Male"},
{"id":"8","last_name":"Ashtonhurst","gender":"Polygender"},
{"id":"0","last_name":"Garey","gender":"Female"},
{"id":"40725","last_name":"Dunnet","gender":"Male"},
{"id":"8","last_name":"Yeardley","gender":"Male"},
{"id":"59980","last_name":"Headford","gender":"Female"},
{"id":"5","last_name":"Archbell","gender":"Female"},
{"id":"3044","last_name":"Longina","gender":"Male"},
{"id":"42","last_name":"Haylands","gender":"Male"},
{"id":"15404","last_name":"Garvey","gender":"Female"},
{"id":"26","last_name":"Kernar","gender":"Genderfluid"},
{"id":"682","last_name":"Titford","gender":"Female"},
{"id":"00768","last_name":"Aldcorne","gender":"Female"},
{"id":"182","last_name":"Flecknoe","gender":"Female"},
{"id":"90","last_name":"Fursey","gender":"Male"}]

let new_emp=emp.filter((emp)=>{
    return emp.gender == "Male"
})
console.log(new_emp);