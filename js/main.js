// 1 ----------------------------------End  shrimpScampi ------------------------------
const shrimpScampi = {
  name: "Shrimp Scampi",
  image: "./images/ShrimpScampi.jfif",
  rating: "4.8 (356 reviews)",
  kind: {
    rate: "easy",
    region: "Seafood",
  },

  description: "Garlicky shrimp in white wine butter sauce",
  remarks: false,

  preparation: {
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",
  },

  ingredients: {
    ing1: "400g large shrimp, peeled",
    ing2: "300g linguine pasta",
    ing3: "6 cloves garlic, minced",
    ing4: "1/2 cup white wine",
    ing5: "4 tablespoons butter",
    ing6: "2 tablespoons olive oil",
    ing7: "Fresh parsley, chopped",
    ing8: "Lemon juice and zest",
    ing9: "Red pepper flakes",
  },

  instructions: {
    step1:
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
    step2:
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
    step3:
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
    step4:
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
    step5:
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
    step6: "Garnish with parsley, lemon zest, and serve immediately.",
  },

  nutrition: {
    calories: "520 kcal",
    carbohydrates: "54g",
    fiber: "3g",
    protein: "36g",
    fat: "18g",
    sodium: "520mg",
  },

  chefTips: {
    tip1: "Don't overcook shrimp - they cook very quickly",
    tip2: "Use good quality white wine for best flavor",
    tip3: "Toss pasta in sauce for maximum flavor absorption",
    tip4: "Add extra lemon for bright, fresh taste",
  },
};
// ------------------------------------End  shrimpScampi -------------------------------
// 2 ----------------------------------Start  greekMoussaka ----------------------------
const greekMoussaka = {
  name: "Greek Moussaka",
  image: "./images/GreekMoussaka.jfif",
  rating: "4.8 (234 reviews)",
  kind: {
    rate: "Intermediate",
    region: "Mediterranean",
  },

  description: "Traditional layered eggplant casserole with lamb",
  remarks: true,

  preparation: {
    prepTime: "30 min",
    cookTime: "60 min",
    servings: "4 people",
  },

  ingredients: {
    ing1: "3 large eggplants, sliced",
    ing2: "500g ground lamb",
    ing3: "400g canned tomatoes",
    ing4: "1 onion, diced",
    ing5: "3 cloves garlic, minced",
    ing6: "500ml béchamel sauce",
    ing7: "100g parmesan cheese",
    ing8: "Cinnamon and oregano",
    ing9: "Olive oil",
  },

  instructions: {
    step1:
      "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
    step2:
      "Brush eggplant slices with olive oil, grill or bake until softened.",
    step3:
      "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
    step4: "Preheat oven to 180°C (350°F).",
    step5:
      "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
    step6:
      "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
  },

  nutrition: {
    calories: "580 kcal",
    carbohydrates: "32g",
    fiber: "8g",
    protein: "36g",
    fat: "32g",
    sodium: "820mg",
  },

  chefTips: {
    tip1: "Salt eggplant to remove bitterness",
    tip2: "Don't skip the resting time - it helps set the layers",
    tip3: "Use ground beef if lamb is unavailable",
    tip4: "Make ahead and reheat for easier serving",
  },
};
// ------------------------------------End   greekMoussaka -----------------------------
// 3 ----------------------------------Start   margheritaPizza -------------------------
const margheritaPizza = {
  name: "Margherita Pizza",
  image: "./images/MargheritaPizza.jfif",
  rating: "4.9 (512 reviews)",
  kind: {
    rate: "Intermediate",
    region: "Italian",
  },

  description: "Classic Italian pizza with fresh mozzarella and basil",
  remarks: true,

  preparation: {
    prepTime: "90 min",
    cookTime: "12 min",
    servings: "2 people",
  },

  ingredients: {
    ing1: "300g pizza dough",
    ing2: "200g crushed tomatoes",
    ing3: "250g fresh mozzarella",
    ing4: "Fresh basil leaves",
    ing5: "2 tablespoons olive oil",
    ing6: "2 cloves garlic, minced",
    ing7: "Salt and pepper to taste",
    ing8: "Parmesan cheese for topping",
  },

  instructions: {
    step1: "Let pizza dough come to room temperature and rest for 1 hour.",
    step2: "Preheat oven to maximum temperature (usually 250°C/480°F).",
    step3:
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
    step4: "Roll out dough on a floured surface to desired thickness.",
    step5:
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
    step6:
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
  },

  nutrition: {
    calories: "580 kcal",
    carbohydrates: "68g",
    fiber: "4g",
    protein: "24g",
    fat: "22g",
    sodium: "920mg",
  },

  chefTips: {
    tip1: "Use a pizza stone for crispier crust",
    tip2: "Don't overload with toppings - less is more",
    tip3: "Add basil after baking to keep it fresh",
    tip4: "Let dough rest properly for best texture",
  },
};
// ------------------------------------End   margheritaPizza ---------------------------
//4  ----------------------------------Start   frenchOnionSoup -------------------------
const frenchOnionSoup = {
  name: "French Onion Soup",
  image: "./images/FrenchOnionSoup.jfif",
  rating: "4.8 (234 reviews)",
  kind: {
    rate: "Intermediate",
    region: "Mediterranean",
  },
  description: "Rich beef broth with caramelized onions and melted cheese",
  remarks: true,

  preparation: {
    prepTime: "15 min",
    cookTime: "60 min",
    servings: "4 people",
  },

  ingredients: {
    ing1: "4 large onions, thinly sliced",
    ing2: "4 tablespoons butter",
    ing3: "1 liter beef broth",
    ing4: "1/2 cup white wine",
    ing5: "2 bay leaves",
    ing6: "Fresh thyme",
    ing7: "Baguette slices",
    ing8: "200g Gruyère cheese, grated",
  },

  instructions: {
    step1:
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
    step2: "Add white wine and deglaze the pot, scraping up brown bits.",
    step3:
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
    step4: "Meanwhile, toast baguette slices until golden.",
    step5:
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
    step6:
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
  },

  nutrition: {
    calories: "380 kcal",
    carbohydrates: "36g",
    fiber: "4g",
    protein: "18g",
    fat: "18g",
    sodium: "920mg",
  },

  chefTips: {
    tip1: "Patience is key - don't rush the onion caramelization",
    tip2: "Use good quality beef broth for best flavor",
    tip3: "Gruyère can be substituted with Swiss cheese",
    tip4: "Watch carefully when broiling to avoid burning",
  },
};
// ------------------------------------End    frenchOnionSoup --------------------------
// 5 ----------------------------------Start  beefTacos --------------------------------
const beefTacos = {
  name: "Shrimp Scampi",
  image: "./images/BeefTacos.jfif",
  rating: "4.6 (278 reviews)",
  kind: {
    rate: "easy",
    region: "American",
  },

  description: "Flavorful Mexican tacos with seasoned ground beef",
  remarks: false,

  preparation: {
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
  },

  ingredients: {
    ing1: "500g ground beef",
    ing2: "8 taco shells",
    ing3: "1 onion, diced",
    ing4: "2 tablespoons taco seasoning",
    ing5: "Shredded lettuce",
    ing6: "Diced tomatoes",
    ing7: "Shredded cheddar cheese",
    ing8: "Sour cream",
    ing9: "Salsa",
  },

  instructions: {
    step1:
      "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
    step2: "Add diced onion and cook until softened, about 5 minutes.",
    step3: "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
    step4: "Warm taco shells according to package directions.",
    step5: "Fill each shell with seasoned beef.",
    step6:
      "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.",
  },

  nutrition: {
    calories: "420 kcal",
    carbohydrates: "32g",
    fiber: "4g",
    protein: "26g",
    fat: "20g",
    sodium: "780mg",
  },

  chefTips: {
    tip1: "Drain excess fat from beef for healthier tacos",
    tip2: "Warm shells in oven for better texture",
    tip3: "Prepare all toppings before cooking beef",
    tip4: "Use ground turkey for a lighter option",
  },
};
// ------------------------------------End   beefTacos --------------------------------
// 6 ----------------------------------Start  caesarSalad -----------------------------
const caesarSalad = {
  name: "Caesar Salad",
  image: "./images/CaesarSalad.jfif",
  rating: "4.4 (198 reviews)",
  kind: {
    rate: "easy",
    region: "Mediterranean",
  },

  description: "Classic salad with crispy romaine and creamy dressing",
  remarks: false,

  preparation: {
    prepTime: "15 min",
    cookTime: "0 min",
    servings: "4 people",
  },

  ingredients: {
    ing1: "1 large romaine lettuce",
    ing2: "1/2 cup Caesar dressing",
    ing3: "1/2 cup parmesan cheese, shaved",
    ing4: "1 cup croutons",
    ing5: "2 anchovy fillets (optional)",
    ing6: "Lemon wedges",
    ing7: "Black pepper",
  },

  instructions: {
    step1:
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
    step2: "Place lettuce in a large salad bowl.",
    step3: "Add Caesar dressing and toss until evenly coated.",
    step4: "Add croutons and half the parmesan cheese. Toss gently.",
    step5: "Top with remaining parmesan shavings and anchovies if using.",
    step6: "Serve immediately with lemon wedges and fresh black pepper.",
  },

  nutrition: {
    calories: "320 kcal",
    carbohydrates: "18g",
    fiber: "3g",
    protein: "12g",
    fat: "22g",
    sodium: "680mg",
  },

  chefTips: {
    tip1: "Use cold, crisp lettuce for best texture",
    tip2: "Make homemade croutons for better flavor",
    tip3: "Add grilled chicken for a complete meal",
    tip4: "Don't dress salad until ready to serve",
  },
};

