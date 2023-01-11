let displayText =0  // display text value 


function input(vale){
  displayText = document.getElementById("textview").innerHTML;
   
   switch (vale) {
       case "0": 
       if(displayText ==0){
        displayText =0;
       }else{
        displayText += vale;
       }
       break;

       case ".":
         if( displayText.includes(".")  ){
            displayText = displayText;
         }else{
            if(displayText ==0){
                displayText=vale;
            }else{
            displayText +=vale
            }
         }
        break;

       default:
        if(displayText ==0){
            displayText=vale;
        }else{
        displayText +=vale
        }
   }
           
  document.getElementById("textview").innerHTML=displayText;
   
}

function eqal(){
    let inputValue = document.getElementById("textview").innerHTML;
    let sum =eval(inputValue);
    document.getElementById("textview").innerHTML=sum;
}

function clearDisplay(){
  document.getElementById("textview").innerHTML="0";
}

function backSpace(){
  
     displayText = document.getElementById("textview").innerHTML;
  console.log("presing back space"+displayText.length)
  if (displayText.length ==1){
    document.getElementById("textview").innerHTML = 0;
      console.log(displayText)
  }else{
    document.getElementById("textview").innerHTML = displayText.slice(0,-1);
    console.log(displayText)
  }
}