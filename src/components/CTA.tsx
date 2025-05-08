
import { ArrowRight, Shield, MessageSquare } from 'lucide-react';

export default function CTA() {
  // return (
  //   <section id="comprar" className="py-20 bg-chess-black text-white relative overflow-hidden dark:bg-chess-gray/90">
  //     {/* Chess pattern background */}
  //     <div className="absolute inset-0 chess-pattern opacity-5"></div>
      
  //     <div className="container relative z-10 max-w-5xl">
  //       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  //         <div>
  //           <h2 className="text-3xl md:text-4xl font-bold mb-6">
  //             Eleve sua Prática Jurídica a um <span className="text-gold-light">Novo Patamar</span>
  //           </h2>
  //           <p className="text-gray-300 text-lg mb-8">
  //             Invista hoje em sua carreira e tenha acesso imediato a todo o conteúdo premium que já transformou a prática de mais de 500 advogados em todo o Brasil.
  //           </p>
            
  //           <div className="bg-chess-gray/50 dark:bg-chess-black/70 rounded-lg p-6 mb-8 shadow-lg border border-gold-DEFAULT/30">
  //             <div className="flex items-center justify-between mb-4">
  //               <span className="text-lg font-medium">eBook Estratégia Criminal</span>
  //               <span className="text-gold-light font-bold">R$ 197,00</span>
  //             </div>
  //             <button 
  //               onClick={() => window.open('https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20adquirir%20o%20eBook%20Estrat%C3%A9gia%20Criminal', '_blank')}
  //               className="bg-gold-light hover:bg-gold-DEFAULT text-chess-black font-bold py-3 px-6 rounded-full w-full flex items-center justify-center gap-2 transition-colors shadow-md border-2 border-gold-DEFAULT"
  //             >
  //               Adquirir Agora <ArrowRight className="h-5 w-5" />
  //             </button>
              
  //             <div className="flex items-center justify-center mt-4 text-sm text-gray-400">
  //               <Shield className="h-4 w-4 mr-2" />
  //               <span>Pagamento 100% seguro | Garantia de 7 dias</span>
  //             </div>
  //           </div>
            
  //           <div className="flex items-center gap-4 text-sm text-gray-400">
  //             <img 
  //               src="https://cdn-icons-png.flaticon.com/512/196/196578.png" 
  //               alt="Cartões de crédito" 
  //               className="h-8"
  //             />
  //             <img 
  //               src="https://cdn-icons-png.flaticon.com/512/217/217445.png" 
  //               alt="PIX" 
  //               className="h-8"
  //             />
  //             <span>Aceitamos cartão de crédito, boleto e PIX</span>
  //           </div>
  //         </div>
          
  //         <div className="bg-chess-gray/30 dark:bg-chess-black/50 p-6 md:p-8 rounded-lg shadow-lg border border-gold-DEFAULT/30">
  //           <h3 className="text-xl font-bold mb-6 flex items-center">
  //             <Shield className="text-gold-light mr-2 h-5 w-5" />
  //             <span>O que você recebe:</span>
  //           </h3>
            
  //           <ul className="space-y-6">
  //             <li className="flex">
  //               <div className="bg-gold-light text-chess-black rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 mr-3 border border-gold-DEFAULT">1</div>
  //               <div>
  //                 <h4 className="font-bold mb-1">eBook Estratégia Criminal Premium</h4>
  //                 <p className="text-gray-400 text-sm">Mais de 200 páginas de conteúdo exclusivo com estratégias avançadas para advocacia criminal.</p>
  //               </div>
  //             </li>
  //             <li className="flex">
  //               <div className="bg-gold-light text-chess-black rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 mr-3 border border-gold-DEFAULT">2</div>
  //               <div>
  //                 <h4 className="font-bold mb-1">Biblioteca de Modelos Editáveis</h4>
  //                 <p className="text-gray-400 text-sm">20+ templates de peças processuais prontos para usar em seus casos.</p>
  //               </div>
  //             </li>
  //             <li className="flex">
  //               <div className="bg-gold-light text-chess-black rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 mr-3 border border-gold-DEFAULT">3</div>
  //               <div>
  //                 <h4 className="font-bold mb-1">Acesso Vitalício à Comunidade</h4>
  //                 <p className="text-gray-400 text-sm">Grupo exclusivo no WhatsApp para networking e troca de experiências com outros profissionais.</p>
  //               </div>
  //             </li>
  //             <li className="flex">
  //               <div className="bg-gold-light text-chess-black rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 mr-3 border border-gold-DEFAULT">4</div>
  //               <div>
  //                 <h4 className="font-bold mb-1">Atualizações Gratuitas</h4>
  //                 <p className="text-gray-400 text-sm">Acesso a todas as atualizações futuras do material sem custos adicionais.</p>
  //               </div>
  //             </li>
  //           </ul>
            
  //           <div className="mt-8 pt-8 border-t border-gray-700">
  //             <div className="flex justify-between items-center mb-4">
  //               <span className="text-lg">Valor Total:</span>
  //               <div className="text-right">
  //                 <div className="text-gray-400 line-through">R$ 297,00</div>
  //                 <div className="text-2xl font-bold text-gold-light">R$ 197,00</div>
  //               </div>
  //             </div>
              
  //             <button 
  //               onClick={() => window.open('https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20adquirir%20o%20eBook%20Estrat%C3%A9gia%20Criminal', '_blank')}
  //               className="bg-gold-light hover:bg-gold-DEFAULT text-chess-black font-bold py-3 px-6 rounded-full w-full flex items-center justify-center gap-2 transition-colors shadow-md border-2 border-gold-DEFAULT"
  //             >
  //               <MessageSquare className="h-5 w-5 mr-1" /> Entre para Nossa Comunidade <ArrowRight className="h-5 w-5" />
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}
