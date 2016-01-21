var LTSOUND = null;
window.document.addEventListener('DOMContentLoaded', function(){
	LTSOUND = LTSND('LitroSound', 'systemse', function(ltsnd){
		// ltsnd.se.eventPlay('.menu li', 'mouseover', 0);
		ltsnd.se.eventPlay('div.command span', 'mouseover', 'FREE－se:001');
		ltsnd.se.eventPlay('div.command span', 'click', 'FREE－se:004');
	});
}, false);
