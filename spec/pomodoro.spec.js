
var pomodoro;

describe("Crear un pomodoro", function() {
	 
	beforeEach(function() {
    	pomodoro = new Pomodoro();
  	});
	 
	
	it("Un pomodoro dura 25 minutos por defecto", function() {
		pomodoro.setup();
		expect(pomodoro.getInitalTime()).toEqual(25 * 60);
	});
	
	it("Puedo crear un pomodoro con cualquier duración", function() {
		pomodoro.setup(50);
		expect(pomodoro.getInitalTime()).toEqual(50);
	});
});


describe("Parar un pomodoro", function() {
	
	beforeEach(function() {
    	pomodoro = new Pomodoro();
    	
    	// timer mock
    	jasmine.Clock.useMock();
    	
  	});
	 
	
	it("Un pomodoro recién creado está parado", function() {
		pomodoro.setup();
		expect(pomodoro.isStopped()).toBe(true);
	});
	
	it("Al arrancar un pomodoro comienza la cuenta atrás", function() {
		pomodoro.setup();
		pomodoro.play();
		expect(pomodoro.isRunning()).toBe(true);
		expect(pomodoro.isStopped()).toBe(false);
	});
	
	it("Un pomodoro va descontando tiempo", function() {
		pomodoro.setup(60);
		pomodoro.play();
		jasmine.Clock.tick(5 * 1000); // 5 segundos
		expect(pomodoro.getTimeLeft()).toEqual(55);
	});
	
	it("Un pomodoro no termina si no ha sido arrancado previamente.", function() {
		pomodoro.setup(60);
		jasmine.Clock.tick(61 * 1000);
		expect(pomodoro.getTimeLeft()).toEqual(60);
	});
	
});


describe("Interrupciones", function() {
	
	beforeEach(function() {
    	pomodoro = new Pomodoro();
  	});
  	
	it("Un pomodoro se inicia sin interrupciones", function(){
		pomodoro.setup();
		expect(pomodoro.interuptionCount()).toEqual(0);
	});
});

