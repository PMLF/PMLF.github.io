# Agent guidelines

## Before writing code

This project uses **Next.js 16** which has breaking changes from earlier versions. If you need to use an API you're unsure about, check `node_modules/next/dist/docs/` for the current documentation. Heed deprecation notices.

## Code style

- Keep components self-contained: one section per file, no prop-drilling across sections.
- No comments unless explaining a non-obvious constraint or workaround.
- No abstractions beyond what the task requires — this is a small portfolio site, not a framework.
- Use Tailwind utility classes inline. No CSS modules, no `styled-components`.
- Prefer semantic HTML (`section`, `nav`, `button`) and proper ARIA attributes.

## Testing changes

There is no test suite. After any visual change:
1. Run the dev server (`npm run dev`)
2. Verify the change in the browser
3. Check the browser console for errors
4. Run `npm run build` to confirm the production build succeeds
