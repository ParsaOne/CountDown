let StartBox = document.getElementById('start_box');
let InputCounter = document.getElementById('input_counter');
let StartButtom = document.getElementById('start_counter');
let Board = document.getElementById('Board');
let circle = document.getElementById('circle');
let TimerNumber = document.getElementById('TimerNum');

StartButtom.addEventListener('click', function Start () {
    let Seconds = parseInt(InputCounter.value);
    let StartTime = Seconds;
    let Persent;
    let LPersent ='';
    let TimerID;

    if (isNaN(Seconds)) {
    Board.textContent = ('زمان را به درستی وارد کنید...');
    Board.style.color = ('Red');
    return;
    } else {
    Board.textContent = ('در حال اجرا ...');
    circle.style.display = ('Block');
    TimerNumber.textContent = Seconds;
    StartBox.style.display = ('None');
    
    TimerID = setInterval(() => {
        if (LPersent) {circle.classList.remove(LPersent);}
        if ( Seconds <= 0 ) {
            clearInterval(TimerID);
            StartBox.style.display = ('flex');
            Board.textContent = ('تمام شد...');
            Board.style.color = ('Green');
            circle.style.display = ('None');
            InputCounter.value = ('Null');
            return;}
        Seconds -= 1;
        LPersent = (`p${Persent = Math.floor( ( ( StartTime - Seconds ) / StartTime ) * 100 )}`);
        circle.classList.add(`p${Persent}`);
        TimerNumber.textContent = Seconds; 
    }, 1000);}});
