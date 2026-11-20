/**
 * Central Portfolio Data for Kshitiz Gupta
 * Extracted directly from official Drive folder artifacts:
 * 1) GCVC KPI Dashboards (BRD, 13 stories, 22 UAT cases, PostgreSQL, Power BI)
 * 2) GCVC Product Launch (4 expert courses + cohort PM program, ₹3L revenue)
 * 3) GRS Forecasting Model (Demand vs Capacity limit, 96k unmet bottleneck, 2.1% MAPE validation)
 * 4) Maruti Suzuki XCELerate (National Top 10 B-School, 51k+ registrants, EV entry strategy)
 * 5) Daikoku (Incubated at AIC SNU, 53 survey size, 13/21 B2B meetings, ₹23k revenue)
 * 6) BrAINWARS (FluorCo 4 root causes, queuing utilization model U=64%->90%)
 * 7) GCVC Campus Recruitment (5 campus partnerships, 100+ sourced, 15 onboarded, 33% conversion)
 * 8) GCVC Market Research (200+ competitor study in 3 weeks via CPM, Coursera/Udemy/edX benchmark)
 * 9) Ambulance Routing Model (DOM208 Operations Research, Dijkstra shortest path, 2m roundtrip saved)
 * 10) Godrej Financial Performance (11-year review FY12-FY22, 3-Step DuPont ROE, 2-year forecast)
 */

export interface ProjectDetail {
  id: string;
  order: number;
  title: string;
  shortTitle: string;
  clientOrOrg: string;
  category: 'Strategy & Operations' | 'Analytics & Modeling' | 'Product & Consulting';
  period: string;
  role: string;
  tagline: string;
  impactMetrics: { label: string; value: string }[];
  overview: string;
  problem: string;
  solution: string;
  keyTakeaways: string[];
  toolsUsed: string[];
  pdfAssetPath?: string;
  driveUrl?: string;
  images?: { title: string; src: string; caption: string }[];
  hasUatData?: boolean;
}

export const PERSONAL_INFO = {
  name: "Kshitiz Gupta",
  role: "Quantitative Strategy, Operations & Analytics",
  tagline: "Bridging analytical rigor, operational mechanics, and strategic growth",
  bio: "Engineering graduate (B.Tech in Electronics and Communication with a Minor in Management Studies from Shiv Nadar University) with hands-on experience in business requirements documentation (BRD), workflow automation, quantitative modeling, and process optimization. Scaled operations 10x at an early-stage VC, managed retail supply chain operations, and developed AML compliance workflows at Genpact.",
  email: "kshitiz.gupta333@gmail.com",
  phone: "+91 8800236727",
  location: "Delhi NCR, India",
  github: "https://github.com/kshitiz-gupta02",
  githubPagesUrl: "https://kshitiz-gupta02.github.io/Portfolio/",
  linkedin: "https://www.linkedin.com/in/kshitiz-gupta02/",
  codechef: "https://www.codechef.com/users/kshitiz_2002",
  resumePath: "./assets/aistudio/Resume_Business_Analyst_9194b217.pdf"
};

export const HEADLINE_METRICS = [
  {
    value: "20 → 200+",
    label: "Team Scaling (10x)",
    context: "Built & scaled 5 cross-functional ops teams at Growth Central VC"
  },
  {
    value: "Top 10",
    label: "National Finalist",
    context: "Maruti Suzuki XCELerate '23 B-School track (51,866 registrants)"
  },
  {
    value: "22 UAT Cases",
    label: "Rigorous QA Lifecycle",
    context: "Zero defect leak to production across 5 epics & 13 user stories"
  },
  {
    value: "₹3,00,000",
    label: "Product Line Revenue",
    context: "Q1 revenue generated from 4 expert-led courses + cohort PM program"
  }
];

// Skills categorized cleanly without proficiency labels (no Expert, Advanced, etc.)
export const SKILL_CATEGORIES = [
  {
    category: "Analytics & Modeling",
    description: "Translating ambiguous operational problems into structured mathematical models, forecasting engines, and executive dashboards.",
    skills: [
      { name: "Power BI & DAX", detail: "Star Schema Modeling, Time-Intelligence Measures, Power Query M-Engine, Custom Trend Filters" },
      { name: "PostgreSQL & DBeaver", detail: "DDL/DML, CHECK and UNIQUE Integrity Constraints, Staging & Upsert Import Pipelines" },
      { name: "Financial & Ratio Modeling", detail: "3-Step DuPont ROE Decomposition, Horizontal & Vertical Common-Size, 2-Year Forward Forecasting" },
      { name: "Operations Research", detail: "Dijkstra's Shortest Path Algorithm, Queuing Theory (Little's Law, Utilization M/M/1), Network Optimization" },
      { name: "Advanced Excel", detail: "XLOOKUP, Dynamic Array Formulas, Data Validation Rules, Pivot Reporting, Scenario Modeling" }
    ]
  },
  {
    category: "Strategy & Operations",
    description: "Designing resilient operational architectures, mapping cross-functional workflows, and eliminating process bottlenecks.",
    skills: [
      { name: "Business Analysis (BRD / SRS)", detail: "Formal BRD Authoring, 13 User Stories with Given/When/Then Acceptance Criteria, Scope Baselines" },
      { name: "Process Flow & System Architecture", detail: "As-Is & To-Be Flowcharts, Swimlane Diagrams, ERD Schemas (MS Visio, draw.io)" },
      { name: "Capacity & Bottleneck Planning", detail: "Throughput Analysis, Workstation Balancing, Time-and-Motion Studies, Stockout Prevention" },
      { name: "Workflow Automation", detail: "Power Automate Cloud Flows, Risk-Trigger Alert Prioritization, Microsoft Copilot SAR Prompts" },
      { name: "UAT & Defect Management", detail: "Requirements Traceability Matrix, Test Scenarios, Defect Logging, Root-Cause Analysis" }
    ]
  },
  {
    category: "Product & Consulting",
    description: "Driving end-to-end product lifecycle from competitor landscape mapping and market sizing to 0-to-1 go-to-market execution.",
    skills: [
      { name: "Market Sizing & Segmentation", detail: "2-Axis Consumer Psychography, Competitor Price-Segment Quadrants, Launchpad Scoring" },
      { name: "0-to-1 Venture Incubation", detail: "Co-founded Daikoku at SNU Atal Incubation Centre; converted 13 of 21 B2B startup meetings" },
      { name: "Agile Project Management", detail: "JIRA Scrum/Kanban Tracking, Confluence Documentation, Critical Path Method (CPM)" },
      { name: "Curriculum & Program Design", detail: "Designed and delivered 8-week Product Management cohort course with live management internships" },
      { name: "Executive Stakeholder Synthesis", detail: "Executive Presentation Decks (Bain BrAINWARS Round 2), C-Suite Cross-Functional Alignment" }
    ]
  }
];

