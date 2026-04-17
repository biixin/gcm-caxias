import { Shield, Link2, Database, Radio, Eye } from 'lucide-react';

const institutions = [
  {
    abbr: 'PM',
    fullName: 'Polícia Militar',
    color: 'from-blue-800 to-blue-900',
    borderColor: 'border-blue-700',
    contributions: ['Policiamento ostensivo', 'Dados de ocorrências', 'Inteligência tática'],
  },
  {
    abbr: 'PC',
    fullName: 'Polícia Civil',
    color: 'from-slate-700 to-slate-800',
    borderColor: 'border-slate-600',
    contributions: ['Investigação criminal', 'Banco de dados de inquéritos', 'Análise criminal'],
  },
  {
    abbr: 'GM',
    fullName: 'Guarda Municipal',
    color: 'from-blue-900 to-slate-900',
    borderColor: 'border-blue-800',
    contributions: ['Monitoramento local', 'Câmeras e vigilância', 'Proteção patrimonial'],
  },
];

const integrationBenefits = [
  {
    icon: Database,
    title: 'Compartilhamento de Dados',
    desc: 'Bases de dados unificadas para análise cruzada de ocorrências, permitindo visão ampla do cenário criminal.',
  },
  {
    icon: Radio,
    title: 'Comunicação Integrada',
    desc: 'Protocolos compartilhados de comunicação e difusão de informações de inteligência entre os órgãos.',
  },
  {
    icon: Eye,
    title: 'Vigilância Colaborativa',
    desc: 'Sistemas de monitoramento interligados ampliam a cobertura territorial sem duplicar recursos.',
  },
  {
    icon: Link2,
    title: 'Ação Coordenada',
    desc: 'Planejamento conjunto de operações com base em análises produzidas por cada instituição.',
  },
];

export default function InstitutionIntegration() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            Integração Institucional
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Três forças, uma visão compartilhada
          </h2>
          <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
          <p className="text-slate-500 leading-relaxed max-w-2xl">
            A convergência entre PM, Polícia Civil e Guarda Municipal multiplica a efetividade
            de cada órgão. A plataforma é o elo que transforma cooperação em capacidade real.
          </p>
        </div>

        {/* Institutions */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {institutions.map(({ abbr, fullName, color, borderColor, contributions }) => (
            <div
              key={abbr}
              className={`bg-gradient-to-br ${color} rounded-2xl p-6 border ${borderColor} text-white`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center font-black text-2xl border border-white/20">
                  {abbr}
                </div>
                <div>
                  <p className="text-xs text-white/60 font-medium uppercase tracking-wider">Órgão</p>
                  <p className="font-bold text-white">{fullName}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {contributions.map((c) => (
                  <li key={c} className="flex items-center gap-2.5 text-sm text-white/80">
                    <Shield size={12} className="text-blue-300 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-16">
          <p className="text-sm text-amber-900 leading-relaxed">
            A plataforma não se limita diretamente às forças de segurança pública, incluindo também profissionais da segurança pública e áreas administrativas relacionadas ao apoio e à gestão institucional.
          </p>
        </div>

        {/* Integration benefits */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
          <h3 className="text-base font-bold text-slate-700 uppercase tracking-wider mb-6 text-center">
            Benefícios da Integração
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationBenefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Icon size={20} className="text-white" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm mb-2">{title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
