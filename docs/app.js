'use strict';

const github = 'https://github.com/vanshverma0401-wq/';
const projects = {
  fragrance: {
    title: 'Fragrance Data Lake', label: '01 / DATA ENGINEERING', repo: 'fragrance-data-lake-pyspark',
    description: 'An individual academic AWS/PySpark workflow that parsed heterogeneous reviews and product metadata, filtered fragrance products, joined records and produced curated Parquet tables. A separate Parfumo-derived branch supports brand, accord and note analyses.',
    images: [{src:'assets/projects/fragrance.png',alt:'Weighted fragrance brand ratings and their supporting counts',caption:'Saved Parfumo-derived aggregate result: 30,046 cleaned fragrance records. This chart does not summarize the 23.9M Amazon reviews.'}],
    details: ['23,911,390 Amazon review rows parsed; 57,428 fragrance products filtered from 1,028,914 metadata rows.', '1,248,393 joined fragrance-review rows in the verified private execution.', 'Public reconstruction includes source, aggregate results, environment notes and a separate fictional ingestion/replay/rollback exercise.'],
    credit: 'Individual academic project by Vansh Verma. The full historical Spark/cloud run was not rerun for the public reconstruction.',
    links: [{label:'Source & methods',href:github+'fragrance-data-lake-pyspark'},{label:'Aggregate results',href:github+'fragrance-data-lake-pyspark/tree/main/data/derived'}]
  },
  oracle: {
    title: 'NBA Oracle Relational Model', label: '02 / DATA MODELING', repo:'nba-oracle-relational-model',
    description:'Relational design and analytical SQL for basketball rosters, games and performance. Original final coursework DDL sits alongside a deliberately smaller demonstration with fictional records.',
    images:[{src:'assets/generated/oracle-schema.svg',alt:'Conceptual five-table fictional demonstration schema',caption:'New conceptual diagram of the five-table demonstration schema; it is separate from the original coursework DDL.'}],
    details:['Original coursework: seven business tables plus an audit log.', 'Fictional demonstration: five tables, primary/foreign keys, integrity constraints, reusable views and ranking queries.', 'A verification runner checks expected totals and negative constraint cases; static checks are distinct from Oracle execution.'],
    credit:'Individual coursework by Vansh Verma. The original DDL is preserved. Real Oracle runtime execution remains unverified.',
    links:[{label:'Schema & SQL',href:github+'nba-oracle-relational-model'},{label:'Verification scope',href:github+'nba-oracle-relational-model/tree/main/verification'}]
  },
  setflow:{
    title:'SetFlow',label:'03 / PRODUCT ENGINEERING',repo:'setflow-product-case-study',
    description:'A private native iPhone strength-training product in development, connecting planning, set logging, timed rest, interrupted-session continuity and retained training history.',
    images:[{src:'assets/projects/setflow-active.png',alt:'SetFlow active workout logging with synthetic data',caption:'October 31, 2026 iOS Simulator capture with synthetic workout data. This is not a physical-device or released-app claim.',phone:true},{src:'assets/projects/setflow-history.png',alt:'SetFlow workout history with synthetic session records',caption:'Dated synthetic iOS Simulator example of retained workout history.',phone:true}],
    details:['Product decisions focus on useful workout flows, input correctness and consistency between UI state and saved records.', 'SwiftUI and SwiftData underpin the native interface and local persistence.', 'A separate product review includes a 94-second walkthrough and dated synthetic demonstrations.'],
    credit:'My role is independent product direction and review. Coding agents provided substantial implementation, debugging, tests and documentation; most app code was AI-generated. Private, in development and pre-beta: no App Store release or beta access.',
    links:[{label:'Product case study',href:github+'setflow-product-case-study'},{label:'Watch the walkthrough',href:'https://setflow-review-nov03.vanshverma0401.chatgpt.site/watch.html#momentum'}]
  },
  zillow:{
    title:'Zillow Housing Analysis',label:'04 / TIME-INDEXED ANALYSIS',repo:'zillow-housing-market-analysis',
    description:'A collaborative housing analysis combining geographic and time-indexed Zillow indicators. A later, separate metro benchmark makes keyed reconciliation, exact forecast horizons and chronological evaluation explicit.',
    images:[{src:'assets/generated/zillow-benchmark.svg',alt:'Fixed Ridge and persistence baseline errors on the separate historical metro benchmark',caption:'November 2026 extension, not the original neighborhood XGBoost model. Data Provided by Zillow Group.'},{src:'assets/projects/zillow.png',alt:'Original saved home-value trends for selected metropolitan groups',caption:'Original collaborative final-project figure. Data Provided by Zillow Group.'}],
    details:['Complete original final project: six questions, 70 notebook cells and 18 saved figures.', 'Separate benchmark: 50 selected metros, exact 24-month targets and 1,348 historical test rows.', 'Fixed Ridge MAE 13,357 versus unchanged-value baseline 24,850; training targets precede the test-origin period.'],
    credit:'Original team: Jake Holley, Miranda Dahl and Vansh Verma. Historical revised snapshots are not point-in-time data. Same metros recur across time and test horizons overlap; no prospective, unseen-geography or investment-return claim. Data Provided by Zillow Group.',
    links:[{label:'Complete final project',href:github+'zillow-housing-market-analysis/blob/main/FINAL_PROJECT.md'},{label:'New benchmark',href:github+'zillow-housing-market-analysis/blob/main/REPLAY_EXTENSION.md'}]
  },
  healthcare:{
    title:'Healthcare ML & Operations',label:'05 / APPLIED MACHINE LEARNING',repo:'healthcare-ml-operations-analysis',
    description:'A six-person academic project using synthetic healthcare data for billing models and operations analysis. A separate billing extension tests whether simpler, more carefully separated evaluation actually finds predictive signal.',
    images:[{src:'assets/generated/healthcare-evaluation.svg',alt:'Separate synthetic-data billing benchmark with test ROC-AUC 0.485',caption:'New bounded evaluation on 10,000 retained synthetic records. Weak signal is an evaluation finding, not clinical success.'},{src:'assets/projects/healthcare.png',alt:'Original saved synthetic billing model comparison',caption:'Historical classroom model comparison from the original team project; separate from the new group-disjoint benchmark.'}],
    details:['New benchmark uses training-only preprocessing and an 85th-percentile target cutoff fitted only on training data.', 'Name-proxy groups remain disjoint across train, validation and test; name is not a model feature.', 'Fixed logistic test ROC-AUC 0.485, with a class-prior baseline: little evidence of useful predictive signal in this sample.'],
    credit:'Team: Hinsoukpo Dagan, Drew Fleming, Kathleen Hinderscheid, Benjamin Philbin, Dymend Teklab and Vansh Verma. My contributions covered cleaning, features, preprocessing, model comparison, evaluation, documentation and presentation. Synthetic retrospective work; name groups are not verified patient IDs, feature timing is assumed, and clinical effectiveness is not established.',
    links:[{label:'Original billing report',href:github+'healthcare-ml-operations-analysis/blob/main/FULL_BILLING_REPORT.md'},{label:'New evaluation',href:github+'healthcare-ml-operations-analysis/blob/main/REPLAY_EXTENSION.md'}]
  },
  tableau:{
    title:'Data & AI Workforce Dashboard',label:'06 / BUSINESS INTELLIGENCE',repo:'ai-workforce-tableau-dashboard',
    description:'A Tableau and Tableau Prep case study exploring a historical salary snapshot through calculated fields, categorical preparation and KPI reporting.',
    images:[{src:'assets/projects/salary.svg',alt:'Historical salary review with explicit sample and group counts',caption:'November 2026 Python/CSV review export, not a new Tableau export. Raw repeated rows are retained; group means are descriptive.'}],
    details:['637 salary records from 2020–2022, covering broader data roles as well as AI/ML.', 'Original workbook contains 10 worksheets and one dashboard; seven distinct sheets are placed on it.', 'Public review tooling verifies group counts, means, field bindings and selected source logic.'],
    credit:'Collaborative coursework by Denny Hoang and Vansh Verma; a per-person task split is not documented. Self-reported historical convenience sample. Native Tableau open/refresh and interaction execution remain unverified.',
    links:[{label:'Workbook & methods',href:github+'ai-workforce-tableau-dashboard'},{label:'Original visual gallery',href:github+'ai-workforce-tableau-dashboard/blob/main/FIGURE_GALLERY.md'}]
  },
  powerbi:{
    title:'Anthony Edwards Performance',label:'07 / BUSINESS INTELLIGENCE',repo:'anthony-edwards-power-bi-dashboard',
    description:'A collaborative Power BI case study exploring Anthony Edwards’ development across five seasons, scoring in wins and losses and a selected peer group.',
    images:[{src:'assets/projects/basketball.svg',alt:'Anthony Edwards season production and win/loss mean comparison',caption:'November 2026 Python review export from checked aggregates, not a new Power BI export. Season groups are distinct from calendar years.'}],
    details:['381 eligible recorded games: 204 wins and 177 losses.', 'Five NBA seasons, 2020–21 through 2024–25; selected peer comparison uses 2024–25.', 'Original two-page report and nine saved analytical figures remain available in the case study.'],
    credit:'Collaborative coursework by Vansh Verma and Denny Hoang. Descriptive associations do not establish causes of winning. Native Power BI refresh, exact M/DAX and model relationships remain unverified. Statistical sources are credited in the repository.',
    links:[{label:'Report & checked results',href:github+'anthony-edwards-power-bi-dashboard'},{label:'Original nine figures',href:github+'anthony-edwards-power-bi-dashboard#complete-figure-gallery'}]
  },
  nba:{
    title:'NBA Bench Impact Analysis',label:'08 / EXPLORATORY ANALYSIS',repo:'nba-bench-impact-analysis',
    description:'A reproducible Python/Pandas analysis of 2023–24 regular-season players who appeared off the bench more often than they started. Explicit thresholds keep the leaderboards inspectable.',
    images:[{src:'assets/projects/nba.png',alt:'Qualified bench-majority three-point shooting leaders',caption:'2023–24 regular season; at least 40 games, more bench appearances than starts and at least 4.0 three-point attempts per game. Source: Basketball-Reference / Sports Reference LLC.'}],
    details:['572 unique player-season records after selecting one aggregate row per traded player.', '185-player cohort with at least 40 games and G − GS > GS.', 'Four charts cover three-point shooting, two-point shooting, free throws and rebounding.'],
    credit:'Individual analysis, code, tests and charts by Vansh Verma. Statistical data: Basketball-Reference / Sports Reference LLC. Findings describe the documented cohort, not every player or current performance.',
    links:[{label:'Code & methods',href:github+'nba-bench-impact-analysis'},{label:'All four charts',href:github+'nba-bench-impact-analysis#more-result-charts'}]
  },
  wardrobe:{
    title:'Fragrance Wardrobe Intelligence',label:'09 / LOCAL SOFTWARE',repo:'fragrance-wardrobe-intelligence',
    description:'A local-first Python CLI that turns a fragrance collection and wear log into rotation, coverage and cost-per-logged-wear summaries, plus explainable profile matching.',
    images:[{src:'assets/projects/wardrobe.png',alt:'Synthetic wardrobe demo summary',caption:'Public fictional demo: eight collection items and 18 wear events. No measured consumer outcome or trained recommendation model is claimed.'}],
    details:['Standard-library implementation with input validation and stable, testable JSON output.', 'Unworn items remain visible without treating an undefined cost-per-wear ratio as zero.', 'Heuristic similarity explains its component scores and reasons.'],
    credit:'Individual local MVP by Vansh Verma. Included inputs are fictional. The similarity system is a transparent heuristic, not a trained recommender or verified consumer result.',
    links:[{label:'Run the local demo',href:github+'fragrance-wardrobe-intelligence'},{label:'Saved CLI output',href:github+'fragrance-wardrobe-intelligence/blob/main/examples/demo-summary.json'}]
  }
};

