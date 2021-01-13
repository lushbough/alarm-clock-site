    let alarmMusic = new Audio();
        alarmMusic.src ='menuMusic.mp3';

    function refreshTime() {
        let thisTime = new Date();
        let time = document.getElementById('time');
        time.innerHTML = thisTime.toLocaleTimeString();
    }

        setInterval(refreshTime, 1000);

    function setAlarm(){
        let timetoSet = document.getElementById("alarmTime").valueAsNumber;
        if(isNaN(timetoSet)) {
            alert("invalid time");
            return;
        }
        let alarm = new Date(timetoSet);
        let alarmTime = new Date(alarm.getUTCFullYear(),alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());

        let timeMeasure = alarmTime.getTime() - (new Date().getTime());

        if (timeMeasure < 0) {alert('time has passed');
        return;
        }

        setTimeout(soundAlarm, timeMeasure);
    }

    function soundAlarm(){
        alarmMusic.play();
    }

    function stop(){
        alarmMusic.pause();
    }
