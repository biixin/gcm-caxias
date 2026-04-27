import { Users, AlertCircle, CheckCircle, ArrowRight, Target, Shield, Briefcase, Database } from 'lucide-react';
import Footer from '../Footer';

const disadvantages = [
  'Elevado risco operacional em infiltração e recrutamento que exigem contato direto',
  'Pequenas falhas podem comprometer a operação e expor agentes e fontes',
  'Avanços em contrainteligência e tecnologia aumentaram a dificuldade de atuação',
  'Tempo longo para capacitação de operadores e estabelecimento de vínculos',
  'Ambiente VUCA exige rapidez na produção de conhecimento',
];

const advantages = [
  'Produção de informações qualitativas, detalhadas e inéditas',
  'Interpretação humana capta nuances que recursos tecnológicos não alcançam',
  'Avaliação facilitada da credibilidade das informações pela relação operador-fonte',
  'Elevada flexibilidade com múltiplas técnicas de aplicação',
  'Aplicação universal em qualquer contexto envolvendo pessoas',
  'Especialmente eficaz contra alvos com baixa assinatura eletrônica',
];

const sourceProfiles = [
  'Forças militares (amigas, neutras ou hostis)',
  'Civis e habitantes locais',
  'Refugiados e deslocados',
  'Membros de organizações governamentais',
  'Funcionários de ONGs',
];

const collectorRequirements = [
  { label: 'Treinamento', desc: 'Qualificação técnica e operacional especializada' },
  { label: 'Certificação', desc: 'Credenciais de autoridade e competência' },
  { label: 'Autorização', desc: 'Mandato legal e institucional para operar' },
  { label: 'Conformidade', desc: 'Rigorosa observância de legislação e normas' },
];

const humintPhases = [
  {
    phase: '01',
    title: 'Planejamento e Preparação',
    desc: 'Pesquisa e planejamento da operação com base na fonte e nos objetivos',
    icon: Target,
  },
  {
    phase: '02',
    title: 'Abordagem (Approach)',
    desc: 'Estabelecimento de controle e criação de rapport para obter cooperação',
    icon: Users,
  },
  {
    phase: '03',
    title: 'Questionamento (Questioning)',
    desc: 'Uso de técnicas como interrogatório, debriefing ou elicitação para coletar informações',
    icon: Briefcase,
  },
  {
    phase: '04',
    title: 'Encerramento (Termination)',
    desc: 'Finalização da interação, preservando condições para contatos futuros',
    icon: Shield,
  },
  {
    phase: '05',
    title: 'Relato (Reporting)',
    desc: 'Produção e envio de relatórios com as informações coletadas',
    icon: Database,
  },
];

