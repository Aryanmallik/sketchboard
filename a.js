const parent = document.querySelector(".grid");
const slider = document.querySelector(".slider");
const reset = document.querySelector(".reset");
const color = document.querySelector(".color");
let isdraw = false;
parent.ondragstart = function () {
  return false;
};
function start() {
  gridmake(slider.value);
  slider.addEventListener("mouseup", () => {
    const slider = document.querySelector(".slider");
    let size = slider.value;
    console.log(slider.value);
    gridmake(size);
  });

  function gridmake(size) {
    parent.innerHTML = "";
    for (let i = 0; i < size; i++) {
      let row = document.createElement("div");
      for (let j = 0; j < size; j++) {
        let col = document.createElement("div");
        col.setAttribute("class", "col");
        row.appendChild(col);
      }
      row.setAttribute("class", "row");
      parent.appendChild(row);
    }
    const col = document.querySelectorAll(".col");
    col.forEach((pixel) => {
      pixel.addEventListener("mousedown", () => {
        draw(pixel);
      });
      pixel.addEventListener("mouseover", (e) => {
        if (e.buttons === 1) {
          draw(pixel);
        }
      });
    });

    // col.forEach((pixel) => {
    //   pixel.addEventListener("mousedown", function (event) {
    //     if (event.buttons === 1) {
    //       isdraw = true;
    //       draw(pixel);
    //     }
    //   });
    //   pixel.addEventListener("mouseenter", function (event) {
    //     if (isdraw && event.buttons === 1) {
    //       draw(pixel);
    //     }
    //   });
    //   pixel.addEventListener("mouseup", () => {
    //     isdraw = false;
    //   });
    //   parent.addEventListener("mouseleave", () => {
    //     isdraw = false;
    //   });
    // });

    draw = (pixel) => {
      colorPick = color.value;
      pixel.setAttribute("style", `background-color:${colorPick}`);
    };
  }
  reset.addEventListener("mousedown", () => {
    const slider = document.querySelector(".slider");
    let size = slider.value;
    gridmake(size);
  });
}
start();
