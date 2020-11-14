//javascript change box 1

var redBox = document.querySelector(".redBox");

var changBtn1 = document.querySelector(".changeBtn1");

var colorCheckRed = true;

changBtn1.addEventListener("click",function(){
    console.log("click btn1 working");

    if(colorCheckRed){
        colorCheckRed = false;
        redBox.setAttribute("class","purpleBox");
    }else{
        colorCheckRed = true;
        redBox.setAttribute("class", "redBox")
    }

    
})

//change box 2 with jQuery
var checkBox2Color = true;

$(".changeBtn2").click(function(){
    console.log("box 2 changebtn working")

    // if(checkBox2Color){
    //     checkBox2Color = false;
    //     $(".blueBox").addClass("orangeBox");
    // }else{
    //     checkBox2Color = true;
    //     $(".blueBox").removeClass("orangeBox");
    // }

    $(".blueBox").toggleClass( "redBox", "blueBox");
    
})

//change all
$(".changeBtnAll").click(function(){
    $(".redBox").addClass("blueBox");
    $(".greenBox").addClass("blueBox");
})