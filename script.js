/**
 * Kshitiz Gupta — Portfolio Interactive Controller
 * Pure Vanilla JavaScript. Zero external libraries. 100% self-contained.
 */

// 1. All 10 Case Studies Detailed Database
const caseStudies = [
  {
    id: "kpi-systems",
    category: "ops",
    tag: "Growth Central VC · 23-Month Overhaul",
    title: "KPI Systems — Three Iterations Over 23 Months",
    oneLiner: "Rebuilding a 200-person startup's performance system from primitive task-counting into a balanced, gamified model that boosted productivity 60%.",
    problem: "Performance was initially measured by raw task completions, inadvertently incentivizing low-effort busywork over business results while generating employee resentment and 40%+ absenteeism.",
    approach: "Iterated through 3 generations of performance models over 23 months. When the V2 ratio model triggered candidate hoarding, designed V3 as a single balanced formula: Total Score = 5A + 2B − 6C + 10D − 4E, aligning sourcing volume, shortlisting quality, and final hires.",
    outcome: "Adopted across 5 functional departments (200+ team members). Increased measurable team output by 60%, reduced absenteeism by 40%, cut time-to-hire by 30%, and lifted retention from 10% to 40%.",
    impactBadge: "60% Output Gain",
    tools: ["Excel", "Power BI", "Google Sheets", "KPI Dashboards", "Performance Modeling"],
    tags: [
      "Power BI", "PowerBI", "Excel", "Macros", "Pivot Tables", "VLOOKUP", "KPI", "KPI Formula", 
      "Dashboards", "Performance Systems", "Incentive Alignment", "Gamification", "Operations", 
      "Operations Management", "Growth Central VC", "HR Tech", "HR Analytics", "Employee Retention", 
      "Productivity", "Absenteeism", "People Ops", "Analytics", "SaaS", "Trend Analysis"
    ],
    metrics: [
      { num: "60%", label: "Increase in measurable workforce productivity" },
      { num: "40%", label: "Reduction in absenteeism across teams" },
      { num: "10%→40%", label: "Employee retention improvement" },
      { num: "200+", label: "Employees governed by the V3 scoring model" }
    ],
    exhibit: `
      <div style="font-family:'IBM Plex Mono', monospace; font-size:0.75rem; color:var(--text-secondary); margin-bottom:12px;">V3 BALANCED SCORING FORMULA</div>
      <div style="background:var(--bg-canvas); border:1px solid var(--border-accent); border-radius:10px; padding:16px; margin-bottom:12px;">
        <div style="font-family:'IBM Plex Mono', monospace; font-size:1.1rem; color:var(--accent); font-weight:700; text-align:center;">
          Score = 5(A) + 2(B) − 6(C) + 10(D) − 4(E)
        </div>
      </div>
      <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:8px; font-size:0.75rem;" class="mono">
        <div>A = Job Ads Posted (+5 pts)</div>
        <div>B = Sourced Applicants (+2 pts)</div>
        <div>C = Shortlists Created (-6 pts)</div>
        <div>D = Passed Interviews (+10 pts)</div>
      </div>
      <p style="font-size:0.75rem; color:var(--text-muted); margin-top:8px;" class="mono">E = Rejected Candidates (C - D). Balanced effort, selectivity, and conversion.</p>
    `,
    driveUrl: "https://drive.google.com/drive/folders/1E0fjcqQyj1njvmEVz1gaQTCQxVTi6KXG"
  },
  {
    id: "pm-course",
    category: "ops",
    tag: "Growth Central VC · Product Line",
    title: "Product Management Course Design & Delivery",
    oneLiner: "Hiring 4 domain experts for self-paced learning while designing and teaching an 8-week live PM cohort, driving ₹3,00,000 in Q1 revenue.",
    problem: "Growth Central VC needed to diversify beyond basic skill certificate tests into high-ticket, high-retention live educational training programs.",
    approach: "Recruited 4 domain leaders (Finance, Marketing, CS, Cybersecurity) for 2-month modular courses. Simultaneously built and personally instructed a live 8-week Product Management course with an embedded 6-week management simulation.",
    outcome: "Generated ₹3,00,000 in combined Q1 revenue. Achieved an 85% completion rate across expert-led modules, scaling enrollment from 60 to 100+ students within 6 months.",
    impactBadge: "₹3,00,000 Q1 Revenue",
    tools: ["Figma", "Notion", "Google Workspace", "Loom", "Excel", "Product Analytics", "Slack"],
    tags: [
      "Product Management", "Product Mgmt", "PM", "Associate Product Manager", "APM", "PRD", 
      "Figma", "Wireframing", "Notion", "Curriculum Design", "Cohort Training", "P&L Ownership", 
      "Revenue Generation", "Education", "EdTech", "Growth Central VC", "Simulation", "Agile", 
      "Scrum", "User Research", "Product Roadmapping", "Course Design"
    ],
    metrics: [
      { num: "₹3,00,000", label: "First-quarter revenue generated" },
      { num: "85%", label: "Course completion rate (vs industry avg <10%)" },
      { num: "4 Cohorts", label: "Personally instructed live PM cohorts" },
      { num: "40%", label: "Internship placement uptake by completers" }
    ],
    exhibit: `
      <div style="font-family:'IBM Plex Mono', monospace; font-size:0.75rem; color:var(--text-secondary); margin-bottom:12px;">8-WEEK CURRICULUM ARCHITECTURE</div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <div style="display:flex; align-items:center; gap:10px; padding:8px 12px; background:var(--bg-canvas); border-radius:6px; font-size:0.8125rem;">
          <span class="mono" style="color:var(--accent); font-weight:700; width:80px;">Weeks 1–2</span>
          <span style="color:var(--text-primary);">Foundations of Product & Systems Management</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px; padding:8px 12px; background:var(--accent-subtle); border:1px solid var(--border-accent); border-radius:6px; font-size:0.8125rem;">
          <span class="mono" style="color:var(--accent); font-weight:700; width:80px;">Weeks 2–7</span>
          <span style="color:var(--text-primary); font-weight:600;">Live Management Internship: Mentees lead real teams</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px; padding:8px 12px; background:var(--bg-canvas); border-radius:6px; font-size:0.8125rem;">
          <span class="mono" style="color:var(--accent); font-weight:700; width:80px;">Weeks 7–8</span>
          <span style="color:var(--text-primary);">Simulation Defense, Case Exam & Career Placement</span>
        </div>
      </div>
    `,
    driveUrl: "https://drive.google.com/drive/folders/15ItsVQvv72Q8pxY_UCPCky_MAtwJQxsA"
  },
  {
    id: "xcelerate",
    category: "strategy",
    tag: "Maruti Suzuki XCELerate · Top 1.5% Nationally",
    title: "Maruti Suzuki — EV Market Entry Strategy",
    oneLiner: "Constructing an electric vehicle market-entry roadmap for India's auto market leader against Tata Motors' early lead and uneven charging infrastructure.",
    problem: "Maruti Suzuki faced immense first-mover pressure from Tata Motors in the rapidly emerging EV passenger vehicle segment. The brief required a viable market-entry strategy balancing regional charging station deficits, battery supply chain constraints, and first-time buyer price sensitivity.",
    approach: "Evaluated 51,866 competition participants to reach the Semi-Final (Top 10 B-School track). Sized state-level charging station densities, identifying Karnataka (220.7 EVs/station) and Delhi (365.5 EVs/station) as prime launch states. Formulated 'Maruti Suzuki eBharat'—a value-focused GTM campaign targeting the ₹9–15 Lakh mid-range gap between budget models and luxury EVs.",
    outcome: "Selected as Semi-Finalist — Top 10 B-School Track out of 51,866 national registrations across India. Recommendations included vehicle-to-grid tech, fleet partnerships, and retrofit programs.",
    impactBadge: "Top 10 B-School Track",
    tools: ["Power BI", "Excel", "PowerPoint", "Secondary Research", "Geospatial Ratio Modeling"],
    tags: [
      "Power BI", "PowerBI", "Excel", "EV Strategy", "Electric Vehicles", "EV", "Maruti Suzuki", 
      "Maruti", "Suzuki", "Tata Motors", "Automotive", "Automotive Strategy", "Market Entry", 
      "GTM Strategy", "Go-to-Market", "Market Sizing", "Charging Stations", "Infrastructure", 
      "Karnataka", "Delhi", "B-School Case", "Strategy Consulting", "Management Consulting", "Sensitivity Analysis"
    ],
    metrics: [
      { num: "Top 1.5%", label: "National rank out of 51,866 candidates" },
      { num: "774", label: "Charging stations in Karnataka (optimal ratio)" },
      { num: "₹9–15L", label: "Targeted underserved price sweet spot" },
      { num: "3 Rounds", label: "Cleared online screening & case exhibits" }
    ],
    exhibit: `
      <div style="font-family:'IBM Plex Mono', monospace; font-size:0.75rem; color:var(--text-secondary); margin-bottom:12px;">CHARGING INFRASTRUCTURE HEADROOM BY STATE</div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <div style="display:flex; align-items:center; gap:10px; font-size:0.8125rem;">
          <span style="width:90px; color:var(--text-primary); font-weight:600;">Karnataka</span>
          <div style="flex:1; background:var(--bg-surface); height:18px; border-radius:4px; overflow:hidden; border:1px solid var(--border-subtle);">
            <div style="width:100%; height:100%; background:var(--accent);"></div>
          </div>
          <span class="mono" style="width:60px; text-align:right;">774 stns</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px; font-size:0.8125rem;">
          <span style="width:90px; color:var(--text-primary);">Maharashtra</span>
          <div style="flex:1; background:var(--bg-surface); height:18px; border-radius:4px; overflow:hidden; border:1px solid var(--border-subtle);">
            <div style="width:85%; height:100%; background:var(--text-muted);"></div>
          </div>
          <span class="mono" style="width:60px; text-align:right;">660 stns</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px; font-size:0.8125rem;">
          <span style="width:90px; color:var(--text-primary); font-weight:600;">Delhi</span>
          <div style="flex:1; background:var(--bg-surface); height:18px; border-radius:4px; overflow:hidden; border:1px solid var(--border-subtle);">
            <div style="width:70%; height:100%; background:var(--accent);"></div>
          </div>
          <span class="mono" style="width:60px; text-align:right;">539 stns</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px; font-size:0.8125rem;">
          <span style="width:90px; color:var(--text-primary);">Uttar Pradesh</span>
          <div style="flex:1; background:var(--bg-surface); height:18px; border-radius:4px; overflow:hidden; border:1px solid var(--border-subtle);">
            <div style="width:52%; height:100%; background:var(--text-muted);"></div>
          </div>
          <span class="mono" style="width:60px; text-align:right;">406 stns</span>
        </div>
      </div>
      <p style="font-size:0.75rem; color:var(--text-muted); margin-top:8px;" class="mono">Karnataka had the lowest EV-to-station ratio (220.7) indicating maximum charging headroom.</p>
    `,
    driveUrl: "https://drive.google.com/drive/folders/1Y4JsfUDt3EnKaZFjGPqmZ8gyk8Yd7gOA"
  },
  {
    id: "daikoku",
    category: "strategy",
    tag: "Atal Incubation Centre · Co-Founder",
    title: "Daikoku — Trust-First Talent Marketplace",
    oneLiner: "Co-founding a two-sided marketplace connecting verified student builders with startups through a streamlined 'Swipe Mode' evaluation interface.",
    problem: "Undergrads faced a chicken-and-egg hurdle with theoretical university coursework and unverified resumes, while 75%+ of startup founders hired strictly through personal referrals due to distrust of generic job portals.",
    approach: "As Co-Founder leading Operations, Strategy & Marketing, defined product scope, managed cross-functional sprint deliveries across 4 founders, and led outbound B2B customer development across 21 early-stage startups.",
    outcome: "Secured formal incubation at Shiv Nadar University's Atal Incubation Centre. Converted 13 of 21 target startups into meetings (62% conversion) and booked initial commercial revenue.",
    impactBadge: "62% B2B Conversion",
    tools: ["Figma", "Notion", "B2B CRM", "Google Sheets", "LinkedIn Outbound"],
    tags: [
      "Figma", "Notion", "B2B Outbound", "B2B Sales", "Startup Founder", "Co-Founder", 
      "Atal Incubation Centre", "AIC SNU", "Shiv Nadar University", "Marketplace", "Talent Platform", 
      "Product Design", "0 to 1", "Swipe Mode", "Daikoku", "Customer Discovery", "Product Roadmapping", 
      "Agile Sprints", "Wireframing", "Cold Outreach", "Business Development"
    ],
    metrics: [
      { num: "21", label: "Startups contacted through outbound motion" },
      { num: "13", label: "High-intent client meetings scheduled" },
      { num: "6 Mo", label: "From blank canvas to incubated prototype" },
      { num: "Incubated", label: "Selected by SNU Atal Incubation Centre" }
    ],
    exhibit: `
      <div style="font-family:'IBM Plex Mono', monospace; font-size:0.75rem; color:var(--text-secondary); margin-bottom:12px;">PRODUCT CONCEPT: CANDIDATE SWIPE MODE</div>
      <div style="background:var(--bg-canvas); border:1px solid var(--border-medium); border-radius:12px; padding:16px; max-width:320px; margin:0 auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <span style="font-size:0.875rem; font-weight:700; color:var(--text-primary);">Aditi K.</span>
          <span style="font-size:0.6875rem; background:var(--success-subtle); color:var(--success); padding:2px 6px; border-radius:4px;" class="mono">✓ 4.8★ SME Verified</span>
        </div>
        <p style="font-size:0.8125rem; color:var(--text-secondary); margin-bottom:10px;">Completed E-Commerce Checkout Optimization project. Direct code reviews by senior engineering mentors.</p>
        <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:12px;">
          <span style="font-size:0.6875rem; padding:2px 6px; background:var(--badge-bg); border-radius:4px;" class="mono">React</span>
          <span style="font-size:0.6875rem; padding:2px 6px; background:var(--badge-bg); border-radius:4px;" class="mono">UX Systems</span>
        </div>
        <div style="display:flex; justify-content:space-around; padding-top:8px; border-top:1px solid var(--border-subtle); font-size:0.8125rem; font-weight:600;" class="mono">
          <span style="color:#EF4444; cursor:pointer;">[Pass]</span>
          <span style="color:var(--success); cursor:pointer;">[Instant Message]</span>
        </div>
      </div>
    `,
    driveUrl: "https://drive.google.com/drive/folders/18bxVORw4bbdf9egULvmRO9jpvWs-sm2a"
  },
  {
    id: "fluorco",
    category: "strategy",
    tag: "Bain BrAINWARS 2023 · Semi-Finalist",
    title: "FluorCo — HF Business Growth Strategy",
    oneLiner: "Diagnosing why a 50-year-old hydrofluoric acid business had flatlined despite 40% company-wide growth, and structuring a multi-pillar turnaround strategy.",
    problem: "FluorCo's core hydrofluoric acid (HF) business had stalled while the company grew ~40% overall. The challenge required diagnosing why margins had eroded under global fluorspar supply disruptions, fixed industry-wide selling prices, and rising competition from regional players like Glassify and ElectEtch.",
    approach: "Built comprehensive MECE issue trees across market and internal company drivers. Applied queuing-theory calculations showing how raising plant capacity utilization from 64% to a 90% target would compress unit production costs. Benchmarked 4 major competitors on volume, sourcing origin, and new-customer acquisition.",
    outcome: "Cleared Round 1 of 3 in Bain Capability Network's national case competition out of hundreds of university teams, advancing to Round 2 with an independently verifiable four-cause diagnosis.",
    impactBadge: "Cleared Round 1 / 3",
    tools: ["Excel", "Advanced Cost Modeling", "Queuing Simulation", "PowerPoint", "MECE Issue Trees"],
    tags: [
      "Excel", "Queuing Model", "Queuing Theory", "MECE Issue Tree", "MECE", "Bain BrAINWARS", 
      "Bain", "Capacity Utilization", "Little's Law", "Cost Benchmarking", "Chemical Manufacturing", 
      "Chemicals", "FluorCo", "Management Consulting", "Strategy Consulting", "Turnaround", 
      "Unit Economics", "Sensitivity Analysis", "Operations Strategy", "Cost Reduction"
    ],
    metrics: [
      { num: "100%", label: "Import dependency on Vietnam/Canada fluorspar" },
      { num: "37–64%", label: "Volatile plant utilization causing high unit costs" },
      { num: "$0", label: "Industry pricing power (flat for 10 years)" },
      { num: "10%", label: "FluorCo new-customer rate vs 50-80% competitors" }
    ],
    exhibit: `
      <div style="font-family:'IBM Plex Mono', monospace; font-size:0.75rem; color:var(--text-secondary); margin-bottom:12px;">COMPETITIVE BENCHMARK (FY22 BASIS)</div>
      <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; font-size:0.8125rem; text-align:left;">
          <thead>
            <tr style="border-bottom:1px solid var(--border-medium); color:var(--accent);">
              <th style="padding:8px;">Company</th>
              <th style="padding:8px;">Dollar Sales</th>
              <th style="padding:8px;">Volume Multiple</th>
              <th style="padding:8px;">% New Cust.</th>
              <th style="padding:8px;">South India Share</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border-subtle); color:var(--text-primary); font-weight:600;">
              <td style="padding:8px;">FluorCo (Client)</td>
              <td style="padding:8px;">$3.8M</td>
              <td style="padding:8px;">1.0x</td>
              <td style="padding:8px;">10%</td>
              <td style="padding:8px;">60%</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-subtle);">
              <td style="padding:8px;">EtchItOn</td>
              <td style="padding:8px;">$29M</td>
              <td style="padding:8px;">10.0x</td>
              <td style="padding:8px;">—</td>
              <td style="padding:8px;">30%</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-subtle);">
              <td style="padding:8px;">Glassify</td>
              <td style="padding:8px;">$18M</td>
              <td style="padding:8px;">6.0x</td>
              <td style="padding:8px;">50%</td>
              <td style="padding:8px;">35%</td>
            </tr>
            <tr>
              <td style="padding:8px;">ElectEtch</td>
              <td style="padding:8px;">$10M</td>
              <td style="padding:8px;">3.0x</td>
              <td style="padding:8px;">80%</td>
              <td style="padding:8px;">25%</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    driveUrl: "https://drive.google.com/drive/folders/1pphCi7QIauoZzM-nZT1Ap68F4HRjBBX9"
  },
  {
    id: "time-motion-study",
    category: "ops",
    tag: "Gyasi Ram & Sons · Retail Ops",
    title: "Time and Motion Study & Inventory Forecasting",
    oneLiner: "Analyzing retail & wholesale floor operations across 50 SKUs, cutting customer interaction time from 20 to 12 minutes and eliminating stockout backlogs.",
    problem: "Gyasi Ram & Sons suffered from 20-minute customer interaction bottlenecks and acute seasonal order fulfillment delays during monsoon demand peaks across a 50-SKU netting inventory.",
    approach: "Conducted the company's first time-and-motion study analyzing worker steps and packing throughput. Built a seasonal forecasting model synchronizing inventory replenishment with supplier lead times. Trained floor staff on technical specs to guide customer selection faster.",
    outcome: "Reduced customer handling time from 20 to 12–13 minutes (-38%), doubled average basket size from 2–3 to 4–5 items, and completely eliminated seasonal peak backlogs.",
    impactBadge: "-38% Interaction Time",
    tools: ["Excel", "Inventory Replenishment Models", "Statistical Forecasting", "Stopwatch TAT Analysis"],
    tags: [
      "Excel", "Time-Motion", "Time and Motion", "Time & Motion Study", "Retail Operations", 
      "Retail", "Wholesale", "Inventory Forecasting", "SKU Rationalization", "TAT Reduction", 
      "Supply Chain", "SME Operations", "Gyasi Ram", "Lean Operations", "Safety Stock", 
      "Reorder Point", "Process Optimization", "Floor Flow Design", "Customer Turnaround"
    ],
    metrics: [
      { num: "12–13m", label: "Customer interaction time (down from 20m)" },
      { num: "4–5 items", label: "Average basket size (up from 2–3 items)" },
      { num: "50 SKUs", label: "Catalog analyzed and standardized" },
      { num: "0 Backlogs", label: "Eliminated seasonal demand stockouts" }
    ],
    exhibit: `
      <div style="font-family:'IBM Plex Mono', monospace; font-size:0.75rem; color:var(--text-secondary); margin-bottom:12px;">BEFORE VS. AFTER OPERATIONAL EFFICIENCY</div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div style="background:var(--bg-canvas); border:1px solid var(--border-subtle); border-radius:8px; padding:12px;">
          <div style="font-size:0.6875rem; color:var(--text-muted);" class="mono">AVG INTERACTION TIME</div>
          <div style="display:flex; align-items:baseline; gap:8px; margin-top:4px;">
            <span style="text-decoration:line-through; color:var(--text-muted); font-size:0.875rem;">20 min</span>
            <span style="color:var(--accent); font-size:1.25rem; font-weight:700;" class="mono">12 min</span>
          </div>
          <div style="font-size:0.6875rem; color:var(--success); margin-top:4px;" class="mono">38% reduction in wait times</div>
        </div>
        <div style="background:var(--bg-canvas); border:1px solid var(--border-subtle); border-radius:8px; padding:12px;">
          <div style="font-size:0.6875rem; color:var(--text-muted);" class="mono">AVERAGE BASKET SIZE</div>
          <div style="display:flex; align-items:baseline; gap:8px; margin-top:4px;">
            <span style="text-decoration:line-through; color:var(--text-muted); font-size:0.875rem;">2–3</span>
            <span style="color:var(--accent); font-size:1.25rem; font-weight:700;" class="mono">4–5 items</span>
          </div>
          <div style="font-size:0.6875rem; color:var(--success); margin-top:4px;" class="mono">Product-guided cross-selling</div>
        </div>
      </div>
    `,
    driveUrl: "https://drive.google.com/drive/folders/1c7FvbBA2J-HErjGGAI53ri6mBpYbzyYZ"
  },
  {
    id: "godrej",
    category: "strategy",
    tag: "Financial Accounting · 11-Year Study",
    title: "Godrej Consumer Products — DuPont Financial Analysis",
    oneLiner: "11 years of standalone financial statements pulled apart with DuPont decomposition to isolate true drivers of Return on Equity (ROE).",
    problem: "Determining whether Godrej Consumer Products' healthy 18–24% ROE was generated by operational excellence and pricing margins or artificial leverage.",
    approach: "Performed horizontal and vertical analysis across FY2012–FY2022. Deconstructed Return on Equity into its 3 DuPont levers: Net Profit Margin × Asset Turnover × Equity Multiplier. Built a 2-year forward-looking financial forecasting model in Excel.",
    outcome: "Proved that ROE stability was driven purely by operating margins and internal reinvestment—not financial debt (GCPL has maintained ~0.00x Debt-to-Equity since FY2014). Flagged the FY2019 35.6% ROE spike as a one-off corporate tax credit.",
    impactBadge: "11-Year Decomposition",
    tools: ["Excel", "Power BI", "Financial Modeling", "Balance Sheet Analysis", "Annual Reports"],
    tags: [
      "Power BI", "PowerBI", "Excel", "DuPont Analysis", "DuPont", "Du Pont", "Godrej", 
      "Financial Modeling", "Financial Analysis", "ROE Decomposition", "Return on Equity", 
      "FMCG", "Margin Analysis", "Horizontal Analysis", "Vertical Analysis", "Balance Sheet", 
      "P&L", "Corporate Finance", "Equity Research", "Ratio Analysis", "Debt-to-Equity", "Accounting"
    ],
    metrics: [
      { num: "8.7%", label: "Revenue CAGR over 10-year horizon" },
      { num: "0.00x", label: "Debt-to-Equity maintained since FY2014" },
      { num: "1.13x", label: "Equity Multiplier (deleveraged from 1.42x)" },
      { num: "19.5%", label: "Forecasted FY23 normalized ROE" }
    ],
    exhibit: `
      <div style="font-family:'IBM Plex Mono', monospace; font-size:0.75rem; color:var(--text-secondary); margin-bottom:12px;">3-STEP DUPONT DECOMPOSITION SUMMARY</div>
      <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; font-size:0.8125rem; text-align:left;">
          <thead>
            <tr style="border-bottom:1px solid var(--border-medium); color:var(--accent);">
              <th style="padding:8px;">Metric</th>
              <th style="padding:8px;">FY2012</th>
              <th style="padding:8px;">FY2016</th>
              <th style="padding:8px;">FY2019*</th>
              <th style="padding:8px;">FY2022</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border-subtle);">
              <td style="padding:8px;">Net Profit Margin</td>
              <td style="padding:8px;">19.9%</td>
              <td style="padding:8px;">14.6%</td>
              <td style="padding:8px;">30.4%</td>
              <td style="padding:8px;">21.1%</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-subtle);">
              <td style="padding:8px;">Total Asset Turnover</td>
              <td style="padding:8px;">0.85x</td>
              <td style="padding:8px;">0.98x</td>
              <td style="padding:8px;">0.87x</td>
              <td style="padding:8px;">0.79x</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-subtle);">
              <td style="padding:8px;">Equity Multiplier</td>
              <td style="padding:8px;">1.42x</td>
              <td style="padding:8px;">1.31x</td>
              <td style="padding:8px;">1.35x</td>
              <td style="padding:8px;">1.13x</td>
            </tr>
            <tr style="font-weight:700; color:var(--text-primary);">
              <td style="padding:8px;">ROE (DuPont Product)</td>
              <td style="padding:8px;">23.9%</td>
              <td style="padding:8px;">18.9%</td>
              <td style="padding:8px; color:var(--accent);">35.6%*</td>
              <td style="padding:8px;">18.8%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size:0.75rem; color:var(--text-muted); margin-top:8px;" class="mono">*FY19 inflated by a one-off ₹282 Cr corporate tax credit.</p>
    `,
    driveUrl: "https://drive.google.com/drive/folders/1-_HfoAcBc3YtDqia0iVg3oyggPED12UL"
  },
  {
    id: "ambulance-routing",
    category: "ops",
    tag: "Operations Research · Graph Theory",
    title: "Ambulance Routing via Graph Theory",
    oneLiner: "Applying Dijkstra's shortest-path algorithm and bipartite matching to municipal road networks to protect the critical emergency 'golden hour'.",
    problem: "Traditional municipal ambulance dispatch relies heavily on driver intuition and habit rather than mathematical routing, burning critical minutes in emergency response situations.",
    approach: "Modeled a city's road network as a weighted directed graph accounting for one-way street constraints. Ran Dijkstra's algorithm for onward and return journeys independently. Formulated bipartite matching to allocate multiple simultaneous emergency calls to closest available vehicles.",
    outcome: "Cut sample round-trip response time from 20 minutes to 18 minutes (10% saving). Proposed an 8-KPI hospital control room framework for real-time tracking.",
    impactBadge: "10% Response Time Saved",
    tools: ["Python", "SQL", "NetworkX", "Graph Theory", "GIS Route Simulation"],
    tags: [
      "Python", "SQL", "Dijkstra Routing", "Dijkstra", "Dijkstra's Algorithm", "Graph Theory", 
      "Bipartite Matching", "Operations Research", "OR", "Emergency Response", "Route Optimization", 
      "Golden Hour", "Ambulance", "Network Flow", "Logistics", "Healthcare Logistics", "Shortest Path"
    ],
    metrics: [
      { num: "10%", label: "Round-trip emergency transit time saved" },
      { num: "1.00", label: "Distance Efficiency Ratio (up from 0.90)" },
      { num: "8 KPIs", label: "Control room tracking framework designed" },
      { num: "Golden Hr", label: "Patient response window protected" }
    ],
    exhibit: `
      <div style="font-family:'IBM Plex Mono', monospace; font-size:0.75rem; color:var(--text-secondary); margin-bottom:12px;">BEFORE VS. AFTER ROUTE OPTIMIZATION</div>
      <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; font-size:0.8125rem; text-align:left;">
          <thead>
            <tr style="border-bottom:1px solid var(--border-medium); color:var(--accent);">
              <th style="padding:8px;">Leg</th>
              <th style="padding:8px;">Habitual Route</th>
              <th style="padding:8px;">Optimized Dijkstra Route</th>
              <th style="padding:8px;">Variance</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border-subtle);">
              <td style="padding:8px;">Onward (H → P2)</td>
              <td style="padding:8px;">10 min</td>
              <td style="padding:8px;">9 min</td>
              <td style="padding:8px; color:var(--success);">-1 min</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-subtle);">
              <td style="padding:8px;">Return (P2 → H)</td>
              <td style="padding:8px;">10 min</td>
              <td style="padding:8px;">9 min</td>
              <td style="padding:8px; color:var(--success);">-1 min</td>
            </tr>
            <tr style="font-weight:700; color:var(--text-primary);">
              <td style="padding:8px;">Total Trip Time</td>
              <td style="padding:8px;">20 min</td>
              <td style="padding:8px; color:var(--accent);">18 min</td>
              <td style="padding:8px; color:var(--success); font-weight:700;">10% Faster</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    driveUrl: "https://drive.google.com/drive/folders/1-_HfoAcBc3YtDqia0iVg3oyggPED12UL"
  },
  {
    id: "campus-recruitment",
    category: "ops",
    tag: "Growth Central VC · 6 Campuses",
    title: "Campus Recruitment & Internship Hiring",
    oneLiner: "Constructing an end-to-end recruitment pipeline across 6 universities, screening 100+ candidates and achieving a 33% intern-to-part-time conversion rate.",
    problem: "Growth Central VC had fragmented hiring practices and lacked a predictable talent feed for its fast-growing business operations, marketing, and sales departments.",
    approach: "Partnered directly with placement cells across 6 institutions (including KMC, DDUC, ArthaShastra IIM Rohtak, DTU E-Cell, LPU). Standardized evaluation rubrics and trained rotating HR trainee pairs on structured interviewing.",
    outcome: "Sourced 100+ candidates, shortlisted 30+, and onboarded 12 high-performing interns. 4 converted into permanent part-time team members (33% conversion rate).",
    impactBadge: "33% Conversion Rate",
    tools: ["Excel", "ATS Funnel Tracker", "Google Forms", "Google Sheets", "Structured Rubrics"],
    tags: [
      "Excel", "Campus Hiring", "Campus Recruitment", "Talent Acquisition", "Funnel Conversion", 
      "Hiring Funnel", "Interview Rubrics", "University Relations", "HR Operations", "People Ops", 
      "Growth Central VC", "Recruitment", "DTU", "IIM Rohtak", "Conversion Rate", "Talent Pipeline"
    ],
    metrics: [
      { num: "6", label: "Premier campus placement cells partnered" },
      { num: "100+", label: "Applicant pipeline vetted and screened" },
      { num: "33%", label: "Intern-to-part-time conversion rate" },
      { num: "12", label: "Talented interns onboarded & trained" }
    ],
    exhibit: `
      <div style="font-family:'IBM Plex Mono', monospace; font-size:0.75rem; color:var(--text-secondary); margin-bottom:12px;">HIRING FUNNEL CONVERSION METRICS</div>
      <div style="display:flex; flex-direction:column; gap:6px;">
        <div style="background:var(--bg-canvas); border-radius:4px; padding:6px 12px; display:flex; justify-content:space-between; font-size:0.8125rem;">
          <span>100+ Sourced Applicants</span>
          <span class="mono" style="color:var(--text-muted);">100% Top of Funnel</span>
        </div>
        <div style="background:var(--bg-canvas); border-radius:4px; padding:6px 12px; display:flex; justify-content:space-between; font-size:0.8125rem;">
          <span>30+ Shortlisted & Interviewed</span>
          <span class="mono" style="color:var(--text-muted);">30% Conversion</span>
        </div>
        <div style="background:var(--bg-canvas); border-radius:4px; padding:6px 12px; display:flex; justify-content:space-between; font-size:0.8125rem;">
          <span>12 High-Performing Interns Onboarded</span>
          <span class="mono" style="color:var(--accent);">12% Offer Rate</span>
        </div>
        <div style="background:var(--accent-subtle); border:1px solid var(--border-accent); border-radius:4px; padding:6px 12px; display:flex; justify-content:space-between; font-size:0.8125rem; font-weight:600;">
          <span style="color:var(--text-primary);">4 Retained in Part-Time Key Roles</span>
          <span class="mono" style="color:var(--accent);">33% Conversion</span>
        </div>
      </div>
    `,
    driveUrl: "https://drive.google.com/drive/folders/1oj0j8ZzqvzmWg71Q0JiiH7YsU6WdiT5W"
  },
  {
    id: "market-research",
    category: "strategy",
    tag: "Growth Central VC · Critical Path Method",
    title: "Competitor Landscape — 214 Platforms Mapped",
    oneLiner: "Leading a 7-person research team to benchmark 214 edtech and assessment platforms in 3 weeks, identifying the unexploited low-cost/credible quadrant.",
    problem: "Growth Central VC launched its initial certificate product with zero baseline competitive data to decide its next product direction. Leadership needed a comprehensive market map under tight deadlines.",
    approach: "Managed a 7-person intern research pod using the Critical Path Method (CPM). Mapped 163 certificate assessment tools and 51 hiring assessment platforms. Conducted primary surveys with 30+ paying customers and built a 2x2 positioning matrix comparing price vs. perceived credibility.",
    outcome: "Delivered the complete strategic dossier in 3 weeks (beating the 6-week target by 50%). Identified an open quadrant in low-cost, high-credibility credentials, prompting the founder to promote me directly to the Core Team.",
    impactBadge: "3 Weeks vs 6 Weeks",
    tools: ["Excel", "Critical Path Method", "Notion", "Project Management WBS", "Survey Synthesizers"],
    tags: [
      "Excel", "Critical Path (CPM)", "Critical Path Method", "CPM", "Competitor Landscape", 
      "Competitor Intelligence", "Benchmarking", "EdTech", "Market Sizing", "2x2 Matrix", 
      "Customer Interviews", "Growth Central VC", "Project Management", "WBS", "Market Research", "Strategy"
    ],
    metrics: [
      { num: "214", label: "Competitor platforms mapped & classified" },
      { num: "50%", label: "Time saved via Critical Path Method" },
      { num: "30+", label: "Primary user interviews synthesized" },
      { num: "Promoted", label: "Directly moved onto Core Strategy team" }
    ],
    exhibit: `
      <div style="font-family:'IBM Plex Mono', monospace; font-size:0.75rem; color:var(--text-secondary); margin-bottom:12px;">PRICE VS CREDIBILITY POSITIONING MAP</div>
      <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:8px; padding:16px; position:relative; min-height:180px;">
        <div style="position:absolute; top:12px; left:12px; background:var(--accent-subtle); border:1px solid var(--border-accent); padding:4px 8px; border-radius:4px; font-size:0.75rem; color:var(--accent); font-weight:600;" class="mono">
          TARGET OPPORTUNITY: Low Cost + High Credibility
        </div>
        <div style="position:absolute; top:20px; right:20px; font-size:0.75rem; color:var(--text-muted);" class="mono">Coursera, edX ($$$ / High Trust)</div>
        <div style="position:absolute; bottom:20px; left:20px; font-size:0.75rem; color:var(--text-muted);" class="mono">Growth Central V1, Udemy ($ / Low Trust)</div>
        <div style="position:absolute; bottom:40px; right:30px; font-size:0.75rem; color:var(--text-muted);" class="mono">Skillshare ($$ / Medium Trust)</div>
      </div>
    `,
    driveUrl: "https://drive.google.com/drive/folders/1Gmf_nS38Z3pBir0P0YGzLLreZ6S93lau"
  }
];

