import { useMemo, useRef, useState } from "react";
import { Plus, Trash2, Eye, EyeOff, Move } from "lucide-react";

type Plot = { id: string; expr: string; color: string; visible: boolean; error?: string };

const COLORS = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444", "#06b6d4"];

// Compile an expression like "sin(x) + x^2" into a (x)=>number function.
function compile(expr: string): (x: number) => number {
  const src = expr
    .replace(/\^/g, "**")
    .replace(/\b(pi|PI)\b/g, "Math.PI")
    .replace(/\b(e|E)\b/g, "Math.E")
    .replace(/\b(sin|cos|tan|asin|acos|atan|sinh|cosh|tanh|sqrt|abs|log|log10|log2|exp|floor|ceil|round|sign|cbrt)\(/g, "Math.$1(");
  // eslint-disable-next-line no-new-func
  const fn = new Function("x", `"use strict"; return (${src});`) as (x: number) => number;
  // sanity check
  const t = fn(1);
  if (typeof t !== "number") throw new Error("not a number");
  return fn;
}

export function GraphingTool() {
  const [plots, setPlots] = useState<Plot[]>([
    { id: "1", expr: "x^2", color: COLORS[0], visible: true },
  ]);
  const [xMin, setXMin] = useState(-10);
  const [xMax, setXMax] = useState(10);
  const [yMin, setYMin] = useState(-10);
  const [yMax, setYMax] = useState(10);
  const [hover, setHover] = useState<{ x: number; y: number } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const W = 560;
  const H = 360;
  const PAD = 30;

  const toSvgX = (x: number) => PAD + ((x - xMin) / (xMax - xMin)) * (W - PAD * 2);
  const toSvgY = (y: number) => H - PAD - ((y - yMin) / (yMax - yMin)) * (H - PAD * 2);
  const fromSvgX = (px: number) => xMin + ((px - PAD) / (W - PAD * 2)) * (xMax - xMin);

  const compiled = useMemo(
    () =>
      plots.map((p) => {
        try {
          return { ...p, fn: compile(p.expr), error: undefined as string | undefined };
        } catch (e) {
          return { ...p, fn: null as null | ((x: number) => number), error: "Invalid expression" };
        }
      }),
    [plots],
  );

  const paths = useMemo(() => {
    const steps = 400;
    return compiled.map((p) => {
      if (!p.visible || !p.fn) return { id: p.id, d: "", color: p.color };
      const parts: string[] = [];
      let penDown = false;
      for (let i = 0; i <= steps; i++) {
        const x = xMin + (i / steps) * (xMax - xMin);
        let y: number;
        try {
          y = p.fn(x);
        } catch {
          y = NaN;
        }
        if (!Number.isFinite(y) || y < yMin - 1e6 || y > yMax + 1e6) {
          penDown = false;
          continue;
        }
        const sy = toSvgY(y);
        const sx = toSvgX(x);
        parts.push(`${penDown ? "L" : "M"}${sx.toFixed(1)},${sy.toFixed(1)}`);
        penDown = true;
      }
      return { id: p.id, d: parts.join(" "), color: p.color };
    });
  }, [compiled, xMin, xMax, yMin, yMax]);

  // Grid ticks
  const xTicks = useMemo(() => {
    const range = xMax - xMin;
    const step = niceStep(range);
    const ticks: number[] = [];
    for (let v = Math.ceil(xMin / step) * step; v <= xMax; v += step) ticks.push(+v.toFixed(6));
    return ticks;
  }, [xMin, xMax]);
  const yTicks = useMemo(() => {
    const range = yMax - yMin;
    const step = niceStep(range);
    const ticks: number[] = [];
    for (let v = Math.ceil(yMin / step) * step; v <= yMax; v += step) ticks.push(+v.toFixed(6));
    return ticks;
  }, [yMin, yMax]);

  function onMove(e: React.MouseEvent<SVGSVGElement>) {
    const rect = svgRef.current!.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * W;
    const x = fromSvgX(px);
    // Use first visible plot for y
    const p = compiled.find((pp) => pp.visible && pp.fn);
    if (!p || !p.fn) {
      setHover({ x, y: NaN });
      return;
    }
    setHover({ x, y: p.fn(x) });
  }

  function zoom(factor: number) {
    const cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2;
    const rx = (xMax - xMin) / 2 * factor, ry = (yMax - yMin) / 2 * factor;
    setXMin(+(cx - rx).toFixed(4)); setXMax(+(cx + rx).toFixed(4));
    setYMin(+(cy - ry).toFixed(4)); setYMax(+(cy + ry).toFixed(4));
  }
  function reset() {
    setXMin(-10); setXMax(10); setYMin(-10); setYMax(10);
  }

  function addPlot() {
    setPlots((ps) => [...ps, { id: crypto.randomUUID(), expr: "", color: COLORS[ps.length % COLORS.length], visible: true }]);
  }
  function updatePlot(id: string, patch: Partial<Plot>) {
    setPlots((ps) => ps.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  }
  function removePlot(id: string) {
    setPlots((ps) => ps.filter((p) => p.id !== id));
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="overflow-hidden rounded-xl border border-border bg-background">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="block w-full cursor-crosshair"
          onMouseMove={onMove}
          onMouseLeave={() => setHover(null)}
        >
          {/* Grid */}
          {xTicks.map((t) => (
            <line key={`vx${t}`} x1={toSvgX(t)} x2={toSvgX(t)} y1={PAD} y2={H - PAD} stroke="currentColor" className="text-border" strokeWidth={0.5} />
          ))}
          {yTicks.map((t) => (
            <line key={`hy${t}`} x1={PAD} x2={W - PAD} y1={toSvgY(t)} y2={toSvgY(t)} stroke="currentColor" className="text-border" strokeWidth={0.5} />
          ))}
          {/* Axes */}
          {xMin <= 0 && xMax >= 0 && (
            <line x1={toSvgX(0)} x2={toSvgX(0)} y1={PAD} y2={H - PAD} stroke="currentColor" className="text-muted-foreground" strokeWidth={1} />
          )}
          {yMin <= 0 && yMax >= 0 && (
            <line x1={PAD} x2={W - PAD} y1={toSvgY(0)} y2={toSvgY(0)} stroke="currentColor" className="text-muted-foreground" strokeWidth={1} />
          )}
          {/* Tick labels */}
          {xTicks.map((t) =>
            t === 0 ? null : (
              <text key={`xl${t}`} x={toSvgX(t)} y={H - PAD + 12} textAnchor="middle" className="fill-muted-foreground" fontSize={9}>{t}</text>
            ),
          )}
          {yTicks.map((t) =>
            t === 0 ? null : (
              <text key={`yl${t}`} x={PAD - 4} y={toSvgY(t) + 3} textAnchor="end" className="fill-muted-foreground" fontSize={9}>{t}</text>
            ),
          )}

          {/* Plots */}
          {paths.map((p) => (
            <path key={p.id} d={p.d} fill="none" stroke={p.color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          ))}

          {/* Hover crosshair */}
          {hover && Number.isFinite(hover.y) && hover.y >= yMin && hover.y <= yMax && (
            <>
              <line x1={toSvgX(hover.x)} x2={toSvgX(hover.x)} y1={PAD} y2={H - PAD} stroke="currentColor" className="text-primary" strokeDasharray="3 3" strokeWidth={0.75} />
              <line x1={PAD} x2={W - PAD} y1={toSvgY(hover.y)} y2={toSvgY(hover.y)} stroke="currentColor" className="text-primary" strokeDasharray="3 3" strokeWidth={0.75} />
              <circle cx={toSvgX(hover.x)} cy={toSvgY(hover.y)} r={4} className="fill-primary" />
              <rect x={toSvgX(hover.x) + 8} y={toSvgY(hover.y) - 22} width={98} height={18} rx={4} className="fill-foreground" />
              <text x={toSvgX(hover.x) + 12} y={toSvgY(hover.y) - 9} fontSize={10} className="fill-background" fontFamily="ui-monospace, monospace">
                ({hover.x.toFixed(2)}, {hover.y.toFixed(2)})
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Controls */}
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        <button onClick={() => zoom(0.7)} className="rounded-lg border border-border bg-background px-2.5 py-1 hover:border-primary/50">Zoom in</button>
        <button onClick={() => zoom(1.4)} className="rounded-lg border border-border bg-background px-2.5 py-1 hover:border-primary/50">Zoom out</button>
        <button onClick={reset} className="rounded-lg border border-border bg-background px-2.5 py-1 hover:border-primary/50">Reset</button>
        <span className="ml-2 inline-flex items-center gap-1 text-muted-foreground">
          <Move className="h-3 w-3" /> hover to trace
        </span>
      </div>

      {/* Function inputs */}
      <div className="mt-3 space-y-2">
        {plots.map((p) => (
          <div key={p.id} className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 shrink-0 rounded-full" style={{ background: p.color }} />
            <span className="font-mono text-xs text-muted-foreground">y =</span>
            <input
              value={p.expr}
              onChange={(e) => updatePlot(p.id, { expr: e.target.value })}
              placeholder="e.g. sin(x) + x^2"
              className="flex-1 rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
            />
            <button
              onClick={() => updatePlot(p.id, { visible: !p.visible })}
              className="rounded-lg border border-border bg-background p-1.5 text-muted-foreground hover:border-primary/50"
              aria-label={p.visible ? "Hide" : "Show"}
            >
              {p.visible ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
            </button>
            <button
              onClick={() => removePlot(p.id)}
              className="rounded-lg border border-border bg-background p-1.5 text-muted-foreground hover:border-destructive/60 hover:text-destructive"
              aria-label="Remove"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
        {compiled.some((p) => p.error) && (
          <p className="text-xs text-destructive">Check syntax — use ^ for powers, * for multiply, and functions like sin, cos, sqrt, log.</p>
        )}
        <button
          onClick={addPlot}
          className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-border bg-background px-3 py-1.5 text-xs text-muted-foreground hover:border-primary/50 hover:text-foreground"
        >
          <Plus className="h-3.5 w-3.5" /> Add function
        </button>
      </div>
    </div>
  );
}

function niceStep(range: number) {
  const rough = range / 10;
  const pow = Math.pow(10, Math.floor(Math.log10(rough)));
  const norm = rough / pow;
  const step = norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10;
  return step * pow;
}
