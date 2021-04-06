//Productos
//Seed con 10 vinos, 10 cervezas, 10 bebidas blancas
const Product = require("../../back/models/Product");
require("../config/index");

const idWhisky = { _id: "604fd15acf97138fcc1b9092" };
const idBeer = { _id: "604fd15acf97138fcc1b9091" };
const idWine = { _id: "604fd15acf97138fcc1b9093" };

const stella = {
  name: "Stella Artois Premium Lager Bottle, 1 x 660 ml",
  origin: "Belgium",
  description:
    "Over six hundred years of brewing expertise ensure that Stella is refreshing, crisp and hoppy with every sip. Loved worldwide, enjoy Stella Artois served chilled.",
  category: idBeer,
  flavor: "lager",
  price: 2.49,
  // reviews:,
  // tags: ["lager", "beer", "belgium"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/StellaArtoisPremiumLagerBottle_1x660ml_1024x1024.jpg?v=1606545540",
};
const redStripe = {
  name: "Red Stripe Premium Lager Stubby, 1 x 330 ml",
  origin: "Jamaica",
  description:
    "Red Stripe promises a mild and soft taste and a thick, foamy head. Best serve chilled.",
  category: idBeer,
  flavor: "lager",
  price: 1.99,
  // reviews:,
  // tags: ["lager", "beer", "Jamaica"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/red-stripe-stubby-bottles-24x-300ml_temp_1fddc262-cc30-478a-ac19-41d431da1b6d_1024x1024.jpg?v=1606545587",
};

