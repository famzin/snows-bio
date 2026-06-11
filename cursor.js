const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// click feedback WITHOUT affecting position
document.addEventListener("mousedown", () => {
  cursor.style.boxShadow = "0 0 15px rgba(255,255,255,0.9), 0 0 30px rgba(255,255,255,0.5)";
  cursor.style.transform = "translate(-50%, -50%) scale(1.3)";
});

document.addEventListener("mouseup", () => {
  cursor.style.boxShadow = "0 0 10px rgba(255,255,255,0.6), 0 0 20px rgba(255,255,255,0.3)";
  cursor.style.transform = "translate(-50%, -50%) scale(1)";
});
