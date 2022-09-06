const accordionList = document.getElementsByClassName("accordion");
const navListIds = ["introduction", "vsc", "github", "git", "practical", "evaluation", "subission"];
const goTopBtn = document.getElementById("goTopBtn");
const collapseBtn = document.getElementById("collapseBtn");
const headerBtn = document.getElementById("title");
const sideNavBtn = document.getElementById("sideNavBtn");
const navList = document.querySelector(".navList");
goTopBtn.addEventListener("click", () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});
collapseBtn.addEventListener("click", () => {
    closeAll();
});
headerBtn.addEventListener("click", () => {
    goTopBtn.click();
    closeAll();
});
console.log(sideNavBtn);
sideNavBtn.addEventListener("click", () => {
    if (sideNavBtn.firstElementChild.className != "navListRight") {
        console.log("isLeft");
        navList.style.left = "0rem";
        sideNavBtn.firstElementChild.classList.add("navListRight");
    }
    else {
        console.log("isRight");
        navList.style.left = "-17.6rem";
        sideNavBtn.firstElementChild.classList.remove("navListRight");
    }
});
for (let i = 0; i < accordionList.length; i++) {
    accordionList[i].addEventListener("click", function () {
        toggleArr(this.firstElementChild, this);
    });
}
navListIds.forEach(el => {
    const content = document.getElementById(`${el}`);
    const nav = document.getElementById(`${el}Nav`);
    nav.addEventListener('click', () => {
        closeAll();
        toggleArr(content.firstElementChild, content);
        setTimeout(() => {
            const pos = document.getElementById(el).offsetTop - 100;
            window.scrollTo({ top: pos, behavior: "smooth" });
        }, 350);
    });
});
function closeAll() {
    for (let i = 0; i < accordionList.length; i++) {
        accordionList[i].firstElementChild.className = "arrow right";
        accordionList[i].nextElementSibling.style.maxHeight = null;
    }
}
function toggleArr(arrow, content) {
    const parent = content.parentElement.parentElement;
    // content.classList.toggle("active");
    const panel = content.nextElementSibling;
    toggleSingleArr(arrow);
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    }
    else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        parent.style.maxHeight = parent.scrollHeight + panel.scrollHeight + "px";
    }
}
function toggleSingleArr(arrow) {
    if (arrow.className.includes('right', 1))
        arrow.className = "arrow down";
    else
        arrow.className = "arrow right";
}
//# sourceMappingURL=main.js.map