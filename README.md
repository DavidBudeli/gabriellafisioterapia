# Physis Therapeia

Site institucional da Physis Therapeia, desenvolvido com Next.js, React, TypeScript e Tailwind CSS.

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
npm run start
```

Antes de publicar em um domínio próprio, revise `domain` em `data/site.ts` e confirme as informações profissionais que ainda serão fornecidas, como endereço, horários e registro profissional.
