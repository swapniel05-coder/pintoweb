# JP Chit Funds — Website Source Code

This folder contains the complete, editable source code for the **JP Chit Fund** website.

## Folder Structure

```text
jp-chit-funds-site/
├── index.html               # Main website markup (update text, links, or image paths here)
├── css/
│   └── styles.css           # Custom typography, colors, and component styles
├── js/
│   └── app.js               # Chit schemes data, interactive calculator, stepper, FAQ, and form logic
├── images/
│   ├── hero-office.jpg      # Hero banner image (recommended 16:9 landscape)
│   ├── about-consultation.jpg # About section image (recommended 4:3)
│   └── goals-home.jpg       # Financial goals section image (recommended 4:3)
└── README.md
```

## How to Update Images

1. **Quickest method (no code changes needed):**
   Replace any file inside the `images/` folder with your own photo using the **exact same filename**:
   - `images/hero-office.jpg` — Main office / hero banner
   - `images/about-consultation.jpg` — Client consultation / branch photo
   - `images/goals-home.jpg` — Life goals / community photo

2. **Using different filenames or formats (e.g. `.png` or `.webp`):**
   Open `index.html` and search for `<!-- IMAGE SLOT` comments. Update the `src="images/..."` attribute on the `<img>` tag to match your new filename.

## How to Update Chit Schemes or Contact Details

- **Chit Plans / Schemes:** Edit the `CHIT_PLANS` array at the top of `js/app.js`.
- **Phone, Address & Hours:** Search for `+91 93537 81216` or `10/8 C, Pipeline Road` in `index.html`.

## Previewing Locally

Open `index.html` directly in any modern browser, or run a simple static server from this folder:

```bash
python3 -m http.server 8080
```