// The static project content and source links remain useful without JavaScript.
const filterGroup = document.querySelector('.filters');
const cards = Array.from(document.querySelectorAll('.project-card'));
const count = document.querySelector('.project-count');
if (filterGroup && cards.length) {
  filterGroup.hidden = false;
  filterGroup.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button || !filterGroup.contains(button)) return;
    const selected = button.dataset.filter;
    filterGroup.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    let visible = 0;
    cards.forEach(card => {card.hidden = selected !== 'all' && card.dataset.category !== selected; if (!card.hidden) visible += 1;});
    count.textContent = String(visible).padStart(2, '0') + (visible === 1 ? ' PROJECT' : ' PROJECTS');
  });
}

const dialog = document.querySelector('#case-dialog');
const dialogContent = document.querySelector('#dialog-content');
let returnFocus = null;
let activeProject = null;
let activeImage = 0;
let previousOverflow = '';

function imageMarkup(image) {
  return '<img id="case-image" class="' + (image.phone ? 'is-phone' : '') + '" src="' + image.src + '" alt="' + image.alt + '">' +
    '<p class="dialog-caption" id="case-image-caption">' + image.caption + '</p>';
}

function showProject(key, opener) {
  const project = projects[key];
  if (!project || !dialog || typeof dialog.showModal !== 'function') return false;
  activeProject = project; activeImage = 0; returnFocus = opener;
  dialogContent.innerHTML = '<header class="dialog-header"><p class="eyebrow">' + project.label + '</p><h2 id="dialog-title">' + project.title + '</h2></header>' +
    '<div class="dialog-layout"><div class="dialog-visual"><div id="case-image-holder">' + imageMarkup(project.images[0]) + '</div>' +
    (project.images.length > 1 ? '<div class="image-controls"><button type="button" data-image-step="-1" aria-label="Previous project image">←</button><span id="image-position" aria-live="polite">1 / ' + project.images.length + '</span><button type="button" data-image-step="1" aria-label="Next project image">→</button></div>' : '') +
    '</div><div class="dialog-details"><p>' + project.description + '</p><h3>WHAT THE WORK DEMONSTRATES</h3><ul>' + project.details.map(detail => '<li>' + detail + '</li>').join('') + '</ul><h3>CONTRIBUTION & CONTEXT</h3><p class="dialog-credit">' + project.credit + '</p><div class="dialog-links">' + project.links.map(link => '<a href="' + link.href + '">' + link.label + ' ↗</a>').join('') + '</div></div></div>';
  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  dialog.showModal();
  dialog.scrollTop = 0;
  dialog.querySelector('.dialog-close').focus();
  return true;
}

