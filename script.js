// ====================
// OPEN MY HEART BUTTON
// ====================

const openButton = document.getElementById("openButton");


openButton.addEventListener("click", function() {

    document.querySelector(".letter").scrollIntoView({
        behavior: "smooth"
    });

});



// ====================
// LOVE COUNTER
// ====================

const loveButton = document.getElementById("loveButton");

const counter = document.getElementById("counter");

const message = document.getElementById("message");


let loveCount = 0;


loveButton.addEventListener("click", function() {

    loveCount++;

    counter.textContent = loveCount;


    // Different messages depending
    // on how many times she clicks

    if (loveCount === 1) {

        message.textContent = "Just getting started ❤️";

    }

    else if (loveCount === 10) {

        message.textContent = "I love you more than 10 ❤️";

    }

    else if (loveCount === 25) {

        message.textContent = "25 times? I really love you! 🥰";

    }

    else if (loveCount === 50) {

        message.textContent = "Okay... you really like clicking this 😂❤️";

    }

    else if (loveCount === 100) {

        message.textContent = "I LOVE YOU INFINITY ❤️∞";

    }

});