const countdown = document.querySelector('.countdown');
//set lounch date

const lounchDate = new Date('April 16 2019 13:06:00').getTime();
// Update every seconds

const intvl = setInterval(() => {
    // today 
    const now = new Date().getTime();
    //distance from now to the lounch event
    const distance = lounchDate - now;
    // hands on caluculation

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    //Display results 

    countdown.innerHTML = ` 
                 <div>${days}<span>Days</span></div>
                  <div>${hours}<span>Hours</span></div>
                   <div>${minutes}<span>Minutes</span></div>
                    <div>${seconds}<span>Seconds</span></div>
                 
                 `;
    // if lounch event passed
    if (distance < 0) {
        clearInterval(intvl);
        //display
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Event has been lounched';

    }
}, 1000);
