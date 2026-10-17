// ---------------------------------------------------------------
// Data layer: every product shown on the site lives in this file.
// Components never hard-code product info, they only receive props.
// ---------------------------------------------------------------
import denim from "../assets/images/women-denim-jacket.png";
import hooded from "../assets/images/women-hooded-jacket.png";
import purple from "../assets/images/women-purple-jacket.png";
import yellowCoat from "../assets/images/jacket-1.png";
import yellowRain from "../assets/images/jacket-2.png";
import redLeather from "../assets/images/jacket-3.png";
import pinkCoat from "../assets/images/women-pink-coat.png";
import tealRain from "../assets/images/women-teal-rain.png";
import blackLeatherW from "../assets/images/women-black-leather.png";
import blueLeatherW from "../assets/images/women-blue-leather.png";

import snowboard from "../assets/images/jacket-4.png";
import burgundyLeather from "../assets/images/jacket-5.png";
import navyPuffer from "../assets/images/jacket-6.png";
import bluePuffer from "../assets/images/men-blue-puffer.png";
import redPuffer from "../assets/images/men-red-puffer.png";
import blackLeatherM from "../assets/images/men-black-leather.png";
import tanLeather from "../assets/images/men-tan-leather.png";
import olivePuffer from "../assets/images/men-olive-puffer.png";
import crimsonPuffer from "../assets/images/men-red-puffer-2.png";
import tealPuffer from "../assets/images/men-teal-puffer.png";

export const womenJackets = [
  { id: "w-01", name: "Women's Denim Jacket", description: "A classic denim layer that adds effortless style to everyday outfits.", price: 800, image: denim, alt: "Women's blue denim jacket" },
  { id: "w-02", name: "Women's Hooded Jacket", description: "A cozy hooded layer that keeps your look effortless and warm.", price: 1200, image: hooded, alt: "Woman wearing a black hooded winter jacket" },
  { id: "w-03", name: "Women's Purple Leather Jacket", description: "Bring a bold, confident edge to your favorite cool-weather outfits.", price: 1000, image: purple, alt: "Purple women's leather jacket" },
  { id: "w-04", name: "Sunshine Wool Coat", description: "A double-breasted wool blend coat in a bright, cheerful yellow.", price: 1150, image: yellowCoat, alt: "Yellow double-breasted women's coat" },
  { id: "w-05", name: "Yellow Rain Jacket", description: "Water-resistant hooded jacket for drizzly winter mornings.", price: 900, image: yellowRain, alt: "Yellow hooded women's rain jacket" },
  { id: "w-06", name: "Cherry Biker Jacket", description: "A sharp red biker cut with zip details and a slim, flattering fit.", price: 1100, image: redLeather, alt: "Red women's biker leather jacket" },
  { id: "w-07", name: "Rose Pink Peacoat", description: "A soft, structured peacoat that keeps things warm and polished.", price: 1050, image: pinkCoat, alt: "Pink women's peacoat" },
  { id: "w-08", name: "Mint Rain Shell", description: "Light, breathable shell with a fresh mint colour for misty days.", price: 850, image: tealRain, alt: "Mint green women's rain shell jacket" },
  { id: "w-09", name: "Midnight Biker Jacket", description: "Our blackest biker jacket. Goes with everything, every season.", price: 1180, image: blackLeatherW, alt: "Black women's leather biker jacket" },
  { id: "w-10", name: "Electric Blue Biker", description: "A vivid blue statement jacket for those who love to stand out.", price: 1120, image: blueLeatherW, alt: "Blue women's leather biker jacket" },
];

export const menJackets = [
  { id: "m-01", name: "Snowboard Jacket Mens", description: "Built for frosty mornings, snowy trails, and all-day comfort.", price: 800, image: snowboard, alt: "Yellow and gray men's snowboarding jacket" },
  { id: "m-02", name: "Man Leather Jackets", description: "A timeless layer with a little extra character and plenty of warmth.", price: 1200, image: burgundyLeather, alt: "Burgundy men's leather jacket" },
  { id: "m-03", name: "Man Casual Jackets", description: "A lightweight everyday puffer for crisp commutes and weekend walks.", price: 1000, image: navyPuffer, alt: "Dark blue men's casual puffer jacket" },
  { id: "m-04", name: "Glacier Ski Jacket", description: "Insulated colour-block ski jacket with a snug, wind-proof hood.", price: 1150, image: bluePuffer, alt: "Blue and gray men's ski jacket" },
  { id: "m-05", name: "Summit Red Parka", description: "High-visibility red parka designed for cold mountain weather.", price: 1100, image: redPuffer, alt: "Red and gray men's winter parka" },
  { id: "m-06", name: "Shadow Leather Jacket", description: "Slim black leather jacket with a classic stand-up collar.", price: 1180, image: blackLeatherM, alt: "Black men's leather jacket" },
  { id: "m-07", name: "Tan Rider Jacket", description: "A warm tan leather layer that gets better-looking with every wear.", price: 1090, image: tanLeather, alt: "Tan men's leather jacket" },
  { id: "m-08", name: "Forest Puffer", description: "Quilted olive puffer with a high collar for long, windy walks.", price: 950, image: olivePuffer, alt: "Olive green men's puffer jacket" },
  { id: "m-09", name: "Brick Quilted Jacket", description: "Lightweight quilted jacket in a rich brick-red tone.", price: 900, image: crimsonPuffer, alt: "Brick red men's quilted jacket" },
  { id: "m-10", name: "Lagoon Down Jacket", description: "Packable teal down jacket that slips right into your travel bag.", price: 1050, image: tealPuffer, alt: "Teal men's down jacket" },
];
