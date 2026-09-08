const images = {
  tents: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1800&q=84',
  backpacking: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1800&q=84',
  sleep: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1800&q=84',
  light: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1800&q=84',
  packs: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1800&q=84',
  trekking: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=84',
  cooking: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=1800&q=84',
  water: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1800&q=84',
  footwear: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1800&q=84',
  chairs: 'https://images.unsplash.com/photo-1525811902-f2342640856e?auto=format&fit=crop&w=1800&q=84',
  power: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=84',
  gear: 'https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=1800&q=84'
};

const base = [
  ['best-camping-tents-weekend-adventures','Best Camping Tents for Weekend Adventures','Camping','tents'],
  ['best-backpacking-tents-2026','Best Backpacking Tents for 2026','Backpacking','backpacking'],
  ['best-sleeping-bags-cold-weather','Best Sleeping Bags for Cold Weather Camping','Camping','sleep'],
  ['best-sleeping-pads-backpacking','Best Sleeping Pads for Backpacking','Backpacking','sleep'],
  ['best-camping-headlamps','Best Camping Headlamps','Outdoor Gear','light'],
  ['best-hiking-backpacks-day-hikes','Best Hiking Backpacks for Day Hikes','Hiking','packs'],
  ['best-backpacking-backpacks','Best Backpacking Backpacks','Backpacking','packs'],
  ['best-trekking-poles-long-hikes','Best Trekking Poles for Long Hikes','Trekking','trekking'],
  ['best-portable-camping-stoves','Best Portable Camping Stoves','Camp Cooking','cooking'],
  ['best-camping-cookware-sets','Best Camping Cookware Sets','Camp Cooking','cooking'],
  ['best-camping-lanterns','Best Camping Lanterns','Camping','light'],
  ['best-water-filters-hiking-backpacking','Best Water Filters for Hiking and Backpacking','Hiking','water'],
  ['best-hiking-shoes-long-distance-trails','Best Hiking Shoes for Long-Distance Trails','Hiking','footwear'],
  ['best-waterproof-hiking-boots','Best Waterproof Hiking Boots','Hiking','footwear'],
  ['best-camping-chairs','Best Camping Chairs','Camping','chairs'],
  ['best-portable-power-stations-camping','Best Portable Power Stations for Camping','Outdoor Gear','power'],
  ['best-camping-coolers','Best Camping Coolers','Camping','cooking'],
  ['best-lightweight-tents-backpacking','Best Lightweight Tents for Backpacking','Backpacking','backpacking'],
  ['best-hiking-gps-devices','Best Hiking GPS Devices','Outdoor Gear','trekking'],
  ['best-outdoor-gear-beginners','Best Outdoor Gear for Beginners','Buying Guides','gear'],
  ['best-hiking-rain-jackets','Best Hiking Rain Jackets for Wet Trails','Apparel','rain'],
  ['best-hydration-bladders-hiking','Best Hydration Bladders for Hiking','Hiking','hydration'],
  ['best-satellite-messengers-hiking','Best Satellite Messengers for Hiking','Outdoor Gear','messengers'],
  ['best-backpacking-quilts','Best Backpacking Quilts for Lightweight Sleep Systems','Backpacking','quilts'],
  ['best-bear-canisters-backpacking','Best Bear Canisters for Backpacking','Backpacking','bear']
];

// One distinct editorial image per guide. Keeping this list separate prevents
// accidental image reuse as the review library grows.
const articleImages = [
  'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1443632864897-14973fa006cf?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1563299796-17596ed6b017?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=84'
];

