# AL-FA SMOKIE — React Website

A bespoke, responsive React + Vite portfolio and booking-enquiry website for AL-FA SMOKIE.

## Requirements
- Node.js 20+ recommended
- VS Code

## Run locally
1. Extract this ZIP.
2. Open the `alfa-smokie-react` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL Vite prints (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```

## Contact form behaviour
The form collects the customer's name, phone/WhatsApp, optional email, service type, occasion, date, guest count, location and extra details. On submit, it opens WhatsApp with all entered details prefilled for +91 87772 00698. The customer must press Send in WhatsApp to deliver the enquiry. No database or server is configured in this frontend-only version.

## Before launch
- Replace `hello@alfasmokie.com` in `src/main.jsx` with your real inquiry email.
- Replace stock image URLs with real AL-FA SMOKIE event and product photography.
- Confirm delivery areas, service availability, and legal/venue requirements.
- The logo provided by the user is in `public/assets/alfa-smokie-logo.jpeg`.

## Stack
- React
- Vite
- Lucide React icons
- Custom responsive CSS
