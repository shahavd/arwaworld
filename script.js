document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("background-music");
    
    if (audio) {
        audio.volume = 0.5; // تحديد مستوى الصوت
        audio.play().catch(() => {
            // بعض المتصفحات تمنع التشغيل التلقائي، ننتظر أي تفاعل
            document.addEventListener("click", () => audio.play(), { once: true });
        });
    }
});

document.addEventListener("wheel", (function () {
    let isScrolling = false;
    let delay = 500;

    return function (event) {
        if (isScrolling) return;

        let pages = document.querySelectorAll(".page");
        let currentPageIndex = [...pages].findIndex(page => !page.classList.contains("hidden"));

        if (event.deltaY > 0 && currentPageIndex < pages.length - 1) {
            pages[currentPageIndex].classList.add("hidden");
            pages[currentPageIndex + 1].classList.remove("hidden");
        } else if (event.deltaY < 0 && currentPageIndex > 0) {
            pages[currentPageIndex].classList.add("hidden");
            pages[currentPageIndex - 1].classList.remove("hidden");
        }

        isScrolling = true;
        setTimeout(() => isScrolling = false, delay);
    };
})());
