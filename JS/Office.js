document.addEventListener("DOMContentLoaded", () => {
    const infoList = document.getElementById("infoList");
    const infoDetail = document.getElementById("infoDetail");

    const datas = [
        {
            id: "福建干部网络学院宏",
            title: "仓库管理员更新库存",
            // originalAuthor: "若梦兔",
            author: "tou豆",
            feature: "根据提供的表格更新库存",
            steps: [
                "使用前需提前设置，设置完成后可以自动录入（各别步骤可根据需求更改）",
                "打开需要录入的表格和库存系统（勿打开多余的窗口）",
                "需要设置库存软件‘新增’鼠标坐标",
                "需要设置库存软件‘ID’鼠标坐标",
                "需要设置库存软件‘新增数量’鼠标坐标",
                "需要设置库存软件‘确定’鼠标坐标"
            ],
            file: "../办公宏/仓库管理员更新库存/仓库管理员更新库存.rmt",
            images: [
                { name: "配图1", src: "../办公宏/仓库管理员更新库存/配图1.png" },
                { name: "配图2", src: "../办公宏/仓库管理员更新库存/配图2.png" },
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
