
function Pomodoro() {
	var initalTime;
	var status = 0;
	
	this.setup = function(time) {
		initalTime = time || 25;
	}
	
	this.getInitalTime = function() {
		return initalTime;
	}
	
	this.isStopped = function() {
		return status === 0;
	}
} 


exports.create = function() {
	return new Pomodoro()
}
