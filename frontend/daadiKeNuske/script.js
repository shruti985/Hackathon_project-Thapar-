// Language data
const languageData = {
  en: {
    // Skin Care Remedies
    skincare: {
      1: {
        title: "Turmeric Face Mask",
        ingredients: [
          "1 tsp turmeric powder",
          "2 tbsp yogurt",
          "1 tsp honey",
          "Few drops of lemon juice",
        ],
        method:
          "Mix all ingredients to form a smooth paste. Apply evenly on clean face, avoiding eye area. Leave for 15-20 minutes until dry. Rinse with lukewarm water and pat dry. Use 2-3 times a week.",
        benefits:
          "Turmeric has powerful anti-inflammatory and antibacterial properties that help reduce acne, brighten skin tone, and give a natural glow. Yogurt contains lactic acid that gently exfoliates, while honey moisturizes and has antimicrobial properties.",
      },
      2: {
        title: "Rose Water Toner",
        ingredients: [
          "Fresh rose petals",
          "Distilled water",
          "Clean spray bottle",
        ],
        method:
          "Boil 2 cups of distilled water. Add a handful of fresh rose petals and simmer for 10-15 minutes. Strain the liquid and let it cool. Store in a spray bottle in the refrigerator. Use twice daily after cleansing.",
        benefits:
          "Rose water helps maintain skin's pH balance, reduces redness and irritation, provides hydration, and has anti-aging properties. It's suitable for all skin types and helps tighten pores naturally.",
      },
      3: {
        title: "Honey Lemon Scrub",
        ingredients: [
          "2 tbsp raw honey",
          "1 tbsp fresh lemon juice",
          "1 tbsp sugar",
          "1 tsp olive oil",
        ],
        method:
          "Mix honey and lemon juice until well combined. Add sugar and olive oil to create a scrub consistency. Gently massage on damp skin in circular motions for 2-3 minutes. Rinse with warm water. Use once a week.",
        benefits:
          "Honey is a natural humectant that moisturizes while having antibacterial properties. Lemon brightens skin and provides vitamin C, while sugar acts as a natural exfoliant to remove dead skin cells.",
      },
      4: {
        title: "Cucumber Eye Mask",
        ingredients: [
          "1 fresh cucumber",
          "2 tbsp aloe vera gel",
          "1 tsp rose water",
        ],
        method:
          "Grate cucumber and extract juice. Mix with aloe vera gel and rose water. Soak cotton pads in the mixture and place over closed eyes. Relax for 15-20 minutes. Rinse with cool water.",
        benefits:
          "Cucumber has cooling and anti-inflammatory properties that reduce puffiness and dark circles. It contains antioxidants and silica that help rejuvenate the delicate eye area skin.",
      },
      5: {
        title: "Gram Flour Pack",
        ingredients: [
          "3 tbsp gram flour (besan)",
          "1 tbsp yogurt",
          "1 tsp turmeric",
          "Rose water as needed",
        ],
        method:
          "Mix gram flour, yogurt, and turmeric. Add rose water gradually to make a smooth paste. Apply evenly on face and neck. Let it dry for 20-25 minutes. Scrub gently while washing off with water.",
        benefits:
          "Gram flour deep cleanses pores, removes excess oil, and acts as a natural exfoliant. It helps remove tan, brighten complexion, and is especially beneficial for oily and acne-prone skin.",
      },
      6: {
        title: "Aloe Vera Gel",
        ingredients: ["Fresh aloe vera leaf", "1 tsp vitamin E oil (optional)"],
        method:
          "Cut aloe vera leaf and extract fresh gel. Blend until smooth. Add vitamin E oil if desired. Apply directly on clean skin. Leave overnight or for 30 minutes. Rinse if needed. Store remaining gel in refrigerator.",
        benefits:
          "Aloe vera soothes irritated skin, provides deep hydration, has anti-inflammatory properties, and helps heal minor cuts and burns. It's suitable for all skin types, especially sensitive skin.",
      },
      7: {
        title: "Milk Cream Moisturizer",
        ingredients: [
          "2 tbsp fresh milk cream",
          "1 tsp honey",
          "Few drops of rose water",
        ],
        method:
          "Whip milk cream until fluffy. Add honey and rose water, mix well. Apply on clean face and neck. Massage gently for 2-3 minutes. Leave for 20 minutes, then rinse with lukewarm water.",
        benefits:
          "Milk cream is rich in lactic acid and fats that deeply moisturize dry skin. It helps improve skin texture, provides natural glow, and has anti-aging properties due to proteins and vitamins.",
      },
    },
    // Postpartum Care Remedies
    postpartum: {
      1: {
        title: "Ajwain Water",
        ingredients: [
          "2 tbsp carom seeds (ajwain)",
          "2 cups water",
          "1 tsp jaggery (optional)",
        ],
        method:
          "Boil ajwain seeds in water for 10 minutes. Strain and drink warm. Add jaggery if desired for taste. Drink daily, preferably in the morning or after meals.",
        benefits:
          "Ajwain helps in digestion, reduces bloating, cleanses the uterus, and relieves post-delivery abdominal discomfort. It also boosts milk production.",
      },
      2: {
        title: "Gond Ke Ladoo",
        ingredients: [
          "1 cup edible gum (gond)",
          "1 cup wheat flour",
          "1/2 cup ghee",
          "1/2 cup jaggery",
          "Dry fruits (almonds, cashews, walnuts, etc.)",
        ],
        method:
          "Fry gond in ghee until it puffs up. Roast wheat flour in ghee till golden brown. Mix gond, roasted flour, jaggery, and crushed dry fruits. Shape into ladoos. Eat 1-2 ladoos daily.",
        benefits:
          "Gond ke ladoo give strength, improve lactation, lubricate joints, and help recover energy post-delivery. They also prevent back pain and weakness.",
      },
      3: {
        title: "Haldi Doodh with Ajwain",
        ingredients: [
          "1 cup warm milk",
          "1/2 tsp turmeric powder",
          "1/2 tsp ajwain powder",
          "1 tsp honey or jaggery",
        ],
        method:
          "Warm milk (do not boil). Add turmeric and ajwain powder. Stir well and sweeten with honey or jaggery. Drink warm before bedtime.",
        benefits:
          "This drink boosts immunity, reduces internal inflammation, relieves body ache, and helps in faster healing after delivery.",
      },
      4: {
        title: "Methi Ajwain Panjiri",
        ingredients: [
          "1 cup whole wheat flour",
          "1/2 cup ghee",
          "2 tbsp fenugreek seeds powder",
          "2 tbsp ajwain powder",
          "1/2 cup jaggery",
          "Dry fruits (optional)",
        ],
        method:
          "Roast wheat flour in ghee till aromatic. Add fenugreek and ajwain powders. Mix in jaggery and dry fruits. Stir well and cool. Store in airtight container. Consume 1-2 tbsp daily with warm milk.",
        benefits:
          "This traditional panjiri strengthens bones, improves lactation, cleanses the uterus, and provides warmth and stamina post-childbirth.",
      },
      5: {
        title: "Cumin Seeds Water (Jeera Pani)",
        ingredients: [
          "1 tbsp cumin seeds",
          "2 cups water",
          "Few fennel seeds (optional)",
        ],
        method:
          "Boil cumin seeds (and fennel if added) in water for 5-7 minutes. Strain and drink warm after meals.",
        benefits:
          "Jeera pani aids digestion, increases milk supply, reduces acidity, and helps manage postpartum weight naturally.",
      },
      6: {
        title: "Dry Ginger & Ajwain Kadha",
        ingredients: [
          "1 tsp dry ginger powder (sonth)",
          "1 tsp ajwain",
          "2 cups water",
          "1 tsp jaggery",
        ],
        method:
          "Boil dry ginger and ajwain in water for 10 minutes. Strain and add jaggery. Drink warm once a day.",
        benefits:
          "This kadha relieves gas, improves appetite, reduces post-delivery pains, and helps uterus shrink faster.",
      },
      7: {
        title: "Shatavari Milk",
        ingredients: [
          "1 tsp shatavari powder",
          "1 cup warm milk",
          "1 tsp honey",
        ],
        method:
          "Mix shatavari powder in warm milk. Add honey for taste. Drink once daily, preferably at night.",
        benefits:
          "Shatavari is an ayurvedic herb known to enhance lactation, balance hormones, strengthen reproductive system, and promote emotional well-being after delivery.",
      },
    },
    // Hair Care Remedies
    haircare: {
      1: {
        title: "Coconut Oil Massage",
        ingredients: [
          "3-4 tbsp virgin coconut oil",
          "Few drops of essential oil (optional)",
        ],
        method:
          "Warm coconut oil slightly. Add essential oil if desired. Section hair and apply oil from roots to tips. Massage scalp gently for 10-15 minutes. Leave for at least 2 hours or overnight. Wash with mild shampoo.",
        benefits:
          "Coconut oil penetrates hair shaft, reduces protein loss, prevents breakage, and adds shine. Regular massage improves blood circulation to scalp, promoting healthy hair growth and reducing dandruff.",
      },
      2: {
        title: "Fenugreek Hair Mask",
        ingredients: [
          "3 tbsp fenugreek seeds",
          "Water for soaking",
          "1 tbsp yogurt",
          "1 tsp honey",
        ],
        method:
          "Soak fenugreek seeds overnight. Grind to smooth paste. Mix with yogurt and honey. Apply from roots to tips. Cover with shower cap. Leave for 45 minutes to 1 hour. Rinse thoroughly with water, then shampoo.",
        benefits:
          "Fenugreek is rich in proteins and nicotinic acid that strengthen hair follicles, reduce hair fall, and promote growth. It also helps with dandruff and adds natural shine to hair.",
      },
      3: {
        title: "Onion Juice Treatment",
        ingredients: ["2-3 medium onions", "1 tbsp honey", "1 tsp coconut oil"],
        method:
          "Extract onion juice by grating and straining onions. Mix with honey and coconut oil. Apply to scalp and hair roots. Massage gently. Leave for 30-45 minutes. Wash with mild shampoo and conditioner to remove smell.",
        benefits:
          "Onion juice is rich in sulfur which improves blood circulation to hair follicles, promotes hair growth, and has antibacterial properties that help with scalp infections and dandruff.",
      },
      4: {
        title: "Egg Hair Mask",
        ingredients: [
          "2 whole eggs",
          "2 tbsp olive oil",
          "1 tbsp honey",
          "1 tbsp yogurt",
        ],
        method:
          "Beat eggs well. Add olive oil, honey, and yogurt. Mix thoroughly. Apply from roots to tips, focusing on damaged areas. Cover with shower cap. Leave for 30-45 minutes. Rinse with cool water, then shampoo.",
        benefits:
          "Eggs are rich in proteins that strengthen hair structure, biotin for growth, and lecithin for shine. This mask repairs damaged hair, reduces breakage, and improves overall hair health.",
      },
      5: {
        title: "Curry Leaves Oil",
        ingredients: [
          "2 cups fresh curry leaves",
          "1 cup coconut oil",
          "1 tbsp fenugreek seeds",
        ],
        method:
          "Heat coconut oil in a pan. Add curry leaves and fenugreek seeds. Cook on low heat until leaves turn black. Strain and cool. Massage into scalp and hair. Leave for 2-3 hours or overnight. Wash with shampoo.",
        benefits:
          "Curry leaves are rich in antioxidants, amino acids, and beta-carotene that prevent premature graying, strengthen hair roots, and promote healthy hair growth while adding natural shine.",
      },
      6: {
        title: "Hibiscus Hair Pack",
        ingredients: [
          "10-12 hibiscus flowers",
          "8-10 hibiscus leaves",
          "2 tbsp yogurt",
          "1 tbsp coconut oil",
        ],
        method:
          "Grind hibiscus flowers and leaves with little water to make paste. Mix with yogurt and coconut oil. Apply from roots to tips. Cover with shower cap. Leave for 1 hour. Rinse thoroughly and shampoo.",
        benefits:
          "Hibiscus is rich in amino acids, vitamin C, and antioxidants that condition hair naturally, prevent hair fall, promote growth, and add natural red highlights to hair.",
      },
      7: {
        title: "Rice Water Rinse",
        ingredients: [
          "1 cup rice",
          "2-3 cups water",
          "Few drops of essential oil (optional)",
        ],
        method:
          "Rinse rice and boil in water for 10-15 minutes. Strain rice water and let it cool. Add essential oil if desired. After shampooing, pour rice water over hair. Massage gently and leave for 5-10 minutes. Rinse with plain water.",
        benefits:
          "Rice water contains amino acids, vitamins B and E, and inositol that strengthen hair, improve elasticity, reduce surface friction, and add volume and shine to hair.",
      },
    },
    // Period Pain Relief
    periodpain: {
      1: {
        title: "Ginger Tea",
        ingredients: [
          "1 inch fresh ginger",
          "2 cups water",
          "1 tsp honey",
          "1 tsp lemon juice",
        ],
        method:
          "Grate fresh ginger and boil in water for 10 minutes. Strain the tea. Add honey and lemon juice. Drink warm 2-3 times daily during periods. Can be prepared in advance and stored in refrigerator.",
        benefits:
          "Ginger contains gingerol which has powerful anti-inflammatory properties that help reduce menstrual pain and cramps. It also helps with nausea and improves blood circulation.",
      },
      2: {
        title: "Hot Water Bottle",
        ingredients: [
          "Hot water bottle or heating pad",
          "Warm water",
          "Soft towel",
        ],
        method:
          "Fill hot water bottle with warm (not boiling) water. Wrap in a soft towel. Place on lower abdomen or lower back. Apply for 15-20 minutes at a time. Repeat as needed throughout the day.",
        benefits:
          "Heat therapy relaxes uterine muscles, improves blood flow, and reduces pain signals to the brain. It's a safe, natural way to manage menstrual cramps without medication.",
      },
      3: {
        title: "Fennel Seeds Water",
        ingredients: [
          "2 tsp fennel seeds",
          "2 cups water",
          "1 tsp honey (optional)",
        ],
        method:
          "Soak fennel seeds in water overnight. Strain in the morning and drink on empty stomach. Alternatively, boil fennel seeds in water for 5 minutes, strain, add honey if desired, and drink warm.",
        benefits:
          "Fennel seeds have antispasmodic properties that help relax uterine muscles, reduce cramping, and alleviate bloating. They also help regulate menstrual cycles naturally.",
      },
      4: {
        title: "Cinnamon Tea",
        ingredients: [
          "1 cinnamon stick or 1 tsp powder",
          "2 cups water",
          "1 tsp honey",
          "Few mint leaves",
        ],
        method:
          "Boil water with cinnamon stick for 10 minutes or add cinnamon powder to hot water. Strain if using stick. Add honey and mint leaves. Drink warm 2-3 times daily during periods.",
        benefits:
          "Cinnamon has anti-inflammatory and antispasmodic properties that help reduce menstrual pain, regulate periods, and improve blood circulation. It also helps with heavy bleeding.",
      },
      5: {
        title: "Turmeric Milk",
        ingredients: [
          "1 cup warm milk",
          "1/2 tsp turmeric powder",
          "1 tsp honey",
          "Pinch of black pepper",
        ],
        method:
          "Heat milk (don't boil). Add turmeric powder and black pepper. Stir well. Add honey when slightly cooled. Drink warm before bedtime during periods. Can be taken daily for better results.",
        benefits:
          "Turmeric contains curcumin which has powerful anti-inflammatory properties that help reduce menstrual pain and regulate periods. Black pepper enhances curcumin absorption.",
      },
      6: {
        title: "Sesame Oil Massage",
        ingredients: [
          "2-3 tbsp sesame oil",
          "Few drops of lavender oil (optional)",
        ],
        method:
          "Warm sesame oil slightly. Add lavender oil if desired. Massage gently on lower abdomen and lower back in circular motions for 10-15 minutes. Apply twice daily during periods for best results.",
        benefits:
          "Sesame oil has warming properties that help relax muscles and improve circulation. The massage helps reduce tension and provides natural pain relief from menstrual cramps.",
      },
      7: {
        title: "Jaggery and Ginger",
        ingredients: [
          "2 tbsp jaggery",
          "1 tsp ginger powder",
          "1 cup warm water or milk",
        ],
        method:
          "Mix jaggery and ginger powder in warm water or milk. Stir until jaggery dissolves completely. Drink warm once daily during periods. Can be taken a few days before periods start.",
        benefits:
          "Jaggery is rich in iron and helps prevent anemia during periods. Ginger reduces pain and inflammation. Together they provide energy and help manage period symptoms naturally.",
      },
    },
    // Pregnancy Care
    pregnancy: {
      1: {
        title: "Ginger for Morning Sickness",
        ingredients: [
          "1 inch fresh ginger",
          "1 cup hot water",
          "1 tsp honey",
          "Lemon slice",
        ],
        method:
          "Grate fresh ginger and steep in hot water for 5-10 minutes. Strain and add honey and lemon. Drink warm on empty stomach. Can also chew small pieces of fresh ginger throughout the day.",
        benefits:
          "Ginger is safe during pregnancy and effectively reduces nausea and vomiting. It helps settle the stomach and improves digestion without harmful side effects.",
      },
      2: {
        title: "Coconut Water",
        ingredients: [
          "Fresh tender coconut water",
          "Pinch of rock salt (optional)",
        ],
        method:
          "Drink fresh coconut water directly from tender coconut. Can add a pinch of rock salt for better electrolyte balance. Consume 1-2 glasses daily, preferably in morning or between meals.",
        benefits:
          "Coconut water provides natural electrolytes, prevents dehydration, reduces acidity, and provides essential minerals like potassium and magnesium needed during pregnancy.",
      },
      3: {
        title: "Dates and Almonds",
        ingredients: ["5-6 dates", "8-10 almonds", "1 glass warm milk"],
        method:
          "Soak almonds overnight and peel. Soak dates in warm water for 30 minutes. Blend dates, almonds, and milk together. Drink fresh daily, preferably in morning or as evening snack.",
        benefits:
          "Dates provide natural energy, fiber, and folate. Almonds are rich in protein, healthy fats, and vitamin E. Together they support healthy pregnancy and fetal development.",
      },
      4: {
        title: "Folic Acid Rich Foods",
        ingredients: [
          "Spinach, kale, broccoli",
          "Lentils and beans",
          "Citrus fruits",
          "Fortified cereals",
        ],
        method:
          "Include variety of green leafy vegetables in daily meals. Prepare lentil soups and salads. Eat fresh citrus fruits. Choose fortified cereals for breakfast. Aim for colorful, nutrient-rich meals.",
        benefits:
          "Folic acid prevents neural tube defects in babies, supports DNA synthesis, and prevents anemia in mothers. Essential for healthy fetal brain and spinal cord development.",
      },
      5: {
        title: "Warm Milk with Saffron",
        ingredients: [
          "1 cup warm milk",
          "4-5 saffron strands",
          "1 tsp honey",
          "2-3 almonds (chopped)",
        ],
        method:
          "Soak saffron in 2 tbsp warm milk for 10 minutes. Heat remaining milk, add saffron mixture. Add honey and chopped almonds. Drink warm before bedtime. Limit to 2-3 times per week.",
        benefits:
          "Saffron in moderation may help improve mood, aid digestion, and is believed to contribute to baby's complexion. Milk provides calcium and protein essential for pregnancy.",
      },
      6: {
        title: "Gentle Yoga",
        ingredients: [
          "Yoga mat",
          "Comfortable clothing",
          "Prenatal yoga guide or instructor",
        ],
        method:
          "Practice gentle prenatal yoga poses like cat-cow, child's pose, and gentle twists. Focus on breathing exercises. Avoid lying on back after first trimester. Practice 20-30 minutes daily with proper guidance.",
        benefits:
          "Gentle yoga improves flexibility, reduces back pain, helps with sleep, reduces stress, and prepares body for labor. Always consult doctor before starting any exercise routine.",
      },
      7: {
        title: "Pomegranate Juice",
        ingredients: [
          "1 fresh pomegranate",
          "1 tsp honey (optional)",
          "Pinch of black salt",
        ],
        method:
          "Extract fresh pomegranate juice or blend seeds and strain. Add honey if desired and pinch of black salt. Drink fresh daily, preferably in morning. Avoid store-bought juices with added sugars.",
        benefits:
          "Pomegranate is rich in iron, folate, and antioxidants. It helps prevent anemia, supports immune system, and provides essential nutrients for healthy pregnancy and fetal development.",
      },
    },
    // Beauty Hacks
    beauty: {
      1: {
        title: "Coffee Scrub",
        ingredients: [
          "3 tbsp ground coffee",
          "2 tbsp coconut oil",
          "1 tbsp brown sugar",
          "1 tsp vanilla extract",
        ],
        method:
          "Mix all ingredients to form a paste. Apply on damp skin in circular motions, focusing on rough areas like elbows and knees. Scrub gently for 5-10 minutes. Rinse with warm water. Use 2-3 times per week.",
        benefits:
          "Coffee grounds exfoliate dead skin cells, improve circulation, and may help reduce appearance of cellulite. Coconut oil moisturizes while brown sugar provides additional exfoliation.",
      },
      2: {
        title: "Green Tea Ice Cubes",
        ingredients: ["2 green tea bags", "2 cups water", "Ice cube tray"],
        method:
          "Brew strong green tea and let it cool completely. Pour into ice cube trays and freeze. Wrap ice cube in soft cloth and gently massage face for 2-3 minutes. Use daily for best results.",
        benefits:
          "Green tea contains antioxidants that fight free radicals, reduce inflammation, and tighten pores. The cold temperature reduces puffiness and improves blood circulation for glowing skin.",
      },
      3: {
        title: "Papaya Face Pack",
        ingredients: [
          "1/2 ripe papaya",
          "1 tbsp honey",
          "1 tsp lemon juice",
          "1 tbsp oatmeal powder",
        ],
        method:
          "Mash papaya into smooth pulp. Mix with honey, lemon juice, and oatmeal powder. Apply evenly on clean face. Leave for 20-25 minutes. Rinse with lukewarm water. Use once a week.",
        benefits:
          "Papaya contains papain enzyme that naturally exfoliates skin, removes dead cells, and brightens complexion. It also has anti-aging properties and helps with acne-prone skin.",
      },
      4: {
        title: "Beetroot Lip Stain",
        ingredients: ["1 small beetroot", "1 tsp coconut oil", "1 tsp honey"],
        method:
          "Grate beetroot and extract juice. Mix with coconut oil and honey. Apply on lips and leave for 15-20 minutes. Gently wipe off excess. The natural color will remain. Reapply as needed.",
        benefits:
          "Beetroot provides natural pink/red color to lips while coconut oil and honey moisturize and nourish. It's a chemical-free alternative to commercial lip tints.",
      },
      5: {
        title: "Oatmeal Face Mask",
        ingredients: [
          "3 tbsp oatmeal",
          "2 tbsp milk",
          "1 tbsp honey",
          "1 tsp rose water",
        ],
        method:
          "Grind oatmeal to fine powder. Mix with milk, honey, and rose water to form paste. Apply on clean face, avoiding eye area. Leave for 15-20 minutes. Rinse with lukewarm water while gently scrubbing.",
        benefits:
          "Oatmeal gently exfoliates and absorbs excess oil, making it perfect for sensitive skin. It soothes irritation, reduces inflammation, and provides natural moisturizing properties.",
      },
      6: {
        title: "Tomato Toner",
        ingredients: [
          "1 ripe tomato",
          "1 tsp lemon juice",
          "1 tsp rose water",
          "Cotton pads",
        ],
        method:
          "Blend tomato and strain juice. Mix with lemon juice and rose water. Store in refrigerator. Apply with cotton pad on clean face twice daily. Use within 3-4 days for freshness.",
        benefits:
          "Tomatoes contain lycopene and natural acids that help control oil production, minimize pores, and brighten skin. It's especially beneficial for oily and acne-prone skin.",
      },
      7: {
        title: "Banana Hair Mask",
        ingredients: [
          "2 ripe bananas",
          "2 tbsp honey",
          "1 tbsp olive oil",
          "1 tbsp yogurt",
        ],
        method:
          "Mash bananas until smooth. Mix with honey, olive oil, and yogurt. Apply from roots to tips, focusing on dry ends. Cover with shower cap. Leave for 45 minutes to 1 hour. Rinse thoroughly and shampoo.",
        benefits:
          "Bananas are rich in potassium, vitamins, and natural oils that deeply condition hair, reduce frizz, and add shine. This mask is especially beneficial for dry and damaged hair.",
      },
    },
    mentalwellness: {
      1: {
        title: "Meditation",
        ingredients: [
          "Quiet space",
          "Comfortable seating",
          "5-10 minutes daily practice",
        ],
        method:
          "Find a quiet place and sit comfortably. Close your eyes and focus on your breathing. Let thoughts pass without judgment. Start with 5-10 minutes daily and gradually increase.",
        benefits:
          "Reduces stress, improves focus and emotional stability, enhances self-awareness.",
      },
      2: {
        title: "Herbal Tea",
        ingredients: [
          "Chamomile or green tea leaves",
          "Hot water",
          "Honey (optional)",
        ],
        method:
          "Steep chamomile or green tea leaves in hot water for 5-10 minutes. Add honey if desired. Drink 1-2 cups daily.",
        benefits:
          "Helps relax the mind, improves sleep quality, reduces anxiety.",
      },
      3: {
        title: "Journaling",
        ingredients: [
          "Notebook or diary",
          "Pen or pencil",
          "10-15 minutes daily",
        ],
        method:
          "Write your thoughts, feelings, or things you are grateful for daily. Express yourself honestly without judgment.",
        benefits:
          "Helps manage emotions, reduces stress, boosts self-reflection and clarity.",
      },
      4: {
        title: "Breathing Exercises",
        ingredients: [
          "Quiet space",
          "Comfortable posture",
          "5-10 minutes daily",
        ],
        method:
          "Practice deep breathing techniques such as 4-7-8 breathing or alternate nostril breathing. Focus on slow, deep inhalation and exhalation.",
        benefits:
          "Reduces anxiety, improves oxygen flow, calms the nervous system.",
      },
      5: {
        title: "Physical Activity",
        ingredients: [
          "Yoga mat or comfortable clothes",
          "10-30 minutes daily",
          "Light exercise, walking, or yoga",
        ],
        method:
          "Engage in regular physical activity like walking, stretching, yoga, or light workouts to boost mood and mental health.",
        benefits:
          "Releases endorphins, reduces symptoms of depression, improves energy levels.",
      },
      6: {
        title: "Listening to Music",
        ingredients: [
          "Favorite calming music",
          "Headphones or speakers",
          "10-20 minutes",
        ],
        method:
          "Play soothing music or nature sounds. Focus on the melody and let your mind relax. Practice daily or when stressed.",
        benefits: "Lowers stress hormones, improves mood, enhances focus.",
      },
      7: {
        title: "Social Connection",
        ingredients: [
          "Friends or family",
          "Phone or in-person meetings",
          "Regular communication",
        ],
        method:
          "Spend quality time with loved ones. Share your thoughts and maintain positive social interactions.",
        benefits:
          "Reduces loneliness, boosts happiness, provides emotional support.",
      },
    },
  },
  hi: {
    // Skin Care Remedies in Hindi
    skincare: {
      1: {
        title: "हल्दी का फेस मास्क",
        ingredients: [
          "1 चम्मच हल्दी पाउडर",
          "2 बड़े चम्मच दही",
          "1 चम्मच शहद",
          "नींबू के रस की कुछ बूंदें",
        ],
        method:
          "सभी सामग्री को मिलाकर एक चिकना पेस्ट बनाएं। साफ चेहरे पर समान रूप से लगाएं, आंखों के आसपास न लगाएं। 15-20 मिनट तक सूखने दें। गुनगुने पानी से धोएं और सुखाएं। सप्ताह में 2-3 बार उपयोग करें।",
        benefits:
          "हल्दी में शक्तिशाली सूजन रोधी और जीवाणु रोधी गुण होते हैं जो मुंहासों को कम करने, त्वचा की रंगत निखारने और प्राकृतिक चमक देने में मदद करते हैं। दही में लैक्टिक एसिड होता है जो कोमलता से एक्सफोलिएट करता है, जबकि शहद नमी प्रदान करता है।",
      },
      2: {
        title: "गुलाब जल टोनर",
        ingredients: ["ताजी गुलाब की पंखुड़ियां", "आसुत जल", "साफ स्प्रे बोतल"],
        method:
          "2 कप आसुत जल उबालें। एक मुट्ठी ताजी गुलाब की पंखुड़ियां डालें और 10-15 मिनट तक उबालें। छानकर ठंडा करें। स्प्रे बोतल में भरकर फ्रिज में रखें। सफाई के बाद दिन में दो बार उपयोग करें।",
        benefits:
          "गुलाब जल त्वचा का pH संतुलन बनाए रखता है, लालिमा और जलन कम करता है, नमी प्रदान करता है, और एंटी-एजिंग गुण रखता है। यह सभी प्रकार की त्वचा के लिए उपयुक्त है।",
      },
      3: {
        title: "शहद नींबू स्क्रब",
        ingredients: [
          "2 बड़े चम्मच कच्चा शहद",
          "1 बड़ा चम्मच ताजा नींबू का रस",
          "1 बड़ा चम्मच चीनी",
          "1 चम्मच जैतून का तेल",
        ],
        method:
          "शहद और नींबू का रस अच्छी तरह मिलाएं। चीनी और जैतून का तेल मिलाकर स्क्रब बनाएं। नम त्वचा पर गोलाकार गति में 2-3 मिनट तक कोमलता से मसाज करें। गर्म पानी से धोएं। सप्ताह में एक बार उपयोग करें।",
        benefits:
          "शहद एक प्राकृतिक ह्यूमेक्टेंट है जो नमी प्रदान करता है और जीवाणु रोधी गुण रखता है। नींबू त्वचा को निखारता है और विटामिन सी देता है, जबकि चीनी मृत कोशिकाओं को हटाने का काम करती है।",
      },
      4: {
        title: "खीरे का आई मास्क",
        ingredients: [
          "1 ताजा खीरा",
          "2 बड़े चम्मच एलोवेरा जेल",
          "1 चम्मच गुलाब जल",
        ],
        method:
          "खीरे को कद्दूकस करके रस निकालें। एलोवेरा जेल और गुलाब जल के साथ मिलाएं। कॉटन पैड को मिश्रण में भिगोकर बंद आंखों पर रखें। 15-20 मिनट आराम करें। ठंडे पानी से धोएं।",
        benefits:
          "खीरे में ठंडक देने वाले और सूजन रोधी गुण होते हैं जो सूजन और काले घेरे कम करते हैं। इसमें एंटीऑक्सीडेंट और सिलिका होता है जो आंखों के नाजुक क्षेत्र की त्वचा को फिर से जीवंत बनाता है।",
      },
      5: {
        title: "बेसन का पैक",
        ingredients: [
          "3 बड़े चम्मच बेसन",
          "1 बड़ा चम्मच दही",
          "1 चम्मच हल्दी",
          "आवश्यकतानुसार गुलाब जल",
        ],
        method:
          "बेसन, दही और हल्दी मिलाएं। धीरे-धीरे गुलाब जल मिलाकर चिकना पेस्ट बनाएं। चेहरे और गर्दन पर समान रूप से लगाएं। 20-25 मिनट सूखने दें। पानी से धोते समय कोमलता से रगड़ें।",
        benefits:
          "बेसन छिद्रों की गहरी सफाई करता है, अतिरिक्त तेल हटाता है, और प्राकृतिक एक्सफोलिएंट का काम करता है। यह टैन हटाने, रंगत निखारने में मदद करता है और तैलीय त्वचा के लिए विशेष रूप से फायदेमंद है।",
      },
      6: {
        title: "एलोवेरा जेल",
        ingredients: ["ताजा एलोवेरा पत्ता", "1 चम्मच विटामिन ई तेल (वैकल्पिक)"],
        method:
          "एलोवेरा पत्ता काटकर ताजा जेल निकालें। चिकना होने तक ब्लेंड करें। चाहें तो विटामिन ई तेल मिलाएं। साफ त्वचा पर सीधे लगाएं। रात भर या 30 मिनट के लिए छोड़ें। आवश्यक हो तो धोएं।",
        benefits:
          "एलोवेरा जलन वाली त्वचा को शांत करता है, गहरी नमी प्रदान करता है, सूजन रोधी गुण रखता है, और छोटी चोटों को ठीक करने में मदद करता है। यह सभी प्रकार की त्वचा के लिए उपयुक्त है।",
      },
      7: {
        title: "दूध की मलाई मॉइस्चराइजर",
        ingredients: [
          "2 बड़े चम्मच ताजी दूध की मलाई",
          "1 चम्मच शहद",
          "गुलाब जल की कुछ बूंदें",
        ],
        method:
          "दूध की मलाई को फेंटकर फूला बनाएं। शहद और गुलाब जल मिलाएं। साफ चेहरे और गर्दन पर लगाएं। 2-3 मिनट कोमलता से मसाज करें। 20 मिनट छोड़कर गुनगुने पानी से धोएं।",
        benefits:
          "दूध की मलाई में लैक्टिक एसिड और वसा होती है जो सूखी त्वचा को गहरी नमी देती है। यह त्वचा की बनावट सुधारती है, प्राकृतिक चमक देती है, और प्रोटीन व विटामिन के कारण एंटी-एजिंग गुण रखती है।",
      },
    },
    postpartum: {
      1: {
        title: "अजवाइन का पानी",
        ingredients: [
          "2 बड़े चम्मच अजवाइन के बीज",
          "2 कप पानी",
          "1 चम्मच गुड़ (वैकल्पिक)",
        ],
        method:
          "अजवाइन को पानी में 10 मिनट तक उबालें। छानकर गुनगुना पिएं। स्वाद के लिए गुड़ मिला सकते हैं। इसे रोजाना सुबह या खाने के बाद पिएं।",
        benefits:
          "अजवाइन पाचन सुधारती है, पेट की गैस और सूजन कम करती है, गर्भाशय को साफ करने में मदद करती है और दूध की मात्रा बढ़ाती है।",
      },
      2: {
        title: "गोंद के लड्डू",
        ingredients: [
          "1 कप खाने योग्य गोंद",
          "1 कप गेहूं का आटा",
          "1/2 कप घी",
          "1/2 कप गुड़",
          "सूखे मेवे (बादाम, काजू, अखरोट)",
        ],
        method:
          "घी में गोंद तलकर फुला लें। फिर आटे को घी में सुनहरा होने तक भूनें। इसमें गोंद, गुड़ और कटे हुए मेवे मिलाकर लड्डू बना लें। रोज 1-2 लड्डू खाएं।",
        benefits:
          "गोंद के लड्डू शरीर को ताकत देते हैं, दूध बढ़ाते हैं, हड्डियों और जोड़ों को मजबूत करते हैं और कमर दर्द से बचाते हैं।",
      },
      3: {
        title: "हल्दी-दूध अजवाइन के साथ",
        ingredients: [
          "1 कप गुनगुना दूध",
          "1/2 चम्मच हल्दी",
          "1/2 चम्मच अजवाइन पाउडर",
          "1 चम्मच शहद या गुड़",
        ],
        method:
          "गुनगुने दूध में हल्दी और अजवाइन पाउडर डालें। अच्छे से मिलाकर शहद या गुड़ डालें। रात को सोने से पहले पिएं।",
        benefits:
          "यह दूध रोग प्रतिरोधक क्षमता बढ़ाता है, सूजन और दर्द कम करता है, और शरीर को जल्दी ठीक करने में मदद करता है।",
      },
      4: {
        title: "मेथी-अजवाइन पंजीरी",
        ingredients: [
          "1 कप गेहूं का आटा",
          "1/2 कप घी",
          "2 बड़े चम्मच मेथी पाउडर",
          "2 बड़े चम्मच अजवाइन पाउडर",
          "1/2 कप गुड़",
          "सूखे मेवे (वैकल्पिक)",
        ],
        method:
          "घी में आटा भूनें। फिर मेथी और अजवाइन पाउडर डालें। इसमें गुड़ और मेवे डालकर अच्छी तरह मिलाएं। ठंडा होने पर डिब्बे में भर लें। रोज 1-2 चम्मच दूध के साथ खाएं।",
        benefits:
          "यह पंजीरी हड्डियों और शरीर को मजबूत करती है, दूध की मात्रा बढ़ाती है और गर्भाशय को साफ करके गर्माहट देती है।",
      },
      5: {
        title: "जीरे का पानी",
        ingredients: [
          "1 बड़ा चम्मच जीरा",
          "2 कप पानी",
          "1 चम्मच सौंफ (वैकल्पिक)",
        ],
        method:
          "पानी में जीरा और सौंफ डालकर 5-7 मिनट उबालें। छानकर गुनगुना पिएं।",
        benefits:
          "जीरा पानी पाचन सुधारता है, दूध की मात्रा बढ़ाता है, गैस और एसिडिटी कम करता है और वजन घटाने में भी मदद करता है।",
      },
      6: {
        title: "सोंठ-अजवाइन का काढ़ा",
        ingredients: [
          "1 चम्मच सूखी अदरक (सोंठ) पाउडर",
          "1 चम्मच अजवाइन",
          "2 कप पानी",
          "1 चम्मच गुड़",
        ],
        method:
          "पानी में सोंठ और अजवाइन डालकर 10 मिनट उबालें। छानकर गुड़ मिलाएं और गुनगुना पिएं।",
        benefits:
          "यह काढ़ा गैस कम करता है, भूख बढ़ाता है, प्रसव के बाद होने वाले दर्द को कम करता है और गर्भाशय को सिकुड़ने में मदद करता है।",
      },
      7: {
        title: "शतावरी दूध",
        ingredients: [
          "1 चम्मच शतावरी पाउडर",
          "1 कप गुनगुना दूध",
          "1 चम्मच शहद",
        ],
        method:
          "गुनगुने दूध में शतावरी पाउडर डालें। शहद मिलाकर अच्छे से घोलें। रोजाना रात को पिएं।",
        benefits:
          "शतावरी हार्मोन संतुलित करती है, दूध की मात्रा बढ़ाती है, शरीर को ताकत देती है और मानसिक स्वास्थ्य को भी सुधारती है।",
      },
    },
    mentalwellness: {
      1: {
        title: "ध्यान",
        ingredients: [
          "शांत जगह",
          "आरामदायक बैठने की व्यवस्था",
          "दिन में 5-10 मिनट अभ्यास",
        ],
        method:
          "एक शांत जगह पर बैठें और आरामदायक मुद्रा में बैठें। आँखें बंद करें और अपनी साँस पर ध्यान दें। विचारों को बिना निर्णय के गुजरने दें। धीरे-धीरे समय बढ़ाएं।",
        benefits:
          "तनाव कम करता है, ध्यान केंद्रित करने में मदद करता है, भावनात्मक स्थिरता और आत्म-जागरूकता बढ़ाता है।",
      },
      2: {
        title: "हर्बल चाय",
        ingredients: [
          "कैमोमाइल या ग्रीन टी के पत्ते",
          "गर्म पानी",
          "शहद (वैकल्पिक)",
        ],
        method:
          "कैमोमाइल या ग्रीन टी के पत्तों को 5-10 मिनट तक गर्म पानी में भिगोएँ। स्वाद के लिए शहद डाल सकते हैं। दिन में 1-2 कप पिएं।",
        benefits:
          "मन को शांत करती है, नींद में सुधार करती है, चिंता कम करती है।",
      },
      3: {
        title: "जर्नलिंग",
        ingredients: ["नोटबुक या डायरी", "कलम या पेंसिल", "दिन में 10-15 मिनट"],
        method:
          "अपने विचार, भावनाएँ या आभार को रोज़ लिखें। बिना किसी निर्णय के ईमानदारी से व्यक्त करें।",
        benefits:
          "भावनाओं को नियंत्रित करने में मदद करता है, तनाव कम करता है, आत्म-विश्लेषण और स्पष्टता बढ़ाता है।",
      },
      4: {
        title: "श्वास अभ्यास",
        ingredients: ["शांत जगह", "आरामदायक मुद्रा", "दिन में 5-10 मिनट"],
        method:
          "गहरी साँस लेने की तकनीक का अभ्यास करें जैसे 4-7-8 या ब alternate nostril breathing। धीरे-धीरे साँस लें और छोड़ें।",
        benefits:
          "चिंता कम करता है, ऑक्सीजन का प्रवाह बढ़ाता है, तंत्रिका तंत्र को शांत करता है।",
      },
      5: {
        title: "शारीरिक गतिविधि",
        ingredients: [
          "योग मैट या आरामदायक कपड़े",
          "10-30 मिनट प्रतिदिन",
          "हल्का व्यायाम, योग या चलना",
        ],
        method:
          "नियमित शारीरिक गतिविधि जैसे चलना, स्ट्रेचिंग, योग या हल्की कसरत करें जिससे मूड और मानसिक स्वास्थ्य बेहतर हो।",
        benefits:
          "एंडोर्फिन रिलीज करता है, अवसाद के लक्षण कम करता है, ऊर्जा स्तर बढ़ाता है।",
      },
      6: {
        title: "संगीत सुनना",
        ingredients: ["पसंदीदा शांत संगीत", "हेडफोन या स्पीकर", "10-20 मिनट"],
        method:
          "शांत संगीत या प्रकृति की आवाजें सुनें। धुन पर ध्यान दें और मन को आराम दें। रोज़ाना या तनाव में करें।",
        benefits:
          "तनाव हार्मोन को कम करता है, मूड सुधारता है, ध्यान केंद्रित करने में मदद करता है।",
      },
      7: {
        title: "सामाजिक संपर्क",
        ingredients: [
          "मित्र या परिवार",
          "फोन या व्यक्तिगत मुलाकातें",
          "नियमित संवाद",
        ],
        method:
          "प्रियजनों के साथ गुणवत्तापूर्ण समय बिताएँ। अपने विचार साझा करें और सकारात्मक सामाजिक संपर्क बनाए रखें।",
        benefits:
          "अकेलेपन को कम करता है, खुशी बढ़ाता है, भावनात्मक समर्थन प्रदान करता है।",
      },
    },
    // Add other categories in Hindi similarly...
  },
};

