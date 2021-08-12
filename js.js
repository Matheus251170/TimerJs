window.onload = function(){

    var minutes = 00;
    var seconds = 00;
    var tens = 00;
    var somaMinutes = document.getElementById("minutos")
    var somaSeconds = document.getElementById("segundos");
    var somaTens = document.getElementById("milesimos");
    var btnStart = document.getElementById("start");
    var btnStop = document.getElementById("stop");
    var btnReset = document.getElementById("reset");
    var interval;


    btnStart.onclick = function(){

        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }


    btnStop.onclick = function(){

        clearInterval(interval);
    }

    btnReset.onclick = function(){

        clearInterval(interval);
        seconds = 0;
        tens = 0;
        minutes = 0;
        somaTens.innerHTML = tens;
        somaSeconds.innerHTML = seconds;
        somaMinutes.innerHTML = minutes;
    }

    function startTimer(){
        tens++;

        if(tens <= 9){
            somaTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            somaTens.innerHTML = tens;
        }

        if(tens > 99){
            console.log("seconds");
            seconds++;
            somaSeconds.innerHTML = "0" + seconds;
            tens = 0;
            somaTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            somaSeconds.innerHTML = seconds;
        }

        // segundos para minuto

        if(seconds <= 9){
            somaSeconds.innerHTML = "0" + seconds;
        }

        if(seconds > 9){
            somaSeconds.innerHTML = seconds;
        }

        if(seconds > 59){
            console.log("minutes");
            minutes++;
            somaMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            somaSeconds.innerHTML = "0" + 0;
        }

        if(minutes > 9){
            somaMinutes.innerHTML = minutes;
        }
    }

}