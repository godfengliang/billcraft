# BillCraft

[![Live Demo](https://img.shields.io/badge/Live_Demo-billcraft--demo.surge.sh-brightgreen?style=for-the-badge)](https://billcraft-demo.surge.sh)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> Free professional invoice generator. No signup, no backend, no subscription.
> Create invoices in 60 seconds and export PDF with one click.

**Try it now:** [billcraft-demo.surge.sh](https://billcraft-demo.surge.sh)

---

## Features

- **3 Invoice Templates** — Modern, Classic, Minimal styles
- **One-Click PDF Export** — No print dialog, direct download
- **7 Currencies** — USD, EUR, GBP, CNY, JPY, KRW, HKD with proper formatting
- **Logo Upload** — Drag & drop your brand logo
- **Tax & Discount** — Auto-calculated on every change
- **Bilingual** — English + Chinese, switch anytime
- **100% Offline** — All data in localStorage, nothing leaves your device
- **Zero Dependencies** — No React, no Node, no build step

## Quick Start

```bash
# Just open index.html in a browser — that's it.

# Or use a local server for full PDF export support:
python -m http.server 8080
# Then open http://localhost:8080
```

## Tech Stack

| Layer | Tech |
|-------|------|
| UI | Tailwind CSS (CDN) |
| App Logic | Vanilla JS, single IIFE module |
| PDF Export | html2canvas + jsPDF |
| i18n | Custom system with `data-t` attributes |
| Persistence | localStorage (auto-save drafts) |

The entire project is **one HTML + one JS + one CSS file**. Download and run anywhere — even offline.

## Architecture

- Single IIFE closure manages all state and logic
- Hybrid state: DOM-driven (form fields) + JS-driven (template, items, logo)
- `App.update()` -> `renderPreview()` -> `saveDraft()` on every keystroke
- Inline CSS in template literals for html2canvas PDF compatibility
- `esc()` sanitizes all user input against XSS

## License

MIT — use it, fork it, share it.