const research = [
  {f:['usable floor area and peak height','weather protection and ventilation','setup complexity and packed size'],s:[['GearLab camping tent guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-camping-tent'],['REI tent buying guide','https://www.rei.com/learn/expert-advice/family-base-camping-tent.html']]},
  {f:['trail weight and packed volume','interior livability','wind and rain protection'],s:[['GearLab backpacking tent guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-backpacking-tent'],['REI backpacking tent guide','https://www.rei.com/learn/expert-advice/backpacking-tent.html']]},
  {f:['temperature rating methodology','insulation type and fill power','fit, draft control, and moisture management'],s:[['GearLab sleeping bag guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-sleeping-bag'],['REI sleeping bag guide','https://www.rei.com/learn/expert-advice/sleeping-bag.html']]},
  {f:['R-value for expected temperatures','weight and packed size','valve design and field repairability'],s:[['GearLab sleeping pad guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-sleeping-pad'],['REI sleeping pad guide','https://www.rei.com/learn/expert-advice/sleeping-pads.html']]},
  {f:['usable beam pattern','battery system and cold-weather runtime','controls, lockout, and water resistance'],s:[['GearLab headlamp guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-headlamp'],['REI headlamp guide','https://www.rei.com/learn/expert-advice/headlamp.html']]},
  {f:['torso fit and carry comfort','capacity for the actual route','pocket access and hydration compatibility'],s:[['GearLab daypack guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-daypack'],['REI backpack guide','https://www.rei.com/learn/expert-advice/backpack.html']]},
  {f:['load transfer and suspension fit','usable capacity and organization','empty weight and material durability'],s:[['GearLab backpacking pack guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-backpacks-backpacking'],['REI backpack guide','https://www.rei.com/learn/expert-advice/backpack.html']]},
  {f:['grip comfort and strap design','locking mechanism reliability','collapsed length and replaceable tips'],s:[['GearLab trekking pole guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-trekking-poles'],['REI trekking pole guide','https://www.rei.com/learn/expert-advice/trekking-poles-hiking-staffs.html']]},
  {f:['fuel availability and trip length','boil control rather than headline speed','wind performance and pot stability'],s:[['GearLab backpacking stove guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-backpacking-stove'],['REI backpacking stove guide','https://www.rei.com/learn/expert-advice/backpacking-stove.html']]},
  {f:['number of diners and meal style','material, coating, and heat distribution','nesting efficiency and cleanup'],s:[['GearLab camping cookware guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-camping-cookware'],['REI camp kitchen checklist','https://www.rei.com/learn/expert-advice/camp-kitchen-checklist.html']]},
  {f:['area light quality and glare','measured runtime at useful brightness','charging options and weather resistance'],s:[['GearLab lantern guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-lantern'],['REI camp lighting guide','https://www.rei.com/learn/expert-advice/camp-lighting.html']]},
  {f:['microorganisms addressed by the treatment','flow rate in realistic water','maintenance and freeze sensitivity'],s:[['GearLab water filter guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-backpacking-water-filter'],['REI water treatment guide','https://www.rei.com/learn/expert-advice/water-treatment-backcountry.html']]},
  {f:['foot shape and intended terrain','midsole support over long mileage','outsole traction and upper durability'],s:[['GearLab hiking shoe guide','https://www.outdoorgearlab.com/topics/shoes-and-boots/best-hiking-shoes'],['REI hiking footwear guide','https://www.rei.com/learn/expert-advice/hiking-boots.html']]},
  {f:['fit with hiking socks','waterproofing versus breathability','ankle structure, traction, and break-in'],s:[['GearLab hiking boot guide','https://www.outdoorgearlab.com/topics/shoes-and-boots/best-hiking-boots'],['REI hiking footwear guide','https://www.rei.com/learn/expert-advice/hiking-boots.html']]},
  {f:['seat height and body support','packed size for the transport method','frame stability and fabric durability'],s:[['GearLab camping chair guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-camping-chair'],['REI camp furniture advice','https://www.rei.com/learn/expert-advice/camp-furniture.html']]},
  {f:['usable watt-hours, not marketing capacity','continuous output and port mix','charge speed, weight, and battery chemistry'],s:[['GearLab portable power station guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-portable-power-station'],['U.S. Department of Energy battery basics','https://www.energy.gov/eere/articles/how-does-lithium-ion-battery-work']]},
  {f:['measured insulation performance','capacity after accounting for ice','drainage, handling, and empty weight'],s:[['GearLab cooler guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-cooler'],['REI cooler selection guide','https://www.rei.com/learn/expert-advice/coolers.html']]},
  {f:['minimum trail weight','space-to-weight efficiency','stormworthiness for the intended season'],s:[['GearLab ultralight tent guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-ultralight-tent'],['REI backpacking tent guide','https://www.rei.com/learn/expert-advice/backpacking-tent.html']]},
  {f:['navigation interface and map ecosystem','battery life with tracking enabled','satellite messaging and subscription requirements'],s:[['GearLab handheld GPS guide','https://www.outdoorgearlab.com/topics/camping-and-hiking/best-handheld-gps'],['REI GPS receiver guide','https://www.rei.com/learn/expert-advice/gps-receivers.html']]},
  {f:['safety and shelter before convenience','fit and skills before premium upgrades','a coherent kit with tested compatibility'],s:[['REI ten essentials guide','https://www.rei.com/learn/expert-advice/ten-essentials.html'],['Hiking Guy gear guide','https://hikingguy.com/best-hiking-gear/']]},
  {f:['waterproof construction and seam sealing','breathability and venting options','hood, cuff, and hem adjustment'],s:[['REI rainwear guide','https://www.rei.com/learn/expert-advice/rainwear.html'],['Patagonia shell layering guide','https://www.patagonia.com/guides/outerwear/']]},
  {f:['reservoir capacity for the route','valve flow and shutoff design','ease of cleaning and drying'],s:[['REI hydration guide','https://www.rei.com/learn/expert-advice/hydration.html'],['Osprey reservoir care','https://www.osprey.com/customer-support/cleaning-water-reservoirs']]},
  {f:['satellite network and coverage','two-way messaging and SOS workflow','subscription cost and battery life'],s:[['Garmin inReach technology','https://www.garmin.com/en-US/c/outdoor-recreation/satellite-communicators/'],['NOAA personal locator beacon guidance','https://www.sarsat.noaa.gov/']]},
  {f:['temperature rating and insulation','sleeping-pad attachment and draft control','weight, packed size, and fit'],s:[['REI sleeping bag guide','https://www.rei.com/learn/expert-advice/sleeping-bag.html'],['Therm-a-Rest quilt guide','https://www.thermarest.com/blog/sleeping-bag-vs-quilt/']]},
  {f:['food capacity for trip length','approval for the destination','opening, carrying, and packing practicality'],s:[['National Park Service food storage guidance','https://www.nps.gov/articles/bearsafetyfood.htm'],['BearVault approved canisters','https://bearvault.com/canister-approval/']]}
];

