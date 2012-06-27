
var pomodoro;

describe("pomodoro setup", function() {
	 
	beforeEach(function() {
    	pomodoro = require("../pomodoro.js");
  	});
	 
	
	it("pomodoro initial setup time is correct", function() {
		pomodoro.setup(50);
		expect(pomodoro.getTime()).toEqual(50);
		
		pomodoro.setup();
		expect(pomodoro.getTime()).toEqual(25);
	});
});

