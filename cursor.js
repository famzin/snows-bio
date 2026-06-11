const cursor = document.createElement("div");
cursor.id = "cursor";
document.body.appendChild(cursor);

// instant follow (no smoothing)
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// click feedback (slight pulse)
document.addEventListener("mousedown", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(0.7)";
});

document.addEventListener("mouseup", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1)";
});
