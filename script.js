document.addEventListener("wheel", function(event) {
    let pages = document.querySelectorAll(".page");
    let currentPageIndex = [...pages].findIndex(page => !page.classList.contains("hidden"));
    
    if (event.deltaY > 0 && currentPageIndex < pages.length - 1) {
        pages[currentPageIndex].classList.add("hidden");
        pages[currentPageIndex + 1].classList.remove("hidden");
    } else if (event.deltaY < 0 && currentPageIndex > 0) {
        pages[currentPageIndex].classList.add("hidden");
        pages[currentPageIndex - 1].classList.remove("hidden");
    }
});
