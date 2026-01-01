import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white text-gray-900">
      {/* HERO SECTION: O IMPACTO PARA SÃO PAULO */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Inteligência de <span className="text-yellow-400">Ativos</span> Jurídicos
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-slate-300 max-w-3xl mx-auto">
            Tecnologia de Auditoria e Saneamento de Carteiras de Alta Escala. 
            Identificamos liquidez represada contra Réus de Ouro em 48h.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm">✓ OAB/SC 57.879</span>
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm">✓ Diagnóstico PJe/eProc/Projudi</span>
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm">✓ Foco em Réus Solventes</span>
          </div>

          <a 
            href="https://wa.me/5571986482241" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-10 rounded-xl text-xl transition-all shadow-xl hover:scale-105"
          >
            Solicitar Auditoria Gratuita (50 Processos)
          </a>
        </div>
      </section>

      {/* DASHBOARD EM TEMPO REAL: PROVA DE CONCEITO */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Ativos Mapeados (Mês)</p>
              <h3 className="text-4xl font-black text-blue-900">R$ 14.250.840</h3>
              <p className="text-green-600 text-sm mt-2">↑ 12% vs mês anterior</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Inércia Detectada (Méd.)</p>
              <h3 className="text-4xl font-black text-blue-900">8.420 Dias</h3>
              <p className="text-slate-500 text-sm mt-2">Tempo total de processos parados</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Eficiência Operacional</p>
              <h3 className="text-4xl font-black text-blue-900">94.8%</h3>
              <p className="text-blue-600 text-sm mt-2 font-bold">Assertividade em Réus de Ouro</p>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREA DO CLIENTE: O MODELO SAAS */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-slate-900 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="p-12 md:w-3/5 text-white">
              <h2 className="text-3xl font-bold mb-6">Portal de Auditoria SaaS</h2>
              <p className="text-slate-400 mb-8 text-lg">
                Suba seus relatórios brutos e nossa tecnologia filtra instantaneamente os ativos com maior probabilidade de êxito e liquidez imediata.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-slate-300"><span className="text-yellow-500 mr-3">✔</span> Saneamento de carteiras contra Bancos e S/A.</li>
                <li className="flex items-center text-slate-300"><span className="text-yellow-500 mr-3">✔</span> Identificação de homônimos e devedores solventes.</li>
                <li className="flex items-center text-slate-300"><span className="text-yellow-500 mr-3">✔</span> Relatórios de provisão para Sócio-Gestor.</li>
              </ul>
            </div>
            <div className="p-12 md:w-2/5 bg-slate-800 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mb-6 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Área Restrita</h3>
              <p className="text-slate-400 text-sm mb-6">Exclusivo para escritórios homologados.</p>
              <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg opacity-50 cursor-not-allowed">Acessar Painel</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER PROFISSIONAL */}
      <footer className="py-12 bg-white text-center border-t border-slate-100">
        <p className="text-slate-500 text-sm">
          © 2026 Advogado Nômade - Dr. Reginaldo Oliveira (OAB/SC 57.879). <br/>
          Inteligência Jurídica Digital.
        </p>
      </footer>
    </main>
  );
}
