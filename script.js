function goToByScroll(id)
{
    id = id.replace("link", "");

    $('html,body').stop().animate({
        scrollTop: $("."+id).offset().top-130},
        'slow');
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
