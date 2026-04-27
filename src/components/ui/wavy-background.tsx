import { cn } from "../../lib/utils";
import { useEffect, useRef } from "react";

interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  blur?: number;
  speed?: string;
  waveOpacity?: number;
}

export function WavyBackground({
  children,
  className,
  containerClassName,
  colors = ["#ea580c", "#fb923c", "#f97316", "#ea580c", "#c2410c"],
  blur = 10,
  speed = "slow",
  waveOpacity = 0.3,
}: WavyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let nt = 0;
    const spd = speed === "fast" ? 0.05 : speed === "slow" ? 0.01 : 0.02;

    const drawWave = (n: number) => {
      nt += spd;
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = 50;
        ctx.strokeStyle = colors[i % colors.length];
        ctx.globalAlpha = waveOpacity;
        for (let x = 0; x < w; x += 5) {
          const y = Math.sin(x * 0.003 + i * 0.8 + nt) * 100 + h * 0.5 + i * 30;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      ctx.filter = `blur(${blur}px)`;
      ctx.fillStyle = "#09090b";
      ctx.globalAlpha = 1;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
      animationRef.current = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [blur, colors, speed, waveOpacity]);

  return (
    <div className={cn("relative flex flex-col items-center justify-center", containerClassName)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%" }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
