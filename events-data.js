// Central Database of All Fest Events
const festEvents = [
  {
    id: "chem-e-car",
    title: "Chem-E-Car",
    series: "Prodigy",
    fee: 350,
    prizePool: "₹25,000",
    teamSize: "2 - 4 Members",
    shortDesc: "Design and calibrate a shoe-box sized vehicle powered and stopped entirely by precise chemical reactions.",
    fullDesc: "Chem-E-Car challenges students to design and construct a small car powered by a chemical energy source that will safely travel a specified distance carrying a designated payload and stop precisely at the finish line using a chemical reaction mechanism.",
    rounds: [
      { num: "Round 1", title: "Design & Safety Audit", desc: "Submission of Engineering Documentation Package (EDP) including safety compliance, chemical reaction kinetics, and stopper mechanism." },
      { num: "Round 2", title: "Track Run & Distance Target", desc: "Live track run. Target distance and load payload will be disclosed 1 hour before the run." }
    ],
    rules: [
      "No commercial batteries or electronic timing circuits allowed.",
      "All chemicals must comply with standard college safety protocols.",
      "The vehicle must fit completely inside a box measuring 40 cm × 30 cm × 20 cm."
    ],
    heads: [
      { name: "Prathamesh Herle", phone: "+91 98765 43210" },
      { name: "Atharva Kulkarni", phone: "+91 91234 56789" }
    ]
  },
  {
    id: "idp-challenge",
    title: "Industry Defined Problem (IDP)",
    series: "Prodigy",
    fee: 400,
    prizePool: "₹30,000",
    teamSize: "2 - 3 Members",
    shortDesc: "Tackle live technical bottlenecks sourced straight from leading chemical manufacturing plants.",
    fullDesc: "Real plant scenarios curated by chemical plant engineers. Teams will optimize heat exchanger networks, resolve distillation flooding, or propose energy conservation retrofits.",
    rounds: [
      { num: "Round 1", title: "Abstract Submission", desc: "Detailed technical proposal addressing the process bottleneck." },
      { num: "Round 2", title: "Jury Defense", desc: "Presentation of ASPEN Plus / DWSIM simulations in front of an industry panel." }
    ],
    rules: [
      "Process simulation files (DWSIM / Aspen) must be submitted along with the presentation.",
      "Plagiarism above 15% leads to immediate disqualification."
    ],
    heads: [
      { name: "Soham Raut", phone: "+91 98342 49270" }
    ]
  },
  {
    id: "pharm-o-craft",
    title: "Pharm-O-Craft",
    series: "Pharma",
    fee: 250,
    prizePool: "₹18,000",
    teamSize: "1 - 3 Members",
    shortDesc: "Formulate innovative drug delivery systems, solve case studies on bioavailability, and pitch to industry panels.",
    fullDesc: "A blend of formulation science and pharmacology. Develop targeted drug delivery methods for poorly soluble active pharmaceutical ingredients (APIs).",
    rounds: [
      { num: "Round 1", title: "Formulation Pitch", desc: "Submit formulation deck with excipient compatibility matrices." },
      { num: "Round 2", title: "Prototype / Deck Defense", desc: "Defend your formulation against regulatory stability queries." }
    ],
    rules: [
      "Interdisciplinary teams with biology and pharma majors are allowed.",
      "Reference scientific papers must be from PubMed or ScienceDirect indexed journals."
    ],
    heads: [
      { name: "Bhargavi Rajopadhye", phone: "+91 99887 76655" }
    ]
  },
  {
    id: "alchemy-quiz",
    title: "Alchemy Quiz",
    series: "General",
    fee: 150,
    prizePool: "₹10,000",
    teamSize: "Solo or Duo",
    shortDesc: "The ultimate battle of chemical trivia, history of science, fast calculations, and analytical deductions.",
    fullDesc: "A high-octane quiz covering thermodynamics, reaction mechanisms, Nobel Laureates, industrial history, and rapid-fire chemistry calculations.",
    rounds: [
      { num: "Round 1", title: "Written Elimination", desc: "30 questions in 25 minutes covering trivia and rapid calculations." },
      { num: "Round 2", title: "Live Stage Buzzer", desc: "Top 6 teams face pounce-and-bounce buzzer rounds." }
    ],
    rules: [
      "No calculators or internet-enabled devices in the elimination round.",
      "Quizmaster's ruling is final."
    ],
    heads: [
      { name: "Anjali Bohora", phone: "+91 94567 12345" }
    ]
  }
];