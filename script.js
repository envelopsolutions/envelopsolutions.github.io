function goToByScroll(id)
{
    id = id.replace("link", "");

	if(id != "teamScroll")
	{
	    $('html,body').stop().animate({
	        scrollTop: $("."+id).offset().top-130},
	        'slow');
	}
	else
	{
		$('html,body').stop().animate({
			scrollTop: $("."+id).offset().top-80},
			'slow');
	}
}

$(document).ready(function()
{
	$('#about').click(function()
    {
        goToByScroll("aboutScroll");
		console.log("lksjdf");
    });
    $('#team').click(function()
    {
        goToByScroll("teamScroll");
    });
    $('#process').click(function()
    {
        goToByScroll("processScroll");
    });
	$('#contact').click(function()
    {
        goToByScroll("contactScroll");
    });


});
