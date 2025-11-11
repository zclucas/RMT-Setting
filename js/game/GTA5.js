document.addEventListener("DOMContentLoaded", () => {
    const infoList = document.getElementById("infoList");
    const infoDetail = document.getElementById("infoDetail");

    const datas = [
        {
            id: "auto-get-coin-equip",
            title: "GTA5PvP宏",
            // originalAuthor: "若梦兔",
            author: "JustReaIL0Ve_q",
            feature: "点开软件即可使用",
            steps: [
                "此宏为想接触GTA5PvP玩家所分享，这并不是最好最快的!!!若想进一步提升宏的速度（在电脑吃得消的情况下）可以自己调试各个延迟",
                "有搜索部分的宏我是根据自己电脑的分辨率来的（2560*1440，165Hz），如有不同还望大家根据自己电脑的分辨率进行换算一下数字",
                "这里有个别宏的指令还不完善（成功概率不稳定，无黑屏自杀和左轮连发）还望有高手完善这两个宏的指令后也能分享出来",
                "有4个宏分中英文版（买子弹，牛鲨睾酮，防弹衣，载具热感）若是默认中文语言启动游戏，可禁用或者删除下面四个英文语言才用的宏，反之亦然（英文语言启动游戏可以有效屏            蔽中文私信的外挂广告）",
                "相关设置可参考宏文件配图",
            ],

            file: "../../游戏宏/GTA5/GTA5PvP宏/GTA5PvP宏.rmt",
            images: [
                { name: "飞行载具设置", src: "../../游戏宏/GTA5/GTA5PVP宏/飞行载具设置.JPG" },
                { name: "键盘鼠标设置", src: "../../游戏宏/GTA5/GTA5PVP宏/键盘鼠标设置.JPG" },
                { name: "汽车、摩托、船设置", src: "../../游戏宏/GTA5/GTA5PVP宏/汽车、摩托、船设置.JPG" },
                { name: "手机设置", src: "../../游戏宏/GTA5/GTA5PVP宏/手机设置.JPG" },
                { name: "通用设置", src: "../../游戏宏/GTA5/GTA5PVP宏/通用设置.JPG" },
                { name: "通用载具设置", src: "../../游戏宏/GTA5/GTA5PVP宏/通用载具设置.JPG" },
                { name: "图像设置", src: "../../游戏宏/GTA5/GTA5PVP宏/图像设置.JPG" },
                { name: "武器选择", src: "../../游戏宏/GTA5/GTA5PVP宏/武器选择.JPG" },
                { name: "在线模式设置", src: "../../游戏宏/GTA5/GTA5PVP宏/在线模式设置.JPG" },
            ]
        },
        // 可以继续添加更多条目
    ];

    // 渲染左侧列表
    datas.forEach((item, index) => {
        const btn = document.createElement("div");
        btn.className = "info-button" + (index === 0 ? " active" : "");
        btn.textContent = item.title;
        btn.dataset.id = item.id;
        infoList.appendChild(btn);
    });

    // 默认显示第一个条目
    renderInfo(datas[0]);

    // 点击切换条目
    infoList.addEventListener("click", (e) => {
        const target = e.target.closest(".info-button");
        if (!target) return;

        document.querySelectorAll(".info-button").forEach(b => b.classList.remove("active"));
        target.classList.add("active");

        const data = datas.find(c => c.id === target.dataset.id);
        renderInfo(data);
    });

    function renderInfo(data) {
        let imagesHTML = "";
        if (data.images && data.images.length > 0) {
            imagesHTML = `<div class="images">
                ${data.images.map(img => `
                    <div class="image-item">
                        <p>${img.name}</p>
                        <img src="${img.src}" alt="${img.name}" />
                    </div>
                `).join("")}
            </div>`;
        }

        infoDetail.innerHTML = `
            <h2>${data.title}</h2>
            <div class="info">
                <p><strong>作者：</strong>${data.author}</p>
                <p><strong>功能描述：</strong>${data.feature}</p>
            </div>
            <div class="steps">
                <p><strong>操作步骤：</strong></p>
                <ol>${data.steps.map(s => `<li>${s}</li>`).join("")}</ol>
            </div>
            ${imagesHTML}
            <a class="download-btn" href="${data.file}" download>⬇️ 下载</a>
        `;
    }
});
