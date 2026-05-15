const el = document.getElementById("typeText");
const text = el.textContent.trim();
let i = 0;

function render() {
    const typed = text.slice(0, i);
    const untyped = text.slice(i);

    el.innerHTML = `<span class="typed">${typed}</span><span class="cursor"></span>${untyped}`;

    if (i <= text.length) {
      i++;
      setTimeout(render, 100); 
    } else {
        setTimeout(() => {
            i = 0;
            render();
        }, 1500);
    }
  }
render();

