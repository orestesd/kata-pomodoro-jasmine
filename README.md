Un pomodoro en un pomodoro
====================

http://www.solveet.com/exercises/Pomodoro-Kata/68


El objetivo de esta PomodoroKata es desarrollar (haciendo TDD, por supuesto) un programa que reproduzca el comportamiento de un temporizador como el que usamos cuando practicamos la técnica del pomodoro, es decir, un simple reloj de cocina.

Os proponemos los siguientes comportamientos, pero podáis usar los que queréis siempre y cuando cumplan con la restricción añadida de que la escritura de la kata no dure más de un pomodoro (25 minutos). De ahí el subtítulo de "Un pomodoro en un pomodoro".

CREAR UN POMODORO
---------------------
Un pomodoro dura 25 minutos por defecto.
Puedo crear un pomodoro con cualquier duración.

PARAR UN POMODORO
---------------------
Un pomodoro recién creado está parado.
Al arrancar un pomodoro comienza la cuenta atrás.
Un pomodoro no termina si no ha sido arrancado previamente.
Un pomodoro acaba cuando se agota su tiempo.
Un pomodoro no acaba mientras no se agote su tiempo.

INTERRUPCIONES
---------------------
Un pomodoro se inicia sin interrupciones.
Si no está arrancado no se puede interrumpir.
El pomodoro cuenta las interrupciones (1, 2...).

REINICIAR
---------------------
Un pomodoro ya arrancado se reinicia (empieza a contar el tiempo) al arrancarlo de nuevo.
Un pomodoro se reinicia sin interrupciones.