// ------------------------------------End   caesarSalad ------------------------------
// 7 ----------------------------------Start  ChickenStirFry --------------------------
const ChickenStirFry = {
  name: "Chicken Stir-Fry",
  image: "./images/ChickenStirFry.jfif",
  rating: "4.5 (324 reviews)",
  kind: {
    rate: "easy",
    region: "Asian",
  },

  description: "Quick and healthy stir-fry with colorful vegetables",
  remarks: false,

  preparation: {
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "4 people",
  },

  ingredients: {
    ing1: "500g chicken breast, sliced",
    ing2: "2 bell peppers, sliced",
    ing3: "1 broccoli head, florets",
    ing4: "2 carrots, julienned",
    ing5: "3 tablespoons soy sauce",
    ing6: "2 tablespoons oyster sauce",
    ing7: "1 tablespoon sesame oil",
    ing8: "2 cloves garlic, minced",
    ing9: "Fresh ginger, grated",
  },

  instructions: {
    step1: "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
    step2:
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
    step3: "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
    step4:
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
    step5:
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",

    step6: "Serve immediately over steamed rice or noodles.",
  },

  nutrition: {
    calories: "320 kcal",
    carbohydrates: "18g",
    fiber: "5g",
    protein: "34g",
    fat: "12g",
    sodium: "840mg",
  },

  chefTips: {
    tip1: "Cut all ingredients before starting to cook",
    tip2: "Keep heat high for authentic stir-fry texture",
    tip3: "Don't overcrowd the wok or vegetables will steam",
    tip4: "Add cashews or peanuts for extra crunch",
  },
};
// ------------------------------------End   ChickenStirFry ---------------------------
// 8 ----------------------------------Start  ClassicBeefBurger -----------------------
const classicBeefBurger = {
  name: "Classic Beef Burger",
  image: "./images/ClassicBeefBurger.jfif",
  rating: "4.6 (421 reviews)",
  kind: {
    rate: "easy",
    region: "American",
  },

  description: "Juicy homemade burger with all the fixings",
  remarks: false,

  preparation: {
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
  },

  ingredients: {
    ing1: "500g ground beef (80/20)",
    ing2: "4 burger buns",
    ing3: "4 slices cheddar cheese",
    ing4: "Lettuce leaves",
    ing5: "Tomato slices",
    ing6: "Red onion, sliced",
    ing7: "Pickles",
    ing8: "Burger sauce or condiments",
  },

  instructions: {
    step1:
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
    step2: "Season patties generously with salt and pepper on both sides.",
    step3:
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
    step4: "Add cheese slices in the last minute of cooking and cover to melt.",
    step5: "Toast burger buns lightly on the grill or in a pan.",

    step6:
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
  },

  nutrition: {
    calories: "650 kcal",
    carbohydrates: "42g",
    fiber: "2g",
    protein: "38g",
    fat: "35g",
    sodium: "920mg",
  },

  chefTips: {
    tip1: "Don't press down on burgers while cooking - keeps them juicy",
    tip2: "Make indent in center to prevent burger from puffing up",
    tip3: "Let patties rest for 2-3 minutes before serving",
    tip4: "Toast buns for better texture and flavor",
  },
};
// ------------------------------------End   ClassicBeefBurger ---------------------------
// 9 ----------------------------------Start  padThai----------------------------------
const padThai = {
  name: "Pad Thai",
  image: "./images/PadThai.jfif",
  rating: "4.8 (445 reviews)",
  kind: {
    rate: "Intermediate",
    region: "Asian",
  },

  description: "Popular Thai stir-fried noodles with shrimp and peanuts",
  remarks: false,

  preparation: {
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "2 people",
  },

  ingredients: {
    ing1: "200g rice noodles",
    ing2: "200g shrimp, peeled",
    ing3: "2 eggs",
    ing4: "3 tablespoons tamarind paste",
    ing5: "2 tablespoons fish sauce",
    ing6: "1 tablespoon palm sugar",
    ing7: "Bean sprouts",
    ing8: "Crushed peanuts",
    ing9: "Lime wedges and cilantro",
  },

  instructions: {
    step1:
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
    step2: "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
    step3: "Heat wok over high heat. Scramble eggs and set aside.",
    step4:
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
    step5: "Add scrambled eggs and bean sprouts. Toss everything together.",
    step6: "Serve topped with crushed peanuts, lime wedges, and cilantro.",
  },

  nutrition: {
    calories: "540 kcal",
    carbohydrates: "62g",
    fiber: "4g",
    protein: "32g",
    fat: "16g",
    sodium: "1120mg",
  },

  chefTips: {
    tip1: "Don't oversoak noodles or they'll be mushy",
    tip2: "Cook on high heat for authentic wok flavor",
    tip3: "Balance sweet, sour, and salty flavors",
    tip4: "Prepare all ingredients before starting to cook",
  },
};
// -------------------------------------End   padThai---------------------------------
// 10 ----------------------------------Start  lasagnaBolognese-----------------------
const lasagnaBolognese = {
  name: "Lasagna Bolognese",
  image: "./images/LasagnaBolognese.jfif",
  rating: "4.9 (478 reviews)",
  kind: {
    rate: "Intermediate",
    region: "Italian",
  },

  description: "Layered Italian pasta with rich meat sauce and béchamel",
  remarks: true,

  preparation: {
    prepTime: "30 min",
    cookTime: "90 min",
    servings: "4 people",
  },

  ingredients: {
    ing1: "12 lasagna sheets",
    ing2: "500g ground beef",
    ing3: "400g canned tomatoes",
    ing4: "1 onion, diced",
    ing5: "2 carrots, diced",
    ing6: "500ml béchamel sauce",
    ing7: "200g mozzarella, grated",
    ing8: "100g parmesan cheese",
    ing9: "Fresh basil",
  },

  instructions: {
    step1:
      "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
    step2:
      "Cook lasagna sheets according to package directions. Drain and set aside.",
    step3: "Preheat oven to 180°C (350°F).",
    step4:
      "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
    step5: "Top final layer with béchamel, mozzarella, and parmesan cheese.",
    step6:
      "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
  },

  nutrition: {
    calories: "680 kcal",
    carbohydrates: "58g",
    fiber: "6g",
    protein: "42g",
    fat: "28g",
    sodium: "920mg",
  },

  chefTips: {
    tip1: "Make bolognese sauce a day ahead for better flavor",
    tip2: "Don't skip the resting time after baking",
    tip3: "Use fresh pasta sheets for best texture",
    tip4: "Freeze leftovers in individual portions",
  },
};
// ------------------------------------End   lasagnaBolognese--------------------------
// 11 ----------------------------------Start  thaiGreenCurry------------------------
const thaiGreenCurry = {
  name: "Thai Green Curry",
  image: "./images/ThaiGreenCurry.jfif",
  rating: "4.7 (312 reviews)",
  kind: {
    rate: "Intermediate",
    region: "Asian",
  },

  description: "Vibrant and aromatic curry with vegetables and coconut milk",
  remarks: false,

  preparation: {
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "4 people",
  },

  ingredients: {
    ing1: "2 tablespoons green curry paste",
    ing2: "400ml coconut milk",
    ing3: "300g chicken breast, sliced",
    ing4: "1 red bell pepper, sliced",
    ing5: "100g green beans",
    ing6: "1 eggplant, cubed",
    ing7: "2 tablespoons fish sauce",
    ing8: "1 tablespoon palm sugar",
    ing9: "Fresh Thai basil leaves",
  },

  instructions: {
    step1:
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
    step2:
      "Add half the coconut milk and stir to combine with the curry paste.",
    step3: "Add sliced chicken and cook until no longer pink, about 5 minutes.",
    step4:
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
    step5:
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
    step6: "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
  },

  nutrition: {
    calories: "420 kcal",
    carbohydrates: "22g",
    fiber: "5g",
    protein: "26g",
    fat: "26g",
    sodium: "890mg",
  },

  chefTips: {
    tip1: "Adjust spice level by using more or less curry paste",
    tip2: "Add vegetables in stages based on cooking time needed",
    tip3: "Fresh Thai basil is essential for authentic flavor",
    tip4: "Use full-fat coconut milk for richest, creamiest sauce",
  },
};
// -------------------------------------End   thaiGreenCurry---------------------------
// 12 ----------------------------------Start  honeyGarlicSalmon---------------------
const honeyGarlicSalmon = {
  name: "Honey Garlic Salmon",
  image: "./images/HoneyGarlicSalmon.jfif",
  rating: "4.9 (187 reviews)",
  kind: {
    rate: "Easy",
    region: "Seafood",
  },

  description: "Pan-seared salmon with a sweet and savory glaze",
  remarks: false,

  preparation: {
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",
  },

  ingredients: {
    ing1: "2 salmon fillets (6oz each)",
    ing2: "3 tablespoons honey",
    ing3: "2 tablespoons soy sauce",
    ing4: "4 cloves garlic, minced",
    ing5: "1 tablespoon olive oil",
    ing6: "1 teaspoon fresh ginger, grated",
    ing7: "Sesame seeds for garnish",
    ing8: "Green onions, sliced",
  },

  instructions: {
    step1:
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
    step2:
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
    step3: "Heat olive oil in a large skillet over medium-high heat.",
    step4:
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
    step5:
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
    step6:
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
  },

  nutrition: {
    calories: "380 kcal",
    carbohydrates: "28g",
    fiber: "0g",
    protein: "35g",
    fat: "14g",
    sodium: "720mg",
  },

  chefTips: {
    tip1: "Don't overcook salmon - it should be slightly pink in the center",
    tip2: "Use wild-caught salmon for best flavor and nutrition",
    tip3: "Let the sauce caramelize slightly for deeper flavor",
    tip4: "Pair with steamed broccoli or asparagus for a complete meal",
  },
};
// -------------------------------------End   honeyGarlicSalmon-----------------------
// 13 ----------------------------------Start  chickenTikkaMasala-----------------------
const chickenTikkaMasala = {
  name: "Chicken Tikka Masala",
  image: "./images/chickenTikkaMasala.jfif",
  rating: "4.7 (389 reviews)",
  kind: {
    rate: "Intermediate",
    region: "Asian",
  },

  description: "Rich and creamy Indian curry with tender chicken pieces",
  remarks: true,

  preparation: {
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
  },

  ingredients: {
    ing1: "600g chicken breast, cubed",
    ing2: "1 cup plain yogurt",
    ing3: "2 tablespoons tikka masala paste",
    ing4: "400ml coconut cream",
    ing5: "1 onion, diced",
    ing6: "4 cloves garlic, minced",
    ing7: "2 tablespoons ginger, grated",
    ing8: "400g canned tomatoes",
    ing9: "Fresh cilantro for garnish",
  },

  instructions: {
    step1:
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
    step2:
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
    step3:
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
    step4:
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
    step5:
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
    step6:
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
  },

  nutrition: {
    calories: "450 kcal",
    carbohydrates: "24g",
    fiber: "4g",
    protein: "38g",
    fat: "22g",
    sodium: "760mg",
  },

  chefTips: {
    tip1: "Marinate chicken overnight for deeper flavor",
    tip2: "Use full-fat coconut cream for richest sauce",
    tip3: "Adjust spice level by varying the tikka paste amount",
    tip4: "Serve with naan bread and basmati rice",
  },
};
// -------------------------------------End   chickenTikkaMasala-----------------------
// 14 ----------------------------------Start  creamySpaghettiCarbonara-----------------------
const creamySpaghettiCarbonara = {
  name: "Creamy Spaghetti Carbonara",
  image: "./images/CreamySpaghettiCarbonara.jfif",
  rating: "4.8 (234 reviews)",
  kind: {
    rate: "Easy",
    region: "Italian",
  },

  description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
  remarks: true,

  preparation: {
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
  },

  ingredients: {
    ing1: "400g spaghetti pasta",
    ing2: "200g pancetta or guanciale, diced",
    ing3: "4 large eggs",
    ing4: "100g Pecorino Romano cheese, grated",
    ing5: "50g Parmesan cheese, grated",
    ing6: "Freshly ground black pepper",
    ing7: "Salt for pasta water",
  },

  instructions: {
    step1:
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
    step2:
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
    step3:
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
    step4:
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
    step5:
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
    step6:
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
  },

  nutrition: {
    calories: "520 kcal",
    carbohydrates: "62g",
    fiber: "3g",
    protein: "28g",
    fat: "18g",
    sodium: "680mg",
  },

  chefTips: {
    tip1: "Use room temperature eggs for a smoother sauce consistency",
    tip2: "Work quickly when mixing eggs with hot pasta to avoid scrambling",
    tip3: "Reserve extra pasta water - it's the secret to perfect creaminess",
    tip4: "Freshly grated cheese makes all the difference in flavor",
    tip5: "Never add cream - authentic carbonara is made with eggs only",
  },
};
// -------------------------------------End   creamySpaghettiCarbonara-----------------------
// 15 ----------------------------------Start  capreseSandwich-----------------------
const capreseSandwich = {
  name: "Caprese Sandwich",
  image: "./images/CapreseSandwich.jfif",
  rating: "4.5 (189 reviews)",
  kind: {
    rate: "Easy",
    region: "Italian",
  },

  description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
  remarks: true,

  preparation: {
    prepTime: "10 min",
    cookTime: "5 min",
    servings: "2 people",
  },

  ingredients: {
    ing1: "1 ciabatta bread",
    ing2: "200g fresh mozzarella, sliced",
    ing3: "2 large tomatoes, sliced",
    ing4: "Fresh basil leaves",
    ing5: "3 tablespoons pesto",
    ing6: "2 tablespoons balsamic glaze",
    ing7: "Olive oil",
    ing8: "Salt and pepper",
  },

  instructions: {
    step1: "Slice ciabatta bread in half horizontally.",
    step2: "Toast bread lightly until just crispy.",
    step3: "Spread pesto on both sides of bread.",
    step4: "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
    step5:
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
    step6: "Close sandwich, cut in half, and serve immediately.",
  },

  nutrition: {
    calories: "480 kcal",
    carbohydrates: "48g",
    fiber: "3g",
    protein: "22g",
    fat: "22g",
    sodium: "680mg",
  },

  chefTips: {
    tip1: "Use ripe, in-season tomatoes for best flavor",
    tip2: "Buffalo mozzarella is traditional but harder to slice",
    tip3: "Toast bread lightly - not too crispy",
    tip4: "Add prosciutto or salami for a heartier sandwich",
  },
};
// -------------------------------------End   capreseSandwich-----------------------
// 16 ----------------------------------Start  vegetableCurry-----------------------
const vegetableCurry = {
  name: "Vegetable Curry",
  image: "./images/VegetableCurry.jfif",
  rating: "4.6 (289 reviews)",
  kind: {
    rate: "Easy",
    region: "Asian",
  },

  description: "Hearty vegetarian curry with coconut milk",
  remarks: true,

  preparation: {
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
  },

  ingredients: {
    ing1: "2 potatoes, cubed",
    ing2: "1 cauliflower, florets",
    ing3: "2 carrots, sliced",
    ing4: "1 can chickpeas",
    ing5: "400ml coconut milk",
    ing6: "3 tablespoons curry powder",
    ing7: "1 onion, diced",
    ing8: "3 cloves garlic, minced",
    ing9: "Fresh spinach",
  },

  instructions: {
    step1:
      "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
    step2: "Add potatoes and carrots, cook for 5 minutes.",
    step3: "Pour in coconut milk and 1 cup water. Bring to simmer.",
    step4:
      "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
    step5: "Stir in fresh spinach and cook until wilted.",
    step6: "Serve hot over basmati rice or with naan bread.",
  },

  nutrition: {
    calories: "380 kcal",
    carbohydrates: "48g",
    fiber: "12g",
    protein: "14g",
    fat: "16g",
    sodium: "480mg",
  },

  chefTips: {
    tip1: "Add vegetables in order of cooking time needed",
    tip2: "Adjust curry powder amount to taste",
    tip3: "Use full-fat coconut milk for creamier curry",
    tip4: "Add protein like tofu or paneer if desired",
  },
};
// -------------------------------------End   vegetableCurry-----------------------
// 17 ----------------------------------Start  teriyakiChickenBowl-----------------------
const teriyakiChickenBowl = {
  name: "Teriyaki Chicken Bowl",
  image: "./images/TeriyakiChickenBowl.jfif",
  rating: "4.7 (367 reviews)",
  kind: {
    rate: "Easy",
    region: "Asian",
  },

  description: "Sweet and savory chicken over rice with vegetables",
  remarks: false,

  preparation: {
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "2 people",
  },

  ingredients: {
    ing1: "400g chicken thighs, sliced",
    ing2: "1/2 cup teriyaki sauce",
    ing3: "2 cups cooked rice",
    ing4: "1 broccoli head, florets",
    ing5: "1 carrot, julienned",
    ing6: "Sesame seeds",
    ing7: "Green onions, sliced",
    ing8: "1 tablespoon sesame oil",
  },

  instructions: {
    step1: "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
    step2:
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
    step3: "Meanwhile, steam broccoli and carrots until tender-crisp.",
    step4: "Divide rice between bowls.",
    step5: "Top with teriyaki chicken and steamed vegetables.",
    step6: "Garnish with sesame seeds and green onions. Serve hot.",
  },

  nutrition: {
    calories: "540 kcal",
    carbohydrates: "58g",
    fiber: "4g",
    protein: "42g",
    fat: "14g",
    sodium: "1240mg",
  },

  chefTips: {
    tip1: "Use chicken thighs for juicier meat",
    tip2: "Make homemade teriyaki sauce for better flavor control",
    tip3: "Add edamame for extra protein",
    tip4: "Meal prep by cooking rice and chicken ahead",
  },
};
// ----------------------------------End   teriyakiChickenBowl-----------------------
// 18 ----------------------------------Start  bBQPulledPork-----------------------
const bBQPulledPork = {
  name: "BBQ Pulled Pork",
  image: "./images/BBQPulledPork.jfif",
  rating: "4.7 (412 reviews)",
  kind: {
    rate: "Easy",
    region: "American",
  },

  description: "Slow-cooked tender pork in smoky barbecue sauce",
  remarks: true,

  preparation: {
    prepTime: "15 min",
    cookTime: "240 min",
    servings: "4 people",
  },

  ingredients: {
    ing1: "1kg pork shoulde",
    ing2: "1 cup BBQ sauce",
    ing3: "1/2 cup apple cider vinegar",
    ing4: "2 tablespoons brown sugar",
    ing5: "1 tablespoon paprika",
    ing6: "1 tablespoon garlic powder",
    ing7: "Burger buns",
    ing8: "Coleslaw for serving",
  },

  instructions: {
    step1:
      "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
    step2:
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
    step3:
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
    step4: "Remove pork and shred with two forks. Discard excess fat.",
    step5: "Return shredded pork to slow cooker, mix with BBQ sauce.",
    step6: "Serve on toasted buns with coleslaw on top.",
  },

  nutrition: {
    calories: "620 kcal",
    carbohydrates: "52g",
    fiber: "3g",
    protein: "48g",
    fat: "22g",
    sodium: "1180mg",
  },

  chefTips: {
    tip1: "Use pork shoulder for best results - it stays moist",
    tip2: "Let pork rest before shredding for juicier meat",
    tip3: "Make your own BBQ sauce for better flavor",
    tip4: "Leftovers freeze well for up to 3 months",
  },
};
// ----------------------------------End   bBQPulledPork-----------------------
// 19 ----------------------------------Start  mediterraneanQuinoaBowl-----------------------
const mediterraneanQuinoaBowl = {
  name: "Mediterranean Quinoa Bowl",
  image: "./images/MediterraneanQuinoaBowl.jfif",
  rating: "4.5 (156 reviews)",
  kind: {
    rate: "Easy",
    region: "Mediterranean",
  },

  description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
  remarks: true,

  preparation: {
    prepTime: "20 min",
    cookTime: "35 min",
    servings: "2 people",
  },

  ingredients: {
    ing1: "1 cup quinoa",
    ing2: "Cherry tomatoes, halved",
    ing3: "Cucumber, diced",
    ing4: "Red onion, sliced",
    ing5: "Kalamata olives",
    ing6: "Feta cheese, crumbled",
    ing7: "Fresh parsley",
    ing8: "Tahini dressing",
  },

  instructions: {
    step1:
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
    step2: "While quinoa cooks, prepare all vegetables and set aside.",
    step3:
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
    step4: "Fluff cooked quinoa with a fork and let cool slightly.",
    step5:
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
    step6:
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
  },

  nutrition: {
    calories: "480 kcal",
    carbohydrates: "58g",
    fiber: "10g",
    protein: "18g",
    fat: "20g",
    sodium: "540mg",
  },

  chefTips: {
    tip1: "Rinse quinoa well to remove bitter coating",
    tip2: "Let quinoa cool before adding fresh ingredients",
    tip3: "Make extra tahini dressing - it keeps well in the fridge",
    tip4: "Add grilled chicken or chickpeas for extra protein",
  },
};
// ----------------------------------End   mediterraneanQuinoaBowl-----------------------
// SAVE

