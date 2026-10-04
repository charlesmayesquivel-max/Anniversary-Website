// =========================================================
// RELATIONSHIP COUNTER
// =========================================================

// October 5, 2025 at 12:00 AM Philippine Time (UTC+8)
const startDate =
    new Date("2025-10-05T00:00:00+08:00");


function updateRelationshipCounter() {

    const now =
        new Date();


    let difference =
        now.getTime() -
        startDate.getTime();


    // Prevent negative values
    if (difference < 0) {

        difference = 0;

    }


    // Total seconds
    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    // Calculate units
    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    // Hero counter
    const daysElement =
        document.getElementById(
            "daysTogether"
        );

    const hoursElement =
        document.getElementById(
            "hoursTogether"
        );

    const minutesElement =
        document.getElementById(
            "minutesTogether"
        );

    const secondsElement =
        document.getElementById(
            "secondsTogether"
        );


    if (daysElement) {

        daysElement.textContent =
            days;
    }


    if (hoursElement) {

        hoursElement.textContent =
            hours;
    }


    if (minutesElement) {

        minutesElement.textContent =
            minutes;
    }


    if (secondsElement) {

        secondsElement.textContent =
            seconds;
    }


    // Relationship Stats counter
    const statsDays =
        document.getElementById(
            "statsDays"
        );


    if (statsDays) {

        statsDays.textContent =
            days;
    }

}


// Update immediately
updateRelationshipCounter();


// Update every second
setInterval(
    updateRelationshipCounter,
    1000
);



// =========================================================
// OPEN MY HEART BUTTON
// =========================================================

const openButton =
    document.getElementById(
        "openButton"
    );


if (openButton) {

    openButton.addEventListener(
        "click",
        function() {

            const letterSection =
                document.querySelector(
                    ".letter"
                );


            if (letterSection) {

                letterSection.scrollIntoView({
                    behavior:
                        "smooth"
                });

            }

        }
    );

}



// =========================================================
// FINAL LOVE SURPRISE
// =========================================================

const loveButton =
    document.getElementById(
        "loveButton"
    );


const lovePercent =
    document.getElementById(
        "lovePercent"
    );


const loveFill =
    document.getElementById(
        "loveFill"
    );


const message =
    document.getElementById(
        "message"
    );


const finalSurprise =
    document.getElementById(
        "finalSurprise"
    );


const finalClose =
    document.getElementById(
        "finalClose"
    );


const loveSection =
    document.querySelector(
        ".love-counter"
    );


let loveAmount = 0;


if (loveButton) {

    loveButton.addEventListener(
        "click",
        function() {


            // Prevent more than 30 clicks
            if (loveAmount >= 30) {

                return;

            }


            loveAmount++;


            // 30 clicks = 100%
            const percentage =
                Math.min(
                    Math.round(
                        (loveAmount / 30) * 100
                    ),
                    100
                );


            // Update percentage
            if (lovePercent) {

                lovePercent.textContent =
                    percentage;

            }


            // Update bar
            if (loveFill) {

                loveFill.style.width =
                    percentage + "%";

            }


            // Messages
            if (
                percentage >= 10 &&
                percentage < 30
            ) {

                message.textContent =
                    "Just getting started... 💜";

            }


            else if (
                percentage >= 30 &&
                percentage < 50
            ) {

                message.textContent =
                    "There's still so much more love. 🥰";

            }


            else if (
                percentage >= 50 &&
                percentage < 70
            ) {

                message.textContent =
                    "Only halfway? That's definitely not enough. 💜";

            }


            else if (
                percentage >= 70 &&
                percentage < 90
            ) {

                message.textContent =
                    "My love for you keeps growing. ✨";

            }


            else if (
                percentage >= 90 &&
                percentage < 100
            ) {

                message.textContent =
                    "Almost there... 💜";

            }


            // Final surprise
            if (loveAmount === 30) {

                message.textContent =
                    "100%... but that's still not enough. 💜";


                loveButton.textContent =
                    "There's No Limit 💜";


                if (finalSurprise) {

                    finalSurprise.classList.add(
                        "show"
                    );

                }


                if (loveSection) {

                    loveSection.classList.add(
                        "final-active"
                    );

                }


                // Lock page behind popup
                document.body.classList.add(
                    "final-open"
                );


                createHearts();

            }

        }
    );

}



