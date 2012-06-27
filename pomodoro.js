
function Pomodoro() {
	var initalTime;
	
	this.setup = function(time) {
		initalTime = time || 25;
	}
	
	this.getInitalTime = function() {
		return initalTime;
	}
} 


exports.create = function() {
	return new Pomodoro()
}
