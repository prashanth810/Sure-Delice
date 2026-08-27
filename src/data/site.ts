import heroBanner from "@/assets/sura-interior-booths.png";
import interiorDining from "@/assets/sura-interior-dining.png";
import barLounge from "@/assets/sura-bar-lounge.png";
import boothTable from "@/assets/sura-booth-table.png";
import logoWall from "@/assets/sura-logo-wall.png";
import buffetSpread from "@/assets/sura-buffet.png";
import celebrationTable from "@/assets/sura-celebration-table.png";
import familyLongTable from "@/assets/sura-family-long-table.png";
import muttonBiryani from "@/assets/sura-mutton-biryani.png";
import kebabPlatter from "@/assets/sura-kebab-platter.png";
import prawnsStarter from "@/assets/sura-prawns-starter.png";
import mocktailLayered from "@/assets/sura-mocktail-layered.png";
import mocktailRed from "@/assets/sura-mocktail-red.png";
import dessertSizzler from "@/assets/sura-dessert-sizzler.png";

export const images = {
  heroBanner: heroBanner,
  heroBiryani: muttonBiryani,
  interior: interiorDining,
  banquet: familyLongTable,
  celebration: celebrationTable,
  ambience: barLounge,
  booth: boothTable,
  buffet: buffetSpread,
  kebabs: kebabPlatter,
  prawns: prawnsStarter,
  dessert: dessertSizzler,
  mocktail: mocktailLayered,
  mocktailRed: mocktailRed,
  exterior: logoWall,
};

export const restaurant = {
  name: "Sura Delice",
  tagline: "Restaurant & Banquets",
  address: "16-7-390/A, Azampura, Malakpet, Hyderabad, Telangana 500024",
  phone: "+91 98491 92830",
  phoneHref: "tel:+919849192830",
  hours: "12:00 PM – 2:00 AM",
  mapsQuery: "Sura+Delice+Restaurant+%26+Banquets+Hyderabad",
  rating: "4.0 / 5",
  reviewCount: "1,300+",
  banquet: {
    seated: "Seated dining for groups",
    floating: "Floating receptions & get-togethers",
  },
};

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${restaurant.mapsQuery}`;
export const mapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${restaurant.mapsQuery}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${restaurant.mapsQuery}&output=embed`;
export const mapsReviewsUrl = mapsPlaceUrl;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/banquet", label: "Banquet" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  ...navLinks,
  { to: "/events", label: "Events" },
  { to: "/reservations", label: "Reservations" },
  { to: "/order-online", label: "Order Online" },
] as const;

export const cuisines = [
  {
    title: "Mutton Biryani",
    description:
      "Slow-cooked biryani served with raita and salan — a house favourite.",
    image: images.heroBiryani,
    alt: "Mutton biryani served with raita and salan at Sura Delice",
    tag: "Signature",
  },
  {
    title: "Sura Special Chicken Kebab",
    description: "Grilled chicken kebabs served hot with onion and chutney.",
    image: images.kebabs,
    alt: "Sura Special Chicken Kebab platter with onions and chutney",
    tag: "Starters",
  },
  {
    title: "Prawns Vepudu",
    description: "Prawns tossed with spices and served as a starter.",
    image: images.prawns,
    alt: "Prawns Vepudu starter served on a plate",
    tag: "Seafood",
  },
  {
    title: "Buffet Dining",
    description:
      "A laid-out buffet spread for family lunches, group dining and events.",
    image: images.buffet,
    alt: "Buffet spread laid out at Sura Delice",
    tag: "Buffet",
  },
  {
    title: "Desserts",
    description: "Desserts to finish the meal, including Apricot Delight.",
    image: images.dessert,
    alt: "Dessert served with ice cream at Sura Delice",
    tag: "Desserts",
  },
  {
    title: "Beverages & Mocktails",
    description: "Refreshing beverages and colourful mocktail-style drinks.",
    image: images.mocktail,
    alt: "Colourful mocktail-style drinks served at Sura Delice",
    tag: "Drinks",
  },
];