export const heroImage = 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2200&q=86';

const productSets = {
  tents: ['REI Co-op Base Camp 4','Marmot Limestone 4P','Coleman Sundome 4'],
  backpacking: ['NEMO Dagger OSMO 2P','Big Agnes Copper Spur HV UL2','REI Co-op Trailmade 2'],
  sleep: ['NEMO Disco 15','Therm-a-Rest NeoAir XLite NXT','Kelty Cosmic Down 20'],
  light: ['Black Diamond Spot 400','Petzl Actik Core','Nitecore NU25 UL'],
  packs: ['Osprey Talon 22','REI Co-op Flash 22','Deuter Speed Lite 21'],
  trekking: ['Black Diamond Trail Back','LEKI Makalu Lite','Cascade Mountain Tech Carbon'],
  cooking: ['MSR PocketRocket Deluxe','Jetboil Flash','GSI Outdoors Pinnacle Camper'],
  water: ['Sawyer Squeeze','Katadyn BeFree 1.0L','Platypus GravityWorks 4L'],
  footwear: ['Hoka Anacapa 2 Low GTX','Merrell Moab 3','Salomon X Ultra 4 Mid GTX'],
  chairs: ['Helinox Chair One','REI Co-op Camp X','GCI Outdoor KickBack Rocker'],
  power: ['EcoFlow River 2 Pro','Jackery Explorer 500','Bluetti AC70'],
  gear: ['Black Diamond Spot 400','Sawyer Squeeze','Osprey Talon 22'],
  rain: ['Patagonia Torrentshell 3L','Outdoor Research Foray II','Marmot PreCip Eco'],
  hydration: ['Osprey Hydraulics 3L','CamelBak Crux 3L','Gregory 3D Hydro 3L'],
  messengers: ['Garmin inReach Mini 2','ZOLEO Satellite Communicator','SPOT X'],
  quilts: ['Enlightened Equipment Revelation','Therm-a-Rest Vesper 20','NEMO Coda 10/20'],
  bear: ['BearVault BV500 Journey','Garcia Backpacker’s Cache','Ursack Major XL']
};

// Amazon search URLs keep availability and live retailer pricing current without
// inventing an affiliate tracking ID. A verified affiliate URL can replace any
// entry later without changing the article components.
const commerceProduct = name => ({
  name,
  price: 'Check current price',
  retailer: 'Amazon',
  url: `https://www.amazon.com/s?k=${encodeURIComponent(name)}`
});

