function handleWindowResize()
{
	
}

$(document).ready(function()
{
	handleWindowResize();

	$(window).resize(function()
    {
        handleWindowResize();
    });


});
