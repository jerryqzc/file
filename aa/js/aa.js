			$(function(){
 			$('.list-group li').mouseover(function(){
 			$(this).find('.item').stop().animate({'top':'-20px'});
 			$(this).find('.item').addClass('hotshadow');
 													});
 			$('.list-group li').mouseout(function(){
 			$(this).find('.item').stop().animate({'top':'0'});
 			$(this).find('.item').removeClass('hotshadow');
 												});
		</script>