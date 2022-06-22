function mydemo(){
    let a=document.getElementById("number").value;
    let result;
    if (a%2==0){
       result= a +" là số chẵn"
    }
else{
    result= a +" là số lẻ"
   }
   document.getElementById("result").innerHTML=result;}