// Short, one-off effects: stadium floodlights and a rolling ball when the site opens, cards sliding in and
// totals counting up on each page, club-colour confetti on club pages, and a flip-board price in the player popup.
// app.js calls these through window.MVFx. Everything is skipped when the device asks for reduced motion.
(function () {
  "use strict";

  const calm = () => !Element.prototype.animate
    || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const easeOut = (x) => 1 - Math.pow(1 - x, 3);
  const RISE = "cubic-bezier(.2, .7, .2, 1)";
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Floodlights: the page starts dim and the two corner lights flicker on ---------- */

  function floodlights() {
    if (calm()) return;
    const el = document.createElement("div");
    el.className = "fx-lights";
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = '<i class="fx-dim"></i><i class="fx-lamp fx-lamp-l"></i><i class="fx-lamp fx-lamp-r"></i>';
    document.body.appendChild(el);
    el.querySelector(".fx-dim").animate(
      [{ opacity: 1 }, { opacity: 1, offset: 0.3 }, { opacity: 0 }],
      { duration: 1400, easing: "ease-out", fill: "forwards" }
    );
    el.querySelectorAll(".fx-lamp").forEach((lamp, i) => lamp.animate(
      // A real floodlight flickers before it settles.
      [{ opacity: 0 }, { opacity: 0.9, offset: 0.08 }, { opacity: 0.15, offset: 0.14 }, { opacity: 1, offset: 0.24 }, { opacity: 0.8, offset: 0.55 }, { opacity: 0 }],
      { duration: 1700, delay: 100 + i * 160, easing: "ease-out", fill: "both" }
    ));
    setTimeout(() => el.remove(), 2200);
  }

  /* ---------- A football rolls in from the right and stops beside the logo ---------- */

  const BALL = '<svg viewBox="0 0 64 64" aria-hidden="true">' +
    '<defs><clipPath id="fx-ball-clip"><circle cx="32" cy="32" r="29"/></clipPath></defs>' +
    '<circle cx="32" cy="32" r="29" fill="#fff"/>' +
    '<g clip-path="url(#fx-ball-clip)" fill="#111" stroke="#111" stroke-width="2" stroke-linejoin="round">' +
    '<path d="M32 21l10.5 7.6-4 12.4h-13l-4-12.4z"/>' +
    '<path d="M32 21V9M42.5 28.6l11.4-3.7M38.5 41l7 9.7M25.5 41l-7 9.7M21.5 28.6l-11.4-3.7" fill="none"/>' +
    '<path d="M25 3l7 5 7-5-2-6H27zM55 15l-1.5 9.5 8 4.5 4-8-4-8zM9 15l1.5 9.5-8 4.5-4-8 4-8zM50 63l-5-11 9-5 8 9-3 9zM14 63l5-11-9-5-8 9 3 9z"/>' +
    '</g><circle cx="32" cy="32" r="29" fill="none" stroke="#111" stroke-width="2.5"/></svg>';

  function rollingBall() {
    if (calm()) return;
    const name = document.querySelector(".brand-name");
    if (!name) return;
    // Measure the text itself: the name's box can be as wide as the tagline under it.
    const range = document.createRange();
    range.selectNodeContents(name);
    const r = range.getBoundingClientRect();
    const size = 22;
    const ball = document.createElement("span");
    ball.className = "fx-ball";
    ball.innerHTML = BALL;
    ball.style.left = r.right + 10 + "px";
    ball.style.top = r.top + window.scrollY + r.height / 2 - size / 2 + "px";
    document.body.appendChild(ball);
    const distance = Math.max(200, window.innerWidth - r.right);
    const degrees = (distance / (Math.PI * size)) * 360;
    const roll = ball.animate(
      [{ transform: `translateX(${distance}px) rotate(${degrees}deg)` }, { transform: "none" }],
      { duration: 1700, delay: 250, easing: "cubic-bezier(.12, .62, .3, 1)", fill: "both" }
    );
    roll.finished
      .then(() => ball.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, delay: 1600, fill: "forwards" }).finished)
      .catch(() => {})
      .then(() => ball.remove());
  }

  /* ---------- Page blocks slide up one after another ---------- */

  // The blocks of a page in reading order; club cards and side-by-side panels each count on their own.
  function blocks(root) {
    const out = [];
    const walk = (el) => {
      for (const ch of el.children) {
        if (ch.matches(".club-page, .split, .club-grid")) walk(ch);
        else if (ch.querySelector(":scope > .club-grid")) walk(ch);
        else out.push(ch);
      }
    };
    walk(root);
    return out;
  }

  function enter(root) {
    if (calm() || !root) return;
    blocks(root).forEach((el, i) => el.animate(
      [{ opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "none" }],
      { duration: 520, delay: Math.min(i, 12) * 70, easing: RISE, fill: "backwards" }
    ));
    // List rows inside the panels follow a moment later.
    root.querySelectorAll(".panel .top").forEach((list) => {
      [...list.children].forEach((li, j) => li.animate(
        [{ opacity: 0, transform: "translateX(-10px)" }, { opacity: 1, transform: "none" }],
        { duration: 380, delay: 320 + j * 40, easing: RISE, fill: "backwards" }
      ));
    });
    root.querySelectorAll(".tot-track i").forEach((bar, i) => bar.animate(
      [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
      { duration: 900, delay: 300 + i * 90, easing: RISE, fill: "backwards" }
    ));
  }

  /* ---------- Money totals count up from zero like a scoreboard ---------- */

  function countUp(root, format) {
    if (calm() || !root) return;
    const items = [...root.querySelectorAll("[data-count]")]
      .map((el) => ({ el, to: Number(el.dataset.count), text: el.textContent }))
      .filter((x) => x.to > 0);
    if (!items.length) return;
    const delay = 200;
    const duration = 1300;
    const start = performance.now() + delay;
    for (const x of items) x.el.textContent = format(0);
    const frame = (now) => {
      const p = Math.min(1, Math.max(0, (now - start) / duration));
      for (const x of items) {
        if (!x.el.isConnected) continue;
        x.el.textContent = p < 1 ? format(Math.round(x.to * easeOut(p) * 10) / 10) : x.text;
      }
      if (p < 1 && items.some((x) => x.el.isConnected)) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  /* ---------- Confetti in the club's colours ---------- */

  function confetti(colors, from) {
    if (calm()) return;
    const old = document.querySelector(".fx-confetti");
    if (old) old.remove();
    const canvas = document.createElement("canvas");
    canvas.className = "fx-confetti";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    const W = window.innerWidth;
    const H = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    // Burst from the club badge when it's on screen, otherwise from the top middle.
    const r = from && from.getBoundingClientRect();
    const ox = r && r.bottom > 0 ? r.left + r.width / 2 : W / 2;
    const oy = r && r.bottom > 0 ? r.top + r.height / 2 : 80;
    const count = W < 600 ? 90 : 150;
    const bits = Array.from({ length: count }, (_, i) => {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.1;
      const speed = 5 + Math.random() * 9;
      return {
        x: ox, y: oy,
        vx: Math.cos(angle) * speed * 1.2,
        vy: Math.sin(angle) * speed,
        w: 6 + Math.random() * 5,
        h: 9 + Math.random() * 7,
        rot: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.3,
        flip: Math.random() * Math.PI,
        flipSpeed: 0.08 + Math.random() * 0.12,
        color: colors[i % colors.length]
      };
    });

    const start = performance.now();
    function frame(now) {
      ctx.clearRect(0, 0, W, H);
      let alive = false;
      for (const b of bits) {
        b.vx *= 0.985;
        b.vy = b.vy * 0.985 + 0.22;
        b.x += b.vx + Math.sin(b.flip) * 0.6;
        b.y += b.vy;
        b.rot += b.spin;
        b.flip += b.flipSpeed;
        if (b.y > H + 20) continue;
        alive = true;
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(b.rot);
        ctx.scale(1, Math.cos(b.flip));
        ctx.fillStyle = b.color;
        ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h);
        ctx.restore();
      }
      if (alive && now - start < 4500 && canvas.isConnected) requestAnimationFrame(frame);
      else canvas.remove();
    }
    requestAnimationFrame(frame);
    setTimeout(() => canvas.remove(), 5500);
  }

  /* ---------- Flip-board price: digits spin, then each character flips into place ---------- */

  function flip(el) {
    if (calm() || !el) return;
    const text = el.textContent;
    if (!text.trim()) return;
    const chars = [...text];
    el.innerHTML = `<span class="fx-sr">${esc(text)}</span><span class="fx-flip" aria-hidden="true">${chars
      .map((c) => `<span class="fx-ch">${c === " " || c === " " ? "&nbsp;" : esc(c)}</span>`).join("")}</span>`;
    const t0 = performance.now();
    let last = 0;
    el.querySelectorAll(".fx-ch").forEach((cell, i) => {
      const real = chars[i];
      const settle = 120 + i * 70;
      last = settle;
      const digit = /\d/.test(real);
      if (digit) {
        cell.textContent = String(Math.floor(Math.random() * 10));
        const timer = setInterval(() => {
          if (!cell.isConnected || performance.now() - t0 >= settle) {
            clearInterval(timer);
            cell.textContent = real;
          } else {
            cell.textContent = String(Math.floor(Math.random() * 10));
          }
        }, 55);
      }
      cell.animate(
        [{ transform: "rotateX(90deg)", opacity: 0.3 }, { transform: "rotateX(-18deg)", opacity: 1, offset: 0.7 }, { transform: "none", opacity: 1 }],
        // Digits stay visible while they spin; the rest appears only when it flips in.
        { duration: 320, delay: settle, easing: "ease-out", fill: digit ? "none" : "backwards" }
      );
    });
    setTimeout(() => {
      if (el.isConnected && el.querySelector(".fx-flip")) el.textContent = text;
    }, last + 400);
  }

  window.MVFx = { floodlights, rollingBall, enter, countUp, confetti, flip };
})();
