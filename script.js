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


    setInterval(function()
    {
        $('iframe').height("450px");

    }, 1000);

    //allow tapping to take place of hovering on mobile devices for the process section
    $('.process-column').click(function()
    {
        $('.process-column').trigger('mouseover');
    });


});
