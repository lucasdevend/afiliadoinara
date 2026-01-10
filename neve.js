function criarNeve() {
  const neve = document.createElement("div");
  neve.classList.add("neve");

  neve.style.left = Math.random() * 100 + "vw";
  neve.style.animationDuration = 8 + Math.random() * 6 + "s";
  neve.style.opacity = 0.2 + Math.random() * 0.4;
  neve.style.transform = `scale(${0.4 + Math.random() * 0.6})`;

  document.body.appendChild(neve);

  setTimeout(() => {
    neve.remove();
  }, 15000);
}

/* bem fraco */
setInterval(criarNeve, 500);
