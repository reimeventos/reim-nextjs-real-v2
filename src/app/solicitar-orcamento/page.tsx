export default function SolicitarOrcamentoPage() {
  return (
    <main className="min-h-screen bg-[#f7f2ec] pb-24">
      <section className="bg-[#5b2c1c] text-white px-5 pt-8 pb-6 rounded-b-[32px] shadow-md">
        <p className="text-sm opacity-80">REIM EVENTOS</p>

        <h1 className="text-2xl font-bold mt-2">
          Solicitar Orçamento
        </h1>

        <p className="text-sm mt-2 opacity-90">
          Informe os dados do seu evento para o fornecedor preparar uma proposta.
        </p>
      </section>

      <section className="px-5 mt-6">
        <div className="bg-white rounded-3xl shadow-sm p-5 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-[#5b2c1c] mb-2">
              Tipo de Evento
            </label>
            <select className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none bg-white">
              <option>Casamento</option>
              <option>Aniversário</option>
              <option>Debutante</option>
              <option>Formatura</option>
              <option>Evento corporativo</option>
              <option>Outro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#5b2c1c] mb-2">
              Data do Evento
            </label>
            <input
              type="date"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#5b2c1c] mb-2">
              Horário do Evento
            </label>
            <input
              type="time"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#5b2c1c] mb-2">
              Espaço de Evento
            </label>
            <input
              type="text"
              placeholder="Ex: Espaço Bella Vista, sítio, salão, igreja..."
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none bg-white"
            />
            <p className="text-xs text-gray-500 mt-2">
              O espaço ajuda o fornecedor a entender melhor o estilo e a estrutura da festa.
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#5b2c1c] mb-2">
              Cidade do Evento
            </label>
            <input
              type="text"
              placeholder="Ex: Eunápolis"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#5b2c1c] mb-2">
              Quantidade de Convidados
            </label>
            <input
              type="number"
              placeholder="Ex: 150"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#5b2c1c] mb-2">
              Serviço Desejado
            </label>
            <select className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none bg-white">
              <option>Buffet</option>
              <option>Decoração</option>
              <option>Fotografia</option>
              <option>Filmagem</option>
              <option>Som e iluminação</option>
              <option>Espaço de festa</option>
              <option>Cerimonial</option>
              <option>Doces e bolo</option>
              <option>Outro serviço</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#5b2c1c] mb-2">
              Observações para o Fornecedor
            </label>
            <textarea
              rows={5}
              placeholder="Descreva detalhes importantes: estilo do evento, preferências, estrutura desejada, dúvidas..."
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none resize-none bg-white"
            />
          </div>

          <button className="w-full bg-[#c89b3c] text-white font-semibold py-4 rounded-2xl shadow-md">
            Enviar Solicitação
          </button>
        </div>
      </section>
    </main>
  );
}
