
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Paulo Mendes",
      role: "Advogado Criminal, São Paulo",
      image: "https://i.pravatar.cc/150?img=11",
      content: "Implementei as estratégias do eBook em um caso complexo de tráfico de drogas e consegui a absolvição do meu cliente. O material é prático, objetivo e direto ao ponto.",
      rating: 5
    },
    {
      name: "Dra. Mariana Costa",
      role: "Defensora Pública, Rio de Janeiro",
      image: "https://i.pravatar.cc/150?img=5",
      content: "Como defensora pública com alta demanda de casos, este eBook me ajudou a otimizar meu tempo e melhorar significativamente a qualidade das minhas peças processuais.",
      rating: 5
    },
    {
      name: "Dr. Ricardo Almeida",
      role: "Advogado Criminalista, Belo Horizonte",
      image: "https://i.pravatar.cc/150?img=15",
      content: "A comunidade no WhatsApp vale o investimento sozinha. Já obtive insights valiosos de colegas que enfrentaram situações semelhantes às minhas. Recomendo fortemente.",
      rating: 4
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que dizem nossos <span className="text-gold-DEFAULT">leitores</span>
          </h2>
          <p className="text-lg text-gray-600">
            Veja como o eBook Estratégia Criminal tem transformado a prática de advogados por todo o Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover rounded-full border-2 border-gold-light"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-gold-DEFAULT fill-gold-DEFAULT' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 flex-1 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Junte-se a centenas de advogados de sucesso
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-gold-DEFAULT mb-1">500+</div>
              <p className="text-gray-600 text-sm">Advogados Satisfeitos</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-gold-DEFAULT mb-1">200+</div>
              <p className="text-gray-600 text-sm">Páginas de Conteúdo</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-gold-DEFAULT mb-1">20+</div>
              <p className="text-gray-600 text-sm">Modelos de Peças</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-gold-DEFAULT mb-1">98%</div>
              <p className="text-gray-600 text-sm">Taxa de Aprovação</p>
            </div>
          </div>
          
          <a 
            href="#comprar" 
            className="inline-block bg-gold text-white font-bold py-3 px-10 rounded-full transition-all duration-300 hover:brightness-110 shadow-md hover:shadow-lg"
          >
            Quero Fazer Parte Dessa Comunidade
          </a>
        </div>
      </div>
    </section>
  );
}
