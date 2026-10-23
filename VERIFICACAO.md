# Verificação da entrega — V1.1

Verificações realizadas em 22/10/2026. Protótipo local; não é certificação ou autorização para lançamento público.

## Expansão para quatro páginas

- Fluxo real no navegador: Início → Práticas → Habilidades → ponte com Sally Rooney → exercício de diálogo. Links por âncora abriram a prática correspondente.
- Sete campos preenchidos com textos de teste diferentes; após recarregar, todos recuperaram seu próprio conteúdo, com acentos e quebras de linha.
- O rascunho de Começar escrito na página inicial reapareceu na página Práticas, usando a chave antiga da V1.
- Sete registros de prática marcados e recuperados. A árvore exibiu os registros relacionados. Desmarcar não apagou texto.
- Cópia de um rascunho comparada ao conteúdo original no navegador: preservada.
- Caderno completo baixado pelo botão real e arquivo conferido no computador: sete seções, textos independentes e caracteres preservados.
- Dados de teste removidos pelos próprios campos e controles, após conferir o prefixo dos testes; não ficaram rascunhos ou progresso fictícios.
- Quatro páginas verificadas em 320, 390, 768 e 1280 px: sem transbordamento horizontal. Campos de escrita com fonte de 17 px.
- Capturas revisadas: oficinas no computador e celular, árvore no computador e perfil da autora.
- JavaScript passou na verificação de sintaxe. Testes automatizados exercitaram sete chaves, legado V1, exportação, registros, falha de armazenamento, cópia manual e mudanças em outra aba sem sobrescrever texto em edição.
- Arquivos, links entre páginas e âncoras, IDs únicos, labels e referências ARIA conferidos.

Este registro preserva os testes da entrega local. Capturas selecionadas para este repositório estão em [docs/images](docs/images/), incluindo a árvore, uma prática móvel e o perfil-piloto. O teste de desenvolvimento `work/verify-expansao.cjs` pertence ao ambiente local e não está incluído neste repositório. Não houve instalação de dependências ou mudança nas fontes nessa verificação.

## Limites desta revisão

Não houve teste com pessoas do público, aparelho físico, leitor de tela, navegação integral exclusivamente por teclado ou auditoria completa WCAG. O HTML contém práticas, links, detalhes expansíveis e avisos sem depender do script; o navegador não foi testado com JavaScript desativado. A redução de movimento está prevista no CSS, sem teste específico de preferência do sistema nesta expansão. A aceitação visual final cabe ao criador.

A biografia usa fontes editoriais, com limites documentados em `FONTES.md`. As conexões de habilidades e os exercícios são propostas pedagógicas, não resultados validados nem técnicas atribuídas à autora.

## Histórico da primeira entrega (V1)

## No navegador

- Página carregada com HTML, CSS, JavaScript e fontes locais.
- Sete itens no mapa, um único conteúdo principal e todos os links internos com destinos existentes.
- Sem transbordamento horizontal em 320, 390, 768 e 1280 px.
- Campo de escrita com fonte de 17 px; botão de cópia com 52 px de altura nas larguras verificadas.
- Texto de teste com acentos e quebras de linha recuperado após recarregar a página.
- Conteúdo copiado comparado ao texto de teste: preservado.
- Download `.txt` iniciado pelo botão e arquivo lido no computador: preservou acentos e quebras de linha.
- Campo vazio: instrução para escrever, com foco devolvido ao campo.
- Capturas visuais da primeira entrega registradas no ambiente local; os arquivos originais não estão incluídos neste repositório. A seleção publicada está em [docs/images](docs/images/).

## Verificações complementares

- JavaScript passou na verificação de sintaxe do Node.js.
- Tratamento de armazenamento bloqueado/cheio: o campo continua funcionando, exibe aviso e permite copiar.
- Cópia automática indisponível: seleção do texto e instrução para cópia manual.
- Recuperação de rascunho e visibilidade dos controles após carregar.
- IDs únicos, links internos e presença dos arquivos necessários.

## Limites

As capturas foram revisadas visualmente. Não houve teste com usuários, aparelho físico, leitor de tela ou auditoria completa de acessibilidade. O modo sem JavaScript tem aviso e conteúdo estático no HTML; não foi realizado um teste de navegador com JavaScript desativado. A preferência de redução de movimento está prevista no CSS, sem animações decorativas. O armazenamento depende do navegador e do endereço de acesso, como explicado no site e no README.
