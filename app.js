var RECIPES = [
  {id:1,week:1,day:"Sunday",name:"Beef Casserole",cost:4.50,time:"15 min active",servings:6,protein:"beef",method:"oven",tags:["beef","mealprep","kidfriendly","glutenfree","dairyfree","highprotein"],ingredients:["2\u00BC lbs ground beef","1 can cream of chicken soup","Potatoes (3-4 large)","1 cup shredded cheese","Salt, pepper, garlic powder"],directions:"1. Brown the ground beef on medium-high heat, breaking into small pieces.\n2. Season with salt, pepper, garlic powder.\n3. Cut potatoes into thin slices.\n4. Layer in oven-safe dish: potatoes, ground beef, cream of chicken soup, cheese.\n5. Repeat layers. Top with remaining cheese.\n6. Bake at 350\u00B0F for 45-60 minutes until potatoes are soft."},
  {id:2,week:1,day:"Monday",name:"Thai Fried Rice",cost:3.50,time:"20 min",servings:4,protein:"chicken",method:"stovetop",tags:["chicken","mealprep","dairyfree","under30","highprotein"],ingredients:["2-3 chicken breasts","4 cups cooked rice","4 eggs","Soy sauce","Fish sauce","Lime","Garlic","8 tbsp butter (optional)","Green onions"],directions:"1. Cut chicken into small pieces. Cook on medium-high 4 min per side.\n2. Push chicken to edges, crack eggs in center, scramble.\n3. Add rice, soy sauce, fish sauce, garlic. Toss everything.\n4. Add butter for Thai restaurant flavor.\n5. Squeeze lime, top with green onions."},
  {id:3,week:1,day:"Tuesday",name:"Carlos' Favorite Fajitas",cost:4.00,time:"25 min",servings:4,protein:"chicken",method:"stovetop",tags:["chicken","mealprep","highprotein","under30"],ingredients:["3 chicken breasts","Flour tortillas","Pinto beans (slow cooker)","Fajita seasoning blend","Lime","Cheese, salsa"],directions:"1. Start pinto beans in slow cooker: 3 cups beans, 8 cups water.\n2. Make fajita seasoning in bulk.\n3. Cut chicken, cook 4 min each side.\n4. Spray with lime juice while cooking.\n5. Add seasoning + splash of water. Let thicken.\n6. Serve in tortillas with beans, cheese, salsa."},
  {id:4,week:1,day:"Wednesday",name:"Slow Cooker Sausage & Peppers",cost:3.00,time:"5 min active",servings:4,protein:"pork",method:"slow cooker",tags:["pork","slow","mealprep","kidfriendly","under30"],ingredients:["4 Italian sausage links","1 jar marinara sauce","1 bell pepper, sliced","Whole wheat elbow noodles"],directions:"1. Put sausage, marinara, and peppers in slow cooker.\n2. Cook on low for 6+ hours.\n3. Cook noodles separately.\n4. Serve sausage and peppers over noodles."},
  {id:5,week:1,day:"Thursday",name:"Breakfast for Dinner: Eggs & Sausage",cost:2.00,time:"10 min",servings:2,protein:"pork",method:"stovetop",tags:["pork","fast","kidfriendly","glutenfree","under30","highprotein"],ingredients:["6 eggs","6 breakfast sausage links","Toast","Butter"],directions:"1. Cook sausages in pot with water on medium heat.\n2. Fry eggs to preference.\n3. Toast bread.\n4. Serve together. Simple, fast, high protein per dollar."},
  {id:6,week:1,day:"Friday",name:"Pulled Chicken BBQ",cost:3.50,time:"5 min active",servings:4,protein:"chicken",method:"slow cooker",tags:["chicken","slow","mealprep","dairyfree","glutenfree","kidfriendly","highprotein"],ingredients:["4-6 chicken thighs","1 can soda","High quality BBQ sauce","Buns"],directions:"1. Put chicken and soda in slow cooker.\n2. High 4 hours or low 6+ hours.\n3. Shred the chicken.\n4. Optional: brown in pan for crispy edges.\n5. Serve on buns with BBQ sauce."},
  {id:7,week:1,day:"Saturday",name:"Whole Chicken & Gravy",cost:5.00,time:"20 min active",servings:6,protein:"chicken",method:"oven",tags:["chicken","mealprep","glutenfree","kidfriendly"],ingredients:["1 whole chicken","Potatoes","Green beans","Butter","Flour","Chicken bouillon cubes","Salt, pepper"],directions:"1. Preheat oven to 350\u00B0F. Season chicken.\n2. Roast until 165\u00B0F internal (~1.5 hours). Save drippings!\n3. Gravy: roux (3 tbsp butter + 3 tbsp flour) + drippings + broth.\n4. Boil potatoes, mash with butter and milk.\n5. Steam green beans. Serve together."},
  {id:8,week:2,day:"Sunday",name:"Football Chili",cost:5.00,time:"30 min",servings:8,protein:"beef",method:"stovetop",tags:["beef","mealprep","glutenfree","dairyfree","highprotein","kidfriendly"],ingredients:["1.5-2.5 lbs ground beef","2 cans kidney beans","1 can diced tomatoes","1 can tomato sauce","Onion, green pepper","Chili spice blend","Crackers or noodles"],directions:"1. Make chili spice blend in bulk.\n2. Brown ground beef in large pan.\n3. Transfer to large pot. Cook veggies in beef drippings.\n4. Add everything: beans, tomatoes, sauce, spices.\n5. Simmer 30+ minutes (longer = better).\n6. Serve with crackers or noodles."},
  {id:9,week:2,day:"Monday",name:"Teriyaki Chicken & Rice",cost:3.50,time:"20 min",servings:4,protein:"chicken",method:"stovetop",tags:["chicken","dairyfree","under30","highprotein","kidfriendly"],ingredients:["3 chicken breasts","Soy sauce","Brown sugar","Garlic","Ginger","Rice","Cornstarch"],directions:"1. Cook rice. Cut chicken into bite-sized pieces.\n2. Make teriyaki: soy sauce, brown sugar, garlic, ginger, cornstarch.\n3. Cook chicken 4 min per side.\n4. Add sauce, let thicken. Serve over rice."},
  {id:10,week:2,day:"Tuesday",name:"Tacos",cost:3.50,time:"20 min",servings:4,protein:"beef",method:"stovetop",tags:["beef","fast","kidfriendly","under30","highprotein"],ingredients:["1.5 lbs ground beef","Taco seasoning","Taco shells or tortillas","Cheese, lettuce, salsa, sour cream"],directions:"1. Brown ground beef.\n2. Add taco seasoning and water. Simmer until thick.\n3. Warm shells. Build tacos with toppings."},
  {id:11,week:2,day:"Wednesday",name:"Slow Cooker Pulled Pork BBQ",cost:4.00,time:"5 min active",servings:6,protein:"pork",method:"slow cooker",tags:["pork","slow","mealprep","dairyfree","glutenfree","kidfriendly","highprotein"],ingredients:["Pork shoulder/loin","1 can soda","BBQ sauce","Buns"],directions:"1. Put pork and soda in slow cooker.\n2. 6 hours high or 8+ hours low.\n3. Shred. Optional: brown in pan.\n4. Serve on buns with BBQ sauce."},
  {id:12,week:2,day:"Thursday",name:"Enchiladas",cost:4.00,time:"25 min",servings:4,protein:"chicken",method:"oven",tags:["chicken","mealprep","kidfriendly"],ingredients:["Leftover pulled chicken","Flour tortillas","Enchilada sauce","Cheese","Sour cream"],directions:"1. Make enchilada sauce: tomato paste + broth + spices.\n2. Fill tortillas with chicken and cheese.\n3. Roll up seam-down in baking dish.\n4. Cover with sauce and more cheese.\n5. Bake 375\u00B0F for 20 minutes."},
  {id:13,week:2,day:"Friday",name:"\"Sunday\" Chicken",cost:3.00,time:"5 min active",servings:4,protein:"chicken",method:"slow cooker",tags:["chicken","slow","mealprep","kidfriendly","glutenfree"],ingredients:["5 chicken thighs","1 can cream of chicken soup","1 packet dry Italian seasoning","4 oz cream cheese"],directions:"1. Put everything in slow cooker.\n2. Low for 6+ hours.\n3. Shred chicken and mix with creamy sauce.\n4. Serve over rice or noodles.\n\nSo easy we make it on Fridays."},
  {id:14,week:2,day:"Saturday",name:"Nachos",cost:3.00,time:"15 min",servings:4,protein:"beef",method:"oven",tags:["beef","fast","kidfriendly","glutenfree","under30"],ingredients:["Leftover taco meat","Tortilla chips","Cheese","Jalape\u00F1os","Salsa","Sour cream"],directions:"1. Spread chips on baking sheet.\n2. Top with taco meat and cheese.\n3. Broil until cheese melts.\n4. Top with jalape\u00F1os, salsa, sour cream."},
  {id:15,week:3,day:"Sunday",name:"Creamy Chicken Tortilla Soup",cost:4.00,time:"10 min active",servings:6,protein:"chicken",method:"slow cooker",tags:["chicken","slow","mealprep","glutenfree","kidfriendly"],ingredients:["5 chicken thighs","2 cups chicken broth","1 can black beans","1 can corn","1 can green chilis","Cream cheese","Tortilla chips"],directions:"1. Put everything except chips and cream cheese in slow cooker.\n2. High 4 hours or low 6+ hours.\n3. Shred chicken. Stir in cream cheese until melted.\n4. Serve with tortilla chips for dipping."},
  {id:16,week:3,day:"Monday",name:"Chicken Alfredo",cost:4.00,time:"20 min",servings:4,protein:"chicken",method:"stovetop",tags:["chicken","under30","kidfriendly","highprotein"],ingredients:["3 chicken breasts","Angel hair pasta","Alfredo sauce (butter, flour, milk, parmesan)","Broccoli"],directions:"1. Boil water for pasta. Cut chicken, cook 4 min per side.\n2. Make roux for alfredo.\n3. Start noodles (5 min for angel hair).\n4. Add broccoli and alfredo to chicken pan.\n5. Serve immediately. Cold noodles are the enemy."},
  {id:17,week:3,day:"Tuesday",name:"Spaghetti & Marinara",cost:2.50,time:"20 min",servings:4,protein:"beef",method:"stovetop",tags:["beef","kidfriendly","under30","mealprep"],ingredients:["1 lb ground beef (optional)","Spaghetti noodles","Marinara sauce","Parmesan"],directions:"1. Cook spaghetti.\n2. Brown ground beef, drain fat. Add marinara, simmer.\n3. Serve over pasta with parmesan."},
  {id:18,week:3,day:"Wednesday",name:"Hamburger Mac",cost:3.00,time:"15 min",servings:4,protein:"beef",method:"stovetop",tags:["beef","fast","kidfriendly","under30"],ingredients:["1 lb ground beef","1 box mac and cheese","Salt, pepper"],directions:"1. Brown ground beef.\n2. Make mac and cheese per box.\n3. Mix together. Kids love this one."},
  {id:19,week:3,day:"Thursday",name:"Slow Cooker Pork Loin",cost:4.00,time:"5 min active",servings:6,protein:"pork",method:"slow cooker",tags:["pork","slow","mealprep","glutenfree","dairyfree","highprotein"],ingredients:["Pork loin","Brown sugar","Garlic","Salt, pepper"],directions:"1. Rub pork loin with brown sugar, garlic, salt, pepper.\n2. Slow cooker 6+ hours high or 8+ low.\n3. Slice and serve with sides."},
  {id:20,week:3,day:"Friday",name:"Your Choice Friday",cost:3.00,time:"varies",servings:4,protein:"chicken",method:"stovetop",tags:["chicken","under30"],ingredients:["Pick a protein","Pick a carb","Pick a veggie","Search online"],directions:"The EIE formula:\n1. Pick a low cost protein: chicken, beans, lentils, eggs\n2. Pick a low cost carb: rice, noodles, potatoes\n3. Pick a flavor: spices, veggies, sauce\n4. Search online \u2014 30 million results."},
  {id:21,week:3,day:"Saturday",name:"Your Choice Saturday",cost:3.00,time:"varies",servings:4,protein:"chicken",method:"stovetop",tags:["chicken","under30"],ingredients:["Same formula \u2014 experiment!"],directions:"All food tastes good if you add:\n\u2022 Salt\n\u2022 Acid (lemon/lime/vinegar)\n\u2022 Sugar\n\u2022 Fat (butter/oil)\n\u2022 Umami (soy sauce/MSG)\n\nThe 5 cheat codes to cooking."},
  {id:22,week:4,day:"Sunday",name:"Lentil Soup",cost:2.00,time:"15 min active",servings:6,protein:"veg",method:"stovetop",tags:["veg","vegan","mealprep","glutenfree","dairyfree","highprotein","under30"],ingredients:["2 cups lentils","8 cups chicken broth","Carrots","Onion","Celery","Garlic","Cumin, turmeric"],directions:"1. Dice onion, carrots, celery. Saut\u00E9 until translucent.\n2. Add lentils, broth, garlic, spices.\n3. Simmer 25-30 min until lentils are soft.\n4. Optional: blend half for creamy texture.\n5. Serve as-is or over noodles. Addictive."},
  {id:23,week:4,day:"Monday",name:"Pad Thai",cost:4.00,time:"20 min",servings:4,protein:"chicken",method:"stovetop",tags:["chicken","dairyfree","glutenfree","under30","highprotein"],ingredients:["2-3 chicken breasts","12 oz rice noodles","4 eggs","Pad Thai sauce","Bean sprouts","Green onions","Peanuts"],directions:"1. Soak rice noodles (don't over-boil).\n2. Cut chicken small. Cook 4 min per side.\n3. Push to sides, scramble eggs in center.\n4. Add noodles and sauce. Fold gently.\n5. Top with peanuts, green onions, lime.\n\nWarning: too much stirring = mushy noodles."},
  {id:24,week:4,day:"Tuesday",name:"Italian Chicken Quesadilla",cost:3.00,time:"15 min",servings:4,protein:"chicken",method:"stovetop",tags:["chicken","fast","kidfriendly","under30","highprotein"],ingredients:["2 chicken breasts","Flour tortillas","Mozzarella","Italian seasoning","Marinara for dipping"],directions:"1. Cut chicken, cook 4 min per side with Italian seasoning.\n2. Build quesadillas: tortilla, cheese, chicken, cheese, fold.\n3. Cook in hot pan until golden.\n4. Serve with marinara for dipping."},
  {id:25,week:4,day:"Wednesday",name:"Hobo Stew",cost:3.50,time:"15 min active",servings:4,protein:"beef",method:"oven",tags:["beef","mealprep","glutenfree","dairyfree","kidfriendly"],ingredients:["1+ lb ground beef","Potatoes, cubed","Carrots","Onion","Aluminum foil","Salt, pepper, butter"],directions:"1. Make hamburger patties on foil with potatoes, carrots, onion.\n2. Season, add butter. Wrap into sealed packets.\n3. Oven 350\u00B0F for 45 min, OR slow cooker 4-6 hours."},
  {id:26,week:4,day:"Thursday",name:"Bagel Egg & Cheese",cost:1.50,time:"8 min",servings:1,protein:"veg",method:"stovetop",tags:["veg","fast","kidfriendly","under30","highprotein"],ingredients:["1 bagel","2 eggs","1 slice cheese","Breakfast sausage (optional)"],directions:"1. Toast bagel. Fry eggs.\n2. Place cheese on egg while hot.\n3. Assemble on bagel. Done in 8 minutes."},
  {id:27,week:4,day:"Friday",name:"Salsa Chicken Burritos",cost:3.00,time:"5 min active",servings:4,protein:"chicken",method:"slow cooker",tags:["chicken","slow","mealprep","glutenfree","kidfriendly","highprotein"],ingredients:["5 chicken thighs","1 jar salsa","Flour tortillas","Cheese","Jalape\u00F1os"],directions:"1. Chicken + salsa in slow cooker. High 4hr or low 6+.\n2. Shred chicken.\n3. Wrap in tortillas with cheese.\n4. Optional: pan-sear 2-3 min per side for crispy seal."},
  {id:28,week:4,day:"Saturday",name:"Pork Thai Fried Rice",cost:3.50,time:"15 min",servings:4,protein:"pork",method:"stovetop",tags:["pork","mealprep","dairyfree","under30"],ingredients:["Leftover pulled pork","4 cups cooked rice","4 eggs","Soy sauce","Fish sauce","Butter","Lime"],directions:"1. Same as Thai Fried Rice but with pulled pork.\n2. No cutting needed \u2014 pork is already shredded.\n3. Cook rice, scramble eggs, toss everything.\n4. Savory and sweet."},
  {id:29,week:0,day:"Budget",name:"Potato Soup ($1.50/day)",cost:0.75,time:"25 min",servings:4,protein:"veg",method:"stovetop",tags:["veg","budget","glutenfree","under30"],ingredients:["3 tbsp oil or butter","3 tbsp flour","2 cups milk","2 cups chicken stock","3-4 potatoes, cubed","Salt, pepper"],directions:"1. Make roux: oil/butter + flour, low-medium 5 min.\n2. Add milk, stock, potatoes, salt, pepper.\n3. Boil, then simmer 20 minutes."},
  {id:30,week:0,day:"Budget",name:"Crepes ($1.50/day)",cost:0.50,time:"15 min",servings:4,protein:"veg",method:"stovetop",tags:["veg","budget","fast","kidfriendly","under30"],ingredients:["3 eggs","1 cup flour","1 cup milk","1 tbsp sugar","\u00BD tsp salt","PB&J, chocolate, or Nutella"],directions:"1. Mix all ingredients. Heat pan on low.\n2. Pour 1/4 mixture, rotate pan to coat.\n3. Cook ~2 min, flip, <1 min.\n4. Stuff with PB&J, chocolate, or Nutella.\n\nThese taste LUXURY."},
  {id:31,week:0,day:"Budget",name:"Homemade Noodles ($1.50/day)",cost:0.60,time:"25 min",servings:2,protein:"veg",method:"stovetop",tags:["veg","budget","under30","vegan","dairyfree"],ingredients:["3 eggs","1 tsp salt","2 tbsp water or milk","2 cups flour"],directions:"1. Mix eggs, salt, water, flour.\n2. Roll out thin. Cut into strips.\n3. Boil ~2 minutes.\n4. Serve with broth, marinara, or alfredo.\n\nFresh noodles are life-changing."},
  {id:32,week:0,day:"Budget",name:"Mashed Potatoes ($1.50/day)",cost:0.50,time:"30 min",servings:6,protein:"veg",method:"stovetop",tags:["veg","budget","glutenfree","dairyfree","vegan","kidfriendly"],ingredients:["4-6 potatoes","\u00BD cup milk","1+ tsp salt","Pepper"],directions:"1. Boil potatoes whole (don't peel).\n2. When fork-tender (~30 min), mash with milk and salt.\n3. Doesn't taste good? More salt, more pepper."},
  {id:33,week:0,day:"Budget",name:"Pierogis ($1.50/day)",cost:0.75,time:"30 min",servings:4,protein:"veg",method:"stovetop",tags:["veg","budget","kidfriendly"],ingredients:["Dough: 2 eggs, 2 cups flour, \u00BD cup water, 1 tsp salt","Filling: mashed potatoes + cheese"],directions:"1. Make dough. Roll thin. Cut circles.\n2. Fill with mashed potato + cheese.\n3. Fold, seal with fork.\n4. Boil 3-4 min until they float.\n5. Optional: pan fry in butter for crispy edges."},
  {id:34,week:0,day:"Guide",name:"5 Cooking Cheat Codes",cost:0,time:"Reference",servings:0,protein:"veg",method:"stovetop",tags:["veg"],ingredients:["Acid \u2014 Lime, Lemon, Vinegar","Salt \u2014 taste as you go","Sugar \u2014 a bit of brown sugar","Fat \u2014 Butter, oil, cream","Umami \u2014 MSG, fish sauce, soy sauce","Colors \u2014 bright veggies","Aromatics \u2014 Garlic, onion","Capsaicin (optional) \u2014 hot sauce"],directions:"Make any food taste good:\n\n1. ACID \u2014 Lime/lemon/vinegar\n2. SALT \u2014 Add slowly, taste as you go\n3. SUGAR \u2014 Just a pinch of brown sugar\n4. FAT \u2014 Butter, oil, cream\n5. UMAMI \u2014 MSG, fish sauce, soy sauce\n\nLayer across each component separately.\nPsychology trick: Name your food."}
];

