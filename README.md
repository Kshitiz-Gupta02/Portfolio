# Kshitiz Gupta: Quantitative Strategy, Operations & Analytics Portfolio

**[View the live site](https://kshitiz-gupta02.github.io/Portfolio/)**

---

## About

Early-career professional with hands-on experience across operations, product and analytics. The work covers KPI systems, business requirements documentation, forecasting models and process optimization, across a VC-backed startup, a wholesale distribution business and a global KPO.

**Background:** B.Tech in Electronics and Communication Engineering from Shiv Nadar University, with a Minor in Management Studies.

## What is on the site

The portfolio is a single-page site with five parts:

- **Hero:** four headline proof metrics and quick links to the resume and projects
- **About & Competencies:** skills grouped into Analytics & Modeling, Strategy & Operations, and Product & Consulting, with no self-rated proficiency levels
- **Featured Projects:** 10 case studies with a category filter. Each one opens in a detail popup with the problem, solution, key takeaways, tools used and a link to the original project files on Google Drive
- **Experience Timeline:** career and track record, from Growth Central VC to Genpact
- **Contact:** email, LinkedIn, GitHub and CodeChef links, plus a resume viewer popup with a PDF download

## The 10 case studies

| # | Project | Context | Key numbers |
|---|---|---|---|
| 1 | Performance Management Redesign (KPI Dashboards) | Growth Central VC | 22 UAT cases run, 3 iterations |
| 2 | New Product Line Launch: Expert-Led Courses & PM Program | Growth Central VC | ₹3,00,000 Q1 revenue, 85% completion |
| 3 | Forecasting Model & Capacity Bottleneck Analysis | Gyasi Ram & Sons | 2.1% MAPE on the forecast |
| 4 | Electric Vehicle Market Entry Strategy & Infrastructure | Maruti Suzuki XCELerate 2023 | Top 10 in the B-School track, 51,866 registrants |
| 5 | Daikoku: Two-Sided Marketplace & Startup Incubation | Atal Incubation Centre (SNU) | 13 of 21 B2B meetings converted, ₹23,000 revenue |
| 6 | FluorCo Growth Diagnostic & Queuing Model | Bain Capability Network (BrAINWARS 2023) | Utilization 64% to 90% in the model |
| 7 | Campus Recruitment & Internship Hiring Pipeline | Growth Central VC | 100+ sourced, 33% conversion |
| 8 | Market Research: Competitor Landscape Study | Growth Central VC | 200+ firms in 3 weeks |
| 9 | EMS Route Optimization & Performance Management | DOM208 Operations Research | 2 minutes (10%) saved per round trip |
| 10 | Godrej Consumer Products: DuPont Analysis & Forecast | Financial analysis | 11 financial years, 0.00x debt-to-equity |

## Tech stack

- React 19 and TypeScript
- Vite for the build
- Tailwind CSS v4
- Lucide icons and Motion for animation

All content (projects, metrics, skills, experience) lives in one file, `src/data/portfolioData.ts`. Editing the site mostly means editing that file.

## Project structure

```
src/
  App.tsx                      Page layout
  main.tsx                     Entry point
  index.css                    Global styles
  components/                  Navbar, Hero, AboutCompetencies, FeaturedProjects,
                               CaseStudyDetailModal, ExperienceTimeline,
                               ContactSection, ResumeModal
  data/portfolioData.ts        All site content
public/
  assets/aistudio/             Case study images and the resume PDF
  robots.txt, sitemap.xml, llms.txt
.github/workflows/deploy.yml   Build and deploy to GitHub Pages
```

## Run locally

Requires Node.js 22 or newer.

```
npm install
npm run dev
```

The dev server runs at http://localhost:3000. To check a production build, run `npm run build` and then `npm run preview`.

## Deployment

Every push to `main` triggers the GitHub Actions workflow, which runs `npm run build` and publishes the `dist/` folder to GitHub Pages. In the repository settings, Pages must have its Source set to **GitHub Actions**.

## SEO

`robots.txt`, `sitemap.xml` and `llms.txt` sit in `public/`, so they are served from the site root.

## Contact

- **Email:** kshitiz.gupta333@gmail.com
- **LinkedIn:** [linkedin.com/in/kshitiz-gupta02](https://www.linkedin.com/in/kshitiz-gupta02/)
- **GitHub:** [github.com/kshitiz-gupta02](https://github.com/kshitiz-gupta02)
- **Location:** Delhi NCR, India
