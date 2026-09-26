# Physis Therapeia

Site institucional da Physis Therapeia, desenvolvido com Next.js nativo (App Router), React, TypeScript e Tailwind CSS.

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

O script `build` chama diretamente `next build`. A opção `output: "standalone"`
em `next.config.ts` faz o Next.js gerar `.next/standalone/server.js`.
O `postbuild` apenas copia `public/` e `.next/static/` para o standalone real,
conforme a [documentação oficial](https://nextjs.org/docs/app/api-reference/config/next-config-js/output),
para que imagens, CSS e JavaScript sejam servidos junto com a aplicação.
Ele falha se o servidor gerado pelo Next.js não existir; não cria um servidor alternativo.

`npm start` executa `next start`, usando o build completo na raiz do projeto.
Com `output: "standalone"`, o Next.js pode emitir um aviso recomendando o servidor
standalone. Para o artefato de deploy, execute `node .next/standalone/server.js`.

### Hostinger (Node.js)

- Use Node.js 22.13 ou superior.
- Framework: Next.js.
- Instalação: `npm install` ou `npm run install:ci` para usar o lockfile sem alterações.
- Instale também as dependências de desenvolvimento na etapa de build.
- Build: `npm run build`.
- Saída detectada: `.next/standalone/server.js`.
- Inicialização do standalone: `node .next/standalone/server.js`.
- Se o painel usar o projeto completo, `npm start` também está disponível.
- Mantenha toda a pasta `.next/standalone/` no artefato de produção, não só `server.js`.
- O servidor lê `process.env.PORT`; se não estiver definida, usa `3000`.
  Para o standalone, defina `HOSTNAME=0.0.0.0` para escutar em todas as interfaces.

Teste de porta personalizada no PowerShell:

```powershell
$env:PORT = "4317"
npm start
```

Em Linux: `PORT=4317 npm start`.

Teste direto do standalone no PowerShell:

```powershell
$env:PORT = "4318"
$env:HOSTNAME = "0.0.0.0"
node .next/standalone/server.js
```

Em Linux: `PORT=4318 HOSTNAME=0.0.0.0 node .next/standalone/server.js`.
Nenhuma porta de produção é fixada no código. O projeto não usa mais Vinext,
Vite, Wrangler ou Cloudflare Workers para desenvolvimento, build ou produção.

Antes de publicar em um domínio próprio, revise `domain` em `data/site.ts` e confirme as informações profissionais que ainda serão fornecidas, como endereço, horários e registro profissional.
