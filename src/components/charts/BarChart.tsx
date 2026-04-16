import { useState } from 'react';
import type { BarDataPoint } from '../../types';

interface Props {
  data: BarDataPoint[];
  title: string;
  yAxisLabel?: string;
}

export default function BarChart({ data, title, yAxisLabel = 'Ocorrências' }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const maxValue = Math.max(...data.map((d) => d.value));
  const svgWidth = 600;
  const svgHeight = 320;
  const paddingLeft = 50;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 80;
  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = svgHeight - paddingTop - paddingBottom;
  const barWidth = (chartWidth / data.length) * 0.6;
  const barGap = chartWidth / data.length;
  const gridLines = 5;

  const getBarHeight = (value: number) => (value / (maxValue * 1.1)) * chartHeight;
  const getBarX = (i: number) => paddingLeft + i * barGap + (barGap - barWidth) / 2;
  const getBarY = (value: number) => paddingTop + chartHeight - getBarHeight(value);

  return (
    <div className="w-full">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4 text-center">
        {title}
      </p>
      <div className="relative w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full"
          style={{ minWidth: 360 }}
        >
          {/* Grid lines */}
          {Array.from({ length: gridLines + 1 }).map((_, i) => {
            const y = paddingTop + (chartHeight / gridLines) * i;
            const val = Math.round((maxValue * 1.1 * (gridLines - i)) / gridLines);
            return (
              <g key={i}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={svgWidth - paddingRight}
                  y2={y}
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  strokeDasharray={i === gridLines ? '0' : '4 4'}
                />
                <text x={paddingLeft - 6} y={y + 4} textAnchor="end" fontSize="10" fill="#94a3b8">
                  {val}
                </text>
              </g>
            );
          })}

          {/* Y axis label */}
          <text
            x={12}
            y={paddingTop + chartHeight / 2}
            textAnchor="middle"
            fontSize="10"
            fill="#64748b"
            transform={`rotate(-90, 12, ${paddingTop + chartHeight / 2})`}
          >
            {yAxisLabel}
          </text>

          {/* Bars */}
          {data.map((d, i) => {
            const barH = getBarHeight(d.value);
            const bx = getBarX(i);
            const by = getBarY(d.value);
            const isHovered = hoveredIndex === i;

            return (
              <g
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ cursor: 'pointer' }}
              >
                <rect
                  x={bx}
                  y={by}
                  width={barWidth}
                  height={barH}
                  fill={isHovered ? '#1e40af' : '#1d4ed8'}
                  rx="3"
                  style={{ transition: 'fill 0.15s' }}
                />
                {isHovered && (
                  <rect
                    x={bx - 4}
                    y={by - 4}
                    width={barWidth + 8}
                    height={barH + 8}
                    fill="none"
                    stroke="#1e40af"
                    strokeWidth="1.5"
                    rx="4"
                    opacity="0.4"
                  />
                )}
                {/* Value label on hover */}
                {isHovered && (
                  <g>
                    <rect
                      x={bx + barWidth / 2 - 20}
                      y={by - 26}
                      width={40}
                      height={20}
                      fill="#0d2137"
                      rx="4"
                    />
                    <text
                      x={bx + barWidth / 2}
                      y={by - 12}
                      textAnchor="middle"
                      fontSize="11"
                      fill="#ffffff"
                      fontWeight="600"
                    >
                      {d.value}
                    </text>
                  </g>
                )}
                {/* X axis labels */}
                <text
                  x={bx + barWidth / 2}
                  y={paddingTop + chartHeight + 16}
                  textAnchor="middle"
                  fontSize="9.5"
                  fill={isHovered ? '#1d4ed8' : '#64748b'}
                  fontWeight={isHovered ? '600' : '400'}
                >
                  {d.label.length > 10 ? d.label.slice(0, 9) + '…' : d.label}
                </text>
              </g>
            );
          })}

          {/* Axis line */}
          <line
            x1={paddingLeft}
            y1={paddingTop + chartHeight}
            x2={svgWidth - paddingRight}
            y2={paddingTop + chartHeight}
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          <line
            x1={paddingLeft}
            y1={paddingTop}
            x2={paddingLeft}
            y2={paddingTop + chartHeight}
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      {hoveredIndex !== null && (
        <p className="text-center text-sm text-slate-600 mt-1">
          <span className="font-semibold text-blue-700">{data[hoveredIndex].label}:</span>{' '}
          {data[hoveredIndex].value} ocorrências registradas
        </p>
      )}
    </div>
  );
}
