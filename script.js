const startBtn = document.getElementById('start');

startBtn.addEventListener('click', addTimer)

function addTimer() {


    const hh = document.getElementById('hh').value;
    const mm = document.getElementById('mm').value;
    const ss = document.getElementById('ss').value;
    console.log(hh, mm, ss);


    const timerSyntax = `
    <div class="ny">
        <div class="ny-child"></div>
        <div class="set-time-wrapper">
            <div class="set-time">Set Time :</div>
        </div>
        <div class="hh-mm-ss-wrapper">
            <h1 class="hh-mm-container">
                <span class="hh">${hh}</span> : <span class="mm">${mm}</span> :
                <span class="ss">${ss}</span>
            </h1>
        </div>
        <div class="start-wrapper">
            <button id="start" class="start">
                <div class="start-child"></div>
                <div class="set">Start</div>
            </button>
        </div>
    </div> 
    `;

    const timerElem = document.createElement('div');
    let list = timerElem.classList;
    list.add('ny-wrapper');
    list.add('ny-wrapper-timer')

    const timerCount = document.getElementsByClassName('ny-wrapper-timer');
    let currentTimerCount = timerCount.length + 1
    console.log("timerCount", timerCount.length);
    list.add('ny-wrapper-timer-' + (timerCount.length + 1))

    timerElem.innerHTML = timerSyntax;

    const timerSib = document.getElementsByClassName('starting-screen')[0];
    timerSib.appendChild(timerElem);

    const startBtnId = document.getElementsByClassName('start')[currentTimerCount];
    console.log("startBtnId", startBtnId);
    startBtnId.addEventListener('click', startTimer);

}

function startTimer(e) {
    console.log(e);
    console.log("Jiii");
    console.log(this.parentNode);

}


