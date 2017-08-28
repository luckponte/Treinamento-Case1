



function main() {
	$('.tinyforest').hide();
	$('.coolautumn').hide();
	$('.drivinghome').hide();

    $(document).on('click',"#Downloadbotao" , function() {
   $(".tinyforest").slideToggle(400);
   $('.coolautumn').slideToggle(400);
	$('.drivinghome').slideToggle(400);
});
}

$(document).ready(main);