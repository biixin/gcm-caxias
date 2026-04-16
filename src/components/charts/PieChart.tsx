import { useState } from 'react';
import type { PieDataSlice } from '../../types';

interface Props {
  data: PieDataSlice[];
  title: string;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function buildArcPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number, innerR: number) {
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);
  const innerStart = polarToCartesian(cx, cy, innerR, startAngle);
  const innerEnd = polarToCartesian(cx, cy, innerR, endAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return [
    `M ${start.x} ${start.y}`,
    `A ${r} ${r} 0 ${large} 1 ${end.x} ${end.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${innerR} ${innerR} 0 ${large} 0 ${innerStart.x} ${innerStart.y}`,
    'Z',
  ].join(' ');
}

export default function PieChart({ data, title }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const total = data.reduce((sum, d) => sum + d.value, 0);
  const cx = 120;
  const cy = 120;
  const radius = 90;
  const innerRadius = 52;

  let cumulative = 0;
  const slices = data.map((d) => {
    const startAngle = (cumulative / total) * 360;
    cumulative += d.value;
    const endAngle = (cumulative / total) * 360;
    return { ...d, startAngle, endAngle, percentage: ((d.value / total) * 100).toFixed(1) };
  });

  return (
    <div className="w-full">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4 text-center">
        {title}
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
        <svg viewBox="0 0 240 240" className="w-48 h-48 flex-shrink-0">
          {slices.map((slice, i) => {
            const isHovered = hoveredIndex === i;
            const midAngle = (slice.startAngle + slice.endAngle) / 2;
            const offset = isHovered ? 8 : 0;
            const dx = offset * Math.cos(((midAngle - 90) * Math.PI) / 180);
            const dy = offset * Math.sin(((midAngle - 90) * Math.PI) / 180);
            return (
              <path
                key={i}
                d={buildArcPath(cx + dx, cy + dy, radius, slice.startAngle, slice.endAngle, innerRadius)}
                fill={slice.color}
                stroke="#fff"
                strokeWidth="2"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ cursor: 'pointer', transition: 'transform 0.15s' }}
                opacity={hoveredIndex !== null && !isHovered ? 0.6 : 1}
              />
            );
          })}
          {/* Center label */}
          <text x={cx} y={cy - 8} textAnchor="middle" fontSize="13" fill="#0d2137" fontWeight="700">
            {hoveredIndex !== null ? slices[hoveredIndex].percentage + '%' : total}
          </text>
          <text x={cx} y={cy + 10} textAnchor="middle" fontSize="9" fill="#64748b">
            {hoveredIndex !== null ? slices[hoveredIndex].label : 'Total'}
          </text>
        </svg>

        {/* Legend */}
        <div className="flex flex-col gap-2.5">
          {slices.map((slice, i) => (
            <div
              key={i}
              className="flex items-center gap-3 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span
                className="flex-shrink-0 w-3 h-3 rounded-sm"
                style={{
                  backgroundColor: slice.color,
                  opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.4 : 1,
                  transition: 'opacity 0.15s',
                }}
              />
              <span className={`text-sm transition-colors ${hoveredIndex === i ? 'text-slate-900 font-semibold' : 'text-slate-600'}`}>
                {slice.label}
              </span>
              <span className={`ml-auto text-sm font-bold ${hoveredIndex === i ? 'text-blue-700' : 'text-slate-500'}`}>
                {slice.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
