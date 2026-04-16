import { TrendingUp, Target, Clock, MapPin } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Identificação de Padrões Criminais',
    description:
      'O cruzamento de dados de ocorrências ao longo do tempo revela padrões de comportamento criminal: dias da semana de maior incidência, horários críticos, perfil das vítimas e locais recorrentes. Esses padrões fundamentam o planejamento tático de rondas e operações.',
  },
  {
    icon: Target,
    title: 'Decisões Estratégicas Baseadas em Evidências',
    description:
      'Com análise quantitativa e qualitativa, gestores deixam de atuar por percepção e passam a orientar recursos com base em dados reais. Isso reduz o desperdício de efetivo em áreas de baixo risco e concentra a atuação onde o impacto é maior.',
  },
  {
    icon: Clock,
    title: 'Atuação Antecipada e Preventiva',
    description:
      'Modelos preditivos e análise de séries históricas permitem antecipar períodos e locais de maior vulnerabilidade, possibilitando o posicionamento preventivo da Guarda antes da ocorrência do fato criminoso.',
  },
  {
    icon: MapPin,
    title: 'Mapeamento de Hotspots',
    description:
      'A geoestatística aplicada à criminalidade identifica zonas quentes (hotspots) — concentrações de ocorrências em espaço e tempo —, orientando a distribuição territorial dos recursos de segurança com precisão.',
  },
];

export default function DataImportance() {
  return (
    <section id="section-1" className="py-14 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            Seção 02
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Importância da Análise de Dados
          </h2>
          <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
          <p className="text-slate-600 leading-relaxed max-w-3xl">
            A análise de dados representa a espinha dorsal de qualquer estrutura de inteligência
            moderna. No campo da segurança pública municipal, seu emprego transforma registros
            dispersos em conhecimento acionável, capaz de reduzir crimes e aumentar a eficiência
            operacional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Icon size={20} className="text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight quote */}
        <div className="bg-blue-700 rounded-2xl p-8 text-white">
          <blockquote className="text-lg font-light leading-relaxed text-blue-100 italic mb-4 max-w-4xl">
            "A criminalidade não é aleatória. Ela segue padrões de espaço, tempo e oportunidade.
            Identificar esses padrões por meio da análise de dados é a base para uma atuação
            preventiva eficaz da Guarda Municipal."
          </blockquote>
          <p className="text-blue-300 text-sm font-medium">
            — Princípio da Criminologia Ambiental Aplicada à Segurança Pública
          </p>
        </div>
      </div>
    </section>
  );
}
