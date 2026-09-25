# Physis Therapeia

Site institucional da Physis Therapeia, desenvolvido com Vinext (compatível com App Router), React, TypeScript e Tailwind CSS.

## Como executar

Pré-requisito: Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

O terminal informará o endereço local do site.

## Verificações

```bash
npm run lint
npm run build
```

## Onde alterar as informações

As informações gerais estão centralizadas em [`data/site.ts`](./data/site.ts):

- nome e descrição da clínica;
- nome da profissional;
- telefone e mensagem do WhatsApp;
- perfil do Instagram;
- domínio/canonical;
- endereço futuro;
- link da HyperAG.

Enquanto o domínio definitivo não existir, `domain` deve permanecer vazio. Quando ele for registrado, basta informar a URL completa nesse campo. O endereço temporário do preview fica separado em `previewUrl`.

## Serviços

Os serviços publicados estão em [`data/services.ts`](./data/services.ts). Cada item contém:

- slug da página;
- nome e descrição;
- possíveis indicações;
- etapas do atendimento;
- observação de responsabilidade.

Os recursos terapêuticos planejados para o futuro também estão preparados nesse arquivo, mas não são exibidos na interface.

## Imagens e logo

Os arquivos ficam em `public/images/`:

- `brand/physis-logo.jpg`: marca completa;
- `brand/physis-symbol.jpg`: símbolo usado no cabeçalho e em áreas visuais;
- `about/gabriella.jpg`: fotografia usada no hero e na página Sobre;
- `hero/`: reservado para novas fotografias de atendimento;
- `services/`: reservado para imagens específicas dos serviços.

Para substituir uma imagem mantendo o mesmo nome, preserve a proporção aproximada para evitar mudanças inesperadas no recorte. Se alterar o nome do arquivo, atualize o caminho nos componentes correspondentes.

## Páginas

- `/` — página inicial completa;
- `/sobre` — abordagem da Physis Therapeia;
- `/servicos` — visão geral das abordagens;
- `/servicos/[slug]` — páginas individuais geradas pelos dados;
- `/contato` — WhatsApp e Instagram.

O projeto também inclui sitemap, robots, metadata social, dados estruturados, página 404, menu mobile e botão flutuante de WhatsApp.

## Build de produção

```bash
npm run build
npm start
```

O build usa `vinext build` e gera o servidor Node em `dist/standalone/server.js`,
ativado por `output: "standalone"` no arquivo de compatibilidade `next.config.ts`.
O comando `npm start` executa esse servidor diretamente, sem Next CLI ou Wrangler.

### Hostinger (Node.js)

- Use Node.js 22.13 ou superior.
- Instalação: `npm ci --include=dev` (Vinext e Vite são necessários no build).
- Build: `npm run build`.
- Inicialização: `npm start`.
- Mantenha toda a pasta `dist/standalone/` no artefato de produção, não só `server.js`.
- O servidor lê `process.env.PORT`; se não estiver definida, usa `3000`.
  O host padrão é `0.0.0.0`, configurável por `HOST`.

Teste de porta personalizada no PowerShell:

```powershell
$env:PORT = "4317"
npm start
```

Em Linux: `PORT=4317 npm start`.

O build padrão é Node standalone. O adaptador Cloudflare fica restrito aos previews
de desenvolvimento e ao perfil local `managed-linux` do Sites. O wrapper
`scripts/run-framework.mjs` é apenas compatibilidade para lançadores antigos e
delega ao Vinext, sem procurar saídas `.next/standalone` ou `out/`.

Antes de publicar em um domínio próprio, revise `domain` em `data/site.ts` e confirme as informações profissionais que ainda serão fornecidas, como endereço, horários e registro profissional.
