document.addEventListener("DOMContentLoaded", () => {
    const gameGrid = document.getElementById("gameGrid");

    // 配置游戏数据
    const games = [
        { name: "游戏1", image: "../images/game1.png", link: "game/testGame.html" },
        { name: "游戏2", image: "images/game2.png", link: "https://example.com/game2" },
        { name: "游戏3", image: "images/game3.png", link: "https://example.com/game3" },
        { name: "游戏4", image: "images/game4.png", link: "https://example.com/game4" },
        { name: "游戏5", image: "images/game5.png", link: "https://example.com/game5" },
        { name: "游戏6", image: "images/game6.png", link: "https://example.com/game6" },
        { name: "游戏7", image: "images/game7.png", link: "https://example.com/game7" },
        { name: "游戏8", image: "images/game8.png", link: "https://example.com/game8" },
        { name: "游戏9", image: "images/game9.png", link: "https://example.com/game9" },
        { name: "游戏10", image: "images/game10.png", link: "https://example.com/game10" }
    ];

    games.forEach(game => {
        const btn = document.createElement("div");
        btn.className = "subtype-item";
        btn.style.backgroundImage = `url(${game.image})`;
        btn.textContent = game.name;

        btn.addEventListener("click", () => {
            window.location.href = game.link;
        });

        gameGrid.appendChild(btn);
    });
});
