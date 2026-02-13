const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
  // Move the button absolutely within the viewport, never causing scrollbars
  noBtn.style.position = 'fixed';
  const buffer = 10;
  const maxX = window.innerWidth - noBtn.offsetWidth - buffer;
  const maxY = window.innerHeight - noBtn.offsetHeight - buffer;
  const x = Math.max(buffer, Math.random() * maxX);
  const y = Math.max(buffer, Math.random() * maxY);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <button id="closeBtn" style="position:fixed;top:18px;right:18px;font-size:22px;background:#ff6b81;color:white;border:none;border-radius:50%;width:40px;height:40px;cursor:pointer;z-index:1000;">✕</button>
    <div class="love-screen">
      <div class="love-card">
        <img src="sticker2.png" alt="Love Sticker">
        <h2>I thought so, You genuinely <br> wanted to do it.❤️</h2>
      </div>
    </div>
  `;
  setTimeout(function() {
    const closeBtn = document.getElementById('closeBtn');
    if (closeBtn) {
      closeBtn.onclick = function() {
        // Just redirect to mainweb.html, do NOT clear session
        try {
          window.location.replace('cj.html');
        } catch(e) {
          window.location.href = 'cj.html';
        }
      };
    }
  }, 0);
});
