import { MapPin, Layers, Target, ArrowRight, Shield, Building2, Users, BarChart3, ChevronRight, Globe, Crosshair, Network } from 'lucide-react';
import Footer from '../Footer';

const territorialLevels = [
  {
    acronym: 'CISP',
    full: 'Circunscrição Integrada de Segurança Pública',
    level: 'Operacional',
    levelColor: 'bg-blue-600',
    icon: Crosshair,
    description:
      'Unidade territorial básica de integração entre Delegacias da Polícia Civil (SEPOL) e Companhias da Polícia Militar (SEPM).',
    objectives: [
      'Padronização do policiamento',
      'Apuração local dos indicadores de criminalidade',
      'Resposta operacional mais precisa',
    ],
    color: 'from-blue-600 to-blue-800',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    dotColor: 'bg-blue-500',
  },
  {
    acronym: 'AISP',
    full: 'Área Integrada de Segurança Pública',
    level: 'Tático',
    levelColor: 'bg-amber-600',
    icon: Network,
    description:
      'Correspondem às áreas de atuação de um batalhão da Polícia Militar, integrando múltiplas CISP.',
    objectives: [
      'Coordenar ações entre Polícia Civil e Militar',
      'Fortalecer a gestão territorial da segurança',
      'Estimular a integração com a comunidade',
    ],
    color: 'from-amber-600 to-amber-800',
    borderColor: 'border-amber-200',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-700',
    dotColor: 'bg-amber-500',
  },
  {
    acronym: 'RISP',
    full: 'Região Integrada de Segurança Pública',
    level: 'Estratégico',
    levelColor: 'bg-red-700',
    icon: Globe,
    description:
      'Estrutura de articulação regional que integra Departamentos de Polícia de Área (SEPOL) e Comandos de Policiamento de Área (SEPM).',
    objectives: [
      'Definição de estratégias regionais',
      'Integração interinstitucional',
      'Gestão de recursos humanos e logísticos',
      'Monitoramento de metas operacionais',
    ],
    color: 'from-red-700 to-red-900',
    borderColor: 'border-red-200',
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
    dotColor: 'bg-red-500',
  },
];

const structuralSummary = [
  {
    acronym: 'CISP',
    role: 'Execução operacional local',
    icon: Crosshair,
    color: 'bg-blue-600',
  },
  {
    acronym: 'AISP',
    role: 'Coordenação tática intermediária',
    icon: Network,
    color: 'bg-amber-600',
  },
  {
    acronym: 'RISP',
    role: 'Planejamento estratégico regional',
    icon: Globe,
    color: 'bg-red-700',
  },
];

const modelObjectives = [
  {
    icon: Users,
    title: 'Integração institucional',
    desc: 'Articulação efetiva entre as instituições policiais',
  },
  {
    icon: MapPin,
    title: 'Eficiência territorial',
    desc: 'Gestão otimizada do espaço geográfico de atuação',
  },
  {
    icon: BarChart3,
    title: 'Decisão baseada em dados',
    desc: 'Informações como fundamento da tomada de decisão',
  },
  {
    icon: Target,
    title: 'Resposta coordenada',
    desc: 'Reação rápida e articulada às demandas de segurança',
  },
];

const rispRegions = 7;

const duqueDeCaxiasStructure = [
  {
    level: 'RISP',
    fullName: 'Região Integrada de Segurança Pública',
    hierarchy: 'Nível Estratégico',
    location: '3ª RISP — Baixada Fluminense',
    description: 'Duque de Caxias pertence à 3ª RISP, uma região que engloba municípios da Baixada e é responsável pelo planejamento estratégico regional.',
    icon: Globe,
    color: 'from-red-700 to-red-900',
    bgLight: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-700',
  },
  {
    level: 'AISP',
    fullName: 'Área Integrada de Segurança Pública',
    hierarchy: 'Nível Tático',
    location: '15º BPM — AISP 15',
    description: 'Duque de Caxias está dentro da área do 15º Batalhão da Polícia Militar, portanto pertence à AISP 15. Essa AISP cobre toda a área operacional do batalhão.',
    icon: Network,
    color: 'from-amber-600 to-amber-800',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-700',
  },
];

const duqueDeCaxiasCISP = [
  {
    code: '59ª DP',
    name: 'Duque de Caxias',
    district: 'Centro',
    desc: 'Sede administrativa da Polícia Civil no município',
  },
  {
    code: '60ª DP',
    name: 'Campos Elíseos',
    district: 'Campos Elíseos',
    desc: 'Cobertura da região de Campos Elíseos',
  },
  {
    code: '61ª DP',
    name: 'Xerém',
    district: 'Xerém',
    desc: 'Cobertura da região de Xerém',
  },
  {
    code: '62ª DP',
    name: 'Imbariê',
    district: 'Imbariê',
    desc: 'Cobertura da região de Imbariê',
  },
];

