//CREATE YOUR VARIABLES

let start = document.getElementById('start');
let restart = document.getElementById('reset');

let h = document.getElementById('hour');
let m = document.getElementById('minute');
let s = document.getElementById('sec');

//STORE A REFERENCE FOR THE VARIABLES

let startTimer = null;

function timer() {
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value ==0){
        m.value = 60;
        h.value--;
    }
}

function stopTimer() {
    clearInterval(startTimer)
}


start.addEventListener('click', function(){
    //initialize the variable startTimer
    function startInterval(){
        startTimer = setInterval(function(){
            timer();
        }, 1000);
    }
    startInterval()
})

//EVENT LISTER FOR THE RESET BUTTON

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopTimer()
})