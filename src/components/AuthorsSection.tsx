import { Briefcase, Award, Book } from "lucide-react";

export default function AuthorsSection() {
  return (
    <section className="py-20 bg-gray-50" id="autores">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-serif mb-12 text-gray-900">
          Quem escreveu este guia?
        </h2>

        {/* CARD HORIZONTAL PRINCIPAL */}
        <div className="flex justify-center mb-20">
          <div className="w-full max-w-6xl bg-[#0a0a0a] text-gray-200 rounded-2xl shadow-2xl border border-[#1a1a1a] overflow-hidden flex flex-col md:flex-row">
            
            {/* IMAGEM À ESQUERDA */}
            <div className="md:w-1/2 w-full bg-[#111] flex items-center justify-center">
              <img
                src="/img/logo_estrategia_criminal_horizontal_dark.png"
                alt="Estratégia Criminal Logo"
                className="object-cover w-full h-full max-h-[400px] opacity-95 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* TEXTO À DIREITA */}
            <div className="md:w-1/2 w-full p-10 flex flex-col justify-center space-y-5 text-justify leading-relaxed">
              <p className="text-lg">
                O conteúdo foi elaborado por <span className="text-white font-semibold">Arthur Irwin</span> e <span className="text-white font-semibold">Luan Guimarães</span>,
                advogados criminalistas com ampla experiência na linha de frente da advocacia penal. 
                Eles sabem exatamente o que fazer quando o acesso ao inquérito é negado — e agora, você também vai saber.
              </p>

              <p className="text-lg">
                O curso <span className="text-white font-semibold">Estratégia Criminal</span> foi desenvolvido para preparar advogados e estudantes que desejam atuar com confiança 
                desde os primeiros passos do procedimento investigatório.
              </p>

              <p className="text-lg">
                Com uma abordagem direta, prática e sem rodeios, você aprenderá como agir diante das negativas da autoridade policial, 
                quais fundamentos utilizar e como garantir o direito de acesso à investigação.
              </p>

              <div className="border-l-4 border-[#C6A770] pl-5 italic text-gray-300">
                <p className="text-lg">
                  Se você quer evitar erros que comprometem toda a defesa desde o início, 
                  <span className="text-white font-semibold"> Estratégia Criminal</span> é o caminho certo.  
                  Esteja pronto para atuar com técnica, estratégia e autoridade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GRID DOS AUTORES */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Card - Arthur Irwin */}
          <div className="bg-estrategia-lightgray rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg border border-gray-300">
            {/* Imagem com moldura */}
            <div className="relative p-2 bg-[#0a0a0a]">
              <div className="rounded-lg overflow-hidden border border-[#1a1a1a] shadow-inner">
                <img
                  src="/img/arthur.png"
                  alt="Arthur Irwin - Advogado Criminalista"
                  className="w-full object-cover rounded-md"
                  style={{ height: "250px" }}
                />
              </div>
            </div>

            {/* Texto abaixo da imagem */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Arthur Irwin</h3>
              <p className="text-gray-500 flex items-center mb-4">
                <Briefcase size={18} className="mr-2" />
                Advogado Criminalista
              </p>
              <p className="text-gray-700 mb-4">
                Advogado com mais de 10 anos de experiência em advocacia criminal, especializado em casos complexos e de grande repercussão. Professor de Direito Penal e palestrante em eventos jurídicos nacionais.
                Pós-Graduado em Direito Penal e Criminologia pela Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS). Autor de capítulos de livro e artigos científicos. Professor no curso de preparação para o Exame de Ordem.
              </p>
              <div className="flex items-center text-estrategia-dark mb-3">
                <Award size={20} className="mr-2" />
                <p className="font-medium">Especialista em Direito Penal Econômico</p>
              </div>
              <div className="flex items-center text-estrategia-dark">
                <Book size={20} className="mr-2" />
                <p className="font-medium">Autor de diversos artigos jurídicos</p>
              </div>
            </div>
          </div>

          {/* Card - Luan Guimarães */}
          <div className="bg-estrategia-lightgray rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg border border-gray-300">
            <div className="relative p-2 bg-[#0a0a0a]">
              <div className="rounded-lg overflow-hidden border border-[#1a1a1a] shadow-inner">
                <img
                  src="/img/luan.png"
                  alt="Luan Guimarães - Advogado Criminalista"
                  className="w-full object-cover rounded-md"
                  style={{ height: "250px" }}
                />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Luan Guimarães</h3>
              <p className="text-gray-500 flex items-center mb-4">
                <Briefcase size={18} className="mr-2" />
                Advogado Criminalista
              </p>
              <p className="text-gray-700 mb-4">
                Pós-Graduado em Direito Penal e Processo Penal pela Escola Brasileira de Direito. Autor de capítulos de livro e artigos científicos.
                Professor no curso de preparação para o Exame de Ordem. Advogado especializado em Direito Penal e Processo Penal, com atuação em casos de grande complexidade. 
                Consultor jurídico para escritórios de advocacia e mentor de jovens advogados na área criminal.
              </p>
              <div className="flex items-center text-estrategia-dark mb-3">
                <Award size={20} className="mr-2" />
                <p className="font-medium">Mestre em Ciências Criminais</p>
              </div>
              <div className="flex items-center text-estrategia-dark">
                <Book size={20} className="mr-2" />
                <p className="font-medium">Palestrante em congressos jurídicos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
