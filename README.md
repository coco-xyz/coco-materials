# COCO Materials

Brand assets, marketing content, and design resources for the COCO platform.

---

## Directory Structure

```
coco-materials/
├── logo/                    Logo files
│   ├── svg/                 Vector originals (SVG)
│   └── png/                 Rasterized exports (PNG)
├── coco-content/            Marketing and content materials
│   ├── assets/              Visual assets (screenshots, mockups, customer docs)
│   ├── social-media/        Social media drafts and campaigns
│   ├── testimonials/        Customer testimonials
│   └── use-cases/           Use case writeups
├── docs/                    Documentation site content
│   ├── getting-started/     Getting started guides
│   ├── use-cases/           Use case pages
│   ├── case-studies/        Case study pages
│   ├── social-media/        Social media guides
│   ├── zh/                  Chinese translations
│   └── public/              Static assets for docs site
├── scripts/                 Build and generation scripts
├── kv/                      Key visuals (hero images, banners)
├── icons/                   Icon sets and app icons
└── mockup/                  Product mockups and screenshots
```

> **Note:** `kv/`, `icons/`, and `mockup/` are suggested directories for future use. Create them as needed when adding assets.

---

## Usage Guidelines

- **Logo files** are in `logo/` — always use the SVG version when possible for best quality
- **Do not** modify logo colors or proportions without brand approval
- Large binary assets (PSD, AI, video) should use Git LFS or be stored externally with links in this repo

---

## Contributing

1. Place assets in the appropriate directory
2. Use descriptive filenames: `coco-logo-dark-256.png`, not `logo2-final-v3.png`
3. Include both SVG (source) and PNG (export) for vector assets
4. Update this README if adding a new top-level directory

---

## License

Internal use. All assets are property of COCO / HxA Network.
