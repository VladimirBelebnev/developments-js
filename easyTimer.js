const timer = (deadline, selector) => {
    const updateClock = () => {
        const date = (new Date(deadline).getTime() - new Date().getTime()) / 1000,
            days = Math.floor(date / 60 / 60 / 24),
            hours = Math.floor((date / 60 / 60) % 24),
            minutes = Math.floor((date / 60) % 60),
            seconds = Math.floor(date % 60),
            timer = document.querySelector(selector);

        const getZero = (num) => {
            if (num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        };

        timer.textContent = `${getZero(days)}:${getZero(hours)}:${getZero(minutes)}:${getZero(seconds)}`;
        
        if (date <= 0) {
            clearInterval(interval);
            timer.textContent = '00:00:00:00';
        }
    };

    const interval = setInterval(updateClock, 500);
};

timer('31 march 2022', '.timer__time');
