document.addEventListener("DOMContentLoaded", () => {
    const infoList = document.getElementById("infoList");
    const infoDetail = document.getElementById("infoDetail");

    const datas = [
        {
            // id: "福建干部网络学院宏",
            // title: "福建干部网络学院学习平台\n自动挂课",
            // originalAuthor: "若梦兔",
            // author: "锕羽",
            // feature: "福建干部网络学院学习平台必修/选修/班次自动挂课",
            // steps: [
            //     "全屏打开网页，进入干部网络学习的必修/选修/班次课程界面，关闭所有广告弹窗避免遮挡",
            //     "当学习必修/选修课程时，需调整网页位置，使其显示出“前往（  ）页”与所有待学习课程的“未完成”字眼",
            //     "当学习班次课程时，需进入班级主页，打开必修/选修/专题课程列表，并显示出“全部课程”字眼",
            //     "打开软件，按“Ctrl+\”开始运行指令",
            //     "指令运行过程中需全程保持网页在前台全屏显示，不宜进行其他操作，若想中途退出可通过软件的“ALT + K”  终止所有宏 快捷键",
            //     "搜索指令执行范围：x(500,1920)；y(150,1080)，搜网页内字体不宜太小，避免软件无法准确搜索到字符"
            // ],
            // file: "../网课宏/福建网络学院学习平台/锕羽的配置.rmt",
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
            <a class="download-btn" href="${data.file}" download>⬇️ 下载</a>
        `;
    }
});
