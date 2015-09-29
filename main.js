$(document).ready(function() {
	var cnt = 1;
	setInterval(function() {
		cnt++;
		if (cnt >= 3) cnt = 1;
		$("#main img").attr("src", "p"+cnt+".png");
	}, 3000);
});