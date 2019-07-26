$(document).ready(function() {
    $(".btn").click(function(event){
        var name=$(".form-control").val();
        var email=$(".form-control").val();
        var message=$("#comment").val();
        if((name==="")||(email==="")||(message==="")){
            alert("Fill in required informations");
        }else{
            alert(name+ "We havereceived your message");
        }
        event.preventDefault();
    });
    $("#one").click(function() {
      $("#showone").toggle();
      $("#hiddenone").toggle();
    });

    $("#two").click(function() {
        $("#showtwo").toggle();
        $("#hiddentwo").toggle();
      });

      $("#three").click(function() {
        $("#showthree").toggle();
        $("#hiddenthree").toggle();
      });

    $("#imgone").mouseover(function(){
        $("#parone").show();
        $("#parone").addClass("hide");
    });

    $("#imgone").mouseleave(function(){
        $("#parone").hide();
    });

    $("#imgtwo").mouseover(function(){
        $("#partwo").show();
        $("#partwo").addClass("hide");
    });

    $("#imgtwo").mouseleave(function(){
        $("#partwo").hide();
    });

    $("#imgthree").mouseover(function(){
        $("#parthree").show();
        $("#parthree").addClass("hide");
    });

    $("#imgthree").mouseleave(function(){
        $("#parthree").hide();
    });

    $("#imgfour").mouseover(function(){
        $("#parfour").show();
        $("#parfour").addClass("hide");
    });

    $("#imgfour").mouseleave(function(){
        $("#parfour").hide();
    });

    $("#imgfive").mouseover(function(){
        $("#parfive").show();
        $("#parfive").addClass("hide");
    });

    $("#imgfive").mouseleave(function(){
        $("#parfive").hide();
    });

    $("#imgsix").mouseover(function(){
        $("#parsix").show();
        $("#parsix").addClass("hide");
    });

    $("#imgsix").mouseleave(function(){
        $("#parsix").hide();
    });

    $("#imgsev").mouseover(function(){
        $("#parsev").show();
        $("#parsev").addClass("hide");
    });

    $("#imgsev").mouseleave(function(){
        $("#parsev").hide();
    });

    var$("#imgeight").mouseover(function(){
        $("#pareight").show();
        $("#pareight").addClass("hide");
    });

    $("#imgeight").mouseleave(function(){
        $("#pareight").hide();
    });

  });

 



