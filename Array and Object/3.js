let employees=[{id:101,name:"Rahul",sal:45000},
               {id:102,name:"Sonia",sal:55000},
               {id:103,name:"Priyanka",sal:65000}
			   ]

console.log(employees)  //normal type

//only employees name

console.log(employees[0].name)
console.log(employees[0].id)


//using FOR OF
for(emp   of employees){
	console.log(emp)
	//console.log(emp.name)
}



