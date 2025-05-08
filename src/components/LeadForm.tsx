import { useState } from 'react';

export default function LeadForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [advoga, setAdvoga] = useState(false);
  const [criminalista, setCriminalista] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      const dadosLead = { nome, email, advoga, criminalista };
      console.log('Lead capturado:', dadosLead);
      setLoading(false);
      setEnviado(true);
    }, 1000);
  };

  return (
    <div className="mt-20 bg-chess-black rounded-xl border border-gray-700">
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-6 text-center text-white">
          GRÁTIS:
          Receba nosso e-Book exclusivo!
        </h3>
        
        {enviado ? (
          <div className="bg-green-900 bg-opacity-20 p-6 rounded-lg text-center border border-green-700">
            <p className="text-green-400 text-lg font-semibold mb-2">Sucesso!</p>
            <p className="text-white">Seus dados foram enviados com sucesso.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
            <div>
              <label className="block text-white text-sm mb-1">Nome:</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-chess-gray text-white border border-gray-600 focus:border-gold-DEFAULT focus:outline-none"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-1">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-chess-gray text-white border border-gray-600 focus:border-gold-DEFAULT focus:outline-none"
                placeholder="Seu email"
              />
            </div>

            <div className="flex justify-start space-x-8 items-center">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={advoga}
                  onChange={() => setAdvoga(!advoga)}
                  className="h-4 w-4 text-gold-DEFAULT rounded border-gray-400 focus:ring-gold-DEFAULT"
                />
                <span className="text-white text-sm">Você advoga?</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={criminalista}
                  onChange={() => setCriminalista(!criminalista)}
                  className="h-4 w-4 text-gold-DEFAULT rounded border-gray-400 focus:ring-gold-DEFAULT"
                />
                <span className="text-white text-sm">É criminalista?</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-white font-bold py-3 px-6 rounded-lg hover:bg-gold-light transition-colors"
            >
              {loading ? "Enviando..." : "QUERO O eBOOK AGORA!"}
            </button>
            
            <div className="text-center">
              <p className="text-xs text-gray-400">Prometemos não enviar spam. Seus dados estão seguros conosco.</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}