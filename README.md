# Koiya Sahib Iron & Steel — Website

A React (Vite) website for Koiya Sahib Iron & Steel, Nagercoil.

## Run it locally (in VS Code)

1. Open this folder in VS Code.
2. Open a terminal (`` Ctrl+` ``) and install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the printed local URL (usually `http://localhost:5173`) in your browser.

## Build for hosting

```bash
npm run build
```
This creates a `dist/` folder — upload its contents to any web host (or a service like Netlify/Vercel/Hostinger).

## Where to edit things

| What to change | File |
|---|---|
| Phone, WhatsApp number, email, address, business hours, delivery areas | `src/config.js` |
| Product list & categories | `src/data/products.js` |
| Brand names | `src/data/brands.js` |
| Proprietor names/photos, About text | `src/components/About.jsx` |
| Hero headline, slideshow photos | `src/components/Hero.jsx` |
| Colors, fonts, spacing | `src/index.css` (see `:root` at the top for the color/type variables) |

## Adding real photos

Every photo in the site is currently a labelled placeholder (dashed box). To add a real photo:
1. Put your image file in the `public/` folder (e.g. `public/shop-front.jpg`).
2. In the relevant component, replace the placeholder `<div>` block with:
   ```jsx
   <img src="/shop-front.jpg" alt="Shop front" />
   ```

## Before you publish

- [ ] Replace phone, WhatsApp number, and email in `src/config.js`
- [ ] Replace the exact shop address and `mapQuery` in `src/config.js`
- [ ] Add real proprietor photos and names in `src/components/About.jsx`
- [ ] Add real photos to the hero slideshow in `src/components/Hero.jsx`
- [ ] Double check business hours in `src/config.js`

## Project structure

```
src/
  config.js               ← business details (edit this first)
  App.jsx                 ← assembles all sections
  index.css                ← all styles
  data/
    products.js            ← product catalogue + categories
    brands.js               ← brand list
  components/
    Header.jsx, Hero.jsx, Stats.jsx, About.jsx, Products.jsx,
    Brands.jsx, Quote.jsx, DeliveryAreas.jsx, Contact.jsx,
    EnquiryStrip.jsx, Footer.jsx, FloatingWhatsApp.jsx,
    Icon.jsx, Reveal.jsx, ToastContext.jsx, CorrugatedDivider.jsx
  utils/
    whatsapp.js             ← builds the wa.me links used by all forms
```

All forms (Get Quote, Contact, Quick Enquiry) open WhatsApp with the message pre-filled — no backend/server required.
