const toast = document.querySelector("#toast");
let toastTimer;

function notify(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

document.querySelector("#new-project")?.addEventListener("click", () => {
  notify("New project workspace coming soon!");
});

document.querySelector("#view-all")?.addEventListener("click", () => {
  notify("You're viewing all featured projects.");
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".main-nav a").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

document.querySelector(".notification")?.addEventListener("click", () => {
  notify("You're all caught up. No new notifications!");
});

document.querySelector(".profile .icon-button")?.addEventListener("click", () => {
  notify("Profile menu is under construction.");
});