// 2. DOM Elements & Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  renderProjects(caseStudies);
  renderRecruiterScan(caseStudies);
  initFiltersAndSearch();
  initModal();
  initMetricsAnimation();
  initCardSpotlight();
  initScrollSpy();
  initCopyEmail();
  initExhibitShowcase();
  handleDeepLink();
  window.addEventListener('hashchange', handleDeepLink);
});

// 3. Theme Toggle (Obsidian Dark by default, with seamless switch to Light)
function initTheme() {
  const toggleBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('kg-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('kg-theme', next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');
  if (sunIcon && moonIcon) {
    if (theme === 'dark') {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  }
}

// 4. Mobile Navigation Toggle
function initNav() {
  const toggle = document.getElementById('mobileNavToggle');
  const menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => menu.classList.remove('open'));
    });
  }
}

// 4b. Resume Download / Print Handler
window.downloadResumeOrPrint = function() {
  fetch('resume.pdf', { method: 'HEAD' })
    .then(res => {
      if (res.ok) {
        const link = document.createElement('a');
        link.href = 'resume.pdf';
        link.download = 'Kshitiz_Gupta_Resume.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.print();
      }
    })
    .catch(() => {
      window.print();
    });
};

// 5. Render Project Bento Cards
function renderProjects(projects) {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  if (projects.length === 0) {
    container.innerHTML = `
      <div class="empty-search-state">
        <h4 style="font-family:'Space Grotesk', sans-serif; font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">No matching case studies found</h4>
        <p style="font-size:0.875rem; color:var(--text-secondary); max-width:520px; margin:0 auto 16px; line-height:1.6;">
          Try searching for tools like <strong>Excel</strong>, <strong>Power BI</strong>, <strong>Python</strong>, <strong>SQL</strong>, <strong>Figma</strong>, or methods like <strong>DuPont</strong>, <strong>Dijkstra</strong>, <strong>MECE</strong>, <strong>KPI</strong>, <strong>CPM</strong>, or <strong>Time-Motion</strong>.
        </p>
        <button type="button" class="clear-search-btn" onclick="const s = document.getElementById('projectSearch'); if(s) { s.value = ''; s.dispatchEvent(new Event('input')); }">Clear Search</button>
      </div>
    `;
    return;
  }

  container.innerHTML = projects.map(proj => {
    const m1 = proj.metrics && proj.metrics[0] ? proj.metrics[0] : null;
    const m2 = proj.metrics && proj.metrics[1] ? proj.metrics[1] : null;
    const miniChartHtml = renderMiniChart(proj);

    return `
    <article class="project-card" data-id="${proj.id}" onclick="openCaseStudyModal('${proj.id}')">
      <div class="card-top">
        <span class="card-badge">${proj.tag}</span>
        <span class="impact-pill">${proj.impactBadge}</span>
      </div>
      <h3 class="card-title">${proj.title}</h3>
      <p class="card-one-liner">${proj.oneLiner}</p>
      
      ${m1 && m2 ? `
        <div class="card-metric-strip">
          <div class="card-metric-chip">
            <span class="card-metric-num">${m1.num}</span>
            <span class="card-metric-label" title="${m1.label}">${m1.label}</span>
          </div>
          <div class="card-metric-chip">
            <span class="card-metric-num">${m2.num}</span>
            <span class="card-metric-label" title="${m2.label}">${m2.label}</span>
          </div>
        </div>
      ` : ''}

      ${miniChartHtml}

      <div class="card-details-box">
        <div class="card-detail-row">
          <span class="detail-key">Problem</span>
          <span class="detail-val">${proj.problem.slice(0, 105)}...</span>
        </div>
        <div class="card-detail-row">
          <span class="detail-key">Outcome</span>
          <span class="detail-val">${proj.outcome.slice(0, 105)}...</span>
        </div>
      </div>

      ${proj.tools && proj.tools.length ? `
        <div style="display:flex; flex-wrap:wrap; gap:4px; margin-top:10px;">
          ${proj.tools.slice(0, 3).map(tool => `
            <span style="font-family:'IBM Plex Mono', monospace; font-size:0.6875rem; padding:2px 6px; border-radius:4px; background:var(--bg-canvas); border:1px solid var(--border-subtle); color:var(--text-secondary);">${tool}</span>
          `).join('')}
          ${proj.tools.length > 3 ? `<span style="font-family:'IBM Plex Mono', monospace; font-size:0.6875rem; color:var(--text-muted); padding:2px 4px;">+${proj.tools.length - 3}</span>` : ''}
        </div>
      ` : ''}

      <div class="card-footer">
        <span class="read-case-study">
          Read case study 
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
        <span class="mono" style="font-size:0.6875rem; color:var(--text-muted);">Deep Dive Modal ↗</span>
      </div>
    </article>
    `;
  }).join('');
}

