import { Search, FileText, Radio, BookOpen, Zap } from 'lucide-react';

const cycleSteps = [
  {
    icon: Search,
    step: '01',
    title: 'Objetivar',
    description:
      'Fase inicial em que são definidos os temas, prioridades e áreas de atuação da inteligência. Nesse momento, são estabelecidos os objetos de acompanhamento, com base nos interesses da sociedade e do Estado, transformando demandas em focos de monitoramento contínuo.',
  },
  {
    icon: BookOpen,
    step: '02',
    title: 'Acompanhar',
    description:
      'Fase contínua ao longo de todo o ciclo, voltada ao monitoramento permanente das áreas definidas. Envolve o planejamento, coleta e organização de dados, informações e conhecimentos relevantes para compreender a evolução dos cenários.',
  },
  {
    icon: FileText,
    step: '03',
    title: 'Informar',
    description:
      'Ocorre quando são identificados fatos, eventos ou situações que precisam ser comunicados às autoridades. Consiste na produção de conhecimento para apoiar o diagnóstico e orientar decisões, podendo também atender demandas específicas de informação.',
  },
  {
    icon: Radio,
    step: '04',
    title: 'Decidir',
    description:
      'Fase em que o gestor utiliza o conhecimento produzido para definir ações. A decisão considera o contexto, os interesses envolvidos e as possíveis consequências, orientando a escolha do melhor caminho a ser seguido pelo Estado.',
  },
  {
    icon: Zap,
    step: '05',
    title: 'Agir',
    description:
      'Etapa final, em que são executadas as ações definidas anteriormente. Envolve a implementação de medidas pelo Estado, podendo incluir diferentes órgãos, com o objetivo de alcançar os resultados planejados.',
  },
];

export default function Introduction() {
  return (
    <section id="section-0" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            Seção 01
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Introdução à Inteligência
          </h2>
          <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
        </div>

        {/* Concept block */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">
              Conceito de Inteligência na Segurança Pública
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              No contexto da segurança pública, <strong className="text-slate-800">inteligência</strong> é
              o conjunto de atividades destinadas a produzir conhecimento qualificado a partir do
              tratamento sistemático de dados e informações sobre fatos, fenômenos e atores que
              possam afetar a ordem pública e a segurança da comunidade.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Diferencia-se da simples coleta de dados por adicionar valor analítico: a inteligência
              não apenas registra ocorrências, mas interpreta padrões, projeta tendências e orienta
              decisões estratégicas com antecedência — possibilitando a ação preventiva em vez
              de apenas reativa.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">
              Inteligência na Guarda Municipal
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              A Guarda Municipal de Duque de Caxias, enquanto órgão de segurança pública
              municipal, pode se beneficiar diretamente de uma estrutura de inteligência que
              articule seus dados operacionais com análises críticas sobre a dinâmica criminal
              local.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Com o uso de análise de dados aplicada, é possível otimizar o emprego do efetivo,
              identificar regiões de maior risco, antecipar ações criminosas sazonais e fundamentar
              requisições de recursos com base em evidências concretas.
            </p>
          </div>
        </div>

        {/* Cycle */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
          <div className="mb-8 rounded-xl overflow-hidden border border-slate-200 max-w-md mx-auto">
            <img
              src="https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=ciclo.png&version_id=null"
              alt="Ciclo de Inteligência"
              className="w-full h-auto object-contain"
            />
          </div>
          <h3 className="text-center text-base font-bold text-slate-700 uppercase tracking-wider mb-8">
            Ciclo de Inteligência
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {cycleSteps.map(({ icon: Icon, step, title, description }) => (
              <div key={step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center mb-4 shadow-md">
                    <Icon size={24} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-blue-500 tracking-widest mb-1">ETAPA {step}</span>
                  <h4 className="text-base font-bold text-slate-800 mb-2">{title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