// =========================================================
// CLOSE FINAL SURPRISE
// =========================================================

function closeFinalSurprise() {

    if (loveSection) {

        loveSection.classList.remove(
            "final-active"
        );

    }


    if (finalSurprise) {

        finalSurprise.classList.remove(
            "show"
        );

    }


    document.body.classList.remove(
        "final-open"
    );

}


if (finalClose) {

    finalClose.addEventListener(
        "click",
        closeFinalSurprise
    );

}



// =========================================================
// ESCAPE TO CLOSE FINAL SURPRISE
// =========================================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            finalSurprise &&
            finalSurprise.classList.contains(
                "show"
            )
        ) {

            closeFinalSurprise();

        }

    }
);



// =========================================================
// FLOATING HEARTS
// =========================================================

function createHearts() {

    if (!loveSection) {

        return;

    }


    // Remove old hearts first
    loveSection
        .querySelectorAll(
            ".floating-heart"
        )
        .forEach(
            function(heart) {

                heart.remove();

            }
        );


    // Create 25 hearts
    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const heart =
            document.createElement(
                "div"
            );


        heart.classList.add(
            "floating-heart"
        );


        heart.textContent =
            "💜";


        heart.style.left =
            Math.random() *
            100 +
            "%";


        heart.style.animationDelay =
            Math.random() *
            2 +
            "s";


        heart.style.fontSize =
            (
                15 +
                Math.random() * 25
            ) +
            "px";


        loveSection.appendChild(
            heart
        );


        setTimeout(
            function() {

                heart.remove();

            },
            7000
        );

    }

}



// =========================================================
// LOVE LETTER
// =========================================================

const letterButton =
    document.getElementById(
        "letterButton"
    );


const realLetter =
    document.getElementById(
        "realLetter"
    );


if (
    letterButton &&
    realLetter
) {

    letterButton.addEventListener(
        "click",
        function() {

            realLetter.classList.add(
                "show"
            );


            letterButton.textContent =
                "Letter Opened";


            letterButton.disabled =
                true;


            realLetter.scrollIntoView({
                behavior:
                    "smooth"
            });

        }
    );

}



// =========================================================
// INTERACTIVE REASONS
// =========================================================

function showReason(number) {

    const reasonMessage =
        document.getElementById(
            "reason" + number
        );


    if (!reasonMessage) {

        return;

    }


    const card =
        reasonMessage.parentElement;


    if (card) {

        card.classList.toggle(
            "open"
        );

    }

}



// =========================================================
// MUSIC PLAYER
// =========================================================

const musicPlayer =
    document.getElementById(
        "musicPlayer"
    );


const musicToggle =
    document.getElementById(
        "musicToggle"
    );


const musicClose =
    document.getElementById(
        "musicClose"
    );


const audioPlayer =
    document.getElementById(
        "audioPlayer"
    );


const playPause =
    document.getElementById(
        "playPause"
    );


const previousSong =
    document.getElementById(
        "previousSong"
    );


const nextSong =
    document.getElementById(
        "nextSong"
    );


const musicProgress =
    document.getElementById(
        "musicProgress"
    );


const currentTime =
    document.getElementById(
        "currentTime"
    );


const duration =
    document.getElementById(
        "duration"
    );


const currentSong =
    document.getElementById(
        "currentSong"
    );


const currentArtist =
    document.getElementById(
        "currentArtist"
    );


const playlistSongs =
    document.querySelectorAll(
        ".playlist-song"
    );



// =========================================================
// SONG LIST
// =========================================================

