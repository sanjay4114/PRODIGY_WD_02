let timer;
let isRunning = false;
let elapsedTime = 0;
let lapCount = 0;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapList = document.getElementById('lap-list');

function updateDisplay() {
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    millisecondsDisplay.textContent = milliseconds.toString().padStart(2, '0');
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            elapsedTime += 10; // Increment time by 10 milliseconds
            updateDisplay();
        }, 10);
        isRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
    lapList.innerHTML = ''; // Clear lap list
    lapCount = 0;
}

function recordLap() {
    if (isRunning) {
        lapCount++;
        const lapTime = document.createElement('li');
        lapTime.textContent = `Lap ${lapCount}: ${minutesDisplay.textContent}:${secondsDisplay.textContent}:${millisecondsDisplay.textContent}`;
        lapList.appendChild(lapTime);
    }
}

// Event Listeners
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);
