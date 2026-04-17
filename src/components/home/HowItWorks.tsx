import { BookOpen, BarChart2, Map, FileSearch, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: BookOpen,
    title: 'Fundamentação Teórica',
    description:
      'Cada módulo começa com os conceitos teóricos essenciais da análise criminal, inteligência aplicada e técnicas de segurança pública, contextualizados para a realidade da Baixada Fluminense.',
    tag: 'Teoria',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    step: '02',
    icon: BarChart2,
    title: 'Análise de Dados Reais',
    description:
      'Os participantes trabalham com dados reais de ocorrências, painéis interativos e dashboards construídos a partir de registros operacionais, desenvolvendo habilidades analíticas concretas.',
    tag: 'Prática',
    tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    step: '03',
    icon: Map,
    title: 'Geoprocessamento e Mapeamento',
    description:
      'Identificação de hotspots, análise de padrões espaciais e construção de mapas de risco com ferramentas acessíveis, aplicados diretamente ao território de atuação de cada órgão.',
    tag: 'Território',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    step: '04',
    icon: FileSearch,
    title: 'Produção de Inteligência',
    description:
      'Os participantes aprendem a produzir relatórios, boletins e produtos de inteligência estruturados, com linguagem adequada para diferentes níveis de comando — tático, operacional e estratégico.',
    tag: 'Produto Final',
    tagColor: 'bg-slate-100 text-slate-700 border-slate-200',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Como a plataforma funciona
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            Uma jornada estruturada do conhecimento à prática, com foco total na aplicabilidade real no contexto de segurança pública da Baixada Fluminense.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map(({ step, icon: Icon, title, description, tag, tagColor }, idx) => (
            <div key={step} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-6 z-10 -translate-x-3">
                  <ArrowRight size={16} className="text-slate-300" />
                </div>
              )}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-3xl font-black text-slate-100 leading-none">{step}</span>
                </div>
                <span className={`self-start text-xs font-bold px-2.5 py-1 rounded-full border mb-3 ${tagColor}`}>
                  {tag}
                </span>
                <h3 className="font-bold text-slate-800 mb-3 text-sm leading-snug">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed flex-1">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Pronto para começar?</h3>
            <p className="text-blue-200 text-sm leading-relaxed max-w-lg">
              Acesse o módulo de Análise de Dados e veja na prática como a inteligência aplicada
              pode transformar a atuação da sua corporação.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#analytics"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors text-sm shadow-md"
            >
              Ver módulo de análise
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
