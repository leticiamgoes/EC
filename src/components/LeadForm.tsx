import { FaWhatsapp, FaShieldAlt, FaCheckCircle, FaStar, FaClock, FaUsers, FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function EbooksSection() {
  const [notifications, setNotifications] = useState([]);
  const [nextId, setNextId] = useState(0);

  // Feedbacks realistas baseados no conteúdo do ebook
  const testimonials = [
    {
      name: "Ricardo M.",
      city: "São Paulo, SP",
      message: "Finalmente entendi como argumentar tráfico privilegiado! Muito prático."
    },
    {
      name: "Juliana S.",
      city: "Rio de Janeiro, RJ",
      message: "As jurisprudências sobre reconhecimento pessoal salvaram meu caso."
    },
    {
      name: "Carlos A.",
      city: "Belo Horizonte, MG",
      message: "Dosimetria nunca foi tão clara. Reduzi 2 anos na pena do cliente!"
    },
    {
      name: "Fernanda L.",
      city: "Brasília, DF",
      message: "Material direto ao ponto sobre execução penal. Recomendo!"
    },
    {
      name: "Roberto C.",
      city: "Porto Alegre, RS",
      message: "As estratégias de recursos me deram mais segurança nas teses."
    },
    {
      name: "Mariana P.",
      city: "Curitiba, PR",
      message: "Pronúncia de homicídio explicada de forma simples. Excelente!"
    },
    {
      name: "André F.",
      city: "Recife, PE",
      message: "Consegui argumentar melhor sobre busca e apreensão. Valeu muito!"
    },
    {
      name: "Patricia R.",
      city: "Salvador, BA",
      message: "O capítulo de provas periciais mudou minha abordagem nas defesas."
    },
    {
      name: "Leonardo V.",
      city: "Fortaleza, CE",
      message: "Remição de pena nunca foi tão fácil de entender. Top demais!"
    },
    {
      name: "Camila B.",
      city: "Goiânia, GO",
      message: "Material atualizado com o STJ. Perfeito para quem atua no criminal."
    },
    {
      name: "Thiago N.",
      city: "Manaus, AM",
      message: "As compensações na dosimetria estavam me travando. Resolvido!"
    },
    {
      name: "Daniela T.",
      city: "Belém, PA",
      message: "Embargos de declaração com clareza. Já usei 3x essa semana!"
    },
    {
      name: "Marcelo H.",
      city: "Vitória, ES",
      message: "Finalmente domino os critérios do tráfico privilegiado. Gratidão!"
    },
    {
      name: "Renata O.",
      city: "Florianópolis, SC",
      message: "Inquérito de homicídio ficou mais fácil depois desse guia."
    },
    {
      name: "Bruno K.",
      city: "Natal, RN",
      message: "Direitos do preso na execução penal bem explicados. Essencial!"
    }
  ];

  useEffect(() => {
    // Mostrar primeira notificação após 5 segundos
    const firstTimeout = setTimeout(() => {
      showNotification();
    }, 5000);

    // Mostrar notificações a cada 8-15 segundos aleatoriamente
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 7000 + 8000); // Entre 8 e 15 segundos

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  const showNotification = () => {
    const randomTestimonial = testimonials[Math.floor(Math.random() * testimonials.length)];
    const id = nextId;
    setNextId(prev => prev + 1);

    const newNotification = {
      id,
      ...randomTestimonial
    };

    setNotifications(prev => [...prev, newNotification]);

    // Remover notificação após 6 segundos
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 6000);
  };

  return (
    <>
      {/* Popups de Notificação de Prova Social */}
      <div className="fixed bottom-6 left-6 z-50 space-y-3 max-w-sm">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-xl shadow-2xl border-2 border-green-400 animate-slide-in-left"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <FaCheckCircle className="text-green-600 text-xl" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm">{notif.name}</span>
                  <span className="text-xs opacity-80">• {notif.city}</span>
                </div>
                <p className="text-sm leading-snug opacity-95">{notif.message}</p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-300 text-xs" />
                  ))}
                  <span className="text-xs ml-1 opacity-80">há poucos minutos</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 text-white relative overflow-hidden" id="ebooks-section">
        
        {/* --- Badge de Urgência --- */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg animate-[pulse_2s_ease-in-out_infinite]">
            <FaClock className="text-lg" />
            OFERTA POR TEMPO LIMITADO
          </div>
        </div>

        {/* --- Introdução Premium do eBook --- */}
        <div className="max-w-4xl mx-auto text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#111]/60 to-black/80 -z-10 rounded-3xl shadow-2xl"></div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gold mb-6 leading-tight">
            Guia dos Tribunais Superiores
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-8">
            Domine a prática criminal com <strong className="text-gold">estratégias comprovadas</strong> baseadas em decisões recentes do STJ
          </p>
          
          {/* Prova Social */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <FaUsers className="text-gold text-2xl" />
              <span className="text-lg"><strong className="text-gold">500+</strong> advogados já adquiriram</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-gold text-xl" />
              ))}
              <span className="ml-2 text-lg"><strong>4.9/5</strong> avaliação</span>
            </div>
          </div>
        </div>

        {/* --- eBook Pago --- */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Imagem do eBook */}
          <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-2xl shadow-2xl order-2 md:order-1">
            <img
              src="/img/ebookpago.png"
              alt="Guia dos Tribunais Superiores"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 right-4 bg-gold text-black font-bold px-6 py-3 rounded-lg shadow-xl">
              <div className="text-sm line-through opacity-70">R$ 97,00</div>
              <div className="text-3xl font-black">R$ 37,90</div>
            </div>
            
            {/* Badge de Desconto */}
            <div className="absolute top-4 left-4 bg-red-600 text-white font-bold px-4 py-2 rounded-lg shadow-xl">
              -61% OFF
            </div>
          </div>

          {/* Texto e CTA */}
          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-3xl font-bold text-gold mb-4">O que você vai aprender:</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gold/20">
                <FaCheckCircle className="text-gold text-xl flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">Tráfico de Drogas:</strong>
                  <span className="text-gray-300"> Buscas, tráfico privilegiado e jurisprudências essenciais</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gold/20">
                <FaCheckCircle className="text-gold text-xl flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">Crimes Patrimoniais:</strong>
                  <span className="text-gray-300"> Provas periciais e reconhecimento pessoal</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gold/20">
                <FaCheckCircle className="text-gold text-xl flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">Homicídio:</strong>
                  <span className="text-gray-300"> Pronúncia e elementos essenciais do inquérito</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gold/20">
                <FaCheckCircle className="text-gold text-xl flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">Dosimetria de Pena:</strong>
                  <span className="text-gray-300"> Agravantes, atenuantes e compensações na prática</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gold/20">
                <FaCheckCircle className="text-gold text-xl flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">Execução Penal:</strong>
                  <span className="text-gray-300"> Remição de pena e direitos do preso</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gold/20">
                <FaCheckCircle className="text-gold text-xl flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">Recursos Criminais:</strong>
                  <span className="text-gray-300"> Embargos de declaração e apelação</span>
                </div>
              </div>
            </div>

            {/* Bônus Exclusivo */}
            <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 border-2 border-green-500 p-6 rounded-xl mt-6">
              <div className="flex items-center gap-3 mb-3">
                <FaWhatsapp className="text-green-400 text-3xl" />
                <div>
                  <div className="text-green-400 font-bold text-sm">🎁 BÔNUS EXCLUSIVO</div>
                  <div className="text-white font-bold text-xl">Comunidade Estratégia Criminal</div>
                </div>
              </div>
              <p className="text-gray-300">
                Acesso <strong className="text-white">VITALÍCIO</strong> à comunidade no WhatsApp com networking, discussões de casos reais e atualizações jurídicas!
              </p>
            </div>

          </div>
        </div>

        {/* CTA Principal - Destacado */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-gold to-yellow-600 p-8 rounded-2xl shadow-2xl text-center">
            <div className="text-black mb-4">
              <div className="text-lg font-semibold mb-2">INVESTIMENTO ÚNICO DE APENAS:</div>
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl line-through opacity-60">R$ 97,00</span>
                <span className="text-5xl font-black">R$ 37,90</span>
              </div>
              <div className="text-sm mt-2 font-semibold">ou 12x de R$ 3,73 no cartão</div>
            </div>
            
            <a
              href="https://pay.kiwify.com.br/OthtQkH"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                text-gold 
                bg-black
                font-extrabold 
                text-2xl 
                px-12 
                py-6
                rounded-xl 
                shadow-[0_10px_40px_rgba(0,0,0,0.5)]
                hover:scale-105
                hover:shadow-[0_15px_50px_rgba(0,0,0,0.7)]
                transition-all 
                duration-300
                animate-[pulse_2s_ease-in-out_infinite]
              "
            >
              QUERO DOMINAR OS TRIBUNAIS AGORA
              <FaArrowRight />
            </a>
            
            <p className="text-black text-sm mt-4 font-semibold">
              ✓ Acesso imediato após o pagamento
            </p>
          </div>
        </div>

        {/* --- SEÇÃO DE GARANTIA --- */}
        <div className="max-w-5xl mx-auto mt-20 mb-20">
          
          {/* Título da Garantia */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gold mb-4">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className="text-gray-300 text-xl">
              Experimente sem riscos. Satisfação garantida ou seu dinheiro de volta!
            </p>
          </div>

          {/* Card de Garantia */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gold/30">
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Selo de garantia */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Círculo externo animado */}
                  <div className="absolute inset-0 bg-gold rounded-full blur-xl opacity-30 animate-[pulse_2s_ease-in-out_infinite]"></div>
                  
                  {/* Selo principal */}
                  <div className="relative w-64 h-64 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_rgba(198,167,112,0.6)] border-8 border-white/20">
                    <FaShieldAlt className="text-white text-6xl mb-3" />
                    <div className="text-white text-center">
                      <div className="text-7xl font-black leading-none">7</div>
                      <div className="text-2xl font-bold mt-2">DIAS</div>
                      <div className="text-lg font-semibold mt-1">GARANTIA</div>
                    </div>
                  </div>

                  {/* Badge decorativo */}
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-5 py-3 rounded-full font-bold shadow-lg animate-bounce">
                    100% Seguro
                  </div>
                </div>
              </div>

              {/* Texto da garantia */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Risco Zero para Você!
                </h3>
                
                <p className="text-gray-300 text-xl leading-relaxed">
                  Você tem <strong className="text-gold">7 dias completos</strong> para avaliar cada página do material. Se não ficar 100% satisfeito, devolvemos <strong className="text-gold">TODO o seu investimento</strong>.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-black/30 p-4 rounded-lg">
                    <FaCheckCircle className="text-gold text-2xl flex-shrink-0 mt-1" />
                    <p className="text-gray-300 text-lg">
                      <strong className="text-white">Sem burocracia:</strong> reembolso em até 24h
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-black/30 p-4 rounded-lg">
                    <FaCheckCircle className="text-gold text-2xl flex-shrink-0 mt-1" />
                    <p className="text-gray-300 text-lg">
                      <strong className="text-white">Sem perguntas:</strong> você decide se o material agrega valor
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-black/30 p-4 rounded-lg">
                    <FaCheckCircle className="text-gold text-2xl flex-shrink-0 mt-1" />
                    <p className="text-gray-300 text-lg">
                      <strong className="text-white">100% seguro:</strong> pagamento protegido pela Kiwify
                    </p>
                  </div>
                </div>

                <div className="bg-gold/10 border-l-4 border-gold p-5 rounded-lg mt-6">
                  <p className="text-gray-200 text-lg italic">
                    <strong className="text-gold">"</strong>Assumimos todo o risco para que você possa investir na sua carreira com tranquilidade.<strong className="text-gold">"</strong>
                  </p>
                </div>
              </div>

            </div>

            {/* Botão de CTA na Garantia */}
            <div className="mt-12 text-center">
              <a
                href="https://pay.kiwify.com.br/OthtQkH"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  text-black 
                  font-extrabold 
                  text-xl 
                  md:text-2xl
                  px-12 
                  py-6
                  rounded-xl 
                  bg-gold 
                  shadow-[0_0_30px_rgba(198,167,112,0.7)] 
                  hover:shadow-[0_0_40px_rgba(198,167,112,1)] 
                  hover:bg-yellow-500
                  hover:scale-105
                  transition-all 
                  duration-300
                "
              >
                SIM, QUERO MINHA GARANTIA DE 7 DIAS
                <FaArrowRight />
              </a>
              
              <div className="flex flex-col items-center gap-2 mt-6">
                <p className="text-gray-400 text-sm">🔒 Ambiente 100% seguro | Pagamento protegido</p>
                <p className="text-green-400 text-sm font-semibold">✓ Acesso imediato após confirmação</p>
              </div>
            </div>

          </div>

        </div>

        {/* --- FAQ Rápido (Eliminar Objeções) --- */}
        <div className="max-w-4xl mx-auto mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gold text-center mb-12">
            Perguntas Frequentes
          </h3>
          
          <div className="space-y-4">
            <details className="bg-gray-900/50 border border-gold/20 rounded-lg p-6 cursor-pointer hover:border-gold/50 transition-all">
              <summary className="font-bold text-xl text-white">
                Vou receber o eBook imediatamente?
              </summary>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Sim! Assim que o pagamento for confirmado, você receberá o link de acesso por e-mail. O processo é 100% automático e instantâneo.
              </p>
            </details>

            <details className="bg-gray-900/50 border border-gold/20 rounded-lg p-6 cursor-pointer hover:border-gold/50 transition-all">
              <summary className="font-bold text-xl text-white">
                O material é atualizado?
              </summary>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Sim! O conteúdo é baseado em jurisprudências recentes do STJ e é constantemente atualizado para refletir as mudanças na prática criminal.
              </p>
            </details>

            <details className="bg-gray-900/50 border border-gold/20 rounded-lg p-6 cursor-pointer hover:border-gold/50 transition-all">
              <summary className="font-bold text-xl text-white">
                Como funciona a garantia?
              </summary>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Você tem 7 dias para avaliar todo o conteúdo. Se não gostar por qualquer motivo, basta solicitar o reembolso e devolvemos 100% do valor investido, sem perguntas.
              </p>
            </details>

            <details className="bg-gray-900/50 border border-gold/20 rounded-lg p-6 cursor-pointer hover:border-gold/50 transition-all">
              <summary className="font-bold text-xl text-white">
                Posso parcelar o pagamento?
              </summary>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Sim! Você pode parcelar em até 12x no cartão de crédito, com parcelas a partir de R$ 3,73.
              </p>
            </details>
          </div>
        </div>

        {/* CTA Final */}
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <div className="bg-gradient-to-r from-gold/20 to-yellow-600/20 border-2 border-gold p-10 rounded-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para Dominar os Tribunais Superiores?
            </h3>
            <p className="text-gray-300 text-xl mb-8">
              Junte-se a centenas de advogados que já transformaram sua prática criminal
            </p>
            
            <a
              href="https://pay.kiwify.com.br/OthtQkH"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                text-black 
                bg-gold
                font-extrabold 
                text-2xl 
                px-12 
                py-6
                rounded-xl 
                shadow-[0_0_30px_rgba(198,167,112,0.7)]
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(198,167,112,1)]
                transition-all 
                duration-300
                animate-[pulse_2s_ease-in-out_infinite]
              "
            >
              GARANTIR MINHA VAGA AGORA
              <FaArrowRight />
            </a>
            
            <p className="text-gray-400 text-sm mt-6">
              ⏰ Oferta por tempo limitado | 🔒 Compra 100% segura
            </p>
          </div>
        </div>

      </section>

      <style>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out;
        }
      `}</style>
    </>
  );
}