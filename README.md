# BillCraft — Free Invoice Generator

> Create professional invoices in 60 seconds. No signup, no backend, no subscription.

**Try it now:** [billcraft-demo.surge.sh](https://billcraft-demo.surge.sh)

## Features

- **3 invoice templates** — Modern, Classic, Minimal
- **One-click PDF export** — no print dialog needed
- **7 currencies** — USD, EUR, GBP, CNY, JPY, KRW, HKD
- **Logo upload** — brand your invoices
- **Tax & discount** — auto-calculated
- **EN / ZH interface** — switch anytime
- **Works offline** — all data in localStorage, nothing uploaded

## Tech

Pure vanilla JS. No React, no build step, no Node.

- Single IIFE module with closure-based state
- Tailwind CSS (CDN) for UI
- html2canvas + jsPDF for PDF export
- Custom i18n system via `data-t` attributes
- localStorage auto-save

The entire app is **one HTML file + one JS file + one CSS file**. Download and open locally — it works without a server.

## Quick Start

```bash
# Option 1: Just open index.html in a browser

# Option 2: Local server (needed for full PDF export)
python -m http.server 8080
# Then open http://localhost:8080

# Option 3: Deploy anywhere static
npx surge . your-domain.surge.sh
```

## License

MIT
