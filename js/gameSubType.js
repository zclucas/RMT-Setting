document.addEventListener("DOMContentLoaded", () => {
    const gameGrid = document.getElementById("gameGrid");

    // 配置游戏数据
    const games = [
        { name: "二重螺旋", image: "../Images/Game/二重螺旋.png", link: "Game/DoubleSpiral.html" },
        { name: "封叶三国", image: "../Images/Game/封叶三国.png", link: "Game/ThreeKingdoms.html" },
        { name: "街霸6", image: "../Images/Game/街霸6.png", link: "Game/StreetFighter.html" },
        { name: "永劫无间", image: "../Images/Game/永劫无间.png", link: "Game/Naraka.html" },
        { name: "棕色尘埃2", image: "../Images/Game/棕色尘埃2.png", link: "Game/BrownDust2.html" },
        { name: "GTA5", image: "../Images/Game/GTA5.png", link: "Game/GTA5.html" },
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
