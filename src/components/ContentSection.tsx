import { Check, CheckCircle, FileText, Scale, Shield, User2 } from "lucide-react";

const ContentSection = () => {
  const topics = [
    {
      icon: <CheckCircle size={24} />,
      title: "Como formular o pedido correto de acesso ao inquérito",
      description: "Aprenda a técnica correta para solicitar acesso ao inquérito e aumentar suas chances de sucesso."
    },
    {
      icon: <Scale size={24} />,
      title: "Os fundamentos jurídicos que garantem seu direito",
      description: "Súmula 14 do STF, Estatuto da OAB e outras normas que fundamentam seu pedido de acesso."
    },
    {
      icon: <Shield size={24} />,
      title: "Como impetrar Habeas Corpus e Mandado de Segurança",
      description: "Guia passo a passo para elaborar remédios constitucionais eficazes quando o acesso for negado."
    },
    {
      icon: <FileText size={24} />,
      title: "Modelos de requerimentos e linguagem técnica",
      description: "Modelos prontos para usar, com a linguagem técnica adequada para cada situação."
    },
    {
      icon: <User2 size={24} />,
      title: "Dicas práticas para proteger o direito de defesa",
      description: "Estratégias comprovadas para proteger os direitos do seu cliente e sua atuação profissional."
    },
     {
      icon: <User2 size={24} />,
      title: "Dicas práticas para proteger o direito de defesa",
      description: "Estratégias comprovadas para proteger os direitos do seu cliente e sua atuação profissional."
    },
    
  ];

  const testimonials = [
    {
      quote: "Finalmente entendi o que fazer quando a autoridade nega vista ao inquérito. Conteúdo direto, útil e aplicável!",
      author: "Ana Paula, Advogada Criminalista – SP"
    },
    {
      quote: "O guia me ajudou a montar meu primeiro habeas corpus em delegacia. Recomendo!",
      author: "Rafael Lima, Jovem Advogado – MG"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="conteudo">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-serif mb-4">
           O que você vai aprender com este guia?
        </h2>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Conhecimento prático e estratégico para garantir o acesso ao inquérito policial
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {topics.map((topic, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-start">
                <div className="mr-4 text-estrategia-dark mt-1">
                  {topic.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{topic.title}</h3>
                  <p className="text-gray-700">{topic.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center"> O que advogados estão dizendo:</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-black">
                <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                <p className="font-medium text-right">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-black text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Mais do que teoria, conhecimento prático:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <Check className="mr-2 mt-1 text-green-400 flex-shrink-0" />
              <p>Modelos de peças processuais prontos para usar;</p>
            </div>
            <div className="flex items-start">
              <Check className="mr-2 mt-1 text-green-400 flex-shrink-0" />
              <p>Fundamentação jurídica atualizada;</p>
            </div>
            <div className="flex items-start">
              <Check className="mr-2 mt-1 text-green-400 flex-shrink-0" />
              <p>Argumentos que funcionam na prática;</p>
            </div>
            <div className="flex items-start">
              <Check className="mr-2 mt-1 text-green-400 flex-shrink-0" />
              <p>Dicas de comunicação com autoridades;</p>
            </div>
            <div className="flex items-start">
              <Check className="mr-2 mt-1 text-green-400 flex-shrink-0" />
              <p>Estratégias testadas e aprovadas;</p>
            </div>
            <div className="flex items-start">
              <Check className="mr-2 mt-1 text-green-400 flex-shrink-0" />
              <p>Orientações para situações de urgência;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;