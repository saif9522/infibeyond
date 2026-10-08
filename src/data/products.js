/*
 * Product catalog: General Merchandise only.
 * price:     selling price in USD (null = "Price on request")
 * compareAt: original price when the item is on sale
 * stock:     units in stock (0 = out of stock, null = sold in options)
 * Photos live in /public/images and are named after the product (lowercase-with-hyphens).
 */
export const CATEGORY = "General Merchandise";
const RAW_PRODUCTS = [
 {id:"gm001",n:"Krazy Glue All Purpose",sku:"70158112054",price:9.00,stock:2,sub:"Household & Cleaning",art:"glue",brand:"Krazy Glue",pack:"Display card",d:"Instant-bond all-purpose super glue in single-use tubes. Bonds metal, ceramic, rubber, wood and most plastics in seconds."},
 {id:"gm002",n:"Toy Small Spinner",sku:"",price:72.00,stock:14,sub:"Toys & Novelties",art:"ball",c:"#4CC9F0",pack:"Counter display (24 pcs)",d:"Soda-press gyro spinner balls in four assorted colors, packed in a ready-to-sell counter display."},
 {id:"gm003",n:"Blazing Buddies Display",sku:"",price:356.00,stock:0,sub:"Displays & Fixtures",art:"rack",c:"#2A9D8F",pack:"Floor display",d:"Pre-loaded floor-standing merchandiser that turns unused floor space into an impulse-buy point."},
 {id:"gm004",n:"Special Blue Mini Dispenser",sku:"811490707283",price:21.00,stock:318,sub:"Kitchen & Dispensers",art:"dispenser",c:"#3A0CA3",brand:"Special Blue",pack:"Each, boxed",d:"Compact aluminium cream whipper for cafés and home kitchens. Screw-on head with decorating nozzle."},
 {id:"gm005",n:"Special Blue Tall Dispenser",sku:"",price:22.00,stock:190,sub:"Kitchen & Dispensers",art:"dispenser",c:"#1D3557",brand:"Special Blue",pack:"Each, boxed",d:"Full-size aluminium cream whipper with a taller canister for higher-volume use."},
 {id:"gm006",n:"Glass Cleaner 420 Glass Cleaner 12 FL OZ",sku:"",price:84.00,stock:0,sub:"Household & Cleaning",art:"bottle",c:"#E63946",brand:"Formula 420",pack:"12 fl oz bottles, case",d:"Concentrated glass and ceramic cleaner that lifts resin and residue without scrubbing."},
 {id:"gm007",n:"Orange Chronic",sku:"",price:60.00,stock:22,sub:"Household & Cleaning",art:"bottle",c:"#F77F00",pack:"Bottles, case",d:"Citrus-based cleaner for glass, metal and ceramic pieces. Fast rinse, fresh orange scent."},
 {id:"gm008",n:"Nova Black",sku:"787571933532",price:120.00,stock:4,sub:"Electronics & Charging",art:"pen",c:"#222222",brand:"Nova",pack:"Display box",d:"Slim rechargeable battery pen with USB charger. Age-restricted item, 21+ only.",age:true},
 {id:"gm009",n:"Sanitizer Hand Sanitizer 2oz",sku:"",price:3.00,stock:0,sub:"Health & Personal Care",art:"pump",c:"#0077B6",brand:"Purell",pack:"2 oz bottle",d:"Pocket-size advanced hand sanitizer gel, ideal for checkout counters and travel."},
 {id:"gm011",n:"Formula 420",sku:"",price:72.00,stock:0,sub:"Household & Cleaning",art:"bottle",c:"#D62839",brand:"Formula 420",pack:"Bottles, case",d:"The original concentrated cleaner for glass, metal and ceramic. Reusable formula."},
 {id:"gm012",n:"Smart Fill Gas Can",sku:"",price:52.80,stock:3,sub:"Automotive Care",art:"gascan",c:"#C1121F",pack:"Each",d:"Spill-proof fuel container with auto-stop smart-fill spout and easy-grip handle."},
 {id:"gm013",n:"STP Octane Booster",sku:"10071153785745",price:36.23,stock:3,sub:"Automotive Care",art:"auto",c:"#F77F00",brand:"STP",pack:"Bottles, case",d:"Raises octane to help reduce engine knock and restore lost performance."},
 {id:"gm014",n:"STP Super Concentrated Fuel Cleaner",sku:"10071153785752",price:24.93,stock:5,sub:"Automotive Care",art:"auto",c:"#111111",brand:"STP",pack:"Bottles, case",d:"Concentrated fuel system cleaner that removes deposits from injectors, valves and combustion chambers."},
 {id:"gm015",n:"STP High Mileage Power Steering Fluid + Stop Leak",sku:"",price:11.20,stock:2,sub:"Automotive Care",art:"auto",c:"#6C757D",brand:"STP",pack:"Bottle",d:"Power steering fluid with stop-leak conditioners for higher-mileage vehicles."},
 {id:"gm016",n:"STP Power Steering Fluid",sku:"10071153186672",price:8.86,stock:5,sub:"Automotive Care",art:"auto",c:"#495057",brand:"STP",pack:"Bottle",d:"Protects power steering systems against wear and helps reduce pump noise."},
 {id:"gm017",n:"STP Brake Fluid",sku:"10071153186696",price:12.94,stock:3,sub:"Automotive Care",art:"jug",c:"#1D3557",brand:"STP",pack:"Bottle",d:"Heavy-duty brake fluid for disc and drum brake systems."},
 {id:"gm018",n:"STP Complete Fuel System Cleaner",sku:"10071153785684",price:50.47,stock:5,sub:"Automotive Care",art:"auto",c:"#ADB5BD",brand:"STP",pack:"Bottles, case",d:"Cleans the entire fuel system in one treatment for smoother running and better mileage."},
 {id:"gm019",n:"STP Gas Treatment",sku:"10071153786094",price:4.13,stock:3,sub:"Automotive Care",art:"auto",c:"#E63946",brand:"STP",pack:"Bottle",d:"Removes water from fuel and cleans the fuel system to help prevent rough idling."},
 {id:"gm020",n:"STP Super Concentrated Fuel Injector Cleaner",sku:"10071153184029",price:4.10,stock:5,sub:"Automotive Care",art:"auto",c:"#212529",brand:"STP",pack:"Bottle",d:"Concentrated injector cleaner that restores spray pattern and throttle response."},
 {id:"gm022",n:"Socks Wow Sox 60 Count",sku:"",price:96.00,stock:3,sub:"Apparel & Accessories",art:"socks",c:"#7209B7",pack:"60-pair spinner display",d:"Assorted fun-print crew socks on a rotating counter tree. 60 pairs per display."},
 {id:"gm023",n:"5 Hour Energy Extra Strength",sku:"719410749122",price:15.00,compareAt:23.99,stock:null,sub:"Energy & Beverages",art:"shot",c:"#C1121F",brand:"5-hour Energy",pack:"Display box, flavors vary",d:"Extra-strength energy shots in a counter display. Choose flavor at checkout notes."},
 {id:"gm024",n:"Palm Battery",sku:"",price:11.00,compareAt:11.50,stock:null,sub:"Electronics & Charging",art:"battery",c:"#457B9D",pack:"Each, colors vary",d:"Compact palm-size rechargeable battery in assorted metallic colors. Age-restricted item, 21+ only.",age:true},
 {id:"gm025",n:"Wegacell Type C Lightning Charger",sku:"",price:3.00,stock:34,sub:"Electronics & Charging",art:"cable",c:"#6C757D",brand:"Wegacell",pack:"Each, blister pack",d:"USB-C to Lightning fast-charge and sync cable in retail-ready packaging."},
 {id:"gm026",n:"Wegacell USB Car Charger",sku:"",price:null,stock:4,sub:"Electronics & Charging",art:"carcharger",c:"#E63946",brand:"Wegacell",pack:"Case",d:"Dual-port USB car charger in assorted colors, boxed for resale."},
 {id:"gm027",n:"Wegacell USB Wall Charger",sku:"",price:null,stock:2,sub:"Electronics & Charging",art:"wallcharger",c:"#ADB5BD",brand:"Wegacell",pack:"Case",d:"Compact USB wall adapter for phones and small devices."},
 {id:"gm028",n:"Gas House Backpack Black",sku:"",price:null,stock:0,sub:"Apparel & Accessories",art:"backpack",c:"#212529",brand:"Gas House",pack:"Each",d:"Black graphic backpack with padded straps and multiple compartments."},
 {id:"gm029",n:"Bowl TTST010",sku:"",price:null,stock:60,sub:"Hookah Bowls & Parts",art:"bowl",c:"#495057",pack:"Each",d:"Stainless heat-management bowl, model TTST010."},
 {id:"gm030",n:"Chore Boy Scrubber",sku:"",price:null,stock:9,sub:"Household & Cleaning",art:"scrubber",c:"#F77F00",brand:"Chore Boy",pack:"Box",d:"Ultimate scrubbers for tough pots, pans and grills."},
 {id:"gm031",n:"Pure Eye 6CT",sku:"610466049774",price:null,stock:1,sub:"Health & Personal Care",art:"drops",c:"#00B4D8",brand:"Pure Eyes",pack:"6-count",d:"Lubricating eye drops for dry, red, irritated eyes. Sold as a 6-count."},
 {id:"gm032",n:"Chevron",sku:"23868386268",price:null,stock:null,sub:"Automotive Care",art:"jug",c:"#0057B8",brand:"Chevron",pack:"Options available",d:"Chevron automotive fluids. Available in multiple options."},
 {id:"gm033",n:"Axe Deodorant",sku:"",price:null,stock:null,sub:"Health & Personal Care",art:"spray",c:"#222222",brand:"Axe",pack:"Scents vary",d:"Men's body spray deodorant in assorted signature scents."},
 {id:"gm034",n:"Duracell",sku:"41333888613",price:null,stock:null,sub:"Electronics & Charging",art:"cell",c:"#B5651D",brand:"Duracell",pack:"Sizes vary",d:"Long-lasting alkaline batteries. Available in multiple sizes and pack counts."},
 {id:"gm035",n:"Mobil",sku:"",price:null,stock:null,sub:"Automotive Care",art:"jug",c:"#E5E5E5",brand:"Mobil",pack:"Grades vary",d:"Mobil motor oils. Available in multiple grades and sizes."},
 {id:"gm036",n:"Monster Original Green",sku:"",price:null,stock:40,sub:"Energy & Beverages",art:"can",c:"#2B9348",brand:"Monster",pack:"Case",d:"The original green energy drink, sold by the case."},
 {id:"gm037",n:"Toy Fanta Cube",sku:"892026661268",price:null,stock:4,sub:"Toys & Novelties",art:"cube",c:"#F77F00",pack:"Counter display",d:"Squishy fidget cube in a bright counter display box."},
 {id:"gm038",n:"Toy Big Spinner",sku:"",price:null,stock:15,sub:"Toys & Novelties",art:"ball",c:"#9D4EDD",pack:"Display",d:"Large twist-and-pop fidget spinner balls in assorted colors."},
 {id:"gm039",n:"Toy Small Butter",sku:"",price:null,stock:22,sub:"Toys & Novelties",art:"butter",c:"#FFD60A",pack:"Display",d:"Squishy stick-of-butter stress toy, 4 oz size."},
 {id:"gm040",n:"Toy Halloween Pumpkin",sku:"",price:null,stock:2,sub:"Toys & Novelties",art:"pumpkin",c:"#F77F00",pack:"Display",d:"Seasonal squishy pumpkin stress toys."},
 {id:"gm041",n:"Toy Big Cheese",sku:"",price:null,stock:11,sub:"Toys & Novelties",art:"cheese",c:"#FFC300",pack:"Display",d:"Squeeze-cheese stress toy that slowly bounces back to shape."},
 {id:"gm042",n:"Toy Bead Orbit",sku:"",price:null,stock:23,sub:"Toys & Novelties",art:"orbit",c:"#4895EF",pack:"Display",d:"Orbiting bead fidget toy with smooth, satisfying motion."},
 {id:"gm043",n:"Rev 360",sku:"",price:null,stock:null,sub:"Automotive Care",art:"jug",c:"#1B263B",brand:"Rev 360",pack:"Grades vary",d:"Rev 360 motor oil, including 5W-30. Available in multiple grades."},
 {id:"gm044",n:"Eyez Sport Sunglass",sku:"",price:null,stock:0,sub:"Apparel & Accessories",art:"glasses",c:"#212529",pack:"Each",d:"Wraparound padded sport sunglasses with dark lenses."},
 {id:"gm045",n:"Wegacell Display 9940",sku:"",price:null,stock:2,sub:"Displays & Fixtures",art:"rack",c:"#4361EE",brand:"Wegacell",pack:"Countertop display",d:"Countertop phone-accessory display with lighting, model 9940."},
 {id:"gm046",n:"Wegacell Display 9903",sku:"",price:null,stock:1,sub:"Displays & Fixtures",art:"rack",c:"#3A0CA3",brand:"Wegacell",pack:"LED acrylic display",d:"USB-powered acrylic display with LED lighting for cellphone accessories, model 9903."},
 {id:"gm047",n:"Wegacell Display 9936",sku:"",price:null,stock:1,sub:"Displays & Fixtures",art:"rack",c:"#480CA8",brand:"Wegacell",pack:"LED acrylic display",d:"USB-powered acrylic display with LED lighting for cellphone accessories, model 9936."},
 {id:"gm048",n:"Tyson Eye Drop",sku:"784847575579",price:null,stock:19,sub:"Health & Personal Care",art:"drops",c:"#00A6FB",pack:"Display box",d:"Soothing eye drops packed in a counter-ready display."},
 {id:"gm051",n:"Toy Big Butter",sku:"",price:null,stock:11,sub:"Toys & Novelties",art:"butter",c:"#FFD60A",pack:"Display",d:"Oversized 14 oz squishy butter stress toy."},
 {id:"gm052",n:"Toy Halloween Sugar Dumpling",sku:"",price:null,stock:0,sub:"Toys & Novelties",art:"pumpkin",c:"#9D4EDD",pack:"Collector display",d:"Collectible Halloween squishy dumplings, 12 characters to collect."},
 {id:"gm053",n:"Toy Light Spinner",sku:"",price:null,stock:12,sub:"Toys & Novelties",art:"orbit",c:"#4361EE",pack:"Each, boxed",d:"LED flying orb spinner that returns to your hand. Rechargeable."}
];


