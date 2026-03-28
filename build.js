const fs = require('fs');
const calData = JSON.parse(fs.readFileSync('./data/calorie_data.json','utf8'));
const nutData = JSON.parse(fs.readFileSync('./data/nutrition_data.json','utf8'));
const XLSX = require('xlsx');

// Re-extract costPerYear with correct column index (18, not 17)
const wb1 = XLSX.readFile('./data/Calorie_Per_Dollar.xlsx');
const ws1 = wb1.Sheets['Food'];
const raw1 = XLSX.utils.sheet_to_json(ws1, {header:1});
const costPerYearMap = {};
const calPerDollarMap = {};
const protPerDollarMap = {};
for (let i = 2; i < raw1.length; i++) {
  const r = raw1[i];
  if (!r[0] || typeof r[0] !== 'string') continue;
  const key = r[0].trim().toLowerCase();
  costPerYearMap[key] = Math.round(r[18] || 0);
  calPerDollarMap[key] = Math.round(r[9] || 0);
  protPerDollarMap[key] = Math.round(r[10] || 0);
}
console.log('CostPerYear entries:', Object.keys(costPerYearMap).length);
console.log('Sample:', Object.entries(costPerYearMap).slice(0,5));

// Merge datasets by name
const merged = {};
nutData.forEach(n => {
  merged[n.name.toLowerCase()] = { ...n, _src: 'nut' };
});
calData.forEach(c => {
  const key = c.name.toLowerCase();
  if (merged[key]) {
    merged[key] = { ...merged[key], ...c, calPerDollar_cal: c.calPerDollar, protPerDollar_cal: c.protPerDollar };
  } else {
    merged[key] = { ...c, _src: 'cal' };
  }
});

function findFuzzyMatch(map, name) {
  // Try partial matches both ways
  for (const [k, v] of Object.entries(map)) {
    if (k.includes(name) || name.includes(k)) return v;
  }
  // Try without common prefixes
  const stripped = name.replace(/^(white|brown|plain|whole wheat|instant) /, '');
  for (const [k, v] of Object.entries(map)) {
    if (k.includes(stripped) || stripped.includes(k)) return v;
  }
  return 0;
}

const allFoods = Object.values(merged).map((f, i) => ({
  id: i,
  name: f.name || '',
  price: f.cost || f.price || 0,
  calPerDollar: f.calPerDollar_cal || f.calPerDollar || 0,
  protPerDollar: f.protPerDollar_cal || f.proteinPerDollar || 0,
  nutritionScore: f.nutritionScore || 0,
  rank: f.rank || 999,
  costPerYear: costPerYearMap[(f.name||'').toLowerCase()] || findFuzzyMatch(costPerYearMap, (f.name||'').toLowerCase()) || 0,
  fiberPerDollar: f.fiberPerDollar || 0,
  calciumPerDollar: f.calciumPerDollar || 0,
  ironPerDollar: f.ironPerDollar || 0,
  vitCPerDollar: f.vitCPerDollar || 0,
  vitAPerDollar: f.vitAPerDollar || 0,
  ratios: f.ratios || {},
  store: f.store || ''
})).sort((a,b) => (b.nutritionScore||0) - (a.nutritionScore||0));

// Verify costPerYear fix
const flour = allFoods.find(f => f.name === 'Flour');
console.log('Flour costPerYear:', flour ? flour.costPerYear : 'NOT FOUND');
const rice = allFoods.find(f => f.name.toLowerCase().includes('rice') && !f.name.toLowerCase().includes('fried'));
console.log('Rice costPerYear:', rice ? rice.costPerYear : 'NOT FOUND');

const foodsJSON = JSON.stringify(allFoods);

// Build HTML as regular string concatenation to avoid template literal issues with $ in JS code
const jsCode = fs.readFileSync(__dirname + '/app.js', 'utf8');
const cssCode = fs.readFileSync(__dirname + '/app.css', 'utf8');
const htmlTemplate = fs.readFileSync(__dirname + '/app.html', 'utf8');

// Inject data + JS + CSS into template
// Escape </tag sequences in JS strings to prevent HTML parser from closing <script>
// Only escape </ when followed by a letter (tag names), not in regex patterns
function escapeForScript(s) {
  return s.replace(/<\/([a-zA-Z])/g, '\\x3c/$1');
}

const html = htmlTemplate
  .split('/*__CSS__*/').join(cssCode)
  .split('/*__FOODS_DATA__*/').join('var FOODS = ' + foodsJSON + ';')
  .split('/*__APP_JS__*/').join(escapeForScript(jsCode));

fs.writeFileSync('./index.html', html);
console.log('Built! Size:', (Buffer.byteLength(html)/1024).toFixed(1) + ' KB');
process.exit(0);

const html_OLD = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>EIE Food Lab — Efficiency Is Everything</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{--bg:#ffffff;--bg2:#fafafa;--bg3:#f0f0f0;--accent:#33cd66;--accent-dark:#2ab557;--accent-light:#e8f9ee;--accent-blue:#0d47a1;--text:#5b5753;--text-dark:#1a1a1a;--text-light:#9c9d9b;--border:#e5e5e5;--white:#fff;--green:#33cd66;--yellow:#cc7a00;--orange:#e85d04;--red:#ff3131;--row-alt:#fffef0}
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg);color:var(--text);font-family:'Archivo Narrow',sans-serif;line-height:1.6;min-height:100vh}
body.dark{--bg:#1a1a2e;--bg2:#16213e;--bg3:#0f3460;--text:#e0e0e0;--text-dark:#fff;--text-light:#888;--border:#2a2a4a;--accent-light:rgba(51,205,102,0.1);--row-alt:rgba(255,255,255,0.02)}

/* NAV */
.nav{background:var(--white);border-bottom:2px solid var(--accent);position:sticky;top:0;z-index:100;padding:0 1rem;box-shadow:0 1px 3px rgba(0,0,0,0.06)}
body.dark .nav{background:var(--bg2)}
.nav-inner{max-width:1400px;margin:0 auto;display:flex;align-items:center;gap:0;overflow-x:auto;scrollbar-width:none}
.nav-inner::-webkit-scrollbar{display:none}
.nav-brand{font-weight:700;font-size:1.1rem;color:var(--text-dark);white-space:nowrap;padding:0.75rem 1.5rem 0.75rem 0;letter-spacing:0.5px;text-transform:uppercase}
.nav-brand span{color:var(--accent)}
.nav-btn{background:none;border:none;color:var(--text);padding:0.75rem 1.2rem;cursor:pointer;font-size:0.9rem;font-family:inherit;white-space:nowrap;border-bottom:3px solid transparent;transition:all 0.2s;font-weight:500;text-transform:uppercase;letter-spacing:0.5px}
.nav-btn:hover{color:var(--accent);background:var(--accent-light)}
.nav-btn.active{color:var(--accent);border-bottom-color:var(--accent);font-weight:700}
.nav-right{margin-left:auto;display:flex;gap:0.5rem;align-items:center}
.theme-toggle{background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:0.35rem 0.7rem;border-radius:4px;cursor:pointer;font-size:0.75rem;font-family:inherit}

/* SECTIONS */
.section{display:none;max-width:1400px;margin:0 auto;padding:1.5rem 1rem}
.section.active{display:block}
h2{color:var(--text-dark);font-size:1.5rem;margin-bottom:1rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px}
h2 span{color:var(--accent)}
h3{color:var(--text-dark);font-size:1.1rem;margin-bottom:0.5rem}

/* HERO STATS */
.hero-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-bottom:1.5rem}
.stat-card{background:var(--white);border-radius:8px;padding:1.25rem;border:1px solid var(--border);text-align:center}
body.dark .stat-card{background:var(--bg2)}
.stat-card .num{font-size:1.8rem;font-weight:700;color:var(--accent)}
.stat-card .label{font-size:0.8rem;color:var(--text-light);text-transform:uppercase;letter-spacing:0.5px}

