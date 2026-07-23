# pedrofonseca.dev

Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Single-page, bilingual (PT/EN), editorial design with dark theme.

**Live at:** [pedrofonseca.dev](https://pmlf.github.io)

## Stack

- [Next.js 16](https://nextjs.org/) — App Router, static export
- [React 19](https://react.dev/) — TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — scroll-triggered animations

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start development server           |
| `npm run build` | Production build + static export   |
| `npm run start` | Serve production build locally     |
| `npm run lint`  | Run ESLint                         |

## Project structure

```
src/
├── app/            # Next.js App Router (layout, page, metadata, sitemap)
├── components/     # One file per section + shared UI (Lightbox, Navbar)
└── i18n/           # Client-side i18n (context, en.json, pt.json)
public/
└── images/         # Static assets organized by section
```

## Using this as a template

You're welcome to fork this repo and adapt it for your own portfolio. If you do:

1. **Remove all personal content** — delete or replace all images in `public/images/`, and rewrite the translation files (`src/i18n/en.json`, `src/i18n/pt.json`) with your own content.
2. **Update metadata** — edit `src/app/layout.tsx` (title, description, OG tags, author, keywords), `src/app/sitemap.ts`, and `public/robots.txt` with your own domain and information.
3. **Update contact links** — edit the `links` array in `src/components/Contact.tsx`.
4. **Replace the favicon** — swap `public/favicon.png` and `src/app/icon.png`.

The code structure (components, animations, i18n system, lightbox, rotating carousel) is generic and reusable. The content is not.

## License

The **source code** (everything under `src/`, configuration files, and build tooling) is licensed under the [MIT License](LICENSE).

The **content** — including but not limited to images, photographs, illustrations, text copy, translations, and any personal data — is **not licensed for reuse** and remains the exclusive property of Pedro Fonseca. You may not use, distribute, or reproduce the content without explicit written permission.

If you fork this project, you must remove all content before publishing.

## Author

**Pedro Fonseca** — front-end developer, sports illustrator ([PEDRO26](https://pedro26.pt)), teacher.

- [pedrofonseca.dev](https://pedrofonseca.dev)
- [pedro26.pt](https://pedro26.pt)
- [LinkedIn](https://linkedin.com/in/pedromlfonseca)
- [GitHub](https://github.com/PMLF)
