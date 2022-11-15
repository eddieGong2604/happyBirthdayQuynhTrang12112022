$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
    $('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
    $(this).fadeOut('slow').delay(1).promise().done(function(){
      $('#bannar_coming').fadeIn('slow');
    });
	});

	$('#bannar_coming').click(function(){
    $('#bulb_yellow').addClass('bulb-glow-yellow-after');
    $('#bulb_red').addClass('bulb-glow-red-after');
    $('#bulb_blue').addClass('bulb-glow-blue-after');
    $('#bulb_green').addClass('bulb-glow-green-after');
    $('#bulb_pink').addClass('bulb-glow-pink-after');
    $('#bulb_orange').addClass('bulb-glow-orange-after');
    $('body').css('backgroud-color','#FFF');
    $('body').addClass('peach-after');

		$('.bannar').addClass('bannar-come');
    $(this).fadeOut('slow').delay(1).promise().done(function(){
      $('#story').fadeIn('slow');
    });
	});


	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});

		var i;

		function msgLoop (i) {
			$("p.messagePara:nth-child("+i+")").fadeOut('slow').delay(1).promise().done(function(){
			i=i+1;
			$("p.messagePara:nth-child("+i+")").fadeIn('slow').delay(2000);
			if(i==7){
				$("p:nth-child(7)").fadeOut('slow').delay(1).promise().done(function () {
          $('#videoAndImageStart').fadeIn('slow');
				});
			}
			else{
				msgLoop(i);
			}

		});
			// body...
		}
		msgLoop(0);
	});


  $('#videoAndImageStart').click(function(){
    $(this).fadeOut('slow');
    var k;
    function videoAndImageLoop (k) {
      $("#videoAndImage div.row:nth-child("+k+")").fadeOut('slow').delay(1).promise().done(function(){
        k=k+1;
        if(k == 1){
          $('#videoGuitar').get(0).play();
          $("#videoAndImage div.row:nth-child("+k+")").fadeIn('slow').delay(23000);
        }
        if(k == 2){
          $('#song').get(0).play();
        }
        if(k == 11 || k == 10){
          $("#videoAndImage div.row:nth-child("+k+")").fadeIn('slow').delay(5000);
        }
        else if(k == 9){
          $("#videoAndImage div.row:nth-child("+k+")").fadeIn('slow').delay(17000);
        }
        else{
          $("#videoAndImage div.row:nth-child("+k+")").fadeIn('slow').delay(15000);
          if(k == 13){
            $('#bubbling-heart').show();
          }
        }
        if(k==13){
          $("#videoAndImage div.row:nth-child(13)").fadeOut('slow').delay(1).promise().done(function () {
            $('#refreshButton').fadeIn('slow');
          });
        }
        else{
          videoAndImageLoop(k);
        }

      });
      // body...
    }
    videoAndImageLoop(0);
  });
});




//alert('hello');
