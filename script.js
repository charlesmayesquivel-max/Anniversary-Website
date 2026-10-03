// ====================
// RELATIONSHIP COUNTER
// ====================

// October 5, 2025 at 12:00 AM Philippine Time (UTC+8)
const startDate = new Date("2025-10-05T00:00:00+08:00");

function updateRelationshipCounter() {

    const now = new Date();

    let difference = now.getTime() - startDate.getTime();

    // Prevent negative values
    if (difference < 0) {
        difference = 0;
    }

    // Convert milliseconds to total seconds
    const totalSeconds = Math.floor(difference / 1000);

    // Calculate each unit
    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor(
        (totalSeconds % 86400) / 3600
    );

    const minutes = Math.floor(
        (totalSeconds % 3600) / 60
    );

    const seconds =
        totalSeconds % 60;


    // Display values
    document.getElementById("daysTogether").textContent = days;

    document.getElementById("hoursTogether").textContent = hours;

    document.getElementById("minutesTogether").textContent = minutes;

    document.getElementById("secondsTogether").textContent = seconds;
}


// Update immediately
updateRelationshipCounter();


// Update every second
setInterval(updateRelationshipCounter, 1000);


// ====================
// OPEN MY HEART BUTTON
// ====================

const openButton =
    document.getElementById("openButton");

openButton.addEventListener("click", function() {

    document.querySelector(".letter").scrollIntoView({
        behavior: "smooth"
    });

});


// ====================
// FINAL LOVE SURPRISE
// ====================

const loveButton =
    document.getElementById("loveButton");

const lovePercent =
    document.getElementById("lovePercent");

const loveFill =
    document.getElementById("loveFill");

const message =
    document.getElementById("message");

const finalSurprise =
    document.getElementById("finalSurprise");


let loveAmount = 0;


loveButton.addEventListener("click", function() {

    loveAmount++;

    // 30 clicks = 100%
    const percentage = Math.min(
        Math.round((loveAmount / 30) * 100),
        100
    );

    // Update percentage
    lovePercent.textContent = percentage;

    // Update the purple bar
    loveFill.style.width = percentage + "%";


    // Messages while filling
    if (percentage >= 10 && percentage < 30) {

        message.textContent =
            "Just getting started... 💜";

    }

    else if (percentage >= 30 && percentage < 50) {

        message.textContent =
            "There's still so much more love. 🥰";

    }

    else if (percentage >= 50 && percentage < 70) {

        message.textContent =
            "Only halfway? That's definitely not enough. 💜";

    }

    else if (percentage >= 70 && percentage < 90) {

        message.textContent =
            "My love for you keeps growing. ✨";

    }

    else if (percentage >= 90 && percentage < 100) {

        message.textContent =
            "Almost there... 💜";

    }


    // 30 clicks = reveal the surprise
    if (loveAmount === 30) {

        message.textContent =
            "100%... but that's still not enough. 💜";

        loveButton.textContent =
            "There's No Limit 💜";

        finalSurprise.classList.add("show");

        createHearts();

        finalSurprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

});


// ====================
// FLOATING HEARTS
// ====================

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add("floating-heart");

        heart.textContent = "💜";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";


        document
            .querySelector(".love-counter")
            .appendChild(heart);


        setTimeout(function() {

            heart.remove();

        }, 7000);

    }

}


// ====================
// LOVE LETTER
// ====================

const letterButton =
    document.getElementById("letterButton");

const realLetter =
    document.getElementById("realLetter");


letterButton.addEventListener("click", function() {

    realLetter.classList.add("show");

    letterButton.textContent =
        "Letter Opened";

    letterButton.disabled = true;

    realLetter.scrollIntoView({
        behavior: "smooth"
    });

});


// ====================
// INTERACTIVE REASONS
// ====================

function showReason(number) {

    const reasonMessage =
        document.getElementById("reason" + number);

    const card =
        reasonMessage.parentElement;

    card.classList.toggle("open");

}


// ====================
// MUSIC PLAYER
// ====================

const musicPlayer =
    document.getElementById("musicPlayer");

const musicToggle =
    document.getElementById("musicToggle");

const musicClose =
    document.getElementById("musicClose");

const audioPlayer =
    document.getElementById("audioPlayer");

const playPause =
    document.getElementById("playPause");

const previousSong =
    document.getElementById("previousSong");

const nextSong =
    document.getElementById("nextSong");

const musicProgress =
    document.getElementById("musicProgress");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");

const currentSong =
    document.getElementById("currentSong");

const currentArtist =
    document.getElementById("currentArtist");

