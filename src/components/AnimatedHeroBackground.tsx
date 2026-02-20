import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const AnimatedHeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    let width = 0;
    let height = 0;

    const resize = () => {
      const { width: w, height: h } = canvas.getBoundingClientRect();
      width = Math.floor(w * dpr);
      height = Math.floor(h * dpr);
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    const particles: Particle[] = [];
    const count = Math.floor(Math.min(60, (width * height) / (1200 * 1200) * 60) + 30);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: rand(-0.15, 0.15) * dpr,
        vy: rand(-0.15, 0.15) * dpr,
        r: rand(1, 2.2) * dpr,
      });
    }

    const paletteA = "rgba(0, 255, 200, 0.35)";
    const paletteB = "rgba(60, 140, 255, 0.28)";
    const lineColor = "rgba(255, 255, 255, 0.15)";

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, paletteA);
      grad.addColorStop(1, paletteB);

      ctx.fillStyle = grad;

      for (let p of particles) {
        p.x += p.vx + Math.cos((p.y + t * 0.0005) * 0.002) * 0.05 * dpr;
        p.y += p.vy + Math.sin((p.x + t * 0.0005) * 0.002) * 0.05 * dpr;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.strokeStyle = lineColor;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110 * dpr) {
            ctx.globalAlpha = Math.max(0, 1 - dist / (110 * dpr)) * 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    let start = performance.now();
    const loop = (now: number) => {
      draw(now - start);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    const onResize = () => {
      resize();
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      <canvas ref={canvasRef} className="w-full h-full opacity-70 mix-blend-overlay" />
    </div>
  );
};

export default AnimatedHeroBackground;
