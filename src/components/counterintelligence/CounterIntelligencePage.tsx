import { Shield, Eye, Lock, AlertTriangle, Network, Zap, MapPin, ChevronRight, ShieldOff, Radio, Server } from 'lucide-react';
import Footer from '../Footer';

const ciSegments = [
  {
    id: 'preventiva',
    label: 'CI Preventiva',
    description: 'Antecipa e reduz riscos antes que se concretizem',
    color: 'bg-blue-700',
    borderColor: 'border-blue-600',
  },
  {
    id: 'ativa',
    label: 'CI Ativa',
    description: 'Reage e neutraliza ameaças já identificadas',
    color: 'bg-slate-700',
    borderColor: 'border-slate-600',
  },
];

const preventiveSections = [
  {
    number: '1.1',
    icon: Lock,
    title: 'Proteção do Conhecimento',
    description:
      'Busca proteger informações sensíveis — dados governamentais, estratégicos ou operacionais — impedindo sua exposição, alteração ou uso indevido.',
    localExample: {
      title: 'Exemplos em Duque de Caxias',
      items: [
        'Proteção de dados logísticos da Refinaria Duque de Caxias (REDUC)',
        'Segurança de sistemas de empresas do polo petroquímico',
        'Prevenção de vazamento de informações sobre operações policiais na Baixada',
      ],
    },
    principles: [
      { term: 'Disponibilidade', def: 'Informação acessível a quem deve acessar' },
      { term: 'Integridade', def: 'Sem alterações indevidas' },
      { term: 'Sigilo', def: 'Acesso restrito a pessoas autorizadas' },
      { term: 'Autenticidade', def: 'Origem verificável e confiável' },
    ],
  },
  {
    number: '1.2',
    icon: Server,
    title: 'Proteção de Infraestruturas Críticas',
    description:
      'Visa proteger estruturas essenciais cujo colapso ou comprometimento afeta diretamente a sociedade, a economia e a segurança pública.',
    localExample: {
      title: 'Exemplos na Baixada Fluminense',
      items: [
        'REDUC — Refinaria Duque de Caxias (energia e combustíveis)',
        'Rodovia Washington Luís (BR-040) — eixo logístico regional',
        'Sistemas de transporte e distribuição de cargas',
      ],
    },
    risks: [
      { label: 'Efeito em cadeia', detail: 'Ex: paralisação da refinaria → falta de combustível no RJ' },
      { label: 'Impacto na população', detail: 'Interrupção de serviços essenciais de grande escala' },
      { label: 'Tempo de recuperação', detail: 'Quanto mais crítica, maior o custo de restauração' },
      { label: 'Impacto econômico e político', detail: 'Repercussão nos mercados e na governança local' },
    ],
  },
  {
    number: '1.3',
    icon: Radio,
    title: 'Prevenção à Interferência no Processo Decisório',
    description:
      'Busca impedir ações ilegítimas — criminosas ou estrangeiras — que influenciem decisões do Estado, comprometendo a soberania e a autonomia institucional.',
    localExample: {
      title: 'Exemplos locais',
      items: [
        'Influência de organizações criminosas em decisões políticas municipais',
        'Manipulação de opinião pública em comunidades da Baixada',
        'Pressão indireta por meio de violência ou controle territorial',
      ],
    },
    actionTypes: [
      { type: 'Direta', desc: 'Influência sobre autoridades e agentes do Estado' },
      { type: 'Indireta', desc: 'Manipulação social, midiática ou comunitária' },
    ],
  },
];

const operationalPillars = [
  {
    number: '01',
    icon: Eye,
    title: 'Identificação de Ameaças',
    description: 'Mapeamento de atores, grupos e interesses que possam representar risco ao Estado, às instituições ou à população.',
    example: 'Ex: atuação de facções ou interesses externos em áreas estratégicas da Baixada.',
  },
  {
    number: '02',
    icon: Network,
    title: 'Mapeamento de Vulnerabilidades',
    description: 'Análise sistemática de fragilidades em órgãos públicos, empresas e infraestruturas que possam ser exploradas por adversários.',
    example: 'Ex: falhas de segurança em órgãos públicos ou empresas locais.',
  },
  {
    number: '03',
    icon: AlertTriangle,
    title: 'Gestão de Risco',
    description: 'Priorização das medidas de proteção conforme o impacto potencial de cada ameaça, otimizando o uso de recursos.',
    example: 'Foco em infraestruturas de alto impacto e pontos de maior exposição operacional.',
  },
];

const practicalApplications = [
  {
    icon: Shield,
    title: 'Infraestruturas Estratégicas',
    desc: 'Proteção da REDUC, rodovias e sistemas logísticos essenciais para a estabilidade regional.',
  },
  {
    icon: Eye,
    title: 'Monitoramento de Influência',
    desc: 'Acompanhamento de possível influência criminosa sobre decisões políticas e administrativas locais.',
  },
  {
    icon: Lock,
    title: 'Segurança da Informação',
    desc: 'Prevenção de vazamento de dados sensíveis relacionados a operações e estratégias institucionais.',
  },
  {
    icon: Zap,
    title: 'Cultura de Segurança',
    desc: 'Fortalecimento da consciência e das práticas de segurança em instituições públicas e privadas.',
  },
];