const songs = [

    {
        title:
            "Aphrodite",

        artist:
            "The Ridleys",

        file:
            "music/aphrodite.mp3"
    },


    {
        title:
            "Dahan",

        artist:
            "Over October",

        file:
            "music/dahan.mp3"
    },


    {
        title:
            "Ikot",

        artist:
            "Over October",

        file:
            "music/ikot.mp3"
    },


    {
        title:
            "Ikaw Pa Rin Ang Pipiliin Ko",

        artist:
            "Cup of Joe",

        file:
            "music/IPAPK.mp3"
    },


    {
        title:
            "Mahal",

        artist:
            "Dilaw",

        file:
            "music/mahal.mp3"
    },


    {
        title:
            "Patutunguhan",

        artist:
            "Cup of Joe",

        file:
            "music/Patutunguhan.mp3"
    },


    {
        title:
            "Yiee",

        artist:
            "Dilaw",

        file:
            "music/yiee.mp3"
    }

];


let currentSongIndex = 0;



// =========================================================
// FORMAT TIME
// =========================================================

function formatTime(seconds) {

    if (
        !Number.isFinite(seconds)
    ) {

        return "0:00";

    }


    const minutes =
        Math.floor(
            seconds / 60
        );


    const remainingSeconds =
        Math.floor(
            seconds % 60
        )
        .toString()
        .padStart(
            2,
            "0"
        );


    return (
        minutes +
        ":" +
        remainingSeconds
    );

}



// =========================================================
// LOAD SONG
// =========================================================

function loadSong(index) {

    if (
        !songs.length ||
        !audioPlayer ||
        !currentSong ||
        !currentArtist
    ) {

        return;

    }


    // Keep index valid
    if (
        index < 0 ||
        index >= songs.length
    ) {

        index = 0;

    }


    currentSongIndex =
        index;


    const song =
        songs[
            currentSongIndex
        ];


    // Song name
    currentSong.textContent =
        song.title;


    // Artist
    currentArtist.textContent =
        song.artist;


    // Audio file
    audioPlayer.src =
        song.file;


    audioPlayer.load();


    // Reset progress
    if (musicProgress) {

        musicProgress.value =
            0;

    }


    if (currentTime) {

        currentTime.textContent =
            "0:00";

    }


    if (duration) {

        duration.textContent =
            "0:00";

    }


    // Update playlist highlight
    playlistSongs.forEach(
        function(
            songButton,
            buttonIndex
        ) {

            songButton.classList.toggle(
                "active",
                buttonIndex ===
                    currentSongIndex
            );

        }
    );

}



// =========================================================
// PLAY SONG
// =========================================================

function playSong() {

    if (!audioPlayer) {

        return;

    }


    const playPromise =
        audioPlayer.play();


    if (
        playPromise !== undefined
    ) {

        playPromise
            .then(
                function() {

                    if (playPause) {

                        playPause.textContent =
                            "⏸";

                    }


                    if (musicPlayer) {

                        musicPlayer.classList.add(
                            "playing"
                        );

                    }

                }
            )
            .catch(
                function(error) {

                    console.log(
                        "Music could not play:",
                        error
                    );

                }
            );

    }

}



// =========================================================
// PAUSE SONG
// =========================================================

function pauseSong() {

    if (!audioPlayer) {

        return;

    }


    audioPlayer.pause();


    if (playPause) {

        playPause.textContent =
            "▶";

    }


    if (musicPlayer) {

        musicPlayer.classList.remove(
            "playing"
        );

    }

}



// =========================================================
// PLAY / PAUSE
// =========================================================

if (playPause) {

    playPause.addEventListener(
        "click",
        function() {

            if (!audioPlayer) {

                return;

            }


            if (audioPlayer.paused) {

                playSong();

            }

            else {

                pauseSong();

            }

        }
    );

}



// =========================================================
// NEXT SONG
// =========================================================

function nextTrack() {

    if (!songs.length) {

        return;

    }


    currentSongIndex++;


    if (
        currentSongIndex >=
        songs.length
    ) {

        currentSongIndex = 0;

    }


    loadSong(
        currentSongIndex
    );


    playSong();

}


