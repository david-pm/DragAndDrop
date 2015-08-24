var DrapNDrop = (function(){

	function allowDrop(ev) {
		if (ev.target === ev.currentTarget) { 
	    	ev.preventDefault();
	    }
	}

	function drag(ev) {
		// target elem the event listener is attached to is ev.currentTarget (the ul)
		// ev.target is the target of the event (the image)
	    if (ev.target !== ev.currentTarget) { 
	    	var draggedItem = ev.target.id;
	    	ev.dataTransfer.setData("text", ev.target.id);
	    }
	    ev.stopPropagation(); // stop looking around
	}

	function drop(ev) {
		if (ev.target === ev.currentTarget) { 
		    var data = ev.dataTransfer.getData("text");
		    ev.target.appendChild(document.getElementById(data));
		}
		ev.preventDefault();
		ev.stopPropagation();
	}

	function init(imgWrap, dropArea) {
		// event handlers
		imgWrap.addEventListener('dragstart', drag, false);
		dropArea.addEventListener('dragover', allowDrop, false);
		dropArea.addEventListener('drop', drop, false);

	}

	var events = {
		init: init
	};

	return events;
})(); // iife