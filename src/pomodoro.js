
function Pomodoro() {
	var initalTime;
	var running = false;
	var secondsLeft;
	var daemon;
	
	this.setup = function(seconds) {
		initalTime = seconds || 25 * 60;
		secondsLeft = initalTime;
	}
	
	this.play = function() {
		running = true;
		daemon = setInterval(function() {
			secondsLeft -= 1;
		}, 1000)
	}
	
	this.getInitalTime = function() {
		return initalTime;
	}
	
	this.getTimeLeft = function() {
		return secondsLeft;
	}
	
	this.isStopped = function() {
		return ! running;
	}
	
	this.isRunning = function() {
		return running;
	}
	
} 

