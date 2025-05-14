import { useState } from 'react';

export default function LeadForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [carreira, setCarreira] = useState('');
  const [atuarCriminal, setAtuarCriminal] = useState('');
  const [receberMateriais, setReceberMateriais] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const dadosLead = {
      nome,
      email,
      telefone,
      carreira,
      atuarCriminal,
      receberMateriais,
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxzcYnZJbEAh2QS526yPHmNHqjFA470bGu3N1WK63cKAPXvHKt845IMA_LRn0EZEHnORQ/exec", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        mode: "no-cors",
        body: JSON.stringify(dadosLead),
      });

      setEnviado(true); // Assume sucesso com no-cors
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 bg-chess-black rounded-xl border border-gray-700">
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-6 text-center text-white">
          GRÁTIS: Receba nosso e-Book exclusivo!
        </h3>

        {enviado ? (
          <div className="bg-green-900 bg-opacity-20 p-6 rounded-lg text-center border border-green-700">
            <p className="text-green-400 text-lg font-semibold mb-2">Sucesso!</p>
            <p className="text-white">Seus dados foram enviados com sucesso.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
            <div>
              <label className="block text-white text-sm mb-1">Nome completo:</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-chess-gray text-white border border-gray-600 focus:border-gold-DEFAULT focus:outline-none"
                placeholder="Seu nome completo"
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

            <div>
              <label className="block text-white text-sm mb-1">Número de telefone (WhatsApp):</label>
              <input
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-chess-gray text-white border border-gray-600 focus:border-gold-DEFAULT focus:outline-none"
                placeholder="(DDD) 9xxxx-xxxx"
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-1">
                Qual carreira você deseja seguir dentro do Direito?
              </label>
              <select
                value={carreira}
                onChange={(e) => setCarreira(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-chess-gray text-white border border-gray-600 focus:border-gold-DEFAULT focus:outline-none"
              >
                <option value="">Selecione...</option>
                <option value="advocacia">Advocacia</option>
                <option value="concurso">Concurso</option>
                <option value="duvida">Ainda em dúvida</option>
              </select>
            </div>

            {carreira === 'advocacia' && (
              <div>
                <label className="block text-white text-sm mb-1">
                  Você deseja atuar no Direito Criminal?
                </label>
                <select
                  value={atuarCriminal}
                  onChange={(e) => setAtuarCriminal(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-chess-gray text-white border border-gray-600 focus:border-gold-DEFAULT focus:outline-none"
                >
                  <option value="">Selecione...</option>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-white text-sm mb-1">
                Deseja se inscrever para receber mais materiais gratuitos como esse no futuro?
              </label>
              <select
                value={receberMateriais}
                onChange={(e) => setReceberMateriais(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-chess-gray text-white border border-gray-600 focus:border-gold-DEFAULT focus:outline-none"
              >
                <option value="">Selecione...</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-white font-bold py-3 px-6 rounded-lg hover:bg-gold-light transition-colors"
            >
              {loading ? "Enviando..." : "QUERO O eBOOK AGORA!"}
            </button>

            <div className="text-center">
              <p className="text-xs text-gray-400">
                Prometemos não enviar spam. Seus dados estão seguros conosco.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