const Heineken = {
  name: "Heineken Premium Lager Beer Cans Multipack, 24 x 440 ml",
  origin: "Holland",
  description:
    "Consistent and much improved since we fell in line with the rest of Europe. Yes- I am old enough to remember when we had a much weaker version of Heineken in the UK. And it wasn't anywhere near as good.",
  category: idBeer,
  flavor: "lager",
  price: 3.5,
  // reviews:,
  // tags: ["lager", "beer", "Holland"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/heineken-dutch-premium-lager-beer-6x4x-500ml_temp_1024x1024.jpg?v=1606545646",
};
const BrewDog = {
  name: "BrewDog Punk IPA Beer Bottle, 660 ml",
  origin: "Uk",
  description:
    "So what will you find here? Quite an aggressive beer, jam packed with flavour. Pineapple, Mango, kiwi; the list goes on.",
  category: idBeer,
  flavor: "ipa",
  price: 3.39,
  // reviews:,
  // tags: ["ipa", "beer", "Uk"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/brewdog_punk_ipa_660ml_1024x1024.png?v=1606545305",
};
const Paradiso = {
  name: "Paradiso Citra IPA, Big Drop Brewing, 33 cl",
  origin: "Uk",
  description:
    "A delicious alcohol-free IPA. As the name suggests, there is citrus fruit all the way. A bright, pleasant twist of bitterness on the finish makes one more bottle almost compulsory!",
  category: idBeer,
  flavor: "ipa",
  price: 1.79,
  // reviews:,
  // tags: ["ipa", "beer", "Uk"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/ParadisoCitraIPA_BigDropBrewing_33cl_1024x1024.jpg?v=1606545651",
};
const Tiny = {
  name: "Tiny Rebel Clwb Tropicana Beer, 330 ml",
  origin: "Uk",
  description:
    "It's super juicy and crammed full of fruity hop flavours think mango, pineapple, peach and passionfruit accompanied by a super soft mouthfeel.",
  category: idBeer,
  flavor: "ipa",
  price: 2.75,
  // reviews:,
  // tags: ["ipa", "beer", "Uk"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/tiny_rebel_clwb_tropicana_330ml_1024x1024.png?v=1606544811",
};
const Kopparberg = {
  name: "Kopparberg Mixed Fruit, 500 ml",
  origin: "Sweden",
  description:
    "It's blackcurrants and raspberries all the way with this sweet and rich Cider.",
  category: idBeer,
  flavor: "cider",
  price: 2.69,
  // reviews:,
  // tags: ["cider", "beer", "Sweden"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/KopparbergMixedFruit_500ml_1024x1024.jpg?v=1606544874",
};
const Hawkes = {
  name: "Hawkes Urban Orchard Cider, 500 ml",
  origin: "uk",
  description:
    "Made from a unique blend of London-pressed and country apples, Urban Orchard is a medium dry cider that's smooth and harmonious in body, complex and rich in texture with a crisp wine like finish.",
  category: idBeer,
  flavor: "cider",
  price: 2.49,
  // reviews:,
  // tags: ["cider", "beer", "uk"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/HawkesUrbanOrchardCider_500ml_1024x1024.png?v=1606544882",
};
const Bulmers = {
  name: "Bulmers Original Apple Premium Cider Multipack, 12 x 500 ml",
  origin: "Belgium",
  description:
    "Bulmers Original owes its popularity to the finest apples which are vat-matured to produce a refreshing cider with a smooth taste.",
  category: idBeer,
  flavor: "cider",
  price: 5.53,
  // reviews:,
  // tags: ["cider", "beer", "Belgium"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/snapshotimagehandler_590818370_1024x1024.jpg?v=1606545500",
};
const Glenmorangie = {
  name: "Glenmorangie Signet Whisky, 70 cl",
  origin: "Scotland",
  description:
    "Glennmorangie Signet is an exceptional whisky. You first notice that there is no age statement on the bottle. This is in fact a blend of their oldest whisky - distilled over thirty years ago when malting still occurred on site and spirit matured in a selection of the world's finest casks. Furthermore Dr Bill has employed a unique roasted 'chocolate' barley malt. Rare and expensive it only malted in small quantities each year, resulting in highly distinctive flavours, including roast mocha coffee and a sense that you are eating an incredibly velvet like chocolate. Put simply, Dr Bill has created a crackerjack of a whisky. Whilst this might make some cringe, we highly recommend with a large block of ice.",
  category: idWhisky,
  flavor: "cider",
  price: 5.53,
  // reviews:,
  // tags: ["scottish", "wisky", "Scotland"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/GlenmorangieSignetWhisky_70cl_1024x1024.jpg?v=1614000408",
};
const johnnieWalker = {
  name: "Johnnie Walker Blue Label Whisky, 70 cl",
  origin: "Scotland",
  description:
    "Highly complex, Johnnie Walker Blue is created from some exceptionally rare whiskies. Our tasting notes include an incredible range of flavours, including hazelnuts, citrus fruit and subtle pepper and spices. A huge treat that will never be anything other than extraordinary.",
  category: idWhisky,
  flavor: "scottish",
  price: 138.99,
  // reviews:,
  // tags: ["scottish", "wisky", "Scotland"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/JohnnieWalkerBlueLabelWhisky_70cl_1024x1024.jpg?v=1614000497",
};
const Macallan = {
  name: "The Macallan Estate, 70cl",
  origin: "Scotland",
  description:
    "Highly limited, The Macallan Estate is one of Macallan’s Whisky Maker’s (Sarah Burgess) tributes to this wonderful distillery’s history. A truly unique bottling containing rare spirit from a proportion of the barley grown at Easter Elchies estate, which is distilled just once a year over the course of a single week. The whisky reveals itself as a wonderful mix of Cinnamon and other spices along with juicy citrus notes. Sit back, savour, enjoy.",
  category: idWhisky,
  flavor: "scottish",
  price: 184.99,
  // reviews:,
  // tags: ["scottish", "wisky", "Scotland"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/WHISKY_0018_the_macallan_estate_70cl_1024x1024.png?v=1606434224",
};
const yellowSpot = {
  name: "Yellow Spot Single Pot Still Irish Whiskey, 70 cl",
  origin: "Ireland",
  description:
    "Yellow Spot comes as part of a second instalment in the ‘Spot’ Irish whiskey range. This one is made in a single pot still and matured in three different types of cask: American bourbon, Spanish sherry butts and Spanish Malaga, making for a sweeter taste.",
  category: idWhisky,
  flavor: "irish",
  price: 67.99,
  // reviews:,
  // tags: ["irish", "wisky", "Ireland"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/WHISKY_0000_Yellow_Spot_Single_Pot_Still_Irish_70cl_1024x1024.png?v=1606545362",
};
const Redbreast = {
  name: "Redbreast Lustau Whiskey, 70 cl",
  origin: "Ireland",
  description:
    "A new expression in the Redbreast range, introduced in the latter half of 2016. This single pot still Irish whiskey was initially matured in a combination of American and European oak casks for 9 to 12 years, before being transferred over to first fill Oloroso Sherry casks from Bodegas Lustau for a year.",
  category: idWhisky,
  flavor: "irish",
  price: 45.99,
  // reviews:,
  // tags: ["irish", "wisky", "Ireland"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/WHISKY_0057_redbreast_lustau_70cl_1024x1024.png?v=1606545304",
};
const Bushmills = {
  name: "Bushmills 16 Year Old Three Wood Whiskey, 70 cl",
  origin: "Ireland",
  description:
    "Matured in three different types of cask, each of which contributes extra nuances to what is destined to become a classic Irish malt. Perfect as an after-dinner dram.",
  category: idWhisky,
  flavor: "irish",
  price: 79.99,
  // reviews:,
  // tags: ["irish", "wisky", "Ireland"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/Bushmills16YearOldThreeWoodWhiskey_70cl_1024x1024.jpg?v=1606545773",
};
const nikkaCoffey = {
  name: "Nikka Coffey Malt Whisky, 70 cl",
  origin: "Japan",
  description:
    "Coffey Malt is made from 100% malted barley. Despite its quality it is not categorised as a Malt but instead as grain whisky since it is not distilled in a pot still. Soft, silky and absolutely worth savouring.",
  category: idWhisky,
  flavor: "japanese",
  price: 54.99,
  // reviews:,
  // tags: ["japanese", "wisky", "Japan"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/WHISKY_0074_nikka_coffey_malt_70cl_1024x1024.png?v=1606544847",
};
const superNikka = {
  name: "Super Nikka Rare Old Japanese Whisky, 70 cl",
  origin: "Japan",
  description:
    "Super Rare Old is a famous Japanese blend from the Nikka company. This contains a high proportion of malt from the Yoichi and Miyagikyo distilleries.",
  category: idWhisky,
  flavor: "japanese",
  price: 45.99,
  // reviews:,
  // tags: ["japanese", "wisky", "Japan"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/SuperNikkaRareOldJapaneseWhisky_70cl_1024x1024.jpg?v=1606434459",
};
const Togouchi = {
  name: "Togouchi Premium Blended Japanese Whisky 12 Year Old, 70 cl",
  origin: "Japan",
  description:
    "Surprisingly, although Togouchui Premium is blended in Japan it is a blend of Scottish malt and Canadian grain with expertly subtle flavours",
  category: idWhisky,
  flavor: "japanese",
  price: 72.49,
  // reviews:,
  // tags: ["japanese", "wisky", "Japan"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/togouchi_12yo_70cl_1024x1024.png?v=1606544881",
};
const Trivento = {
  name: "Trivento",
  origin: "Argentina",
  description:
    "A bright crimson red whose plum and raspberry aromas mingle elegantly with vanilla notes from the 6 months aged in French oak barrels. Well balanced, with sweet tannins and a velvety finish, Trivento Reserve Malbec is ideal with meats and tomato dishes.",
  category: idWine,
  flavor: "malbec",
  price: 8.49,
  // reviews:,
  // tags: ["malbec", "wine", "Argentina"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/trivento_reserve_malbec_75cl_1024x1024.png?v=1606545366",
};
const Caves = {
  name: "Caves D'Esclans",
  origin: "France",
  description:
    "From the makers of iconic Provence rose Chateau d'Esclans comes The Palm by Whispering Angel, an effortlessly chic and refreshingly approachable new wine for the rose-lover looking to bring an extra splash of style to their summertime sipping.Crafted with grapes from Provence, the world-renowned rose-producing region in the South of France, The Palm has all the hallmarks of a quality Provencal Rose: dry, light and crisp with a signature ballet slipper-pink hue.",
  category: idWine,
  flavor: "Fruity",
  price: 14.49,
  // reviews:,
  // tags: ["rose", "wine", "France"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/palm_rose_75cl_1024x1024.png?v=1606434186",
};
const casilleroDelDiablo = {
  name: "Casillero Del Diablo",
  origin: "Chile",
  description:
    "Bright in appearance, light lemon yellow in colour. Citric and gooseberry notes, with green chilli and a subtle good mineral note on the nose. The palate is very fresh, full bodied, long with mineral and citric persistence. Pair with scallops, carpaccio or fresh seafood such as oysters, clams, crab and shrimps.",
  category: idWine,
  flavor: "Fruity",
  price: 7.5,
  // reviews:,
  // tags: ["Sauvignon", "wine", "Chile"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/casillero_del_diablo_sauv_blanc_75cl_1024x1024.png?v=1606434272",
};
const Martini = {
  name: "Martini",
  origin: "Italy",
  description:
    "Whilst there are many botanicals at play here, the flavours remain delicate and subtle. Best in a certain cocktail....",
  category: idWine,
  flavor: "Vermouth",
  price: 9.5,
  // reviews:,
  // tags: ["vermouth", "wine", "Chile"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/casillero_del_diablo_sauv_blanc_75cl_1024x1024.png?v=1606434272",
};
const Kintu = {
  name: "Kintu",
  origin: "Chile",
  description:
    "Kintu Merlot is smooth and easy drinking packed with juicy ripe plum and red berry flavours.",
  category: idWine,
  flavor: "Merlot",
  price: 6.9,
  // reviews:,
  // tags: ["Merlot", "wine", "Chile"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/KintuMerlot2018_75cl_1024x1024.png?v=1606544722",
};
const islaNegra = {
  name: "Isla Negra",
  origin: "Chile",
  description:
    "Clean and refreshing. Herbaceous, fresh and fruity. Citric, grapefruit and peach notes with hints of pineapple.",
  category: idWine,
  flavor: "Sauvignon Blanc",
  price: 5.9,
  // reviews:,
  // tags: ["Sauvignon", "wine", "Chile"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/IslaNegraSauvignonBlanc_75cl_1024x1024.png?v=1606434426",
};
const Gallo = {
  name: "E&J Gallo",
  origin: "Usa",
  description:
    "Citrus loaded lemons, limes and grapefruit lead on to wonderful tart apple when you enjoy Gallo Family Vineyards Sauvignon Blanc. Each flavour is fresh and distinctive, making this a really enjoyable white wine.",
  category: idWine,
  flavor: "Sauvignon Blanc",
  price: 5.99,
  // reviews:,
  // tags: ["Sauvignon", "wine", "Chile"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/GalloFamilyVineyardsSauvignonBlancWhiteWine_75cl_1024x1024.png?v=1606434267",
};
const nortonPorteño = {
  name: "Norton Porteño",
  origin: "Argentina",
  description:
    "This luscious Malbec has aromas of violets, strawberries and black cherries, leading to a smooth, full-bodied palate with a hint of peppery spice.",
  category: idWine,
  flavor: "Malbec",
  price: 9.9,
  // reviews:,
  // tags: ["Malbec", "wine", "Chile"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/NortonPortenoMalbec_75cl0_1024x1024.jpg?v=1614079045",
};
const fincaAgostino = {
  name: "Finca Agostino",
  origin: "Argentina",
  description:
    "Absolutely tremendous value. And we love the labels with the orange letters representing Pepe's brothers and the reds his brothers. The wine itself is gently aged in French oak barrels ensuring a subtle vanilla background to the wine. Otherwise this is classic Malbec at its best- silky spice and full of berried flavours. Definitely one for Casseroles and a hearty roast.",
  category: idWine,
  flavor: "Malbec",
  price: 16.9,
  // reviews:,
  // tags: ["Malbec", "wine", "Chile"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/agostino_finca_malbec_75cl_1024x1024.png?v=1606434423",
};
const nortonAltura = {
  name: "Norton Altura",
  origin: "Argentina",
  description:
    "We are delighted to add this latest Norton wine onto our lists. The Altura’s origins are the superb Valle de Uco area within Mendoza, an area that is rapidly building a superb reputation amongst wine critics and drinkers. Using grapes picked at a staggering 1,300 metres above sea level the wine has superb concentration. Intense flavours of damson and mulberry mingle with spicy notes and yet never feels too ‘big’. Superb value.",
  category: idWine,
  flavor: "Malbec",
  price: 18.9,
  // reviews:,
  // tags: ["Malbec", "wine", "Chile"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/NortonAlturaMalbec2017_75cl_1024x1024.jpg?v=1606545944",
};
const campoViejo = {
  name: "Campo Viejo",
  origin: "Spain",
  description:
    "Deep cherry colour that suggests a young and vibrant wine. Nose is rich in aromas and pronounced intensity. We are struck by the ripe red fruit, later we get wood nuances with gently sweet notes of vanilla to finish with other sweet spices. On the palate it is perfumed, soft and fresh with a long finish that leaves memories of red fruit, vanilla and cocoa. Perfect with pasta, poultry; light cheeses; grilled chicken or grilled vegetables.",
  category: idWine,
  flavor: "Malbec",
  price: 10.5,
  // reviews:,
  // tags: ["Malbec", "wine", "Chile"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/campo_viejo_tempranillo_75cl_1024x1024.png?v=1606544564",
};
const carpano = {
  name: "Carpano",
  origin: "Italy",
  description:
    "Utterly unique, this knocks the socks off just about every other Vermouth you are likely to come across. Still utilizing the same formula as that created some 240 years ago this is a Vermouth that tastes wonderful straight but will make great cocktails (think Negroni!.",
  category: idWine,
  flavor: "Vermouth Vanilla",
  price: 29.9,
  // reviews:,
  // tags: ["Malbec", "wine", "Chile"],
  img:
    "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/carpano_antica_formula_vermouth_1l_1024x1024.png?v=1606545188",
};

Product.insertMany([
  stella,
  redStripe,
  Heineken,
  BrewDog,
  Paradiso,
  Tiny,
  Kopparberg,
  Hawkes,
  Bulmers,
  Glenmorangie,
  johnnieWalker,
  Macallan,
  yellowSpot,
  Redbreast,
  Bushmills,
  nikkaCoffey,
  superNikka,
  Togouchi,
  Trivento,
  Caves,
  casilleroDelDiablo,
  Martini,
  Kintu,
  islaNegra,
  Gallo,
  nortonPorteño,
  fincaAgostino,
  nortonAltura,
  campoViejo,
  carpano,
])
  .then(() => {
    console.log("Funciona");
    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });
