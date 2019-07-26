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


// $(".parone").hide();

// $(".imgone").hover(function(){
// $(this).stop().animate({opacity:.2},200);
// $(".parone").fadeIn();
// },function(){
// $(this).stop().animate({opacity:2},500);
// $(".parone").fadeOut();
// });

// $(".paragraph3").hide();
// $(".photo3").hover(function(){
// $(this).stop().animate({opacity:.2},200);
// $(".paragraph3").fadeIn();
// },function(){
// $(this).stop().animate({opacity:2},500);
// $(".paragraph3").fadeOut();
// });

// $(".paragraph2").hide();
// $(".photo2").hover(function(){
// $(this).stop().animate({opacity:.2},200);
// $(".paragraph2").fadeIn();
// },function(){
// $(this).stop().animate({opacity:2},500);
// $(".paragraph2").fadeOut();
// });

// $(".paragraph1").hide();
// $(".photo1").hover(function(){
// $(this).stop().animate({opacity:.2},200);
// $(".paragraph1").fadeIn();
// },function(){
// $(this).stop().animate({opacity:2},500);
// $(".paragraph1").fadeOut();
// });

// $(".paragraph5").hide();
// $(".photo5").hover(function(){
// $(this).stop().animate({opacity:.2},200);
// $(".paragraph5").fadeIn();
// },function(){
// $(this).stop().animate({opacity:2},500);
// $(".paragraph5").fadeOut();
// });

// $(".paragraph6").hide();
// $(".photo6").hover(function(){
// $(this).stop().animate({opacity:.2},200);
// $(".paragraph6").fadeIn();
// },function(){
// $(this).stop().animate({opacity:2},500);
// $(".paragraph6").fadeOut();
// });

// $(".paragraph7").hide();
// $(".photo7").hover(function(){
// $(this).stop().animate({opacity:.2},200);
// $(".paragraph7").fadeIn();
// },function(){
// $(this).stop().animate({opacity:2},500);
// $(".paragraph7").fadeOut();
// });

// $(".paragraph8").hide();

// $(".photo8").hover(function(){
// $(this).stop().animate({opacity:.2},200);
// $(".paragraph8").fadeIn();
// },function(){
// $(this).stop().animate({opacity:1},500);
// $(".paragraph8").fadeOut();
// });

  });

 



