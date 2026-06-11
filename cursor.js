body {
  cursor: none;
}

#cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 10px rgba(255,255,255,0.6),
              0 0 20px rgba(255,255,255,0.3);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 99999;
  transition: transform 0.12s ease, box-shadow 0.12s ease, opacity 0.2s ease;
}
