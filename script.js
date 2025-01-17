// jQuery for eye/mouse tracking
jQuery(document).ready(function(){
   $(document).mousemove(function(e){

        var xPos = e.pageX;
        var yPos = e.pageY;
        var mouseXPercent = Math.round(xPos / $(this).width() * 100);
        var mouseYPercent = Math.round(yPos / $(this).height() * 100);

        $('.iris').css('top',mouseYPercent - 50);
        $('.iris').css('left',mouseXPercent - 50);

   }); 
})

// jQuery for noise texture 
$('body').noisy({
    intensity: 1,
    size: 200,
    opacity: 0.04,
    fallback: '',
    monochrome: true
});

$('.blade div').noisy({
    intensity: 1,
    size: 200,
    opacity: 0.03,
    fallback: '',
    monochrome: true
});