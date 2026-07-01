import {
  Award,
  Beaker,
  CookingPot,
  Factory,
  HeartPulse,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sprout,
  Star,
  Trees,
  Truck
} from "lucide-react";
import type { BlogPost, Feature, Product } from "../types";

export const baseUrl = "https://rmsgold.example.com";

export const navLinks = [
  ["Products", "/products"],
  ["Story", "/our-story"],
  ["Journey", "/manufacturing-journey"],
  ["Wellness", "/health-wellness"],
  ["Gallery", "/gallery"],
  ["Blog", "/blog"],
  ["Contact", "/contact"]
] as const;

export const products: Product[] = [
  {
    name: "Cold Pressed Groundnut Oil",
    slug: "groundnut-oil",
    tone: "#c99a35",
    summary: "Golden, aromatic and deeply suited to everyday Indian cooking.",
    ingredients: "Premium selected groundnuts, traditionally pressed without heat.",
    benefits: ["Naturally rich aroma", "Good source of monounsaturated fats", "Ideal for deep and shallow frying"],
    uses: ["Traditional gravies", "Poriyal and stir fries", "Snacks and festive cooking"],
    nutrition: ["Vitamin E", "Healthy fats", "Natural antioxidants"],
    sizes: ["500 ml", "1 L", "2 L", "5 L"]
  },
  {
    name: "Pure Sesame Oil",
    slug: "sesame-oil",
    tone: "#8b5e3c",
    summary: "A heritage oil with a bold nutty profile and time-honored wellness value.",
    ingredients: "Carefully cleaned sesame seeds, wood pressed in small batches.",
    benefits: ["Traditional body strength support", "Naturally fragrant", "Loved for South Indian cuisine"],
    uses: ["Pickles", "Idli podi", "Temple-style cooking", "Oil pulling traditions"],
    nutrition: ["Sesamol", "Vitamin K", "Natural lignans"],
    sizes: ["500 ml", "1 L", "2 L"]
  },
  {
    name: "Virgin Coconut Oil",
    slug: "coconut-oil",
    tone: "#687447",
    summary: "Clean, mellow and naturally tropical for food, hair and family care.",
    ingredients: "Fresh mature coconuts pressed for natural purity.",
    benefits: ["Gentle coconut aroma", "Multipurpose family oil", "Traditionally valued for nourishment"],
    uses: ["Kerala cooking", "Baking", "Hair care", "Skin care"],
    nutrition: ["MCTs", "Lauric acid", "Plant-based energy"],
    sizes: ["250 ml", "500 ml", "1 L"]
  },
  {
    name: "Traditional Castor Oil",
    slug: "castor-oil",
    tone: "#173f2d",
    summary: "Dense, pure and crafted for traditional wellness rituals.",
    ingredients: "Selected castor seeds naturally processed with strict quality checks.",
    benefits: ["Classic home-care oil", "Thick natural texture", "Prepared without artificial preservatives"],
    uses: ["Hair rituals", "Traditional massage", "External wellness use"],
    nutrition: ["Ricinoleic acid", "Natural fatty acids", "Preservative-free"],
    sizes: ["100 ml", "250 ml", "500 ml"]
  }
];

export const features: Feature[] = [
  { title: "100% Cold Pressed", copy: "Slow extraction preserves natural aroma, color and nutrition.", Icon: Beaker },
  { title: "Chemical Free", copy: "No solvents, artificial preservatives or refinery shortcuts.", Icon: ShieldCheck },
  { title: "Traditional Wood Press", copy: "Crafted with the patience of wooden pressing and small-batch care.", Icon: Trees },
  { title: "Farm Fresh Seeds", copy: "Selected seeds are cleaned, inspected and pressed for consistency.", Icon: Sprout },
  { title: "Healthy Cooking", copy: "A natural choice for families returning to traditional Indian nutrition.", Icon: HeartPulse },
  { title: "Premium Standards", copy: "Every batch is filtered, tested, bottled and sealed with discipline.", Icon: Award }
];

export const journey = [
  { title: "Seed Selection", copy: "Only clean, mature and aroma-rich seeds enter the mill.", Icon: Sprout },
  { title: "Cleaning", copy: "Dust, stones and impurities are removed before pressing.", Icon: ShieldCheck },
  { title: "Cold Pressing", copy: "The oil is extracted slowly to avoid heat damage.", Icon: Factory },
  { title: "Natural Filtration", copy: "Sediments settle naturally for a clear, honest finish.", Icon: Leaf },
  { title: "Quality Testing", copy: "Color, fragrance, clarity and batch quality are checked.", Icon: Star },
  { title: "Bottling", copy: "Food-grade bottles protect freshness and shelf appeal.", Icon: PackageCheck },
  { title: "Packaging", copy: "Elegant labeling gives every bottle a premium shelf presence.", Icon: CookingPot },
  { title: "Delivery", copy: "Orders are prepared for homes, retailers and bulk buyers.", Icon: Truck }
];

