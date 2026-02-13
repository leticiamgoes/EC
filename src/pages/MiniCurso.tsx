import { ArrowRight, Star, Shield, TrendingUp, CheckCircle, BookOpen, Scale, Clock, Users as UsersIcon, Video, Calendar } from 'lucide-react';
import { FaWhatsapp, FaCheckCircle, FaStar, FaClock, FaUsers, FaArrowRight, FaVideo } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import AuthorsSection from '@/components/AuthorsSection';
import LeadForm from '@/components/LeadForm';

export default function MiniCurso() {
  const [notifications, setNotifications] = useState([]);
  const [nextId, setNextId] = useState(0);

  const kiwifyLink = "https://pay.kiwify.com.br/hkB5LP0";

  // Feedbacks realistas para o minicurso
  const testimonials = [
    {
      name: "Juliana M.",
      city: "São Paulo, SP",
      message: "O minicurso mudou minha forma de argumentar tráfico privilegiado!"
    },
    {
      name: "Roberto S.",
      city: "Rio de Janeiro, RJ",
      message: "Aula prática e direta. Já apliquei nos meus casos!"
    },
    {
      name: "Fernanda L.",
      city: "Belo Horizonte, MG",
      message: "Finalmente entendi dosimetria na prática. Vale muito!"
    },
    {
      name: "Carlos A.",
      city: "Brasília, DF",
      message: "Estratégias de recursos ficaram claras. Recomendo!"
    },
    {
      name: "Mariana P.",
      city: "Porto Alegre, RS",
      message: "Minicurso objetivo e aplicável. Excelente investimento!"
    },
    {
      name: "André F.",
      city: "Aracaju, SE",
      message: "Abordagem técnica sem enrolação. Perfeito!"
    },
    {
      name: "Patricia R.",
      city: "Recife, PE",
      message: "Material atualizado e prático. Mudou minha advocacia!"
    },
    {
      name: "Leonardo V.",
      city: "Salvador, BA",
      message: "Aula ao vivo valeu cada centavo. Top demais!"
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
    }, Math.random() * 7000 + 8000);

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

      {/* SEÇÃO HERO COM IMAGEM DE CAPA */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        
        {/* Elementos decorativos animados */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 pt-32 md:pt-16 pb-20">
          <div className="max-w-5xl mx-auto">
            
            {/* Título Principal - Topo */}
            <div className="text-center mb-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 bg-gradient-to-r from-white via-gold-light to-gold bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                MINICURSO TRÁFICO PRIVILEGIADO
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gold-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Participe da Live e Transforme Sua Advocacia!
              </p>
            </div>
            
            {/* Badge de LIVE */}
            <div className="text-center mb-8 space-y-3">
              <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md text-white px-6 py-2 rounded-full font-bold text-sm border border-red-500/50">
                <FaClock className="text-red-400" />
                <span>VAGAS LIMITADAS - GARANTA SUA PRESENÇA NA LIVE</span>
              </div>
            </div>

            {/* Mockup de Notebook com Preview da Live */}
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="relative">
                {/* Notebook Frame */}
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl p-3 shadow-2xl">
                  {/* Camera notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-b-lg"></div>
                  
                  {/* Screen */}
                  <div className="relative bg-black rounded-lg overflow-hidden">
                    {/* Live Badge no canto */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full shadow-lg">
                      <span className="flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      <span className="text-white font-bold text-sm">AO VIVO</span>
                    </div>

                    {/* Contador de espectadores no canto */}
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full">
                      <FaUsers className="text-gold text-sm" />
                      <span className="text-white font-bold text-sm">243 assistindo</span>
                    </div>
                    
                    {/* Imagem da Live */}
                    <img 
                      src="/img/IMG_5432.PNG" 
                      alt="Prévia da Live - Tráfico Privilegiado" 
                      className="w-full h-auto"
                    />

                    {/* Barra de controles inferior (simula interface de live) */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                            <span className="text-black font-bold text-sm">EC</span>
                          </div>
                          <div>
                            <div className="text-white font-bold text-sm">Estratégia Criminal</div>
                            <div className="text-gray-400 text-xs">Minicurso Tráfico Privilegiado</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="bg-gold/20 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-gold text-xs font-bold">CONTEÚDO EXCLUSIVO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Notebook Base */}
                <div className="h-4 bg-gradient-to-b from-gray-900 to-gray-800 rounded-b-2xl shadow-xl"></div>
                <div className="h-2 bg-gray-700 mx-auto w-2/3 rounded-b-lg"></div>
              </div>
            </div>
            
            {/* Texto Hero */}
            <div className="text-white space-y-8 animate-fade-in text-center">
              
              {/* Pre-headline */}
              <div className="inline-flex items-center gap-2 bg-red-600/30 border-2 border-red-500 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg">
                <Video className="w-4 h-4 text-red-400 animate-pulse" />
                <span className="text-red-300 font-semibold text-sm">Transmissão ao vivo e interativa</span>
              </div>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Participe do <strong className="text-red-400">MINICURSO</strong> que vai te mostrar, de forma <strong className="text-white">técnica e aplicada</strong>, como estruturar a tese do tráfico privilegiado do início ao fim do processo, com <strong className="text-gold">segurança e critério jurídico</strong>.
              </p>

              {/* Info da Live */}
              <div className="bg-gradient-to-r from-red-900/40 to-red-800/40 backdrop-blur-md border-2 border-red-500/50 p-6 rounded-xl max-w-3xl mx-auto shadow-xl">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-8 h-8 text-red-400" />
                    <div className="text-left">
                      <div className="text-sm text-gray-300">Data da Live</div>
                      <div className="text-xl font-bold">06 DE MARÇO </div>
                    </div>
                  </div>
                  <div className="hidden md:block w-px h-12 bg-red-500/30"></div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-3xl text-red-400" />
                    <div className="text-left">
                      <div className="text-sm text-gray-300">Duração</div>
                      <div className="text-xl font-bold">2 horas intensivas</div>
                    </div>
                  </div>
                  <div className="hidden md:block w-px h-12 bg-red-500/30"></div>
                  <div className="flex items-center gap-3">
                    <FaVideo className="text-3xl text-red-400" />
                    <div className="text-left">
                      <div className="text-sm text-gray-300">Formato</div>
                      <div className="text-xl font-bold">100% Online</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefícios Rápidos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 max-w-3xl mx-auto">
                <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md p-4 rounded-lg border border-gold/30 shadow-xl">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-black" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white">Conteúdo Aplicado</div>
                    <div className="text-sm text-gray-300">Dosimetria, estratégia e recursos</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md p-4 rounded-lg border border-gold/30 shadow-xl">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale className="w-5 h-5 text-black" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white">Abordagem Atual</div>
                    <div className="text-sm text-gray-300">Da parte material à processual</div>
                  </div>
                </div>
              </div>

              {/* Prova Social - Estatísticas */}
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8 mb-12">
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full">
                  <FaUsers className="text-gold text-2xl" />
                  <span className="text-lg"><strong className="text-gold">200+</strong> inscritos confirmados</span>
                </div>
                <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-gold text-xl" />
                  ))}
                  <span className="ml-2 text-lg"><strong>4.9/5</strong> avaliação</span>
                </div>
              </div>

              {/* CTA Principal - Destacado */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-gold to-yellow-600 p-8 rounded-2xl shadow-2xl text-center">
                  <div className="text-black mb-4">
                    <div className="text-lg font-semibold mb-2">INVESTIMENTO ÚNICO DE APENAS:</div>
                    <div className="flex items-center justify-center gap-4">
                      <span className="text-2xl line-through opacity-60">R$ 97,00</span>
                      <span className="text-5xl font-black">R$ 67,00</span>
                    </div>
                    <div className="text-sm mt-2 font-semibold">ou 12x de R$ 9,70 no cartão</div>
                  </div>
                  
                  <a
                    href={kiwifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-3
                      text-gold 
                      bg-black
                      font-extrabold 
                      text-xl
                      md:text-2xl 
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
                    GARANTIR VAGA NA LIVE AGORA
                    <FaArrowRight />
                  </a>
                  
                  <p className="text-black text-sm mt-4 font-semibold">
                    ✓ Acesso imediato após o pagamento | ✓ Link da live enviado por email
                  </p>
                </div>
              </div>

              {/* Bônus Exclusivo */}
              <div className="bg-gradient-to-r from-green-900/40 to-green-800/40 backdrop-blur-md border-2 border-green-500 p-6 rounded-xl mt-8 max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-3 justify-center">
                  <FaWhatsapp className="text-green-400 text-3xl" />
                  <div className="text-left">
                    <div className="text-green-400 font-bold text-sm">🎁 BÔNUS EXCLUSIVOS</div>
                    <div className="text-white font-bold text-xl">Material de Apoio + Gravação</div>
                  </div>
                </div>
                <p className="text-gray-200 text-center">
                  Receba <strong className="text-white">modelos de peças</strong>, resumo executivo E acesso à <strong className="text-green-400">gravação da live</strong> para assistir quando quiser!
                </p>
              </div>

              {/* Prova Social */}
              <div className="pt-12 max-w-3xl mx-auto">
                <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 backdrop-blur-md p-8 rounded-xl border-2 border-green-500/40 shadow-xl">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex -space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center border-3 border-black text-black font-bold shadow-lg">A</div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center border-3 border-black text-black font-bold shadow-lg">M</div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center border-3 border-black text-black font-bold shadow-lg">R</div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center border-3 border-black text-black font-bold shadow-lg">+</div>
                    </div>
                    <div className="text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-green-400 text-green-400" />
                        ))}
                      </div>
                      <p className="text-white text-lg leading-relaxed">
                        <strong className="text-green-400">Advogados que já acompanham a Estratégia Criminal</strong> relatam mais segurança na atuação e clareza na aplicação das teses penais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Final */}
              <div className="max-w-3xl mx-auto mt-16">
                <div className="bg-gradient-to-r from-gold/20 to-yellow-600/20 backdrop-blur-md border-2 border-gold p-10 rounded-2xl shadow-2xl">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                    Pronto para Dominar o Tráfico Privilegiado?
                  </h3>
                  <p className="text-gray-200 text-xl mb-8">
                    Junte-se à live e transforme sua prática criminal ao lado de centenas de advogados
                  </p>
                  
                  <a
                    href={kiwifyLink}
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
                    GARANTIR MINHA VAGA NA LIVE
                    <FaArrowRight />
                  </a>
                  
                  <p className="text-gray-300 text-sm mt-6">
                    🔴 Transmissão ao vivo | ⏰ Vagas limitadas | 🔒 Compra 100% segura
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Estilos */}
        <style>
          {`
            .animate-fade-in {
              animation: fadeIn 1s ease-out;
            }
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
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
          `}
        </style>

      </section>
      <Footer />
    </>
  );
};