    const username = document.querySelector("#username");
    const saveScoreBtn = document.querySelector("#saveScoreBtn");
    const finalScore = document.querySelector("#finalScore");
    const mostRecentScore = localStorage.getItem("mostRecentScore");

    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    const MAX_HIGHSCORE = 5;

    finalScore.innerText = mostRecentScore;

    username.addEventListener("keyup", () => {
        saveScoreBtn = !username.value
    })

    saveHighScore = e => {
        e.preventDeafult()

        const score = {
            score: mostRecentScore,
            name: username.value
        }
        highScores.push(score)

        highScores.sort((a,b) => {
            return b.score - a.score
        })
        
        highScores.splice(5)

        localStorage.setItem("highscores", JSON.stringify(highScores))
        window.location.assign("/")
    }
