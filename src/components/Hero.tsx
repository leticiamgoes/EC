
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-chess-black z-0 dark:bg-chess-black">
        <div className="absolute inset-0 chess-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-chess-black/70 to-chess-black dark:from-chess-black/90 dark:to-chess-black"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 pt-16 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Domine as <span className="text-gold-DEFAULT">Estratégias Jurídicas</span> para seus Casos Criminais
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Um guia completo com técnicas avançadas para advogados que desejam se destacar na advocacia criminal e obter resultados extraordinários para seus clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* <Button 
                size="lg"
                className="bg-gold-light hover:bg-gold-DEFAULT text-chess-black font-bold text-lg shadow-lg border-2 border-gold-DEFAULT"
                onClick={() => window.location.href = '#comprar'}
              >
                Adquira Agora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/20 bg-white/10 shadow-lg"
                onClick={() => window.location.href = '#beneficios'}
              >
                Descobrir Mais
              </Button>   */}
            </div>
            <div className="pt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center border-2 border-gold-DEFAULT text-gold-dark font-bold">L</div>
                <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center border-2 border-gold-DEFAULT text-gold-dark font-bold">J</div>
                <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center border-2 border-gold-DEFAULT text-gold-dark font-bold">A</div>
              </div>
              <p className="text-sm opacity-80">
                Mais de <span className="font-bold">500+ advogados</span> já transformaram sua prática com nosso eBook
              </p>
            </div>
          </div>
          
          {/* 3D eBook Mockup */}
          <div className="relative flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-80 h-[440px] perspective">
              <div className="absolute w-full h-full preserve-3d ebook-transform">
                {/* Front Cover */}
                <div className="absolute w-full h-full bg-gradient-to-br from-chess-black to-chess-gray border-gold-DEFAULT border-2 rounded-md shadow-xl transform -rotate-y-0 backface-hidden">
                  <div className="p-6 h-full flex flex-col">
                    <div className="bg-gold-light text-chess-black text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 border border-gold-DEFAULT">
                      EDIÇÃO PREMIUM
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center text-center">
                      <div className="bg-chess-black rounded-full p-2 inline-block mb-4 border border-gold-DEFAULT">
                        <img 
                          src="/lovable-uploads/a742ad90-49ef-42fd-b4b6-64777f9e8af6.png" 
                          alt="Logo Estratégia Criminal" 
                          className="w-12 h-12"
                        />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">ESTRATÉGIA CRIMINAL</h3>
                      <p className="text-gold-light font-bold text-lg">Técnicas Avançadas para Advogados de Sucesso</p>
                    </div>
                    <div className="mt-auto text-white font-serif italic text-base opacity-80 text-center">
                      "O manual definitivo para se destacar na advocacia criminal"
                    </div>
                  </div>
                </div>
                
                {/* Spine */}
                <div className="absolute w-[30px] h-full bg-gold-light -left-[30px] transform origin-right rotate-y-90 flex items-center justify-center border border-gold-DEFAULT">
                  <span className="text-chess-black font-bold text-lg whitespace-nowrap transform -rotate-90">ESTRATÉGIA CRIMINAL</span>
                </div>
                
                {/* Shadow Effect */}
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

      <style>
        {`.perspective {
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
        .ebook-transform:hover {
          transform: rotateY(20deg) rotateX(10deg) scale(1.05);
        }`}
      </style>
    </section>
  );
}
