export const SITE = {
  name: "Alsality Group",
  brandDisplay: "Alsality Group",
  tagline:
    "A diversified group building hospitality brands, creative marketing, and memorable dining experiences across Qatar.",
  phone: "+974 0000 0000",
  email: "info@Alsilaty.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Who We Are", href: "#about" },
 
  { label: "Our Brands", href: "#why-us" },

  { label: "Contact", href: "#contact" },
] as const;

export const HERO_STATS = [
  { value: "12 +", label: "Years of Experience" },
  { value: "7+", label: "  Companies  " },
  { value: "20+", label: " Brands" },
] as const;

export const OFFERINGS = [
  {
    id: "01",
    title: "Concept Development",
    description:
      "Creating distinctive food and beverage concepts that combine market insight, customer experience, and operational strategy to build brands with long-term potential.",
    image: "/offers/luxury-residences.jpg",
  },
  {
    id: "02",
    title: "Operational Management",
    description:
      "Delivering efficient day-to-day restaurant operations through quality control, team management, performance optimization, and service excellence.",
    image: "/offers/eco-green.jpg",
  },
  {
    id: "03",
    title: "Brand Positioning",
    description:
      "Building strong and memorable brand identities that connect with customers, strengthen market presence, and support sustainable business growth.",
    image: "/offers/vacation-homes.jpg",
  },
] as const;

export const BRANDS_SECTION = {
  intro:
    "We help restaurant brands scale through market positioning, performance optimization, customer engagement strategies, and sustainable growth planning. ",
  closing:
    "",
} as const;

export type PartnerLogo = {
  id: string;
  description: string;
  image: string;
  className?: string;
};

/**
 * Logo images for the marquee below Our Brands.
 * When empty, brand names from SERVICES are shown as placeholders until you add entries here.
 */
export const PARTNER_LOGOS: PartnerLogo[] = [];

export const ATHAR_MARKETING = {
  badge: "Athar Marketing",
  heading: "CREATING BRANDS THAT CONNECT, INSPIRE & GROW",
  description:
    "Athar Marketing is a creative agency specializing in branding, content production, photography, videography, and digital marketing. We help businesses build meaningful connections with their audiences through compelling storytelling, innovative campaigns, and high-quality visual content.",
  showcase: [
    {
      category: "Commercial Production",
      image: "/10.jpg",
      alt: "Commercial production",
    },
    {
      category: "Food Photography",
      image: "/11.jpg",
      alt: "Food photography",
    },
    {
      category: "Video Production",
      image: "/12.jpg",
      alt: "Video production",
    },
    {
      category: "Brand Campaigns",
      image: "/13.jpg",
      alt: "Brand campaigns",
    },
    {
      category: "Content Creation",
      image: "/14.jpg",
      alt: "Content creation",
    },
    {
      category: "Social Media Production",
      image: "/15.jpg",
      alt: "Social media production",
    },
    {
      category: "Professional Photography",
      image: "/16.jpg",
      alt: "Professional photography",
    },
    {
      category: "Creative Collaboration",
      image: "/17.jpg",
      alt: "Creative collaboration",
    },
  ],
} as const;

export const SERVICES = [
  {
    title: "WOOP",
    shortDescription:
      "A dynamic food concept offering convenient, flavorful meals crafted for customers seeking quality, speed,  ",
    details:
      "and great taste in their everyday dining experience.",
  },
  {
    title: "BENNY BUN",
    shortDescription:
      "A contemporary takeaway brand known for its fresh ingredients, signature creations, ",
    details:
      "and accessible menu designed for customers on the go.",
  },
  {
    title: "JONNYS",
    shortDescription:
      "A casual food concept focused on delivering satisfying meals, friendly service, ",
    details:
      "and a welcoming experience that customers can enjoy anytime.",
  },
  {
    title: "EATFIT",
    shortDescription:
      "A healthy food brand dedicated to nutritious, balanced meals made with carefully selected ingredients. ",
    details:
      "EatFit helps customers maintain an active lifestyle without compromising on flavor, convenience, or quality.",
  },
  {
    title: "BLURRs",
    shortDescription:
      "A modern café experience centered around specialty coffee, premium beverages, and a contemporary atmosphere. ",
    details:
      "Blurr Cafe brings together quality craftsmanship, carefully sourced ingredients.",
  },
  {
    title: "CRUST",
    shortDescription:
      "An artisan bakery and pizza concept built on handcrafted dough, bold flavors, ",
    details:
      "and a warm, neighborhood atmosphere that keeps guests coming back.",
  },
  {
    title: "FORNO",
    shortDescription:
      "A wood-fired Italian dining concept celebrating authentic recipes, premium ingredients, ",
    details:
      "and the timeless craft of open-flame cooking in a refined setting.",
  },
  {
    title: "SALT HOUSE",
    shortDescription:
      "A coastal-inspired restaurant brand offering fresh seafood, seasonal produce, ",
    details:
      "and relaxed elegance for memorable dining experiences by the water.",
  },
  {
    title: "MAYAM",
    shortDescription:
      "A vibrant Middle Eastern kitchen bringing bold spices, shared plates, ",
    details:
      "and contemporary hospitality to every table it serves.",
  },
] as const;

function brandMonogram(title: string): string {
  const words = title.trim().split(/\s+/);
  if (words.length > 1) {
    return words
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }
  return title.slice(0, 2).toUpperCase();
}

export const HERO_FEATURED_BRANDS = SERVICES.map((brand) => ({
  id: brand.title,
  label: brand.title,
  monogram: brandMonogram(brand.title),
  /** Optional path under public/ e.g. /brands/woop.svg */
  logo: undefined as string | undefined,
}));

export const ABOUT_STATS = [
  { value: "7+", label: "Companies" },
  { value: "20+", label: "Brands & Partners" },
  { value: "120+", label: "Team Members" },
  { value: "12+", label: "Years of Experience" },
] as const;

export const IMAGES = {
  hero: "/2.jpg",
  about: "/6.jpg",
  contact: "/3.jpg",
} as const;