if (nextSong) {

    nextSong.addEventListener(
        "click",
        nextTrack
    );

}



// =========================================================
// PREVIOUS SONG
// =========================================================

if (previousSong) {

    previousSong.addEventListener(
        "click",
        function() {

            if (!songs.length) {

                return;

            }


            currentSongIndex--;


            if (
                currentSongIndex < 0
            ) {

                currentSongIndex =
                    songs.length - 1;

            }


            loadSong(
                currentSongIndex
            );


            playSong();

        }
    );

}



// =========================================================
// SONG FINISHED
// =========================================================

if (audioPlayer) {

    audioPlayer.addEventListener(
        "ended",
        nextTrack
    );

}



// =========================================================
// PROGRESS UPDATE
// =========================================================

if (audioPlayer) {

    audioPlayer.addEventListener(
        "timeupdate",
        function() {

            if (
                audioPlayer.duration &&
                musicProgress
            ) {

                musicProgress.value =
                    (
                        audioPlayer.currentTime /
                        audioPlayer.duration
                    ) *
                    100;

            }


            if (currentTime) {

                currentTime.textContent =
                    formatTime(
                        audioPlayer.currentTime
                    );

            }

        }
    );

}



// =========================================================
// DURATION
// =========================================================

if (audioPlayer) {

    audioPlayer.addEventListener(
        "loadedmetadata",
        function() {

            if (duration) {

                duration.textContent =
                    formatTime(
                        audioPlayer.duration
                    );

            }

        }
    );

}



// =========================================================
// SEEK
// =========================================================

if (
    musicProgress &&
    audioPlayer
) {

    musicProgress.addEventListener(
        "input",
        function() {

            if (
                audioPlayer.duration
            ) {

                audioPlayer.currentTime =
                    (
                        musicProgress.value /
                        100
                    ) *
                    audioPlayer.duration;

            }

        }
    );

}



// =========================================================
// SELECT PLAYLIST SONG
// =========================================================

playlistSongs.forEach(
    function(songButton) {

        songButton.addEventListener(
            "click",
            function() {

                const selectedSong =
                    Number(
                        songButton.dataset.song
                    );


                if (
                    Number.isInteger(
                        selectedSong
                    ) &&
                    selectedSong >= 0 &&
                    selectedSong <
                        songs.length
                ) {

                    loadSong(
                        selectedSong
                    );


                    playSong();

                }

            }
        );

    }
);



// =========================================================
// OPEN MUSIC PLAYER
// =========================================================

if (
    musicToggle &&
    musicPlayer
) {

    musicToggle.addEventListener(
        "click",
        function() {

            musicPlayer.classList.add(
                "open"
            );

        }
    );

}



// =========================================================
// CLOSE MUSIC PLAYER
// =========================================================

if (
    musicClose &&
    musicPlayer
) {

    musicClose.addEventListener(
        "click",
        function() {

            musicPlayer.classList.remove(
                "open"
            );

        }
    );

}



// =========================================================
// INITIAL SONG
// =========================================================

loadSong(0);



// =========================================================
// FULL WEBSITE GLITTER
// =========================================================

function createWebsiteGlitter() {

    const background =
        document.querySelector(
            ".background-effects"
        );


    if (!background) {

        return;

    }


    const symbols = [
        "✦",
        "✧",
        "⋆",
        "✩",
        "·"
    ];


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const glitter =
            document.createElement(
                "span"
            );


        glitter.classList.add(
            "glitter"
        );


        glitter.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        glitter.style.left =
            Math.random() *
            100 +
            "%";


        glitter.style.top =
            Math.random() *
            100 +
            "%";


        glitter.style.fontSize =
            (
                6 +
                Math.random() * 10
            ) +
            "px";


        glitter.style.animationDelay =
            Math.random() *
            3 +
            "s";


        glitter.style.animationDuration =
            (
                2.5 +
                Math.random() * 3
            ) +
            "s";


        background.appendChild(
            glitter
        );

    }

}


createWebsiteGlitter();