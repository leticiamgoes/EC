import { Briefcase, Award, Book, Shield, CheckCircle, Users } from "lucide-react";

export default function AuthorsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden" id="autores">
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4 text-gold" />
            <span className="text-gold font-semibold text-sm">Especialistas em Direito Criminal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Quem Está Por Trás Deste Guia?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Conheça os criminalistas que transformaram anos de experiência em tribunais em um guia prático e direto ao ponto
          </p>
        </div>

        {/* CARD HORIZONTAL PREMIUM - Sobre o Curso */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-gold/30 overflow-hidden">
            
            <div className="grid md:grid-cols-2 gap-0">
              
              {/* LOGO/IMAGEM À ESQUERDA */}
              <div className="relative bg-gradient-to-br from-black to-gray-900 flex items-center justify-center p-12 md:p-16">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
                <img
                  src="/img/logo_estrategia_criminal_horizontal_dark.png"
                  alt="Estratégia Criminal Logo"
                  className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                {/* Brilho decorativo */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gold/5 to-transparent pointer-events-none"></div>
              </div>

              {/* TEXTO À DIREITA */}
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-gold" />
                  <h3 className="text-2xl md:text-3xl font-bold text-gold">Estratégia Criminal</h3>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  O conteúdo foi elaborado por <strong className="text-white">Arthur Irwin</strong> e <strong className="text-white">Luan Guimarães</strong>,
                  advogados criminalistas com <strong className="text-gold">ampla experiência</strong> na linha de frente da advocacia penal.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Preparado para advogados e estudantes que desejam atuar com <strong className="text-white">confiança e técnica</strong> desde os primeiros passos do procedimento investigatório.
                </p>

                <div className="bg-gold/10 border-l-4 border-gold p-5 rounded-lg">
                  <p className="text-gray-200 text-lg italic leading-relaxed">
                    <strong className="text-gold">"</strong>Com abordagem direta, prática e sem rodeios, você aprenderá estratégias que fazem a diferença nos tribunais superiores.<strong className="text-gold">"</strong>
                  </p>
                </div>

                {/* Badges de Credibilidade */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-black text-gold mb-1">10+</div>
                    <div className="text-xs text-gray-400 uppercase">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-gold mb-1">500+</div>
                    <div className="text-xs text-gray-400 uppercase">Casos Atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-gold mb-1">100%</div>
                    <div className="text-xs text-gray-400 uppercase">Dedicação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GRID DOS AUTORES - CARDS PREMIUM */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Card - Arthur Irwin */}
          <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/20 hover:border-gold/50 transition-all duration-500 hover:scale-105">
            
            {/* Imagem do Autor */}
            <div className="relative overflow-hidden bg-gradient-to-br from-black to-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <img
                src="/img/arthur.png"
                alt="Arthur Irwin - Advogado Criminalista"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Badge Flutuante */}
              <div className="absolute top-6 right-6 bg-gold text-black px-4 py-2 rounded-full font-bold text-sm shadow-xl z-20">
                Especialista
              </div>
            </div>

            {/* Conteúdo do Card */}
            <div className="p-8 space-y-6">
              
              {/* Nome e Cargo */}
              <div>
                <h3 className="text-3xl font-extrabold text-white mb-2">Arthur Irwin</h3>
                <div className="flex items-center gap-2 text-gold">
                  <Briefcase size={20} />
                  <span className="font-semibold text-lg">Advogado Criminalista</span>
                </div>
              </div>

              {/* Descrição */}
              <p className="text-gray-300 leading-relaxed">
                Advogado com <strong className="text-white">mais de 10 anos de experiência</strong> em advocacia criminal, especializado em casos complexos e de grande repercussão. 
                Professor de Direito Penal e palestrante em eventos jurídicos nacionais.
              </p>

              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Pós-Graduado</strong> em Direito Penal e Criminologia pela PUC-RS. 
                Autor de capítulos de livro e artigos científicos.
              </p>

              {/* Conquistas */}
              <div className="space-y-3 pt-4 border-t border-gold/20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Especialista em Direito Penal Econômico</div>
                    <div className="text-gray-400 text-sm">Atuação em casos de alta complexidade</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Book className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Autor e Professor</div>
                    <div className="text-gray-400 text-sm">Diversos artigos jurídicos publicados</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Professor OAB</div>
                    <div className="text-gray-400 text-sm">Preparação para Exame de Ordem</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card - Luan Guimarães */}
          <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/20 hover:border-gold/50 transition-all duration-500 hover:scale-105">
            
            {/* Imagem do Autor */}
            <div className="relative overflow-hidden bg-gradient-to-br from-black to-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <img
                src="/img/luan.png"
                alt="Luan Guimarães - Advogado Criminalista"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Badge Flutuante */}
              <div className="absolute top-6 right-6 bg-gold text-black px-4 py-2 rounded-full font-bold text-sm shadow-xl z-20">
                Especialista
              </div>
            </div>

            {/* Conteúdo do Card */}
            <div className="p-8 space-y-6">
              
              {/* Nome e Cargo */}
              <div>
                <h3 className="text-3xl font-extrabold text-white mb-2">Luan Guimarães</h3>
                <div className="flex items-center gap-2 text-gold">
                  <Briefcase size={20} />
                  <span className="font-semibold text-lg">Advogado Criminalista</span>
                </div>
              </div>

              {/* Descrição */}
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Pós-Graduado</strong> em Direito Penal e Processo Penal pela Escola Brasileira de Direito. 
                Autor de capítulos de livro e artigos científicos.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Advogado especializado em <strong className="text-white">Direito Penal e Processo Penal</strong>, com atuação em casos de grande complexidade. 
                Consultor jurídico e <strong className="text-white">mentor de jovens advogados</strong> na área criminal.
              </p>

              {/* Conquistas */}
              <div className="space-y-3 pt-4 border-t border-gold/20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Mestre em Ciências Criminais</div>
                    <div className="text-gray-400 text-sm">Formação acadêmica de excelência</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Book className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Palestrante Nacional</div>
                    <div className="text-gray-400 text-sm">Congressos e eventos jurídicos</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Professor OAB</div>
                    <div className="text-gray-400 text-sm">Preparação para Exame de Ordem</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Final da Seção */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gold/10 to-transparent border-2 border-gold/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-gray-300 text-xl mb-6 leading-relaxed">
              Aprenda com quem realmente <strong className="text-white">atua nos tribunais</strong> e transforme sua prática criminal com conhecimento testado e aprovado por <strong className="text-gold">centenas de advogados</strong>.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="flex items-center gap-2 text-gold">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">Experiência Comprovada</span>
              </div>
              <div className="flex items-center gap-2 text-gold">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">Método Prático</span>
              </div>
              <div className="flex items-center gap-2 text-gold">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">Resultados Reais</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}