// The exact 10 projects requested by the user, in exact order
export const FEATURED_PROJECTS: ProjectDetail[] = [
  {
    id: "gcvc-kpi-dashboards",
    order: 1,
    title: "Performance Management Redesign (KPI Dashboards)",
    shortTitle: "1. GCVC KPI Dashboards",
    clientOrOrg: "Growth Central VC",
    category: "Analytics & Modeling",
    period: "August 2021 – August 2022",
    role: "Core Team Member (Sole Owner of BA Lifecycle & Systems)",
    tagline: "Replaced an informal volume-based spreadsheet process with a validated PostgreSQL data pipeline, 13 user stories, and Power BI dashboards.",
    impactMetrics: [
      { label: "Team Scaling", value: "20 → 200+" },
      { label: "UAT Test Cases", value: "22 Run (20 Pass)" },
      { label: "Model Evolution", value: "3 Iterations" },
      { label: "Pipeline Delivery", value: "Full BA Lifecycle" }
    ],
    overview: "Spearheaded the complete requirements-to-dashboard lifecycle for Growth Central VC. Diagnosed why raw volume tracking (V1) incentivized low quality, and why recruiting productivity ratios (V2) sparked candidate hoarding. Built V3—a gamified scoring equation balancing sourcing effort against interview quality—and delivered a fully documented PostgreSQL to Power BI pipeline.",
    problem: "Recruitment performance was initially tracked by raw counts. When the founder requested productivity ratios (RP 50%, IP 60%), recruiters began arguing over candidate attribution before interviews took place, and sourcing effort was entirely uncredited. Weekly data arrived in inconsistent spreadsheets with no deduplication or historical trend analysis.",
    solution: "Authored formal BRD and 13 user stories with Given/When/Then acceptance criteria across 5 JIRA epics. Enforced Monday-only dates, shortlists capped between 20-60, and interview limits in Excel and PostgreSQL. Built a DBeaver upsert staging pipeline and an executive Power BI dashboard with team/group slicers and custom DAX time-intelligence.",
    keyTakeaways: [
      "Balanced competing operational needs: sourcing volume vs hiring rigor in a single unified formula: Total Score = 5A + 2B − 6C + 10D − 4E (where E = C − D).",
      "Caught and resolved 2 high-severity defects during UAT: DEF-01 (alphabetical MIN bug on status bands) and DEF-02 (inverted sign on negative WoW denominators).",
      "Created an enduring, reusable pipeline: any new team's weekly data can be staged and loaded into Power BI without rebuilding calculations."
    ],
    toolsUsed: ["Power BI", "DAX", "PostgreSQL", "DBeaver", "JIRA", "Confluence", "draw.io", "Excel Data Validation"],
    hasUatData: true,
    pdfAssetPath: "./assets/aistudio/Project_Summary_1782a50e.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1E0fjcqQyj1njvmEVz1gaQTCQxVTi6KXG?usp=sharing",
    images: [
      {
        title: "Power BI Dashboard (Full Multi-Team View)",
        src: "./assets/aistudio/dashboard_1_8f2358ff.webp",
        caption: "All-teams view showing 9-week score trajectories, status cards, and week-over-week trends."
      },
      {
        title: "JIRA Screenshot",
        src: "./assets/aistudio/JIRA_SS_8fe91682.webp",
        caption: "Live JIRA backlog showing 13 user stories across 5 epics (Weekly Data Capture to Handover)."
      },
      {
        title: "Group Slicer Drilldown 1",
        src: "./assets/aistudio/dashboard_2_cd63caec.webp",
        caption: "Apex Talent Solutions — group-level performance tracking for Candidate Relations, Lifecycle Recruitment, Performance Sourcing, and Talent Analytics."
      },
      {
        title: "Group Slicer Drilldown 2",
        src: "./assets/aistudio/dashboard_3_dbd1aac1.webp",
        caption: "Human Capital Partners — comparative group breakdown for Client Advisory and Workforce Planning tracking WoW momentum."
      },
      {
        title: "Group Slicer Drilldown 3",
        src: "./assets/aistudio/dashboard_4_12c813b8.webp",
        caption: "Enterprise Acquisition Group — Talent Pipelines drilldown resolving historical negative score inflection points."
      }
    ]
  },
  {
    id: "gcvc-product-launch",
    order: 2,
    title: "New Product Line Launch: Expert-Led Courses & PM Program",
    shortTitle: "2. GCVC Product Launch",
    clientOrOrg: "Growth Central VC",
    category: "Product & Consulting",
    period: "October 2021 – January 2022",
    role: "Core Team Member (Product Layout, Operations & Tech Platform)",
    tagline: "Led the build and launch of Growth Central VC's education product line: hired 4 industry experts and personally designed a flagship cohort PM program.",
    impactMetrics: [
      { label: "Q1 Course Revenue", value: "₹3,00,000" },
      { label: "Courses Launched", value: "5 Offerings" },
      { label: "Completion Rate", value: "85%" },
      { label: "Internship Conversion", value: "40%" }
    ],
    overview: "Tasked with building and launching an education product line from scratch. Structured 4 self-paced expert courses (Finance, Marketing, CS, Cyber Security) by onboarding domain veterans (10+ years experience). Concurrently designed, developed, and taught a live cohort-based 8-week Product Management program centered around a 6-week management internship.",
    problem: "Growth Central VC possessed only a single commercial product (skill assessment tests and certificates) and needed to expand its educational portfolio and revenue streams during an economic contraction without sacrificing quality.",
    solution: "Structured course formats, defined value propositions, and managed the technical delivery platform. Built an 8-week PM cohort structure: Weeks 1-2 on foundational theory, Weeks 2-7 live management internship where students led internal company teams, and Weeks 7-8 on executive case evaluations and metrics.",
    keyTakeaways: [
      "Generated ₹2,50,000 from 4 expert-led courses and ₹50,000 from the inaugural PM cohort in their first quarter live.",
      "Achieved an 85% course completion rate across self-paced programs, with enrollment expanding from 60+ to 100+ students within 6 months.",
      "40% of Product Management cohort completers transitioned into paid company internship placements, with several alumni securing top MBA admissions."
    ],
    toolsUsed: ["Curriculum Architecture", "Product Operations", "LMS Tech Platform", "Cohort Instruction", "Case-Based Pedagogy"],
    pdfAssetPath: "./assets/aistudio/Project_Summary_13c94e58.pdf",
    driveUrl: "https://drive.google.com/drive/folders/15ItsVQvv72Q8pxY_UCPCky_MAtwJQxsA?usp=sharing"
  },
  {
    id: "grs-forecasting-model",
    order: 3,
    title: "Forecasting Model & Capacity Bottleneck Analysis",
    shortTitle: "3. GRS Forecasting Model",
    clientOrOrg: "Gyasi Ram & Sons",
    category: "Analytics & Modeling",
    period: "July 2024 – April 2025",
    role: "Assistant Manager - Business Operations & Analytics",
    tagline: "Modeled 483k unit annual demand across 54 SKUs, diagnosed a 312% peak workstation bottleneck, and validated forecast accuracy at 2.1% MAPE.",
    impactMetrics: [
      { label: "Total 2025 Demand", value: "483,840 Units" },
      { label: "Manufacturing Limit", value: "394,230 Units" },
      { label: "Unmet Peak Demand", value: "96,070 Units (20%)" },
      { label: "Forecast MAPE", value: "2.1% (High Accuracy)" }
    ],
    overview: "Conducted a rigorous time-and-motion study and seasonal inventory analysis across 10 product categories. Built an Excel forecasting prototype to predict seasonal demand spikes, structuring supplier replenishment and floor workforce allocation to prevent order stockouts.",
    problem: "Severe seasonal demand surge in July–September (driven by monsoons and insect vector spikes) repeatedly caused stockouts. The store experienced customer wait times of 20+ minutes during peak season, while warehouse staff struggled with unorganized inventory.",
    solution: "Mapped the 3-workstation manufacturing pipeline: identified Measuring, Cutting & Singeing as the true bottleneck capped at 1,260 units/day (394k/year), facing 312% peak utilization in August. Validated Q1 forecast vs actual sales with only 2.1% MAPE and -1.8% bias across Single, Double, Queen, and King sizes. Restructured retail product education, cutting customer transaction time to 12-13 minutes.",
    keyTakeaways: [
      "Quantified 96,070 units of unmet demand (20% of 2025 demand) resulting in 3 consecutive months of stockout without overtime shifts.",
      "High forecasting accuracy: Q1 actual sales of 29,526 units vs forecast of 28,980 units (variance of only -546 units).",
      "Restructured store layout and buyer guide, increasing customer basket size from 2-3 to 4-5 products (+60%)."
    ],
    toolsUsed: ["Time-and-Motion Study", "Excel Forecasting Model", "Workstation Bottleneck Analysis", "Inventory Optimization", "MAPE / Bias Tracking"],
    pdfAssetPath: "./assets/aistudio/Model_Dashboard_1750c6f1.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1Cnw8zzNfQA4ox7DDNKdSU2cmAR72SbfE?usp=sharing",
    images: [
      {
        title: "Excel Model Dashboard — Demand, Capacity Limit & Bottleneck Analysis",
        src: "./assets/aistudio/Model_Dashboard_e03b9548.webp",
        caption: "2025 demand (483,840 units) vs. 394,230 annual manufacturing limit, isolating the Measuring, Cutting & Singeing bottleneck (312% peak August utilization) and 96,070 unmet units."
      },
      {
        title: "Excel Validation Dashboard — Q1 Forecast vs. Actual Sales (2.1% MAPE)",
        src: "./assets/aistudio/Validation_Dashboard_319caa70.webp",
        caption: "Q1 (Jan–Mar) forecast validation comparing 28,980 projected vs. 29,526 actual units across Single, Double, Queen, and King sizes (-1.8% bias, 2.1% MAPE)."
      }
    ]
  },
  {
    id: "maruti-suzuki-xcelerate",
    order: 4,
    title: "Electric Vehicle Market Entry Strategy & Infrastructure",
    shortTitle: "4. Maruti Suzuki Xcelerate",
    clientOrOrg: "Maruti Suzuki (XCELerate 2023)",
    category: "Strategy & Operations",
    period: "August – October 2023",
    role: "Semi-Finalist (Top 10 B-School Track)",
    tagline: "Engineered Maruti Suzuki's national EV entry strategy, charging density launchpad selection, and beyond-the-vehicle SaaS ecosystem.",
    impactMetrics: [
      { label: "National Standing", value: "Top 10 B-School" },
      { label: "Total Registrations", value: "51,866" },
      { label: "Rounds Cleared", value: "1, 2 & 3 of 4" },
      { label: "Target Segment", value: "₹9–15L Mid-Range" }
    ],
    overview: "National Semi-Finalist in Maruti Suzuki's flagship case competition. Engineered a comprehensive EV market-entry strategy balancing charging station density, battery economics, consumer psychography, and competitor positioning against first movers like Tata Motors.",
    problem: "Maruti Suzuki held dominant ~50% market share in ICE vehicles, but lacked an EV portfolio while competitors (Tata Motors, MG, Hyundai) captured early adopter mindshare amid government FAME-2 infrastructure pushes.",
    solution: "Evaluated state-by-state EV readiness using charging station density and EV-to-station ratios, isolating Karnataka (774 stations / 220.7 ratio) and Delhi (539 stations / 365.5 ratio) as optimal launchpads. Mapped 2-axis consumer psychography and proposed the 'Maruti Suzuki eBharat' campaign targeting ₹9–15L first-time buyers with retrofitting and home charging installations.",
    keyTakeaways: [
      "Competitor positioning quadrant: Tata Nexon EV (₹14L leader), MG ZS EV (₹21L), Hyundai Kona (₹24L), Tata Tigor EV (₹12L), and Mahindra eVerito (₹9L).",
      "Designed a 4-tier risk mitigation matrix addressing charging anxiety, high software R&D costs, and vehicle depreciation.",
      "Identified adjacent recurring revenue opportunities: ICE-to-EV retrofitting kits, battery health analytics, and vehicle-to-grid (V2G) fleet software."
    ],
    toolsUsed: ["Market Sizing", "Competitive Benchmarking", "Consumer Psychography", "Infrastructure Analytics", "Executive Deck Design"],
    pdfAssetPath: "./assets/aistudio/XCELerate_2023_Summary_0521346b.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1Y4JsfUDt3EnKaZFjGPqmZ8gyk8Yd7gOA?usp=sharing",
    images: [
      {
        title: "Round 2 Deck — Market Baseline, Supply Chain & Competitor Ecosystem",
        src: "./assets/aistudio/1_9d703c03.webp",
        caption: "Maps India's ICE vehicle mix (56.5% 4W, 25.7% 3W, 17.7% 2W), EV operating economics (₹1–3/km vs. ₹7–8/km petrol/diesel), Maruti Suzuki's supply chain (Nexa, True Value, Dealers, Service Centres), and OEM EV coverage."
      },
      {
        title: "Round 2 Deck — Cost Challenges, Auto Clusters & Survey Insights",
        src: "./assets/aistudio/2_2b686215.webp",
        caption: "Highlights EV software & charging capex challenges, carryover parts cost-reduction levers, India's four regional manufacturing clusters, FAME/Green Tax tailwinds, and Maruti vs. Tata/Toyota sentiment survey findings."
      },
      {
        title: "Round 2 Deck — SWOT Analysis",
        src: "./assets/aistudio/3_202ebd29.webp",
        caption: "Strategic SWOT assessing Maruti Suzuki's distribution scale and production efficiency against domestic dependence, scarce EV offerings, tech partnerships, and raw-material/supply-chain threats."
      },
      {
        title: "Round 2 Deck — EV Launch Timing Roadmap (2023–2025)",
        src: "./assets/aistudio/4_9f9bc28d.webp",
        caption: "Chronological macro-trigger roadmap balancing Tata's first-mover lead and near-term cyclical risks against FAME-2 infrastructure expansion, Pan-India charging buildout, and ICT penetration toward a 2025 launch."
      },
      {
        title: "Round 3 Deck — Consumer & Psychographic Segmentation",
        src: "./assets/aistudio/5_6945edd4.webp",
        caption: "Dual-axis buyer framework segmenting consumers across practical value drivers (fuel efficiency, affordability, sporty styling for singles) and family/status/adventure interior and ruggedness priorities."
      },
      {
        title: "Round 3 Deck — Price-Tier Targeting (Mid-Range Focus)",
        src: "./assets/aistudio/6_d4af7f9c.webp",
        caption: "Three-tier segmentation (Economy, Mid-Range, Premium) isolating Mid-Range hatchbacks and sedans for feature-conscious, first-time car buyers as the ideal EV entry sweet spot."
      },
      {
        title: "Round 3 Deck — Launchpad State Selection & Channel Placement",
        src: "./assets/aistudio/7_a7c0e5d1.webp",
        caption: "State-by-state infrastructure comparison selecting Karnataka (774 stations; 220.7 EVs/station) and Delhi (539 stations; 365.5 EVs/station) as launchpads across Nexa, True Value, Dealers, and Service Centres."
      },
      {
        title: "Round 3 Deck — Competitors' Positioning Matrix",
        src: "./assets/aistudio/8_85c417fb.webp",
        caption: "2x2 competitive map plotting SUV vs. Sedan and Low-Price vs. High-Price offerings across Tata Nexon EV (₹14L), Tata Tigor EV (₹12L), Mahindra eVerito (₹9L), MG ZS EV (₹21L), and Hyundai Kona Electric (₹24L)."
      },
      {
        title: "Round 3 Deck — 'Maruti Suzuki eBharat' Repositioning Campaign",
        src: "./assets/aistudio/9_82887cb7.webp",
        caption: "Go-to-market positioning targeting first-time EV buyers in the ₹9–15L hatchback/MUV bracket through social awareness, test-drive activation, and the #eBharatRoadTrip experiential campaign."
      },
      {
        title: "Round 3 Deck — Strategic Execution Levers",
        src: "./assets/aistudio/10_74dd5c51.webp",
        caption: "Six-pillar capability roadmap spanning ICE-to-EV retrofitting, home charging installations, tool harmonization via carryover parts, recycled materials, Aloe E-Cell natural batteries, and EV SaaS monetization."
      },
      {
        title: "Round 3 Deck — Risk & Mitigation Matrix",
        src: "./assets/aistudio/11_3d622c9e.webp",
        caption: "Four-quadrant risk mitigation plan pairing charging gaps, EV software talent shortages, vehicle depreciation, and low ICT awareness with FAME-II partnerships, selective outsourcing, retrofitting/trade-ins, and NGO/govt outreach."
      }
    ]
  },
  {
    id: "daikoku-marketplace",
    order: 5,
    title: "Daikoku: Two-Sided Marketplace & Startup Incubation",
    shortTitle: "5. Daikoku",
    clientOrOrg: "Atal Incubation Centre (SNU)",
    category: "Product & Consulting",
    period: "June – December 2022",
    role: "Co-Founder, Operations, Strategy & Marketing Lead",
    tagline: "Incubated a two-sided EdTech talent marketplace; converted 13 of 21 target startups into meetings and generated ₹23,000 early revenue.",
    impactMetrics: [
      { label: "Startups Contacted", value: "21" },
      { label: "Meeting Conversion", value: "13 (62%)" },
      { label: "Early Revenue", value: "₹23,000" },
      { label: "Survey Sample", value: "53 Students" }
    ],
    overview: "Co-founded Daikoku to bridge the trust gap between undergraduate talent seeking project experience and early-stage startups needing pre-evaluated talent. Led business development, customer discovery surveys, and incubator pitch presentations.",
    problem: "College curricula stayed theoretical while 75%+ of startup hires happened exclusively through personal references because founders did not trust generic resumes or unverified job portals.",
    solution: "Engineered a verified project marketplace with 'Swipe Mode' for startup recruiters, integrated code workspaces, and a 3-tier SaaS subscription (Ruby free, Emerald paid, Sapphire premium). Conducted 53-student demand survey and executed cold LinkedIn B2B outbound converting 13 meetings.",
    keyTakeaways: [
      "Survey findings: 79.2% of students were willing to do real projects; 79% expressed interest in XR/VR training simulations.",
      "Closed a ₹23,000 commercial website-development engagement to generate immediate operational runway during prototype development.",
      "Built cross-functional delivery alignment across 4 co-founders (Operations, Web Dev, XR/Unity, Marketing)."
    ],
    toolsUsed: ["0-to-1 Product Strategy", "Customer Discovery Survey", "B2B Outbound Funnel", "Incubation Governance", "Pitch Deck Design"],
    pdfAssetPath: "./assets/aistudio/Daikoku_Startup_Summary_093896c8.pdf",
    driveUrl: "https://drive.google.com/drive/folders/18bxVORw4bbdf9egULvmRO9jpvWs-sm2a?usp=sharing",
    images: [
      {
        title: "Pitch Deck — The Problem",
        src: "./assets/aistudio/1_225faed3.webp",
        caption: "Market friction on both sides: students trapped in theoretical coursework without verified project feedback, while startups rely on personal references for 75%+ of hires."
      },
      {
        title: "Pitch Deck — Customer Discovery Survey",
        src: "./assets/aistudio/2_8fe9a409.webp",
        caption: "Primary research across 53 students showing 79.2% willing to complete industry projects, 60.4% targeting large firms vs. 39.6% startups, and 79.2% combined interest in VR training."
      },
      {
        title: "Pitch Deck — Product Architecture & Swipe Mode",
        src: "./assets/aistudio/3_685b768c.webp",
        caption: "Two-sided verified talent loop pairing student Geek Bucks and SME-reviewed deliverables (LORs/PPOs) with a mobile Swipe Mode screening workflow for startup founders."
      },
      {
        title: "Pitch Deck — Business Model & Monetization",
        src: "./assets/aistudio/4_5ca4d591.webp",
        caption: "Tiered startup subscriptions (Ruby free, Emerald paid, Sapphire premium) combined with 2%–5% marketplace fees, 7-day MVP builds, validation reports, and XR/VR licensing."
      },
      {
        title: "Pitch Deck — Competitive Landscape",
        src: "./assets/aistudio/5_9823dd1d.webp",
        caption: "Positioning matrix benchmarked against ~30 platforms across job portals (Internshala, LinkedIn), project courses (Guvi, Crio.Do), and XR/VR training providers."
      },
      {
        title: "Pitch Deck — Traction & Go-to-Market",
        src: "./assets/aistudio/6_5c5e7b17.webp",
        caption: "Early execution funnel showing 21 startups contacted, 13 converted to meetings, ₹23,000 early revenue, and the 5-stage candidate-to-offer workflow."
      }
    ]
  },
  {
    id: "brainwars-fluorco",
    order: 6,
    title: "FluorCo Growth Diagnostic & Queuing Model",
    shortTitle: "6. Brainwars",
    clientOrOrg: "Bain Capability Network (BrAINWARS '23)",
    category: "Strategy & Operations",
    period: "September – October 2023",
    role: "Team Member (Samaj Sevak, SNU)",
    tagline: "Diagnosed why a 50-year-old hydrofluoric acid firm stagnated despite 40% company CAGR using MECE issue trees and queuing math.",
    impactMetrics: [
      { label: "Round 1 Result", value: "Cleared (R2 Adv)" },
      { label: "Root Causes", value: "4 Compounding" },
      { label: "Target Utilization", value: "64% → 90%" },
      { label: "Cost Per Case", value: "$38.9k → $27.5k" }
    ],
    overview: "Formulated a structured diagnostic for FluorCo's underperforming hydrofluoric acid (HF) business. Cleared Round 1 of Bain's national case study competition by grounding every strategic hypothesis in quantitative exhibits: cost-per-case, capacity utilization, and Little's Law queuing models.",
    problem: "FluorCo achieved ~40% overall revenue CAGR, yet its core HF business stagnated at ~6.7% CAGR. Global fluorspar supply disruptions, fixed industry-wide selling prices, and aggressive competitor production from EtchItOn ($29M sales, 10x volume) squeezed profitability.",
    solution: "Constructed two MECE issue trees (Market and Company drivers). Traced profit collapse to 100% import dependence, swinging plant utilization (37%–64%), and regional over-concentration in South India (60% sales, 10% new customer rate). Modeled an operations research throughput expansion lifting utilization to 90% and extending service time to 4.8 minutes.",
    keyTakeaways: [
      "Proved fixed costs were not the margin driver; volatile plant utilization and high-cost fluorspar imports from Canada/Vietnam drove unit costs up to $38,900 vs peers at $25,000.",
      "Formulated 5 prioritized strategic recommendations: supplier diversification to South Africa, category mix realignment, regional expansion to West/East India, and brand investment."
    ],
    toolsUsed: ["MECE Issue Trees", "Queuing Theory (Little's Law)", "Cost Accounting", "Competitor Benchmarking", "Supply Chain Diagnostics"],
    pdfAssetPath: "./assets/aistudio/BrAINWARS_2023_Summary_3c29040e.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1pphCi7QIauoZzM-nZT1Ap68F4HRjBBX9?usp=sharing",
    images: [
      {
        title: "Round 2 Slide 1 — Executive Summary: 4 Compounding Root Causes",
        src: "./assets/aistudio/1_f06f8753.webp",
        caption: "Executive synthesis tracing HF stagnation (~6.7% CAGR vs ~40% overall) to 100% raw-material imports, 37–64% volatile utilization, $0 pricing flexibility, and 60% South-India concentration."
      },
      {
        title: "Round 2 Slide 2 — Market Diagnostic (Blueprint 1)",
        src: "./assets/aistudio/2_10ba5f4d.webp",
        caption: "Market growth divergence (~40% total vs ~6.7% HF CAGR), 5–6% Indian market share breakdown, and supply, category-mix, and regional growth tradeoffs."
      },
      {
        title: "Round 2 Slide 3 — Company Diagnostic (Blueprint 2)",
        src: "./assets/aistudio/3_a37c2593.webp",
        caption: "Unit cost and margin decomposition across the 20,000 MT plant, showing FY20–FY23E capacity swings and $38,900 cost-per-case vs competitors ($25k–$30k)."
      },
      {
        title: "Round 2 Slide 4 — Competitive & Regional Benchmarking",
        src: "./assets/aistudio/4_5ea6daf9.webp",
        caption: "Regional sales mix (60% South India), new-customer acquisition gap (10% vs peers' 50–80%), and sales-per-unit-volume comparisons."
      },
      {
        title: "Round 2 Slide 5 — Strategic Recommendations & Tradeoffs",
        src: "./assets/aistudio/5_592bfc4c.webp",
        caption: "Five prioritized action levers—South Africa sourcing, secondary category mix, West/East expansion, 90% utilization target, and brand acquisition—with PRO/CON analysis."
      },
      {
        title: "Round 2 Slide 6 — Appendix: Cost per Case & Little's Law Utilization Math",
        src: "./assets/aistudio/6_5cb554fd.webp",
        caption: "Worked unit-cost derivation ($38,900/case across 69 cases) and queuing utilization model scaling U from 64% to 90% (service time S: 3.41 → 4.8 mins)."
      }
    ]
  },
  {
    id: "gcvc-campus-recruitment",
    order: 7,
    title: "Campus Recruitment & Internship Hiring Pipeline",
    shortTitle: "7. GCVC Campus Recruitment",
    clientOrOrg: "Growth Central VC",
    category: "Strategy & Operations",
    period: "March – August 2022",
    role: "Core Team Member (Recruitment Function Lead)",
    tagline: "Led end-to-end campus recruitment across 5 premier institutions, building an internship funnel for Management, Sales, Marketing, and HR.",
    impactMetrics: [
      { label: "Campus Partnerships", value: "5 Premier Tiers" },
      { label: "Funnel Applicants", value: "100+ Sourced" },
      { label: "Interns Onboarded", value: "15 Hired" },
      { label: "PPO Conversion Rate", value: "33% (5 converted)" }
    ],
    overview: "Personally led Growth Central VC's institutional campus recruitment program. Established formal partnerships with university placement cells to build a sustainable talent pipeline for growth roles.",
    problem: "Rapid company expansion created urgent hiring needs across Management, Sales, Marketing, and HR functions, which had previously been filled through ad hoc, unstandardized recruiting channels.",
    solution: "Coordinated directly with placement cells across 5 institutions (LPU, KMC, DDUC, DTU E-Cell, and ArthaShastra - economics club of IIM Rohtak). Formulated structured interview rubrics, scheduled campus fairs timed to academic semesters, and trained rotating pairs of HR trainees hands-on during each drive.",
    keyTakeaways: [
      "Sourced 100+ applicants, conducted 60+ interviews, and onboarded 15 high-performing interns.",
      "Achieved a 33% post-internship conversion rate (5 of 15 interns retained in part-time leadership roles).",
      "Institutionalized standardized screening guides and interview criteria, enabling junior HR trainees to evaluate candidate fit reliably."
    ],
    toolsUsed: ["Talent Acquisition Funnels", "Structured Interview Rubrics", "University Partnerships", "Onboarding Workflows", "Mentorship Training"],
    pdfAssetPath: "./assets/aistudio/Project_Overview_b7fbc0b5.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1oj0j8ZzqvzmWg71Q0JiiH7YsU6WdiT5W?usp=sharing"
  },
  {
    id: "gcvc-market-research",
    order: 8,
    title: "Market Research: Competitor Landscape Study",
    shortTitle: "8. GCVC Market Research",
    clientOrOrg: "Growth Central VC",
    category: "Product & Consulting",
    period: "July – August 2021",
    role: "Product Management Intern (Led 7 Research Interns)",
    tagline: "Mapped 200+ competitors across course learning and skill certification in 3 weeks using Critical Path Method, identifying key market entry gaps.",
    impactMetrics: [
      { label: "Competitors Mapped", value: "200+ Firms" },
      { label: "Delivery Speed", value: "3 Weeks (50% faster)" },
      { label: "Primary Interviews", value: "30+ Customers" },
      { label: "Outcome", value: "Core Team Contract" }
    ],
    overview: "Led a 7-person research team to map the comprehensive competitive landscape across course learning, skill assessments, and certifications, directly shaping leadership's decision on Growth Central VC's next commercial product line.",
    problem: "Following the launch of its initial skill assessment product, company leadership needed a rigorous, benchmarked view of competitor pricing, distribution models, and credibility barriers before investing in course development.",
    solution: "Scoped 3 core research pillars: demand size, price sensitivity, and competitive gaps. Utilized the Critical Path Method (CPM) to manage workstreams, completing the study in 3 weeks instead of the allocated 6 weeks. Benchmarked top 5 platforms (Coursera, Udemy, edX, LinkedIn Learning, Skillshare) across price, accreditation, and delivery mechanisms.",
    keyTakeaways: [
      "Identified a wide-open market opportunity: few competitors combined accessible low pricing with high perceived certification credibility.",
      "Directly validated the business case for building course learning as the company's second core product line.",
      "Demonstrated outstanding team leadership as an intern, resulting in an exclusive offer from the founder to join as a full Core Team Member."
    ],
    toolsUsed: ["Critical Path Method (CPM)", "Competitive Benchmarking", "Primary Customer Surveys", "Pricing Sensitivity Analysis", "Strategic Synthesis"],
    pdfAssetPath: "./assets/aistudio/Project_Summary_dca420f5.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1Gmf_nS38Z3pBir0P0YGzLLreZ6S93lau?usp=sharing"
  },
  {
    id: "ambulance-routing-model",
    order: 9,
    title: "EMS Route Optimization & Performance Management",
    shortTitle: "9. EMS Route Optimization",
    clientOrOrg: "DOM208 Operations Research",
    category: "Analytics & Modeling",
    period: "November 2022",
    role: "Lead Researcher (B.Tech ECE, SNU)",
    tagline: "Applied graph theory and Dijkstra's algorithm to emergency ambulance dispatch, reducing round-trip response times by 10% during the critical Golden Hour.",
    impactMetrics: [
      { label: "Round-Trip Time Saved", value: "2 Minutes (10%)" },
      { label: "Distance Efficiency", value: "0.90 → 1.00" },
      { label: "Algorithm Applied", value: "Dijkstra Shortest Path" },
      { label: "Optimization Scope", value: "Multi-Node Directed Graph" }
    ],
    overview: "Engineered an operations research performance management model using graph theory to optimize ambulance routing. Modeled road junctions, patient locations, and hospital bases as a weighted directed graph to calculate optimal onward and return trajectories.",
    problem: "In Emergency Medical Services (EMS), the first 60 minutes after trauma—the 'golden hour'—determines patient survival. Unoptimized routing based on driver habit or intuition often leads to delay and missed 8–15 minute response benchmarks.",
    solution: "Constructed a directed graph network connecting Hospital Base H, intermediate junctions J1 & J2, and patient locations P1, P2, P3. Formulated the round-trip response time function T(Pk) = d(H, Pk) + t_load + d(Pk, H). Demonstrated analytically how taking optimized path H → J1 → P2 saves 2 minutes round trip compared to the habitual H → J2 → P2 route.",
    keyTakeaways: [
      "Proved a 10% gain in distance efficiency (0.90 to 1.00) in a single run; scaled across 24 daily emergency trips, this saves 48+ life-critical minutes.",
      "Developed a continuous KPI monitoring framework: Average Response Time, Turnaround Time, Ambulance Utilization Rate, and Distance Efficiency Ratio.",
      "Extended model logic to bipartite graph matching for multi-ambulance simultaneous dispatch."
    ],
    toolsUsed: ["Graph Theory", "Dijkstra's Algorithm", "Operations Research", "Network Flow", "Emergency Logistics Modeling"],
    pdfAssetPath: "./assets/aistudio/A_Performance_Management_Model_To_Optimise_Ambulance_Routing_fc470c5d.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1-_HfoAcBc3YtDqia0iVg3oyggPED12UL?usp=sharing"
  },
  {
    id: "godrej-dupont-analysis",
    order: 10,
    title: "Godrej Consumer Products: DuPont Analysis & Forecast",
    shortTitle: "10. Godrej DuPont Model",
    clientOrOrg: "FAC105 Financial Accounting",
    category: "Analytics & Modeling",
    period: "November 2021",
    role: "Lead Analyst (B.Tech ECE, SNU)",
    tagline: "Conducted an 11-year financial performance review (FY12–FY22) using 3-step DuPont ROE decomposition and constructed a 2-year trend forecast.",
    impactMetrics: [
      { label: "Historical Horizon", value: "11 Financial Years" },
      { label: "Revenue CAGR", value: "8.7% (₹3k → ₹7k Cr)" },
      { label: "Debt-to-Equity", value: "0.00x (Debt-Free)" },
      { label: "Forecast ROE", value: "19.5% / 18.5%" }
    ],
    overview: "Rigorous corporate financial analysis of Godrej Consumer Products Limited (GCPL) across eleven financial years (FY2011-12 through FY2021-22), combining horizontal, vertical common-size, ratio analysis, and DuPont decomposition of Return on Equity.",
    problem: "Raw financial figures alone fail to reveal the operational levers driving shareholder returns. Analyzing top-line growth without isolating profit margins, asset efficiency, and financial leverage leaves strategic management decisions opaque.",
    solution: "Decomposed ROE into its three fundamental multiplicative components: Net Profit Margin × Total Asset Turnover × Equity Multiplier. Discovered that GCPL's equity multiplier declined steadily from 1.42x to 1.13x as the firm eliminated long-term debt (0.00x since FY2014), proving that healthy ~19–24% ROE was earned purely through operational quality rather than debt leverage. Built a 2-year forward forecast (FY23E–FY24E) projecting stable high-teens ROE.",
    keyTakeaways: [
      "Isolated the FY2019 ROE spike (35.6%) as a one-off tax credit of –₹282 Cr resulting from corporate tax rate cuts, rather than underlying operational change.",
      "Identified raw material cost inflation (Cost of Materials Consumed rising from 34.7% in FY18 to 43.6% in FY22) as the primary headwind compressing gross margins.",
      "Corroborated that Fixed Asset Turnover improved from 2.55x to 4.78x, demonstrating disciplined capital allocation in domestic manufacturing."
    ],
    toolsUsed: ["DuPont 3-Step Decomposition", "Horizontal & Vertical Analysis", "Financial Accounting", "Ratio Modeling", "2-Year Forward Forecasting"],
    pdfAssetPath: "./assets/aistudio/Financial_Performance_Analysis_of_Godrej_Consumer_Products_Limited_f18871a2.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1-_HfoAcBc3YtDqia0iVg3oyggPED12UL?usp=sharing",
    images: [
      {
        title: "Excel Model — 3-Step DuPont ROE Decomposition (FY2012–FY2022)",
        src: "./assets/aistudio/1_95604677.webp",
        caption: "11-year DuPont matrix (Net Profit Margin × Total Asset Turnover × Equity Multiplier) reconciling identically with direct ROE calculation (0.0000% variance) alongside ROE and margin trend charts."
      },
      {
        title: "Excel Model — 2-Year Forward Forecast (FY2023E–FY2024E)",
        src: "./assets/aistudio/2_8aa64362.webp",
        caption: "Dynamic assumption-driven projection (6.38% 5-Yr revenue CAGR, 20.55% avg net profit margin, 35% payout ratio) forecasting Revenue (₹7,945.58 Cr), PAT (₹1,632.63 Cr), and ROE (19.55% / 18.45%)."
      }
    ]
  }
];