// 5a. 1-Page Recruiter Quick-Scan View Rendering
function renderRecruiterScan(projects) {
  const container = document.getElementById('recruiterScanContainer');
  if (!container) return;

  if (projects.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; background: var(--bg-surface); border: 1px dashed var(--border-medium); border-radius: 16px;">
        <p style="color: var(--text-secondary); margin-bottom: 12px; font-size: 1rem;">No matching case studies found in recruiter view.</p>
        <button class="btn btn-secondary btn-sm" onclick="clearFilters()" type="button">Reset Filters</button>
      </div>
    `;
    return;
  }

  let html = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; background: var(--bg-surface); padding: 12px 18px; border-radius: 12px; border: 1px solid var(--border-medium); flex-wrap: wrap; gap: 10px;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span class="mono" style="font-size: 0.75rem; background: var(--accent-subtle); color: var(--accent); padding: 3px 8px; border-radius: 4px; font-weight: 700; border: 1px solid var(--border-accent);">CURRENT VIEW</span>
        <span style="font-size: 0.875rem; color: var(--text-secondary);">Recruiter 1-Page Summary & Executive Dossier</span>
      </div>
      <button class="btn btn-secondary btn-sm" onclick="window.switchView('cards')" type="button" style="font-size: 0.8125rem;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        <span>← Switch to Full Case Study Cards (10)</span>
      </button>
    </div>

    <div class="recruiter-summary-card">
      <div class="recruiter-summary-header">
        <div>
          <span class="mono" style="font-size: 0.75rem; color: var(--accent); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Executive Briefing Dossier</span>
          <h3 style="font-size: 1.25rem; margin-top: 4px; color: var(--text-primary);">Kshitiz Gupta · 1-Page Recruiter Quick-Scan</h3>
          <p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 2px;">
            Target Roles: <strong>Project & Operations Manager · Product Manager / APM · Business Analyst / Business Intelligence / BizOps</strong>
          </p>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="downloadResumeOrPrint()" type="button" title="Download resume or save as PDF">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          <span>Download Resume / Print</span>
        </button>
      </div>

      <div class="recruiter-metrics-grid">
        <div class="recruiter-metric-box">
          <div class="recruiter-metric-val">+60% Output</div>
          <div class="recruiter-metric-lbl">V3 KPI model (200+ team across 5 depts)</div>
        </div>
        <div class="recruiter-metric-box">
          <div class="recruiter-metric-val">Top 1.5%</div>
          <div class="recruiter-metric-lbl">Maruti XCELerate (51,866 candidates)</div>
        </div>
        <div class="recruiter-metric-box">
          <div class="recruiter-metric-val">₹3,00,000</div>
          <div class="recruiter-metric-lbl">Q1 EdTech Live PM Cohort Revenue</div>
        </div>
        <div class="recruiter-metric-box">
          <div class="recruiter-metric-val">62% Conversion</div>
          <div class="recruiter-metric-lbl">Daikoku B2B Founder Outbound at AIC SNU</div>
        </div>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 14px;">
  `;

  projects.forEach((proj, idx) => {
    const toolsBadges = (proj.tools || []).map(t => 
      `<span class="mono" style="font-size: 0.6875rem; padding: 2px 7px; border-radius: 4px; background: var(--bg-canvas); border: 1px solid var(--border-subtle); color: var(--text-secondary);">${t}</span>`
    ).join('');

    html += `
      <article class="recruiter-item-card" id="recruiter-item-${proj.id}">
        <div class="recruiter-item-header">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span class="mono" style="font-size: 0.6875rem; color: var(--accent); font-weight: 600;">#${idx + 1} · ${proj.tag}</span>
              <span class="card-badge" style="font-size: 0.6875rem;">${proj.impactBadge}</span>
            </div>
            <h4 class="recruiter-item-title" style="margin-top: 4px;">${proj.title}</h4>
            <div class="recruiter-item-meta">${proj.oneLiner}</div>
          </div>
        </div>

        <div class="recruiter-item-details">
          <div class="recruiter-detail-col">
            <span class="recruiter-detail-lbl">Problem & Context</span>
            <span class="recruiter-detail-val">${proj.problem}</span>
          </div>
          <div class="recruiter-detail-col">
            <span class="recruiter-detail-lbl">Analytical Approach</span>
            <span class="recruiter-detail-val">${proj.approach}</span>
          </div>
          <div class="recruiter-detail-col">
            <span class="recruiter-detail-lbl">Quantified Outcome</span>
            <span class="recruiter-detail-val" style="color: var(--text-primary); font-weight: 600;">${proj.outcome}</span>
          </div>
        </div>

        <div class="recruiter-item-footer">
          <div class="recruiter-item-tools">
            ${toolsBadges}
          </div>
          <button class="recruiter-view-btn" onclick="openCaseStudyModal('${proj.id}')" type="button">
            <span>Read Case Study & Exhibits</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </article>
    `;
  });

  html += `
    </div>
    <div style="display: flex; justify-content: center; align-items: center; gap: 12px; margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border-subtle);">
      <button class="btn btn-secondary" onclick="window.switchView('cards')" type="button">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        <span>← Return to Full Case Study Bento Cards (10 Projects)</span>
      </button>
    </div>
  `;
  container.innerHTML = html;
}

/// 5b. Authentic Compact SVG Visual Preview Cards for Projects
function renderMiniChart(proj) {
  if (proj.id === 'fluorco' || proj.id === 'bain-brainwars') {
    return `
      <div class="card-preview-chart">
        <div class="card-chart-title">
          <span>Cost Per Case ($)</span>
          <span class="badge-pill">FluorCo +30% vs Peers</span>
        </div>
        <svg viewBox="0 0 260 54">
          <text x="48" y="14" font-family="IBM Plex Mono" font-size="8" fill="var(--accent)" text-anchor="end" font-weight="bold">FluorCo</text>
          <rect x="54" y="6" width="138" height="9" rx="2" fill="var(--accent)"/>
          <text x="198" y="14" font-family="IBM Plex Mono" font-size="8" fill="var(--accent)" font-weight="bold">$38.9k</text>
          
          <text x="48" y="29" font-family="IBM Plex Mono" font-size="8" fill="var(--text-muted)" text-anchor="end">Peers Avg</text>
          <rect x="54" y="21" width="98" height="9" rx="2" fill="#3B82F6"/>
          <text x="158" y="29" font-family="IBM Plex Mono" font-size="8" fill="var(--text-muted)">$27.6k avg</text>
          
          <text x="54" y="46" font-family="IBM Plex Mono" font-size="7.5" fill="var(--text-muted)">Queuing Lift: 64% ➔ 90% (S=4.8m)</text>
        </svg>
      </div>
    `;
  }

  if (proj.id === 'xcelerate' || proj.id === 'maruti-ev') {
    return `
      <div class="card-preview-chart">
        <div class="card-chart-title">
          <span>EV Charging Density</span>
          <span class="badge-pill">Karnataka #1 Launchpad</span>
        </div>
        <svg viewBox="0 0 260 54">
          <text x="32" y="15" font-family="IBM Plex Mono" font-size="8" fill="var(--text-primary)" text-anchor="end">KA</text>
          <rect x="38" y="7" width="135" height="9" rx="2" fill="var(--accent)"/>
          <text x="178" y="15" font-family="IBM Plex Mono" font-size="8" fill="var(--accent)" font-weight="bold">774 stns (220 ratio)</text>
          
          <text x="32" y="30" font-family="IBM Plex Mono" font-size="8" fill="var(--text-primary)" text-anchor="end">DL</text>
          <rect x="38" y="22" width="94" height="9" rx="2" fill="#3B82F6"/>
          <text x="138" y="30" font-family="IBM Plex Mono" font-size="8" fill="var(--text-secondary)">539 stns (365 ratio)</text>
          
          <text x="38" y="47" font-family="IBM Plex Mono" font-size="7.5" fill="var(--text-muted)">Strategic Entry: ₹9–15 Lakh Mid-Range</text>
        </svg>
      </div>
    `;
  }

  if (proj.id === 'kpi-systems' || proj.id === 'gc-kpi-redesign') {
    return `
      <div class="card-preview-chart">
        <div class="card-chart-title">
          <span>3-Gen Model Architecture</span>
          <span class="badge-pill">+60% Output</span>
        </div>
        <svg viewBox="0 0 260 54">
          <rect x="6" y="8" width="62" height="20" rx="3" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
          <text x="37" y="21" font-family="IBM Plex Mono" font-size="7.5" fill="var(--text-muted)" text-anchor="middle">V1 Count</text>
          <text x="73" y="21" font-family="IBM Plex Mono" font-size="9" fill="var(--border-medium)">➔</text>
          
          <rect x="88" y="8" width="62" height="20" rx="3" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
          <text x="119" y="21" font-family="IBM Plex Mono" font-size="7.5" fill="var(--text-muted)" text-anchor="middle">V2 Ratios</text>
          <text x="155" y="21" font-family="IBM Plex Mono" font-size="9" fill="var(--border-medium)">➔</text>
          
          <rect x="170" y="8" width="82" height="20" rx="3" fill="var(--accent)"/>
          <text x="211" y="21" font-family="IBM Plex Mono" font-size="7.5" fill="#FFF" text-anchor="middle" font-weight="bold">V3 Gamified</text>
          
          <text x="130" y="45" font-family="IBM Plex Mono" font-size="7.5" fill="var(--accent)" text-anchor="middle">Score = 5A + 2B − 6C + 10D − 4E</text>
        </svg>
      </div>
    `;
  }

  if (proj.id === 'pm-course' || proj.id === 'gc-product-line') {
    return `
      <div class="card-preview-chart">
        <div class="card-chart-title">
          <span>Q1 Revenue Stream Mix</span>
          <span class="badge-pill">₹3,00,000</span>
        </div>
        <svg viewBox="0 0 260 54">
          <rect x="15" y="8" width="168" height="12" rx="2" fill="var(--accent)"/>
          <rect x="187" y="8" width="48" height="12" rx="2" fill="#3B82F6"/>
          <text x="15" y="32" font-family="IBM Plex Mono" font-size="7.5" fill="var(--accent)">4 Expert Courses (₹2.5L)</text>
          <text x="245" y="32" font-family="IBM Plex Mono" font-size="7.5" fill="#3B82F6" text-anchor="end">PM Cohort (₹50k)</text>
          <text x="130" y="47" font-family="IBM Plex Mono" font-size="7.5" fill="var(--text-muted)" text-anchor="middle">100+ Students Enrolled · 85% Completion</text>
        </svg>
      </div>
    `;
  }

  if (proj.id === 'time-motion-study' || proj.id === 'gyasiram-retail') {
    return `
      <div class="card-preview-chart">
        <div class="card-chart-title">
          <span>Floor Time-Motion Study</span>
          <span class="badge-pill">-38% TAT</span>
        </div>
        <svg viewBox="0 0 260 54">
          <text x="15" y="15" font-family="IBM Plex Mono" font-size="8" fill="var(--text-muted)">TAT/Cust:</text>
          <rect x="75" y="7" width="90" height="9" rx="2" fill="var(--border-medium)"/>
          <rect x="75" y="7" width="56" height="9" rx="2" fill="var(--accent)"/>
          <text x="175" y="15" font-family="IBM Plex Mono" font-size="8" fill="var(--accent)" font-weight="bold">20m ➔ 12.5m</text>
          
          <text x="15" y="31" font-family="IBM Plex Mono" font-size="8" fill="var(--text-muted)">Basket Size:</text>
          <rect x="75" y="23" width="90" height="9" rx="2" fill="var(--border-medium)"/>
          <rect x="75" y="23" width="75" height="9" rx="2" fill="var(--success)"/>
          <text x="175" y="31" font-family="IBM Plex Mono" font-size="8" fill="var(--success)" font-weight="bold">2.5 ➔ 4.5 items</text>
          
          <text x="130" y="47" font-family="IBM Plex Mono" font-size="7" fill="var(--text-muted)" text-anchor="middle">50-SKU Line · Zero Monsoon Stockout</text>
        </svg>
      </div>
    `;
  }

  if (proj.id === 'godrej' || proj.id === 'godrej-financial') {
    return `
      <div class="card-preview-chart">
        <div class="card-chart-title">
          <span>DuPont ROE Multipliers</span>
          <span class="badge-pill">18.8% ROE</span>
        </div>
        <svg viewBox="0 0 260 54">
          <rect x="10" y="6" width="65" height="22" rx="3" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
          <text x="42" y="17" font-family="IBM Plex Mono" font-size="7" fill="var(--text-muted)" text-anchor="middle">NPM</text>
          <text x="42" y="25" font-family="IBM Plex Mono" font-size="8" fill="var(--text-primary)" text-anchor="middle" font-weight="bold">21.1%</text>

          <text x="81" y="20" font-family="IBM Plex Mono" font-size="9" fill="var(--text-muted)">×</text>

          <rect x="91" y="6" width="65" height="22" rx="3" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
          <text x="123" y="17" font-family="IBM Plex Mono" font-size="7" fill="var(--text-muted)" text-anchor="middle">TAT</text>
          <text x="123" y="25" font-family="IBM Plex Mono" font-size="8" fill="var(--text-primary)" text-anchor="middle" font-weight="bold">0.79x</text>

          <text x="162" y="20" font-family="IBM Plex Mono" font-size="9" fill="var(--text-muted)">×</text>

          <rect x="172" y="6" width="68" height="22" rx="3" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
          <text x="206" y="17" font-family="IBM Plex Mono" font-size="7" fill="var(--text-muted)" text-anchor="middle">Equity Mult</text>
          <text x="206" y="25" font-family="IBM Plex Mono" font-size="8" fill="var(--success)" text-anchor="middle" font-weight="bold">1.13x</text>

          <text x="130" y="45" font-family="IBM Plex Mono" font-size="7.5" fill="var(--success)" text-anchor="middle">Zero Long-Term Debt (0.00x D/E)</text>
        </svg>
      </div>
    `;
  }

  if (proj.id === 'ambulance-routing') {
    return `
      <div class="card-preview-chart">
        <div class="card-chart-title">
          <span>Dijkstra Shortest Path</span>
          <span class="badge-pill">-10% Turnaround</span>
        </div>
        <svg viewBox="0 0 260 54">
          <text x="15" y="15" font-family="IBM Plex Mono" font-size="8" fill="var(--text-muted)">Habitual:</text>
          <rect x="68" y="7" width="120" height="9" rx="2" fill="#64748B"/>
          <text x="194" y="15" font-family="IBM Plex Mono" font-size="8" fill="var(--text-muted)">20 mins</text>

          <text x="15" y="30" font-family="IBM Plex Mono" font-size="8" fill="var(--accent)" font-weight="bold">Dijkstra:</text>
          <rect x="68" y="22" width="108" height="9" rx="2" fill="var(--accent)"/>
          <text x="182" y="30" font-family="IBM Plex Mono" font-size="8" fill="var(--accent)" font-weight="bold">18 mins (-10%)</text>

          <text x="130" y="47" font-family="IBM Plex Mono" font-size="7" fill="var(--success)" text-anchor="middle">Saves 2 mins per round trip in Golden Hour</text>
        </svg>
      </div>
    `;
  }

  if (proj.id === 'daikoku' || proj.id === 'daikoku-incubation') {
    return `
      <div class="card-preview-chart">
        <div class="card-chart-title">
          <span>Outbound B2B Pipeline</span>
          <span class="badge-pill">62% Meetings</span>
        </div>
        <svg viewBox="0 0 260 54">
          <rect x="20" y="8" width="200" height="7" rx="2" fill="var(--border-medium)"/>
          <rect x="20" y="8" width="124" height="7" rx="2" fill="var(--accent)"/>
          <text x="20" y="27" font-family="IBM Plex Mono" font-size="7.5" fill="var(--text-secondary)">21 Startups Contacted ➔ 13 Meetings (62%)</text>
          <text x="20" y="40" font-family="IBM Plex Mono" font-size="7.5" fill="var(--success)">₹23,000 Early Revenue · AIC SNU Incubated</text>
          <text x="20" y="50" font-family="IBM Plex Mono" font-size="7.5" fill="var(--text-muted)">'Swipe Mode' Verification Architecture</text>
        </svg>
      </div>
    `;
  }

  if (proj.id === 'market-research' || proj.id === 'gc-market-research') {
    return `
      <div class="card-preview-chart">
        <div class="card-chart-title">
          <span>CPM Task Scheduling</span>
          <span class="badge-pill">-50% Cycle Time</span>
        </div>
        <svg viewBox="0 0 260 54">
          <text x="15" y="15" font-family="IBM Plex Mono" font-size="8" fill="var(--text-muted)">Planned:</text>
          <rect x="65" y="7" width="130" height="9" rx="2" fill="var(--border-medium)"/>
          <text x="202" y="15" font-family="IBM Plex Mono" font-size="8" fill="var(--text-muted)">6 Weeks</text>

          <text x="15" y="30" font-family="IBM Plex Mono" font-size="8" fill="var(--accent)" font-weight="bold">Delivered:</text>
          <rect x="65" y="22" width="65" height="9" rx="2" fill="var(--accent)"/>
          <text x="136" y="30" font-family="IBM Plex Mono" font-size="8" fill="var(--accent)" font-weight="bold">3 Weeks (-50%)</text>

          <text x="130" y="47" font-family="IBM Plex Mono" font-size="7" fill="var(--text-muted)" text-anchor="middle">250+ Competitor Platforms Mapped Across 7 Interns</text>
        </svg>
      </div>
    `;
  }

  if (proj.id === 'campus-recruitment' || proj.id === 'gc-campus-recruitment') {
    return `
      <div class="card-preview-chart">
        <div class="card-chart-title">
          <span>Recruitment Funnel</span>
          <span class="badge-pill">33% Conversion</span>
        </div>
        <svg viewBox="0 0 260 54">
          <rect x="20" y="8" width="210" height="7" rx="2" fill="var(--border-medium)"/>
          <rect x="20" y="8" width="69" height="7" rx="2" fill="var(--accent)"/>
          <text x="20" y="27" font-family="IBM Plex Mono" font-size="7.5" fill="var(--text-secondary)">100+ Applicants ➔ 30+ Interviewed ➔ 12 Interns</text>
          <text x="20" y="40" font-family="IBM Plex Mono" font-size="7.5" fill="var(--success)">4 of 12 Converted to Part-Time (33%)</text>
          <text x="20" y="50" font-family="IBM Plex Mono" font-size="7.5" fill="var(--text-muted)">6 Campus Partnerships: DTU, IIM Rohtak, KMC</text>
        </svg>
      </div>
    `;
  }

  return '';
}

// 6. Interactive Filters & Real-Time Search
function initFiltersAndSearch() {
  const pills = document.querySelectorAll('.filter-pill');
  const searchInput = document.getElementById('projectSearch');
  const countBadge = document.getElementById('projectCountBadge');

  let currentCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    const rawQ = searchQuery.toLowerCase().trim();
    // Normalize alphanumeric query (e.g. 'power bi' -> 'powerbi', 'time-motion' -> 'timemotion')
    const cleanQ = rawQ.replace(/[^a-z0-9]/g, '');

    const filtered = caseStudies.filter(proj => {
      const matchesCategory = currentCategory === 'all' || 
        (currentCategory === 'strategy' && proj.category === 'strategy') ||
        (currentCategory === 'ops' && proj.category === 'ops') ||
        (currentCategory === 'impact' && (proj.impactBadge.includes('Top') || proj.impactBadge.includes('₹') || proj.impactBadge.includes('60%') || proj.impactBadge.includes('Round 1')));

      if (!rawQ) return matchesCategory;

      // Direct text matching
      const inTitle = proj.title.toLowerCase().includes(rawQ);
      const inTag = proj.tag.toLowerCase().includes(rawQ);
      const inOneLiner = proj.oneLiner.toLowerCase().includes(rawQ);
      const inProblem = proj.problem.toLowerCase().includes(rawQ);
      const inApproach = proj.approach.toLowerCase().includes(rawQ);
      const inOutcome = proj.outcome.toLowerCase().includes(rawQ);
      const inImpact = proj.impactBadge.toLowerCase().includes(rawQ);

      // Search inside tags array (both exact substring and normalized alphanumeric)
      const inTags = proj.tags && proj.tags.some(t => {
        const lower = t.toLowerCase();
        return lower.includes(rawQ) || (cleanQ.length >= 2 && lower.replace(/[^a-z0-9]/g, '').includes(cleanQ));
      });

      // Search inside tools array
      const inTools = proj.tools && proj.tools.some(t => {
        const lower = t.toLowerCase();
        return lower.includes(rawQ) || (cleanQ.length >= 2 && lower.replace(/[^a-z0-9]/g, '').includes(cleanQ));
      });

      // Recruiter & Domain alias map
      let aliasMatch = false;
      if (cleanQ === 'powerbi' || cleanQ === 'pbi' || cleanQ === 'bi' || cleanQ === 'businessintelligence' || cleanQ === 'dashboard' || cleanQ === 'dashboards') {
        aliasMatch = ['kpi-systems', 'xcelerate', 'godrej'].includes(proj.id);
      } else if (cleanQ === 'sql' || cleanQ === 'database' || cleanQ === 'mysql') {
        aliasMatch = ['ambulance-routing', 'kpi-systems'].includes(proj.id);
      } else if (cleanQ === 'python' || cleanQ === 'coding' || cleanQ === 'algorithm' || cleanQ === 'algorithms') {
        aliasMatch = ['ambulance-routing'].includes(proj.id);
      } else if (cleanQ === 'figma' || cleanQ === 'ui' || cleanQ === 'ux' || cleanQ === 'wireframe' || cleanQ === 'wireframes' || cleanQ === 'design') {
        aliasMatch = ['daikoku', 'pm-course'].includes(proj.id);
      } else if (cleanQ === 'notion' || cleanQ === 'jira' || cleanQ === 'agile' || cleanQ === 'scrum' || cleanQ === 'sprint') {
        aliasMatch = ['pm-course', 'daikoku', 'market-research'].includes(proj.id);
      } else if (cleanQ === 'consulting' || cleanQ === 'bain' || cleanQ === 'mckinsey' || cleanQ === 'bcg' || cleanQ === 'case') {
        aliasMatch = ['fluorco', 'xcelerate', 'godrej'].includes(proj.id);
      } else if (cleanQ === 'pm' || cleanQ === 'product' || cleanQ === 'apm' || cleanQ === 'productmanager') {
        aliasMatch = ['pm-course', 'daikoku', 'kpi-systems'].includes(proj.id);
      } else if (cleanQ === 'finance' || cleanQ === 'financial' || cleanQ === 'accounting' || cleanQ === 'roe' || cleanQ === 'equity' || cleanQ === 'fmcg') {
        aliasMatch = ['godrej', 'fluorco'].includes(proj.id);
      } else if (cleanQ === 'hr' || cleanQ === 'talent' || cleanQ === 'recruitment' || cleanQ === 'hiring' || cleanQ === 'people') {
        aliasMatch = ['campus-recruitment', 'kpi-systems', 'daikoku'].includes(proj.id);
      } else if (cleanQ === 'ops' || cleanQ === 'operations' || cleanQ === 'supplychain' || cleanQ === 'logistics' || cleanQ === 'lean') {
        aliasMatch = ['time-motion-study', 'kpi-systems', 'ambulance-routing', 'fluorco'].includes(proj.id);
      } else if (cleanQ === 'ev' || cleanQ === 'automotive' || cleanQ === 'cars' || cleanQ === 'maruti' || cleanQ === 'tata') {
        aliasMatch = ['xcelerate'].includes(proj.id);
      } else if (cleanQ === 'founder' || cleanQ === 'startup' || cleanQ === '0to1' || cleanQ === 'b2b') {
        aliasMatch = ['daikoku', 'kpi-systems'].includes(proj.id);
      }

      const matchesSearch = inTitle || inTag || inOneLiner || inProblem || inApproach || inOutcome || inImpact || inTags || inTools || aliasMatch;

      return matchesCategory && matchesSearch;
    });

    renderProjects(filtered);
    renderRecruiterScan(filtered);
    if (countBadge) {
      countBadge.textContent = `${filtered.length} shown`;
    }
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      applyFilters();
    });
  }
}

