document.addEventListener("DOMContentLoaded", () => {
    const infoList = document.getElementById("infoList");
    const infoDetail = document.getElementById("infoDetail");

    const datas = [
        {
            id: "鼠标连点",
            title: "鼠标左键连点",
            // originalAuthor: "若梦兔",
            author: "热心群友",
            feature: "鼠标左键连点",
            steps: [
                "按键盘 X 开启鼠标左键连点  当前配置两次鼠标点击间隔 1秒（1000毫秒）可自行更改 ",
                "初学此软件者看配图 按x键开启关闭 ALT+K 结束运行 ALT+i 暂停运行 ",
                "部分场景下鼠标右键RMT软件 选择管理员模式运行",
            ],
            file: "../通用宏/鼠标连点/鼠标左键连点.rmt",
            images: [
                { name: "配图1", src: "../通用宏/鼠标连点/配图1.png" },
                { name: "配图2", src: "../通用宏/鼠标连点/配图2.png" }
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
            <a class="download-btn" href="${data.file}" download>⬇️ 下载</a>
        `;
    }
});
