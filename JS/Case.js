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
        {
            id: "fun-switch",
            title: "功能切换",
            // originalAuthor: "若梦兔",
            author: "若梦兔",
            feature: "通过Esc按键，控制触发键K，触发不同的效果",
            steps: [
                "1. 默认效果：按下K，输出10次A",
                "2. 按下Esc 切换配置效果，此时按下K，输出10次B"
            ],
            file: "../案例宏/功能切换/功能切换.rmt",
            images: [
                { name: "配图1", src: "../案例宏/功能切换/图1.png" },
                { name: "配图2", src: "../案例宏/功能切换/图2.png" },
                { name: "配图3", src: "../案例宏/功能切换/图3.png"  }
            ]
        },
        {
            id: "mouse-back",
            title: "鼠标复位",
            author: "若梦兔",
            feature: "宏操作结束后使鼠标回到开始位置",
            steps: [
                "按键k触发后，指令执行完毕后，鼠标会回到触发时的位置",
            ],
            file: "../案例宏/鼠标复位/鼠标复位.rmt"
        },
        {
            id: "combo-key",
            title: "自定义组合按键触发",
            author: "若梦兔",
            feature: "自定义任意组合按键触发宏",
            steps: ["同时按下空格+A触发宏"],
            file: "../案例宏/自定义组合按键/自定义组合按键.rmt",
        },
        {
            id: "multiple-trigger",
            title: "点击-双击-长按",
            author: "若梦兔",
            feature: "一个按键通过点击-双击-长按触发不同的效果",
            steps: [
                "点击时：触发点击事件，执行A",
                "双击时：触发双击事件，执行B",
                "长按时：触发长按事件，执行C",
            ],
            file: "../案例宏/按键点击-双击-长按/按键点击-双击-长按.rmt",
            images: [
                { name: "配图1", src: "../案例宏/按键点击-双击-长按/图1.png" },
                { name: "配图2", src: "../案例宏/按键点击-双击-长按/图2.png" },
                { name: "配图3", src: "../案例宏/按键点击-双击-长按/图3.png" },
                { name: "配图4", src: "../案例宏/按键点击-双击-长按/图4.png" },
                { name: "配图5", src: "../案例宏/按键点击-双击-长按/图5.png" },
                { name: "配图6", src: "../案例宏/按键点击-双击-长按/图6.png" },
                { name: "配图7", src: "../案例宏/按键点击-双击-长按/图7.png" },
                { name: "配图8", src: "../案例宏/按键点击-双击-长按/图8.png" },
                { name: "配图9", src: "../案例宏/按键点击-双击-长按/图9.png" },
                { name: "配图10", src: "../案例宏/按键点击-双击-长按/图10.png" },
                { name: "配图11", src: "../案例宏/按键点击-双击-长按/图11.png" },
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