var CHICKEN_IDEAS = ["Chicken Hamburger Helper","Chicken Mac & Cheese","Chicken Pesto","Chicken Shepherd's Pie","Slowcooker Chicken in Lentil Soup","Golden Curry Chicken","Stuffed Pepper Soup","Cheesy Broccoli Soup","Chicken Rice & Cheese","Fajita Chicken & Rice","Butter Chicken","Chicken Biryani","Breaded Chicken","Chicken Pot Pie","BBQ Chicken Pizza","Chicken Noodle Soup","Chicken Lettuce Wraps","Chicken & Mashed Potatoes","White Chili","Chicken Shawarma","Chicken Mole","Chicken Carbonara","Chicken Casserole","Corn Chowder w/ Chicken","Chicken & Waffles","Caesar Salad w/ Chicken"];

var TIPS = [
  {text:"Fresh food is almost always cheaper than canned, frozen, or processed. Marketing companies got away with the opposite lie for 20 years.",source:"Nutrition Per Dollar Study"},
  {text:"Replace a $1.69 red pepper with carrots. Just as sweet, 3x the nutrition per dollar.",source:"Food Nutrition Guide"},
  {text:"5 cheat codes to make anything delicious: Salt, Acid (lemon/lime/vinegar), Sugar, Fat (butter/oil), Umami (soy sauce/MSG).",source:"Cooking Cheat Codes"},
  {text:"Aim for 700 calories per dollar to eat for about $1,000 a year.",source:"Calorie Per Dollar Study"},
  {text:"Instant oats cost 5x more than regular oats. Same food, different marketing.",source:"Price Comparison"},
  {text:"Beans and lentils: 80-140g protein per dollar, tons of fiber, incredibly cheap. The ultimate superfood.",source:"Protein Per Dollar"},
  {text:"Greek yogurt: 16g protein per dollar. Chicken: 50g. Do the math before buying 'health food.'",source:"Protein Per Dollar"},
  {text:"The cheapest fast food (Little Caesar's at 420 cal/$) is still 2x more expensive than cooking at home.",source:"Fast Food Comparison"},
  {text:"Type any protein + carb + veggie into Google. There will be a recipe. Since all food tastes good, it probably will too.",source:"Cookbook Philosophy"},
  {text:"We cycle through 28 recipes. Grocery shopping takes <15 minutes including checkout because we sorted our list by aisle.",source:"Meal Planning"},
  {text:"Biphasic sleep (6hr night + 20min nap) saves 12 hours per week.",source:"Sleep Efficiency"},
  {text:"Standing taller and fixing posture can be the difference between equal vs. inferior treatment.",source:"Power Dynamics"},
  {text:"Canned chicken: 115 cal/$ and 23g prot/$. Fresh chicken: 239 cal/$ and 50g prot/$. Fresh wins 2x.",source:"Calorie Per Dollar"},
  {text:"Before a major meeting: change your clothes, do your hair. Bizarre how differently people treat you.",source:"Power Efficiency"},
  {text:"Spaghetti Diagram: trace your morning routine with a crayon on a floor plan. Save 10+ min daily.",source:"Time Efficiency"},
  {text:"Put a 1-cup measuring scoop directly inside your coffee container. Saves time every morning.",source:"Time Efficiency Short"}
];

