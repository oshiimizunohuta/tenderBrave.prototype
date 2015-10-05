var scene = 'a';
var facex = 0;
var facey = 2;
var FACEX_MAX = 5;
var FACEY_MAX = 5;

var bCommandCounterList = [0, 0, 0, 0, 0, 0, 0, 0];
var enabled = true;

function setFace(facex, facey) {
	var x = facex * (-80);
	var y = facey * (-80);
	$("#face").css("background-position", x + "px " + y + "px");
}

/*
function effect() {
	var handle;
	var p = 0.50;
	handle = setInterval(function() {
		p = p / 1.5;
		var scale = p + 1.0;
		// var zoom = scale * 100;
		$("#face").css("transform", "scale(" + scale + ")");
		if (scale <= 1.001) {
			$("#face").css("zoom", "");
			clearInterval(handle);
		}
	}, 50);
}
*/

function onBCommand(bCommandId) {

	var bCommand = bCommandList[bCommandId];
	var counter = bCommandCounterList[bCommandId];
	var variation = bCommand.variation;
	var item = variation[variation.length - 1];
	if (counter < variation.length) { item = variation[counter]; }

	enabled = false;

	setTimeout(function() {
		$("#chat_window").show();
		$("#chat_y").text("*** " + bCommand.text);
		$("#chat_e").text("");
	}, 0);

	setTimeout(function() {
		$("#chat_e").text(item.text);
	}, 2000);


	setTimeout(function() {
		facex = fit(facex + item.dx, 0, FACEX_MAX - 1);
		facey = fit(facey + item.dy, 0, FACEY_MAX - 1);

		facex = fit(facex + ax[facey][facex], 0, FACEX_MAX - 1);

		setFace(facex, facey);
		// effect();
		$("#face").show();
	}, 3000);
	setTimeout(function() { $("#face").hide(); }, 2500);
	setTimeout(function() { $("#face").show(); }, 2600);
	setTimeout(function() { $("#face").hide(); }, 2700);
	setTimeout(function() { $("#face").show(); }, 2800);
	setTimeout(function() { $("#face").hide(); }, 2900);

	setTimeout(function() {
		$("#chat_window").hide();
		enabled = true;
		// 履歴に追加する
		$("#chat_y").clone().removeAttr("id").appendTo("#chat_history");
		$("#chat_e").clone().removeAttr("id").appendTo("#chat_history");
		// エンディング判定
		if (facey === 0 && facex === FACEX_MAX - 1) {
			$("#ending").show();
			$("#ending_text").appendTo("#chat_history");
		}
		// 履歴を一番下までスクロールする
    	$("#chat_history").scrollTop($("#chat_history")[0].scrollHeight);
	}, 5000);

	bCommandCounterList[bCommandId]++;
}

function onCommand(commandId) {
	if (!enabled) return;
	switch(commandId) {
	case 10:
		break;
	case 11:
		break;
	case 12:
		break;
	case 13:
		break;
	case 30:
	case 31:
	case 32:
	case 33:
	case 34:
	case 35:
	case 36:
	case 37:
		onBCommand(commandId - 30);
		break;
	}
}

$(document).ready(function() {
	/*setInterval(function() {
		setFace(rand(5), rand(5));
	}, 2000);*/
	setFace(facex, facey);
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
	$(".command").click(function() {
		var $command = $(this);
		// var scene = "a"; if ($("#scene_b").has($command).size() >= 1) { var scene = "b"; }
		var commandId = parseInt($command.attr("data-command-id"));
		onCommand(commandId);
	});
});
