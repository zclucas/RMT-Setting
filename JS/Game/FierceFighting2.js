document.addEventListener("DOMContentLoaded", () => {
    const infoList = document.getElementById("infoList");
    const infoDetail = document.getElementById("infoDetail");

    const datas = [
        {
            id: "野外混伤吟游术士",
            title: "野外混伤吟游术士",
            // originalAuthor: "若梦兔",
            author: "蛋大王",
            feature: "野外混事件解放双手，装备天界站桩输出15k，自动破蔑视，低于65%血自动使用治疗技能",
            steps: [
                "野外最硬幻术师，单挑传奇不是梦，99%的稳固覆盖，75%以上保护覆盖，提供舒服站桩体验，但傻逼设计师设计的粉碎技能手贼短，以及法杖2技能的强制后移导致还是要手动操作移动人物位置，有些难受",
                "武器技能按键默认从左到右e，1,2,3,4，可按自己键位进行调整",
                "通用技能设置（从左到右）：次子传说（G）、魂守传说（Z）、噬心传说（C）、支配文章（R）、尊后传说（T）；括号内快捷键可自行按照自己熟悉键位在宏内自行调整，但不要改变技能顺序。",
                "粉碎技能按键默认从左到右Q，F1, F2, F3, F4，可按自己键位进行调整",
                "支配文章参与破蔑，粉碎技能与法杖5已经在循环中",
                "bd：混沌233，幻象132，吟游121",
                "一定要把设置里的战斗 / 移动的使定点指向技能对准当前目标、自动选择目标的选项勾选",
                "双法杖，单法杖均可"
            ],
            file: "../../游戏宏/激战2野外混伤吟游术士/激战2野外混伤吟游术士.rmt",
            // images: [
            //     { name: "键盘鼠标设置", src: "../游戏宏/GTA5/GTA5PVP宏/键盘鼠标设置.JPG" },
            //     { name: "汽车、摩托、船设置", src: "../游戏宏/GTA5/GTA5PVP宏/汽车、摩托、船设置.JPG" }
            // ]
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