/* SEARCH & SORT */
.search-bar{display:flex;gap:0.75rem;margin-bottom:1rem;flex-wrap:wrap;align-items:center}
.search-bar input{background:var(--white);border:2px solid var(--border);color:var(--text-dark);padding:0.6rem 1rem;border-radius:6px;font-size:0.95rem;font-family:inherit;flex:1;min-width:200px;transition:border 0.2s}
body.dark .search-bar input{background:var(--bg2)}
.search-bar input:focus{outline:none;border-color:var(--accent)}
.sort-btns{display:flex;gap:0.4rem;flex-wrap:wrap}
.sort-btn{background:var(--white);border:2px solid var(--border);color:var(--text);padding:0.45rem 0.9rem;border-radius:4px;cursor:pointer;font-size:0.8rem;font-family:inherit;font-weight:600;white-space:nowrap;transition:all 0.2s;text-transform:uppercase;letter-spacing:0.3px}
body.dark .sort-btn{background:var(--bg2)}
.sort-btn:hover{border-color:var(--accent);color:var(--accent)}
.sort-btn.active{background:var(--accent);color:#fff;border-color:var(--accent)}

/* TABLE */
.food-table{width:100%;border-collapse:collapse;font-size:0.9rem}
.food-table th{background:var(--bg2);color:var(--text-dark);padding:0.65rem 0.75rem;text-align:left;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.5px;cursor:pointer;white-space:nowrap;position:sticky;top:54px;z-index:10;border-bottom:2px solid var(--accent);font-weight:700}
body.dark .food-table th{background:var(--bg3)}
.food-table th:hover{color:var(--accent)}
.food-table th .sort-arrow{font-size:0.65rem;margin-left:3px;opacity:0.4}
.food-table th.sorted .sort-arrow{opacity:1;color:var(--accent)}
.food-table td{padding:0.55rem 0.75rem;border-bottom:1px solid var(--border)}
.food-table tbody tr{cursor:pointer;transition:background 0.1s}
.food-table tbody tr:nth-child(4n+1),.food-table tbody tr:nth-child(4n+2){background:var(--row-alt)}
.food-table tbody tr:hover{background:var(--accent-light)}
.food-table .rank-cell{font-weight:700;width:45px;text-align:center;font-size:0.85rem}
.food-table .name-cell{font-weight:600;color:var(--text-dark)}
.food-table .val{font-weight:600}
.tier-1 .rank-cell{color:var(--green)} .tier-2 .rank-cell{color:var(--yellow)} .tier-3 .rank-cell{color:var(--orange)} .tier-4 .rank-cell{color:var(--text-light)}
.expand-row{display:none}
.expand-row.open{display:table-row}
.expand-row td{padding:0;border:none}
.expand-content{padding:1.25rem;background:var(--bg2);border:1px solid var(--border);border-radius:0 0 8px 8px;margin:0 0.5rem 0.5rem 0.5rem}
body.dark .expand-content{background:var(--bg3)}

/* BAR CHART */
.bar-chart{display:grid;gap:0.35rem;margin-top:0.75rem}
.bar-row{display:flex;align-items:center;gap:0.5rem}
.bar-label{width:80px;font-size:0.75rem;color:var(--text-light);text-align:right;flex-shrink:0;font-weight:600}
.bar-track{flex:1;height:20px;background:var(--bg3);border-radius:3px;overflow:hidden}
body.dark .bar-track{background:rgba(255,255,255,0.05)}
.bar-fill{height:100%;border-radius:3px;transition:width 0.5s;display:flex;align-items:center;padding-left:6px;font-size:0.7rem;color:#fff;font-weight:700}
.bar-fill.cal{background:var(--accent)} .bar-fill.prot{background:var(--accent-blue)} .bar-fill.fib{background:var(--yellow)}
.bar-fill.iron{background:var(--orange)} .bar-fill.vitc{background:var(--red)} .bar-fill.vita{background:#7c3aed}
.bar-fill.calc{background:#0891b2}

/* WEEK PLANNER */
.week-tabs{display:flex;gap:0.5rem;margin-bottom:1rem;flex-wrap:wrap}
.week-tab{background:var(--white);border:2px solid var(--border);color:var(--text);padding:0.5rem 1.2rem;border-radius:6px;cursor:pointer;font-size:0.85rem;font-family:inherit;font-weight:600;text-transform:uppercase;letter-spacing:0.3px}
body.dark .week-tab{background:var(--bg2)}
.week-tab:hover{border-color:var(--accent)}
.week-tab.active{background:var(--accent);color:#fff;border-color:var(--accent)}
.week-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem}
.day-card{background:var(--white);border-radius:8px;padding:1.25rem;border:1px solid var(--border);transition:all 0.2s;cursor:pointer}
body.dark .day-card{background:var(--bg2)}
.day-card:hover{border-color:var(--accent);transform:translateY(-2px);box-shadow:0 4px 12px rgba(51,205,102,0.1)}
.day-card .day-name{font-size:0.75rem;color:var(--accent);text-transform:uppercase;letter-spacing:1px;margin-bottom:0.4rem;font-weight:700}
.day-card .meal-name{font-weight:700;font-size:1.05rem;color:var(--text-dark);margin-bottom:0.3rem}
.day-card .meal-meta{font-size:0.8rem;color:var(--text-light)}
.day-card .meal-cost{color:var(--accent);font-weight:700;font-size:0.9rem}

/* RECIPE CARDS */
.recipe-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1rem}
.recipe-card{background:var(--white);border-radius:8px;padding:1.25rem;border:1px solid var(--border);cursor:pointer;transition:all 0.2s}
body.dark .recipe-card{background:var(--bg2)}
.recipe-card:hover{border-color:var(--accent);transform:translateY(-2px);box-shadow:0 4px 12px rgba(51,205,102,0.1)}
.recipe-card .recipe-title{font-weight:700;font-size:1.05rem;color:var(--text-dark);margin-bottom:0.5rem}
.recipe-card .recipe-tags{display:flex;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.5rem}
.tag{font-size:0.7rem;padding:0.2rem 0.55rem;border-radius:3px;font-weight:600;text-transform:uppercase;letter-spacing:0.3px}
.tag.chicken{background:#fff3e0;color:#e65100} .tag.beef{background:#ffebee;color:#c62828} .tag.pork{background:#f3e5f5;color:#6a1b9a}
.tag.veg{background:#e8f5e9;color:#2e7d32} .tag.slow{background:#e3f2fd;color:#1565c0} .tag.fast{background:#fff8e1;color:#f57f17} .tag.budget{background:#e8f9ee;color:#1b7a3a}
body.dark .tag{opacity:0.9}

/* MODAL */
.modal-overlay{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:200;justify-content:center;align-items:start;padding:2rem;overflow-y:auto}
.modal-overlay.open{display:flex}
.modal{background:var(--white);border-radius:12px;max-width:700px;width:100%;padding:2rem;position:relative;border:2px solid var(--accent);box-shadow:0 20px 40px rgba(0,0,0,0.15)}
body.dark .modal{background:var(--bg2)}
.modal-close{position:absolute;top:1rem;right:1rem;background:none;border:none;color:var(--text-light);font-size:1.5rem;cursor:pointer}
.modal-close:hover{color:var(--red)}
.modal h3{color:var(--accent);margin-bottom:0.75rem;text-transform:uppercase;letter-spacing:0.3px}
.modal .ingredients{list-style:none;margin-bottom:1.25rem}
.modal .ingredients li{padding:0.35rem 0;border-bottom:1px solid var(--border);font-size:0.9rem}
.modal .ingredients li::before{content:"▸";color:var(--accent);margin-right:0.5rem;font-weight:700}
.modal .directions{color:var(--text);font-size:0.9rem;line-height:1.8}
.modal .directions p{margin-bottom:0.4rem}

/* BUDGET */
.budget-controls{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem;margin-bottom:2rem}
.control-group{background:var(--white);padding:1.25rem;border-radius:8px;border:1px solid var(--border)}
body.dark .control-group{background:var(--bg2)}
.control-group label{display:block;font-size:0.85rem;color:var(--text);margin-bottom:0.5rem;font-weight:600}
.control-group input[type=range]{width:100%;accent-color:var(--accent)}
.control-group select{width:100%;background:var(--white);border:2px solid var(--border);color:var(--text-dark);padding:0.5rem;border-radius:4px;font-family:inherit}
body.dark .control-group select{background:var(--bg)}
.budget-output{font-size:1.3rem;font-weight:700;color:var(--accent)}
.budget-comparison{background:var(--white);padding:1.5rem;border-radius:8px;border:1px solid var(--border);margin-bottom:1.5rem;display:grid;grid-template-columns:1fr auto 1fr;gap:1rem;align-items:center;text-align:center}
body.dark .budget-comparison{background:var(--bg2)}
.budget-comparison .vs{color:var(--text-light);font-size:0.9rem;font-weight:700}
.grocery-list{background:var(--white);padding:1.25rem;border-radius:8px;border:1px solid var(--border)}
body.dark .grocery-list{background:var(--bg2)}
.grocery-item{display:flex;justify-content:space-between;padding:0.45rem 0;border-bottom:1px solid var(--border);font-size:0.9rem}

/* TIPS */
.tips-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:1rem}
.tip-card{background:var(--white);border-radius:8px;padding:1.5rem;border-left:4px solid var(--accent);border:1px solid var(--border);border-left:4px solid var(--accent)}
body.dark .tip-card{background:var(--bg2)}
.tip-card .tip-text{font-size:0.95rem;line-height:1.6;color:var(--text-dark)}
.tip-card .tip-source{font-size:0.75rem;color:var(--text-light);margin-top:0.5rem;font-style:italic}

/* SURPRISE */
.surprise-btn{background:var(--accent);color:#fff;border:none;padding:0.75rem 2rem;border-radius:6px;font-size:1rem;font-weight:700;font-family:inherit;cursor:pointer;transition:all 0.2s;margin-bottom:1.5rem;text-transform:uppercase;letter-spacing:0.5px}
.surprise-btn:hover{background:var(--accent-dark);transform:scale(1.03);box-shadow:0 4px 15px rgba(51,205,102,0.3)}

/* FILTER */
.filter-bar{display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1rem}
.filter-btn{background:var(--white);border:2px solid var(--border);color:var(--text);padding:0.4rem 0.9rem;border-radius:20px;cursor:pointer;font-size:0.8rem;font-family:inherit;font-weight:600;transition:all 0.2s}
body.dark .filter-btn{background:var(--bg2)}
.filter-btn:hover{border-color:var(--accent);color:var(--accent)}
.filter-btn.active{background:var(--accent);color:#fff;border-color:var(--accent)}

/* FOOTER */
footer{text-align:center;padding:2rem 1rem;color:var(--text-light);font-size:0.8rem;border-top:2px solid var(--accent);margin-top:2rem;background:var(--bg2)}
footer a{color:var(--accent);text-decoration:none;font-weight:600}

/* RESPONSIVE */
@media(max-width:768px){
  .food-table{font-size:0.8rem}
  .food-table th,.food-table td{padding:0.4rem 0.5rem}
  .hero-stats{grid-template-columns:repeat(2,1fr)}
  .nav-brand{font-size:0.9rem}
  .budget-comparison{grid-template-columns:1fr;gap:0.5rem}
  .nav-btn{padding:0.6rem 0.8rem;font-size:0.8rem}
}
</style>
</head>
<body>
<nav class="nav"><div class="nav-inner">
  <div class="nav-brand"><span>Efficiency</span> Is Everything</div>
  <button class="nav-btn active" data-tab="rankings">Rankings</button>
  <button class="nav-btn" data-tab="planner">Meal Planner</button>
  <button class="nav-btn" data-tab="recipes">Recipes</button>
  <button class="nav-btn" data-tab="budget">Budget Calc</button>
  <button class="nav-btn" data-tab="tips">Quick Tips</button>
  <div class="nav-right"><button class="theme-toggle" onclick="toggleTheme()">🌙 Dark Mode</button></div>
</div></nav>

<!-- RANKINGS -->
<div class="section active" id="rankings">
  <h2>Food <span>Rankings</span></h2>
  <div class="hero-stats">
    <div class="stat-card"><div class="num" id="totalFoods">0</div><div class="label">Foods Analyzed</div></div>
    <div class="stat-card"><div class="num" id="topCalDollar">—</div><div class="label">Best Cal/$</div></div>
    <div class="stat-card"><div class="num" id="topProtDollar">—</div><div class="label">Best Protein/$</div></div>
    <div class="stat-card"><div class="num" id="cheapestYear">—</div><div class="label">Cheapest Annual Diet</div></div>
  </div>
  <div class="search-bar">
    <input type="text" id="foodSearch" placeholder="Search foods... (e.g. chicken, beans, milk)">
    <div class="sort-btns">
      <button class="sort-btn active" data-sort="nutritionScore">Nutrition Score ↓</button>
      <button class="sort-btn" data-sort="calPerDollar">Cal/$ ↓</button>
      <button class="sort-btn" data-sort="protPerDollar">Protein/$ ↓</button>
      <button class="sort-btn" data-sort="costPerYear">Annual Cost ↑</button>
    </div>
  </div>
  <div style="overflow-x:auto">
  <table class="food-table">
    <thead><tr>
      <th data-col="rank">Rank <span class="sort-arrow">▼</span></th>
      <th>Food</th>
      <th data-col="price">Price</th>
      <th data-col="calPerDollar">Cal/$ <span class="sort-arrow">▼</span></th>
      <th data-col="protPerDollar">Prot/$ <span class="sort-arrow">▼</span></th>
      <th data-col="nutritionScore">Nutrition Score <span class="sort-arrow">▼</span></th>
      <th data-col="costPerYear">Annual Cost <span class="sort-arrow">▼</span></th>
    </tr></thead>
    <tbody id="foodBody"></tbody>
  </table>
  </div>
</div>

<!-- MEAL PLANNER -->
<div class="section" id="planner">
  <h2>4-Week <span>Meal Rotation</span></h2>
  <p style="color:var(--text-light);margin-bottom:1rem">28 recipes from the Efficiency Is Everything Cookbook. Click any meal for the full recipe.</p>
  <div class="week-tabs" id="weekTabs"></div>
  <div id="weekContent"></div>
  <div style="margin-top:1rem;padding:1rem;background:var(--white);border:1px solid var(--border);border-radius:8px">
    <span style="color:var(--text)">Estimated weekly cost (2 people): </span>
    <span style="color:var(--accent);font-weight:700;font-size:1.3rem" id="weekCost">~$24</span>
  </div>
</div>

<!-- RECIPES -->
<div class="section" id="recipes">
  <h2>Recipe <span>Collection</span></h2>
  <button class="surprise-btn" onclick="surpriseMe()">🎲 Surprise Me</button>
  <div class="filter-bar" id="recipeFilters">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="chicken">🐔 Chicken</button>
    <button class="filter-btn" data-filter="beef">🥩 Beef</button>
    <button class="filter-btn" data-filter="pork">🐷 Pork</button>
    <button class="filter-btn" data-filter="veg">🥬 Vegetarian</button>
    <button class="filter-btn" data-filter="slow">⏱️ Slow Cooker</button>
    <button class="filter-btn" data-filter="fast">⚡ Under 15 min</button>
    <button class="filter-btn" data-filter="budget">💰 $1.50/day</button>
  </div>
  <div class="recipe-grid" id="recipeGrid"></div>
</div>

<!-- BUDGET -->
<div class="section" id="budget">
  <h2>Budget <span>Calculator</span></h2>
  <div class="budget-controls">
    <div class="control-group">
      <label>Weekly Food Budget: <span class="budget-output" id="budgetDisplay">$50</span></label>
      <input type="range" id="budgetSlider" min="10" max="200" value="50" step="5">
    </div>
    <div class="control-group">
      <label>Number of People: <span class="budget-output" id="peopleDisplay">2</span></label>
      <input type="range" id="peopleSlider" min="1" max="8" value="2">
    </div>
    <div class="control-group">
      <label>Dietary Focus:</label>
      <select id="dietSelect">
        <option value="standard">Standard (balanced)</option>
        <option value="protein">High Protein</option>
        <option value="vegetarian">Vegetarian</option>
      </select>
    </div>
  </div>
  <div class="budget-comparison">
    <div><div style="font-size:2rem;font-weight:800;color:var(--accent)" id="yourCost">$25/wk</div><div style="font-size:0.85rem;color:var(--text-light)">Your Plan (per person)</div></div>
    <div class="vs">VS</div>
    <div><div style="font-size:2rem;font-weight:800;color:var(--red)">$75/wk</div><div style="font-size:0.85rem;color:var(--text-light)">Average American</div></div>
  </div>
  <div class="grocery-list">
    <h3>Recommended Foods <span style="color:var(--accent)">For Your Budget</span></h3>
    <div id="groceryItems"></div>
  </div>
</div>

<!-- TIPS -->
<div class="section" id="tips">
  <h2>Efficiency <span>Tips</span></h2>
  <div class="tips-grid" id="tipsGrid"></div>
</div>

<!-- MODAL -->
<div class="modal-overlay" id="modal">
  <div class="modal">
    <button class="modal-close" onclick="closeModal()">&times;</button>
    <div id="modalContent"></div>
  </div>
</div>

<footer>
  Data from <a href="https://efficiencyiseverything.com" target="_blank">Efficiency Is Everything</a> by Michael Kirk<br>
  Industrial Engineering Applied to Life — Save Time, Save Money, Live Better
</footer>

<script>
// === DATA ===
const FOODS = ${foodsJSON};

const RECIPES = [
  // Week 1
  {id:1,week:1,day:"Sunday",name:"Beef Casserole",cost:4.50,time:"15 min active",servings:6,protein:"beef",method:"oven",
   tags:["beef"],
   ingredients:["2¼ lbs ground beef","1 can cream of chicken soup","Potatoes (3-4 large)","1 cup shredded cheese","Salt, pepper, garlic powder"],
   directions:"1. Brown the ground beef on medium-high heat, breaking into small pieces.\\n2. Season with salt, pepper, garlic powder.\\n3. Cut potatoes into thin slices (half-moons work great).\\n4. Layer in oven-safe dish: potatoes, ground beef, cream of chicken soup, cheese.\\n5. Repeat layers. Top with remaining cheese.\\n6. Bake at 350°F for 45-60 minutes until potatoes are soft.\\n7. Let rest 5 minutes before serving."},
  {id:2,week:1,day:"Monday",name:"Thai Fried Rice",cost:3.50,time:"20 min",servings:4,protein:"chicken",method:"stovetop",
   tags:["chicken"],
   ingredients:["2-3 chicken breasts","4 cups cooked rice","4 eggs","Soy sauce","Fish sauce","Lime","Garlic","8 tbsp butter (optional, for Thai restaurant taste)","Green onions"],
   directions:"1. Cut chicken into small pieces. Cook on medium-high heat 4 min per side.\\n2. Push chicken to edges, crack eggs in center, scramble.\\n3. Add rice, soy sauce, fish sauce, garlic. Toss everything together.\\n4. Add butter for that authentic Thai restaurant flavor.\\n5. Squeeze lime, top with green onions. Serve immediately."},
  {id:3,week:1,day:"Tuesday",name:"Carlos' Favorite Fajitas",cost:4.00,time:"25 min",servings:4,protein:"chicken",method:"stovetop",
   tags:["chicken"],
   ingredients:["3 chicken breasts","Flour tortillas","Pinto beans (slow cooker)","Fajita seasoning (chili powder, cumin, garlic, paprika, onion powder, cornstarch)","Lime","Cheese, salsa"],
   directions:"1. Start pinto beans in slow cooker: 3 cups beans, 8 cups water, all day.\\n2. Make fajita seasoning in bulk (save in a bag).\\n3. Cut chicken breasts, cook 4 min each side on medium heat.\\n4. Spray with lime juice while cooking.\\n5. Add seasoning and a splash of water. Let thicken.\\n6. Serve in tortillas with beans, cheese, salsa."},
  {id:4,week:1,day:"Wednesday",name:"Slow Cooker Sausage & Peppers",cost:3.00,time:"5 min active",servings:4,protein:"pork",method:"slow cooker",
   tags:["pork","slow"],
   ingredients:["4 Italian sausage links","1 jar marinara sauce","1 bell pepper, sliced","Whole wheat elbow noodles"],
   directions:"1. Put sausage, marinara, and peppers in slow cooker.\\n2. Cook on low for 6+ hours.\\n3. Cook noodles separately.\\n4. Serve sausage and peppers over noodles.\\n\\nIf leaving on 7+ hours, add 1 cup water."},
  {id:5,week:1,day:"Thursday",name:"Breakfast for Dinner: Eggs & Sausage",cost:2.00,time:"10 min",servings:2,protein:"pork",method:"stovetop",
   tags:["pork","fast"],
   ingredients:["6 eggs","6 breakfast sausage links","Toast","Butter"],
   directions:"1. Cook sausages in a small pot with water on medium heat until browned.\\n2. Fry eggs to your preference (over easy recommended).\\n3. Toast bread.\\n4. Serve together. Simple, fast, high protein per dollar."},
  {id:6,week:1,day:"Friday",name:"Pulled Chicken BBQ",cost:3.50,time:"5 min active",servings:4,protein:"chicken",method:"slow cooker",
   tags:["chicken","slow"],
   ingredients:["4-6 chicken thighs","1 can soda (Dr Pepper/Coke)","High quality BBQ sauce","Buns"],
   directions:"1. Put chicken thighs and soda in slow cooker.\\n2. Cook on high 4 hours or low 6+ hours.\\n3. Shred the chicken.\\n4. Optional: brown in a pan on medium-high for crispy edges.\\n5. Serve on buns with BBQ sauce."},
  {id:7,week:1,day:"Saturday",name:"Whole Chicken & Gravy",cost:5.00,time:"20 min active",servings:6,protein:"chicken",method:"oven",
   tags:["chicken"],
   ingredients:["1 whole chicken","Potatoes","Green beans","Butter","Flour","Chicken bouillon cubes","Salt, pepper"],
   directions:"1. Preheat oven to 350°F. Place whole chicken in pan, season.\\n2. Roast until 165°F internal (~1.5 hours). Save the drippings!\\n3. For gravy: make a roux (3 tbsp butter + 3 tbsp flour), add drippings + broth.\\n4. Boil potatoes, mash with butter and milk.\\n5. Steam green beans. Serve everything together."},
  // Week 2
  {id:8,week:2,day:"Sunday",name:"Football Chili",cost:5.00,time:"30 min",servings:8,protein:"beef",method:"stovetop",
   tags:["beef"],
   ingredients:["1½-2½ lbs ground beef","2 cans kidney beans","1 can diced tomatoes","1 can tomato sauce","Onion, green pepper","Chili spice blend (chili powder, cumin, paprika, garlic, oregano, cayenne)","Crackers or noodles"],
   directions:"1. Make chili spice blend in bulk.\\n2. Dice onion and green pepper.\\n3. Brown ground beef in large pan.\\n4. Transfer to large pot. Cook veggies in beef drippings.\\n5. Add everything: beans, tomatoes, sauce, spices.\\n6. Simmer 30+ minutes (longer = better).\\n7. Serve with crackers or whole wheat elbow noodles."},
  {id:9,week:2,day:"Monday",name:"Teriyaki Chicken & Rice",cost:3.50,time:"20 min",servings:4,protein:"chicken",method:"stovetop",
   tags:["chicken"],
   ingredients:["3 chicken breasts","Soy sauce","Brown sugar","Garlic","Ginger","Rice","Cornstarch"],
   directions:"1. Cook rice. Cut chicken into bite-sized pieces.\\n2. Make teriyaki: soy sauce, brown sugar, garlic, ginger, cornstarch slurry.\\n3. Cook chicken 4 min per side on medium-high.\\n4. Add sauce, let thicken. Serve over rice."},
  {id:10,week:2,day:"Tuesday",name:"Tacos",cost:3.50,time:"20 min",servings:4,protein:"beef",method:"stovetop",
   tags:["beef","fast"],
   ingredients:["1½ lbs ground beef","Taco seasoning (chili powder, cumin, garlic, paprika, onion, oregano, cornstarch)","Taco shells or tortillas","Cheese, lettuce, salsa, sour cream"],
   directions:"1. Brown ground beef on medium-high.\\n2. Add taco seasoning and water. Simmer until thick.\\n3. Warm shells. Build tacos with your toppings."},
  {id:11,week:2,day:"Wednesday",name:"Slow Cooker Pulled Pork BBQ",cost:4.00,time:"5 min active",servings:6,protein:"pork",method:"slow cooker",
   tags:["pork","slow"],
   ingredients:["Pork shoulder/loin","1 can soda","BBQ sauce","Buns"],
   directions:"1. Put pork and soda in slow cooker.\\n2. Set for 6 hours high or 8+ hours low.\\n3. Shred the pork. Optional: brown in pan for crispy edges.\\n4. Serve on buns with BBQ sauce."},
  {id:12,week:2,day:"Thursday",name:"Enchiladas",cost:4.00,time:"25 min",servings:4,protein:"chicken",method:"oven",
   tags:["chicken"],
   ingredients:["Leftover pulled chicken","Flour tortillas","Enchilada sauce (tomato paste, chicken broth, chili powder, cumin, garlic)","Cheese","Sour cream"],
   directions:"1. Make enchilada sauce: tomato paste + chicken broth + spices.\\n2. Fill tortillas with shredded chicken and cheese.\\n3. Roll up seam-down in baking dish.\\n4. Cover with sauce and more cheese.\\n5. Bake 375°F for 20 minutes."},
  {id:13,week:2,day:"Friday",name:'"Sunday" Chicken',cost:3.00,time:"5 min active",servings:4,protein:"chicken",method:"slow cooker",
   tags:["chicken","slow"],
   ingredients:["5 chicken thighs","1 can cream of chicken soup","1 packet dry Italian seasoning","4 oz cream cheese"],
   directions:"1. Put everything in slow cooker.\\n2. Cook on low for 6+ hours.\\n3. Shred chicken and mix with the creamy sauce.\\n4. Serve over rice or noodles.\\n\\nSo easy we make it on Fridays. Swap cream of mushroom to change it up."},
  {id:14,week:2,day:"Saturday",name:"Nachos",cost:3.00,time:"15 min",servings:4,protein:"beef",method:"oven",
   tags:["beef","fast"],
   ingredients:["Leftover taco meat","Tortilla chips","Cheese","Jalapeños","Salsa","Sour cream"],
   directions:"1. Spread chips on baking sheet.\\n2. Top with taco meat and cheese.\\n3. Broil until cheese melts (watch carefully!).\\n4. Top with jalapeños, salsa, sour cream."},
  // Week 3
  {id:15,week:3,day:"Sunday",name:"Creamy Chicken Tortilla Soup",cost:4.00,time:"10 min active",servings:6,protein:"chicken",method:"slow cooker",
   tags:["chicken","slow"],
   ingredients:["5 chicken thighs","2 cups chicken broth","1 can black beans","1 can corn","1 can green chilis","Cream cheese","Tortilla chips","Chili powder, cumin"],
   directions:"1. Put everything except tortilla chips and cream cheese in slow cooker.\\n2. Cook on high 4 hours or low 6+ hours.\\n3. Optional: make a roux for extra thickness.\\n4. Shred chicken. Stir in cream cheese until melted.\\n5. Serve with tortilla chips for dipping."},
  {id:16,week:3,day:"Monday",name:"Chicken Alfredo",cost:4.00,time:"20 min",servings:4,protein:"chicken",method:"stovetop",
   tags:["chicken"],
   ingredients:["3 chicken breasts","Angel hair pasta","Alfredo sauce (butter, flour, milk, parmesan)","Broccoli","Salt, pepper"],
   directions:"1. Boil water for pasta. Cut chicken, cook 4 min per side.\\n2. Make roux for alfredo sauce.\\n3. Start noodles (5 min for angel hair).\\n4. Add broccoli and alfredo to chicken pan.\\n5. Serve sauce and chicken over noodles immediately.\\n\\nTiming is everything — cold noodles are the enemy."},
  {id:17,week:3,day:"Tuesday",name:"Spaghetti & Marinara",cost:2.50,time:"20 min",servings:4,protein:"beef",method:"stovetop",
   tags:["beef"],
   ingredients:["1 lb ground beef (optional)","Spaghetti noodles","Marinara sauce","Garlic bread","Parmesan"],
   directions:"1. Cook spaghetti per package directions.\\n2. Brown ground beef, drain fat. Add marinara sauce, simmer.\\n3. Serve over pasta with parmesan."},
  {id:18,week:3,day:"Wednesday",name:"Hamburger Mac",cost:3.00,time:"15 min",servings:4,protein:"beef",method:"stovetop",
   tags:["beef","fast"],
   ingredients:["1 lb ground beef","1 box mac and cheese","Salt, pepper"],
   directions:"1. Brown ground beef on medium-high.\\n2. Make mac and cheese per box directions.\\n3. Mix together. Kids love this one."},
  {id:19,week:3,day:"Thursday",name:"Slow Cooker Pork Loin",cost:4.00,time:"5 min active",servings:6,protein:"pork",method:"slow cooker",
   tags:["pork","slow"],
   ingredients:["Pork loin","Brown sugar","Garlic","Salt, pepper","Side vegetables"],
   directions:"1. Rub pork loin with brown sugar, garlic, salt, pepper.\\n2. Place in slow cooker for 6+ hours high or 8+ low.\\n3. Slice and serve with sides."},
  {id:20,week:3,day:"Friday",name:"Your Choice Friday",cost:3.00,time:"varies",servings:4,protein:"chicken",method:"stovetop",tags:["chicken"],
   ingredients:["Pick a protein","Pick a carb","Pick a veggie","Search: protein + carb + veggie online"],
   directions:"The EIE formula:\\n1. Pick a low cost protein: chicken, beans, lentils, eggs\\n2. Pick a low cost carb: rice, noodles, potatoes\\n3. Pick a flavor: spices, veggies, sauce\\n4. Search '[protein] [carb] [veggie]' online — 30 million results."},
  {id:21,week:3,day:"Saturday",name:"Your Choice Saturday",cost:3.00,time:"varies",servings:4,protein:"chicken",method:"stovetop",tags:["chicken"],
   ingredients:["Same formula as Friday — experiment!"],
   directions:"Try something new. All food tastes good if you add:\\n• Salt\\n• Acid (lemon/lime/vinegar)\\n• Sugar\\n• Fat (butter/oil)\\n• Umami (soy sauce/MSG)\\n\\nThe 5 cheat codes to cooking."},
  // Week 4
  {id:22,week:4,day:"Sunday",name:"Lentil Soup",cost:2.00,time:"15 min active",servings:6,protein:"veg",method:"stovetop",
   tags:["veg"],
   ingredients:["2 cups lentils","8 cups chicken broth","Carrots","Onion","Celery","Garlic","Cumin, turmeric"],
   directions:"1. Dice onion, carrots, celery. Sauté until translucent.\\n2. Add lentils, broth, garlic, spices.\\n3. Simmer 25-30 minutes until lentils are soft.\\n4. Optional: blend half for creamy texture.\\n5. Serve as-is or over noodles. Addictive."},
  {id:23,week:4,day:"Monday",name:"Pad Thai",cost:4.00,time:"20 min",servings:4,protein:"chicken",method:"stovetop",
   tags:["chicken"],
   ingredients:["2-3 chicken breasts","12 oz rice noodles","4 eggs","Pad Thai sauce (fish sauce, soy sauce, brown sugar, lime, chili flakes)","Bean sprouts","Green onions","Peanuts"],
   directions:"1. Prepare rice noodles (soak, don't over-boil).\\n2. Cut chicken small. Cook 4 min per side.\\n3. Push to sides, scramble eggs in center.\\n4. Add noodles and sauce. Fold gently — too much stirring = mushy noodles.\\n5. Top with peanuts, green onions, lime."},
  {id:24,week:4,day:"Tuesday",name:"Italian Chicken Quesadilla",cost:3.00,time:"15 min",servings:4,protein:"chicken",method:"stovetop",
   tags:["chicken","fast"],
   ingredients:["2 chicken breasts","Flour tortillas","Mozzarella cheese","Italian seasoning","Marinara for dipping"],
   directions:"1. Cut chicken, cook 4 min per side with Italian seasoning.\\n2. Build quesadillas: tortilla, cheese, chicken, cheese, fold.\\n3. Cook in hot pan until golden and melted.\\n4. Serve with marinara for dipping."},
  {id:25,week:4,day:"Wednesday",name:"Hobo Stew",cost:3.50,time:"15 min active",servings:4,protein:"beef",method:"oven",
   tags:["beef"],
   ingredients:["1+ lb ground beef","Potatoes, cubed","Carrots, sliced","Onion","Aluminum foil","Salt, pepper, butter"],
   directions:"1. Make hamburger patties. Place on foil with cubed potatoes, carrots, onion.\\n2. Season, add butter. Wrap into sealed packets.\\n3. Oven 350°F for 45 min, OR slow cooker 4-6 hours.\\n\\nVersatile — throw in whatever veggies you have."},
  {id:26,week:4,day:"Thursday",name:"Bagel Egg & Cheese",cost:1.50,time:"8 min",servings:1,protein:"veg",method:"stovetop",
   tags:["veg","fast"],
   ingredients:["1 bagel","2 eggs","1 slice cheese","Breakfast sausage (optional)","Butter"],
   directions:"1. Toast bagel. Fry eggs.\\n2. Place cheese on egg while hot.\\n3. Assemble on bagel. Done in 8 minutes."},
  {id:27,week:4,day:"Friday",name:"Salsa Chicken Burritos",cost:3.00,time:"5 min active",servings:4,protein:"chicken",method:"slow cooker",
   tags:["chicken","slow"],
   ingredients:["5 chicken thighs","1 jar salsa","Flour tortillas","Cheese","Jalapeños","Black beans (optional)"],
   directions:"1. Put chicken and salsa in slow cooker. High 4 hours or low 6+.\\n2. Shred chicken.\\n3. Wrap in tortillas with cheese and jalapeños.\\n4. Optional: pan-sear the burrito 2-3 min per side for crispy seal."},
  {id:28,week:4,day:"Saturday",name:"Pork Thai Fried Rice",cost:3.50,time:"15 min",servings:4,protein:"pork",method:"stovetop",
   tags:["pork"],
   ingredients:["Leftover pulled pork","4 cups cooked rice","4 eggs","Soy sauce","Fish sauce","Butter","Lime","Green onions"],
   directions:"1. Same as Thai Fried Rice but with pulled pork — no cutting needed.\\n2. Cook rice, scramble eggs, toss everything with soy sauce and butter.\\n3. Savory and sweet. Our preferred fried rice method."},
  // $1.50/day recipes
  {id:29,week:0,day:"Budget",name:"Potato Soup ($1.50/day)",cost:0.75,time:"25 min",servings:4,protein:"veg",method:"stovetop",
   tags:["veg","budget"],
   ingredients:["3 tbsp oil or butter","3 tbsp flour","2 cups milk","2 cups chicken stock (or 2 bouillon cubes + water)","3-4 potatoes, cubed","Salt, pepper"],
   directions:"1. Make a roux: oil/butter + flour, cook on low-medium 5 min stirring often.\\n2. Add milk, stock, potatoes, salt, pepper.\\n3. Bring to boil, then simmer 20 minutes.\\n4. Potatoes should be soft and soup creamy."},
  {id:30,week:0,day:"Budget",name:"Crepes ($1.50/day)",cost:0.50,time:"15 min",servings:4,protein:"veg",method:"stovetop",
   tags:["veg","budget","fast"],
   ingredients:["3 eggs","1 cup flour","1 cup milk","1 tbsp sugar","½ tsp salt","PB&J, chocolate, or Nutella for filling"],
   directions:"1. Mix all ingredients well. Heat medium pan on low.\\n2. Pour ¼ of mixture, rotate pan to coat bottom.\\n3. Cook ~2 min, flip, cook <1 min.\\n4. Stuff with PB&J (favorite), chocolate, or Nutella.\\n\\nThese taste LUXURY. You'll forget it's budget food."},
  {id:31,week:0,day:"Budget",name:"Homemade Noodles ($1.50/day)",cost:0.60,time:"25 min",servings:2,protein:"veg",method:"stovetop",
   tags:["veg","budget"],
   ingredients:["3 eggs","1 tsp salt","2 tbsp water or milk","2 cups flour","Soup, marinara, or alfredo sauce"],
   directions:"1. Mix eggs, salt, water, flour until combined.\\n2. Roll out thin on floured board. Cut into strips.\\n3. Boil water, cook noodles ~2 minutes.\\n4. Serve with broth, marinara, or alfredo.\\n\\nFresh noodles are life-changing."},
  {id:32,week:0,day:"Budget",name:"Mashed Potatoes ($1.50/day)",cost:0.50,time:"30 min",servings:6,protein:"veg",method:"stovetop",
   tags:["veg","budget"],
   ingredients:["4-6 potatoes","½ cup milk","1+ tsp salt","Pepper","Butter (optional)"],
   directions:"1. Boil potatoes whole (don't bother peeling).\\n2. When fork-tender (~30 min), mash with milk and salt.\\n3. If it doesn't taste good: more salt, more pepper."},
  {id:33,week:0,day:"Budget",name:"Pierogis ($1.50/day)",cost:0.75,time:"30 min",servings:4,protein:"veg",method:"stovetop",
   tags:["veg","budget"],
   ingredients:["Dough: 2 eggs, 2 cups flour, ½ cup water, 1 tsp salt","Filling: leftover mashed potatoes + cheese"],
   directions:"1. Make dough: mix eggs, flour, water, salt. Roll thin.\\n2. Cut circles (cup works as cutter).\\n3. Fill with mashed potato + cheese. Fold, seal with fork.\\n4. Boil 3-4 min until they float.\\n5. Optional: pan fry in butter for crispy edges."},
  // Cooking Cheat Codes recipe
  {id:34,week:0,day:"Guide",name:"5 Cooking Cheat Codes",cost:0,time:"Reference",servings:0,protein:"veg",method:"stovetop",
   tags:["veg"],
   ingredients:["Acid — Lime, Lemon, Vinegar","Salt — taste as you go","Sugar — a bit of brown sugar or syrup","Fat — Butter, oil, cream","Umami — MSG, fish sauce, Worcestershire, soy sauce","Colors — bright veggies (don't overcook)","Aromatics — Garlic, onion, mirepoix","Capsaicin (optional) — hot sauce, cayenne"],
   directions:"Make any food taste good by including all 5 taste triggers:\\n\\n1. ACID — Lime juice, lemon juice, or vinegar. Your body craves Vitamin C.\\n2. SALT — Essential nutrient. Add slowly, taste as you go.\\n3. SUGAR — Quick energy. Just a pinch of brown sugar.\\n4. FAT — Butter, oil, cream. Adds smoothness and satisfaction.\\n5. UMAMI — MSG, fish sauce, soy sauce. Amino acids your body wants.\\n\\nBonus: Add bright-colored veggies (visual appeal), aromatics (garlic/onion), and optional heat (cayenne/hot sauce).\\n\\nLayer these across each component: season the chicken, the rice, AND the veggies separately.\\n\\nPsychology trick: Name your food. 'Grandma's Chili' tastes better than 'Chili.'"}
];

const CHICKEN_IDEAS = [
  "Chicken Hamburger Helper","Chicken Mac & Cheese","Chicken Pesto","Chicken Shepherd's Pie",
  "Slowcooker Chicken in Lentil Soup","Golden Curry Chicken","Stuffed Pepper Soup",
  "Cheesy Broccoli Soup","Chicken Rice & Cheese","Fajita Chicken & Rice",
  "Butter Chicken","Chicken Biryani","Breaded Chicken","Chicken Pot Pie",
  "BBQ Chicken Pizza","Chicken Noodle Soup","Chicken Lettuce Wraps",
  "Chicken & Mashed Potatoes","White Chili","Chicken Shawarma","Chicken Mole",
  "Chicken Carbonara","Chicken Casserole","Corn Chowder w/ Chicken",
  "Chicken & Waffles","Caesar Salad w/ Chicken"
];

const TIPS = [
  {text:"Fresh food is almost always cheaper than canned, frozen, or processed. Marketing companies got away with the opposite lie for 20 years. Data shuts the myth down.",source:"Nutrition Per Dollar Study"},
  {text:"Replace a $1.69 red pepper with carrots. Just as sweet, 3x the nutrition per dollar.",source:"Food Nutrition Guide"},
  {text:"5 cheat codes to make anything delicious: Salt, Acid (lemon/lime/vinegar), Sugar, Fat (butter/oil), Umami (soy sauce/MSG).",source:"Cooking Cheat Codes"},
  {text:"Aim for 700 calories per dollar to eat for about $1,000 a year.",source:"Calorie Per Dollar Study"},
  {text:"Instant oats cost 5x more than regular oats. Same food, different marketing.",source:"Price Comparison"},
  {text:"Beans and lentils are the ultimate superfoods: 80-140g protein per dollar, tons of fiber, incredibly cheap.",source:"Protein Per Dollar"},
  {text:"Greek yogurt gives 16g protein per dollar. Chicken gives 50g. Do the math before buying 'health food.'",source:"Protein Per Dollar"},
  {text:"The cheapest fast food (Little Caesar's at 420 cal/$) is still 2x more expensive than cooking at home.",source:"Fast Food Comparison"},
  {text:"Type any protein + carb + veggie into Google. There will be a recipe. Since all food tastes good, it probably will too.",source:"Cookbook Philosophy"},
  {text:"We cycle through 28 recipes. Grocery shopping takes less than 15 minutes including checkout because we sorted our list by aisle.",source:"Meal Planning"},
  {text:"Sleep less, do more: Biphasic sleep (6hr night + 20min nap) saves 12 hours per week.",source:"Sleep Efficiency"},
  {text:"Standing taller and fixing posture can be the difference between being treated as an equal vs. an inferior.",source:"Power Dynamics"},
  {text:"Canned chicken: 115 cal/$ and 23g prot/$. Fresh chicken breast: 239 cal/$ and 50g prot/$. Fresh wins by 2x.",source:"Calorie Per Dollar"},
  {text:"Before a major meeting: change your clothes, do your hair. It's bizarre how differently people treat you.",source:"Power Efficiency"},
  {text:"Spaghetti Diagram: trace your morning routine with a crayon on a floor plan. Find the inefficiencies. Save 10+ min daily.",source:"Time Efficiency"},
  {text:"Save time brewing coffee: put a 1-cup measuring scoop directly inside your coffee container.",source:"Time Efficiency Short"},
];

// === APP LOGIC ===
let currentSort = 'nutritionScore';
let currentSortDir = 'desc';
let expandedFood = null;
let currentWeek = 1;
let currentFilter = 'all';

function init() {
  document.getElementById('totalFoods').textContent = FOODS.length;
  const topCal = FOODS.reduce((a,b) => a.calPerDollar > b.calPerDollar ? a : b);
  const topProt = FOODS.reduce((a,b) => a.protPerDollar > b.protPerDollar ? a : b);
  const withCost = FOODS.filter(f=>f.costPerYear>0);
  const cheapest = withCost.length ? withCost.reduce((a,b) => a.costPerYear < b.costPerYear ? a : b) : {costPerYear:0};
  document.getElementById('topCalDollar').textContent = topCal.name;
  document.getElementById('topProtDollar').textContent = topProt.name;
  document.getElementById('cheapestYear').textContent = cheapest.costPerYear ? ('$' + cheapest.costPerYear.toLocaleString() + '/yr') : '—';
  
  renderFoods();
  renderMealPlanner();
  renderRecipes();
  renderBudget();
  renderTips();
  setupEvents();
}

function sortFoods(foods, sortKey, sortDir) {
  const dir = sortDir === 'asc' ? 1 : -1;
  return foods.sort((a, b) => {
    let av = a[sortKey] || 0;
    let bv = b[sortKey] || 0;
    // For costPerYear, treat 0 as very high (unknown)
    if (sortKey === 'costPerYear') {
      if (av === 0) av = 999999;
      if (bv === 0) bv = 999999;
    }
    return (av - bv) * dir;
  });
}

function renderFoods() {
  const search = (document.getElementById('foodSearch').value || '').toLowerCase();
  let foods = [...FOODS];
  if (search) foods = foods.filter(f => f.name.toLowerCase().includes(search));
  
  sortFoods(foods, currentSort, currentSortDir);

  // Update column header highlights
  document.querySelectorAll('.food-table th').forEach(th => th.classList.remove('sorted'));

  const body = document.getElementById('foodBody');
  let html = '';
  foods.forEach((f, i) => {
    const displayRank = i + 1;
    const tier = displayRank <= 10 ? 'tier-1' : displayRank <= 25 ? 'tier-2' : displayRank <= 50 ? 'tier-3' : 'tier-4';
    const isHighlight = (currentSort === 'calPerDollar' ? 'calPerDollar' : currentSort === 'protPerDollar' ? 'protPerDollar' : currentSort === 'costPerYear' ? 'costPerYear' : 'nutritionScore');
    html += '<tr onclick="toggleExpand('+f.id+')" class="'+tier+'">';
    html += '<td class="rank-cell">'+displayRank+'</td>';
    html += '<td class="name-cell">'+esc(f.name)+'</td>';
    html += '<td>$'+(typeof f.price === 'number' ? f.price.toFixed(2) : '?')+'</td>';
    html += '<td class="val'+(currentSort==='calPerDollar'?' tier-1':'')+'">'+(f.calPerDollar||0).toLocaleString()+'</td>';
    html += '<td class="val'+(currentSort==='protPerDollar'?' tier-1':'')+'">'+f.protPerDollar+'g</td>';
    html += '<td class="val'+(currentSort==='nutritionScore'?' tier-1':'')+'">'+(f.nutritionScore||'—')+'</td>';
    html += '<td class="val'+(currentSort==='costPerYear'?' tier-1':'')+'">'+(f.costPerYear ? '$'+f.costPerYear.toLocaleString() : '—')+'</td>';
    html += '</tr>';
    // Expand row
    const isOpen = expandedFood === f.id;
    html += '<tr class="expand-row '+(isOpen?'open':'')+'"><td colspan="7"><div class="expand-content">';
    html += '<h3 style="color:var(--accent);margin-bottom:0.75rem">'+esc(f.name)+' — Nutrient Breakdown</h3>';
    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:0.5rem;margin-bottom:0.75rem">';
    html += makeStatBox('Cal/$', (f.calPerDollar||0).toLocaleString());
    html += makeStatBox('Protein/$', f.protPerDollar+'g');
    html += makeStatBox('Fiber/$', f.fiberPerDollar+'g');
    html += makeStatBox('Calcium/$', f.calciumPerDollar+'mg');
    html += makeStatBox('Iron/$', f.ironPerDollar+'mg');
    html += makeStatBox('Vit C/$', f.vitCPerDollar+'mg');
    html += '</div>';
    if (f.ratios && Object.keys(f.ratios).length) {
      html += '<div class="bar-chart">';
      const rMap = {calories:'Calories',protein:'Protein',fiber:'Fiber',calcium:'Calcium',iron:'Iron',vitC:'Vit C',vitA:'Vit A'};
      const cMap = {calories:'cal',protein:'prot',fiber:'fib',calcium:'calc',iron:'iron',vitC:'vitc',vitA:'vita'};
      for (const [k,label] of Object.entries(rMap)) {
        const v = f.ratios[k] || 0;
        const pct = Math.round(v * 100);
        html += '<div class="bar-row"><div class="bar-label">'+label+'</div><div class="bar-track"><div class="bar-fill '+(cMap[k]||'cal')+'" style="width:'+Math.max(pct,2)+'%">'+(pct>8?pct+'%':'')+'</div></div></div>';
      }
      html += '</div>';
    }
    html += '</div></td></tr>';
  });
  body.innerHTML = html;
}

function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function makeStatBox(label, value) {
  return '<div style="background:var(--bg3);padding:0.6rem;border-radius:6px;text-align:center"><div style="font-size:1.1rem;font-weight:700;color:var(--accent)">'+value+'</div><div style="font-size:0.7rem;color:var(--text-light);text-transform:uppercase;letter-spacing:0.3px">'+label+'</div></div>';
}

function toggleExpand(id) {
  expandedFood = expandedFood === id ? null : id;
  renderFoods();
}

function renderMealPlanner() {
  const tabs = document.getElementById('weekTabs');
  tabs.innerHTML = [1,2,3,4].map(w => 
    '<button class="week-tab '+(w===currentWeek?'active':'')+'" onclick="setWeek('+w+')">Week '+w+'</button>'
  ).join('');
  const weekRecipes = RECIPES.filter(r => r.week === currentWeek);
  const content = document.getElementById('weekContent');
  content.innerHTML = '<div class="week-grid">' + weekRecipes.map(r => 
    '<div class="day-card" onclick="showRecipe('+r.id+')">' +
    '<div class="day-name">'+r.day+'</div>' +
    '<div class="meal-name">'+esc(r.name)+'</div>' +
    '<div class="meal-meta">'+r.time+' · '+r.servings+' servings</div>' +
    '<div class="meal-cost">~$'+r.cost.toFixed(2)+'</div>' +
    '</div>'
  ).join('') + '</div>';
}

function setWeek(w) { currentWeek = w; renderMealPlanner(); }

function renderRecipes() {
  let filtered = [...RECIPES];
  if (currentFilter !== 'all') {
    if (currentFilter === 'fast') filtered = filtered.filter(r => r.tags.includes('fast'));
    else if (currentFilter === 'slow') filtered = filtered.filter(r => r.tags.includes('slow'));
    else if (currentFilter === 'budget') filtered = filtered.filter(r => r.tags.includes('budget'));
    else if (currentFilter === 'veg') filtered = filtered.filter(r => r.protein === 'veg');
    else filtered = filtered.filter(r => r.protein === currentFilter || r.tags.includes(currentFilter));
  }
  const grid = document.getElementById('recipeGrid');
  let html = filtered.map(r => {
    const tagHtml = r.tags.map(t => '<span class="tag '+t+'">'+t+'</span>').join('');
    return '<div class="recipe-card" onclick="showRecipe('+r.id+')">' +
      '<div class="recipe-title">'+esc(r.name)+'</div>' +
      '<div class="recipe-tags">'+tagHtml+'</div>' +
      '<div style="font-size:0.85rem;color:var(--text-light)">'+r.time+' · '+r.servings+' servings · <span style="color:var(--accent);font-weight:700">~$'+r.cost.toFixed(2)+'</span></div>' +
      '</div>';
  }).join('');
  if (currentFilter === 'all' || currentFilter === 'chicken') {
    html += '<div style="grid-column:1/-1;margin-top:1.5rem"><h3 style="color:var(--text-dark)">💡 32+ Chicken Replacement Ideas <span style="color:var(--text-light);font-weight:400;font-size:0.85rem">(Beef prices up? Try these)</span></h3>';
    html += '<div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.75rem">';
    html += CHICKEN_IDEAS.map(idea => '<span class="tag chicken" style="font-size:0.85rem;padding:0.4rem 0.8rem;cursor:default">'+idea+'</span>').join('');
    html += '</div><p style="color:var(--text-light);font-size:0.8rem;margin-top:0.5rem">Search any of these online or ask AI — add "low cost and fast" for best results.</p></div>';
  }
  grid.innerHTML = html;
}

function showRecipe(id) {
  const r = RECIPES.find(x => x.id === id);
  if (!r) return;
  const modal = document.getElementById('modal');
  const content = document.getElementById('modalContent');
  content.innerHTML = '<h3>'+esc(r.name)+'</h3>' +
    '<div style="display:flex;gap:0.75rem;margin-bottom:1.25rem;flex-wrap:wrap">' +
    '<span class="tag veg">'+r.time+'</span><span class="tag veg">'+r.servings+' servings</span>' +
    (r.cost ? '<span class="tag budget">~$'+r.cost.toFixed(2)+'</span>' : '') +
    '</div>' +
    '<h3 style="font-size:0.95rem">Ingredients</h3><ul class="ingredients">' +
    r.ingredients.map(i => '<li>'+esc(i)+'</li>').join('') +
    '</ul><h3 style="font-size:0.95rem">Directions</h3><div class="directions">' +
    r.directions.split('\\n').filter(l=>l.trim()).map(l => '<p>'+esc(l)+'</p>').join('') +
    '</div>';
  modal.classList.add('open');
}

function closeModal() { document.getElementById('modal').classList.remove('open'); }
function surpriseMe() { const r = RECIPES[Math.floor(Math.random() * RECIPES.length)]; showRecipe(r.id); }

function renderBudget() {
  const budget = parseInt(document.getElementById('budgetSlider').value);
  const people = parseInt(document.getElementById('peopleSlider').value);
  const diet = document.getElementById('dietSelect').value;
  document.getElementById('budgetDisplay').textContent = '$' + budget;
  document.getElementById('peopleDisplay').textContent = people;
  const perPerson = Math.round(budget / people);
  document.getElementById('yourCost').textContent = '$' + perPerson + '/wk';
  let recommended = [...FOODS].filter(f => f.calPerDollar > 0);
  if (diet === 'protein') recommended.sort((a,b) => b.protPerDollar - a.protPerDollar);
  else if (diet === 'vegetarian') {
    const vegItems = ['flour','milk','eggs','pinto beans','lentils','oats','rice','bread','peanut butter','pasta','bagels','banana','potatoes','carrots','kale','spinach'];
    recommended = recommended.filter(f => vegItems.some(v => f.name.toLowerCase().includes(v)));
    recommended.sort((a,b) => (b.nutritionScore||0) - (a.nutritionScore||0));
  } else recommended.sort((a,b) => (b.nutritionScore||0) - (a.nutritionScore||0));
  const topItems = recommended.slice(0, 15);
  document.getElementById('groceryItems').innerHTML = topItems.map(f => 
    '<div class="grocery-item"><span style="font-weight:600">'+esc(f.name)+'</span><span style="color:var(--accent);font-weight:600">'+f.calPerDollar.toLocaleString()+' cal/$ · '+f.protPerDollar+'g prot/$</span></div>'
  ).join('') +
  '<div style="margin-top:1rem;padding-top:0.75rem;border-top:2px solid var(--accent);font-size:0.9rem;color:var(--text)">' +
  'Daily budget per person: <strong style="color:var(--accent)">$' + (perPerson/7).toFixed(2) + '</strong> — ' +
  'At 700 cal/$, that\\'s <strong style="color:var(--accent)">' + Math.round(perPerson/7*700).toLocaleString() + ' calories/day</strong>.' +
  '</div>';
}

function renderTips() {
  document.getElementById('tipsGrid').innerHTML = TIPS.map(t => 
    '<div class="tip-card"><div class="tip-text">'+esc(t.text)+'</div><div class="tip-source">— '+esc(t.source)+'</div></div>'
  ).join('');
}

function setupEvents() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });
  // Sort buttons
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sortKey = btn.dataset.sort;
      if (currentSort === sortKey) {
        currentSortDir = currentSortDir === 'desc' ? 'asc' : 'desc';
      } else {
        currentSort = sortKey;
        currentSortDir = sortKey === 'costPerYear' ? 'asc' : 'desc';
      }
      // Update button labels with arrows
      document.querySelectorAll('.sort-btn').forEach(b => {
        b.classList.remove('active');
        const key = b.dataset.sort;
        const defaultDir = key === 'costPerYear' ? '↑' : '↓';
        b.textContent = b.textContent.replace(/ [↑↓]$/, '') + ' ' + defaultDir;
      });
      btn.classList.add('active');
      const arrow = currentSortDir === 'asc' ? '↑' : '↓';
      btn.textContent = btn.textContent.replace(/ [↑↓]$/, '') + ' ' + arrow;
      expandedFood = null;
      renderFoods();
    });
  });
  // Column header sort
  document.querySelectorAll('.food-table th[data-col]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.col;
      if (col === 'rank') return;
      const sortMap = {price:'price',calPerDollar:'calPerDollar',protPerDollar:'protPerDollar',nutritionScore:'nutritionScore',costPerYear:'costPerYear'};
      if (!sortMap[col]) return;
      if (currentSort === sortMap[col]) {
        currentSortDir = currentSortDir === 'desc' ? 'asc' : 'desc';
      } else {
        currentSort = sortMap[col];
        currentSortDir = col === 'costPerYear' || col === 'price' ? 'asc' : 'desc';
      }
      expandedFood = null;
      // Sync sort buttons
      document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
      const matchBtn = document.querySelector('.sort-btn[data-sort="'+currentSort+'"]');
      if (matchBtn) matchBtn.classList.add('active');
      renderFoods();
    });
  });
  document.getElementById('foodSearch').addEventListener('input', () => { expandedFood = null; renderFoods(); });
  document.getElementById('budgetSlider').addEventListener('input', renderBudget);
  document.getElementById('peopleSlider').addEventListener('input', renderBudget);
  document.getElementById('dietSelect').addEventListener('change', renderBudget);
  document.querySelectorAll('#recipeFilters .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#recipeFilters .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderRecipes();
    });
  });
  document.getElementById('modal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  const btn = document.querySelector('.theme-toggle');
  btn.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
}

init();
</script>
</body>
</html>`;

fs.writeFileSync('./index.html', html);
console.log('Built! Size:', (Buffer.byteLength(html)/1024).toFixed(1) + ' KB');
