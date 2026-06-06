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
    icon: "/concept.png",
    description:
      "Creating distinctive food and beverage concepts that combine market insight, customer experience, and operational strategy to build brands with long-term potential.",
    image: "/7.png",
  },
  {
    id: "02",
    title: "Operational Management",
    icon: "/operation.png",
    description:
      "Delivering efficient day-to-day restaurant operations through quality control, team management, performance optimization, and service excellence.",
    image: "/offers/eco-green.jpg",
  },
  {
    id: "03",
    title: "Brand Positioning",
    icon: "/positioning.png",
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

/** Encode public asset paths that may contain spaces (e.g. collection folder names). */
function publicAsset(...segments: string[]) {
  return `/${segments.map(encodeURIComponent).join("/")}`;
}

/**
 * Logo images for the marquee below Our Brands (Full Plate collection).
 */
export const PARTNER_LOGOS: PartnerLogo[] = [
  {
    id: "duo",
    description: "Duo",
    image: publicAsset("Fullplate collection", "Duo.png"),
    className: "h-11 w-auto max-w-[180px] object-contain tablet:h-12",
  },
  {
    id: "humpo",
    description: "Humpo",
    image: publicAsset("Fullplate collection", "humpo.png"),
    className: "h-11 w-auto max-w-[180px] object-contain tablet:h-12",
  },
  { id: "brorito", description: "Brorito", image: publicAsset("Fullplate collection", "Brorito.png") },
  { id: "fullplate", description: "Full Plate", image: publicAsset("Fullplate collection", "fullplate.png") },
  { id: "eatfit", description: "EatFit", image: publicAsset("Fullplate collection", "eatfit.png") },
  {
    id: "bruno",
    description: "Bruno",
    image: publicAsset("Fullplate collection", "Bruno.png"),
    className: "h-11 w-auto max-w-[180px] object-contain tablet:h-12",
  },
  { id: "esora", description: "Esora", image: publicAsset("Fullplate collection", "esora.png") },
  { id: "munch", description: "Munch", image: publicAsset("Fullplate collection", "munch.png") },
  { id: "jahnnys", description: "Jonnys", image: publicAsset("Fullplate collection", "jahnnys.png") },
  {
    id: "athr",
    description: "Athr",
    image: publicAsset("Fullplate collection", "athr.png"),
    className: "h-11 w-auto max-w-[180px] object-contain tablet:h-12",
  },
];

export const ATHAR_MARKETING = {
  badge: "Athr Marketing",
  heading: "CREATING BRANDS THAT CONNECT, INSPIRE & GROW",
  description:
    "Athr Marketing is a creative agency specializing in branding, content production, photography, videography, and digital marketing. We help businesses build meaningful connections with their audiences through compelling storytelling, innovative campaigns, and high-quality visual content.",
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
    logo: publicAsset("Abduallah collection", "woop.png"),
    shortDescription:
      "A dynamic food concept offering convenient, flavorful meals crafted for customers seeking quality, speed,  ",
    details:
      "and great taste in their everyday dining experience.",
  },
  {
    title: "BENNY BUN",
    logo: publicAsset("Abduallah collection", "benny bun.png"),
    shortDescription:
      "A contemporary takeaway brand known for its fresh ingredients, signature creations, ",
    details:
      "and accessible menu designed for customers on the go.",
  },
  {
    title: "BLUANA",
    logo: publicAsset("Abduallah collection", "bluana.png"),
    shortDescription:
      "A modern café experience centered around specialty coffee, premium beverages, and a contemporary atmosphere. ",
    details:
      "Bluana brings together quality craftsmanship and carefully sourced ingredients.",
  },
  {
    title: "TENDIES",
    logo: publicAsset("Abduallah collection", "tendies.png"),
    shortDescription:
      "A bold comfort-food concept built around crispy chicken tenders, signature sauces, ",
    details:
      "and craveable flavors designed for everyday indulgence.",
  },
  {
    title: "WINGS",
    logo: publicAsset("Abduallah collection", "wings.png"),
    shortDescription:
      "A wings-focused brand delivering bold flavors, premium ingredients, ",
    details:
      "and a fun dining experience built for sharing and satisfaction.",
  },
  {
    title: "ATHR",
    logo: publicAsset("Abduallah collection", "athr.png"),
    shortDescription:
      "A creative-led brand experience bringing storytelling, visual identity, and bold campaigns ",
    details:
      "that help partners connect with audiences and grow their market presence.",
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
  logo: brand.logo,
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