// 7. Interactive Modal / Drawer Reader
let currentModalId = null;

function initModal() {
  const overlay = document.getElementById('caseStudyModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const shareBtn = document.getElementById('modalShareBtn');

  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      if (!currentModalId) return;
      const shareUrl = `${window.location.origin}${window.location.pathname}#${currentModalId}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast(`Direct link copied: #${currentModalId}`);
        }).catch(() => {
          fallbackCopyText(shareUrl);
        });
      } else {
        fallbackCopyText(shareUrl);
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function fallbackCopyText(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showToast(`Direct link copied: #${currentModalId}`);
  } catch (err) {
    showToast('Direct link ready in URL bar');
  }
  document.body.removeChild(ta);
}

window.openCaseStudyModal = function(id) {
  const project = caseStudies.find(p => p.id === id);
  if (!project) return;
  currentModalId = id;

  // Deep linking URL state update
  try {
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', '#' + id);
    } else {
      window.location.hash = id;
    }
  } catch (err) {
    // Ignore iframe permission warnings
  }

  const overlay = document.getElementById('caseStudyModal');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalOneLiner = document.getElementById('modalOneLiner');
  const modalProblem = document.getElementById('modalProblem');
  const modalApproach = document.getElementById('modalApproach');
  const modalOutcome = document.getElementById('modalOutcome');
  const modalExhibit = document.getElementById('modalExhibit');
  const modalStats = document.getElementById('modalStats');
  const modalDriveLink = document.getElementById('modalDriveLink');
  const modalTools = document.getElementById('modalTools');

  if (modalTag) modalTag.textContent = project.tag;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalOneLiner) modalOneLiner.textContent = project.oneLiner;
  if (modalProblem) modalProblem.textContent = project.problem;
  if (modalApproach) modalApproach.textContent = project.approach;
  if (modalOutcome) modalOutcome.textContent = project.outcome;
  if (modalExhibit) modalExhibit.innerHTML = project.exhibit;

  if (modalTools) {
    if (project.tools && project.tools.length) {
      modalTools.innerHTML = project.tools.map(t => `
        <span class="mono" style="font-size: 0.75rem; padding: 3px 8px; border-radius: 4px; background: var(--bg-canvas); border: 1px solid var(--border-medium); color: var(--accent); font-weight: 600;">
          ${t}
        </span>
      `).join('');
      modalTools.style.display = 'flex';
    } else {
      modalTools.innerHTML = '';
      modalTools.style.display = 'none';
    }
  }

  if (modalStats) {
    modalStats.innerHTML = project.metrics.map(m => `
      <div class="modal-stat-box">
        <div class="modal-stat-num">${m.num}</div>
        <div class="modal-stat-label">${m.label}</div>
      </div>
    `).join('');
  }

  if (modalDriveLink) {
    modalDriveLink.href = project.driveUrl;
  }

  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

