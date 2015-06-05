console.log('herp')

$(document).ready( ()->
	$("#nav-main").sticky({
		topSpacing: 0
		})
	)

$('.list-hover-show li').hover( 
	()->
		$(this).children('.description').css('opacity', 0).slideDown('fast').animate({
			opacity: 1
			},
			{
				queue: false
				duration: 'fast'
			})
	()->
		$(this).children('.description').css('opacity', 1).slideUp('fast').animate({
			opacity: 0
			},
			{
				queue: false
				duration: 'fast'
			})
		)