/* Product name -> photo file in /public/images */
export const IMAGES = {
  "5 Hour Energy Extra Strength": "5-hour-energy-extra-strength.webp",
  "Blazing Buddies Display": "blazing-buddies-display.webp",
  "Duracell": "duracell.webp",
  "Eyez Sport Sunglass": "eyez-sport-sunglass.webp",
  "Formula 420": "formula-420.webp",
  "Gas House Backpack Black": "gas-house-backpack-black.webp",
  "Glass Cleaner 420 Glass Cleaner 12 FL OZ": "glass-cleaner-420-glass-cleaner-12-fl-oz.webp",
  "Krazy Glue All Purpose": "krazy-glue-all-purpose.webp",
  "Mobil": "mobil.webp",
  "Monster Original Green": "monster-original-green.webp",
  "Nova Black": "nova-black.webp",
  "Orange Chronic": "orange-chronic.webp",
  "Palm Battery": "palm-battery.webp",
  "Rev 360": "rev-360.webp",
  "Sanitizer Hand Sanitizer 2oz": "sanitizer-hand-sanitizer-2oz.webp",
  "Smart Fill Gas Can": "smart-fill-gas-can.webp",
  "Socks Wow Sox 60 Count": "socks-wow-sox-60-count.webp",
  "Special Blue Mini Dispenser": "special-blue-mini-dispenser.webp",
  "Special Blue Tall Dispenser": "special-blue-tall-dispenser.webp",
  "STP Brake Fluid": "stp-brake-fluid.webp",
  "STP Complete Fuel System Cleaner": "stp-complete-fuel-system-cleaner.webp",
  "STP Gas Treatment": "stp-gas-treatment.webp",
  "STP High Mileage Power Steering Fluid + Stop Leak": "stp-high-mileage-power-steering-fluid-stop-leak.webp",
  "STP Octane Booster": "stp-octane-booster.webp",
  "STP Power Steering Fluid": "stp-power-steering-fluid.webp",
  "STP Super Concentrated Fuel Cleaner": "stp-super-concentrated-fuel-cleaner.webp",
  "STP Super Concentrated Fuel Injector Cleaner": "stp-super-concentrated-fuel-injector-cleaner.webp",
  "Toy Bead Orbit": "toy-bead-orbit.webp",
  "Toy Big Butter": "toy-big-butter.webp",
  "Toy Big Cheese": "toy-big-cheese.webp",
  "Toy Big Spinner": "toy-big-spinner.webp",
  "Toy Fanta Cube": "toy-fanta-cube.webp",
  "Toy Small Butter": "toy-small-butter.webp",
  "Toy Halloween Sugar Dumpling": "toy-halloween-sugar-dumpling.webp",
  "Toy Light Spinner": "toy-light-spinner.webp",
  "Toy Small Spinner": "toy-small-spinner.webp",
  "Tyson Eye Drop": "tyson-eye-drop.webp",
  "Wegacell Display 9903": "wegacell-display-9903.webp",
  "Wegacell Display 9936": "wegacell-display-9936.webp",
  "Wegacell Display 9940": "wegacell-display-9940.webp",
  "Wegacell Type C Lightning Charger": "wegacell-type-c-lightning-charger.webp",
  "Wegacell USB Car Charger": "wegacell-usb-car-charger.webp",
  "Wegacell USB Wall Charger": "wegacell-usb-wall-charger.webp",
  "Axe Deodorant": "axe-deodorant.webp",
  "Chevron": "chevron.webp",
  "Chore Boy Scrubber": "chore-boy-scrubber.webp"
};

/* Each product keeps a fixed id (gm001…), so links and saved carts stay valid when products are removed. */
export const PRODUCTS = RAW_PRODUCTS.map((p, i) => ({
  ...p,
  cat: CATEGORY,
  order: i,
  img: IMAGES[p.n] || null,
}));

export const DEPARTMENTS = [...new Set(PRODUCTS.map(p => p.sub))].sort();

export const getProduct = id => PRODUCTS.find(p => p.id === id);
export const pickProducts = (...names) => names.map(n => PRODUCTS.find(p => p.n === n)).filter(Boolean);
