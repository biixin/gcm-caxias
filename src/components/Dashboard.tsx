import BarChart from './charts/BarChart';
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';
import { crimesByDistrict, criminalIndicesComparison, crimeTypeDistribution, crimesByShift } from '../data/chartData';

interface ChartCardProps {
  chartNumber: string;
  title: string;
  insight: string;
  children: React.ReactNode;
}

function ChartCard({ chartNumber, title, insight, children }: ChartCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-6 pt-6 pb-4 border-b border-slate-50">
        <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">
          Gráfico {chartNumber}
        </span>
        <h3 className="text-base font-bold text-slate-800 mt-0.5">{title}</h3>
      </div>
      <div className="px-6 py-6">{children}</div>
      <div className="mx-6 mb-6 bg-slate-50 border border-slate-100 rounded-xl p-3.5">
        <p className="text-xs text-slate-500 leading-relaxed">{insight}</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <section id="section-2" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            Seção 03
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Painel de Dados — Dashboard
          </h2>
          <div className="w-14 h-1 bg-blue-600 rounded" />
        </div>

        <div className="grid gap-8">
          <ChartCard
            chartNumber="01"
            title="Crimes Mais Recorrentes por Distrito"
            insight="Passe o cursor sobre as barras para visualizar o total exato de ocorrências por distrito. Distritos com valores acima de 100 requerem atenção prioritária no planejamento operacional."
          >
            <BarChart
              data={crimesByDistrict}
              title="Total de Ocorrências Registradas — Agrupado por Região Administrativa"
              yAxisLabel="Ocorrências"
            />
          </ChartCard>

          <ChartCard
            chartNumber="02"
            title="Comparação de Índices Criminais — Últimos 3 Anos"
            insight="Interaja com os pontos da linha para verificar os valores mensais de cada ano. A comparação anual permite identificar tendências de crescimento ou redução dos índices criminais ao longo dos meses."
          >
            <LineChart
              data={criminalIndicesComparison}
              title="Evolução Mensal de Ocorrências — 2022, 2023 e 2024"
            />
          </ChartCard>

          <ChartCard
            chartNumber="03"
            title="Distribuição por Tipo de Crime"
            insight="Passe o cursor sobre cada fatia ou item da legenda para destacar a modalidade criminal e visualizar seu percentual exato no total de ocorrências registradas no período."
          >
            <PieChart
              data={crimeTypeDistribution}
              title="Percentual de Cada Modalidade no Total de Ocorrências Registradas"
            />
          </ChartCard>

          <ChartCard
            chartNumber="04"
            title="Ocorrências por Turno do Dia"
            insight="Distribuição das ocorrências ao longo dos turnos diários. O pico no fim de tarde (18h–20h) indica maior demanda operacional nesse intervalo, orientando o reforço de efetivo nesse período."
          >
            <BarChart
              data={crimesByShift}
              title="Total de Ocorrências por Faixa Horária — Período Anual"
              yAxisLabel="Ocorrências"
            />
          </ChartCard>
        </div>
      </div>
    </section>
  );
}
