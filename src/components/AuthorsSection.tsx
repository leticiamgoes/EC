import { Briefcase, Award, Book } from "lucide-react";

export default function AuthorsSection() {
  return (
    <section className="py-20 bg-white" id="autores">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-serif mb-8">
          Quem escreveu este guia?
        </h2>
        <br></br> <br></br>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/3 shadow-lg rounded-lg overflow-hidden">
            <img
              src="public/img/autores.jpeg"
              alt="Arthur Irwin e Luan Guimarães"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="md:w-2/3">
            {/* <p className="text-gray-700 mb-6 text-lg">
              O conteúdo foi elaborado por Arthur Irwin (a direita) e Luan Guimarães (a esquerda), advogados criminalistas com atuação estratégica e vasta experiência na prática jurídica, especialmente em procedimentos investigatórios. Eles compartilham, de forma objetiva e prática, o que você precisa fazer quando o acesso ao inquérito for negado.
                Estratégia Criminal é um curso completo e prático para advogados e estudantes que desejam atuar com segurança na advocacia criminal.
            </p> */}
            <div className="flex justify-center md:justify-start">
              <img src="img/logo_estrategia_criminal_horizontal_light.jpeg"  
              alt="Estratégia Criminal Logo"
               className="w-auto object-contain ml-6"
              style={{ height: '23rem' }} />
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              O conteúdo foi elaborado por Arthur Irwin (à direita) e Luan Guimarães (à esquerda), advogados criminalistas com ampla experiência na linha de frente da advocacia penal. Eles sabem exatamente o que fazer quando o acesso ao inquérito é negado — e agora, você também vai saber.
O curso Estratégia Criminal foi desenvolvido para preparar advogados e estudantes que desejam atuar com confiança desde os primeiros passos do procedimento investigatório.
Com uma abordagem direta, prática e sem rodeios, você aprenderá como agir diante das negativas da autoridade policial, quais fundamentos utilizar e como garantir o direito de acesso à investigação.
Se você quer evitar erros que comprometem toda a defesa desde o início, Estratégia Criminal é o caminho certo. Esteja pronto para atuar com técnica, estratégia e autoridade.
                    
                
            </p>
            
          </div>
        </div>

       <div className="grid md:grid-cols-2 gap-12">
  {/* Card - Arthur Irwin */}
  <div className="bg-estrategia-lightgray rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
    <div className="bg-black text-white p-8 flex items-center">
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2">Arthur Irwin</h3>
        <p className="text-gray-300 flex items-center">
          <Briefcase size={18} className="mr-2" />
          Advogado Criminalista
        </p>
      </div>
      <img
        src="img/arthur.png"
        alt="Estratégia Criminal Logo"
         className="object-cover rounded-full border-2 border-white ml-6"
         style={{ height: '10rem', width: '10rem' }} // 52px
      />
    </div>
    <div className="p-6">
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
  <div className="bg-estrategia-lightgray rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
    <div className="bg-black text-white p-8 flex items-center">
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2">Luan Guimarães</h3>
        <p className="text-gray-300 flex items-center">
          <Briefcase size={18} className="mr-2" />
          Advogado Criminalista
        </p>
      </div>
      <img
       src="img/lucas.png"
        alt="Estratégia Criminal Logo"
        className="object-cover rounded-full border-2 border-white ml-6"
         style={{ height: '10rem', width: '10rem' }}
      />
    </div>
    <div className="p-6">
      <p className="text-gray-700 mb-4">
        
        Pós-Graduado em Direito Penal e Processo Penal pela Escola Brasileira de Direito. Autor de capítulos de livro e artigos científicos.
         Professor no curso de preparação para o Exame de Ordem.Advogado especializado em Direito Penal e Processo Penal, com atuação em casos de grande complexidade. 
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
