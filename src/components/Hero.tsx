import { ArrowRight, Star, Shield, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/bg-xadrez4.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60"></div>
      </div>

      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>



      {/* Content */}
      <div className="container relative z-10 pt-32 md:pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Texto Hero */}
          <div className="text-white space-y-8 animate-fade-in">
            
            {/* Pre-headline */}
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold px-4 py-2 rounded-full backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 text-gold" />
              <span className="text-gold font-semibold text-sm">Metodologia comprovada</span>
            </div>

            {/* Headline Principal */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 bg-gradient-to-r from-white via-gold-light to-gold bg-clip-text text-transparent">
                A CAIXA PRETA CRIMINAL
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gold-light">
                Adquira AGORA!
              </p>
            </div>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl">
              O único guia prático com <strong className="text-white">estratégias comprovadas</strong> e decisões atualizadas do STJ para você <strong className="text-gold">dominar a prática criminal</strong> com segurança.
            </p>

            {/* Benefícios Rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-gold/20">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="font-bold text-white">100% Prático</div>
                  <div className="text-sm text-gray-400">Direto ao ponto</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-gold/20">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="font-bold text-white">Atualizado</div>
                  <div className="text-sm text-gray-400">Decisões recentes STJ</div>
                </div>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="space-y-4 pt-4">
              <button
                onClick={() => document.getElementById('ebooks-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full sm:w-auto inline-flex items-center justify-center bg-gold text-black font-black text-lg md:text-xl py-5 px-10 rounded-xl shadow-[0_0_30px_rgba(198,167,112,0.6)] hover:shadow-[0_0_40px_rgba(198,167,112,1)] hover:scale-105 transition-all duration-300 animate-pulse"
              >
                QUERO DOMINAR OS TRIBUNAIS POR R$ 37,90
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-300">Acesso imediato</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gold" />
                  <span className="text-gray-300">Garantia de 7 dias</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">💳 12x de <strong className="text-white">R$ 3,73</strong></span>
                </div>
              </div>
            </div>

            {/* Prova Social */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-6 bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gold/20">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center border-3 border-black text-black font-bold shadow-lg">L</div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center border-3 border-black text-black font-bold shadow-lg">G</div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center border-3 border-black text-black font-bold shadow-lg">K</div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center border-3 border-black text-black font-bold shadow-lg">+500</div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                  <span className="ml-2 text-white font-bold">4.9/5</span>
                </div>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">500+ advogados criminalistas</strong> já transformaram sua prática
                </p>
              </div>
            </div>

          </div>

          {/* Mockup 3D Profissional */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-[320px] md:w-[380px] h-[480px] md:h-[560px] perspective">
              
              {/* Container do livro com páginas */}
              <div className="absolute w-full h-full preserve-3d book-transform group">

                {/* Páginas brancas (profundidade) */}
                <div className="absolute w-full h-full bg-white rounded-r-lg shadow-2xl" style={{ transform: 'translateZ(-6px)' }}></div>
                <div className="absolute w-full h-full bg-gray-50 rounded-r-lg shadow-xl" style={{ transform: 'translateZ(-12px)' }}></div>
                <div className="absolute w-full h-full bg-gray-100 rounded-r-lg shadow-lg" style={{ transform: 'translateZ(-18px)' }}></div>

                {/* Capa do livro */}
                <div 
                  onClick={() => document.getElementById('ebooks-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="absolute w-full h-full cursor-pointer backface-hidden"
                  style={{ transform: 'translateZ(0px)' }}
                >
                  {/* Borda dourada da capa */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gold via-yellow-600 to-gold p-1">
                    {/* Conteúdo da capa */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-md overflow-hidden relative">
                      
                      {/* Imagem da capa */}
                      <img 
                        src="/img/ebookpago.png" 
                        alt="Guia dos Tribunais Superiores" 
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Reflexo sutil */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                      
                      {/* Overlay no hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>

                {/* Lombada do livro */}
                <div 
                  className="absolute h-full w-[45px] left-0 origin-left bg-gradient-to-r from-yellow-700 via-gold to-yellow-700 shadow-2xl"
                  style={{ 
                    transform: 'translateX(-45px) rotateY(90deg)',
                    transformOrigin: 'right center'
                  }}
                >
                  {/* Textura da lombada */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30"></div>
                  {/* Linhas decorativas */}
                  <div className="absolute top-4 left-0 right-0 h-px bg-black/20"></div>
                  <div className="absolute bottom-4 left-0 right-0 h-px bg-black/20"></div>
                </div>

                {/* Sombra realista do livro */}
                <div 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[90%] h-[30px] bg-black/40 blur-2xl rounded-full"
                  style={{ transform: 'translateZ(-30px) translateY(20px) scale(1.1)' }}
                ></div>

              </div>

              {/* Badge de garantia - limpo e profissional */}
              <div className="absolute -bottom-6 -left-6 z-30">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/30 rounded-full blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-gold to-yellow-600 rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-2xl border-4 border-white">
                    <Shield className="w-9 h-9 mb-1 text-black" />
                    <div className="text-[10px] font-black text-center leading-tight text-black">
                      GARANTIA<br/>7 DIAS
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator aprimorado */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
        <span className="text-gold text-sm font-semibold mb-2">Role para saber mais</span>
        <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-scroll"></div>
        </div>
      </div>

      {/* Estilos */}
      <style>
        {`
          .perspective {
            perspective: 1800px;
          }
          .preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .book-transform {
            transform: rotateY(-25deg) rotateX(5deg);
            transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .group:hover .book-transform {
            transform: rotateY(-30deg) rotateX(8deg) translateZ(10px);
          }
          @keyframes scroll {
            0% {
              transform: translateY(0);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateY(100%);
              opacity: 0;
            }
          }
          .animate-scroll {
            animation: scroll 1.5s ease-in-out infinite;
          }
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
        `}
      </style>
    </section>
  );
}