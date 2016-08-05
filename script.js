$(document).ready(function(){


for (var x =0; x<16;x++)
{
        for(var y = 0; y < 16; y++) {
        	 var $cell = $('<div class="cell"></div>');
        	 $cell.appendTo('.container');
        }
}

$(".reset").click(function() {
  $('.cell').css("background-color","white");
});
$(".sizeChange").click(function() {
	var cellCount = prompt("Please enter cellCount", "4");
	if( cellCount > 0)
		{
			var newSize = 12 * cellCount;
			$('.container').height(newSize);
			$('.container').width(newSize);
			$('.cell').remove();
			for (var x =0; x<cellCount;x++)
			{
		        for(var y = 0; y < cellCount; y++) {
		        	 var $cell = $('<div class="cell"></div>');
		        	 $cell.appendTo('.container');
		        }
			}
		}
});
})
$(document).on('mouseenter', '.cell', function(ev){
   $(this).css("background-color","black");
})