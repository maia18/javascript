function Clock() {
    function getTimeSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    let clock = document.querySelector('.clock');
    /* const start = document.querySelector('.Start');
       const stop_ = document.querySelector('.Stop');
       const clear = document.querySelector('.Clear'); */
    
    let second = 0;
    let timer;
    
    function StartClock() {
        timer = setInterval(function() {
            second++;
            clock.innerHTML = getTimeSeconds(second);
        }, 1000);
    }
    
    document.addEventListener('click', function(event) {
        const el = event.target;
        if (el.classList.contains('Clear')) {
            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            clock.classList.remove('stopped');
            second = 0;    
        }
        if (el.classList.contains('Stop')) {
            clearInterval(timer);
            clock.classList.add('stopped');    
        }
        if (el.classList.contains('Start')) {
            clock.classList.remove('stopped');
            clearInterval(timer);
            StartClock();    
        }
    });
    
    /* 
    
    start.addEventListener('click', function(event) {
        clock.classList.remove('stopped');
        clearInterval(timer);
        StartClock();
    });
    stop_.addEventListener('click', function(event) {
        clearInterval(timer);
        clock.classList.add('stopped');
    });
    clear.addEventListener('click', function(event) {
        clearInterval(timer);
        clock.innerHTML = '00:00:00';
        second = 0;
    });  
    
    */
}

Clock();