import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/bg-xadrez4.png')" }}>
        <div className="absolute inset-0 bg-black/60"></div> {/* escurece o fundo para melhor contraste do texto */}
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-16 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Texto Hero */}
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Adquira AGORA!
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              O eBook <strong>“Guia dos Tribunais Superiores”</strong> foi desenvolvido para quem deseja dominar a prática criminal com estratégia, segurança e decisões atualizadas do STJ, oferecendo um guia completo e direto ao ponto para se destacar nos tribunais.
            </p>

            {/* Botão Adquirir Agora */}
            {/* Botão Adquirir Agora */}
<div className="pt-6">
  <button
    onClick={() => document.getElementById('ebooks-section')?.scrollIntoView({ behavior: 'smooth' })}
    className="inline-flex items-center bg-gold text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gold/90 transition-all animate-pulse hover:scale-105"
  >
    Adquirir agora por apenas R$ 37,90
    <ArrowRight className="ml-2 w-5 h-5" />
  </button>
</div>


            <div className="pt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center border-2 border-gold-DEFAULT text-gold-dark font-bold">L</div>
                <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center border-2 border-gold-DEFAULT text-gold-dark font-bold">G</div>
                <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center border-2 border-gold-DEFAULT text-gold-dark font-bold">K</div>
              </div>
              <p className="text-sm opacity-80">
                Muitos <span className="font-bold">advogados criminalistas</span> já transformaram sua prática com nosso eBook!
              </p>
            </div>
          </div>

          {/* 3D eBook Mockup */}
          <div className="relative flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-80 h-[440px] perspective group">
              <div className="absolute w-full h-full preserve-3d ebook-transform group-hover:ebook-hover">

                {/* Capa frontal clicável */}
                <div 
                  onClick={() => document.getElementById('ebooks-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="absolute w-full h-full backface-hidden overflow-hidden rounded-md shadow-xl border border-gold-DEFAULT bg-black flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                >
                  <img 
                    src="/img/ebookpago.png" 
                    alt="Capa do eBook Estratégia Criminal" 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>

                {/* Lateral (spine) */}
                <div className="absolute w-[30px] h-full bg-[#ffffff] -left-[30px] transform origin-right rotate-y-90 flex items-center justify-center border border-gold-DEFAULT">
                  <span className="text-black font-light text-lg whitespace-nowrap transform -rotate-90"></span>
                </div>

                {/* Sombra */}
                <div className="absolute w-full h-full bg-black/30 blur-xl -z-10 transform translate-y-6 scale-90"></div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Saiba mais</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold-light">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Estilo da rotação e animação */}
      <style>
        {`
          .perspective {
            perspective: 1500px;
          }
          .preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .ebook-transform {
            transform: rotateY(15deg) rotateX(5deg);
            transition: transform 0.5s ease;
          }
          .group-hover\\:ebook-hover:hover {
            transform: rotateY(20deg) rotateX(10deg) scale(1.05);
          }
        `}
      </style>
    </section>
  );
}
