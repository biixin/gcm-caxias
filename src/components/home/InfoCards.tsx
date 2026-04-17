import { HelpCircle, Target, Users, Star } from 'lucide-react';

const cards = [
  {
    icon: HelpCircle,
    tag: 'Justificativa',
    tagColor: 'text-amber-600 bg-amber-50 border-amber-200',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    accentColor: 'border-t-amber-400',
    title: 'Por que esta plataforma?',
    content:
      'A segurança pública moderna exige profissionais capazes de interpretar dados, identificar padrões e tomar decisões baseadas em evidências. A ausência de uma estrutura de inteligência integrada entre os órgãos da Baixada Fluminense representa uma lacuna crítica que esta plataforma visa suprir.',
    highlights: ['Fragmentação de dados entre órgãos', 'Déficit de capacitação analítica', 'Necessidade de ação preventiva'],
  },
  {
    icon: Target,
    tag: 'Objetivo',
    tagColor: 'text-blue-600 bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    accentColor: 'border-t-blue-400',
    title: 'O que pretendemos alcançar',
    content:
      'Capacitar profissionais de segurança pública para a produção e utilização de inteligência aplicada, promovendo uma cultura de tomada de decisão baseada em dados e fortalecendo a cooperação interinstitucional na Baixada Fluminense.',
    highlights: ['Capacitação em análise de dados', 'Cultura de decisão por evidências', 'Cooperação interinstitucional'],
  },
  {
    icon: Users,
    tag: 'Público-alvo',
    tagColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    accentColor: 'border-t-emerald-400',
    title: 'Para quem é esta plataforma',
    content:
      'Destinada a agentes, subtenentes, oficiais e gestores da Polícia Militar, Polícia Civil e Guarda Municipal da Baixada Fluminense que atuam em setores operacionais, de inteligência, planejamento e gestão de segurança pública.',
    highlights: ['Agentes e oficiais da PM', 'Investigadores e delegados da PC', 'Guardas e gestores da GM'],
  },
  {
    icon: Star,
    tag: 'Diferenciais',
    tagColor: 'text-slate-700 bg-slate-50 border-slate-200',
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-700',
    accentColor: 'border-t-slate-500',
    title: 'O que nos torna únicos',
    content:
      'Diferentemente de plataformas genéricas de segurança pública, nossa abordagem é territorial, contextualizada e interinstitucional. Os casos práticos, análises e ferramentas são desenvolvidos especificamente para a realidade da Baixada Fluminense.',
    highlights: ['Conteúdo territorial e contextual', 'Casos práticos locais', 'Integração interinstitucional real'],
  },
];

export default function InfoCards() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            Visão Geral
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Entenda a plataforma
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            Quatro perspectivas essenciais que definem nossa proposta de valor para a segurança pública regional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, tag, tagColor, iconBg, iconColor, accentColor, title, content, highlights }) => (
            <div
              key={tag}
              className={`bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden border-t-4 ${accentColor} flex flex-col`}
            >
              <div className="p-6 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className={iconColor} />
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${tagColor}`}>
                    {tag}
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-3 leading-snug">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{content}</p>
              </div>
              <div className="px-6 pb-5">
                <ul className="space-y-1.5">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                      <span className="text-xs text-slate-500">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
