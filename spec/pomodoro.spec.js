
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
    	
    	// timer mock
    	jasmine.Clock.useMock();
    	
  	});
  	
	it("Un pomodoro se inicia sin interrupciones", function(){
		pomodoro.setup();
		expect(pomodoro.interuptionCount()).toEqual(0);
	});
	
	it("Si no está arrancado no se puede interrumpir", function(){
		pomodoro.setup();
		pomodoro.pause()
		expect(pomodoro.interuptionCount()).toEqual(0);
	});
	
	it("El pomodoro cuenta las interrupciones", function() {
		pomodoro.setup();
		pomodoro.play();
		
		expect(pomodoro.interuptionCount()).toEqual(0);
		
		pomodoro.pause();
		expect(pomodoro.interuptionCount()).toEqual(1);
		
		pomodoro.pause();
		expect(pomodoro.interuptionCount()).toEqual(1);
		
		pomodoro.play();
		pomodoro.pause();
		expect(pomodoro.interuptionCount()).toEqual(2);
	});
	
	it("Un pomodoro parado no consume tiempo", function(){
		pomodoro.setup(100);
		pomodoro.play();
		
		jasmine.Clock.tick(5 * 1000); // pasan 5 segundos
		pomodoro.pause();
		expect(pomodoro.getTimeLeft()).toEqual(95);  // quedan 95 segundos
		
		pomodoro.pause();
		
		jasmine.Clock.tick(5 * 1000); // pasan otros 5 segundos
		expect(pomodoro.getTimeLeft()).toEqual(95); // siguen quedando 95 segundos
	});
});


describe("Reiniciar", function() {

	beforeEach(function() {
    	pomodoro = new Pomodoro();
    	
    	// timer mock
    	jasmine.Clock.useMock();
    	
  	});
  	
	it("Un pomodoro ya arrancado se reinicia (empieza a contar el tiempo) al arrancarlo de nuevo", function() {
		pomodoro.setup(100);
		pomodoro.play();
		
		jasmine.Clock.tick(20 * 1000);
		
		pomodoro.reset();
		
		jasmine.Clock.tick(5 * 1000);
		expect(pomodoro.getTimeLeft()).toEqual(95);
	});
	
	it("Un pomodoro se reinicia sin interrupciones", function() {
		pomodoro.setup(100);
		pomodoro.play();
		pomodoro.pause();
		expect(pomodoro.interuptionCount()).toEqual(1);
		
		pomodoro.reset();
		expect(pomodoro.interuptionCount()).toEqual(0);
	});
});
