document.addEventListener("DOMContentLoaded", () => {
    const gameGrid = document.getElementById("gameGrid");

    // 配置游戏数据
    const games = [
        { name: "第五人格", image: "../Images/Game/第五人格.png", link: "Game/第五人格.html" },
        { name: "二重螺旋", image: "../Images/Game/二重螺旋.png", link: "Game/二重螺旋.html" },
        { name: "封叶三国", image: "../Images/Game/封叶三国.png", link: "Game/封叶三国.html" },
        { name: "激战2", image: "../Images/Game/激战2.png", link: "Game/激战2.html" },
        { name: "街霸6", image: "../Images/Game/街霸6.png", link: "Game/街霸6.html" },
        { name: "绝地潜兵", image: "../Images/Game/绝地潜兵.png", link: "Game/绝地潜兵.html" },
        { name: "流放之路", image: "../Images/Game/流放之路.png", link: "Game/流放之路.html" },
        { name: "洛克王国世界", image: "../Images/Game/洛克王国世界.png", link: "Game/洛克王国世界.html" },
        { name: "盲盒派对", image: "../Images/Game/盲盒派对.png", link: "Game/盲盒派对.html" },
        { name: "鸣潮", image: "../Images/Game/鸣潮.png", link: "Game/鸣潮.html" },
        { name: "魔兽世界", image: "../Images/Game/魔兽世界.png", link: "Game/魔兽世界.html" },
        { name: "逆战", image: "../Images/Game/逆战.png", link: "Game/逆战.html" },
        { name: "桃花源记2", image: "../Images/Game/桃花源记2.png", link: "Game/桃花源记2.html" },
        { name: "无限暖暖", image: "../Images/Game/无限暖暖.png", link: "Game/无限暖暖.html" },
        { name: "星际争霸", image: "../Images/Game/星际争霸.png", link: "Game/星际争霸.html" },
        { name: "永劫无间", image: "../Images/Game/永劫无间.png", link: "Game/永劫无间.html" },
        { name: "终末地", image: "../Images/Game/终末地.png", link: "Game/终末地.html" },
        { name: "棕色尘埃2", image: "../Images/Game/棕色尘埃2.png", link: "Game/棕色尘埃2.html" },
        { name: "最后纪元", image: "../Images/Game/最后纪元.png", link: "Game/最后纪元.html" },
        { name: "CSGO2", image: "../Images/Game/CSGO2.png", link: "Game/CSGO2.html" },
        { name: "DNF", image: "../Images/Game/DNF.png", link: "Game/DNF.html" },
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
