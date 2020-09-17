$(document).ready(function(){
	window.addEventListener("message", function(event){
		var item = event.data;

		if (item.updateTime == true)
		{	
            $(".container").css("display", "block");
			$("#timeText").html(item.text);
        }
		if (item.showSpeed == true)
		{	
            $("#speed").css("display", "block");
			$("#speed").html(item.text);
        }
		if (item.showSpeed == false)
		{	
            $("#speed").css("display", "none");
        }	
		if (item.updateHudTime == true)
		{	
			$("#hudtime").html(item.text);
        }
        if (item.showTime == true)
        {
            $("#timeText").css("display", "block");
        }
		if (item.showTime == false)
        {
            $("#timeText").css("display", "none");
        }
        if (item.hide == true)
        {
            $(".container").css("display", "none");
        }
        if (item.show == true)
        {
            $(".container").css("display", "block");
        }
        if (item.showLobby == true) {
            $(".container").css("display", "block");
            $(".lobby").css("display", "grid");
			$(".timer").css("display", "table");
        }
        if (item.showLobby == false) {
            $(".container").css("display", "none");
            $(".lobby").css("display", "none");
			$(".timer").css("display", "none");
        }
		if (item.showPInfo == true) {
			$("#hudtime").css("display", "block");
            $(".player-info").css("display", "block");
        }
        if (item.showPInfo == false) {
			$("#hudtime").css("display", "none");
            $(".player-info").css("display", "none");
        }
		if (item.showThreeHearts == true) {
	        $("#lives").css("display", "grid");
            $("#live-1-solid").css("display", "grid");
            $("#live-2-solid").css("display", "grid");
            $("#live-3-solid").css("display", "grid");
        }
		if (item.showTwoHearts == true) {
	        $("#lives").css("display", "grid");
            $("#live-1-solid").css("display", "grid");
            $("#live-2-solid").css("display", "grid");
        }
		if (item.showOneHeart == true) {
	        $("#lives").css("display", "grid");
			$("#live-1-solid").css("display", "none");
            $("#live-1-out").css("display", "grid");
            $("#live-2-solid").css("display", "grid");
        }
	    if(item.showNoHearts == true) {
	        $("#lives").css("display", "none");
			$("#live-1-solid").css("display", "none");
            $("#live-1-out").css("display", "none");
            $("#live-2-solid").css("display", "none");
			$("#live-2-out").css("display", "none");
        }
		if (item.showLives == true) {
            $("#lives").css("display", "grid");
        }
        if (item.showLives == false) {
            $("#lives").css("display", "none");
        }
		if (item.showPlayerlist == true) {
            $(".leaderboard").css("display", "grid");
        }
        if (item.showPlayerlist == false) {
            $(".leaderboard").css("display", "none");
        }
        if (item.updateTeamsLeaderboard == true)
        {
            var copHtml = ''
            var robberHtml = ''
			
			copHtml += '<div class="player">';
            copHtml += '<div>ID</div>';
			copHtml += '<div>NAME</div>';
			copHtml += '<div>PING</div>';
			copHtml += '<div>RANK</div>';
            copHtml += '</div>';
			
            item.cops.forEach(element => {
				var data = element.split("@:@");
                copHtml += '<div class="player">';
                copHtml += '<div>' + data[0] + '</div>';
				copHtml += '<div>' + data[2] + '</div>';
				copHtml += '<div>' + data[1] + '</div>';
				copHtml += '<div>' + data[3] + '</div>';
                copHtml += '</div>';
            });
			
			robberHtml += '<div class="player">';
            robberHtml += '<div>ID</div>';
			robberHtml += '<div>NAME</div>';
			robberHtml += '<div>PING</div>';
			robberHtml += '<div>RANK</div>';
            robberHtml += '</div>';
			
            item.robbers.forEach(element => {
				var data = element.split("@:@");
                robberHtml += '<div class="player">';
                robberHtml += '<div>' + data[0] + '</div>';
				robberHtml += '<div>' + data[2] + '</div>';
				robberHtml += '<div>' + data[1] + '</div>';
				robberHtml += '<div>' + data[3] + '</div>';
                robberHtml += '</div>';
            });

            $('.main-leaderboard-cops').html(copHtml);
            $('.main-leaderboard-robbers').html(robberHtml);
        }
        if (item.updateTeamsLobby == true)
        {
            var copHtml = ''
            var robberHtml = ''
			
			copHtml += '<div class="player">';
            copHtml += '<div>ID</div>';
			copHtml += '<div>NAME</div>';
			copHtml += '<div>PING</div>';
			copHtml += '<div>READY</div>';
            copHtml += '</div>';
			
            item.cops.forEach(element => {
				var data = element.split("@:@");
                copHtml += '<div class="player">';
                copHtml += '<div>' + data[0] + '</div>';
				copHtml += '<div>' + data[2] + '</div>';
				copHtml += '<div>' + data[1] + '</div>';
				copHtml += '<div>YES</div>';
                copHtml += '</div>';
            });
			
			robberHtml += '<div class="player">';
            robberHtml += '<div>ID</div>';
			robberHtml += '<div>NAME</div>';
			robberHtml += '<div>PING</div>';
			robberHtml += '<div>READY</div>';
            robberHtml += '</div>';
			
            item.robbers.forEach(element => {
				var data = element.split("@:@");
                robberHtml += '<div class="player">';
                robberHtml += '<div>' + data[0] + '</div>';
				robberHtml += '<div>' + data[2] + '</div>';
				robberHtml += '<div>' + data[1] + '</div>';
				robberHtml += '<div>YES</div>';
                robberHtml += '</div>';
            });

            $('.lobby-leaderboard-cops').html(copHtml);
            $('.lobby-leaderboard-robbers').html(robberHtml);
        }
	});
});