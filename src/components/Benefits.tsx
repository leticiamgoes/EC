import { Check, FileText, Brain, Scale, Users, Briefcase, Award } from 'lucide-react';
import LeadForm from './LeadForm'; // ajuste o caminho se necessário

// O componente AboutAuthors foi removido e seu conteúdo incorporado abaixo

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

  // Seção Sobre os Autores incorporada diretamente
  // const aboutAuthorsSection = (
  //   <section id="sobre-os-autores" className="py-16 bg-gray-50">
  //     <div className="container mx-auto px-4">
  //       <div className="text-center max-w-3xl mx-auto mb-12">
  //         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
  //           Sobre os Autores
  //         </h2>
  //       </div>
  //       <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-8 rounded-lg shadow-lg">
  //         <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
  //           <img
  //             src="public/img/autores.jpeg" // Caminho para a imagem na pasta public
  //             alt="Arthur Irwin e Luan Guimarães"
  //             className="rounded-lg shadow-md w-full h-auto object-cover max-h-96 md:max-h-full"
  //           />
  //         </div>
  //         <div className="md:w-2/3 text-gray-700 text-lg">
  //           <p className="mb-6">
  //             <strong>Arthur Irwin</strong> é um dedicado Advogado Criminalista e orgulhoso membro da Associação Brasileira de Advocacia Criminal (ABRACRIM). Sua paixão pelo Direito Penal e pela Criminologia o levou a aprofundar seus conhecimentos através de uma Pós-Graduação na Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS), uma instituição de renome. Além de sua prática jurídica, Arthur contribui ativamente para a academia como autor de capítulos de livros e artigos científicos, compartilhando sua expertise e insights com a comunidade jurídica. Sua vocação para o ensino se manifesta também como professor em cursos preparatórios para o Exame de Ordem, onde auxilia futuros advogados a alcançarem seus objetivos, e como mentor para jovens advogados, guiando-os nos primeiros passos de suas carreiras na advocacia criminal.
  //           </p>
  //           <p>
  //             <strong>Luan Guimarães</strong> destaca-se como um experiente Advogado Criminalista, sendo membro ativo tanto da Associação Brasileira de Advocacia Criminal (ABRACRIM) quanto da Associação Nacional da Advocacia Criminal (ANACRIM). Buscando constante aperfeiçoamento, concluiu sua Pós-Graduação em Direito Penal e Processo Penal pela respeitada Escola Brasileira de Direito. Luan também possui uma veia acadêmica, sendo autor de capítulos de livros e artigos científicos que enriquecem o debate jurídico na área criminal. Seu compromisso com a formação de novos profissionais é evidente em sua atuação como professor em cursos de preparação para o Exame de Ordem, além de dedicar seu tempo como professor para jovens advogados, compartilhando seu conhecimento prático e teórico para o desenvolvimento da nova geração de criminalistas.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );

  // return (
  //   <>
  //     {aboutAuthorsSection} {/* Seção Sobre os Autores inserida aqui */}
  //     <section id="beneficios" className="py-20 bg-white">
  //       <div className="container">
  //         <div className="text-center max-w-3xl mx-auto mb-16">
  //           <h2 className="text-3xl md:text-4xl font-bold mb-6">
  //             O que você vai <span className="text-gold-DEFAULT">conquistar</span> com este eBook
  //           </h2>
  //           <p className="text-lg text-gray-600">
  //             Não é apenas um livro, é um guia prático que transformará sua atuação na advocacia criminal, 
  //             oferecendo ferramentas concretas para resultados reais.
  //           </p>
  //         </div>

  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  //           {benefits.map((benefit, index) => (
  //             <div 
  //               key={index} 
  //               className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-shadow"
  //             >
  //               <div className="mb-4">{benefit.icon}</div>
  //               <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
  //               <p className="text-gray-600">{benefit.description}</p>
  //             </div>
  //           ))}
  //         </div>
  //         <LeadForm/>
  //         {/* Comentários originais podem ser mantidos ou removidos conforme necessidade */}
  //       </div>
  //     </section>
  //   </>
  // );
}

