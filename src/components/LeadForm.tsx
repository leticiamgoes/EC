import { FaWhatsapp } from 'react-icons/fa';

export default function EbooksSection() {
  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-24 text-white relative overflow-hidden" id="ebooks-section">
      
      {/* --- Introdução Premium do eBook --- */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#111]/60 to-black/80 -z-10 rounded-3xl shadow-2xl"></div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gold mb-4">
          Guia dos Tribunais Superiores
        </h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
          Um material exclusivo, direto ao ponto e criado para advogados e estudantes de Direito que querem dominar os principais Tribunais Superiores.  
          Estratégias práticas, dicas essenciais e informações que fazem a diferença na prática penal.
        </p>
      </div>

      {/* --- eBook Pago --- */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Imagem do eBook */}
        <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-2xl shadow-2xl">
          <img
            src="/img/ebookpago.png"
            alt="Guia dos Tribunais Superiores"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-4 right-4 bg-gold text-black font-bold px-4 py-2 rounded-lg shadow-xl animate-[pulse_2s_ease-in-out_infinite]">
            R$ 37,90
          </div>
        </div>

        {/* Texto e CTA */}
        <div className="space-y-6">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            O eBook <strong>“Guia dos Tribunais Superiores”</strong> foi escrito para quem deseja dominar a prática criminal com <strong>estratégia, segurança</strong> e base em decisões recentes do STJ, abordando:
          </p>

          <ul className="list-disc list-inside mb-4 text-gray-300">
            <li>Tráfico de drogas, buscas e tráfico privilegiado.</li>
            <li>Delitos patrimoniais, provas periciais e reconhecimento pessoal.</li>
            <li>Homicídio, pronúncia e elementos de inquérito.</li>
            <li>Dosimetria de pena, agravantes, atenuantes e compensações.</li>
            <li>Execução penal, remição de pena e direitos do preso.</li>
            <li>Recursos criminais, embargos de declaração e apelação.</li>
          </ul>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Um material completo, direto ao ponto, que oferece <strong>segurança e visão prática</strong> para se destacar nos tribunais.
          </p>

          {/* Aviso da comunidade WhatsApp */}
          <p className="text-yellow-400 text-lg md:text-xl font-semibold text-center mb-4 animate-[pulse_2s_ease-in-out_infinite] drop-shadow-lg">
            Adquirindo este E-book, você entra automaticamente<br />
            <strong>na Comunidade Estratégia Criminal no WhatsApp!</strong>
            <br />
            <FaWhatsapp className="inline-block mr-2 text-green-500" />
          </p>

          {/* --- BOTÃO MANUAL, PREMIUM, JURÍDICO --- */}
          <div className="flex justify-center">
            <a
              href="https://pay.kiwify.com.br/OthtQkH"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block 
                text-black 
                font-extrabold 
                text-xl 
                px-10 
                py-4 
                rounded-xl 
                bg-gold 
                shadow-[0_0_20px_rgba(198,167,112,0.7)] 
                hover:shadow-[0_0_30px_rgba(198,167,112,1)] 
                hover:bg-gold/90 
                transition-all 
                animate-[pulse_2s_ease-in-out_infinite]
              "
            >
              ADQUIRIR AGORA – R$ 37,90
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
