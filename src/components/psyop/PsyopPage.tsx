import { Brain, Target, Radio, Zap, TrendingUp, Lightbulb, AlertTriangle, ChevronRight, Volume2, Radar, Shield, BookOpen } from 'lucide-react';
import Footer from '../Footer';

const influenceDimensions = [
  { label: 'Percepções', desc: 'Como o público-alvo interpreta a realidade' },
  { label: 'Emoções', desc: 'Reações afetivas diante de estímulos' },
  { label: 'Atitudes', desc: 'Disposições favoráveis ou contrárias' },
  { label: 'Comportamentos', desc: 'Ações concretas resultantes' },
];

const targetAudiences = [
  { label: 'Inimigos', color: 'bg-red-600' },
  { label: 'Neutros', color: 'bg-slate-600' },
  { label: 'Aliados', color: 'bg-blue-600' },
];

const psyopTypes = [
  { label: 'Estratégicas', desc: 'Impactam políticas e objetivos nacionais de longo prazo', level: 'Estratégico' },
  { label: 'Operacionais', desc: 'Apoiam campanhas militares e operações de médio prazo', level: 'Operacional' },
  { label: 'Táticas', desc: 'Influência imediata no campo de batalha', level: 'Tático' },
  { label: 'Consolidação', desc: 'Atuam no pós-conflito para estabilização e reconstrução', level: 'Pós-conflito' },
];

const propagandaTypes = [
  {
    type: 'Branca',
    desc: 'Fonte verdadeira e identificada',
    detail: 'A mensagem é atribuída a sua fonte real. Busca credibilidade e transparência.',
    color: 'border-blue-400 bg-blue-50',
    dotColor: 'bg-blue-500',
  },
  {
    type: 'Cinza',
    desc: 'Fonte ambígua ou sem identificação clara',
    detail: 'A origem não é revelada nem negada. Gera dúvida e curiosidade.',
    color: 'border-slate-400 bg-slate-50',
    dotColor: 'bg-slate-500',
  },
  {
    type: 'Negra',
    desc: 'Fonte falsa e enganosa',
    detail: 'A mensagem é atribuída a fonte diversa da real. Alto risco ético e estratégico.',
    color: 'border-amber-400 bg-amber-50',
    dotColor: 'bg-amber-500',
  },
];

const historicalEvolution = [
  {
    period: '2ª Guerra Mundial',
    focus: 'Propaganda de combate (psywar)',
    scope: 'Tático',
    detail: 'PSYOP limitadas à propaganda de combate, com foco exclusivamente tático no campo de batalha.',
  },
  {
    period: 'Guerra da Coreia & Anos 1960',
    focus: 'Continuação de PSYOP tática',
    scope: 'Tático',
    detail: 'Permanência do modelo tático, sem integração com objetivos estratégicos mais amplos.',
  },
  {
    period: 'Pós-Guerra do Vietnã',
    focus: 'Visão ampla — paz e guerra',
    scope: 'Estratégico + Operacional + Tático',
    detail: 'Consolidação de atuação em tempo de paz e guerra, integração de meios militares e civis, papel direto nos objetivos estratégicos nacionais.',
  },
  {
    period: 'Plano de 1985 — Depto. de Defesa',
    focus: 'Integração aos objetivos nacionais',
    scope: 'Integrada e permanente',
    detail: 'Integração das PSYOP aos objetivos nacionais, expansão para cenários de paz, crise e guerra, desenvolvimento doutrinário e operacional.',
  },
];

const employmentObjectives = [
  { icon: Target, title: 'Influenciar decisões', desc: 'Direcionar as escolhas de públicos-alvo conforme interesses estratégicos' },
  { icon: Zap, title: 'Reduzir capacidade adversária', desc: 'Enfraquecer a vontade e a coesão do opositor' },
  { icon: Shield, title: 'Fortalecer legitimidade', desc: 'Consolidar apoio e confiança nas instituições' },
  { icon: Radio, title: 'Moldar ambiente informacional', desc: 'Controlar narrativas e fluxos de informação' },
];

const psyopVsMarketing = [
  { aspect: 'Objetivo', psyop: 'Influenciar decisões e realidades políticas', marketing: 'Vender produtos e serviços' },
  { aspect: 'Público-alvo', psyop: 'Inimigos, neutros, aliados', marketing: 'Consumidores segmentados' },
  { aspect: 'Escala de tempo', psyop: 'Curto, médio e longo prazo', marketing: 'Campanhas cíclicas' },
  { aspect: 'Fundamentos', psyop: 'Persuasão, segmentação, influência', marketing: 'Persuasão, segmentação, influência' },
];

