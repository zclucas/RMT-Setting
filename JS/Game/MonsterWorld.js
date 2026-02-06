document.addEventListener("DOMContentLoaded", () => {
    const infoList = document.getElementById("infoList");
    const infoDetail = document.getElementById("infoDetail");

    const datas = [
        {
            id: "姆q",
            title: "姆q",
            // originalAuthor: "若梦兔",
            author: "蓝白",
            feature: "蓬莱之旅的sp姆q搓元素，可以确保lv65前保底7贤者，8秒左右14贤，极限21贤",
            steps: [
                "!!!此配置搜索指令用到的图片路径异常，作者看到请完善后再上传，谢谢",
                "适用于魔兽争霸3rpg地图，蓬莱之旅的sp姆q搓元素",
                "可以兼容d状态，正常状态下，但是卡顿，掉帧会导致误差。",
                "可以确保lv65前保底7贤者，8秒左右14贤，极限21贤",
                "默认屏幕分辨率2160x1440，war3窗口大小为1680x1050。",
                "如果需要调整，可以在按键宏中设置搜索Pro的选取位置（需要手动设置7个）",
                "可以在工具设置变量监视器，默认启动为v",
            ],
            file: "../../游戏宏/魔兽争霸/姆q/姆q.rmt",
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
