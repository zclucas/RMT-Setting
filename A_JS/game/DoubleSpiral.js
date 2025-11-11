document.addEventListener("DOMContentLoaded", () => {
    const infoList = document.getElementById("infoList");
    const infoDetail = document.getElementById("infoDetail");

    const datas = [
        {
            id: "auto-get-debris",
            title: "自动挂机刷取密函碎片",
            // originalAuthor: "若梦兔",
            author: "千葉",
            feature: "自动挂机刷取密函碎片",
            steps: [
                "游戏界面设置：分辨率2560*1440",
                "使用水母和任意角色作为ai队友（水母范围最好250+，）带你好箱",
                "进入关卡后手动放弃挑战，进入到选择再次进行界面后按下宏触发按键即可（初始设置的是f12）",
                "注：猪妹皮肤可能会导致地图判断失败。",
                "本宏是通过判断地图中某特定物品判断地图，若出现地图判断失误可以自行选取明显物品作为判断对象。（默认判断地图为高处复活点，如果判断成功则执行高处复活点行为，失败为低处复活点行为）",
                "本宏通过识别轮次结束后的继续进行图标计算当前轮次，判断是否已经达到需要重开轮次",
                "默认重开轮次是15，如需修改可在：按键宏-根据计算判断是否达到轮次中的判断轮次是否达标指令，通过修改判断轮次数值更改判定轮次",
                "建议宏执行三到四小时后手动停止重新开启一次，以防出现递归报错",
            ],
            file: "../../游戏宏/二重螺旋/10级角色材料本刷密函碎",
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
