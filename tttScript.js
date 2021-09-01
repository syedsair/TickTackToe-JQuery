$(document).ready(function() {
    $("div").click(function(event) {
        var col = event.target.id;
		var player = 0;
		if (col == "11" || col == "22" || col == "33" || col == "12" || col == "13" || col == "21" || col == "23" || col == "32" || col == "31")
		{
			if ($('#'+col).css("background-color")=='rgb(128, 128, 128)')
			{
				if ($("#playerMessage").text() == "Player 1's Turn")
				{
					color = "rgb(255, 0, 0)";
					player = 1;
					$("#playerMessage").replaceWith("<h2 id = 'playerMessage'>Player 2's Turn</h2>")
				}
				else{
					color = "rgb(0, 0, 255)";
					player = 2;
					$("#playerMessage").replaceWith("<h2 id = 'playerMessage'>Player 1's Turn</h2>")
				}
				$('#'+col).css("background-color", color);
				var win = $.fn.checkWin(col);
				if (win==true)
				{
					alert("Player " + player + " Won!");
					location.reload();
				}
			}
		}
    });
	$.fn.checkWin = function(current) {
		var our_color = $('#'+current).css("background-color")
		var new_color = ""
		var win = 0;
		// checking rows
		for (var i = 1; i<=3; i++)
		{
			for (var j = 1; j<=3; j++)
			{
				new_color = $('#'+i.toString()+j.toString()).css("background-color");
				if (new_color == our_color)
				{
					win++;
				}
				else
					win = 0;
			}
			if(win==3)
			{
				return true;
			}
			else
				win = 0;
		}
		// checking columns
		win = 0;
		for (var i = 1; i<=3; i++)
		{
			for (var j = 1; j<=3; j++)
			{
				new_color = $('#'+j.toString()+i.toString()).css("background-color");
				if (new_color == our_color)
				{
					win++;
				}
				else
					win = 0;
			}
			if(win==3)
			{
				return true;
			}
			else
				win = 0;
		}
		//checking Cross's
		if($('#11').css("background-color") == $('#22').css("background-color") && $('#22').css("background-color") == $('#33').css("background-color") && $('#33').css("background-color") == our_color){
			return true;
		}
		else if($('#13').css("background-color") == $('#22').css("background-color") && $('#22').css("background-color") == $('#31').css("background-color")&& $('#31').css("background-color") == our_color){
			return true;
		}
		return false;
	}
});