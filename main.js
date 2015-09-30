$(document).ready(function() {
	var scene = 'a';
	setInterval(function() {
		if (scene === "a") { scene = "b"; }
		else { scene = "a"; }
		$("#main img").attr("src", "img/img_" + scene + ".png");
		$("#ui_a").hide();
		$("#ui_b").hide();
		$("#ui_" + scene).show();

	}, 3000);
});
