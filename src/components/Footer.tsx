
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-chess-gray dark:bg-chess-black text-white py-12">
      <div className="container">
        <div className="flex justify-center mb-8">
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full border-gold-DEFAULT text-gold-DEFAULT hover:bg-gold-DEFAULT hover:text-white shadow-md"
            onClick={scrollToTop}
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-chess-black dark:bg-white rounded-full p-1.5">
                <img 
                  src="/img/logo_estrategia_criminal_circular.jpeg" 
                  alt="Logo Estratégia Criminal" 
                  className="w-10 h-10"
                />
              </div>
              <span className="font-serif font-bold text-lg">Estratégia Criminal</span>
            </div>
            <p className="text-gray-400 mb-4">
              O guia definitivo para advogados criminais que desejam se destacar e conquistar resultados extraordinários para seus clientes.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4"></h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#Benefits.tsx" className="hover:text-gold-DEFAULT transition-colors"></a></li>
              
              <li><a href="#perguntas" className="hover:text-gold-DEFAULT transition-colors"></a></li>
              <li><a href="#comprar" className="hover:text-gold-DEFAULT transition-colors"></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <p className="text-gray-400 mb-2">Para dúvidas ou suporte:</p>
            <a 
              href="mailto:contato@estrategiacriminal.com.br" 
              className="text-gold-DEFAULT hover:underline"
            >
              estrategiacriminal@gmail.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Estratégia Criminal. Todos os direitos reservados.</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="#" className="hover:text-gold-DEFAULT transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold-DEFAULT transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
