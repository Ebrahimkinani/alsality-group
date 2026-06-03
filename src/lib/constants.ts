export const SITE = {
  name: "Alsality Group",
  brandDisplay: "Alsality Group",
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
    title: "Restaurant Development",
    description:
      "We transform ideas into successful hospitality concepts through strategic planning, brand development, menu engineering, interior experience consultation, and operational design.",
    image: "/offers/luxury-residences.jpg",
  },
  {
    id: "02",
    title: "Restaurant Operationss",
    description:
      "We provide comprehensive operational management, ensuring consistency, efficiency, quality control, staff development, and exceptional customer experiences across every location.",
    image: "/offers/eco-green.jpg",
  },
  {
    id: "03",
    title: "Brand Growth & Expansion",
    description:
      "Explore our curated collection of unique vacation homes, offering distinctive architecture and exceptional locations for unforgettable stays.",
    image: "/offers/vacation-homes.jpg",
  },
] as const;

export const BRANDS_SECTION = {
  intro:
    "We help restaurant brands scale through market positioning, performance optimization, customer engagement strategies, and sustainable growth planning. ",
  closing:
    "",
} as const;

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

export const PROPERTIES = [
  {
    badge: "For Investment",
    location: "Bel Air, LA",
    title: "The One",
    beds: 6,
    baths: 4,
    sqft: "2,780 sq.ft",
    price: "$690,000",
    image:
      "https://framerusercontent.com/images/M8fPoY8PswRWbp36vtYwkWZHkmo.jpg",
  },
  {
    badge: "For Sell",
    location: "Bel Air, LA",
    title: "Billionaire Mansion",
    beds: 5,
    baths: null,
    sqft: "3,800 sq.ft",
    price: "$500,000",
    image:
      "https://framerusercontent.com/images/K3lTUnsHMJPPzmVtq4wer4cvpIE.jpg",
  },
  {
    badge: "For Rent",
    location: "Beverly Hills, CA",
    title: "The Beverly House",
    beds: 3,
    baths: 2,
    sqft: "1,500 sq.ft",
    price: "$290,000",
    image:
      "https://framerusercontent.com/images/K9p5lGloGmcwXimIajO053M8QA.jpg",
  },
  {
    badge: "For Rent",
    location: "Beverly Hills, CA",
    title: "Palazzo di Amore",
    beds: 4,
    baths: 2,
    sqft: "2,100 sq.ft",
    price: "$490,000",
    image:
      "https://framerusercontent.com/images/BVa676Qcx73rJphRua2dXkWNAs.jpg",
  },
  {
    badge: "For Investment",
    location: "Holmby Hills, LA",
    title: "The Manor",
    beds: 7,
    baths: 5,
    sqft: "3,100 sq.ft",
    price: "$482,000",
    image:
      "https://framerusercontent.com/images/5htHiNR5LKBqBURUaUm2rZUlLM.jpg",
  },
  {
    badge: "For Sell",
    location: "Upper East Side, NY",
    title: "The Penthouse at Central Park Tower",
    beds: 2,
    baths: null,
    sqft: "2,200 sq.ft",
    price: "$298,000",
    image:
      "https://framerusercontent.com/images/5j9m2jqbiSJDp56NHoSIQkB2YaU.jpg",
  },
] as const;

export const ABOUT_STATS = [
  { value: "7+", label: "Companies" },
  { value: "20+", label: "Brands & Partners" },
  { value: "120+", label: "Team Members" },
  { value: "12+", label: "Years of Experience" },
] as const;

export const AGENTS = [
  {
    name: "Sophia Chen",
    role: "Luxury Specialist",
    rating: 5,
    image:
      "https://framerusercontent.com/images/70vyypRi1KNFqhUIRRXm76uj98.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Investment Advisor",
    rating: 5,
    image:
      "https://framerusercontent.com/images/aIxx1WpEvRciZyt4ZtxxEyc.jpg",
  },
  {
    name: "Isabella Moore",
    role: "Rental Expert",
    rating: 5,
    image:
      "https://framerusercontent.com/images/n14MFK4DU5H0hb4MTYmtuAZqbE.jpg",
  },
  {
    name: "Olivia Bennett",
    role: "Senior Agent",
    rating: 5,
    image:
      "https://framerusercontent.com/images/nLFFMJtHilTRgtclZRKdSmfdAsg.jpg",
  },
  {
    name: "Charlotte Hayes",
    role: "Design Consultant",
    rating: 5,
    image:
      "https://framerusercontent.com/images/IAU2BSodEZAzSqJjl5B2xm2bys.jpg",
  },
  {
    name: "James Wright",
    role: "Property Analyst",
    rating: 5,
    image:
      "https://framerusercontent.com/images/LJMyvITSYFBGctUUSfHSRfjsZ0.jpg",
  },
] as const;

export const FAQS = [
  {
    question: "What is the process for buying a property?",
    answer:
      "The process involves selecting the right property, negotiating terms with the agent, signing the contract, and completing the payment. Our professional agents will guide you through every step to ensure a smooth experience.",
  },
  {
    question: "How do I determine how much I can afford?",
    answer:
      "We recommend consulting with a mortgage specialist who can evaluate your income, expenses, and credit score to provide tailored advice.",
  },
  {
    question: "What documents are required for renting a property?",
    answer:
      "Typically, you will need to provide identification, proof of income (e.g., pay stubs or bank statements), and rental history. Some landlords may also require a security deposit.",
  },
  {
    question: "Can I terminate a lease agreement early?",
    answer:
      "This depends on the terms of your lease agreement. We recommend reviewing the early termination clauses before signing and discussing options with your landlord or agent.",
  },
  {
    question: "What are the risks of investing in real estate?",
    answer:
      "Real estate investment risks may include market fluctuations, maintenance costs, and inconsistent occupancy rates. We offer professional market analysis to help you minimize these risks.",
  },
  {
    question: "How do I choose the right property to invest in?",
    answer:
      "Based on your budget, target returns, and the growth potential of the area, we provide tailored property recommendations and detailed analysis reports.",
  },
  {
    question: "Do high-end properties support virtual tours?",
    answer:
      "Yes, most of our luxury listings include virtual tour options, allowing you to conveniently explore property details online.",
  },
  {
    question: "How long does the property transfer process take?",
    answer:
      "Generally, it takes 30-60 days, depending on local regulations and loan approval timelines. We will assist you throughout the process to ensure everything goes smoothly.",
  },
] as const;

export const IMAGES = {
  hero: "/2.jpg",
  about: "/6.jpg",
  cta: "https://framerusercontent.com/images/eEUcQKK8JFWWIDV51LEEBCOZEw.jpg",
  contact: "/3.jpg",
} as const;
