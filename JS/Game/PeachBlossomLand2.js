document.addEventListener("DOMContentLoaded", () => {
    const infoList = document.getElementById("infoList");
    const infoDetail = document.getElementById("infoDetail");

    const datas = [
        {
            id: "桃花源记2简单一条龙",
            title: "简单一条龙",
            // originalAuthor: "若梦兔",
            author: "仰望",
            feature: "实现简单的游戏重复任务自动运行",
            steps: [
                "当前宏配置为 人物角色75，需要5个角色（可自行调整）游戏分辨率（1024*768）窗口运行 屏幕分辨率（2560 ×1440, 180 Hz）",
                "启动游戏后在默认的显示位置开始运行，非战斗画面下全程不要动鼠标与游戏界面，不要切换软件遮挡游戏",
                "第一次运行此宏请先手动进入游戏选择游戏区服，宏将选择默认的区服进入，保存账号",
                "导入配置后 :（请看配图）",
                "进入软件“宏”界面 选择 备注【账号登陆】的子宏 点击 宏指令 点开 运行指令 选择游戏启动路径",
                "同页面下 点开 搜索*游戏进入 不断点开 +号 找到 输出*填写密码 点开后将里面的“请填写你的游戏密码”换成游戏密码",
                "根据人物等级 活动内容 插入或者删除对应的游戏模块",
                "个人对此宏只为自动清日常，解放双手，效率有限。大佬自行优化！！！",
            ],
            file: "../../游戏宏/桃花源记2/桃花源记2.rmt",
            images: [
                { name: "配图1", src: "../游戏宏/桃花源记2/" },
                { name: "汽车、摩托、船设置", src: "../游戏宏/GTA5/GTA5PVP宏/汽车、摩托、船设置.JPG" }
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

    document.body.addEventListener("click", e => {
        const img = e.target.closest(".image-item img");
        if (!img) return;

        const overlay = Object.assign(document.createElement("div"), {
            className: "img-overlay",
            innerHTML: `<img src="${img.src}" alt="">`
        });

        document.body.appendChild(overlay);
        overlay.addEventListener("click", () => overlay.remove());
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
            <a class="download-btn" href="${data.file}" download>⬇下载配置</a>
        `;
    }
});
