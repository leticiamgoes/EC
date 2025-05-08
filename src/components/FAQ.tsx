
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  // const faqs = [
  //   {
  //     question: "Como recebo o eBook após a compra?",
  //     answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com um link para download do eBook em formato PDF. Você também receberá instruções para acessar o grupo exclusivo de WhatsApp."
  //   },
  //   {
  //     question: "O conteúdo é atualizado de acordo com mudanças na legislação?",
  //     answer: "Sim! Nosso eBook é constantemente atualizado para refletir as mudanças na legislação e jurisprudência. Como comprador, você terá acesso gratuito a todas as atualizações futuras."
  //   },
  //   {
  //     question: "Os modelos de peças podem ser editados?",
  //     answer: "Absolutamente! Todos os modelos de peças processuais são fornecidos em formato editável (.docx) para que você possa adaptá-los aos seus casos específicos, economizando horas de trabalho."
  //   },
  //   {
  //     question: "Existe garantia de satisfação?",
  //     answer: "Sim, oferecemos garantia incondicional de 7 dias. Se você não ficar satisfeito com o conteúdo, basta nos enviar um e-mail solicitando o reembolso e devolveremos 100% do seu investimento, sem questionamentos."
  //   },
  //   {
  //     question: "O eBook é útil para advogados iniciantes?",
  //     answer: "Com certeza! O conteúdo é estruturado para atender tanto advogados iniciantes quanto experientes. Começamos com fundamentos sólidos e progredimos para estratégias mais avançadas."
  //   },
  //   {
  //     question: "Como funciona o acesso ao grupo de WhatsApp?",
  //     answer: "Após a compra, você receberá um link exclusivo para entrar no grupo de WhatsApp. O grupo é moderado para garantir discussões produtivas e troca de conhecimentos entre os membros."
  //   }
  // ];

  // return (
  //   <section id="perguntas" className="py-20 bg-white">
  //     <div className="container max-w-4xl">
  //       <div className="text-center mb-16">
  //         <h2 className="text-3xl md:text-4xl font-bold mb-6">
  //           Perguntas <span className="text-gold-DEFAULT">Frequentes</span>
  //         </h2>
  //         <p className="text-lg text-gray-600">
  //           Tire suas dúvidas sobre o eBook Estratégia Criminal
  //         </p>
  //       </div>

  //       <Accordion type="single" collapsible className="border rounded-lg overflow-hidden">
  //         {faqs.map((faq, index) => (
  //           <AccordionItem key={index} value={`item-${index}`}>
  //             <AccordionTrigger className="px-6 py-4 text-left font-bold hover:text-gold-DEFAULT">
  //               {faq.question}
  //             </AccordionTrigger>
  //             <AccordionContent className="px-6 pb-4 text-gray-600">
  //               {faq.answer}
  //             </AccordionContent>
  //           </AccordionItem>
  //         ))}
  //       </Accordion>

  //       <div className="mt-12 text-center">
  //         <p className="text-gray-600 mb-6">
  //           Ainda tem dúvidas? Entre em contato com nossa equipe
  //         </p>
  //         <a 
  //           href="mailto:contato@estrategiacriminal.com.br" 
  //           className="text-gold-DEFAULT hover:text-gold-dark font-medium underline"
  //         >
  //           contato@estrategiacriminal.com.br
  //         </a>
  //       </div>
  //     </div>
  //   </section>
  // );
}
