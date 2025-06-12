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
      <div className="container mx-auto px-4">
        {/* Botão para voltar ao topo */}
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

        {/* Grid de 4 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start mb-12">
<div className="flex justify-start md:justify-end">
            <img 
              src="/img/estrategiasemfundo.png" 
    alt="Logo Estratégia Criminal" 
   className="flex justify-start md:justify-end md:mt-[-40px]"

            />
          </div>
          {/* Coluna 1: Descrição */}
          <div>
            <p className="text-gray-400 max-w-md">
              "O guia para advogados criminais que desejam se destacar e conquistar resultados extraordinários para seus clientes."
            </p>
          </div>

          {/* Coluna 2: Contato */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <p className="text-gray-400 mb-2">Para dúvidas ou suporte:</p>
            <a 
              href="mailto:estrategiacriminal@gmail.com" 
              className="text-gold-DEFAULT hover:underline"
            >
              estrategiacriminal@gmail.com
            </a>
          </div>

          {/* Coluna 3: Links rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#beneficios" className="hover:text-gold-DEFAULT transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#perguntas" className="hover:text-gold-DEFAULT transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#comprar" className="hover:text-gold-DEFAULT transition-colors">
                  Comprar Agora
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Logo */}
          
        </div>

        {/* Rodapé inferior */}
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
