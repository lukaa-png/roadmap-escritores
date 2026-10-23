/* Conteúdo e navegação existem no HTML. O JS acrescenta rascunhos e registros. */
(() => {
  "use strict";
  const etapas = ["comecar", "explorar", "planejar", "escrever", "revisar", "compartilhar", "refletir"];
  const nomes = ["Começar", "Explorar", "Planejar", "Escrever", "Revisar", "Compartilhar", "Refletir"];
  const registros = new Set();
  const editores = [];
  // Preserva o rascunho da primeira entrega, inclusive na página inicial.
  const chaveTexto = etapa => etapa === "comecar" ? "roadmap-escritores:trecho:v1" : `roadmap-escritores:trecho:${etapa}:v1`;
  const chaveRegistro = etapa => `roadmap-escritores:pratica:${etapa}:registrada:v1`;
  let armazenamentoDisponivel = true;

  etapas.forEach(etapa => {
    try { if (localStorage.getItem(chaveRegistro(etapa)) === "1") registros.add(etapa); }
    catch { armazenamentoDisponivel = false; }
  });

  function atualizarPercurso() {
    document.querySelectorAll("[data-progresso]").forEach(elemento => {
      elemento.textContent = `${registros.size} de 7 práticas registradas por você. Isso não mede domínio ou qualidade.${armazenamentoDisponivel ? "" : " Registro apenas nesta sessão; armazenamento indisponível."}`;
    });
    document.querySelectorAll("[data-registrar]").forEach(controle => { controle.checked = registros.has(controle.dataset.registrar); });
    document.querySelectorAll("[data-vinculos]").forEach(elemento => {
      const ligacoes = elemento.dataset.vinculos.split(" ");
      const numero = ligacoes.filter(etapa => registros.has(etapa)).length;
      const descricao = ligacoes.length === 1 ? "prática relacionada registrada" : "práticas relacionadas registradas";
      elemento.textContent = numero ? `${numero}/${ligacoes.length} ${descricao}` : "Sem prática registrada neste navegador";
      elemento.classList.toggle("tem-registro", numero > 0);
    });
  }

  function baixarTexto(texto, nomeArquivo) {
    const arquivo = new Blob([texto], { type: "text/plain;charset=utf-8" });
    const endereco = URL.createObjectURL(arquivo);
    const link = document.createElement("a");
    link.href = endereco;
    link.download = nomeArquivo;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(endereco), 1000);
  }

  document.querySelectorAll("[data-editor]").forEach(editor => {
    const etapa = editor.dataset.editor;
    const campo = editor.querySelector("textarea");
    const contador = editor.querySelector("[data-contador]");
    const status = editor.querySelector("[data-status]");
    const mensagem = editor.querySelector("[data-mensagem]");
    const avisar = texto => { mensagem.textContent = texto; };
    const contar = () => {
      const quantidade = Array.from(campo.value).length;
      contador.textContent = quantidade === 1 ? "1 caractere" : `${quantidade.toLocaleString("pt-BR")} caracteres`;
    };
    try {
      const guardado = localStorage.getItem(chaveTexto(etapa));
      if (guardado !== null) campo.value = guardado;
      status.textContent = guardado ? "Rascunho recuperado deste navegador." : "Salvamento automático neste navegador.";
    } catch { status.textContent = "Salvamento indisponível. Copie ou baixe seu texto."; }
    campo.addEventListener("input", () => {
      contar();
      avisar("");
      try {
        localStorage.setItem(chaveTexto(etapa), campo.value);
        status.textContent = "Rascunho salvo neste navegador.";
      } catch { status.textContent = "Não foi possível salvar. Copie ou baixe seu texto."; }
    });
    editor.querySelector("[data-copiar]").addEventListener("click", async () => {
      if (!campo.value.trim()) { avisar("Escreva um trecho antes de copiar."); campo.focus(); return; }
      try {
        if (!navigator.clipboard || !window.isSecureContext) throw new Error("Cópia indisponível");
        await navigator.clipboard.writeText(campo.value);
        avisar("Trecho copiado. Cole onde quiser guardar.");
      } catch {
        campo.focus(); campo.select();
        avisar("Seu texto está selecionado. Use Ctrl+C, ⌘C ou a opção Copiar do celular.");
      }
    });
    editor.querySelector("[data-baixar]").addEventListener("click", () => {
      if (!campo.value.trim()) { avisar("Escreva um trecho antes de baixar."); campo.focus(); return; }
      baixarTexto(campo.value, `meu-rascunho-${etapa}.txt`);
      avisar("O download do seu trecho foi iniciado.");
    });
    editor.querySelector(".acoes-texto").hidden = false;
    contar();
    editores.push({ etapa, campo, status });
  });

  document.querySelectorAll("[data-registrar]").forEach(controle => {
    controle.addEventListener("change", () => {
      const etapa = controle.dataset.registrar;
      if (controle.checked) registros.add(etapa); else registros.delete(etapa);
      let texto = controle.checked ? "Prática registrada. Você pode desmarcar quando quiser." : "Registro desmarcado. Seu texto continua guardado.";
      try { localStorage.setItem(chaveRegistro(etapa), controle.checked ? "1" : "0"); }
      catch {
        armazenamentoDisponivel = false;
        texto += " O registro vale só nesta sessão; o navegador não permitiu salvar.";
      }
      controle.closest("[data-editor]").querySelector("[data-mensagem]").textContent = texto;
      atualizarPercurso();
    });
  });

  // Não substitui textos em edição quando outra aba muda os mesmos dados.
  window.addEventListener("storage", evento => {
    editores.forEach(({ etapa, status }) => {
      if (evento.key === chaveTexto(etapa) || evento.key === null) status.textContent = "Os dados mudaram em outra aba. Baixe este trecho antes de recarregar.";
    });
    etapas.forEach(etapa => {
      if (evento.key === chaveRegistro(etapa) || evento.key === null) {
        if (evento.newValue === "1") registros.add(etapa); else registros.delete(etapa);
      }
    });
    atualizarPercurso();
  });

  const botaoCaderno = document.querySelector("[data-baixar-caderno]");
  if (botaoCaderno) botaoCaderno.addEventListener("click", () => {
    const mensagem = document.querySelector("#mensagem-caderno");
    const preenchidos = editores.filter(({ campo }) => campo.value.trim());
    if (!preenchidos.length) { mensagem.textContent = "Escreva em uma das práticas antes de baixar seu caderno."; return; }
    const texto = preenchidos.map(({ etapa, campo }) => `${nomes[etapas.indexOf(etapa)].toUpperCase()}\n\n${campo.value}`).join("\n\n--------------------\n\n");
    baixarTexto(texto, "meu-caderno-de-escrita.txt");
    mensagem.textContent = "Download iniciado com os rascunhos preenchidos nesta página.";
  });

  function abrirPraticaDoEndereco() {
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
    const destino = document.getElementById(id);
    if (destino && destino.matches("details.oficina")) destino.open = true;
  }
  abrirPraticaDoEndereco();
  window.addEventListener("hashchange", abrirPraticaDoEndereco);
  document.querySelectorAll("[data-js]").forEach(elemento => { elemento.hidden = false; });
  atualizarPercurso();
})();
