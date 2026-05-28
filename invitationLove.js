const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

noBtn.addEventListener("mouseover", () => {
    const container = document.querySelector(".buttons");

    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

yesBtn.addEventListener("click", () => {
    message.innerHTML = "🎉 Yay! See you there! 💖";

    startHearts();
    startFireworks();
});

function startHearts() {
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.zIndex = 9999;
    heart.style.animation = "floatUp 3s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

function startFireworks() {
    for (let i = 0; i < 15; i++) {
        createFirework();
    }
}

function createFirework() {
    const firework = document.createElement("div");
    firework.innerHTML = "✨";
    firework.style.position = "fixed";
    firework.style.left = Math.random() * window.innerWidth + "px";
    firework.style.top = Math.random() * window.innerHeight + "px";
    firework.style.fontSize = Math.random() * 25 + 15 + "px";
    firework.style.zIndex = 9999;
    firework.style.animation = "pop 1.5s ease-out forwards";

    document.body.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1500);
}