export default function CounterIntelligencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <ShieldOff size={14} className="text-blue-400" />
              <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">
                Ramo da Inteligência
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Contrainteligência
            </h1>
            <p className="text-slate-300 leading-relaxed text-lg font-light max-w-2xl">
              O ramo da atividade de inteligência voltado à proteção do Estado e da sociedade contra ameaças externas e internas.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-white">

        {/* SEÇÃO 1 — Visão Geral */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 01
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                O que é Contrainteligência?
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-5">
                <p className="text-slate-600 leading-relaxed text-base">
                  A contrainteligência é o ramo da atividade de inteligência voltado para{' '}
                  <strong className="text-slate-800">proteger o Estado e a sociedade</strong> contra
                  ameaças externas ou internas, impedindo que adversários obtenham vantagens
                  estratégicas — sejam elas informações, influência ou capacidade de sabotagem.
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  Diferentemente da inteligência clássica, que busca compreender o ambiente
                  externo, a contrainteligência <strong className="text-slate-800">olha para dentro</strong>:
                  identifica vulnerabilidades, protege ativos sensíveis e neutraliza tentativas
                  de infiltração ou interferência antes que causem dano.
                </p>

                {/* CI objectives */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                    Objetivos Centrais
                  </p>
                  {[
                    'Prevenir e detectar ações adversas',
                    'Proteger dados, pessoas e instalações sensíveis',
                    'Neutralizar tentativas de interferência no processo decisório',
                  ].map((obj, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-[9px] font-black">{i + 1}</span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{obj}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Segments */}
              <div className="space-y-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                  Dois Segmentos Interdependentes
                </p>
                {ciSegments.map(({ id, label, description, color, borderColor }) => (
                  <div
                    key={id}
                    className={`bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-6 border ${borderColor} text-white`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        {id === 'preventiva' ? (
                          <Shield size={22} className="text-white" />
                        ) : (
                          <Zap size={22} className="text-white" />
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-white text-base">{label}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{description}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 text-white">
                  <ShieldOff size={28} className="text-blue-300 mb-3" />
                  <p className="text-sm font-light text-blue-100 leading-relaxed italic">
                    "A contrainteligência preventiva funciona como um escudo invisível — reduzindo riscos antes que eles se concretizem e preservando a integridade das decisões do Estado."
                  </p>
                </div>
              </div>
            </div>

            {/* CIPEA Image - Desktop */}
            <div className="hidden md:block mt-12">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/CI%20P%20E%20A.png?alt=media&token=b26a478d-d2ea-43f4-9fe3-bd97e5186ed7"
                alt="CIPEA - Contrainteligência Preventiva e Ativa"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            {/* CIPEA Image - Mobile */}
            <div className="md:hidden mt-8">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/CIPEA%20MOBILE.png?alt=media&token=136bdfbb-79bd-4bfa-8716-8d82faafc885"
                alt="CIPEA - Contrainteligência Preventiva e Ativa"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* SEÇÃO 2 — Contrainteligência Preventiva */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 02
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Contrainteligência Preventiva
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-5" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                Foca na antecipação de riscos e na proteção de ativos estratégicos, atuando antes
                que qualquer ameaça se materialize em dano real.
              </p>
            </div>

            <div className="space-y-8">
              {preventiveSections.map(({ number, icon: Icon, title, description, localExample, principles, risks, actionTypes }) => (
                <div key={number} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-4 px-6 py-5 border-b border-slate-50">
                    <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{number}</span>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight">{title}</h3>
                    </div>
                  </div>

                  <div className="p-6 grid md:grid-cols-2 gap-6">
                    {/* Left: description + local example */}
                    <div className="space-y-4">
                      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>

                      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                          {localExample.title}
                        </p>
                        <ul className="space-y-2">
                          {localExample.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <MapPin size={12} className="text-blue-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-700 leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right: principles / risks / action types */}
                    <div>
                      {principles && (
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                            Princípios Básicos
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            {principles.map(({ term, def }) => (
                              <div key={term} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                                <p className="text-xs font-black text-blue-700 uppercase mb-1">{term}</p>
                                <p className="text-xs text-slate-500 leading-relaxed">{def}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {risks && (
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                            Riscos Analisados
                          </p>
                          <ul className="space-y-3">
                            {risks.map(({ label, detail }) => (
                              <li key={label} className="flex items-start gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100">
                                <AlertTriangle size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-xs font-bold text-slate-800 mb-0.5">{label}</p>
                                  <p className="text-xs text-slate-500 leading-relaxed">{detail}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {actionTypes && (
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                            Tipos de Ação
                          </p>
                          <div className="space-y-3">
                            {actionTypes.map(({ type, desc }) => (
                              <div key={type} className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3">
                                <span className="w-16 text-xs font-black text-blue-700 uppercase flex-shrink-0 pt-0.5">{type}</span>
                                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                            <p className="text-xs text-amber-700 leading-relaxed">
                              <strong>Atenção:</strong> Ambas as formas de interferência podem ocorrer simultaneamente, tornando a detecção mais complexa e exigindo monitoramento contínuo e multidimensional.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 3 — Lógica Operacional */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 03
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Lógica Operacional da CI
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-5" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                A contrainteligência atua com base em três pilares interdependentes que estruturam
                todo o processo de proteção institucional.
              </p>

              {/* 3 Pilares Image - Desktop */}
              <div className="hidden md:block mt-8">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/3pilarpc.png?alt=media&token=c7ff0c4c-ab83-4a53-9adf-89c1d10a13b7"
                  alt="Os Três Pilares da Contrainteligência"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              {/* 3 Pilares Image - Mobile */}
              <div className="md:hidden mt-6">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/3pilarmb.png?alt=media&token=5eb38bd2-d1ab-4a95-ad03-079170508266"
                  alt="Os Três Pilares da Contrainteligência"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {operationalPillars.map(({ number, icon: Icon, title, description, example }, idx) => (
                <div key={number} className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-6 overflow-hidden hover:shadow-md hover:border-blue-100 transition-all duration-200">
                  {/* Background number */}
                  <span className="absolute top-4 right-4 text-6xl font-black text-slate-50 select-none leading-none">
                    {number}
                  </span>

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-3 leading-snug">{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{description}</p>
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                      <p className="text-xs text-blue-700 leading-relaxed italic">{example}</p>
                    </div>
                  </div>

                  {/* Connector arrow for non-last items */}
                  {idx < operationalPillars.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 bg-blue-600 rounded-full items-center justify-center shadow-md">
                      <ChevronRight size={12} className="text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Flow diagram text */}
            <div className="bg-gradient-to-r from-slate-900 to-blue-950 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
                {['Identificar Ameaça', 'Mapear Vulnerabilidade', 'Gerir o Risco', 'Proteger o Ativo'].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-blue-600/30 border border-blue-500/40 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-blue-300 text-xs font-black">{i + 1}</span>
                      </div>
                      <p className="text-xs font-semibold text-slate-300 whitespace-nowrap">{step}</p>
                    </div>
                    {i < 3 && <ChevronRight size={16} className="text-blue-700 flex-shrink-0 hidden md:block" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4 — Aplicação na Baixada Fluminense */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 04
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Aplicação Prática na Baixada Fluminense
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-5" />
              <p className="text-slate-600 leading-relaxed max-w-3xl">
                Na Baixada Fluminense, e em especial em Duque de Caxias, a contrainteligência
                assume papel de destaque pela combinação de fatores que amplificam os riscos e
                a necessidade de proteção ativa.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {practicalApplications.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200">
                  <div className="w-11 h-11 bg-blue-700 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-2 leading-snug">{title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Context factors */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Fatores que ampliam a importância da CI em Duque de Caxias
                </h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    label: 'Infraestruturas Críticas',
                    detail: 'Presença da REDUC e do polo petroquímico, essenciais para o abastecimento energético do estado.',
                    color: 'border-l-blue-500',
                  },
                  {
                    label: 'Alta Relevância Logística',
                    detail: 'Posição estratégica na malha rodoviária e ferroviária, tornando o município nó crítico para o escoamento de cargas.',
                    color: 'border-l-slate-500',
                  },
                  {
                    label: 'Pressão de Atores Criminosos',
                    detail: 'Presença de organizações criminosas com capacidade de influência sobre decisões públicas e controle territorial.',
                    color: 'border-l-amber-500',
                  },
                ].map(({ label, detail, color }) => (
                  <div key={label} className={`bg-slate-50 rounded-xl p-5 border border-slate-100 border-l-4 ${color}`}>
                    <h4 className="font-bold text-slate-800 text-sm mb-2">{label}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 5 — Síntese Final */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 05
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Síntese Final
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded" />
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-5">
                <p className="text-slate-600 leading-relaxed text-base">
                  A contrainteligência preventiva funciona como um{' '}
                  <strong className="text-slate-800">escudo invisível</strong>, reduzindo riscos antes
                  que eles se concretizem. Na Baixada Fluminense, especialmente em Duque de Caxias,
                  sua importância é amplificada pela convergência de fatores críticos.
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  Isso torna a CI essencial para garantir{' '}
                  <strong className="text-slate-800">estabilidade, segurança e soberania decisória</strong>{' '}
                  — três pilares que sustentam qualquer instituição de segurança pública eficaz e moderna.
                </p>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  {[
                    { value: 'Preventiva', label: 'Postura padrão' },
                    { value: 'Ativa', label: 'Quando necessária' },
                    { value: '3 Pilares', label: 'Lógica operacional' },
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
                      <p className="text-base font-black text-blue-800 mb-1">{value}</p>
                      <p className="text-xs text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600/30 border border-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ShieldOff size={18} className="text-blue-300" />
                  </div>
                  <h3 className="font-bold text-white text-base">CI Essencial Para</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Garantir estabilidade institucional e operacional',
                    'Proteger a soberania decisória do Estado',
                    'Neutralizar ameaças antes que gerem dano concreto',
                    'Fortalecer a confiança nas instituições públicas',
                    'Preservar infraestruturas críticas regionais',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
