const accordionList: HTMLCollection = document.getElementsByClassName("accordion");
const navListIds: string[] = ["motivation", "introduction", "teamwork", "files", "exam", "vsc", "github", "git", "practical", "evaluation", "subission"];
const goTopBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("goTopBtn");
const collapseBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("collapseBtn");
const headerBtn: HTMLAnchorElement = <HTMLAnchorElement>document.getElementById("title");
const sideNavBtn: HTMLDivElement = <HTMLDivElement>document.getElementById("sideNavBtn");
const navList: HTMLDivElement = <HTMLDivElement>document.querySelector(".navList");

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

sideNavBtn.addEventListener("click", () => {
   if (sideNavBtn.firstElementChild.className != "navListRight") {
      navList.style.left = "0rem";
      sideNavBtn.firstElementChild.classList.add("navListRight");
   } else {
      if (window.matchMedia("(max-width: 992px)").matches)
         navList.style.left = "-10.3rem";
      else
         navList.style.left = "-13.1rem";

      sideNavBtn.firstElementChild.classList.remove("navListRight");
   }
});

for (let i: number = 0; i < accordionList.length; i++) {
   accordionList[i].addEventListener("click", function (): void {
      toggleArr(this.firstElementChild, this);
   });
}

navListIds.forEach(el => {
   const content: HTMLHeadElement = document.getElementById(`${el}`);
   const nav: HTMLHeadElement = document.getElementById(`${el}Nav`);
   nav.addEventListener('click', () => {
      closeAll();
      toggleArr(content.firstElementChild as HTMLSpanElement, content);
      setTimeout(() => {
         const pos: number = document.getElementById(el).offsetTop - 100;
         window.scrollTo({ top: pos, behavior: "smooth" });
      }, 350);
   });
});

function closeAll(): void {
   for (let i: number = 0; i < accordionList.length; i++) {
      (accordionList[i].firstElementChild as HTMLSpanElement).className = "arrow right";
      (accordionList[i].nextElementSibling as HTMLDivElement).style.maxHeight = null;
   }
}

function toggleArr(arrow: HTMLSpanElement, content: HTMLHeadElement): void {
   const parent: HTMLElement = content.parentElement.parentElement;
   // content.classList.toggle("active");
   const panel: HTMLDivElement = <HTMLDivElement>content.nextElementSibling;
   toggleSingleArr(arrow);
   if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
   } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      parent.style.maxHeight = parent.scrollHeight + panel.scrollHeight + "px";
   }
}

function toggleSingleArr(arrow: HTMLSpanElement): void {
   if (arrow.className.includes('right', 1))
      arrow.className = "arrow down";
   else
      arrow.className = "arrow right";
}