export default function HUMINTPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Users size={14} className="text-blue-400" />
              <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">
                Ramo da Inteligência
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              HUMINT — Inteligência de Fontes Humanas
            </h1>
            <p className="text-slate-300 leading-relaxed text-lg font-light max-w-2xl">
              Human Intelligence (HUMINT) — a arte e ciência de obter conhecimento estratégico através de interação direta com fontes humanas, utilizando técnicas de coleta operacional avançadas.
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
                Definição e Essência da HUMINT
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed text-base">
                  A inteligência de fontes humanas, atualmente denominada <strong className="text-slate-800">Human Intelligence (HUMINT)</strong>, é a expressão usada em substituição ao termo espionagem, considerado inadequado sob o prisma ético e legal.
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  A HUMINT compreende diversas técnicas operacionais para a obtenção do dado não disponível, sendo as mais conhecidas: <strong className="text-slate-800">entrevista, interrogatório, recrutamento e infiltração</strong>. Este estudo considera o recrutamento e a infiltração, por serem as técnicas que apresentam maior grau de risco para os envolvidos.
                </p>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-4">
                    Técnicas Operacionais
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: 'Entrevista', value: 'Coleta aberta com consentimento' },
                      { label: 'Interrogatório', value: 'Questionamento estruturado' },
                      { label: 'Recrutamento', value: 'Estabelecimento de parceria' },
                      { label: 'Infiltração', value: 'Inserção encoberda de agentes' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3 pb-3 border-b border-slate-200 last:border-0 last:pb-0">
                        <span className="text-xs font-bold text-slate-500 min-w-fit">{item.label}</span>
                        <span className="text-sm text-slate-700">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-blue-600/40 border border-blue-500/50 rounded-xl flex items-center justify-center">
                      <Users size={18} className="text-blue-200" />
                    </div>
                    <h3 className="font-bold text-lg">Princípio Central</h3>
                  </div>
                  <p className="text-base font-light leading-relaxed italic text-blue-100">
                    "Obter conhecimento através da relação humana e interpretação qualitativa."
                  </p>
                  <p className="text-sm text-blue-200 mt-4 leading-relaxed">
                    A HUMINT utiliza a capacidade humana de estabelecer relações, avaliar credibilidade e captar nuances impossíveis de serem detectadas por sistemas automatizados.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                    Objetivo Principal
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Produzir inteligência qualitativa, detalhada e frequentemente inédita, obtida através de coleta direta de fontes humanas com conhecimento específico dos alvos de interesse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2 — Desvantagens */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 02
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Desvantagens e Desafios Operacionais
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                A HUMINT apresenta desafios significativos que precisam ser gerenciados cuidadosamente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {disadvantages.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 mb-2">Ambiente VUCA:</p>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Em um ambiente Volátil, Incerto, Complexo e Ambíguo, a HUMINT enfrenta dificuldade em fornecer rapidez — o tempo necessário para capacitar operadores e estabelecer vínculos com informantes contrasta com a velocidade exigida para decisões estratégicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3 — Vantagens */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 03
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Vantagens Estratégicas da HUMINT
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                Apesar dos desafios, a HUMINT oferece capacidades únicas e insubstituíveis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600/40 border border-blue-500/40 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target size={18} className="text-blue-200" />
                </div>
                <h3 className="font-bold text-white text-base">Aplicabilidade Universal</h3>
              </div>
              <p className="text-sm text-blue-100 leading-relaxed">
                Como toda organização envolve pessoas, a HUMINT pode ser utilizada em qualquer contexto, sendo especialmente eficaz contra alvos com baixa assinatura eletrônica, como organizações criminosas e grupos terroristas que evitam exposição digital.
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4 — Atores HUMINT */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 04
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Atores na Cadeia HUMINT
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                A operação HUMINT envolve atores especializados com papéis e responsabilidades bem definidos.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* HUMINT Source */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-200">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white/20 border border-white/30 rounded-lg flex items-center justify-center">
                      <Users size={18} className="text-white" />
                    </div>
                    <h3 className="font-bold text-white text-lg">HUMINT Source</h3>
                  </div>
                  <p className="text-blue-100 text-xs uppercase tracking-widest font-semibold">Fonte de Informação</p>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 leading-relaxed mb-5 text-sm">
                    Pessoa da qual se obtém informação, com conhecimento direto ou indireto (obtido por observação ou relato).
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Perfis de Fontes</p>
                  <div className="space-y-2">
                    {sourceProfiles.map((profile) => (
                      <div key={profile} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 mt-1.5" />
                        <span className="text-sm text-slate-700">{profile}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* HUMINT Collector */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-200">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white/20 border border-white/30 rounded-lg flex items-center justify-center">
                      <Briefcase size={18} className="text-white" />
                    </div>
                    <h3 className="font-bold text-white text-lg">HUMINT Collector</h3>
                  </div>
                  <p className="text-blue-100 text-xs uppercase tracking-widest font-semibold">Coletor Operacional</p>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 leading-relaxed mb-5 text-sm">
                    Profissional treinado, certificado e autorizado a coletar informações diretamente de fontes humanas para atender demandas de inteligência.
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Requisitos Obrigatórios</p>
                  <div className="space-y-3">
                    {collectorRequirements.map((req) => (
                      <div key={req.label} className="pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                        <p className="text-xs font-bold text-blue-600 mb-1">{req.label}</p>
                        <p className="text-xs text-slate-600">{req.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 5 — Fases da Coleta */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 05
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Fases da Coleta HUMINT
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                O processo de coleta HUMINT segue uma sequência operacional estruturada e metodológica.
              </p>
            </div>

            <div className="space-y-4">
              {humintPhases.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 p-6">
                      <div className="w-16 flex-shrink-0 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-2">
                          <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-700 text-white font-black text-sm rounded-xl">
                            {item.phase}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon size={18} className="text-blue-700" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                      {idx < humintPhases.length - 1 && (
                        <ArrowRight size={20} className="text-slate-400 hidden md:block flex-shrink-0" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600/40 border border-blue-500/40 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield size={18} className="text-blue-200" />
                </div>
                <h3 className="font-bold text-white text-base">Ciclo Contínuo</h3>
              </div>
              <p className="text-sm text-blue-100 leading-relaxed">
                Embora apresentadas sequencialmente, as fases da coleta HUMINT podem se sobrepor ou serem reexecutadas conforme necessário. O ciclo de feedback — especialmente a fase de relato — pode gerar novas demandas, reiniciando o processo com informações refinadas.
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 6 — Síntese Final */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 06
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Síntese Final
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded" />
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-5">
                <p className="text-slate-600 leading-relaxed text-base">
                  A HUMINT permanece como um <strong className="text-slate-800">pilar fundamental da inteligência moderna</strong>, oferecendo capacidades que não podem ser inteiramente replicadas por tecnologia.
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  Seu diferencial reside na <strong className="text-slate-800">capacidade de estabelecer relacionamentos, avaliar credibilidade humana e captar informações em contextos onde meios automatizados falham</strong>.
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  No entanto, sua aplicação exige <strong className="text-slate-800">profissionais altamente qualificados, rigoroso cumprimento legal e gerenciamento eficiente de risco</strong> — especialmente em operações de infiltração e recrutamento.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    { label: 'Qualidade', value: 'Premium' },
                    { label: 'Risco', value: 'Elevado' },
                    { label: 'Expertise', value: 'Crítica' },
                    { label: 'Tempo', value: 'Longo' },
                  ].map((item) => (
                    <div key={item.label} className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
                      <p className="text-[10px] text-slate-500 mb-1 uppercase tracking-widest font-bold">{item.label}</p>
                      <p className="text-base font-black text-blue-700">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600/30 border border-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users size={18} className="text-blue-300" />
                  </div>
                  <h3 className="font-bold text-white text-base">HUMINT em Segurança Pública</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Infiltração em organizações criminosas para inteligência interna',
                    'Recrutamento de informantes com acesso a redes de interesse',
                    'Interrogatório e debriefing de suspeitos e testemunhas',
                    'Avaliação de credibilidade e validação de informações',
                    'Construção de conhecimento sobre lideranças e estruturas organizacionais',
                    'Apoio a operações táticas com inteligência humana real-time',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
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