export const reviews = [
  { name: "Priya R.", city: "Madurai", product: "Groundnut Oil", rating: 5, copy: "The aroma feels exactly like traditional home cooking. Our family switched completely after the first bottle." },
  { name: "Karthik S.", city: "Coimbatore", product: "Sesame Oil", rating: 5, copy: "Rich, clean and perfect for podi and pickles. The packaging also feels very premium." },
  { name: "Meena V.", city: "Chennai", product: "Coconut Oil", rating: 5, copy: "A pure coconut fragrance without heaviness. I use it for cooking and hair care." },
  { name: "Aarthi N.", city: "Trichy", product: "Groundnut Oil", rating: 4.9, copy: "Trustworthy quality and very consistent taste across orders." }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "benefits-of-cold-pressed-groundnut-oil",
    title: "Benefits of Cold Pressed Groundnut Oil for Indian Kitchens",
    category: "Healthy Living",
    excerpt: "Why cold pressed groundnut oil remains one of the most trusted oils for everyday Indian cooking.",
    keywords: ["Cold Pressed Groundnut Oil", "Healthy Indian Cooking Oil", "Groundnut Oil"],
    readTime: "5 min read",
    body: [
      { heading: "Natural aroma and cooking strength", copy: "Cold pressed groundnut oil keeps a fuller nutty profile because it is extracted slowly without aggressive heat or chemical refining." },
      { heading: "Suited to Indian recipes", copy: "Its balanced flavor works well for frying, tempering, gravies and snack preparations while supporting traditional food habits." },
      { heading: "How to choose a better bottle", copy: "Look for clear labeling, batch discipline, natural color, fresh aroma and a manufacturer that explains the seed-to-bottle process." }
    ]
  },
  {
    slug: "cold-pressed-vs-refined-oil",
    title: "Cold Pressed vs Refined Oil: What Families Should Know",
    category: "Traditional Oils",
    excerpt: "A practical guide to extraction methods, aroma, nutrition and everyday use.",
    keywords: ["Cold Pressed Oil", "Refined Oil", "Natural Cooking Oil"],
    readTime: "6 min read",
    body: [
      { heading: "The extraction difference", copy: "Cold pressing uses mechanical pressure at controlled temperatures. Refining often uses higher heat and multiple processing steps." },
      { heading: "Taste and freshness", copy: "Cold pressed oils usually keep more natural color and aroma, which is why they feel closer to traditional mill oil." },
      { heading: "A balanced kitchen approach", copy: "Use oils according to recipe, smoke point and flavor. For traditional Indian cooking, cold pressed oils bring both taste and identity." }
    ]
  },
  {
    slug: "health-benefits-of-sesame-oil",
    title: "Health Benefits of Sesame Oil in Traditional Nutrition",
    category: "Nutrition",
    excerpt: "Explore why sesame oil has been valued for food, rituals and wellness across generations.",
    keywords: ["Pure Sesame Oil", "Traditional Oil", "Natural Oils"],
    readTime: "4 min read",
    body: [
      { heading: "A heritage ingredient", copy: "Sesame oil has a distinct nutty aroma and a long place in South Indian kitchens, pickles and wellness practices." },
      { heading: "Naturally occurring compounds", copy: "Sesame contains lignans and antioxidants that help explain its lasting reputation in traditional food culture." },
      { heading: "Best uses", copy: "Use it for podi, pickling, tempering, massage traditions and dishes where a bold sesame note is welcome." }
    ]
  },
  {
    slug: "best-oil-for-indian-cooking",
    title: "Best Oil for Indian Cooking: Taste, Heat and Tradition",
    category: "Cooking Tips",
    excerpt: "Choose the right oil by dish, flavor profile and family preference.",
    keywords: ["Premium Cooking Oil", "Healthy Cooking Oil", "Oil Supplier India"],
    readTime: "5 min read",
    body: [
      { heading: "Match oil to recipe", copy: "Groundnut oil works beautifully for frying and gravies, sesame oil suits pickles and podi, while coconut oil gives regional dishes their signature fragrance." },
      { heading: "Respect flavor", copy: "Premium oils are ingredients, not invisible utilities. Their aroma can lift the entire plate." },
      { heading: "Buy for freshness", copy: "Choose smaller packs when usage is low, store away from heat and close the cap after every use." }
    ]
  }
];

export const faqs = [
  ["What is cold pressed oil?", "Cold pressed oil is extracted mechanically at controlled temperatures to retain natural aroma, color and nutritional character."],
  ["Does RMS Gold use preservatives?", "RMS Gold positions its oils as chemical free and without artificial preservatives."],
  ["Which oil is best for Indian cooking?", "Groundnut oil is excellent for everyday frying and cooking, sesame oil is ideal for traditional flavors, and coconut oil suits regional recipes."],
  ["Do you support bulk orders?", "Yes, the contact page includes paths for dealer enquiries, retail enquiries and bulk orders."]
];
