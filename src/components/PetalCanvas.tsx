import { useEffect, useRef } from "react";

/* Soft falling petals + little hearts that bloom wherever she taps/click, */
/* plus a faint sparkle trail that follows the cursor on desktop.          */

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  sway: number;
  swaySpeed: number;
  angle: number;
  spin: number;
  color: string;
  alpha: number;
}

interface Heart {
  x: number;
  y: number;
  vy: number;
  vx: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
  spin: number;
  angle: number;
}

interface Spark {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  size: number;
}

const PETAL_COLORS = ["#F0B9C9", "#D98CA0", "#F8E3E0", "#F1CFCA", "#F5D9DD"];
const HEART_COLORS = ["#D98CA0", "#B35C74", "#F0B9C9", "#C79A6B"];

function drawHeart(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  s: number,
  color: string,
  alpha: number,
  angle: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.scale(s, s);
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, 0.25);
  ctx.bezierCurveTo(-0.02, 0.12, -0.18, 0.02, -0.27, 0.12);
  ctx.bezierCurveTo(-0.38, 0.22, -0.36, 0.4, 0, 0.62);
  ctx.bezierCurveTo(0.36, 0.4, 0.38, 0.22, 0.27, 0.12);
  ctx.bezierCurveTo(0.18, 0.02, 0.02, 0.12, 0, 0.25);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawPetal(ctx: CanvasRenderingContext2D, p: Petal) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.angle);
  ctx.globalAlpha = p.alpha;
  ctx.fillStyle = p.color;
  const s = p.size;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(s * 0.9, -s * 0.55, 0, -s * 1.6);
  ctx.quadraticCurveTo(-s * 0.9, -s * 0.55, 0, 0);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export default function PetalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const isFine = window.matchMedia("(pointer: fine)").matches;
    const petalCount = Math.min(26, Math.floor(w / 55));

    const petals: Petal[] = Array.from({ length: petalCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: 5 + Math.random() * 7,
      speedY: 0.35 + Math.random() * 0.6,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.004 + Math.random() * 0.008,
      angle: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.02,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      alpha: 0.35 + Math.random() * 0.4,
    }));

    const hearts: Heart[] = [];
    const sparks: Spark[] = [];
    let lastSpark = 0;

    const spawnHearts = (x: number, y: number, n = 10) => {
      for (let i = 0; i < n; i++) {
        hearts.push({
          x: x + (Math.random() - 0.5) * 30,
          y: y + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 1.4,
          vy: -(1 + Math.random() * 1.8),
          size: 16 + Math.random() * 22,
          life: 0,
          maxLife: 90 + Math.random() * 50,
          color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
          spin: (Math.random() - 0.5) * 0.06,
          angle: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    const onDown = (e: PointerEvent) => spawnHearts(e.clientX, e.clientY, 12);
    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - lastSpark < 40) return;
      lastSpark = now;
      sparks.push({
        x: e.clientX,
        y: e.clientY,
        life: 0,
        maxLife: 34,
        size: 3 + Math.random() * 4,
      });
    };

    window.addEventListener("pointerdown", onDown);
    if (isFine) window.addEventListener("pointermove", onMove);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of petals) {
        p.y += p.speedY;
        p.sway += p.swaySpeed;
        p.x += Math.sin(p.sway) * 0.6;
        p.angle += p.spin;
        if (p.y > h + 30) {
          p.y = -30;
          p.x = Math.random() * w;
        }
        drawPetal(ctx, p);
      }

      for (let i = hearts.length - 1; i >= 0; i--) {
        const t = hearts[i];
        t.life++;
        t.x += t.vx + Math.sin(t.life * 0.06) * 0.5;
        t.y += t.vy;
        t.angle += t.spin;
        const fade =
          t.life < 14 ? t.life / 14 : 1 - (t.life - 14) / (t.maxLife - 14);
        drawHeart(ctx, t.x, t.y, t.size, t.color, Math.max(fade, 0) * 0.9, t.angle);
        if (t.life >= t.maxLife) hearts.splice(i, 1);
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life++;
        const fade = 1 - s.life / s.maxLife;
        drawHeart(ctx, s.x, s.y, s.size, "#D98CA0", fade * 0.55, 0);
        if (s.life >= s.maxLife) sparks.splice(i, 1);
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", onDown);
      if (isFine) window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-40"
      aria-hidden="true"
    />
  );
}
