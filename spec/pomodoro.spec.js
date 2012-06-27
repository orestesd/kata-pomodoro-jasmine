
var pomodoro;

describe("pomodoro setup", function() {
	 
	beforeEach(function() {
    	pomodoro = require("../pomodoro.js").create();
  	});
	 
	
	it("pomodoro initial setup time is correct", function() {
		pomodoro.setup(50);
		expect(pomodoro.getInitalTime()).toEqual(50);
		
		pomodoro.setup();
		expect(pomodoro.getInitalTime()).toEqual(25);
	});
});

