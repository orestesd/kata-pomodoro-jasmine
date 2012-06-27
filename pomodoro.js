
function Pomodoro() {
	var initalTime;
	var running = false;
	
	this.setup = function(time) {
		initalTime = time || 25;
	}
	
	this.play = function() {
		running = true;
	}
	
	this.getInitalTime = function() {
		return initalTime;
	}
	
	this.isStopped = function() {
		return ! running;
	}
	
	this.isRunning = function() {
		return running;
	}
} 


exports.create = function() {
	return new Pomodoro()
}
