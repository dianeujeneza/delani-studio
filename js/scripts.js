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
        $("#imgone").css('opacity','0.4');
        $("#parone").show();
        $("#parone").addClass("hide");
    });

    $("#imgone").mouseleave(function(){
        $("#imgone").css('opacity','1');
        $("#parone").hide();
    });

    $("#imgtwo").mouseover(function(){
        $("#imgtwo").css('opacity','0.4');
        $("#partwo").show();
        $("#partwo").addClass("hide");
    });

    $("#imgtwo").mouseleave(function(){
        $("#imgtwo").css('opacity','1');
        $("#partwo").hide();
    });

    $("#imgthree").mouseover(function(){
        $("#imgthree").css('opacity','0.4');
        $("#parthree").show();
        $("#parthree").addClass("hide");
    });

    $("#imgthree").mouseleave(function(){
        $("#imgthree").css('opacity','1');
        $("#parthree").hide();
    });

    $("#imgfour").mouseover(function(){
        $("#imgfour").css('opacity','0.4');
        $("#parfour").show();
        $("#parfour").addClass("hide");
    });

    $("#imgfour").mouseleave(function(){
        $("#imgfour").css('opacity','1');
        $("#parfour").hide();
    });

    $("#imgfive").mouseover(function(){
        $("#imgfive").css('opacity','0.4');
        $("#parfive").show();
        $("#parfive").addClass("hide");
    });

    $("#imgfive").mouseleave(function(){
        $("#imgfive").css('opacity','1');
        $("#parfive").hide();
    });

    $("#imgsix").mouseover(function(){
        $("#imgsix").css('opacity','0.4');
        $("#parsix").show();
        $("#parsix").addClass("hide");
    });

    $("#imgsix").mouseleave(function(){
        $("#imgsix").css('opacity','1');
        $("#parsix").hide();
    });

    $("#imgsev").mouseover(function(){
        $("#imgsev").css('opacity','0.4');
        $("#parsev").show();
        $("#parsev").addClass("hide");
    });

    $("#imgsev").mouseleave(function(){
        $("#imgsev").css('opacity','1');
        $("#parsev").hide();
    });

    $("#imgeight").mouseover(function(){
        $("#imgeight").css('opacity','0.4');
        $("#pareight").show();
        $("#pareight").addClass("hide");
    });

    $("#imgeight").mouseleave(function(){
        $("#imgeight").css('opacity','1');
        $("#pareight").hide();
    });

  });

 



