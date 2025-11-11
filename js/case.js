document.addEventListener("DOMContentLoaded", () => {
    const caseList = document.getElementById("caseList");
    const caseDetail = document.getElementById("caseDetail");

    // 示例案例数据
    const cases = [
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
            // images: [
            //     { name: "键盘鼠标设置", src: "../游戏宏/GTA5/GTA5PVP宏/键盘鼠标设置.JPG" },
            //     { name: "汽车、摩托、船设置", src: "../游戏宏/GTA5/GTA5PVP宏/汽车、摩托、船设置.JPG" }
            // ]
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
            file: "../案例宏/点击-双击-长按/按键点击-双击-长按.rmt",
        },
        // 可继续添加更多案例
    ];
    // 渲染左侧按钮
    cases.forEach((item, index) => {
        const btn = document.createElement("div");
        btn.className = "case-button" + (index === 0 ? " active" : "");
        btn.textContent = item.title;
        btn.dataset.id = item.id;
        caseList.appendChild(btn);
    });

    // 默认显示第一个案例
    renderCase(cases[0]);

    // 点击切换案例
    caseList.addEventListener("click", (e) => {
        const target = e.target.closest(".case-button");
        if (!target) return;

        document.querySelectorAll(".case-button").forEach(b => b.classList.remove("active"));
        target.classList.add("active");

        const data = cases.find(c => c.id === target.dataset.id);
        renderCase(data);
    });

    // 渲染右侧详细信息
    function renderCase(data) {
        // 作者信息
        let authorHTML = "";
        if (data.originalAuthor) {
            authorHTML = `<p><strong>原作者：</strong>${data.originalAuthor}</p>
                          <p><strong>作者：</strong>${data.author}</p>`;
        } else {
            authorHTML = `<p><strong>作者：</strong>${data.author}</p>`;
        }

        // 图片信息
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

        caseDetail.innerHTML = `
            <h2>${data.title}</h2>
            <div class="info">
                ${authorHTML}
                <p><strong>功能简介：</strong>${data.feature}</p>
            </div>
            <div class="steps">
                <p><strong>操作说明：</strong></p>
                <ol>${data.steps.map(s => `<li>${s}</li>`).join("")}</ol>
            </div>
            ${imagesHTML}
            <a class="download-btn" href="${data.file}" download>⬇️ 下载该配置</a>
        `;
    }
});
