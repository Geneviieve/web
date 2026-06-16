# Marsha Genevieve Nandana — Portfolio Website

A static portfolio site (no build step) showcasing UI/UX design case studies, freelance client work, and data & machine-learning projects.

- **Palette:** ivory canvas · navy · maroon
- **Fonts:** Fraunces (headings) + Inter (body), loaded from Google Fonts
- **Stack:** plain HTML + CSS + vanilla JS. No frameworks, no build tools.

## Structure
```
index.html        Home (hero, about, skills, highlights, contact)
portfolio.html    Filterable grid of all projects
project.html      Single template that renders any project from ?id=
js/projects.js    All project content (edit this to add/change projects)
js/main.js        Nav, scroll reveal, mobile menu
css/style.css     Design system
assets/ portfodetails/ previews/   Images
```

## Edit content
All project text and images live in **`js/projects.js`**. Each project is one object;
change a field and it updates the card, the detail page, and prev/next automatically.

## Run locally
Just open `index.html` in a browser. (For best results use a tiny local server so
relative paths behave exactly like production:)
```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages
1. Create a new GitHub repo (e.g. `marsha-portfolio` or `geneviieve.github.io`).
2. Push the **contents of this folder** to the repo root:
   ```bash
   cd marsha-portfolio-website
   git init
   git add .
   git commit -m "Portfolio website"
   git branch -M main
   git remote add origin https://github.com/Geneviieve/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   select **main / (root)**, save.
4. The site goes live at `https://geneviieve.github.io/<repo-name>/`
   (or `https://geneviieve.github.io/` if the repo is named `geneviieve.github.io`).

Each project also has its own shareable link, e.g.
`.../project.html?id=grevur` — useful for linking individual projects in the ADA application.

> Tip: the `assets/` images are large (~90 MB). Before pushing, consider compressing
> the PNGs (e.g. with tinypng.com or `pngquant`) to keep the repo light and the site fast.
