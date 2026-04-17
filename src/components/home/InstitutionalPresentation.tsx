import { Shield, Users, MapPin, Lightbulb } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: 'Integração Interinstitucional',
    description:
      'A plataforma articula dados e metodologias da Polícia Militar, Polícia Civil e Guarda Municipal, criando um ecossistema colaborativo de inteligência que potencializa a capacidade operacional de cada órgão.',
  },
  {
    icon: MapPin,
    title: 'Foco na Baixada Fluminense',
    description:
      'Desenvolvida com base na realidade territorial, social e criminal da Baixada Fluminense, a plataforma considera as especificidades locais de Duque de Caxias e municípios adjacentes para oferecer análises contextualmente precisas.',
  },
  {
    icon: Lightbulb,
    title: 'Abordagem Prática e Aplicada',
    description:
      'Cada módulo é estruturado com foco na aplicação imediata: os conhecimentos adquiridos são diretamente utilizáveis nas atividades operacionais e de planejamento dos profissionais de segurança pública.',
  },
  {
    icon: Users,
    title: 'Capacitação Contínua',
    description:
      'A plataforma funciona como um ambiente permanente de desenvolvimento profissional, onde os agentes de segurança pública podem aprimorar continuamente suas competências analíticas e operacionais.',
  },
];

export default function InstitutionalPresentation() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
              Sobre a Plataforma
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Uma iniciativa integrada para a segurança pública regional
            </h2>
            <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
            <p className="text-slate-600 leading-relaxed mb-5 text-lg">
              A Plataforma de Inteligência Aplicada Regional nasce da necessidade de unificar
              metodologias, conhecimentos e ferramentas analíticas entre os órgãos de segurança
              pública da Baixada Fluminense.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Ao integrar PM, Polícia Civil e Guarda Municipal em um único ambiente de
              capacitação, a plataforma rompe silos institucionais e cria uma linguagem comum
              para a produção de inteligência operacional e estratégica, baseada em dados reais
              do território.
            </p>
          </div>

          {/* Visual block */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { abbr: 'PM', name: 'Polícia Militar', color: 'bg-blue-700' },
                  { abbr: 'PC', name: 'Polícia Civil', color: 'bg-slate-700' },
                  { abbr: 'GM', name: 'Guarda Municipal', color: 'bg-blue-900' },
                ].map(({ abbr, name, color }) => (
                  <div key={abbr} className="text-center">
                    <div className={`${color} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-2 font-black text-white text-lg`}>
                      {abbr}
                    </div>
                    <p className="text-slate-300 text-xs font-medium leading-snug">{name}</p>
                  </div>
                ))}
              </div>
              <div className="text-center border-t border-white/10 pt-5">
                <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2">
                  <Shield size={14} className="text-blue-400" />
                  <span className="text-blue-300 text-xs font-semibold">Baixada Fluminense</span>
                </div>
                <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                  Convergência institucional para uma segurança pública mais eficaz
                </p>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 bg-blue-700 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200 shadow-sm">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-3 text-sm leading-snug">{title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
