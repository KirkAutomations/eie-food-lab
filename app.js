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
  {id:34,week:0,day:"Guide",name:"5 Cooking Cheat Codes",cost:0,time:"Reference",servings:0,protein:"veg",method:"stovetop",tags:["veg"],ingredients:["Acid \u2014 Lime, Lemon, Vinegar","Salt \u2014 taste as you go","Sugar \u2014 a bit of brown sugar","Fat \u2014 Butter, oil, cream","Umami \u2014 MSG, fish sauce, soy sauce","Colors \u2014 bright veggies","Aromatics \u2014 Garlic, onion","Capsaicin (optional) \u2014 hot sauce"],directions:"Make any food taste good:\n\n1. ACID \u2014 Lime/lemon/vinegar\n2. SALT \u2014 Add slowly, taste as you go\n3. SUGAR \u2014 Just a pinch of brown sugar\n4. FAT \u2014 Butter, oil, cream\n5. UMAMI \u2014 MSG, fish sauce, soy sauce\n\nLayer across each component separately.\nPsychology trick: Name your food."},
  // === SPEED COOKING RECIPES (Week 5: Speed Meals) ===
  {id:35,week:5,day:"Speed",name:"Speed Fettuccini Alfredo",cost:2.50,time:"1 min active",servings:4,protein:"veg",method:"stovetop",tags:["veg","speed","fast","kidfriendly","under30"],ingredients:["1 lb fettuccini noodles","1 jar alfredo sauce","Parmesan cheese","Salt, pepper"],directions:"1. Boil water, cook noodles per package (8-10 min).\n2. Drain noodles, pour jar of alfredo over them.\n3. Top with parmesan. Done.\n\nSpeed metric: ~1200 cal/min active time.\nThe entire point is that jar sauce exists."},
  {id:36,week:5,day:"Speed",name:"Italian Red Sauce & Garlic Bread",cost:3.00,time:"1 min active",servings:4,protein:"veg",method:"stovetop",tags:["veg","speed","fast","kidfriendly","under30"],ingredients:["1 lb spaghetti","1 jar marinara sauce","Frozen garlic bread","Parmesan"],directions:"1. Boil noodles. Heat jar marinara.\n2. Frozen garlic bread in oven per package.\n3. Plate noodles, top with sauce, serve with bread.\n\n1 minute of active work. Timer does the rest."},
  {id:37,week:5,day:"Speed",name:"Pesto Pasta",cost:3.00,time:"1 min active",servings:4,protein:"veg",method:"stovetop",tags:["veg","speed","fast","under30"],ingredients:["1 lb pasta (penne or rotini)","1 jar pesto","Parmesan cheese","Cherry tomatoes (optional)"],directions:"1. Boil pasta.\n2. Drain, toss with pesto from jar.\n3. Top with parmesan and halved cherry tomatoes.\n\nPesto is the ultimate speed sauce."},
  {id:38,week:5,day:"Speed",name:"Sesame Chicken Rice",cost:3.50,time:"2 min active",servings:4,protein:"chicken",method:"stovetop",tags:["chicken","speed","dairyfree","highprotein","under30"],ingredients:["3 chicken breasts","4 cups cooked rice","Sesame oil","Soy sauce","Frozen broccoli"],directions:"1. Cut chicken small. Cook 4 min per side on medium-high.\n2. Add sesame oil + soy sauce.\n3. Microwave frozen broccoli. Serve over rice.\n\nThe sesame oil is the cheat code."},
  {id:39,week:5,day:"Speed",name:"Oven Baked Potato",cost:1.00,time:"1 min active",servings:2,protein:"veg",method:"oven",tags:["veg","speed","glutenfree","budget"],ingredients:["2 large russet potatoes","Butter","Sour cream","Salt, pepper","Cheese (optional)"],directions:"1. Poke potatoes with fork. Place directly on oven rack.\n2. 400\u00B0F for 45-60 min.\n3. Split, add butter, sour cream, salt.\n\n1 minute of work. 45 minutes of freedom."},
  {id:40,week:5,day:"Speed",name:"Cheddar Broccoli Soup",cost:2.00,time:"2 min active",servings:4,protein:"veg",method:"stovetop",tags:["veg","speed","kidfriendly","glutenfree","under30"],ingredients:["1 bag frozen broccoli","2 cups milk","1 cup shredded cheddar","2 tbsp butter","2 tbsp flour","Salt, pepper"],directions:"1. Microwave frozen broccoli.\n2. Make roux: butter + flour, 2 min.\n3. Add milk, stir until thick.\n4. Add cheese, stir until melted.\n5. Add broccoli. Season. Done."},
  {id:41,week:5,day:"Speed",name:"Vegetable Beef Soup",cost:3.50,time:"2 min active",servings:6,protein:"beef",method:"stovetop",tags:["beef","speed","mealprep","glutenfree","dairyfree"],ingredients:["1 lb ground beef","1 bag frozen mixed veggies","4 cups beef broth","1 can diced tomatoes","Salt, pepper, garlic powder"],directions:"1. Brown ground beef.\n2. Add broth, frozen veggies, tomatoes.\n3. Simmer 15 min. Season.\n\n2 min active, feeds 6."},
  {id:42,week:5,day:"Speed",name:"Seasoned Rice",cost:1.00,time:"1 min active",servings:4,protein:"veg",method:"stovetop",tags:["veg","speed","budget","dairyfree","vegan"],ingredients:["2 cups rice","4 cups water","2 bouillon cubes","2 tbsp butter","Garlic powder, onion powder"],directions:"1. Rice + water + bouillon cubes in pot.\n2. Bring to boil, reduce to low, cover 18 min.\n3. Fluff with butter and spices.\n\nBetter than plain rice. Same effort."},
  {id:43,week:5,day:"Speed",name:"Slow Cooker Veggie Soup",cost:2.50,time:"1 min active",servings:6,protein:"veg",method:"slow cooker",tags:["veg","speed","slow","mealprep","vegan","glutenfree","dairyfree"],ingredients:["2 bags frozen mixed veggies","4 cups broth","1 can beans (any)","Italian seasoning","Salt, pepper"],directions:"1. Dump everything in slow cooker.\n2. Low 6+ hours or high 4 hours.\n3. Season and serve.\n\nLiterally dump and walk away."},
  {id:44,week:5,day:"Speed",name:"Speed Lentil Soup",cost:2.00,time:"1 min active",servings:6,protein:"veg",method:"stovetop",tags:["veg","vegan","speed","mealprep","highprotein","glutenfree","dairyfree","budget"],ingredients:["2 cups lentils","6 cups broth","1 bag frozen mixed veggies","Cumin, garlic powder, salt"],directions:"1. Lentils + broth + frozen veggies in pot.\n2. Boil, then simmer 25 min.\n3. Season with cumin, garlic, salt.\n\nLife-changing. Addictive. $0.33/serving."},
  {id:45,week:5,day:"Speed",name:"Meat Wraps",cost:2.00,time:"1 min active",servings:2,protein:"chicken",method:"stovetop",tags:["chicken","speed","fast","under30"],ingredients:["Flour tortillas","Deli meat or leftover chicken/pork","Cheese slices","Lettuce, tomato (optional)","Mustard or mayo"],directions:"1. Lay tortilla flat.\n2. Layer meat, cheese, veggies.\n3. Roll up. Eat.\n\nNo cooking. No heat. Pure speed."},
  {id:46,week:5,day:"Speed",name:"2-Minute Burrito",cost:1.50,time:"2 min",servings:1,protein:"veg",method:"stovetop",tags:["veg","speed","fast","kidfriendly","under30","budget"],ingredients:["1 flour tortilla","1/2 can refried beans","Shredded cheese","Salsa","Sour cream (optional)"],directions:"1. Spread beans on tortilla.\n2. Add cheese, fold.\n3. Microwave 45 seconds.\n4. Top with salsa.\n\n2 minutes. Complete meal."},
  {id:47,week:5,day:"Speed",name:"Protein Shake",cost:2.00,time:"1 min",servings:1,protein:"veg",method:"stovetop",tags:["veg","speed","fast","highprotein"],ingredients:["1 scoop protein powder","16 oz milk","1 banana (optional)"],directions:"1. Protein + milk in shaker or blender.\n2. Shake/blend 30 seconds.\n3. Drink.\n\nApproaching infinity cal/min."},
  // === SPEED COOKING: Zero Prep (Week 6) ===
  {id:48,week:6,day:"Zero Prep",name:"Trail Mix",cost:3.00,time:"0 min",servings:2,protein:"veg",method:"stovetop",tags:["veg","speed","noprep","glutenfree","dairyfree","vegan"],ingredients:["Mixed nuts","Dried fruit","M&Ms or chocolate chips (optional)"],directions:"Open bag. Eat.\n\nInfinity calories per minute."},
  {id:49,week:6,day:"Zero Prep",name:"PB on Bread",cost:0.50,time:"30 sec",servings:1,protein:"veg",method:"stovetop",tags:["veg","speed","noprep","budget","dairyfree","vegan"],ingredients:["2 slices bread","2 tbsp peanut butter"],directions:"Spread peanut butter on bread.\n\n~600 calories. 30 seconds."},
  {id:50,week:6,day:"Zero Prep",name:"Cereal & Milk",cost:1.00,time:"30 sec",servings:1,protein:"veg",method:"stovetop",tags:["veg","speed","noprep","kidfriendly"],ingredients:["1.5 cups cereal","1 cup milk"],directions:"Pour cereal. Pour milk.\n\nA childhood classic. Still works."},
  {id:51,week:6,day:"Zero Prep",name:"Oats & Granola",cost:0.75,time:"2 min",servings:1,protein:"veg",method:"stovetop",tags:["veg","speed","noprep","budget","highprotein"],ingredients:["1 cup instant oats","1 cup milk or water","Honey or brown sugar","Banana (optional)"],directions:"1. Oats + milk in bowl.\n2. Microwave 2 min.\n3. Top with honey/banana.\n\nHighest cal/$ breakfast."},
  {id:52,week:6,day:"Zero Prep",name:"Bagel & Cream Cheese",cost:0.75,time:"2 min",servings:1,protein:"veg",method:"stovetop",tags:["veg","speed","noprep","kidfriendly"],ingredients:["1 bagel","2 tbsp cream cheese"],directions:"Toast bagel. Spread cream cheese.\n\n851 cal/$ from the rankings."},
  {id:53,week:6,day:"Zero Prep",name:"Fruit Salad",cost:2.00,time:"0 min",servings:2,protein:"veg",method:"stovetop",tags:["veg","speed","noprep","glutenfree","dairyfree","vegan"],ingredients:["Pre-cut fruit mix (store bought)","or: banana, apple, grapes, berries"],directions:"Buy pre-cut. Open container. Eat.\n\nOr cut your own in 2 min."},
  // === $1.59 CRISIS COOKBOOK (Week 7) ===
  {id:54,week:7,day:"Crisis",name:"Rice & Beans",cost:0.50,time:"5 min active",servings:4,protein:"veg",method:"stovetop",tags:["veg","vegan","crisis","budget","glutenfree","dairyfree","highprotein","mealprep"],ingredients:["2 cups rice","1 cup pinto beans (dry, soaked) or 1 can","Water","Salt","Hot sauce (optional)"],directions:"1. Cook rice: 2 cups rice, 4 cups water, boil, low 18 min.\n2. Beans: canned (drain+heat) or slow cooker dried.\n3. Combine. Salt generously. Hot sauce.\n\n$0.50 for 4 servings. Complete protein when combined."},
  {id:55,week:7,day:"Crisis",name:"Egg Fried Rice",cost:1.50,time:"5 min",servings:2,protein:"veg",method:"stovetop",tags:["veg","crisis","budget","dairyfree","under30","highprotein"],ingredients:["2 cups leftover rice","3 eggs","1 tbsp soy sauce","1 cup frozen mixed veggies","1 tbsp oil"],directions:"1. Heat oil in pan on high.\n2. Add frozen veggies, cook 2 min.\n3. Push aside, scramble eggs.\n4. Add rice and soy sauce. Toss everything.\n\nLeftover rice is the key. Day-old rice fries better."},
  {id:56,week:7,day:"Crisis",name:"Lentil Dal",cost:1.00,time:"5 min active",servings:4,protein:"veg",method:"stovetop",tags:["veg","vegan","crisis","budget","glutenfree","dairyfree","highprotein","mealprep"],ingredients:["1.5 cups red lentils","4 cups water","1 onion, diced","3 cloves garlic","1 tsp cumin","1 tsp turmeric","Salt","Oil"],directions:"1. Saut\u00E9 onion + garlic in oil, 3 min.\n2. Add lentils, water, cumin, turmeric.\n3. Boil, then simmer 20 min until thick.\n4. Salt to taste. Serve over rice.\n\n116g protein per dollar. The king of budget food."},
  {id:57,week:7,day:"Crisis",name:"Oatmeal Power Bowl",cost:0.75,time:"3 min",servings:1,protein:"veg",method:"stovetop",tags:["veg","crisis","budget","under30","highprotein"],ingredients:["1 cup oats","1 cup milk","1 banana, sliced","1 tbsp peanut butter","Honey or brown sugar"],directions:"1. Oats + milk, microwave 2 min.\n2. Top with banana, peanut butter, honey.\n\nComplete breakfast for $0.75. 25g+ protein."},
  {id:58,week:7,day:"Crisis",name:"Bean & Cheese Quesadilla",cost:0.75,time:"5 min",servings:1,protein:"veg",method:"stovetop",tags:["veg","crisis","budget","fast","kidfriendly","under30"],ingredients:["1 flour tortilla","1/3 cup refried beans","1/4 cup shredded cheese","Salsa (optional)"],directions:"1. Spread beans on half of tortilla.\n2. Top with cheese, fold.\n3. Cook in dry pan 2 min per side until golden.\n4. Dip in salsa.\n\nKids love these. Adults too."},
  {id:59,week:7,day:"Crisis",name:"Egg Drop Soup",cost:0.50,time:"5 min",servings:2,protein:"veg",method:"stovetop",tags:["veg","crisis","budget","fast","glutenfree","dairyfree","under30"],ingredients:["3 cups chicken broth","2 eggs, beaten","1 green onion, sliced","Salt, pepper","Cornstarch + water (optional for thickness)"],directions:"1. Bring broth to boil.\n2. Slowly drizzle beaten eggs while stirring.\n3. Top with green onion.\n\nRestaurant-quality for $0.50."},
  {id:60,week:7,day:"Crisis",name:"PB&J Sandwich",cost:0.40,time:"1 min",servings:1,protein:"veg",method:"stovetop",tags:["veg","crisis","budget","fast","noprep","kidfriendly","dairyfree","vegan"],ingredients:["2 slices bread","Peanut butter","Jelly or jam"],directions:"Spread. Stack. Eat.\n\n$0.40. ~400 calories. 12g protein.\nThe most efficient sandwich ever made."},
  {id:61,week:7,day:"Crisis",name:"Cabbage Stir Fry",cost:0.75,time:"8 min",servings:2,protein:"veg",method:"stovetop",tags:["veg","vegan","crisis","budget","glutenfree","dairyfree","under30"],ingredients:["1/4 head green cabbage, sliced","2 tbsp soy sauce","2 cloves garlic, minced","1 tbsp oil","Red pepper flakes (optional)"],directions:"1. Heat oil on high. Add garlic 30 sec.\n2. Add sliced cabbage, stir fry 5-6 min.\n3. Add soy sauce, toss.\n4. Optional: red pepper flakes.\n\nCabbage is $0.48/head. This feeds 2 for under $1."}
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
    html += '<td><button onclick="event.stopPropagation();addFoodToGrocery(' + f.id + ')" style="background:var(--accent);color:#fff;border:none;padding:0.25rem 0.5rem;border-radius:4px;cursor:pointer;font-size:0.75rem;font-weight:700">🛒</button></td>';
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

