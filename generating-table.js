//getting number from user
function getNum (){
let numberFromUser = document.getElementById("getNumber").value;
if (numberFromUser < 1 || numberFromUser > 10){
  alert("enter number from 1 to 9");
}else {return numberFromUser};
}


//generating table

function generateTable (){



let body = document.getElementById("table");
//removes anything from table when pressing generate
let myObj = document.getElementById("table");
myObj.innerHTML = ""; 

//making id
let uniqueId = 0;
//creating cells
for(let i = 0; i<getNum(); i++){
  let tr = document.createElement("tr");


  body.appendChild(tr);

  for(let a = 0; a<getNum();a++){
    let td = document.createElement("td");
    td.id = uniqueId;
    uniqueId +=1; 
    body.appendChild(td);
  }
} 
}