// === STATE ===
var currentSort = "nutritionScore";
var currentSortDir = "desc";
var expandedFood = null;
var currentWeek = 1;
var currentFilter = "all";

function esc(s) {
  return String(s).replace(/&/g,"&amp;").replace(/\x3c/g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function init() {
  document.getElementById("totalFoods").textContent = FOODS.length;
  var topCal = FOODS.reduce(function(a,b){return a.calPerDollar > b.calPerDollar ? a : b;});
  var topProt = FOODS.reduce(function(a,b){return a.protPerDollar > b.protPerDollar ? a : b;});
  var withCost = FOODS.filter(function(f){return f.costPerYear > 0;});
  var cheapest = withCost.length ? withCost.reduce(function(a,b){return a.costPerYear < b.costPerYear ? a : b;}) : null;
  document.getElementById("topCalDollar").textContent = topCal.name;
  document.getElementById("topProtDollar").textContent = topProt.name;
  document.getElementById("cheapestYear").textContent = cheapest ? ("$" + cheapest.costPerYear.toLocaleString() + "/yr") : "\u2014";

  renderFoods();
  renderMealPlanner();
  renderRecipes();
  renderBudget();
  renderTips();
  setupEvents();
}

function doSort(foods, key, dir) {
  var mult = dir === "asc" ? 1 : -1;
  foods.sort(function(a, b) {
    var av = a[key] || 0;
    var bv = b[key] || 0;
    if (key === "costPerYear") {
      if (av === 0) av = 999999;
      if (bv === 0) bv = 999999;
    }
    return (av - bv) * mult;
  });
  return foods;
}

function renderFoods() {
  var search = (document.getElementById("foodSearch").value || "").toLowerCase();
  var foods = FOODS.slice();
  if (search) {
    foods = foods.filter(function(f) { return f.name.toLowerCase().indexOf(search) >= 0; });
  }
  doSort(foods, currentSort, currentSortDir);

  var html = "";
  for (var i = 0; i < foods.length; i++) {
    var f = foods[i];
    var displayRank = i + 1;
    var tier = displayRank <= 10 ? "tier-1" : displayRank <= 25 ? "tier-2" : displayRank <= 50 ? "tier-3" : "tier-4";
    html += '<tr onclick="toggleExpand(' + f.id + ')" class="' + tier + '">';
    html += '<td class="rank-cell">' + displayRank + '</td>';
    html += '<td class="name-cell">' + esc(f.name) + '</td>';
    html += '<td>$' + (typeof f.price === "number" ? f.price.toFixed(2) : "?") + '</td>';
    html += '<td class="val">' + (f.calPerDollar || 0).toLocaleString() + '</td>';
    html += '<td class="val">' + f.protPerDollar + 'g</td>';
    html += '<td class="val">' + (f.nutritionScore || "\u2014") + '</td>';
    html += '<td class="val">' + (f.costPerYear ? "$" + f.costPerYear.toLocaleString() : "\u2014") + '</td>';
    html += '</tr>';
    var isOpen = expandedFood === f.id;
    html += '<tr class="expand-row ' + (isOpen ? "open" : "") + '"><td colspan="7"><div class="expand-content">';
    html += '<h3 style="color:var(--accent);margin-bottom:0.75rem">' + esc(f.name) + ' \u2014 Nutrient Breakdown</h3>';
    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:0.5rem;margin-bottom:0.75rem">';
    html += statBox("Cal/$", (f.calPerDollar||0).toLocaleString());
    html += statBox("Protein/$", f.protPerDollar + "g");
    html += statBox("Fiber/$", f.fiberPerDollar + "g");
    html += statBox("Calcium/$", f.calciumPerDollar + "mg");
    html += statBox("Iron/$", f.ironPerDollar + "mg");
    html += statBox("Vit C/$", f.vitCPerDollar + "mg");
    html += '</div>';
    if (f.ratios) {
      var rMap = [["calories","Calories","cal"],["protein","Protein","prot"],["fiber","Fiber","fib"],["calcium","Calcium","calc"],["iron","Iron","iron"],["vitC","Vit C","vitc"],["vitA","Vit A","vita"]];
      html += '<div class="bar-chart">';
      for (var j = 0; j < rMap.length; j++) {
        var v = (f.ratios[rMap[j][0]] || 0);
        var pct = Math.round(v * 100);
        html += '<div class="bar-row"><div class="bar-label">' + rMap[j][1] + '</div><div class="bar-track"><div class="bar-fill ' + rMap[j][2] + '" style="width:' + Math.max(pct,2) + '%">' + (pct > 8 ? pct + "%" : "") + '</div></div></div>';
      }
      html += '</div>';
    }
    html += '</div></td></tr>';
  }
  document.getElementById("foodBody").innerHTML = html;
}

function statBox(label, value) {
  return '<div style="background:var(--bg3);padding:0.6rem;border-radius:6px;text-align:center"><div style="font-size:1.1rem;font-weight:700;color:var(--accent)">' + value + '</div><div style="font-size:0.7rem;color:var(--text-light);text-transform:uppercase;letter-spacing:0.3px">' + label + '</div></div>';
}

function toggleExpand(id) {
  expandedFood = expandedFood === id ? null : id;
  renderFoods();
}

function renderMealPlanner() {
  var tabs = document.getElementById("weekTabs");
  var h = "";
  for (var w = 1; w <= 4; w++) {
    h += '<button class="week-tab ' + (w === currentWeek ? "active" : "") + '" onclick="setWeek(' + w + ')">Week ' + w + '</button>';
  }
  tabs.innerHTML = h;
  var weekR = RECIPES.filter(function(r){return r.week === currentWeek;});
  var c = '<div class="week-grid">';
  for (var i = 0; i < weekR.length; i++) {
    var r = weekR[i];
    c += '<div class="day-card" onclick="showRecipe(' + r.id + ')"><div class="day-name">' + r.day + '</div><div class="meal-name">' + esc(r.name) + '</div><div class="meal-meta">' + r.time + ' \u00B7 ' + r.servings + ' servings</div><div class="meal-cost">~$' + r.cost.toFixed(2) + '</div></div>';
  }
  c += '</div>';
  document.getElementById("weekContent").innerHTML = c;
}

function setWeek(w) { currentWeek = w; renderMealPlanner(); }

function renderRecipes() {
  var filtered = RECIPES.slice();
  if (currentFilter !== "all") {
    filtered = filtered.filter(function(r) {
      if (currentFilter === "veg") return r.protein === "veg";
      if (currentFilter === "under3") return r.cost > 0 && r.cost <= 3;
      return r.tags.indexOf(currentFilter) >= 0 || r.protein === currentFilter;
    });
  }
  var h = "";
  for (var i = 0; i < filtered.length; i++) {
    var r = filtered[i];
    // Show only the most useful tags on cards (not all internal filter tags)
    var displayTags = ["chicken","beef","pork","veg","vegan","slow","fast","budget","glutenfree","dairyfree","kidfriendly","highprotein","mealprep"];
    var tagLabels = {chicken:"Chicken",beef:"Beef",pork:"Pork",veg:"Vegetarian",vegan:"Vegan",slow:"Slow Cooker",fast:"Quick",budget:"Budget",glutenfree:"GF",dairyfree:"DF",kidfriendly:"Kid Friendly",highprotein:"High Protein",mealprep:"Meal Prep",under30:"<30 min",under3:"Under $3"};
    var tagH = "";
    for (var j = 0; j < r.tags.length; j++) {
      var t = r.tags[j];
      if (displayTags.indexOf(t) >= 0) tagH += '<span class="tag ' + t + '">' + (tagLabels[t] || t) + '</span>';
    }
    h += '<div class="recipe-card" onclick="showRecipe(' + r.id + ')"><div class="recipe-title">' + esc(r.name) + '</div><div class="recipe-tags">' + tagH + '</div><div style="font-size:0.85rem;color:var(--text-light)">' + r.time + ' \u00B7 ' + r.servings + ' servings \u00B7 <span style="color:var(--accent);font-weight:700">~$' + r.cost.toFixed(2) + '</span></div></div>';
  }
  if (currentFilter === "all" || currentFilter === "chicken") {
    h += '<div style="grid-column:1/-1;margin-top:1.5rem"><h3 style="color:var(--text-dark)">\uD83D\uDCA1 32+ Chicken Replacement Ideas</h3><div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.75rem">';
    for (var k = 0; k < CHICKEN_IDEAS.length; k++) h += '<span class="tag chicken" style="font-size:0.85rem;padding:0.4rem 0.8rem;cursor:default">' + CHICKEN_IDEAS[k] + '</span>';
    h += '</div><p style="color:var(--text-light);font-size:0.8rem;margin-top:0.5rem">Search any of these online or ask AI.</p></div>';
  }
  document.getElementById("recipeGrid").innerHTML = h;
}

function showRecipe(id) {
  var r = null;
  for (var i = 0; i < RECIPES.length; i++) { if (RECIPES[i].id === id) { r = RECIPES[i]; break; } }
  if (!r) return;
  var ing = "";
  for (var j = 0; j < r.ingredients.length; j++) ing += "<li>" + esc(r.ingredients[j]) + "</li>";
  var dirs = r.directions.split("\n");
  var dirH = "";
  for (var k = 0; k < dirs.length; k++) { if (dirs[k].trim()) dirH += "<p>" + esc(dirs[k]) + "</p>"; }
  document.getElementById("modalContent").innerHTML = '<h3>' + esc(r.name) + '</h3><div style="display:flex;gap:0.75rem;margin-bottom:1.25rem;flex-wrap:wrap"><span class="tag veg">' + r.time + '</span><span class="tag veg">' + r.servings + ' servings</span>' + (r.cost ? '<span class="tag budget">~$' + r.cost.toFixed(2) + '</span>' : '') + '</div><h3 style="font-size:0.95rem">Ingredients</h3><ul class="ingredients">' + ing + '</ul><h3 style="font-size:0.95rem">Directions</h3><div class="directions">' + dirH + '</div>';
  document.getElementById("modal").classList.add("open");
}

function closeModal() { document.getElementById("modal").classList.remove("open"); }

function renderBudget() {
  var budget = parseInt(document.getElementById("budgetSlider").value);
  var people = parseInt(document.getElementById("peopleSlider").value);
  var diet = document.getElementById("dietSelect").value;
  document.getElementById("budgetDisplay").textContent = "$" + budget;
  document.getElementById("peopleDisplay").textContent = people;
  var perPerson = Math.round(budget / people);
  document.getElementById("yourCost").textContent = "$" + perPerson + "/wk";
  var rec = FOODS.filter(function(f){return f.calPerDollar > 0;});
  if (diet === "protein") rec.sort(function(a,b){return b.protPerDollar - a.protPerDollar;});
  else if (diet === "vegetarian") {
    var vegItems = ["flour","milk","eggs","pinto beans","lentils","oats","rice","bread","peanut butter","pasta","bagels","banana","potatoes","carrots","kale","spinach"];
    rec = rec.filter(function(f){var n=f.name.toLowerCase();return vegItems.some(function(v){return n.indexOf(v)>=0;});});
    rec.sort(function(a,b){return (b.nutritionScore||0) - (a.nutritionScore||0);});
  } else rec.sort(function(a,b){return (b.nutritionScore||0) - (a.nutritionScore||0);});
  var top = rec.slice(0, 15);
  var h = "";
  for (var i = 0; i < top.length; i++) {
    h += '<div class="grocery-item"><span style="font-weight:600">' + esc(top[i].name) + '</span><span style="color:var(--accent);font-weight:600">' + top[i].calPerDollar.toLocaleString() + ' cal/$ \u00B7 ' + top[i].protPerDollar + 'g prot/$</span></div>';
  }
  h += '<div style="margin-top:1rem;padding-top:0.75rem;border-top:2px solid var(--accent);font-size:0.9rem">Daily budget per person: <strong style="color:var(--accent)">$' + (perPerson/7).toFixed(2) + '</strong> \u2014 At 700 cal/$, that\'s <strong style="color:var(--accent)">' + Math.round(perPerson/7*700).toLocaleString() + ' calories/day</strong>.</div>';
  document.getElementById("groceryItems").innerHTML = h;
}

function renderTips() {
  var h = "";
  for (var i = 0; i < TIPS.length; i++) {
    h += '<div class="tip-card"><div class="tip-text">' + esc(TIPS[i].text) + '</div><div class="tip-source">\u2014 ' + esc(TIPS[i].source) + '</div></div>';
  }
  document.getElementById("tipsGrid").innerHTML = h;
}

function setupEvents() {
  // Tab nav
  var navBtns = document.querySelectorAll(".nav-btn");
  for (var i = 0; i < navBtns.length; i++) {
    (function(btn) {
      btn.addEventListener("click", function() {
        for (var j = 0; j < navBtns.length; j++) navBtns[j].classList.remove("active");
        var sections = document.querySelectorAll(".section");
        for (var j = 0; j < sections.length; j++) sections[j].classList.remove("active");
        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
      });
    })(navBtns[i]);
  }

  // Sort buttons
  var sortBtns = document.querySelectorAll(".sort-btn");
  for (var i = 0; i < sortBtns.length; i++) {
    (function(btn) {
      btn.addEventListener("click", function() {
        var key = btn.dataset.sort;
        if (currentSort === key) {
          currentSortDir = currentSortDir === "desc" ? "asc" : "desc";
        } else {
          currentSort = key;
          currentSortDir = key === "costPerYear" ? "asc" : "desc";
        }
        for (var j = 0; j < sortBtns.length; j++) {
          sortBtns[j].classList.remove("active");
          var t = sortBtns[j].textContent.replace(/ [\u2191\u2193\u2195]+$/, "").replace(/ [↑↓]+$/, "");
          var defDir = sortBtns[j].dataset.sort === "costPerYear" ? " \u2191" : " \u2193";
          sortBtns[j].textContent = t + defDir;
        }
        btn.classList.add("active");
        var arrow = currentSortDir === "asc" ? " \u2191" : " \u2193";
        btn.textContent = btn.textContent.replace(/ [\u2191\u2193\u2195]+$/, "").replace(/ [↑↓]+$/, "") + arrow;
        expandedFood = null;
        renderFoods();
      });
    })(sortBtns[i]);
  }

  // Column header clicks
  var ths = document.querySelectorAll(".food-table th[data-col]");
  for (var i = 0; i < ths.length; i++) {
    (function(th) {
      th.addEventListener("click", function() {
        var col = th.dataset.col;
        if (currentSort === col) {
          currentSortDir = currentSortDir === "desc" ? "asc" : "desc";
        } else {
          currentSort = col;
          currentSortDir = (col === "costPerYear" || col === "price") ? "asc" : "desc";
        }
        expandedFood = null;
        for (var j = 0; j < sortBtns.length; j++) sortBtns[j].classList.remove("active");
        var match = document.querySelector('.sort-btn[data-sort="' + currentSort + '"]');
        if (match) match.classList.add("active");
        renderFoods();
      });
    })(ths[i]);
  }

  // Search
  document.getElementById("foodSearch").addEventListener("input", function() { expandedFood = null; renderFoods(); });

  // Budget
  document.getElementById("budgetSlider").addEventListener("input", renderBudget);
  document.getElementById("peopleSlider").addEventListener("input", renderBudget);
  document.getElementById("dietSelect").addEventListener("change", renderBudget);

  // Recipe filters
  var filterBtns = document.querySelectorAll("#recipeFilters .filter-btn");
  for (var i = 0; i < filterBtns.length; i++) {
    (function(btn) {
      btn.addEventListener("click", function() {
        for (var j = 0; j < filterBtns.length; j++) filterBtns[j].classList.remove("active");
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderRecipes();
      });
    })(filterBtns[i]);
  }

  // Modal
  document.getElementById("modal").addEventListener("click", function(e) { if (e.target === document.getElementById("modal")) closeModal(); });
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.addEventListener("keydown", function(e) { if (e.key === "Escape") closeModal(); });

  // Theme
  document.getElementById("themeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark");
    this.textContent = document.body.classList.contains("dark") ? "\u2600\uFE0F Light Mode" : "\uD83C\uDF19 Dark Mode";
  });

  // Surprise
  document.getElementById("surpriseBtn").addEventListener("click", function() {
    var r = RECIPES[Math.floor(Math.random() * RECIPES.length)];
    showRecipe(r.id);
  });
}



init();
