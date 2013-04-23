//get all the social icons and register this function
$(".socialIcon").click(function() {

	//close the other ones if they are open except the clicked one
	if ($('.clicked').length) $('.clicked').not(this).toggleClass('clicked');

	//toggle the clicked class
	$(this).toggleClass('clicked');
})

// close when outside area is clicked
$(document).mouseup(function(e) {
	var container = $(".socialIcon");

	if (container.has(e.target).length === 0) {
		$('.clicked').toggleClass('clicked');
	}
});