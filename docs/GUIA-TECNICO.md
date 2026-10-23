# Roadmap para jovens escritores — V1.1

Site local em HTML, CSS e JavaScript puro, baseado na direção verde do Figma e no conteúdo desenvolvido durante o estudo. Não precisa de instalação, conta, chave de API ou processo de compilação.

## Abrir

1. Extraia a pasta inteira, se estiver usando o ZIP.
2. Abra a pasta `roadmap-v1` no VS Code.
3. Abra `index.html` com o Live Server, como você já estava fazendo.

Também é possível abrir `index.html` diretamente no navegador. O Live Server é preferível: armazenamento local e cópia automática podem se comportar de forma diferente em endereços `file://`. Se a cópia automática não estiver disponível, o site seleciona o texto para cópia manual.

## O que está incluído

- Direção visual verde: abertura escura, fundo claro e verde suave.
- Fontes locais: Space Grotesk, IBM Plex Mono e Pixelify Sans.
- Mapa com Começar, Explorar, Planejar, Escrever, Revisar, Compartilhar e Refletir.
- Sete práticas completas com orientações, exemplos próprios e reflexão final.
- Campo de escrita, contador de caracteres sem limite obrigatório, cópia e download `.txt`.
- Salvamento automático neste navegador, com recuperação ao reabrir no mesmo endereço.
- Layout responsivo e navegação sem dependência de JavaScript.
- Estados de teclado visíveis e respeito à preferência de redução de movimento.
- Registro manual das práticas experimentadas, sem nota, ranking ou bloqueios.
- Árvore navegável de seis habilidades, ligada às práticas.
- Perfil-piloto de Sally Rooney com apresentação, fontes e pontes de leitura.
- Download de todos os campos preenchidos na página de práticas como um caderno `.txt`.

As quatro páginas são `index.html`, `praticas.html`, `habilidades.html` e `inspiracoes.html`. O banco de autores começa com um único perfil real, explicitamente apresentado como piloto. Não há avaliação automática, ranking, login, curso extenso, imagens geradas ou publicação de textos.

## Arquivos e onde alterar

| Arquivo | Função |
| --- | --- |
| `index.html` | Apresentação, mapa, primeira prática e acesso às outras páginas. |
| `praticas.html` | Sete práticas, sete campos independentes e registro manual. |
| `habilidades.html` | Árvore de conexões e links entre práticas e habilidades. |
| `inspiracoes.html` | Perfil de Sally Rooney e três pontes de leitura. |
| `style.css` | Fontes, cores, espaçamento e comportamento em diferentes larguras. |
| `script.js` | Rascunhos, registros, contadores, cópia, downloads e abertura por âncora. |
| `FONTES.md` | Fontes do perfil e distinção entre fatos e proposta pedagógica. |
| `EVOLUCAO.md` | Recorte desta expansão, decisões e reversão para a versão anterior. |
| `assets/fonts/` | Fontes e suas licenças OFL. |

No início de `style.css`, o bloco `:root` reúne as cores principais. Os comentários dividem os arquivos por função. Para continuar o estudo, compare cada seção do HTML com o seletor de mesmo nome no CSS.

## Sobre o texto digitado

O código não envia o texto a servidores e não usa análises de tráfego. O rascunho é salvo em `localStorage`, associado ao navegador, perfil e endereço do site. Ele não é sincronizado entre dispositivos e pode ser perdido ao limpar dados, trocar de endereço ou encerrar uma sessão privada. O download é a cópia que a pessoa pode guardar fora do navegador.

Se o armazenamento estiver bloqueado ou cheio, o site avisa e continua permitindo escrever, copiar e baixar. Em dispositivos compartilhados, o rascunho pode ser acessado por quem usar o mesmo perfil do navegador.

A prática Começar preserva a chave `roadmap-escritores:trecho:v1`, usada na primeira entrega. O campo da página inicial e o de Começar em Práticas compartilham esse rascunho, desde que sejam acessados no mesmo endereço/origem. As outras seis práticas têm chaves próprias. Não há importação ou substituição automática entre Revisar e o primeiro texto. Uma alteração em outra aba gera aviso em vez de sobrescrever uma edição em andamento.

Os registros de prática também são locais. Podem ser marcados mesmo quando a pessoa escreveu em um caderno: são autodeclarações, não resultados detectados pelo site. Desmarcar não apaga o texto. Na árvore, “práticas relacionadas registradas” não significa habilidade dominada. Em `file://`, navegadores podem separar armazenamento por arquivo: prefira Live Server para compartilhar rascunhos entre as páginas.

## Referência visual e adaptação

Figma: https://www.figma.com/design/YMKKX1QZ00YpAJlWBFw39J?node-id=7-8

A direção visual verde foi aplicada ao conteúdo mais recente do estudo: Planejar e Refletir substituem os nomes anteriores, e a prática usa o exercício de ação com uma dificuldade. No computador, as instruções e o campo de escrita ficam lado a lado; no celular, ficam empilhados. A marcação padrão do componente React retornado pelo Figma foi traduzida para HTML/CSS, pois o projeto não possui React ou uma biblioteca de componentes instalada.

Este site é um protótipo educacional em funcionamento. As práticas ainda são hipóteses a testar com possíveis leitores; não há promessa de eficácia nem avaliação da qualidade do texto. A relação entre exercícios, habilidades e Sally Rooney é uma escolha editorial do projeto, não um método ou endosso da autora.

## Publicar depois

Os arquivos são estáticos. Para hospedar, envie o conteúdo inteiro desta pasta, preservando `assets/`. A página inicial deve continuar se chamando `index.html`. Esta entrega não foi publicada em um endereço público.

Não foi escolhida uma licença de reutilização para o código ou para o texto do projeto. As licenças incluídas em `assets/fonts/` referem-se somente às fontes.
