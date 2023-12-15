let employees=[{id:101,name:"Rahul",sal:45000},
               {id:102,name:"Sonia",sal:55000},
               {id:103,name:"Priyanka",sal:65000},
               {id:104,name:"Priya",sal:65000}
			   ]
function js_and_html(){
    let rows=""
    for(emp of employees){

       // if(emp.id==='id' || emp.name==='name' || emp==='sal')

       {
            
            rows=rows+` <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.sal}</td>
            </tr> `
        }
    }
    document.getElementById('js_dom').innerHTML=rows
}
//js_and_html();