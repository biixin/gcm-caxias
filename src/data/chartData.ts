import type { BarDataPoint, LineChartData, PieDataSlice } from '../types';

// GRÁFICO 1: Crimes mais recorrentes por distrito
// Atualize os valores de acordo com os dados coletados
export const crimesByDistrict: BarDataPoint[] = [
  { label: 'Centro', value: 145, color: '#1d4ed8' },
  { label: 'Imbariê', value: 98, color: '#1d4ed8' },
  { label: 'Xerém', value: 67, color: '#1d4ed8' },
  { label: 'Jardim Primavera', value: 112, color: '#1d4ed8' },
  { label: 'Figueira', value: 89, color: '#1d4ed8' },
  { label: 'Campos Elíseos', value: 76, color: '#1d4ed8' },
  { label: 'Parque Duque', value: 134, color: '#1d4ed8' },
  { label: 'Saracuruna', value: 55, color: '#1d4ed8' },
];

// GRÁFICO 2: Comparação de índices criminais dos últimos 3 anos
// Dados mensais (Jan–Dez) para cada ano
export const criminalIndicesComparison: LineChartData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  series: [
    {
      label: '2022',
      color: '#94a3b8',
      values: [88, 92, 105, 98, 110, 120, 115, 108, 102, 95, 100, 112],
    },
    {
      label: '2023',
      color: '#3b82f6',
      values: [95, 100, 98, 110, 125, 118, 122, 115, 108, 112, 118, 130],
    },
    {
      label: '2024',
      color: '#0d2137',
      values: [102, 108, 115, 120, 118, 125, 130, 122, 128, 135, 140, 145],
    },
  ],
};

// GRÁFICO 3: Distribuição por tipo de crime
// Percentual de cada modalidade no total registrado
export const crimeTypeDistribution: PieDataSlice[] = [
  { label: 'Furto', value: 38, color: '#1d4ed8' },
  { label: 'Roubo', value: 24, color: '#1e40af' },
  { label: 'Tráfico', value: 18, color: '#2563eb' },
  { label: 'Vandalismo', value: 12, color: '#3b82f6' },
  { label: 'Outros', value: 8, color: '#60a5fa' },
];

// GRÁFICO 4: Ocorrências por turno do dia
// Distribuição dos registros ao longo dos turnos diários
export const crimesByShift: BarDataPoint[] = [
  { label: 'Madrugada\n00h–05h', value: 48, color: '#1e3a6e' },
  { label: 'Manhã\n06h–11h', value: 92, color: '#1d4ed8' },
  { label: 'Almoço\n12h–13h', value: 115, color: '#1d4ed8' },
  { label: 'Tarde\n14h–17h', value: 87, color: '#1d4ed8' },
  { label: 'Fim de Tarde\n18h–20h', value: 138, color: '#1d4ed8' },
  { label: 'Noite\n21h–23h', value: 104, color: '#1d4ed8' },
];