export const EXPERIENCE_HISTORY = [
  {
    role: "Senior Associate - AML Operations",
    company: "Genpact",
    location: "Noida, India",
    period: "May 2025 – November 2025",
    summary: "Conducted root-cause analysis on daily transaction monitoring workflows and spearheaded operational stability and automation initiatives across cross-functional teams.",
    bullets: [
      "Conducted root-cause analysis to identify operational bottlenecks in daily transaction monitoring workflows; troubleshot systemic failures within the core Master Macro-Enabled Workbook to optimize tracker stability and eliminate data logging errors.",
      "Supported requirement gathering for integrating Microsoft Copilot into compliance workflows; engineered structured prompt templates to draft Suspicious Activity Report (SAR) narratives, cutting case documentation time by 4%.",
      "Deployed Power Automate cloud flows to sort, categorize, and prioritize thousands of daily transaction alerts, introducing risk-trigger logic to accelerate escalation.",
      "Coordinated across QA, compliance, and operations sub-teams; mapped As-Is and To-Be cross-functional workflows using MS Visio and updated SOPs to achieve 100% regulatory compliance."
    ],
    tools: ["MS Visio", "Power Automate", "Microsoft Copilot", "Advanced Excel (VBA/Macros)", "Risk Analysis"]
  },
  {
    role: "Assistant Manager - Business Operations & Analytics",
    company: "Gyasi Ram & Sons",
    location: "Delhi, India",
    period: "July 2024 – April 2025",
    summary: "Led store and warehouse operations, conducted time-and-motion studies, and built dynamic inventory and seasonal capacity models.",
    bullets: [
      "Ran a time-and-motion study across 10 product categories (54 SKUs) and developed an Excel forecasting prototype to predict seasonal demand spikes and prevent order fulfillment delays.",
      "Diagnosed manufacturing bottleneck in the 1,260 units/day cutting & singeing workstation facing 312% peak August demand (96k units unmet demand), structuring multi-shift mitigation plans.",
      "Managed warehouse operations for a 15-person team, vendor replenishment across 6 suppliers, and cut customer interaction time from 20 to 12-13 minutes while raising average basket size from 2-3 to 4-5 products through structured buyer education."
    ],
    tools: ["Inventory Modeling", "Time-and-Motion Study", "Supply Chain Operations", "Excel Modeling", "Vendor Management"]
  },
  {
    role: "Core Team Member - Strategy & Analytics",
    company: "Growth Central VC",
    location: "Delhi, India",
    period: "August 2021 – July 2023",
    summary: "Core team member overseeing all non-sales operations, product line management, and performance analytics; scaled the organization 10x.",
    bullets: [
      "Designed and refined a 3-version weekly KPI scoring model (5A + 2B - 6C + 10D - 4E), balancing sourcing volume against hiring quality to eliminate candidate infighting and reduce team stress.",
      "Executed full Business Analyst lifecycle for V3 tracking system: authored BRD and 13 user stories with Given/When/Then acceptance criteria across 5 JIRA epics, built PostgreSQL schema with CHECK constraints, and built an upsert import pipeline via DBeaver.",
      "Developed an executive Power BI dashboard with team/group slicers, weekly rollups, and week-over-week trend DAX measures; caught and fixed DEF-01 (alphabetical MIN bug on status bands) and DEF-02 (negative WoW denominator sign error).",
      "Owned all non-sales operations on a 4-person executive core team, scaling the company 10x from 20 to 200+ members through 5 campus recruitment partnerships (LPU, KMC, DDUC, DTU E-Cell, IIM Rohtak ArthaShastra).",
      "Spearheaded launch of a new product line: 4 expert-led courses plus self-designed cohort-based Product Management program, generating ₹3,00,000 in Q1 revenue with 85% completion rate."
    ],
    tools: ["Power BI & DAX", "PostgreSQL", "DBeaver", "JIRA & Confluence", "BRD & User Stories", "UAT Testing", "draw.io"]
  },
  {
    role: "Bachelor of Technology (ECE), Minor in Management Studies",
    company: "Shiv Nadar University",
    location: "Greater Noida, India",
    period: "August 2020 – May 2024",
    summary: "Rigorous dual curriculum combining technical systems engineering, digital signal processing, control theory, and business administration.",
    bullets: [
      "Semi-Finalist (Top 10 B-School Track, Top 20 Overall) in Maruti Suzuki XCELerate 2023 from 51,866 registrants across India; built EV market-entry strategy and infrastructure analysis.",
      "Co-founded Daikoku at SNU's Atal Incubation Centre, conducting market survey of 53 students, contacting 21 early-stage startups, and generating ₹23,000 early revenue.",
      "Operations Research Project (DOM208): Modeled ambulance routing as a weighted directed graph and solved optimal onward/return paths via Dijkstra's Algorithm, proving a 2-min saving per round trip.",
      "Financial Performance Analysis (FAC105): Authored 11-year DuPont ROE decomposition and 2-year forecast for Godrej Consumer Products Limited."
    ],
    tools: ["Operations Research", "Graph Theory", "Control Theory", "Financial Accounting", "Market Research"]
  }
];

