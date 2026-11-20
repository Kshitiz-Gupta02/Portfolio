# Kshitiz Gupta: Operations & Analytics Portfolio

Interactive executive portfolio and operational dossier showcasing 10 case studies across business analysis, operations research, corporate strategy, and product management.

Live Deployment: [https://kshitiz-gupta02.github.io/Portfolio/](https://kshitiz-gupta02.github.io/Portfolio/)

---

## Verified Career Metrics (Source of Truth)
- 20 to 200+: Scaled organisation across 5 departments at Growth Central VC through designed systems (Source: Resume, Growth Central VC).
- Top 10: B-School Track Semi-Finalist, Maruti Suzuki XCELerate (Top 20 overall, 10 per track), from 51,866 registrations nationwide (Source: XCELerate Project Summary).
- Rs 3,00,000: First-quarter revenue across new product line (Rs 2,50,000 from 4 expert-led courses plus Rs 50,000 from PM course across 3 cohorts of 10 mentees) (Source: New Product Line Launch).
- 20 to 12-13 min: Customer Interaction Time at Gyasi Ram and Sons while increasing basket size from 2-3 to 4-5 products (Source: Resume, Gyasi Ram and Sons).
- 100%: Regulatory compliance during AML process transition at Genpact, with 4% reduction in case documentation time (Source: Resume, Genpact).

---

## Portfolio Architecture & Tech Stack

This website is engineered as a zero-dependency, pure static multi-page application that deploys directly from the repository root to GitHub Pages:

- Static Runtime: Plain HTML5, CSS3, and Vanilla ES6 JavaScript (Zero npm build steps, zero bundlers).
- Hosting: GitHub Pages subpath compatible (`https://kshitiz-gupta02.github.io/Portfolio/`), using relative asset paths (`./` and `../`).
- Design System: Space Grotesk (Headings), Plus Jakarta Sans (Body), IBM Plex Mono (Data & Formulas).
- Accessibility (WCAG AA):
  - `--accent-solid` variable (`#b84f27` dark, `#a84a1e` light) for high-contrast white text surfaces.
  - Light mode success text color `#0a6e4c` (exceeds 4.5:1 contrast).
  - Clear `:focus-visible` offset ring across all interactive controls.
  - No fake tablist ARIA roles (standard accessible button groups with `aria-pressed`).
  - `@media (prefers-reduced-motion: reduce)` support.
- Search & AI Discoverability:
  - Meta tags, OpenGraph 1200x630 tags, and Twitter summary metadata.
  - Valid Schema.org JSON-LD structured data on homepage and case studies.
  - Canonical URLs pointing to `https://kshitiz-gupta02.github.io/Portfolio/`.
  - Machine-readable manifest (`llms.txt`) and crawler instructions (`robots.txt`, `sitemap.xml`).

---

## Repository Structure

```
/ (repository root)
|-- index.html                           (Static landing homepage with 10 case study tiles)
|-- styles.css                           (Shared responsive design system and CSS variables)
|-- script.js                            (Vanilla JS controller for theme toggle and category filtering)
|-- resume.pdf                           (Resume PDF download)
|-- favicon.svg                          (Vector site brand mark)
|-- sitemap.xml                          (Search engine sitemap with 11 indexed URLs)
|-- robots.txt                           (Web crawler directives)
|-- llms.txt                             (LLM knowledge base manifest)
|-- README.md                            (Documentation and project maintenance checklist)
`-- projects/
    |-- template.html                    (Master cloneable template for project #11+)
    |-- kpi-scoring-engine.html          (Featured: Growth Central VC KPI system + V3 formula)
    |-- maruti-suzuki-xcelerate.html     (Featured: Maruti Suzuki XCELerate EV strategy)
    |-- pm-course-launch.html            (Featured: Course product line + PM program)
    |-- store-operations-forecasting.html(Featured: Gyasi Ram retail interaction time + station line model)
    |-- fluorco-turnaround.html          (Bain BrAINWARS case diagnostic)
    |-- dupont-analysis-godrej.html      (11-year DuPont ROE decomposition + financial model)
    |-- ambulance-routing.html           (OR & graph theory + Dijkstra dispatch model)
    |-- daikoku-marketplace.html         (SNU Atal Incubation Centre B2B talent marketplace)
    |-- campus-recruitment.html          (Growth Central VC campus hiring funnel)
    `-- market-intelligence.html         (Growth Central VC 200+ competitor mapping sprint)
```

---

## How to Add a New Project (Project #11+)

1. Copy `projects/template.html` and name it `projects/your-project-slug.html`.
2. Update the `<title>`, `<meta name="description">`, and `<link rel="canonical">` tags in `<head>`.
3. In `index.html`:
   - Duplicate one of the compact card `<article>` elements.
   - Set `data-category="ops"`, `"strategy"`, or `"product"`.
   - Update the tag, headline metric badge, title, 1-line outcome, tools, and link `href="./projects/your-project-slug.html"`.
   - Update the count number on the corresponding filter button in `index.html`.
4. In `projects/your-project-slug.html`:
   - Fill in the 10-second Executive Summary grid (The Problem, My Role, Core Tools, Primary Outcome).
   - Add your visual sections with process diagrams, tables, or charts.
   - Keep paragraphs capped at 2 to 3 lines.
5. In `sitemap.xml` and `llms.txt`:
   - Add the new page URL `https://kshitiz-gupta02.github.io/Portfolio/projects/your-project-slug.html`.
6. Audit rule: Verify that no em dashes or en dashes are used in site copy or code comments.
