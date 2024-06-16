document.addEventListener("DOMContentLoaded", () => {
    const ball = document.getElementById("ball");
    const gameArea = document.getElementById("game-area");

    let score = 0;

    function moveBall() {
        const x = Math.random() * (gameArea.clientWidth - ball.clientWidth);
        const y = Math.random() * (gameArea.clientHeight - ball.clientHeight);
        ball.style.left = `${x}px`;
        ball.style.top = `${y}px`;
    }

    function submitScore() {
        fetch('/score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ score: score })
        })
        .then(response => response.json())
        .then(data => {
            alert(`Score: ${score}\nHigh Score: ${data.high_score}`);
        });
    }

    ball.addEventListener("click", () => {
        score++;
        moveBall();
        submitScore();
    });

    moveBall();
});
