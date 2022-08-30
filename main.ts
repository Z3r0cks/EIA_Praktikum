const accordionList = document.getElementsByClassName("accordion");

for (let i: number = 0; i < accordionList.length; i++) {
   accordionList[i].addEventListener("click", function () {
      const arrow: HTMLSpanElement = this.firstElementChild
      const parent = this.parentElement.parentElement;
      this.classList.toggle("active");
      const panel: HTMLDivElement = this.nextElementSibling;
      if (panel.style.maxHeight) {
         toggleSingleArr(arrow);
         panel.style.maxHeight = null;
      } else {
         toggleSingleArr(arrow);
         panel.style.maxHeight = panel.scrollHeight + "px";
         parent.style.maxHeight = parent.scrollHeight + panel.scrollHeight + "px";
      }
   });
}

function toggleSingleArr(arrow: HTMLSpanElement) {
   if (arrow.className.includes('right', 1))
      arrow.className = "arrow down";
   else
      arrow.className = "arrow right";
}