export const JIRA_EPICS_STORIES = [
  { id: "KAN-4", epic: "Weekly Data Capture", stories: ["US1: Standard Weekly Template", "US2: Reject Non-Monday Dates", "US3: Enforce Shortlist Range (20-60)", "US4: Enforce Passed Interview Limit (D <= C)"] },
  { id: "KAN-5", epic: "Data Consolidation", stories: ["US5: Block Duplicate Weekly Entries", "US6: Allow Corrections via Overwrite", "US7: Import Audit Log (Load Log)"] },
  { id: "KAN-6", epic: "Scoring Engine", stories: ["US8: Automatic Score Calculation (5A+2B-6C+10D-4E)", "US9: Centralised Scoring Formula (No client spreadsheet editing)"] },
  { id: "KAN-7", epic: "Reporting Dashboard", stories: ["US10: Filter by Team and Group", "US11: Weekly and Monthly Rollups", "US12: Team Historical Trend View"] },
  { id: "KAN-8", epic: "Documentation & Handover", stories: ["US13: Onboarding Instructions Sheet for new Team Leads"] }
];

export const DEFECT_LOGS = [
  {
    id: "DEF-01",
    title: "Status card always shows 'Developing'",
    foundIn: "Power BI dashboard, Status card (KAN-20, Team Historical Trend View)",
    severity: "High",
    rootCause: "Card used MIN() aggregation on the raw Status Band text column. Alphabetically, 'Developing' precedes 'Excellent', 'Good', and 'Poor'.",
    fix: "Created a 'Last Status' DAX measure that isolates the status band of the MAX(week_start_date) for the selected slicer context.",
    status: "Closed & Verified"
  },
  {
    id: "DEF-02",
    title: "WoW % has inverted sign when prior week score is negative",
    foundIn: "Power BI dashboard, trend view (KAN-20)",
    severity: "Low",
    rootCause: "Standard formula (Current - Previous) / Previous flips the algebraic sign whenever the prior week's score is negative.",
    fix: "Updated DAX measure to divide by ABS(Previous Score): DIVIDE(Current - Previous, ABS(Previous)).",
    status: "Resolved & Documented"
  }
];
