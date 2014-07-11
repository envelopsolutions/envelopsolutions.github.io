function handleWindowResize()
{
	var w = $(window).width();
	console.log(w);
	
}

$(document).ready(function()
{
	handleWindowResize();

	$(window).resize(function()
    {
        handleWindowResize();
    });


});