setInterval(()=>{
    document.getElementById('clock').innerHTML=new Date().toLocaleTimeString()
},500)