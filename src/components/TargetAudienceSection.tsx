import { Target, BookOpen, Award } from "lucide-react";

const TargetAudienceSection = () => {
  return (
    <section className="py-20 bg-white" id="para-quem">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-serif mb-12">
          Para Quem é Este Guia Prático?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-estrategia-lightgray rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-estrategia-dark w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Target size={60} className="text-black" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Advogados Criminalistas</h3>
            <p className="text-gray-700 text-center">
              Profissionais que enfrentam o desafio de acessar inquéritos policiais e precisam garantir o direito de defesa de seus clientes.
            </p>
          </div>
          
          <div className="bg-estrategia-lightgray rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-estrategia-dark w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <BookOpen size={60} className="text-black" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Recém-formados em Direito</h3>
            <p className="text-gray-700 text-center">
              Advogados iniciantes que buscam conhecimento prático para lidar com situações reais nas delegacias e fóruns criminais.
            </p>
          </div>
          
          <div className="bg-estrategia-lightgray rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-estrategia-dark w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Award size={60} className="text-black" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Advogados em Plantões</h3>
            <p className="text-gray-700 text-center">
              Profissionais que atuam em plantões judiciários e audiências de custódia, onde o acesso rápido ao inquérito é fundamental.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;