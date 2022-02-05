function chooseRandom(){
    document.onmouseover = function (e){
        
        if (e.target.id >=0 ){
            let proto = document.getElementById(e.target.id);
           if (proto !== null){
            proto.style.backgroundColor = color = '#' + Math.random().toString(16).substring(9);
            }
        }
    
    }
}

function chooseDefault(){
document.onmouseover = function (e){
    if (e.target.id >=0 ){
        let proto = document.getElementById(e.target.id);
        if (proto !== null){
        proto.style.backgroundColor = "black";
        }
    }
}
}



