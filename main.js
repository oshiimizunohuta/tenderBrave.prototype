function setFace(left, top) {
	var x = left * (-80);
	var y = top * (-80);
	$("#face").css("background-position", x + "px " + y + "px");
}

function rand(size) { return Math.floor(Math.random()*size); }

$(document).ready(function() {
	var scene = 'a';
	setInterval(function() {
		setFace(rand(5), rand(5));
	}, 2000);
	$("#scene_a_button").click(function() {
		$("#scene_a").show();
		$("#scene_b").hide();
		scene = 'a';
	});
	$("#scene_b_button").click(function() {
		$("#scene_a").hide();
		$("#scene_b").show();
		scene = 'b';
	});
});
