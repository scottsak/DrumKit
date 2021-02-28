
for(var i = 0; i<document.querySelectorAll(".drum").length;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", buttonPressed);

}


function buttonPressed(){
  alert("button was pressed");
}