export const menuSections = [
  {
    id: "soups",
    title: "Soups",
    items: [
      { name: "Cream of Tomato Soup", note: "Served warm" },
      { name: "Veg Soups", note: "Vegetarian selection" },
      { name: "Chicken Soups", note: "Non-veg selection" },
    ],
  },
  {
    id: "starters",
    title: "Starters & Kebabs",
    items: [
      { name: "Sura Special Chicken Kebab", note: "House speciality" },
      { name: "Chicken Starters", note: "Selection of chicken starters" },
      { name: "Prawns Vepudu", note: "Prawns tossed with spices" },
      { name: "Veg Starters", note: "Vegetarian selection" },
    ],
  },
  {
    id: "seafood",
    title: "Fish & Seafood",
    items: [
      { name: "Godavari Chepa Vepudu", note: "Fish fry speciality" },
      { name: "Fish Pepper", note: "Pepper-tossed fish" },
      { name: "Prawns", note: "Prawns preparations" },
    ],
  },
  {
    id: "biryani",
    title: "Biryani & Rice",
    items: [
      { name: "Mutton Biryani", note: "House signature" },
      { name: "Chicken Biryani", note: "Served with raita and salan" },
      { name: "Veg Biryani", note: "Vegetarian" },
      { name: "Rice Dishes", note: "Selection of rice preparations" },
    ],
  },
  {
    id: "vegetarian",
    title: "Vegetarian",
    items: [
      { name: "Vegetarian Starters", note: "Veg selection" },
      { name: "Vegetarian Main Course", note: "Veg curries and mains" },
      { name: "Vegetarian Rice", note: "Veg rice preparations" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts & Beverages",
    items: [
      { name: "Apricot Delight", note: "Dessert" },
      { name: "Caramel Custard", note: "Dessert" },
      { name: "Desserts", note: "Selection of desserts" },
      { name: "Soft Drinks", note: "Chilled soft drinks" },
      {
        name: "Mocktail-Style Drinks",
        note: "Refreshing colourful beverages",
      },
    ],
  },
];

export const galleryCategories = [
  "All",
  "Food",
  "Drinks",
  "Restaurant",
  "Banquet",
  "Events",
  "Ambience",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
}[] = [
  {
    src: images.heroBiryani,
    alt: "Mutton biryani served with raita and salan",
    category: "Food",
  },
  {
    src: images.kebabs,
    alt: "Sura Special Chicken Kebab platter",
    category: "Food",
  },
  { src: images.prawns, alt: "Prawns Vepudu starter", category: "Food" },
  { src: images.buffet, alt: "Buffet spread laid out for guests", category: "Food" },
  {
    src: images.dessert,
    alt: "Dessert served with ice cream",
    category: "Food",
  },
  {
    src: images.mocktail,
    alt: "Colourful mocktail-style drinks",
    category: "Drinks",
  },
  {
    src: images.mocktailRed,
    alt: "Refreshing mocktail-style drink served at the table",
    category: "Drinks",
  },
  {
    src: images.interior,
    alt: "Dining hall interior at Sura Delice",
    category: "Restaurant",
  },
  {
    src: images.heroBanner,
    alt: "Booth seating area inside the restaurant",
    category: "Restaurant",
  },
  {
    src: images.booth,
    alt: "Booth table set for a small family group",
    category: "Restaurant",
  },
  {
    src: images.banquet,
    alt: "Long-table dining for a large family group",
    category: "Banquet",
  },
  {
    src: images.celebration,
    alt: "Table decorated with balloons for a celebration",
    category: "Events",
  },
  {
    src: images.ambience,
    alt: "Warm lounge and counter ambience at Sura Delice",
    category: "Ambience",
  },
  {
    src: images.exterior,
    alt: "Sura Delice signage lit up inside the restaurant",
    category: "Ambience",
  },
];

export const banquetOccasions = [
  "Birthday Celebrations",
  "Festival Celebrations",
  "Family Functions",
  "Get-Togethers",
  "Group Lunches",
  "Office & Business Lunches",
  "Private Dining",
  "Special Occasions",
];

export const banquetFeatures = [
  {
    title: "Banquet & Group Dining",
    description:
      "Indoor space for celebrations, family functions and group gatherings.",
  },
  {
    title: "Long-Table Dining",
    description: "Long tables for larger groups dining together.",
  },
  {
    title: "Private Dining",
    description: "A quieter setting for smaller private gatherings.",
  },
  {
    title: "Veg & Non-Veg Catering",
    description: "Multi cuisine veg and non-veg menus, including buffet dining.",
  },
];

export const eventTypes = [
  {
    title: "Birthday Celebrations",
    description:
      "Celebrate special moments in a warm and festive dining atmosphere.",
    image: images.celebration,
    alt: "Table decorated with balloons for a birthday celebration",
  },
  {
    title: "Festival Celebrations",
    description: "Festive dining for families and friends through the season.",
    image: images.banquet,
    alt: "Family dining together at a long decorated table",
  },
  {
    title: "Banquet Gatherings",
    description: "Long-table and group dining with veg and non-veg catering.",
    image: images.banquet,
    alt: "Long-table banquet dining setup",
  },
  {
    title: "Family Gatherings",
    description:
      "Family lunches, family dinners and small family get-togethers.",
    image: images.interior,
    alt: "Dining hall arranged for a family gathering",
  },
  {
    title: "Office & Business Lunches",
    description: "Group lunches and business meals in comfortable seating.",
    image: images.booth,
    alt: "Booth seating set up for a business lunch",
  },
  {
    title: "Special Occasions",
    description: "Private dining and celebrations in a festive setting.",
    image: images.ambience,
    alt: "Warm festive ambience inside Sura Delice",
  },
];

export const reviewCategories = [
  "Food",
  "Service",
  "Ambience",
  "Banquet",
  "Family Dining",
] as const;

export const highlights = [
  {
    title: "Multi Cuisine Kitchen",
    description:
      "Biryani, kebabs, seafood, vegetarian dishes and desserts from one kitchen.",
  },
  {
    title: "Banquet & Group Dining",
    description:
      "Celebrations, long-table dining and private gatherings with in-house catering.",
  },
  {
    title: "Open Till 2 AM",
    description: "Dine in daily from 12:00 PM to 2:00 AM.",
  },
  {
    title: "Delivery & Takeaway",
    description: "Order your favourites for pickup or home delivery.",
  },
];
