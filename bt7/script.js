// JavaScript Document

$(window).scroll(function(){

      if ($(".t1").visible(true)) {
          $("#um").addClass("width-100");
        } else {
          $("#um").removeClass("width-100");
        }

        if ($(".t2").visible(true)) {
            $("#dois").addClass("width-100");
          } else {
            $("#dois").removeClass("width-100");
          }

          if ($(".t3").visible(true)) {
              $("#tres").addClass("width-100");
            } else {
              $("#tres").removeClass("width-100");
            }



  });
