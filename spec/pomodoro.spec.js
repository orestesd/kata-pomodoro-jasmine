
var pomodoro;

describe("Crear un pomodoro", function() {
	 
	beforeEach(function() {
    	pomodoro = require("../pomodoro.js").create();
  	});
	 
	
	it("Un pomodoro dura 25 minutos por defecto", function() {
		pomodoro.setup();
		expect(pomodoro.getInitalTime()).toEqual(25);
	});
	
	it("Puedo crear un pomodoro con cualquier duración", function() {
		pomodoro.setup(50);
		expect(pomodoro.getInitalTime()).toEqual(50);
		
		pomodoro.setup();
		expect(pomodoro.getInitalTime()).toEqual(25);
	});
});


describe("Parar un pomodoro", function() {
	 
	beforeEach(function() {
    	pomodoro = require("../pomodoro.js").create();
  	});
	 
	
	it("Un pomodoro recién creado está parado", function() {
		pomodoro.setup();
		expect(pomodoro.isStopped()).toBe(true);
	});
	
});

