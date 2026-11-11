# Besouro Drone — landing page

Landing page dos serviços de imagens aéreas da Besouro Drone (Belo Horizonte e região),
baseada na Tabela Comercial 2026.

Feita com Next.js + Tailwind CSS + [shadcn/ui](https://ui.shadcn.com).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Preços, serviços, pacotes, condições, contatos (WhatsApp, Instagram, e-mail) | `lib/site.ts` |
| Fotos do portfólio e do topo | `assets/photos/` (usadas em `components/site/portfolio.tsx` e `hero.tsx`) |
| Logo | `assets/logo-besouro-drone.webp` (e a versão sem fundo `logo-besouro-drone-transparente.webp`) |
| Cores e fontes | `app/globals.css` e `app/layout.tsx` |
| Cada seção da página | `components/site/*.tsx` |

## Foto do Cesar Augusto

A seção "Quem pilota" (`components/site/pilot.tsx`) tem um espaço reservado para a foto.
Quando a foto estiver pronta (de preferência vertical, proporção 4:5):

1. Salve em `assets/cesar-augusto.jpg`.
2. Em `pilot.tsx`, importe `import cesar from "@/assets/cesar-augusto.jpg"` e troque o
   conteúdo de `PhotoPlaceholder` por:

```tsx
<Image src={cesar} alt="Cesar Augusto, piloto da Besouro Drone" fill placeholder="blur"
  sizes="(min-width: 1024px) 28rem, 100vw" className="object-cover" />
```

O texto de apresentação do Cesar também está em `pilot.tsx`. Revise e complemente com a história dele.

## Publicação

Defina `NEXT_PUBLIC_SITE_URL` com o domínio final (ex.: `https://besourodrone.com.br`) para
que a imagem de compartilhamento (Open Graph) use o endereço correto.

## Adicionando componentes shadcn

```bash
npx shadcn@latest add <componente>
```