const corePrinciples = [
  {
    number: '01',
    title: 'Credibilidade é Ativo Decisivo',
    detail: 'Sem credibilidade, a influência perde eficácia no longo prazo. A verdade é a melhor propaganda.',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Dimensão Cognitiva do Conflito',
    detail: 'Em conflitos modernos, quem controla a narrativa condiciona o resultado final.',
    icon: Brain,
  },
  {
    number: '03',
    title: 'Integração Estratégica Permanente',
    detail: 'PSYOP deixou de ser propaganda de guerra para se tornar instrumento de poder permanente.',
    icon: Radar,
  },
];

export default function PsyopPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Brain size={14} className="text-blue-400" />
              <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">
                Ramo da Inteligência
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Operações Psicológicas — PSYOP
            </h1>
            <p className="text-slate-300 leading-relaxed text-lg font-light max-w-2xl">
              O emprego planejado de informações e mensagens para influenciar percepções, emoções, atitudes e comportamentos, moldando decisões estratégicas.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-white">

        {/* SEÇÃO 1 — Definição e Essência */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 01
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Definição e Essência das PSYOP
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed text-base">
                  Operações Psicológicas (PSYOP) são o <strong className="text-slate-800">emprego planejado de informações e mensagens direcionadas</strong> para influenciar públicos-alvo — inimigos, neutros ou aliados — com o objetivo de favorecer interesses estratégicos do Estado.
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  Em síntese: <strong className="text-slate-800">PSYOP é o uso da informação como instrumento de poder</strong> para moldar decisões e comportamentos.
                </p>

                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                    Dimensões de Influência
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {influenceDimensions.map((item) => (
                      <div key={item.label} className="bg-white border border-blue-200 rounded-xl p-3">
                        <p className="text-sm font-bold text-slate-800 mb-1">{item.label}</p>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-blue-600/40 border border-blue-500/50 rounded-xl flex items-center justify-center">
                      <Lightbulb size={18} className="text-blue-200" />
                    </div>
                    <h3 className="font-bold text-lg">Princípio Central</h3>
                  </div>
                  <p className="text-base font-light leading-relaxed italic text-blue-100">
                    "A verdade é a melhor propaganda."
                  </p>
                  <p className="text-sm text-blue-200 mt-4 leading-relaxed">
                    A credibilidade é um ativo decisivo. Sem ela, a influência perde eficácia no longo prazo.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                    Públicos-alvo de PSYOP
                  </p>
                  <div className="space-y-3">
                    {targetAudiences.map((target) => (
                      <div key={target.label} className="flex items-center gap-3">
                        <div className={`w-7 h-7 ${target.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Volume2 size={12} className="text-white" />
                        </div>
                        <span className="text-sm font-semibold text-slate-700">{target.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block mt-12">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/psyop%20pc.png?alt=media&token=86f80e4f-8604-4e42-8a06-5e6e22602edf"
                alt="PSYOP - Definição e Essência"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:hidden mt-8">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/psyop%20mb.png?alt=media&token=effbe8d3-687b-4034-bb8d-a29b3f4f05e1"
                alt="PSYOP - Definição e Essência"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* SEÇÃO 2 — Evolução do Conceito */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 02
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Evolução do Conceito
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                As PSYOP evoluíram de meras ações tático-operacionais para instrumentos estratégicos integrados aos objetivos nacionais.
              </p>
            </div>

            <div className="space-y-4 mb-10">
              {historicalEvolution.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 p-6">
                    <div className="w-16 flex-shrink-0 flex items-center justify-center">
                      <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-700 text-white font-black text-sm rounded-xl">
                        {idx + 1}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 text-base mb-1">{item.period}</h3>
                      <p className="text-sm text-slate-600 mb-1">{item.focus}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-lg px-4 py-2 md:ml-auto w-fit flex-shrink-0">
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{item.scope}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600/40 border border-blue-500/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={18} className="text-blue-200" />
                </div>
                <h3 className="font-bold text-white text-base">Transformação Fundamental</h3>
              </div>
              <p className="text-sm text-blue-100 leading-relaxed">
                PSYOP deixou de ser <strong>apenas propaganda de guerra</strong> e se tornou um <strong>instrumento estratégico de poder</strong>, atuando permanentemente na dimensão cognitiva do conflito — em tempo de paz, crise e guerra.
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3 — Níveis de Atuação */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 03
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Níveis de Atuação
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                As PSYOP operam em múltiplos níveis, do tático ao estratégico, cada um com escopo e impacto distintos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { level: 'Tático', desc: 'Influência imediata no campo de batalha', color: 'bg-blue-600', icon: Zap },
                { level: 'Operacional', desc: 'Apoio a campanhas militares e operações de maior escala', color: 'bg-blue-700', icon: Radio },
                { level: 'Estratégico', desc: 'Impacto em políticas e objetivos nacionais de longo prazo', color: 'bg-blue-900', icon: Target },
              ].map(({ level, desc, color, icon: Icon }, idx) => (
                <div key={level} className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-lg hover:border-blue-100 transition-all duration-200">
                  <span className="absolute top-4 right-4 text-6xl font-black text-slate-50 select-none leading-none">
                    {idx + 1}
                  </span>
                  <div className="relative z-10">
                    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{level}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 4 — Estrutura e Classificação */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 04
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Estrutura e Classificação
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-5">Tipos de PSYOP</h3>
                <div className="space-y-3">
                  {psyopTypes.map((type, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 rounded-xl p-4 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0">
                          {idx + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-slate-900 text-sm">{type.label}</h4>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-2 py-0.5">{type.level}</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">{type.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-5">Tipos de Propaganda</h3>
                <div className="space-y-3">
                  {propagandaTypes.map((prop, idx) => (
                    <div key={idx} className={`rounded-xl p-5 border-l-4 ${prop.color}`}>
                      <div className="flex items-start gap-3">
                        <div className={`w-3 h-3 rounded-full ${prop.dotColor} flex-shrink-0 mt-1`} />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-slate-900 text-sm mb-1">{prop.type}</h4>
                          <p className="text-xs text-slate-600 leading-relaxed mb-1">{prop.desc}</p>
                          <p className="text-xs text-slate-400 leading-relaxed">{prop.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={14} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-700 leading-relaxed">
                      <strong>Atenção:</strong> A propaganda negra, embora eficaz a curto prazo, é danosa à confiança institucional. PSYOP deve ser empregada sob rigorosa supervisão legal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block mt-12">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/psyop%20pcc%20(1).png?alt=media&token=32d10f56-ae69-4c3f-9ae6-b43db23acf75"
                alt="PSYOP - Estrutura e Classificação"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:hidden mt-8">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/psyop%20mbb.png?alt=media&token=77c7c010-7b0e-4238-af29-1f9897c3c098"
                alt="PSYOP - Estrutura e Classificação"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* SEÇÃO 5 — Lógica de Emprego */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 05
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Lógica de Emprego
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                As PSYOP baseiam-se na ideia de que <strong className="text-slate-800">percepção gera comportamento — e comportamento gera resultado estratégico</strong>.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {employmentObjectives.map(({ icon: Icon, title, desc }, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md hover:border-blue-100 transition-all duration-200">
                  <div className="w-11 h-11 bg-blue-700 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-2 leading-snug">{title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-blue-950 rounded-2xl p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6 text-center">
                Lógica Fundamental
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
                {[
                  { label: 'Percepção', sub: 'Moldar como o público vê a realidade' },
                  { label: 'Comportamento', sub: 'Influenciar ações e decisões' },
                  { label: 'Resultado Estratégico', sub: 'Alcançar objetivos do Estado' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-600/30 border border-blue-500/40 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-blue-300 text-sm font-black">{i + 1}</span>
                      </div>
                      <p className="text-sm font-bold text-white whitespace-nowrap">{step.label}</p>
                      <p className="text-xs text-slate-400 mt-1 max-w-[140px]">{step.sub}</p>
                    </div>
                    {i < 2 && <ChevronRight size={18} className="text-blue-700 flex-shrink-0 hidden md:block" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:block mt-12">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/psyop%20logic%20pc.png?alt=media&token=ddc0fc6c-5fcf-451c-8a2d-a11d8b96ad30"
                alt="PSYOP - Lógica de Emprego"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:hidden mt-8">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/psyop%20logic%20mb.png?alt=media&token=9e07a0f9-d354-4160-bc4c-057a06b221ef"
                alt="PSYOP - Lógica de Emprego"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* SEÇÃO 6 — PSYOP e Marketing */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 06
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                PSYOP e Marketing
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-3xl">
                PSYOP compartilha fundamentos com o marketing — persuasão estratégica, segmentação de público e influência comportamental. A diferença central: <strong className="text-slate-800">marketing vende produtos; PSYOP influencia decisões e realidades políticas</strong>.
              </p>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm mb-10">
              <table className="w-full text-sm">
                <thead className="bg-slate-800 border-b border-slate-700">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-white">Aspecto</th>
                    <th className="px-6 py-4 text-left font-bold text-slate-300">PSYOP</th>
                    <th className="px-6 py-4 text-left font-bold text-slate-300">Marketing</th>
                  </tr>
                </thead>
                <tbody>
                  {psyopVsMarketing.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-6 py-4 font-bold text-slate-900">{row.aspect}</td>
                      <td className="px-6 py-4 text-slate-600 leading-relaxed">{row.psyop}</td>
                      <td className="px-6 py-4 text-slate-600 leading-relaxed">{row.marketing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900">Fundamentos Comuns</h3>
                </div>
                <ul className="space-y-2">
                  {['Persuasão estratégica', 'Segmentação de público', 'Influência comportamental'].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-700 border border-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target size={18} className="text-slate-300" />
                  </div>
                  <h3 className="font-bold text-white">Diferença Central</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  <strong className="text-white">PSYOP</strong> influencia decisões e realidades políticas. <strong className="text-white">Marketing</strong> vende produtos e serviços.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 7 — Princípios Essenciais */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 07
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Princípios Essenciais
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {corePrinciples.map(({ number, title, detail, icon: Icon }) => (
                <div key={number} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-lg hover:border-blue-100 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-700 text-white font-black text-base rounded-xl shadow-sm">
                      {number}
                    </span>
                    <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-blue-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-3 leading-snug">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 8 — Síntese Final */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 08
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Síntese Final
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded" />
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-5">
                <p className="text-slate-600 leading-relaxed text-base">
                  PSYOP deixou de ser apenas propaganda de guerra e se tornou um <strong className="text-slate-800">instrumento estratégico de poder</strong>, atuando na dimensão cognitiva do conflito.
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  Seu emprego baseia-se em um princípio fundamental: <strong className="text-slate-800">percepção gera comportamento, e comportamento gera resultado estratégico</strong>.
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  Em conflitos modernos, <strong className="text-slate-800">quem controla a narrativa, condiciona o resultado</strong>.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    { label: 'Dimensão', value: 'Cognitiva' },
                    { label: 'Escopo', value: 'Estratégico' },
                    { label: 'Base', value: 'Credibilidade' },
                    { label: 'Foco', value: 'Narrativa' },
                  ].map((item) => (
                    <div key={item.label} className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
                      <p className="text-[10px] text-slate-500 mb-1 uppercase tracking-widest font-bold">{item.label}</p>
                      <p className="text-base font-black text-blue-800">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600/30 border border-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain size={18} className="text-blue-300" />
                  </div>
                  <h3 className="font-bold text-white text-base">PSYOP Modernas Atuam em</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Moldar narrativas e percepções públicas',
                    'Influenciar decisões políticas e militares',
                    'Fortalecer legitimidade institucional',
                    'Fragmentar coesão adversária',
                    'Conquistar apoio de públicos-chave',
                    'Controlar o ambiente informacional',
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

        {/* SEÇÃO 9 — Recomendações de Leitura e Vídeos */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 09
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Materiais Recomendados
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                Vídeos e materiais adicionais para aprofundamento teórico e prático sobre PSYOP.
              </p>
            </div>

            <div className="space-y-12">
              {/* Vídeo 1 */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative bg-slate-900 aspect-video overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="none"
                    poster="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/video2thumb.png?alt=media&token=e8d315c2-8bba-45c0-9b9f-d318151c874f"
                  >
                    <source src="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/video1.mp4?alt=media&token=3ed8e033-259f-49cb-8a3a-78c436ae2f36" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-bold text-slate-900 text-lg mb-4">Vídeo 1 — Eventos Internos e Percepção de Segurança</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Eventos internos de alto impacto, como a morte ou afastamento de uma liderança, podem alterar a percepção de segurança e confiança dentro de uma organização criminosa. Esses episódios tendem a gerar incerteza, disputas internas e maior percepção de vulnerabilidade. Em paralelo, ações institucionais de comunicação e políticas de justiça podem aproveitar esse contexto para reforçar a percepção de risco, ampliar incentivos legais à colaboração e estimular a reavaliação de decisões individuais. Nesses casos, o fator decisivo não é o evento em si, mas a forma como ele é percebido e o ambiente de informação ao redor.
                  </p>
                  <br></br>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Em cenários de disputa estratégica, campanhas de influência podem explorar fatores como:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Incerteza organizacional',
                      'Percepção de risco pessoal',
                      'Confiança entre membros de uma instituição',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 mt-1.5" />
                        <span className="text-sm text-slate-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Quando esses elementos são afetados, podem surgir efeitos como:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Aumento da cautela ou hesitação',
                      'Redução da coesão interna',
                      'Maior abertura a alternativas (ex: cooperação, deserção, mudança de comportamento)',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500 flex-shrink-0 mt-1.5" />
                        <span className="text-sm text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      O ponto-chave: não é a violência em si, mas a <strong className="text-blue-800">percepção de vulnerabilidade e risco</strong> que impacta o comportamento.
                    </p>
                </div>
              </div>

              {/* Vídeo 2 */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative bg-slate-900 aspect-video overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="none"
                    poster="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/video1thumb.png?alt=media&token=03db9239-e2a5-4bae-9d2f-2635bc1b1a0a"
                  >
                    <source src="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/video2%20c.mp4?alt=media&token=2612a10b-2d5d-423d-b7d9-2ed71db99633" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-bold text-slate-900 text-lg mb-4">Vídeo 2 — Dinâmica Psicológica em Operações de Influência</h3>
                  
                  </div>
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