export default function RISPPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
            <MapPin size={14} className="text-blue-400" />
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest">
              Estrutura Territorial — RJ
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Divisão Territorial da<br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Segurança Pública
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A estrutura territorial da segurança pública do Estado do Rio de Janeiro foi organizada para integrar o planejamento estratégico e a coordenação operacional entre as forças policiais, garantindo maior eficiência na prevenção e repressão à criminalidade.
          </p>
          <div className="flex items-center justify-center gap-3 mt-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Organização em</span>
            <span className="inline-flex items-center gap-1.5 bg-blue-600/20 border border-blue-500/30 rounded-full px-3 py-1.5">
              <Layers size={12} className="text-blue-400" />
              <span className="text-sm font-bold text-blue-300">3 níveis</span>
            </span>
            <span className="text-slate-600">·</span>
            <span className="inline-flex items-center gap-1.5 bg-red-600/20 border border-red-500/30 rounded-full px-3 py-1.5">
              <Globe size={12} className="text-red-400" />
              <span className="text-sm font-bold text-red-300">{rispRegions} RISP</span>
            </span>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-white">
        {/* SEÇÃO 1 — Os Três Níveis */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 01
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                CISP, AISP e RISP
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                Essa organização se baseia em três níveis principais, cada um com escopo e responsabilidade distintos, articulados de forma hierárquica e integrada.
              </p>
            </div>

            <div className="space-y-8">
              {territorialLevels.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.acronym}
                    className={`rounded-2xl border ${item.borderColor} ${item.bgColor} overflow-hidden hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="grid lg:grid-cols-5 gap-0">
                      {/* Left — Identity */}
                      <div className={`lg:col-span-2 bg-gradient-to-br ${item.color} p-8 md:p-10 flex flex-col justify-between`}>
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-white/15 border border-white/20 rounded-xl flex items-center justify-center">
                              <Icon size={22} className="text-white" />
                            </div>
                            <span className="text-3xl font-black text-white tracking-tight">{item.acronym}</span>
                          </div>
                          <p className="text-sm font-medium text-white/80 leading-relaxed mb-6">{item.full}</p>
                          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5">
                            <span className="w-2 h-2 rounded-full bg-white/60" />
                            <span className="text-xs font-bold text-white/90 uppercase tracking-wider">Nível {item.level}</span>
                          </div>
                        </div>
                        <div className="mt-8 hidden lg:flex items-center gap-2 text-white/40">
                          <span className="text-xs font-mono">{String(idx + 1).padStart(2, '0')}</span>
                        </div>
                      </div>

                      {/* Right — Details */}
                      <div className="lg:col-span-3 p-8 md:p-10">
                        <p className="text-slate-700 text-base leading-relaxed mb-6">{item.description}</p>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                            {item.acronym === 'AISP' ? 'Objetivos principais' : 'Finalidades'}
                          </p>
                          <div className="space-y-3">
                            {item.objectives.map((obj, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <div className={`w-2 h-2 rounded-full ${item.dotColor} flex-shrink-0 mt-1.5`} />
                                <span className="text-sm text-slate-700 leading-relaxed">{obj}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {item.acronym === 'AISP' && (
                          <div className="mt-6 bg-white border border-slate-200 rounded-xl p-4">
                            <p className="text-xs text-slate-500 leading-relaxed">
                              Atuam como elo entre o nível operacional e o planejamento regional.
                            </p>
                          </div>
                        )}
                        {item.acronym === 'RISP' && (
                          <div className="mt-6 bg-white border border-slate-200 rounded-xl p-4">
                            <p className="text-xs text-slate-500 leading-relaxed">
                              O Estado do Rio de Janeiro está dividido em <strong className="text-slate-700">{rispRegions} RISP</strong>, distribuídas conforme características territoriais e operacionais.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Imagens de referência */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-8">
                Referência Visual — Estrutura Territorial
              </p>
              <div className="grid lg:grid-cols-2 gap-6 mb-6">
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                  <img
                    src="https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=RISP.png&version_id=null"
                    alt="RISP"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                  <img
                    src="https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=AISP.png&version_id=null"
                    alt="AISP"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                <img
                  src="https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=CISP.png&version_id=null"
                  alt="CISP"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2 — Síntese Estrutural */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 02
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Síntese Estrutural
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                A articulação entre os três níveis garante coerência entre execução local, coordenação intermediária e planejamento regional.
              </p>
            </div>

            {/* Flow diagram */}
            <div className="bg-gradient-to-r from-slate-900 to-blue-950 rounded-2xl p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-10 text-center">
                Fluxo Hierárquico
              </p>
              <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
                {structuralSummary.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.acronym} className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                          <Icon size={26} className="text-white" />
                        </div>
                        <p className="text-lg font-black text-white mb-1">{item.acronym}</p>
                        <p className="text-xs text-slate-400 max-w-[160px]">{item.role}</p>
                      </div>
                      {idx < 2 && (
                        <div className="hidden md:flex items-center">
                          <ArrowRight size={20} className="text-blue-500/60" />
                        </div>
                      )}
                      {idx < 2 && (
                        <div className="md:hidden flex items-center">
                          <ChevronRight size={20} className="text-blue-500/60 rotate-90" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {structuralSummary.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.acronym}
                    className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md hover:border-slate-200 transition-all duration-200"
                  >
                    <div className={`w-11 h-11 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.acronym}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.role}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEÇÃO 3 — Finalidade do Modelo */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 03
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Finalidade do Modelo
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                O modelo de divisão territorial visa garantir uma atuação policial integrada, eficiente e orientada por dados.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {modelObjectives.map(({ icon: Icon, title, desc }, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md hover:border-blue-100 transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mb-5 shadow-sm">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-2 leading-snug">{title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Highlight box */}
            <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-blue-600/40 border border-blue-500/50 rounded-xl flex items-center justify-center">
                  <Shield size={18} className="text-blue-200" />
                </div>
                <h3 className="font-bold text-lg">Princípio Central</h3>
              </div>
              <p className="text-base font-light leading-relaxed italic text-blue-100">
                "A integração territorial é o fundamento para uma segurança pública efetiva, coordenada e responsiva."
              </p>
              <p className="text-sm text-blue-200 mt-4 leading-relaxed">
                Sem articulação entre os níveis operacional, tático e estratégico, a ação policial perde coerência e eficácia.
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4 — Duque de Caxias na Estrutura */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 04
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Duque de Caxias na Estrutura de Segurança do RJ
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                Conheça como Duque de Caxias se insere na divisão territorial e na hierarquia da segurança pública estadual.
              </p>
            </div>

            {/* RISP e AISP */}
            <div className="space-y-6 mb-12">
              {duqueDeCaxiasStructure.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.level}
                    className={`rounded-2xl border ${item.borderColor} ${item.bgLight} overflow-hidden hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="grid lg:grid-cols-4 gap-0">
                      {/* Left — Color band */}
                      <div className={`lg:col-span-1 bg-gradient-to-br ${item.color} p-8 md:p-10 flex flex-col justify-between`}>
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Icon size={20} className="text-white" />
                            <span className="text-2xl font-black text-white">{item.level}</span>
                          </div>
                          <p className="text-xs font-medium text-white/80">{item.hierarchy}</p>
                        </div>
                      </div>

                      {/* Right — Details */}
                      <div className="lg:col-span-3 p-8 md:p-10">
                        <div className="flex items-start gap-3 mb-4">
                          <div className={`w-2 h-2 rounded-full ${item.textColor} flex-shrink-0 mt-1`} />
                          <div>
                            <p className="font-bold text-slate-900 text-lg">{item.location}</p>
                            <p className="text-sm text-slate-600 leading-relaxed mt-1">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CISP — Delegacias */}
            <div className="bg-white rounded-2xl border border-blue-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 md:px-10 py-8">
                <div className="flex items-center gap-3 mb-2">
                  <Crosshair size={22} className="text-white" />
                  <h3 className="text-2xl font-black text-white">CISP</h3>
                </div>
                <p className="text-sm text-blue-100">Nível Operacional</p>
              </div>

              <div className="p-8 md:p-10">
                <p className="text-slate-600 leading-relaxed mb-8">
                  As CISP são baseadas nas delegacias da Polícia Civil. Em Duque de Caxias, as principais unidades são:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {duqueDeCaxiasCISP.map((cisp, idx) => (
                    <div
                      key={cisp.code}
                      className="rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 p-6"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xs">{idx + 1}</span>
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{cisp.code}</p>
                          <p className="text-xs text-slate-500">{cisp.name}</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{cisp.desc}</p>
                      <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200">
                        Região: <span className="font-semibold text-slate-700">{cisp.district}</span>
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-bold">Integração operacional:</span> Cada uma dessas delegacias corresponde a uma CISP, com atuação integrada com a Polícia Militar naquela área específica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