const playlistSongs =
    document.querySelectorAll(".playlist-song");


// ====================
// SONG LIST
// ====================

const songs = [

    {
        title: "Aphrodite",
        artist: "The Ridleys",
        file: "music/aphrodite.mp3"
    },

    {
        title: "Mahal",
        artist: "Dilaw",
        file: "music/mahal.mp3"
    },

    {
        title: "Dahan",
        artist: "Over October",
        file: "music/dahan.mp3"
    },

    {
        title: "Yiee",
        artist: "Dilaw",
        file: "music/yiee.mp3"
    }

];


let currentSongIndex = 0;


// ====================
// FORMAT TIME
// ====================

function formatTime(seconds) {

    if (!Number.isFinite(seconds)) {
        return "0:00";
    }

    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        Math.floor(seconds % 60)
            .toString()
            .padStart(2, "0");

    return minutes + ":" + remainingSeconds;

}


// ====================
// LOAD SONG
// ====================

function loadSong(index) {

    currentSongIndex = index;

    const song =
        songs[currentSongIndex];

    currentSong.textContent =
        song.title;

    currentArtist.textContent =
        song.artist;

    audioPlayer.src =
        song.file;

    audioPlayer.load();


    musicProgress.value = 0;

    currentTime.textContent =
        "0:00";

    duration.textContent =
        "0:00";


    playlistSongs.forEach(function(songButton, buttonIndex) {

        songButton.classList.toggle(
            "active",
            buttonIndex === currentSongIndex
        );

    });

}


// ====================
// PLAY SONG
// ====================

function playSong() {

    const playPromise =
        audioPlayer.play();

    if (playPromise !== undefined) {

        playPromise
            .then(function() {

                playPause.textContent = "⏸";

                musicPlayer.classList.add("playing");

            })
            .catch(function(error) {

                console.log(
                    "Music could not play:",
                    error
                );

            });

    }

}


// ====================
// PAUSE SONG
// ====================

function pauseSong() {

    audioPlayer.pause();

    playPause.textContent = "▶";

    musicPlayer.classList.remove("playing");

}


// ====================
// PLAY / PAUSE
// ====================

playPause.addEventListener(
    "click",
    function() {

        if (audioPlayer.paused) {

            playSong();

        } else {

            pauseSong();

        }

    }
);


// ====================
// NEXT SONG
// ====================

function nextTrack() {

    currentSongIndex++;

    if (currentSongIndex >= songs.length) {

        currentSongIndex = 0;

    }

    loadSong(currentSongIndex);

    playSong();

}


nextSong.addEventListener(
    "click",
    nextTrack
);


// ====================
// PREVIOUS SONG
// ====================

previousSong.addEventListener(
    "click",
    function() {

        currentSongIndex--;

        if (currentSongIndex < 0) {

            currentSongIndex =
                songs.length - 1;

        }

        loadSong(currentSongIndex);

        playSong();

    }
);


// ====================
// SONG FINISHED
// ====================

audioPlayer.addEventListener(
    "ended",
    nextTrack
);


// ====================
// PROGRESS UPDATE
// ====================

audioPlayer.addEventListener(
    "timeupdate",
    function() {

        if (audioPlayer.duration) {

            musicProgress.value =
                (audioPlayer.currentTime /
                audioPlayer.duration) * 100;

        }

        currentTime.textContent =
            formatTime(
                audioPlayer.currentTime
            );

    }
);


// ====================
// DURATION
// ====================

audioPlayer.addEventListener(
    "loadedmetadata",
    function() {

        duration.textContent =
            formatTime(
                audioPlayer.duration
            );

    }
);


// ====================
// SEEK
// ====================

musicProgress.addEventListener(
    "input",
    function() {

        if (audioPlayer.duration) {

            audioPlayer.currentTime =
                (musicProgress.value / 100)
                * audioPlayer.duration;

        }

    }
);


// ====================
// SELECT PLAYLIST SONG
// ====================

playlistSongs.forEach(
    function(songButton) {

        songButton.addEventListener(
            "click",
            function() {

                const selectedSong =
                    Number(
                        songButton.dataset.song
                    );

                loadSong(selectedSong);

                playSong();

            }
        );

    }
);


// ====================
// OPEN PLAYER
// ====================

musicToggle.addEventListener(
    "click",
    function() {

        musicPlayer.classList.add("open");

    }
);


// ====================
// CLOSE PLAYER
// ====================

musicClose.addEventListener(
    "click",
    function() {

        musicPlayer.classList.remove("open");

    }
);


// ====================
// INITIAL SONG
// ====================

loadSong(0);

