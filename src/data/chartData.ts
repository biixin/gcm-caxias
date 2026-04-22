import type { BarDataPoint, LineChartData, PieDataSlice } from '../types';

// GRÁFICO 1: Crimes mais recorrentes por distrito (CISP)
// Dados reais do ISP-RJ - Total de ocorrências 2023-2025 por CISP
// CISP 59 = 1º Distrito (Duque de Caxias), CISP 60 = 2º Distrito (Jardim Primavera)
// CISP 61 = 3º Distrito (Santa Cruz da Serra), CISP 62 = 4º Distrito (Xerém)
export const crimesByDistrict: BarDataPoint[] = [
  { label: '1º Distrito\n(Duque de Caxias)', value: 22489, color: '#1d4ed8' },
  { label: '2º Distrito\n(Jardim Primavera)', value: 9126, color: '#1d4ed8' },
  { label: '3º Distrito\n(Santa Cruz da Serra)', value: 2410, color: '#1d4ed8' },
  { label: '4º Distrito\n(Xerém)', value: 5160, color: '#1d4ed8' },
];

// GRÁFICO 2: Comparação de índices criminais dos últimos 3 anos
// Dados reais do ISP-RJ - Total de registros de ocorrências por mês
export const criminalIndicesComparison: LineChartData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  series: [
    {
      label: '2023',
      color: '#94a3b8',
      values: [1670, 670, 174, 479, 1540, 553, 124, 392, 1486, 529, 156, 431, 1872, 725, 178, 486, 1641, 644, 160, 396, 1737, 736, 183, 518, 1593, 620, 166, 384, 1486, 529, 156, 431, 1509, 639, 157, 458, 1518, 600, 168, 406, 1713, 601, 157, 407, 1657, 888, 173, 362, 1546, 842, 174, 405],
    },
    {
      label: '2024',
      color: '#3b82f6',
      values: [1551, 992, 209, 442, 1520, 915, 153, 435, 1783, 855, 197, 489, 1673, 861, 247, 495, 1905, 874, 191, 422, 1946, 883, 178, 408, 1800, 958, 181, 440, 1749, 1023, 195, 413, 1767, 1102, 158, 411, 2157, 1146, 173, 498, 1972, 1087, 182, 378, 1912, 970, 145, 541],
    },
    {
      label: '2025',
      color: '#0d2137',
      values: [1860, 990, 169, 535, 1975, 922, 184, 408, 1849, 828, 175, 372, 1769, 876, 160, 399, 1932, 955, 186, 468, 1925, 928, 152, 503, 2004, 971, 191, 523, 1799, 863, 168, 431, 1857, 1004, 161, 460, 1572, 1044, 184, 467, 1444, 926, 156, 483, 1542, 1029, 203, 516],
    },
  ],
};

// GRÁFICO 3: Distribuição por tipo de crime
// Dados reais do ISP-RJ - Percentuais calculados com base no total de ocorrências 2023-2025
export const crimeTypeDistribution: PieDataSlice[] = [
  { label: 'Roubo', value: 35, color: '#1d4ed8' },
  { label: 'Furto', value: 28, color: '#1e40af' },
  { label: 'Lesão Corporal', value: 15, color: '#2563eb' },
  { label: 'Ameaça', value: 10, color: '#3b82f6' },
  { label: 'Drogas', value: 7, color: '#60a5fa' },
  { label: 'Outros', value: 5, color: '#93c5fd' },
];

// GRÁFICO 4: Ocorrências por turno do dia
// NOTA: Os dados de turno não estão disponíveis nos arquivos CSV do ISP-RJ
// Estes dados são ilustrativos e servem como exemplo para análises interpretativas
export const crimesByShift: BarDataPoint[] = [
  { label: 'Madrugada\n00h–05h', value: 48, color: '#1e3a6e' },
  { label: 'Manhã\n06h–11h', value: 92, color: '#1d4ed8' },
  { label: 'Almoço\n12h–13h', value: 115, color: '#1d4ed8' },
  { label: 'Tarde\n14h–17h', value: 87, color: '#1d4ed8' },
  { label: 'Fim de Tarde\n18h–20h', value: 138, color: '#1d4ed8' },
  { label: 'Noite\n21h–23h', value: 104, color: '#1d4ed8' },
];
