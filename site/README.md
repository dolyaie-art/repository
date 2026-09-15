# Donesh Olyaie — personal site

Static site. No build step, no dependencies to install.

## Deploy to Vercel

Drag this folder onto vercel.com/new, or from the command line:

    npm i -g vercel
    cd site
    vercel

Framework preset: **Other**. Build command: none. Output directory: `.` (the folder itself).

## Structure

    index.html      the whole site — all six sections
    support.js      rendering runtime the page loads
    assets/imagery  photographs
    ds/             design system: tokens, stylesheets, components
    .nojekyll       tells GitHub Pages not to run Jekyll

## Notes

- Fonts load from Google Fonts at runtime, so the deployed site needs network access (it will, being a website).
- The contact form posts to Web3Forms (access key `4e1de4e3-…`), which forwards submissions to the email address registered with that key. The key is safe in public source — it identifies the form, not the inbox. To change the destination, register a new key at web3forms.com and replace it in `index.html`.
- Most photographs are from Unsplash (Marek Omasta, Martin Martz, Terry Granger, Nik). Unsplash's license does not require attribution, but crediting is polite.