function addWeekToGrocery(weekNum) {
  var weekR = RECIPES.filter(function(r){return r.week === weekNum;});
  for (var i = 0; i < weekR.length; i++) {
    for (var j = 0; j < weekR[i].ingredients.length; j++) {
      addToGrocery(weekR[i].ingredients[j], 0, "recipe");
    }
  }
}

function renderMealPlanner() {
  var tabs = document.getElementById("weekTabs");
  var weekLabels = {1:"Week 1",2:"Week 2",3:"Week 3",4:"Week 4",5:"\u26A1 Speed Meals",6:"\uD83D\uDEAB\u200D\uD83C\uDF73 Zero Prep",7:"\uD83D\uDCB0 $1.59 Crisis"};
  var h = "";
  var weeks = [1,2,3,4,5,6,7];
  for (var i = 0; i < weeks.length; i++) {
    var w = weeks[i];
    h += '<button class="week-tab ' + (w === currentWeek ? "active" : "") + '" onclick="setWeek(' + w + ')">' + weekLabels[w] + '</button>';
  }
  tabs.innerHTML = h;
  var weekR = RECIPES.filter(function(r){return r.week === currentWeek;});
  var c = '<div class="week-grid">';
  for (var i = 0; i < weekR.length; i++) {
    var r = weekR[i];
    c += '<div class="day-card" onclick="showRecipe(' + r.id + ')"><div class="day-name">' + r.day + '</div><div class="meal-name">' + esc(r.name) + '</div><div class="meal-meta">' + r.time + ' \u00B7 ' + r.servings + ' servings</div><div class="meal-cost">~$' + r.cost.toFixed(2) + '</div></div>';
  }
  c += '</div>';
  c += '<div style="margin-top:1rem;display:flex;gap:1rem;flex-wrap:wrap">';
  c += '<button onclick="addWeekToGrocery(' + currentWeek + ')" style="background:var(--accent);color:#fff;border:none;padding:0.75rem 1.5rem;border-radius:6px;font-weight:700;font-size:0.9rem;font-family:inherit;cursor:pointer;text-transform:uppercase">\uD83D\uDED2 Add Week\'s Groceries to List</button>';
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
    var displayTags = ["chicken","beef","pork","veg","vegan","slow","fast","budget","glutenfree","dairyfree","kidfriendly","highprotein","mealprep","speed","crisis","noprep"];
    var tagLabels = {chicken:"Chicken",beef:"Beef",pork:"Pork",veg:"Vegetarian",vegan:"Vegan",slow:"Slow Cooker",fast:"Quick",budget:"Budget",glutenfree:"GF",dairyfree:"DF",kidfriendly:"Kid Friendly",highprotein:"High Protein",mealprep:"Meal Prep",under30:"<30 min",under3:"Under $3",speed:"\u26A1 Speed",crisis:"\uD83C\uDD98 Crisis",noprep:"No Prep"};
    var tagH = "";
    for (var j = 0; j < r.tags.length; j++) {
      var t = r.tags[j];
      if (displayTags.indexOf(t) >= 0) tagH += '<span class="tag ' + t + '">' + (tagLabels[t] || t) + '</span>';
    }
    h += '<div class="recipe-card"><div onclick="showRecipe(' + r.id + ')" style="cursor:pointer"><div class="recipe-title">' + esc(r.name) + '</div><div class="recipe-tags">' + tagH + '</div><div style="font-size:0.85rem;color:var(--text-light)">' + r.time + ' \u00B7 ' + r.servings + ' servings \u00B7 <span style="color:var(--accent);font-weight:700">~$' + r.cost.toFixed(2) + '</span></div></div><button onclick="addRecipeToGrocery(' + r.id + ')" style="margin-top:0.5rem;background:var(--accent);color:#fff;border:none;padding:0.35rem 0.8rem;border-radius:4px;cursor:pointer;font-size:0.8rem;font-weight:700;font-family:inherit">🛒 Add Ingredients</button></div>';
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



// === GROCERY LIST ===
var groceryList = JSON.parse(localStorage.getItem("eieGrocery") || "[]");

function addToGrocery(item, price, category) {
  groceryList.push({item:item, price:price||0, category:category||"other", qty:1});
  saveGrocery();
  renderGrocery();
  // flash the grocery tab
  var btn = document.querySelector('[data-tab="grocery"]');
  if (btn) { btn.style.background = "var(--accent)"; btn.style.color = "#fff"; setTimeout(function(){ btn.style.background = ""; btn.style.color = ""; }, 800); }
}

function addFoodToGrocery(id) {
  var f = null;
  for (var i = 0; i < FOODS.length; i++) { if (FOODS[i].id === id) { f = FOODS[i]; break; } }
  if (!f) return;
  var cat = "pantry";
  var n = f.name.toLowerCase();
  if (n.match(/chicken|beef|pork|turkey|salmon|tilapia|tuna|sausage|bacon|jerky|mackerel|pollock/)) cat = "protein";
  else if (n.match(/milk|cheese|yogurt|cream|butter|egg/)) cat = "dairy";
  else if (n.match(/lettuce|kale|carrot|spinach|potato|squash|tomato|pepper|onion|bean|pea|corn|broccoli|cabbage|celery|radish|artichoke|asparagus|garlic|ginger|parsley|cilantro/)) cat = "produce";
  else if (n.match(/banana|apple|orange|grape|berry|melon|mango|pear|peach|plum|pineapple|grapefruit|lime|lemon/)) cat = "produce";
  addToGrocery(f.name, f.price || 0, cat);
}

function addRecipeToGrocery(id) {
  var r = null;
  for (var i = 0; i < RECIPES.length; i++) { if (RECIPES[i].id === id) { r = RECIPES[i]; break; } }
  if (!r) return;
  for (var j = 0; j < r.ingredients.length; j++) {
    addToGrocery(r.ingredients[j], 0, "recipe");
  }
}

function removeGroceryItem(idx) {
  groceryList.splice(idx, 1);
  saveGrocery();
  renderGrocery();
}

function saveGrocery() {
  localStorage.setItem("eieGrocery", JSON.stringify(groceryList));
}

function renderGrocery() {
  var cats = {produce:[], protein:[], dairy:[], pantry:[], recipe:[], other:[]};
  var catLabels = {produce:"🥕 Produce", protein:"🥩 Protein", dairy:"🥛 Dairy", pantry:"🏪 Pantry", recipe:"📋 Recipe Ingredients", other:"📦 Other"};
  var total = 0;
  for (var i = 0; i < groceryList.length; i++) {
    var g = groceryList[i];
    var c = cats[g.category] ? g.category : "other";
    cats[c].push({item:g.item, price:g.price, idx:i});
    total += g.price || 0;
  }
  var h = "";
  var catOrder = ["produce","protein","dairy","pantry","recipe","other"];
  for (var k = 0; k < catOrder.length; k++) {
    var key = catOrder[k];
    if (cats[key].length === 0) continue;
    h += '<div style="margin-bottom:1rem"><h3 style="color:var(--accent);font-size:0.9rem;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:0.5rem">' + catLabels[key] + ' (' + cats[key].length + ')</h3>';
    for (var m = 0; m < cats[key].length; m++) {
      var it = cats[key][m];
      h += '<div style="display:flex;justify-content:space-between;align-items:center;padding:0.4rem 0;border-bottom:1px solid var(--border);font-size:0.9rem">';
      h += '<span>' + esc(it.item) + '</span>';
      h += '<div style="display:flex;gap:0.5rem;align-items:center">';
      if (it.price > 0) h += '<span style="color:var(--accent);font-weight:600">$' + it.price.toFixed(2) + '</span>';
      h += '<button onclick="removeGroceryItem(' + it.idx + ')" style="background:none;border:none;color:var(--red);cursor:pointer;font-size:1rem;padding:0 0.3rem">✕</button>';
      h += '</div></div>';
    }
    h += '</div>';
  }
  if (groceryList.length === 0) {
    h = '<div style="text-align:center;padding:3rem;color:var(--text-light)"><div style="font-size:3rem;margin-bottom:1rem">🛒</div><p>Your grocery list is empty.</p><p style="font-size:0.85rem;margin-top:0.5rem">Add items from Rankings, Recipes, or the Meal Builder!</p></div>';
  }
  var el = document.getElementById("groceryCats");
  if (el) el.innerHTML = h;
  var tot = document.getElementById("groceryTotal");
  if (tot) tot.textContent = "Est. Total: $" + total.toFixed(2) + (total === 0 && groceryList.length > 0 ? " (recipe items — price varies)" : "");
}

function copyGrocery() {
  var text = "EIE Grocery List\n================\n";
  for (var i = 0; i < groceryList.length; i++) {
    text += "☐ " + groceryList[i].item + (groceryList[i].price > 0 ? " ($" + groceryList[i].price.toFixed(2) + ")" : "") + "\n";
  }
  navigator.clipboard.writeText(text).then(function(){ alert("Grocery list copied to clipboard!"); });
}

function clearGrocery() {
  if (groceryList.length === 0) return;
  groceryList = [];
  saveGrocery();
  renderGrocery();
}

// === MEAL BUILDER ===
var mealParts = {
  proteins: [{name:"Chicken Breast",cost:1.99,cal:165,prot:31},{name:"Ground Beef",cost:3.19,cal:250,prot:17},{name:"Pork Loin",cost:1.99,cal:143,prot:26},{name:"Pinto Beans",cost:0.50,cal:245,prot:15},{name:"Lentils",cost:0.77,cal:230,prot:18},{name:"Eggs (4)",cost:0.48,cal:312,prot:24}],
  carbs: [{name:"Rice (2 cups)",cost:0.50,cal:412,prot:8},{name:"Noodles",cost:0.50,cal:400,prot:14},{name:"Potatoes (2)",cost:0.70,cal:320,prot:8},{name:"Bread (4 slices)",cost:0.40,cal:320,prot:12},{name:"Tortillas (4)",cost:0.60,cal:520,prot:12}],
  veggies: [{name:"Broccoli",cost:0.98,cal:55,prot:4},{name:"Carrots",cost:0.50,cal:52,prot:1},{name:"Green Beans",cost:0.98,cal:31,prot:2},{name:"Corn",cost:0.50,cal:96,prot:3},{name:"Frozen Mixed Veggies",cost:0.98,cal:65,prot:3}],
  flavors: [{name:"Teriyaki Sauce",cost:0.30},{name:"Alfredo Sauce",cost:0.75},{name:"BBQ Sauce",cost:0.25},{name:"Fajita Seasoning",cost:0.15},{name:"Italian Seasoning",cost:0.10},{name:"Soy Sauce + Ginger",cost:0.20}]
};

function renderMealBuilder() {
  var el = document.getElementById("mealBuilder");
  if (!el) return;
  var h = '<h3 style="color:var(--text-dark);margin-bottom:1rem">🔧 Build Your Own Meal</h3>';
  h += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-bottom:1.5rem">';
  // Protein
  h += '<div class="control-group"><label style="font-weight:700;margin-bottom:0.5rem;display:block">🥩 Protein</label><select id="mbProtein" onchange="updateMealBuilder()" style="width:100%;padding:0.5rem;border:2px solid var(--border);border-radius:4px;font-family:inherit">';
  for (var i = 0; i < mealParts.proteins.length; i++) h += '<option value="' + i + '">' + mealParts.proteins[i].name + '</option>';
  h += '</select></div>';
  // Carb
  h += '<div class="control-group"><label style="font-weight:700;margin-bottom:0.5rem;display:block">🍚 Carb</label><select id="mbCarb" onchange="updateMealBuilder()" style="width:100%;padding:0.5rem;border:2px solid var(--border);border-radius:4px;font-family:inherit">';
  for (var i = 0; i < mealParts.carbs.length; i++) h += '<option value="' + i + '">' + mealParts.carbs[i].name + '</option>';
  h += '</select></div>';
  // Veggie
  h += '<div class="control-group"><label style="font-weight:700;margin-bottom:0.5rem;display:block">🥦 Veggie</label><select id="mbVeg" onchange="updateMealBuilder()" style="width:100%;padding:0.5rem;border:2px solid var(--border);border-radius:4px;font-family:inherit">';
  for (var i = 0; i < mealParts.veggies.length; i++) h += '<option value="' + i + '">' + mealParts.veggies[i].name + '</option>';
  h += '</select></div>';
  // Flavor
  h += '<div class="control-group"><label style="font-weight:700;margin-bottom:0.5rem;display:block">🌶️ Flavor</label><select id="mbFlavor" onchange="updateMealBuilder()" style="width:100%;padding:0.5rem;border:2px solid var(--border);border-radius:4px;font-family:inherit">';
  for (var i = 0; i < mealParts.flavors.length; i++) h += '<option value="' + i + '">' + mealParts.flavors[i].name + '</option>';
  h += '</select></div>';
  h += '</div>';
  h += '<div id="mbResult" style="background:var(--bg2);border-radius:8px;padding:1.25rem;border:1px solid var(--border)"></div>';
  el.innerHTML = h;
  updateMealBuilder();
}

function updateMealBuilder() {
  var pi = parseInt(document.getElementById("mbProtein").value);
  var ci = parseInt(document.getElementById("mbCarb").value);
  var vi = parseInt(document.getElementById("mbVeg").value);
  var fi = parseInt(document.getElementById("mbFlavor").value);
  var p = mealParts.proteins[pi], c = mealParts.carbs[ci], v = mealParts.veggies[vi], f = mealParts.flavors[fi];
  var cost = (p.cost + c.cost + v.cost + f.cost).toFixed(2);
  var cal = p.cal + c.cal + v.cal;
  var prot = p.prot + c.prot + v.prot;
  var mealName = f.name.replace(/ Sauce| Seasoning/g,"") + " " + p.name.replace(/ \(.+/,"") + " with " + c.name.replace(/ \(.+/,"") + " & " + v.name;
  var searchQ = encodeURIComponent(p.name.replace(/ \(.+/,"") + " " + c.name.replace(/ \(.+/,"") + " " + v.name + " " + f.name.replace(/ Sauce| Seasoning/g,"") + " recipe");
  var h = '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1rem">';
  h += '<div><div style="font-size:1.2rem;font-weight:700;color:var(--text-dark)">' + esc(mealName) + '</div><div style="font-size:0.85rem;color:var(--text-light)">Your custom EIE meal</div></div>';
  h += '</div>';
  h += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin-bottom:1rem">';
  h += '<div style="text-align:center;background:var(--white);padding:0.75rem;border-radius:6px;border:1px solid var(--border)"><div style="font-size:1.4rem;font-weight:700;color:var(--accent)">$' + cost + '</div><div style="font-size:0.7rem;color:var(--text-light);text-transform:uppercase">Est. Cost</div></div>';
  h += '<div style="text-align:center;background:var(--white);padding:0.75rem;border-radius:6px;border:1px solid var(--border)"><div style="font-size:1.4rem;font-weight:700;color:var(--accent-blue)">' + cal + '</div><div style="font-size:0.7rem;color:var(--text-light);text-transform:uppercase">Calories</div></div>';
  h += '<div style="text-align:center;background:var(--white);padding:0.75rem;border-radius:6px;border:1px solid var(--border)"><div style="font-size:1.4rem;font-weight:700;color:var(--orange)">' + prot + 'g</div><div style="font-size:0.7rem;color:var(--text-light);text-transform:uppercase">Protein</div></div>';
  h += '</div>';
  h += '<div style="display:flex;gap:0.75rem;flex-wrap:wrap">';
  h += '<a href="https://www.google.com/search?q=' + searchQ + '" target="_blank" style="flex:1;display:inline-block;text-align:center;background:var(--accent);color:#fff;padding:0.7rem 1.5rem;border-radius:6px;text-decoration:none;font-weight:700;font-size:0.9rem;text-transform:uppercase">🔍 Search Recipes Online</a>';
  h += '<button onclick="addMealToGrocery()" style="flex:1;background:var(--accent-blue);color:#fff;border:none;padding:0.7rem 1.5rem;border-radius:6px;font-weight:700;font-size:0.9rem;font-family:inherit;cursor:pointer;text-transform:uppercase">🛒 Add to Grocery List</button>';
  h += '</div>';
  document.getElementById("mbResult").innerHTML = h;
}

function addMealToGrocery() {
  var pi = parseInt(document.getElementById("mbProtein").value);
  var ci = parseInt(document.getElementById("mbCarb").value);
  var vi = parseInt(document.getElementById("mbVeg").value);
  var fi = parseInt(document.getElementById("mbFlavor").value);
  addToGrocery(mealParts.proteins[pi].name, mealParts.proteins[pi].cost, "protein");
  addToGrocery(mealParts.carbs[ci].name, mealParts.carbs[ci].cost, "pantry");
  addToGrocery(mealParts.veggies[vi].name, mealParts.veggies[vi].cost, "produce");
  addToGrocery(mealParts.flavors[fi].name, mealParts.flavors[fi].cost, "pantry");
}

init();
renderGrocery();
renderMealBuilder();

// Wire up grocery buttons
document.getElementById("clearGrocery").addEventListener("click", clearGrocery);
document.getElementById("copyGrocery").addEventListener("click", copyGrocery);