document.querySelectorAll('[data-open]').forEach(opener => {
  opener.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (showProject(opener.dataset.open, opener)) event.preventDefault();
  });
});

if (dialog) {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    if (returnFocus && returnFocus.isConnected && !returnFocus.closest('[hidden]')) returnFocus.focus({preventScroll:true});
    activeProject = null;
  });
  dialogContent.addEventListener('click', event => {
    const button = event.target.closest('[data-image-step]');
    if (!button || !activeProject) return;
    activeImage = (activeImage + Number(button.dataset.imageStep) + activeProject.images.length) % activeProject.images.length;
    document.querySelector('#case-image-holder').innerHTML = imageMarkup(activeProject.images[activeImage]);
    document.querySelector('#image-position').textContent = (activeImage + 1) + ' / ' + activeProject.images.length;
  });
}

// Small, pointer-led depth. No timer, continuous animation or coarse-touch interaction.
const stage = document.querySelector('.depth-stage');
const art = document.querySelector('.hero-art');
const depthQuery = window.matchMedia('(prefers-reduced-motion: no-preference) and (pointer: fine)');
let depthFrame = null;
if (art && stage) {
  const resetDepth = () => {if (depthFrame) cancelAnimationFrame(depthFrame); stage.style.removeProperty('--pointer-x'); stage.style.removeProperty('--pointer-y');};
  art.addEventListener('pointermove', event => {
    if (!depthQuery.matches) return;
    const rect = art.getBoundingClientRect();
    const x = ((event.clientY - rect.top) / rect.height - .5) * -3;
    const y = ((event.clientX - rect.left) / rect.width - .5) * 4;
    if (depthFrame) cancelAnimationFrame(depthFrame);
    depthFrame = requestAnimationFrame(() => {stage.style.setProperty('--pointer-x', x.toFixed(2) + 'deg'); stage.style.setProperty('--pointer-y', y.toFixed(2) + 'deg');});
  });
  art.addEventListener('pointerleave', resetDepth);
  depthQuery.addEventListener('change', resetDepth);
}
