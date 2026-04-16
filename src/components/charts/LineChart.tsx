import { useState } from 'react';
import type { LineChartData } from '../../types';

interface Props {
  data: LineChartData;
  title: string;
}

export default function LineChart({ data, title }: Props) {
  const [hoveredPoint, setHoveredPoint] = useState<{ seriesIdx: number; pointIdx: number } | null>(null);

  const svgWidth = 600;
  const svgHeight = 300;
  const paddingLeft = 50;
  const paddingRight = 20;
  const paddingTop = 24;
  const paddingBottom = 60;
  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = svgHeight - paddingTop - paddingBottom;
  const gridLines = 4;

  const allValues = data.series.flatMap((s) => s.values);
  const maxVal = Math.max(...allValues) * 1.15;
  const minVal = Math.min(...allValues) * 0.9;
  const range = maxVal - minVal;

  const xStep = chartWidth / (data.labels.length - 1);

  const toX = (i: number) => paddingLeft + i * xStep;
  const toY = (v: number) => paddingTop + chartHeight - ((v - minVal) / range) * chartHeight;

  const buildPath = (values: number[]) =>
    values.map((v, i) => `${i === 0 ? 'M' : 'L'} ${toX(i)} ${toY(v)}`).join(' ');

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
          {/* Grid */}
          {Array.from({ length: gridLines + 1 }).map((_, i) => {
            const y = paddingTop + (chartHeight / gridLines) * i;
            const val = Math.round(maxVal - (range * i) / gridLines);
            return (
              <g key={i}>
                <line x1={paddingLeft} y1={y} x2={svgWidth - paddingRight} y2={y} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                <text x={paddingLeft - 6} y={y + 4} textAnchor="end" fontSize="10" fill="#94a3b8">{val}</text>
              </g>
            );
          })}

          {/* X axis labels */}
          {data.labels.map((label, i) => (
            <text key={i} x={toX(i)} y={paddingTop + chartHeight + 18} textAnchor="middle" fontSize="10" fill="#64748b">
              {label}
            </text>
          ))}

          {/* Lines */}
          {data.series.map((series, si) => (
            <path
              key={si}
              d={buildPath(series.values)}
              fill="none"
              stroke={series.color}
              strokeWidth={hoveredPoint?.seriesIdx === si ? 3 : 2}
              strokeLinejoin="round"
              strokeLinecap="round"
              style={{ transition: 'stroke-width 0.15s' }}
            />
          ))}

          {/* Data points */}
          {data.series.map((series, si) =>
            series.values.map((v, pi) => {
              const isHovered = hoveredPoint?.seriesIdx === si && hoveredPoint?.pointIdx === pi;
              return (
                <g key={`${si}-${pi}`}>
                  <circle
                    cx={toX(pi)}
                    cy={toY(v)}
                    r={isHovered ? 7 : 4}
                    fill={isHovered ? '#ffffff' : series.color}
                    stroke={series.color}
                    strokeWidth="2"
                    onMouseEnter={() => setHoveredPoint({ seriesIdx: si, pointIdx: pi })}
                    onMouseLeave={() => setHoveredPoint(null)}
                    style={{ cursor: 'pointer', transition: 'r 0.15s' }}
                  />
                  {isHovered && (
                    <g>
                      <rect
                        x={toX(pi) - 22}
                        y={toY(v) - 30}
                        width={44}
                        height={22}
                        fill="#0d2137"
                        rx="4"
                      />
                      <text x={toX(pi)} y={toY(v) - 15} textAnchor="middle" fontSize="11" fill="#fff" fontWeight="600">
                        {v}
                      </text>
                    </g>
                  )}
                </g>
              );
            })
          )}

          {/* Axes */}
          <line x1={paddingLeft} y1={paddingTop} x2={paddingLeft} y2={paddingTop + chartHeight} stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1={paddingLeft} y1={paddingTop + chartHeight} x2={svgWidth - paddingRight} y2={paddingTop + chartHeight} stroke="#cbd5e1" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-2 flex-wrap">
        {data.series.map((series, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="inline-block w-5 h-0.5" style={{ backgroundColor: series.color, borderRadius: 2 }} />
            <span className="text-xs text-slate-600 font-medium">{series.label}</span>
          </div>
        ))}
      </div>

      {hoveredPoint && (
        <p className="text-center text-sm text-slate-600 mt-2">
          <span className="font-semibold" style={{ color: data.series[hoveredPoint.seriesIdx].color }}>
            {data.series[hoveredPoint.seriesIdx].label}
          </span>{' '}
          — {data.labels[hoveredPoint.pointIdx]}:{' '}
          <span className="font-bold text-slate-800">
            {data.series[hoveredPoint.seriesIdx].values[hoveredPoint.pointIdx]} ocorrências
          </span>
        </p>
      )}
    </div>
  );
}
