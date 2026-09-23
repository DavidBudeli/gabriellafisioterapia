# Motion design — Physis Therapeia

Implementado e verificado localmente em 23/09/2026. Conteúdo, identidade visual,
URLs, contatos e hierarquia das páginas foram preservados. Sem publicação remota.

## Arquitetura

As páginas e os conteúdos das seções continuam sendo Server Components.
`MotionSection` é uma pequena fronteira cliente que recebe esses conteúdos e
controla apenas os elementos do seu próprio escopo. Os marcadores de animação
produzem HTML sem esconder conteúdo no servidor.

GSAP 3.15 e ScrollTrigger são registrados nos efeitos do cliente. Cada escopo usa
`gsap.context()` e `gsap.matchMedia()`, com reversão no desmontar, na troca de rota
e nas mudanças das condições de movimento. Timers, listeners e frames também têm
cleanup. O foco por teclado conclui a revelação do controle correspondente.

## Efeitos aplicados

- Hero: sequência de identificação, título com máscara, descrição, botões,
  imagem e selo; linha dourada e indicador discreto de rolagem.
- Sobre: entrada da imagem com máscara, escala leve, título e citação separados.
- Diferencial: sequência progressiva das etapas e assinatura dourada.
- Serviços: entrada escalonada, elevação de 4 px no hover, ícones e setas discretos.
- Processo: progressão ligada à rolagem, sem pin ou bloqueio do scroll.
- Público: sequência alternada no desktop e vertical no celular.
- CTA: texto revelado, botão com escala 0,96 → 1 e decoração lenta no desktop.
- WhatsApp: entrada suave e um pulso, sem repetição infinita.
- Header: fundo progressivo, sublinhado e menu mobile com entrada/saída animada.
- Páginas internas: hero consistente, revelações, listas e cards escalonados.

O magnetismo dos botões principais é limitado a 3 px. Parallax, magnetismo e
decorações contínuas só são habilitados a partir de 1024 px, com mouse/pointer
preciso. Decorações pausam fora da seção visível.

## Mobile e acessibilidade

No mobile as entradas usam deslocamento vertical de 16 px e opacidade, sem
parallax, alternância lateral, magnetismo ou animação contínua decorativa.
O menu mantém foco, Escape, rolagem interna em paisagem e fecha ao entrar no
layout desktop. O foco retorna ao botão de abertura.

Com `prefers-reduced-motion: reduce`, nenhum escopo GSAP é criado: textos e imagens
ficam imediatamente visíveis, sem transforms ou loops. A mudança dessa preferência
durante a sessão também reverte os efeitos. A preferência do sistema não foi alterada.

Não foram adicionados scroll hijacking, preloader, pin, barra de progresso global
ou transições que atrasem a navegação. Esses recursos opcionais não eram necessários.

## Componentes reutilizáveis

`components/motion/elements.tsx` exporta `Reveal`, `TextReveal`, `MotionSequence`,
`StaggerReveal`, `ImageReveal`, `ParallaxImage` e `BrandSignature`.
Use-os dentro de `MotionSection`; `MagneticButton` possui seu próprio escopo.

```tsx
<MotionSection>
  <TextReveal as="h2">Um título</TextReveal>
  <Reveal as="p">Uma descrição.</Reveal>
  <StaggerReveal>{/* cards como filhos diretos */}</StaggerReveal>
</MotionSection>
```

Tempos, curvas, distâncias e media queries estão em `lib/motion-tokens.ts`.
`MotionRefresh` agrupa a atualização das medidas após carregamento de imagens,
fontes e mudanças de rota, evitando atualização em cada frame.

## Arquivos criados

- `lib/gsap.ts`, `lib/motion-tokens.ts`, `lib/motion-animations.ts`.
- `hooks/use-gsap-scope.ts`, `hooks/use-reduced-motion.ts`.
- `components/motion/elements.tsx`, `motion-section.tsx`, `motion-refresh.tsx`,
  `magnetic-button.tsx`.
- `components/layout/mobile-menu.tsx`.
- Este documento.

## Arquivos modificados

- `package.json` e `package-lock.json`: GSAP.
- `app/layout.tsx` e `app/globals.css`: refresh, máscaras e microinterações.
- `app/sobre/page.tsx`, `app/servicos/page.tsx`, `app/servicos/[slug]/page.tsx`.
- `components/layout/header.tsx`, `whatsapp-button.tsx`.
- `components/sections/hero.tsx`, `about-section.tsx`, `differential-section.tsx`,
  `services-section.tsx`, `process-section.tsx`, `audience-section.tsx`,
  `contact-section.tsx`, `cta-section.tsx`.
- `components/shared/page-hero.tsx`, `section-heading.tsx`.
- `vite.config.ts`: exclusão da pré-otimização de `lucide-react` nos ambientes
  cliente, RSC e SSR, corrigindo o aviso de cópias inconsistentes da dependência.
  A opção segue a [documentação do Vite](https://vite.dev/config/dep-optimization-options#optimizedeps-exclude).

## Verificação

Fluxo verificado: HTML do servidor → hidratação → entradas e rolagem → menu e links
→ nova rota → descarte das animações anteriores. Não há API ou banco novo nesta camada.

- `npm run lint`: aprovado, sem erros ou avisos.
- `npx tsc --noEmit`: aprovado.
- `npm run build`: aprovado nas cinco etapas do Vinext.
- Home, Sobre, Serviços, Contato e os quatro detalhes: HTTP 200, h1 no HTML e sem
  estilos de opacidade zero no conteúdo servido.
- Home e lista de serviços: larguras 375, 390, 430, 768, 1024, 1280, 1440 e 1920 px
  sem overflow horizontal. Nenhuma imagem carregada quebrada nas inspeções.
- Menu: abertura, Escape, foco contido, retorno de foco, link para outra página,
  desbloqueio do body e troca para paisagem (812 × 375) e desktop conferidos.
- Rolagem completa da home: nenhuma revelação permaneceu invisível.
- Trocas de rota: nenhum ScrollTrigger ligado a elemento removido do DOM.
- Movimento reduzido: zero triggers, zero tweens ativos, parallax sem transform e
  nenhum conteúdo oculto.
- Console da sessão final sem erros/avisos. Log do servidor após reinício limpo
  sem o aviso de otimização anterior.
- Amostra local do carregamento da home: CLS 0, zero layout shifts registrados.

Testes de navegador feitos no Chromium integrado, com viewports emulados; não
equivalem a testes em aparelhos físicos, Safari/Firefox ou métricas de campo.
O build exibe apenas a nota informativa do Vinext sobre classificação estática
de rotas, sem falha de compilação. Não foi feita publicação ou push.
