
import { Check, FileText, Brain, Scale, Users, Briefcase, Award } from 'lucide-react';
import LeadForm from './LeadForm'; // ajuste o caminho se necessário

export default function Benefits() {
  const benefits = [
    {
      icon: <FileText className="h-10 w-10 text-gold-DEFAULT" />,
      title: "Modelos de Peças Otimizadas",
      description: "Acesso a templates exclusivos de peças criminais já testadas e aperfeiçoadas por especialistas."
    },
    {
      icon: <Brain className="h-10 w-10 text-gold-DEFAULT" />,
      title: "Estratégias Psicológicas",
      description: "Técnicas de persuasão e argumentação baseadas em psicologia forense para influenciar decisões."
    },
    {
      icon: <Scale className="h-10 w-10 text-gold-DEFAULT" />,
      title: "Análise de Jurisprudência",
      description: "Estudo de casos reais e como utilizá-los estrategicamente em suas defesas criminais."
    },
    {
      icon: <Users className="h-10 w-10 text-gold-DEFAULT" />,
      title: "Comunidade Exclusiva",
      description: "Acesso ao grupo privado de WhatsApp com outros advogados para troca de experiências."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-gold-DEFAULT" />,
      title: "Gestão de Casos Criminais",
      description: "Métodos práticos para organizar e conduzir seus casos com máxima eficiência."
    },
    {
      icon: <Award className="h-10 w-10 text-gold-DEFAULT" />,
      title: "Certificado de Conclusão",
      description: "Receba um certificado digital após finalizar a leitura e responder o questionário final."
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que você vai <span className="text-gold-DEFAULT">conquistar</span> com este eBook
          </h2>
          <p className="text-lg text-gray-600">
            Não é apenas um livro, é um guia prático que transformará sua atuação na advocacia criminal, 
            oferecendo ferramentas concretas para resultados reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
<LeadForm/>
        {/* <div className="mt-16 bg-chess-black text-white rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                O que está incluído no <span className="text-gold-DEFAULT">Pacote Premium</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-gold-DEFAULT mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="block">eBook Estratégia Criminal</strong>
                    <span className="text-gray-300">Mais de 200 páginas de conteúdo especializado</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-gold-DEFAULT mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="block">Biblioteca de Modelos</strong>
                    <span className="text-gray-300">20+ templates de peças processuais em formato editável</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-gold-DEFAULT mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="block">Acesso ao Grupo VIP</strong>
                    <span className="text-gray-300">Comunidade exclusiva de advogados no WhatsApp</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-gold-DEFAULT mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="block">Atualizações Gratuitas</strong>
                    <span className="text-gray-300">Receba todas as novas versões sem custo adicional</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-auto">
              <div className="absolute inset-0 chess-pattern opacity-20 rounded-lg"></div>
              <div className="relative h-full flex flex-col justify-center items-center text-center p-6">
                <p className="text-sm text-gold-DEFAULT font-bold mb-2">INVESTIMENTO ÚNICO</p>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-gray-400 line-through text-xl mr-3">R$ 297</span>
                  <span className="text-4xl font-bold">R$ 197</span>
                </div>
                <p className="text-sm text-gray-300 mb-6">Garantia incondicional de 7 dias</p>
                <a 
                  href="#comprar" 
                  className="bg-gold-DEFAULT hover:bg-gold-dark text-white font-bold py-3 px-8 rounded-full transition-colors w-full text-center"
                >
                  Quero transformar minha advocacia
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
