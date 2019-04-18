const main = document.querySelector("canvas#main");
if (main.clientWidth >= main.clientHeight) {
  console.log("running");
}

window.addEventListener("resize", () => {
  const main = document.querySelector("canvas#main");
  if (main.clientWidth < main.clientHeight) {
    alert("请让您的屏幕保持水平");
    console.log("suspended");
  } else {
    console.log("running");
  }
});

function* range(min, max) {
  for (let i = min; i <= max; i++) {
    yield i;
  }
}