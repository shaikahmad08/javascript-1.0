function change_color(){
   // console.log("gm");
    document.getElementById('click_change').style.backgroundColor="green"
}

function color_change(){
    document.getElementById('change').style.backgroundColor='red'
}

function change_click(){
    document.getElementById('background').style.backgroundColor='yellow'
    
}

function click_change(){
    document.getElementById('background_dbl').style.backgroundColor='blue'
}

function text_focus(){
    document.getElementById('focus_text').style.backgroundColor='blue'
}

function focuss_text(){
    document.getElementById('focus').style.backgroundColor="yellow"
}

function upper(){
   let name=document.getElementById('lower').value
   document.getElementById('lower').value=name.toUpperCase()
}