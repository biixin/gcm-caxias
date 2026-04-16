import { TrendingUp, TrendingDown, AlertTriangle, Clock, MapPin, Users } from 'lucide-react';

const findings = [
  {
    type: 'increase',
    icon: TrendingUp,
    region: 'Centro e Parque Duque',
    crime: 'Furto em Comércio',
    detail:
      'Aumento de aproximadamente 18% no número de furtos nas regiões de maior densidade comercial. O padrão temporal indica concentração entre 11h e 13h (horário de pico do comércio) e entre 17h e 19h (saída de estabelecimentos).',
  },
  {
    type: 'decrease',
    icon: TrendingDown,
    region: 'Saracuruna e Xerém',
    crime: 'Roubo a Pedestre',
    detail:
      'Redução de 12% nos registros de roubo a pedestre nos últimos 6 meses, possivelmente associada à implantação de rondas preventivas sistemáticas e ao incremento de câmeras de monitoramento nas vias principais.',
  },
  {
    type: 'alert',
    icon: AlertTriangle,
    region: 'Jardim Primavera',
    crime: 'Tráfico de Entorpecentes',
    detail:
      'Crescimento expressivo de ocorrências ligadas ao tráfico, especialmente no período noturno (22h–02h). A região apresenta vulnerabilidade por conta da baixa iluminação pública e ausência de pontos de monitoramento eletrônico.',
  },
];

const causes = [
  {
    icon: MapPin,
    title: 'Áreas com Maior Vulnerabilidade',
    description:
      'Regiões periféricas com menor infraestrutura urbana, baixa iluminação e ausência de câmeras concentram proporcionalmente mais ocorrências. A teoria da oportunidade criminal indica que a percepção de risco reduzido estimula a ação delituosa.',
  },
  {
    icon: Clock,
    title: 'Horários Críticos',
    description:
      'A análise temporal demonstra dois picos diários: manhã (10h–13h) e tarde/noite (17h–21h). Esses intervalos coincidem com maior fluxo de pessoas e menor presença ostensiva de agentes de segurança em determinadas áreas.',
  },
  {
    icon: Users,
    title: 'Déficit de Policiamento Preventivo',
    description:
      'A ausência de patrulhamento sistemático em regiões de risco médio-alto permite a consolidação de territórios criminais. A análise de dados aponta lacunas cobertura que precisam ser endereçadas no planejamento de efetivo.',
  },
];

export default function InterpretiveAnalysis() {
  return (
    <section id="section-3" className="py-14 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            Seção 04
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Análise Interpretativa
          </h2>
          <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
          <p className="text-slate-600 leading-relaxed max-w-3xl">
            A leitura crítica dos dados vai além da simples contagem de ocorrências. Esta seção
            interpreta os padrões identificados, estabelece correlações com fatores contextuais e
            aponta possíveis causas para os fenômenos observados.
          </p>
        </div>

        {/* Findings */}
        <h3 className="text-base font-bold text-slate-700 uppercase tracking-wider mb-5">
          Principais Constatações
        </h3>
        <div className="grid gap-5 mb-12">
          {findings.map(({ type, icon: Icon, region, crime, detail }) => (
            <div
              key={region}
              className={`bg-white rounded-xl border p-5 flex gap-4 shadow-sm ${
                type === 'increase'
                  ? 'border-l-4 border-l-red-400 border-red-100'
                  : type === 'decrease'
                  ? 'border-l-4 border-l-emerald-400 border-emerald-100'
                  : 'border-l-4 border-l-amber-400 border-amber-100'
              }`}
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  type === 'increase'
                    ? 'bg-red-50'
                    : type === 'decrease'
                    ? 'bg-emerald-50'
                    : 'bg-amber-50'
                }`}
              >
                <Icon
                  size={18}
                  className={
                    type === 'increase'
                      ? 'text-red-500'
                      : type === 'decrease'
                      ? 'text-emerald-500'
                      : 'text-amber-500'
                  }
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-bold text-slate-800 text-sm">{crime}</span>
                  <span className="text-xs text-slate-400">|</span>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      type === 'increase'
                        ? 'bg-red-50 text-red-600'
                        : type === 'decrease'
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'bg-amber-50 text-amber-600'
                    }`}
                  >
                    {region}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Causes */}
        <h3 className="text-base font-bold text-slate-700 uppercase tracking-wider mb-5">
          Possíveis Causas Identificadas
        </h3>
        <div className="grid sm:grid-cols-3 gap-5">
          {causes.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <Icon size={18} className="text-blue-700" />
              </div>
              <h4 className="font-bold text-slate-800 text-sm mb-2">{title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