// Current language
let currentLanguage = "en";

// DOM elements
const langToggle = document.getElementById("langToggle");
const modal = document.getElementById("remedyModal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.querySelector(".close-btn");

// Language toggle functionality
langToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "hi" : "en";
  updateLanguage();
});

// Update language function
function updateLanguage() {
  const elements = document.querySelectorAll("[data-en]");
  elements.forEach((element) => {
    const key = currentLanguage === "en" ? "data-en" : "data-hi";
    element.textContent = element.getAttribute(key);
  });

  // Update language toggle button
  langToggle.querySelector(".lang-text").textContent =
    currentLanguage === "en" ? "हिंदी" : "English";
}

// Card click functionality
document.addEventListener("DOMContentLoaded", () => {
  const remedyCards = document.querySelectorAll(".remedy-card");

  remedyCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");
      const id = card.getAttribute("data-id");
      showRemedyDetails(category, id);
    });
  });

  // Navigation buttons functionality
  const sections = document.querySelectorAll(".remedy-section");
  sections.forEach((section) => {
    const prevBtn = section.querySelector(".prev-btn");
    const nextBtn = section.querySelector(".next-btn");
    const wrapper = section.querySelector(".cards-wrapper");

    prevBtn.addEventListener("click", () => {
      wrapper.scrollBy({ left: -320, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      wrapper.scrollBy({ left: 320, behavior: "smooth" });
    });
  });
});

// Show remedy details in modal
function showRemedyDetails(category, id) {
  const remedy = languageData[currentLanguage][category][id];
  if (!remedy) return;

  modalTitle.textContent = remedy.title;

  const ingredientsTitle =
    currentLanguage === "en" ? "Ingredients:" : "सामग्री:";
  const methodTitle = currentLanguage === "en" ? "Method:" : "विधि:";
  const benefitsTitle = currentLanguage === "en" ? "Benefits:" : "लाभ:";

  modalContent.innerHTML = `
        <div class="ingredients">
            <h3>${ingredientsTitle}</h3>
            <ul>
                ${remedy.ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join("")}
            </ul>
        </div>
        <div class="method">
            <h3>${methodTitle}</h3>
            <p>${remedy.method}</p>
        </div>
        <div class="benefits">
            <h3>${benefitsTitle}</h3>
            <p>${remedy.benefits}</p>
        </div>
    `;

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Close modal functionality
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Initialize page
updateLanguage();
