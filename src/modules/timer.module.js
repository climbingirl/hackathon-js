import {Module} from '../core/module'

export class TimerModule extends Module {
    constructor (type,text){
        super(type,text)
    }

    trigger() {

        const timerSec = prompt('Введите кол-во секунд для таймера');
        const timerDiv = document.createElement('div');
        timerDiv.className = 'timer-box';

        let time = Number(timerSec);
        const startSeconds = time < 10 ? '0'+time : time;
        timerDiv.innerText = `00 : ${startSeconds} sec`;
        document.body.appendChild(timerDiv);

        const interval = setInterval(updateCountdown, 1000);

        function updateCountdown() {
            time--;
            let seconds = time < 10 ? '0'+time : time;
            timerDiv.innerText = `00 : ${seconds} sec`;

            document.body.appendChild(timerDiv);
            // console.log('timerDiv',timerDiv);
            if(time < 1) {
                clearInterval(interval);
                document.body.removeChild(timerDiv);
                alert(`Время таймера завершилось!`);
                }
        }
    }
}
