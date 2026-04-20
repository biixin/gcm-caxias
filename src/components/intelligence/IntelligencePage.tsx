import { Brain, ChevronRight } from 'lucide-react';
import Introduction from '../Introduction';
import Footer from '../Footer';

const introParagraphs = [
  'A inteligência, no contexto da segurança pública, é a atividade responsável pela produção e difusão de conhecimentos estratégicos sobre fatos, eventos e situações que possam impactar a ordem pública e a atuação dos órgãos de segurança.',
  'Essa atividade envolve a coleta, análise e interpretação de dados e informações, permitindo compreender cenários, identificar padrões de criminalidade e acompanhar a evolução de fenômenos que representem risco ou oportunidade para a atuação estatal.',
  'Os conhecimentos produzidos pela inteligência são utilizados para subsidiar a tomada de decisões nos níveis operacional, tático e estratégico, orientando ações mais eficientes e direcionadas por parte das instituições de segurança pública.',
  'Além disso, a inteligência possibilita a antecipação de ameaças, contribuindo para a prevenção de crimes, a redução de vulnerabilidades e o planejamento de ações integradas entre diferentes órgãos.',
  'No âmbito da segurança pública municipal, a inteligência atua como um instrumento essencial para organizar informações, apoiar a gestão e aumentar a efetividade das ações voltadas à proteção da população e do patrimônio público.',
];

const highlights = [
  { label: 'Nível Operacional', description: 'Suporte direto às ações em campo com informações táticas precisas e atualizadas.' },
  { label: 'Nível Tático', description: 'Planejamento de operações e alocação de recursos com base em dados analíticos.' },
  { label: 'Nível Estratégico', description: 'Visão de longo prazo para políticas institucionais e cooperação interorganizacional.' },
];

export default function IntelligencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Brain size={14} className="text-blue-400" />
              <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">
                Fundamentos
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Inteligência
            </h1>
            <p className="text-slate-300 leading-relaxed text-lg font-light max-w-2xl">
              Conceitos, fundamentos e aplicação prática da inteligência no contexto da segurança pública.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-white">
        {/* Conceptual intro section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Conceito
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                O que é Inteligência?
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded" />
            </div>

            <div className="grid lg:grid-cols-3 gap-10 items-start">
              {/* Main text */}
              <div className="lg:col-span-2 space-y-5">
                {introParagraphs.map((paragraph, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Sidebar highlights */}
              <div className="space-y-4">
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-2">
                  <div className="mb-4 rounded-xl overflow-hidden border border-slate-200">
                    <img
                      src="https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=niveis.png&version_id=null"
                      alt="Níveis de Inteligência"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                    Níveis de Aplicação
                  </h3>
                  <ul className="space-y-4">
                    {highlights.map(({ label, description }) => (
                      <li key={label} className="flex items-start gap-3">
                        <ChevronRight size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-bold text-slate-800 mb-0.5">{label}</p>
                          <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 text-white">
                  <Brain size={28} className="text-blue-300 mb-3" />
                  <p className="text-sm font-light text-blue-100 leading-relaxed italic">
                    "A inteligência transforma dados brutos em conhecimento acionável, permitindo que as instituições de segurança pública atuem de forma preventiva e estratégica."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-slate-100" />

        {/* Introduction component (Ciclo de Inteligência etc.) */}
        <Introduction />
      </main>

      <Footer />
    </div>
  );
}