const featuredKetlGuide = {
  slug: 'ketl-mtn-gear-worth-packing',
  path: '/featured/ketl-mtn-gear/',
  title: 'The KETL Mtn Gear Worth Packing',
  category: 'Apparel',
  image: 'https://cdn.shopify.com/s/files/1/0114/1335/6610/files/KETL-Nofry-Sun-Hoodie-Cloud-PDP-3.jpg?v=1778606561',
  products: [
    {name:'KETL NoFry Sun Hoodie',price:'$69',retailer:'KETL Mtn',url:'https://ketlmtn.com/products/nofry-sunhoodie?ref=mboxtanr'},
    {name:'KETL Vent Lightweight Active Pants',price:'$94',retailer:'KETL Mtn',url:'https://ketlmtn.com/products/ketl-mtn-vent-joggerish-lightweight-travel-pants?ref=mboxtanr'},
    {name:'KETL Tomfoolery Chino Travel Pants',price:'$99',retailer:'KETL Mtn',url:'https://ketlmtn.com/products/tomfoolery-pant?ref=mboxtanr'}
  ],
  excerpt: 'A focused edit of versatile KETL Mtn layers for warm-weather trails, travel, and everyday adventure.',
  date: 'September 8, 2026',
  read: '8 min read',
  featured: true,
  partner: true,
  rating: '4.7',
  buyingFactors: ['warm-weather comfort','versatility across trail and travel','fit, storage, and packability'],
  sources: [['KETL Mtn product specifications','https://ketlmtn.com/collections/mens?ref=mboxtanr']]
};

const dek = {
  Camping: 'Comfortable, dependable equipment for better weekends at camp—without hauling more than you need.',
  Backpacking: 'Trail-ready options judged by weight, usable comfort, packed size, and practical value.',
  Hiking: 'Reliable equipment for long days on foot, chosen around fit, function, and real-world trade-offs.',
  Trekking: 'Supportive, durable gear for repeated miles and changing terrain.',
  'Camp Cooking': 'Efficient, packable cooking gear that earns its space in your camp box or backpack.',
  'Outdoor Gear': 'Useful outdoor technology and essentials with clear strengths, limits, and value.',
  Apparel: 'Weather-ready layers chosen for protection, breathability, fit, and practical trail use.',
  'Buying Guides': 'A practical starter kit that puts safety and function before unnecessary upgrades.'
};

export const articles = [featuredKetlGuide, ...base.map((a, i) => ({
  slug:a[0], title:a[1], category:a[2], image:articleImages[i], products:productSets[a[3]].map(commerceProduct),
  excerpt:dek[a[2]], date:`${['May','June','July','August'][i%4]} ${5+i}, 2026`, read:`${12+(i%7)} min read`,
  featured:i<4, rating:(4.5+(i%4)*.1).toFixed(1), buyingFactors:research[i].f, sources:research[i].s
}))];

export const categories = [
  {name:'Camping',slug:'camping',image:images.tents,description:'Tents, sleeping bags, camp furniture, lighting, coolers and cooking gear.'},
  {name:'Hiking & Trekking',slug:'hiking',image:images.trekking,description:'Footwear, poles, daypacks, hydration, navigation and trail accessories.'},
  {name:'Backpacking',slug:'backpacking',image:images.backpacking,description:'Weight-conscious shelters, packs, sleep systems, stoves and backcountry equipment.'},
  {name:'Outdoor Gear',slug:'outdoor-gear',image:images.gear,description:'Headlamps, water filters, power stations and useful outdoor essentials.'},
  {name:'Outdoor Apparel',slug:'apparel',image:images.footwear,description:'Jackets, hiking pants, base layers, footwear and weather protection.'}
];

export const editorialParagraphs = [
  'A strong recommendation starts with the job the gear needs to do. We compare published specifications, construction details, warranty terms, credible long-term owner feedback, and the practical compromises that appear when weight, comfort, durability, and price compete. We do not treat the longest feature list as an automatic advantage. A feature only matters when it makes setup easier, improves safety, reduces fatigue, or solves a problem you are likely to face outside.',
  'Fit and conditions matter more than a universal ranking. A roomy car-camping option may be a poor choice several miles from a trailhead, while an ultralight favorite can feel unnecessarily delicate for family weekends. Our picks are organized by use case so you can start with where and how you travel, then choose the level of performance that justifies its cost.',
  'Manufacturer claims are useful but incomplete. We cross-check dimensions, materials, capacity, weight, included parts, and published care guidance. When hands-on testing has not been completed by GEARTREKCO, we say so and avoid presenting laboratory-style conclusions. Ratings reflect our editorial assessment of available evidence, not a claim that every item was personally field tested.',
  'Price is considered in context. The least expensive option is not a value if it needs replacing quickly, and the premium option is not automatically better for occasional use. We look for the point where design, materials, serviceability, and comfort create a meaningful improvement—and call out when a simpler product is the smarter buy.',
  'Before ordering, confirm the current model name and specifications on the manufacturer or retailer page. Outdoor products are revised frequently, sometimes without dramatic naming changes. Check sizing, compatibility, included accessories, return terms, and availability in your region. For safety-critical equipment, follow manufacturer instructions and carry an appropriate backup.'
];
