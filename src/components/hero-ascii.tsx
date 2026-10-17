import React, { useEffect, useRef, useState } from "react";

interface HeroAsciiVisualProps {
  className?: string;
}

export function HeroAsciiVisual({ className }: HeroAsciiVisualProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Check reduced motion
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(motionMediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    motionMediaQuery.addEventListener("change", handleMotionChange);

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) {
      setHasError(true);
      return;
    }

    let animationFrameId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;

    // Interactive rotation coordinates
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0.3;
    let currentRotY = 0.4;
    let time = 0;

    // Characters sorted by visual density
    const GLYPHS = " ·:-=+*#%@";

    // 3D Point Generation: Toroidal / Spherical Topographic Wireframe
    interface Point3D {
      x: number;
      y: number;
      z: number;
      u: number;
      v: number;
    }

    const points: Point3D[] = [];
    const numLat = 32;
    const numLon = 44;

    for (let i = 0; i < numLat; i++) {
      const theta = (i / (numLat - 1)) * Math.PI; // 0 to PI
      for (let j = 0; j < numLon; j++) {
        const phi = (j / numLon) * Math.PI * 2; // 0 to 2PI
        // Spherical surface with subtle harmonic wave
        const r = 1 + 0.12 * Math.sin(3 * theta) * Math.cos(3 * phi);
        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.cos(theta);
        const z = r * Math.sin(theta) * Math.sin(phi);
        points.push({ x, y, z, u: i / numLat, v: j / numLon });
      }
    }

    // Set canvas dimensions
    const resize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (motionMediaQuery.matches) {
        renderFrame(0);
      }
    });
    resizeObserver.observe(container);

    // Visibility observer to pause animation when offscreen
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry.isIntersecting;
        if (isVisible && !motionMediaQuery.matches) {
          lastTimestamp = performance.now();
          animationFrameId = requestAnimationFrame(loop);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // Pointer move listener
    const handlePointerMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      targetRotY = nx * 0.8;
      targetRotX = -ny * 0.8;
    };

    container.addEventListener("mousemove", handlePointerMove);

    let lastTimestamp = performance.now();

    const renderFrame = (_dt: number) => {
      ctx.clearRect(0, 0, width, height);

      // Smoothly interpolate rotation
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      const baseRotY = motionMediaQuery.matches ? 0.4 : time * 0.4 + currentRotY;
      const baseRotX = motionMediaQuery.matches ? 0.35 : Math.sin(time * 0.2) * 0.2 + currentRotX;

      const cosY = Math.cos(baseRotY);
      const sinY = Math.sin(baseRotY);
      const cosX = Math.cos(baseRotX);
      const sinX = Math.sin(baseRotX);

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.42;

      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Draw subtle orbital rings background
      ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.15, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.7, 0, Math.PI * 2);
      ctx.stroke();

      // Hairline crosshairs
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.beginPath();
      ctx.moveTo(cx - radius * 1.25, cy);
      ctx.lineTo(cx + radius * 1.25, cy);
      ctx.moveTo(cx, cy - radius * 1.25);
      ctx.lineTo(cx, cy + radius * 1.25);
      ctx.stroke();

      // Transform and project points
      const sortedPoints: { px: number; py: number; depth: number; char: string; alpha: number }[] = [];

      for (let k = 0; k < points.length; k++) {
        const p = points[k];

        // Rotate Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;

        // Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective projection
        const cameraDist = 3.2;
        const fov = cameraDist / (cameraDist + z2);
        const px = cx + x1 * radius * fov;
        const py = cy + y2 * radius * fov;

        // Brightness / Depth mapping
        const normalZ = z2;
        const norm = (normalZ + 1.2) / 2.4;
        const clampedNorm = Math.max(0, Math.min(1, norm));

        const charIdx = Math.floor(clampedNorm * (GLYPHS.length - 1));
        const char = GLYPHS[charIdx];

        // Back-face points are dimmer
        const alpha = Math.max(0.12, Math.min(0.95, 0.15 + clampedNorm * 0.8));

        sortedPoints.push({
          px,
          py,
          depth: z2,
          char,
          alpha,
        });
      }

      // Sort points back-to-front for proper depth layering
      sortedPoints.sort((a, b) => a.depth - b.depth);

      for (let i = 0; i < sortedPoints.length; i++) {
        const pt = sortedPoints[i];
        if (pt.char === " ") continue;

        // Front highlights have a crisp white or slight warm glow
        if (pt.depth > 0.4) {
          ctx.fillStyle = `rgba(255, 255, 255, ${pt.alpha})`;
        } else {
          ctx.fillStyle = `rgba(200, 200, 200, ${pt.alpha * 0.75})`;
        }

        ctx.fillText(pt.char, pt.px, pt.py);
      }

      // Small technical coordinate stamp in the bottom left
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.font = '8px "JetBrains Mono", monospace';
      ctx.textAlign = "left";
      ctx.fillText(
        `GEN_SURFACE // PTS: ${points.length} // LAT: ${Math.round(currentRotX * 100)}° LON: ${Math.round(currentRotY * 100)}°`,
        16,
        height - 16
      );
    };

    const loop = (timestamp: number) => {
      if (!isVisible || motionMediaQuery.matches) return;
      const dt = Math.min((timestamp - lastTimestamp) / 1000, 0.1);
      lastTimestamp = timestamp;
      time += dt;

      renderFrame(dt);
      animationFrameId = requestAnimationFrame(loop);
    };

    // Initial render
    resize();
    renderFrame(0);

    if (!motionMediaQuery.matches) {
      animationFrameId = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      container.removeEventListener("mousemove", handlePointerMove);
      motionMediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  if (hasError) {
    return (
      <div className={`relative flex items-center justify-center border border-white/10 bg-ink-900/60 p-8 ${className}`}>
        <div className="font-mono text-xs text-white/50 text-center space-y-2">
          <div className="inline-block px-2 py-0.5 border border-white/20 text-white/70">ASCII ENGINE STATIC</div>
          <p>TOPOGRAPHIC MATRIX 1.0</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[380px] lg:min-h-[520px] flex items-center justify-center overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* Background micro grid */}
      <div className="absolute inset-0 bg-grid-tech opacity-60 pointer-events-none" />

      {/* Decorative corner brackets */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/30" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/30" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/30" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/30" />

      {/* Canvas */}
      <canvas ref={canvasRef} className="block w-full h-full" />

      {/* Static indicator for reduced motion */}
      {isReducedMotion && (
        <span className="sr-only">Static ASCII geometric sphere visualization</span>
      )}
    </div>
  );
}
