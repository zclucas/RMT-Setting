document.addEventListener("DOMContentLoaded", () => {
    const infoList = document.getElementById("infoList");
    const infoDetail = document.getElementById("infoDetail");

    const datas = [
        {
            id: "福建干部网络学院",
            title: "福建干部网络学院-自动挂课",
            // originalAuthor: "若梦兔",
            author: "锕羽",
            feature: "福建干部网络学院学习平台必修/选修/班次课程自动挂课",
            steps: [
                "因能力有限，暂时放弃实现“一键挂完所有课”的妄想，目前采用分类挂课的思路编写指令。",
                "屏幕与网页缩放均设为100%，最大化网页，关闭所有广告弹窗避免遮挡，进入干部网络学习的课程界面。",
                "当学习必修/选修课程时，需调整网页位置，显示出所有待学习课程的“未完成”字眼与底部的“前往（  ）页”。",
                "当学习班次课程时，需进入班级主页，打开待学习课程列表，并显示出“已获学分/学分”字眼。",
                "打开软件，按“Ctrl+\”开始运行指令。",
                "指令运行过程中需全程保持网页在前台最大化显示，不宜进行其他操作，若想中途退出可按“Esc”终止指令。",
                "搜索指令执行范围：x(500,1920)；y(150,1080)，搜网页内字体不宜太小，避免软件无法准确搜索到字符。",
                "子宏（干部学院-播放视频）仅识别观看进度为0.00%的视频；班次学习时仅识别学习已获学分为0的课程。",
                "运行一次指令最多可看2页、30门课程，可自行在指令中查找修改：",
                "最多可看页数a = 指令中“如果变量{干部学院-页码}<a”；",
                "最多可看课程数b = 按键宏（福建干部网络学院）的循环次数b。",
            ],
            file: "../网课宏/福建干部网络学院/福建干部网络学院.rmt",
            // images: [
            //     { name: "键盘鼠标设置", src: "../游戏宏/GTA5/GTA5PVP宏/键盘鼠标设置.JPG" },
            //     { name: "汽车、摩托、船设置", src: "../游戏宏/GTA5/GTA5PVP宏/汽车、摩托、船设置.JPG" }
            // ]
        },
        {
            id: "好医生继续医疗-自动挂课",
            title: "好医生继续医疗-自动挂课",
            author: "锕羽",
            feature: "好医生继续医疗教育学分自动挂课",
            steps: [
                "由于好医生平台对“未学完”和“已学完待考试”项目的显示未做任何区分，故只能将待学项目全部打开，依次学习。",
                "屏幕与网页缩放均设为100%，最大化网页，关闭所有广告弹窗避免遮挡。",
                "在同一浏览器中依次打开所有待学项目的视频播放页，打开软件，在最后一个标签页按“Ctrl+\”开始运行指令。",
                "指令运行过程中需全程保持网页在前台全屏显示，不宜进行其他操作，若想中途退出可按“Esc”终止指令。",
                "搜索指令执行范围：x(600,1500)；y(200,1000)，搜网页内字体不宜太小，避免软件无法准确搜索到字符。",
                "运行一次指令最多可看100节课程；每门项目最多可看13节课程；“识别签到”约持续5分钟。可自行在指令中查找修改：",
                "最多可看课程数a = 按键宏（好医生继续医疗教育）的循环次数b - 当前打开项目数c；。",
                "每门项目最多可看课程数d受“如果变量{好医生-目录}<e”影响，最多可看课程数d≈5+4*(e-1)；",
                "“识别签到”指令的持续时长f等于“搜索并移动至‘签到打卡’”的指令中的搜索次数g×间隔h。",
            ],

            file: "../网课宏/好医生继续医学教育/好医生继续医学教育.rmt",
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
