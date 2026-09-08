
// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});



// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");

const closeMenu = document.getElementById("closeMenu");


if (menuBtn) {

    menuBtn.onclick = () => {

        menu.classList.toggle("show");

    };

}


if (closeMenu) {

    closeMenu.onclick = () => {

        menu.classList.remove("show");

    };

}


document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("show");

    });

});



// ===============================
// THEME
// ===============================

const themeBtn = document.getElementById("themeBtn");

let dark = true;


if (themeBtn) {

    themeBtn.onclick = () => {

        dark = !dark;

        if (dark) {

            document.body.classList.remove("light");

            themeBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        } else {

            document.body.classList.add("light");

            themeBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        }

    };

}



// ===============================
// NEWS
// ===============================

function loadNews() {

    const grid = document.getElementById("newsGrid");

    if (!grid) return;


    grid.innerHTML = "";


    news.slice(0, 7).forEach(item => {

        grid.innerHTML += `

            <article class="news-card">

                <img
                    src="${item.image}"
                    alt="${item.title}"
                    onerror="this.style.display='none'"
                >

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.text}
                </p>

                <small>
                    ${item.date}
                </small>

            </article>

        `;

    });

}



// ===============================
// PLAYERS
// ===============================

let currentPlayer = 0;


function showPlayer() {

    const grid =
        document.getElementById("playersGrid");


    if (!grid) return;


    if (!players.length) {

        grid.innerHTML =
            "<p>هنوز بازیکنی ثبت نشده است.</p>";

        return;

    }


    const player =
        players[currentPlayer];


    grid.innerHTML = `

        <div class="player-card">

            <img
                src="${player.image}"
                alt="${player.name}"
                onerror="this.src='https://placehold.co/300x300?text=Player'"
            >

            <h3>
                ${player.name}
            </h3>

            <p>
                ${player.position}
            </p>

            <span>
                شماره ${player.number}
            </span>

        </div>

    `;

}


document.getElementById("playerNext").onclick = () => {

    currentPlayer++;

    if (currentPlayer >= players.length) {

        currentPlayer = 0;

    }

    showPlayer();

};


document.getElementById("playerPrev").onclick = () => {

    currentPlayer--;

    if (currentPlayer < 0) {

        currentPlayer = players.length - 1;

    }

    showPlayer();

};



// ===============================
// LAST MATCH
// ===============================

function loadLastMatch() {

    const box =
        document.getElementById("lastMatch");


    const match =
        clubData.lastMatch;


    box.innerHTML = `

        <div class="match">

            <h3>
                ${match.home}
            </h3>

            <div class="score">

                ${match.homeScore}

                -

                ${match.awayScore}

            </div>

            <h3>
                ${match.away}
            </h3>

        </div>

        <p>
            📅 ${match.date}
        </p>

        <p>
            🏟️ ${match.stadium}
        </p>

    `;

}



// ===============================
// NEXT MATCH
// ===============================

function loadNextMatch() {

    const box =
        document.getElementById("nextMatch");


    const match =
        clubData.nextMatch;


    box.innerHTML = `

        <div class="match">

            <h3>
                ${match.home}
            </h3>

            <div class="vs">
                VS
            </div>

            <h3>
                ${match.away}
            </h3>

        </div>

        <p>
            📅 ${match.date}
        </p>

        <p>
            ⏰ ${match.time}
        </p>

        <p>
            🏟️ ${match.stadium}
        </p>

    `;

}



// ===============================
// STATS
// ===============================

function loadStats() {

    document.getElementById("gamesStat").textContent =
        clubData.stats.games;

    document.getElementById("winsStat").textContent =
        clubData.stats.wins;

    document.getElementById("drawsStat").textContent =
        clubData.stats.draws;

    document.getElementById("lossesStat").textContent =
        clubData.stats.losses;

}



// ===============================
// LEAGUE TABLE
// ===============================

function loadTable() {

    const table =
        document.getElementById("leagueTable");


    table.innerHTML = "";


    clubData.leagueTable.forEach(team => {

        table.innerHTML += `

            <tr>

                <td>
                    ${team.rank}
                </td>

                <td>
                    ${team.team}
                </td>

                <td>
                    ${team.games}
                </td>

                <td>
                    ${team.points}
                </td>

            </tr>

        `;

    });

}



// ===============================
// SLIDER
// ===============================

const slides =
    document.querySelectorAll(".slide");


let currentSlide = 0;


function showSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });


    slides[index].classList.add("active");

}


if (slides.length) {

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }, 4000);

}



// ===============================
// GO TOP
// ===============================

const goTop =
    document.getElementById("goTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        goTop.style.display = "block";

    } else {

        goTop.style.display = "none";

    }

});


goTop.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};



// ===============================
// INITIALIZE
// ===============================

loadNews();

showPlayer();

loadLastMatch();

loadNextMatch();

loadStats();

loadTable();