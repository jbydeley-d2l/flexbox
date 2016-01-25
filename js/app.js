$(() => {
	$('.addFeedback').on('click', function() {
		$(this).closest('.flex_container').find('.feedbackRow').css('display', 'flex');
		$(this).hide();
	});

	$('.close').on('click', function() {
		$(this).closest('.flex_container').hide();
		$(this).parents('.flex_container').find('.addFeedback').show();
	});

	$('.item.level').on('click', function() {
		$(this).parent().children().removeClass('selected');
		$(this).addClass('selected');
	});
});
