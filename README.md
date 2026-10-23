# Roadmap para jovens escritores

Um protótipo de escrita de ficção para experimentar uma primeira cena e encontrar uma próxima prática.

**Projeto pessoal em desenvolvimento · V.01.1**  
Luiz Albuquerque / Vision · interface e front-end com apoio de IA na implementação.

![Página inicial com convite para começar a escrever.](docs/images/01-inicio.jpg)

## A proposta

Priorizar quem quer escrever ficção em português, mas ainda não começou. Uma prática curta oferece um ponto de partida; o mapa e as conexões de leitura oferecem possibilidades de continuação, sem sequência obrigatória.

Este é um protótipo funcional, não um curso validado, uma avaliação de texto ou um diagnóstico de estilo. Ainda não houve teste com pessoas do público.

## O que já existe

- Quatro páginas: início/mapa, práticas, habilidades e inspirações.
- Sete práticas com orientação, exemplo, campo de escrita e reflexão.
- Recuperação de rascunhos neste navegador, cópia e exportação `.txt`.
- Exportação dos campos preenchidos em um caderno de escrita.
- Registro manual de práticas, sem nota, ranking ou desbloqueios.
- Árvore com seis habilidades e ligações às práticas.
- Um perfil-piloto de Sally Rooney, com fontes e pontes editoriais de leitura.
- Layout responsivo e fontes locais.

![Árvore com conexões sugeridas entre práticas e habilidades.](docs/images/03-habilidades.jpg)

## Executar localmente

1. Baixe ou clone o projeto e abra a pasta no VS Code.
2. Abra `index.html` com o Live Server.
3. Navegue pelas quatro páginas no mesmo endereço/origem para compartilhar os rascunhos.

Não há dependências de aplicação, build ou chave de API. Os arquivos podem ser abertos diretamente, mas o comportamento de armazenamento e cópia em `file://` varia; prefira um servidor local.

## Tecnologia e organização

HTML, CSS e JavaScript puro. O conteúdo está no HTML; o script acrescenta salvamento, registro, contadores, cópia e downloads. O projeto não utiliza um modelo de IA para ler ou avaliar os textos.

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Apresentação, mapa e primeira prática. |
| `praticas.html` | Sete práticas e caderno de escrita. |
| `habilidades.html` | Árvore e ligações às atividades. |
| `inspiracoes.html` | Perfil-piloto e pontes de leitura. |
| `style.css` | Direção visual e layouts responsivos. |
| `script.js` | Rascunhos, registros e exportação. |
| `assets/fonts/` | Fontes locais e respectivas licenças. |

## Rascunhos e privacidade

O código não envia os textos a servidores nem inclui analytics. O armazenamento fica no navegador, perfil e endereço usados; não sincroniza dispositivos e pode desaparecer ao limpar dados ou sair de uma sessão privada. Em computador compartilhado, quem usa o mesmo perfil pode acessar os rascunhos.

Baixar o `.txt` permite guardar uma cópia fora do navegador. Se o armazenamento falhar, a interface avisa e mantém a possibilidade de escrever, copiar e baixar. Uma mudança em outra aba gera aviso em vez de substituir automaticamente o texto em edição.

## Decisões e limites

Marcar uma prática significa apenas que a pessoa decidiu registrá-la, inclusive se escreveu no próprio caderno. Isso não comprova domínio de uma habilidade. As conexões com Sally Rooney são propostas editoriais deste projeto, sem vínculo ou endosso da autora.

O registro de verificação de 22/10/2026 documenta os fluxos de rascunho/exportação e layouts em 320, 390, 768 e 1280 px. Não houve teste com público, aparelho físico, leitor de tela ou auditoria completa de acessibilidade. As práticas ainda são hipóteses a investigar.

## Processo e autoria

Concepção, recorte e direção visual conduzidos por Luiz Albuquerque. Exploração visual no Figma; estrutura inicial estudada em passos pequenos no VS Code; implementação, revisão e organização de conteúdo com apoio do Codex. Este repositório não representa código integralmente digitado sem assistência de IA.

O objetivo também é consolidar entendimento do código e documentar decisões, correções e dúvidas reais.

## Próximos passos

- [ ] Observar a primeira prática com pessoas que querem começar a escrever.
- [ ] Revisar teclado, leitor de tela e legibilidade em aparelhos físicos.
- [ ] Refinar instruções e continuidade com base nas observações.
- [ ] Revisar e explicar os fluxos do JavaScript como parte do aprendizado.
- [ ] Decidir separadamente as licenças de reutilização do código e dos textos.

## Documentação

- [Estudo de caso](docs/ESTUDO-DE-CASO.md)
- [Guia técnico da entrega](docs/GUIA-TECNICO.md)
- [Fontes e limites de conteúdo](FONTES.md)
- [Evolução do escopo](EVOLUCAO.md)
- [Verificações e limitações](VERIFICACAO.md)

## Licenças

Ainda não foi escolhida uma licença de reutilização para o código ou o conteúdo do projeto. Não se apresenta esta entrega como open source licenciado. As licenças SIL OFL incluídas referem-se exclusivamente às fontes.