function closeModal() {
  const overlay = document.getElementById('caseStudyModal');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (currentModalId) {
    const rawHash = window.location.hash.replace(/^#(project=)?/, '');
    if (rawHash === currentModalId) {
      try {
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        } else {
          window.location.hash = '';
        }
      } catch (err) {}
    }
  }
  currentModalId = null;
}

// 8. Animated Metrics Counter on Scroll
function initMetricsAnimation() {
  const ledger = document.querySelector('.metrics-ledger');
  if (!ledger) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateMetricValues();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  observer.observe(ledger);
}

function animateMetricValues() {
  const items = document.querySelectorAll('.ledger-metric');
  items.forEach(item => {
    const type = item.getAttribute('data-type');
    if (!type) return;

    const duration = 1200;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);

      if (type === 'range') {
        const from = parseInt(item.getAttribute('data-from') || '20', 10);
        const to = parseInt(item.getAttribute('data-to') || '200', 10);
        const currentTo = Math.round(from + (to - from) * ease);
        item.textContent = `${from}→${currentTo}+`;
      } else if (type === 'percent') {
        const to = parseInt(item.getAttribute('data-to') || '100', 10);
        const current = Math.round(to * ease);
        item.textContent = `${current}%`;
      } else if (type === 'currency') {
        const to = parseInt(item.getAttribute('data-to') || '300000', 10);
        const current = Math.round(to * ease);
        item.textContent = `₹${current.toLocaleString('en-IN')}`;
      } else if (type === 'standing') {
        const to = parseFloat(item.getAttribute('data-to') || '1.5');
        const start = 10.0;
        const current = (start - (start - to) * ease).toFixed(1);
        item.textContent = `Top ${current}%`;
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

// 8b. Card Spotlight Mouse Tracking
function initCardSpotlight() {
  document.addEventListener('mousemove', (e) => {
    const hoveredCard = e.target.closest('.project-card');
    if (hoveredCard) {
      const rect = hoveredCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      hoveredCard.style.setProperty('--mouse-x', `${x}px`);
      hoveredCard.style.setProperty('--mouse-y', `${y}px`);
    }
  });
}

// 9. Active Scroll-Spy for Navigation
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

// 10. Instant 1-Click Copy Email Action with Toast
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('.js-copy-email');
  const toast = document.getElementById('toast');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = 'kshitiz.gupta333@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard!`);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  if (toast && toastMsg) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

// 11. Interactive Exhibit Showcase, View Switcher & Live KPI Simulator
function initExhibitShowcase() {
  const viewCardsBtn = document.getElementById('viewCardsBtn');
  const viewExhibitsBtn = document.getElementById('viewExhibitsBtn');
  const viewRecruiterBtn = document.getElementById('viewRecruiterBtn');
  const projectsGrid = document.getElementById('projectsContainer') || document.getElementById('projectsGrid');
  const exhibitsContainer = document.getElementById('exhibitsShowcaseContainer');
  const recruiterContainer = document.getElementById('recruiterScanContainer');
  const exhibitTabs = document.querySelectorAll('.exhibit-tab-btn');
  const exhibitPanes = document.querySelectorAll('.exhibit-content-pane');
  const frameworkCards = document.querySelectorAll('.framework-card');

  const exhibitsCardsDivider = document.getElementById('exhibitsCardsDivider');
  const closeExhibitsBtn = document.getElementById('closeExhibitsBtn');

  function switchView(mode) {
    if (mode === 'exhibits') {
      if (viewExhibitsBtn) viewExhibitsBtn.classList.add('active');
      if (viewCardsBtn) viewCardsBtn.classList.remove('active');
      if (viewRecruiterBtn) viewRecruiterBtn.classList.remove('active');
      // Exhibits opened above cards; cards DO NOT vanish
      if (projectsGrid) projectsGrid.style.display = '';
      if (exhibitsContainer) exhibitsContainer.style.display = 'block';
      if (recruiterContainer) recruiterContainer.style.display = 'none';
      if (exhibitsCardsDivider) exhibitsCardsDivider.style.display = 'flex';
    } else if (mode === 'recruiter') {
      if (viewRecruiterBtn) viewRecruiterBtn.classList.add('active');
      if (viewCardsBtn) viewCardsBtn.classList.remove('active');
      if (viewExhibitsBtn) viewExhibitsBtn.classList.remove('active');
      if (projectsGrid) projectsGrid.style.display = 'none';
      if (exhibitsContainer) exhibitsContainer.style.display = 'none';
      if (recruiterContainer) recruiterContainer.style.display = 'flex';
      if (exhibitsCardsDivider) exhibitsCardsDivider.style.display = 'none';
    } else {
      if (viewCardsBtn) viewCardsBtn.classList.add('active');
      if (viewExhibitsBtn) viewExhibitsBtn.classList.remove('active');
      if (viewRecruiterBtn) viewRecruiterBtn.classList.remove('active');
      if (projectsGrid) projectsGrid.style.display = '';
      if (exhibitsContainer) exhibitsContainer.style.display = 'none';
      if (recruiterContainer) recruiterContainer.style.display = 'none';
      if (exhibitsCardsDivider) exhibitsCardsDivider.style.display = 'none';
    }
  }

  if (viewCardsBtn) {
    viewCardsBtn.addEventListener('click', () => switchView('cards'));
  }
  if (viewExhibitsBtn) {
    viewExhibitsBtn.addEventListener('click', () => {
      switchView('exhibits');
      if (exhibitsContainer) {
        exhibitsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
  if (viewRecruiterBtn) {
    viewRecruiterBtn.addEventListener('click', () => switchView('recruiter'));
  }
  if (closeExhibitsBtn) {
    closeExhibitsBtn.addEventListener('click', () => {
      switchView('cards');
      const section = document.getElementById('projects');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
  }

  window.switchView = switchView;

  // Exhibit Tabs Switching
  function activateExhibitTab(exhibitId) {
    exhibitTabs.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.exhibit === exhibitId);
    });
    exhibitPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === `exhibit-${exhibitId}`);
    });
  }

  window.activateExhibitTab = activateExhibitTab;

  exhibitTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const exhibitId = tab.dataset.exhibit;
      activateExhibitTab(exhibitId);
    });
  });

  // Framework card click-through to exhibit deep-dive (keeps cards visible below)
  const frameworkMap = ['bain', 'kpi', 'dupont', 'dijkstra'];
  frameworkCards.forEach((card, idx) => {
    card.style.cursor = 'pointer';
    card.title = 'Click to open interactive model exhibit above case studies';
    card.addEventListener('click', () => {
      const targetExhibit = frameworkMap[idx] || 'bain';
      switchView('exhibits');
      activateExhibitTab(targetExhibit);
      if (exhibitsContainer) {
        exhibitsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Live KPI Equation Simulator (Growth Central VC)
  // Equation: Total Score = 5A + 2B − 6C + 10D − 4E
  const sliderA = document.getElementById('kpi-slider-a');
  const sliderB = document.getElementById('kpi-slider-b');
  const sliderC = document.getElementById('kpi-slider-c');
  const sliderD = document.getElementById('kpi-slider-d');
  const sliderE = document.getElementById('kpi-slider-e');

  const valA = document.getElementById('kpi-val-a');
  const valB = document.getElementById('kpi-val-b');
  const valC = document.getElementById('kpi-val-c');
  const valD = document.getElementById('kpi-val-d');
  const valE = document.getElementById('kpi-val-e');

  const calcScoreEl = document.getElementById('kpiCalculatedScore');
  const scoreBandEl = document.getElementById('kpiScoreBand');

  function updateKpiSimulator() {
    if (!sliderA || !sliderB || !sliderC || !sliderD || !sliderE) return;

    const a = parseInt(sliderA.value, 10);
    const b = parseInt(sliderB.value, 10);
    const c = parseInt(sliderC.value, 10);
    const d = parseInt(sliderD.value, 10);
    const e = parseInt(sliderE.value, 10);

    if (valA) valA.textContent = a;
    if (valB) valB.textContent = b;
    if (valC) valC.textContent = c;
    if (valD) valD.textContent = d;
    if (valE) valE.textContent = e;

    const total = (5 * a) + (2 * b) - (6 * c) + (10 * d) - (4 * e);

    if (calcScoreEl) {
      calcScoreEl.textContent = total;
    }

    if (scoreBandEl) {
      if (total >= 650) {
        scoreBandEl.className = 'kpi-score-badge score-high';
        scoreBandEl.textContent = 'Target Tier: High Performer (650+)';
      } else if (total >= 520) {
        scoreBandEl.className = 'kpi-score-badge score-good';
        scoreBandEl.textContent = 'Target Tier: Good (520–649)';
      } else if (total >= 380) {
        scoreBandEl.className = 'kpi-score-badge score-mid';
        scoreBandEl.textContent = 'Target Tier: Acceptable (380–519)';
      } else {
        scoreBandEl.className = 'kpi-score-badge score-low';
        scoreBandEl.textContent = 'Target Tier: Needs Review (< 380)';
      }
    }
  }

  [sliderA, sliderB, sliderC, sliderD, sliderE].forEach(slider => {
    if (slider) {
      slider.addEventListener('input', updateKpiSimulator);
    }
  });

  updateKpiSimulator();
}

// 12. Deep Linking and URL State Management
function handleDeepLink() {
  const hash = window.location.hash;
  if (!hash || hash === '#' || hash === '#home') return;

  const raw = hash.replace(/^#/, '');
  const cleanId = decodeURIComponent(raw.replace(/^project=/, '')).trim();

  // 1. Recruiter View deep link (#recruiter, #quickscan, #resume)
  if (['recruiter', 'recruiter-view', 'quickscan', 'resume'].includes(cleanId)) {
    if (window.switchView) window.switchView('recruiter');
    const projectsSec = document.getElementById('projects');
    if (projectsSec) projectsSec.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // 2. Interactive Exhibit Tabs deep link
  const exhibitMap = {
    'exhibits': 'bain',
    'exhibit': 'bain',
    'exhibit-bain': 'bain',
    'bain': 'bain',
    'fluorco-model': 'bain',
    'exhibit-kpi': 'kpi',
    'kpi': 'kpi',
    'kpi-simulator': 'kpi',
    'simulator': 'kpi',
    'exhibit-dupont': 'dupont',
    'dupont': 'dupont',
    'dupont-model': 'dupont',
    'exhibit-dijkstra': 'dijkstra',
    'dijkstra': 'dijkstra',
    'dijkstra-model': 'dijkstra',
    'exhibit-maruti': 'maruti',
    'maruti-ev': 'maruti',
    'maruti': 'maruti'
  };

  if (exhibitMap[cleanId]) {
    if (window.switchView) window.switchView('exhibits');
    if (window.activateExhibitTab) window.activateExhibitTab(exhibitMap[cleanId]);
    const projectsSec = document.getElementById('projects');
    if (projectsSec) projectsSec.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // 3. Project Case Study Modal deep link (#kpi-systems, #xcelerate, #pm-course, etc.)
  const targetProject = caseStudies.find(p => p.id === cleanId);
  if (targetProject) {
    window.openCaseStudyModal(cleanId);
    return;
  }

  // 4. Standard in-page section scrolling (#projects, #experience, #skills, #contact, etc.)
  const targetEl = document.getElementById(cleanId);
  if (targetEl) {
    targetEl.scrollIntoView({ behavior: 'smooth' });
  }
}