var dinner = [
  mediterraneanQuinoaBowl,
  bBQPulledPork,
  teriyakiChickenBowl,
  vegetableCurry,
  capreseSandwich,
  creamySpaghettiCarbonara,
  chickenTikkaMasala,
  honeyGarlicSalmon,
  thaiGreenCurry,
  lasagnaBolognese,
  padThai,
  classicBeefBurger,
  ChickenStirFry,
  caesarSalad,
  beefTacos,
  frenchOnionSoup,
  margheritaPizza,
  greekMoussaka,
  shrimpScampi,
];
var index;
var ingVar = "";
var instVar = "";
var tipsVar = "";

localStorage.setItem("dinner", JSON.stringify(dinner));
// GET
var dinnerArray = JSON.parse(localStorage.getItem("dinner")) || [];

var min = 0;
var max = dinnerArray.length;

// var randomNumber = Math.floor(Math.random() * 19) + 1;

let lastNum;

function getUniqueRandom(min, max) {
  let nextNum;
  do {
    nextNum = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (nextNum === lastNum);
  lastNum = nextNum;
  return nextNum;
}

var randomNumber = getUniqueRandom(min, max);

// console.log("number " + randomNumber);

if (localStorage.getItem("dinner") !== null) {
  dinnerArray = JSON.parse(localStorage.getItem("dinner"));
  SelectNumber();

  displayProducts(0);
}

function SelectNumber() {
  var randomNumber = getUniqueRandom(min, max);

  if (localStorage.getItem("dinner") !== null) {
    dinnerArray = JSON.parse(localStorage.getItem("dinner"));
    tmpArray = [dinnerArray[randomNumber]];
    ingVar = "";
    instVar = "";
    tipsVar = "";
    ingredient(tmpArray);
    instructions(tmpArray);
    tips(tmpArray);
    displayProducts(0);
  }
}

function tips(arrayvar) {
  var tipsArray = Object.values(arrayvar[0].chefTips);
  for (var i = 0; i < tipsArray.length; i++) {
    tipsVar += `
        <div class="p-4 d-flex justify-content-start align-items-center p-2 mb-3 rounded-3 gap-4 alertnut">
          <i class="rounded-3 px-2 fa-solid fa-circle-check fs-5 nut3"></i>
          <h6>${tipsArray[i]}</h6>
        </div>

     `;
  }
}

function ingredient(arrayvar) {
  var ingredientsArray = Object.values(arrayvar[0].ingredients);
  for (var i = 0; i < ingredientsArray.length; i++) {
    ingVar += `
        <ul class="list-group list-group-flush ">
          <li class="list-group-item">
            <span class="ingtab rounded-circle fw-bold me-2 py-1">${i + 1}</span> ${ingredientsArray[i]}
            
          </li>
        </ul>

     `;
  }
}
function instructions(arrayvar) {
  var instructionsArray = Object.values(arrayvar[0].instructions);
  for (var i = 0; i < instructionsArray.length; i++) {
    instVar += `
        <div
          class="card border-0 d-flex flex-row justify-content-start align-items-center p-3 gap-3"
        >
          <span class="instab rounded-4 fw-bold">${i + 1}</span>

          <span>${instructionsArray[i]}</span>
        </div>
     `;
  }
}

function displayProducts(index) {
  const container = document.getElementById("main");
  var cartona = "";

  cartona = `
<div class="row recipe-card rounded-5 overflow-hidden overflow-x-hidden">
  <!-- LEFT IMAGE -->
  <div class="col-lg-5 p-0">
    <div class="left-side position-relative">
    <img 
      src="${tmpArray[index].image}" 
      class="img-fluid h-100 object-fit-lg-cover"
      alt="Food"
       />
      <div class="bage position-absolute">
        <span class="bg-light text-dark rounded-pill px-3 py-2 mb-3">
          <i class="fa-solid fa-star txt-gold"></i>${tmpArray[index].rating}
        </span>
      </div>
      <div class="recipe-info bg-white mx-4 px-3 py-2 w-75 rounded-4">
        <div class="row g-4">
          <div class="col-4  d-flex flex-column align-items-center">
            <i class="fa-solid fa-clock txt-orange fs-3"></i>
            <small class="mt-2">${tmpArray[index].preparation.prepTime}</small>
            <h6 class="fw-bold">15 min</h6>
          </div>

          <div class="col-4 d-flex flex-column align-items-center">
            <i class="fa-solid fa-fire-burner txt-red-500 fs-3"></i>
            <small class="mt-2">Cook</small>
            <h6 class="fw-bold">${tmpArray[index].preparation.cookTime}</h6>
          </div>

          <div class="col-4  d-flex flex-column align-items-center">
            <i class="fa-solid fa-users txt-blue-500 fs-3"></i>
            <small class="mt-2">Servings</small>
            <h6 class="fw-bold">${tmpArray[index].preparation.servings}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- RIGHT CONTENT -->
  <div class="col-lg-7 bg-white position-relative px-5">
    <div class="bage1 rounded-4 py-1 px-3 position-absolute">
      <span> ${tmpArray[index].kind.rate} </span>
    </div>
    <div class="bage2 rounded-4 py-1 px-3 position-absolute">
      <span>  ${tmpArray[index].kind.region} </span>
    </div>

    <div
      class="mt-5 p-3 d-flex justify-content-between align-items-center gap-3"
    >
      <div>
        <h2 class="fw-bold mb-1 mt-2">
         ${tmpArray[index].name}
        </h2>
        <span>${tmpArray[index].description}</span>
      </div>

      <i class="rounded-3 px-2 fa-solid fa-bookmark txt-orange bage3"></i>
      <i class="rounded-3 px-2 fa-solid fa-share-nodes txt-orange bage3"></i>
    </div>
    <div style="display:${tmpArray[index].remarks ? "block" : "none"}">
        <div class="d-flex justify-content-start align-items-center p-3 rounded-3 gap-4 alertsec ">
           <i class="rounded-3 px-2 fa-solid fa-triangle-exclamation txt-orange fs-4 text-danger"></i>
           <div>
              ${tmpArray[index].remarks ? '<h6 class="txt-red-800">Extended Preparation Time</h6>' : ""}
              ${tmpArray[index].remarks ? '<small class="txt-red-800">This recipe requires more than 45 minutes to prepare.Plan accordingly!</small>' : ""}
           </div>
         </div>
    </div>
    <!-- TABS -->
    <ul class="nav nav-pills mt-4 mb-4 gap-2" id="recipeTabs">
      <li class="nav-item">
        <button
          class="nav-link active"
          data-bs-toggle="pill"
          data-bs-target="#ingredients"
        >
          <i class="fa-solid fa-list-check"></i>
          <span class="mb-0">Ingredients</span>
        </button>
      </li>

      <li class="nav-item">
        <button
          class="nav-link"
          data-bs-toggle="pill"
          data-bs-target="#instructions"
        >
          <i class="fa-solid fa-book-open"></i>
          <span class="mb-0">Instructions</span>
        </button>
      </li>

      <li class="nav-item">
        <button
          class="nav-link"
          data-bs-toggle="pill"
          data-bs-target="#nutrition"
        >
          <i class="fa-solid fa-chart-pie"></i>
          <span class="mb-0">Nutrition</span>
        </button>
      </li>

      <li class="nav-item">
        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#tips">
          <i class="fa-solid fa-lightbulb"></i>
          <span class="mb-0">Chef Tips</span>
        </button>
      </li>
    </ul>

    <!-- TAB CONTENT -->
    <div class="tab-content tabulation">
      <!-- INGREDIENTS -->
      <div class="tab-pane bg-orange fade show active" id="ingredients">
         <!-- INGREDIENTS CONTENT -->
       </div>
      <!-- INSTRUCTIONS -->
        <div class="tab-pane fade" id="instructions">
            <!-- INSTRUCTIONS CONTENT -->


        <div
          class="card border-0 d-flex flex-row justify-content-start align-items-center p-3 gap-3"
        >
          <span class="instab rounded-4 fw-bold">2</span>

          <span
            >In the same pan, sauté onion until soft. Add garlic and ginger,
            cook for 1 minute.</span
          >
        </div>
        <div
          class="card border-0 d-flex flex-row justify-content-start align-items-center p-3 gap-3"
        >
          <span class="instab rounded-4 fw-bold">2</span>

          <span
            >In the same pan, sauté onion until soft. Add garlic and ginger,
            cook for 1 minute.</span
          >
        </div>
      </div>

      <!-- NUTRITION -->
      <div class="tab-pane fade overflow-x-hidden" id="nutrition">
        <div class="row g-2">
          <div class="col-md-6">
            <div
              class="d-flex justify-content-between align-items-center p-3 rounded-3 gap-4 alerttab"
            >
              <div
                class="d-flex justify-content-start align-items-center gap-2"
              >
                <i class="fa-solid fa-fire nut nut1 rounded-3"></i>
                <h6 class="mb-0 alertnutr">Calories</h6>
              </div>
              <div>
                <h6 class="txt-red-800 fw-bold text-black fs-5"> ${tmpArray[index].nutrition.calories}</h6>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="d-flex justify-content-between align-items-center p-3 rounded-3 gap-4 alerttab"
            >
              <div
                class="d-flex justify-content-start align-items-center gap-2"
              >
                <i class="fa-solid fa-dumbbell nut nut2 rounded-3"></i>
                <h6 class="mb-0 alertnutr">Protein</h6>
              </div>
              <div>
                <h6 class="txt-red-800 fw-bold text-black fs-5">${tmpArray[index].nutrition.protein}</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-md-6">
            <div
              class="d-flex justify-content-between align-items-center p-3 rounded-3 gap-4 alerttab"
            >
              <div
                class="d-flex justify-content-start align-items-center gap-2"
              >
                <i class="fa-solid fa-wheat-awn nut nut3 rounded-3"></i>
                <h6 class="mb-0 alertnutr">Carbohydrates</h6>
              </div>
              <div>
                <h6 class="txt-red-800 fw-bold text-black fs-5"> ${tmpArray[index].nutrition.carbohydrates}</h6>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="d-flex justify-content-between align-items-center p-3 rounded-3 gap-4 alerttab"
            >
              <div
                class="d-flex justify-content-start align-items-center gap-2"
              >
                <i class="fa-solid fa-droplet nut nut4 rounded-3"></i>
                <h6 class="mb-0 alertnutr">Fat</h6>
              </div>
              <div>
                <h6 class="txt-red-800 fw-bold text-black fs-5">${tmpArray[index].nutrition.fat}</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-md-6">
            <div
              class="d-flex justify-content-between align-items-center p-3 rounded-3 gap-4 alerttab"
            >
              <div
                class="d-flex justify-content-start align-items-center gap-2"
              >
                <i class="fa-solid fa-seedling nut nut5 rounded-3"></i>
                <h6 class="mb-0 alertnutr">Fiber</h6>
              </div>
              <div>
                <h6 class="txt-red-800 fw-bold text-black fs-5">${tmpArray[index].nutrition.fiber}</h6>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="d-flex justify-content-between align-items-center p-3 rounded-3 gap-4 alerttab"
            >
              <div
                class="d-flex justify-content-start align-items-center gap-2"
              >
                <i class="fa-solid fa-cube nut nut6 rounded-3"></i>
                <h6 class="mb-0 alertnutr">Sodium</h6>
              </div>
              <div>
                <h6 class="txt-red-800 fw-bold text-black fs-5">${tmpArray[index].nutrition.sodium}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CHEF TIPS -->
      <div class="tab-pane fade" id="tips">
        <div class="p-4 d-flex justify-content-start align-items-center p-2 rounded-3 gap-4 alertnut">
          <i class="rounded-3 px-2 fa-solid fa-circle-check fs-5 nut3"></i>

        </div>
      </div>
    </div>

    <button onclick="SelectNumber()" class="btn custom-btn rounded-4 px-4 py-3 mt-5 mb-5">
      Try Another Recipe
    </button>
  </div>
</div>   
   `;

  document.getElementById("main").innerHTML = cartona;
  document.getElementById("ingredients").innerHTML = ingVar;
  document.getElementById("instructions").innerHTML = instVar;
  document.getElementById("tips").innerHTML = tipsVar;
}
