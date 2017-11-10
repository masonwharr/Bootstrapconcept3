$(document).ready(function(){
var laptop = $('#laptopPic')
var laptop2 = $('#buyItems')

var windowSize = $(window).width();
if (windowSize <= 980)
{
	$('#topLaptop').remove();
	$('#buyItems2').remove();
	laptop.mouseenter(function(){
laptop2.html("<p id='buyText' style='color:white; margin-top:-5px;'>" +" Praesent nec scelerisque diam. Quisque ut laoreet augue, in ultrices neque. Vestibulum dignissim sapien sit amet pellentesque rhoncus. Nulla facilisi. Vivamus mi tellus, aliquam vitae massa quis, ultrices consequat magna. Praesent vel vestibulum dolor, sed interdum ante. Praesent viverra erat ornare lacus vestibulum, ut convallis odio accumsan." + "</p>");
	});

}

});
