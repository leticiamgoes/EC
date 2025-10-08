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

      {/* --- eBook Pago (Hotmart) --- */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imagem do eBook */}
        <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-2xl shadow-2xl">
          <img
            src="/img/ebookpago.png"
            alt="Guia dos Tribunais Superiores"
            className="object-cover w-full h-full"
          />
          {/* Badge de preço flutuante */}
          <div className="absolute top-4 right-4 bg-gold text-black font-bold px-4 py-2 rounded-lg shadow-xl animate-[pulse_2s_ease-in-out_infinite]">
            R$ 37,90
          </div>
        </div>

        {/* Texto e CTA */}
        <div className="space-y-6">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          <p>
  O eBook <strong>“Guia Definitivo da Advocacia Criminal Atualizada”</strong> foi escrito para quem deseja dominar a prática criminal com <strong>estratégia, segurança</strong> e base em decisões recentes do STJ, abordando:
</p>
<br></br>
<ul className="list-disc list-inside mb-4">
  <li>Tráfico de drogas, buscas e tráfico privilegiado.</li>
  <li>Delitos patrimoniais, provas periciais e reconhecimento pessoal.</li>
  <li>Homicídio, pronúncia e elementos de inquérito.</li>
  <li>Dosimetria de pena, agravantes, atenuantes e compensações.</li>
  <li>Execução penal, remição de pena e direitos do preso.</li>
  <li>Recursos criminais, embargos de declaração e apelação.</li>
</ul>

<p>
  Um material completo, direto ao ponto, que oferece <strong>segurança e visão prática</strong> para se destacar nos tribunais.
</p>

          </p>

          <a
            href="LINK_DA_HOTMART_AQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-black font-bold py-4 px-10 rounded-lg 
                       hover:bg-gold/90 transition-all relative animate-[pulse_1.8s_ease-in-out_infinite]"
            style={{
              boxShadow: "0 0 25px rgba(198, 167, 112, 0.6)",
            }}
          >
            ADQUIRIR AGORA POR APENAS R$ 37,90
          </a>
        </div>
      </div>
    </section>
  );
}
