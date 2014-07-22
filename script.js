function manageNameSize()
{
    $('.slidingword p').css('font-size', ($(window).width() * 0.05) + 'px');
}

function goToByScroll(id)
{
    id = id.replace("link", "");

    $('html,body').stop().animate({
        scrollTop: $("."+id).offset().top-130},
        'slow');
}

$(document).ready(function()
{

    manageNameSize();
    // if the user resizes the window, dynamically change the height and width
    $(window).resize(function()
    {
        manageNameSize();
    });

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

    $(".slidingword1").stop().animate({left: "115%"}, 1000);
    $(".slidingword2").stop().animate({left: "115%"}, 1600);
    $(".slidingword3").stop().animate({left: "115%"}, 2200);

});
