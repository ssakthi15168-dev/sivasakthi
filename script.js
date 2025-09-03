// 2. Add Dark Mode Toggle
const btn = document.createElement("button");
btn.innerText = "🌙 Dark Mode";
btn.style.marginLeft = "15px";
btn.style.padding = "5px 10px";
btn.style.cursor = "pointer";
document.querySelector("header").appendChild(btn);

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 3. Show Today’s Date in Footer
const date = document.createElement("p");
date.innerText = "📅 Today is " + new Date().toDateString();
document.querySelector("footer").appendChild(date);