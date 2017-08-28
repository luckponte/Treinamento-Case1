

function main() {
    $(".coisas").hide(); 
    $(".math").hide();
    $(".Comp1").hide();
    $(".correr").hide();
    $(".xota").hide();

 	$(document).on('click',"#btn1" , function() {
 		$("#btn1").button('toggle');
    	$(".coisas").show('slow');
	});
	$(document).on('click',"#btn2" , function() {
    	$(".math").hide();
    	$(".Comp1").hide();
    	$(".xota").hide();
    	$(".correr").show('slow');

	});
	$(document).on('click',"#btn3" , function() {	
    	$(".math").hide();
    	$(".correr").hide();
    	$(".xota").hide();
		$(".Comp1").show('slow');
		
	});
	$(document).on('click',"#btn4" , function() {
    	$(".Comp1").hide();
    	$(".correr").hide();
    	$(".xota").hide();
    	$(".math").show('slow');

	});
	$(document).on('click',"#btn5" , function() {
    	$(".Comp1").hide();
    	$(".correr").hide();
    	$(".math").hide();
    	$(".xota").show('slow');
	});
	$(document).on('click',"#btn6" , function() {
    	$(".math").show('slow');
	});
}
$(document).ready(main);