import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Oversized Wool Blazer",
    tagline: "A timeless oversized blazer for every occasion.",
    price: 189,
    originalPrice: 249,
    rating: 4.8,
    reviewCount: 124,
    category: "Women",
    description:
      "A timeless oversized blazer crafted from premium Italian wool. Features a relaxed silhouette with padded shoulders and a single-button closure. Perfect for layering over casual and formal outfits alike.",
    details: [
      "80% Italian Wool, 20% Polyester",
      "Relaxed silhouette with padded shoulders",
      "Single-button closure",
      "Dry clean only",
    ],
    material: "80% Italian Wool, 20% Polyester",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isTrending: true,
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Camel",
        hex: "#C4A882",
        images: [
          "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Navy",
        hex: "#1B2A4A",
        images: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Slim Fit Cotton Shirt",
    tagline: "Classic slim-fit shirt in premium Egyptian cotton.",
    price: 69,
    rating: 4.5,
    reviewCount: 89,
    category: "Men",
    description:
      "A classic slim-fit shirt in premium Egyptian cotton. Features a spread collar, French cuffs, and a tailored fit through the body. An essential piece for every wardrobe.",
    details: [
      "100% Egyptian Cotton",
      "Spread collar with French cuffs",
      "Tailored fit",
      "Machine washable at 30°C",
    ],
    material: "100% Egyptian Cotton",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isTrending: true,
    colors: [
      {
        name: "White",
        hex: "#FFFFFF",
        images: [
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Light Blue",
        hex: "#B3D4E8",
        images: [
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=600&h=800&fit=crop",
        ],
      },
    ],
  },
  {
    id: "3",
    name: "High-Waisted Trousers",
    tagline: "Elegant high-waisted trousers with wide-leg silhouette.",
    price: 129,
    originalPrice: 159,
    rating: 4.6,
    reviewCount: 67,
    category: "Women",
    description:
      "Elegant high-waisted trousers with a wide-leg silhouette. Features pressed front creases and side pockets. A sophisticated choice for both office and evening wear.",
    details: [
      "65% Polyester, 30% Viscose, 5% Elastane",
      "Wide-leg silhouette with pressed creases",
      "Side pockets",
      "High-waisted design",
    ],
    material: "65% Polyester, 30% Viscose, 5% Elastane",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Beige",
        hex: "#D4C5B2",
        images: [
          "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop",
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Cashmere Crew Sweater",
    tagline: "Luxuriously soft cashmere sweater with classic crew neck.",
    price: 219,
    rating: 4.9,
    reviewCount: 203,
    category: "Men",
    description:
      "Luxuriously soft cashmere sweater with a classic crew neckline. Ribbed cuffs and hem provide a clean finish. An investment piece that gets softer with every wear.",
    details: [
      "100% Grade-A Mongolian Cashmere",
      "Classic crew neckline",
      "Ribbed cuffs and hem",
      "Hand wash recommended",
    ],
    material: "100% Grade-A Mongolian Cashmere",
    sizes: ["S", "M", "L", "XL"],
    isTrending: true,
    colors: [
      {
        name: "Charcoal",
        hex: "#36454F",
        images: [
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Cream",
        hex: "#FFFDD0",
        images: [
          "https://images.unsplash.com/photo-1434389677669-e08b4cda3a08?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Burgundy",
        hex: "#722F37",
        images: [
          "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=800&fit=crop",
        ],
      },
    ],
  },
  {
    id: "5",
    name: "Leather Crossbody Bag",
    tagline: "Sleek crossbody bag crafted from full-grain Italian leather.",
    price: 159,
    rating: 4.7,
    reviewCount: 156,
    category: "Accessories",
    description:
      "A sleek crossbody bag crafted from full-grain Italian leather. Features an adjustable strap, magnetic closure, and interior card slots. The perfect everyday companion.",
    details: [
      "Full-grain Italian leather with cotton lining",
      "Adjustable strap",
      "Magnetic closure",
      "Interior card slots",
    ],
    material: "Full-grain Italian leather",
    sizes: ["M"],
    isTrending: true,
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Tan",
        hex: "#D2B48C",
        images: [
          "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop",
        ],
      },
    ],
  },
  {
    id: "6",
    name: "Kids Organic T-Shirt",
    tagline: "Comfortable and eco-friendly organic cotton t-shirt.",
    price: 29,
    rating: 4.4,
    reviewCount: 45,
    category: "Kids",
    description:
      "A comfortable and eco-friendly t-shirt made from 100% organic cotton. Soft, breathable, and perfect for everyday play. Available in fun colors.",
    details: [
      "100% GOTS Certified Organic Cotton",
      "Soft and breathable",
      "Perfect for everyday play",
      "Machine washable",
    ],
    material: "100% GOTS Certified Organic Cotton",
    sizes: ["S", "M", "L"],
    isNew: true,
    colors: [
      {
        name: "White",
        hex: "#FFFFFF",
        images: [
          "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Navy",
        hex: "#1B2A4A",
        images: [
          "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Red",
        hex: "#C41E3A",
        images: [
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
        ],
      },
    ],
  },
  {
    id: "7",
    name: "Tailored Wool Coat",
    tagline: "Statement coat in double-faced wool with minimalist design.",
    price: 349,
    originalPrice: 449,
    rating: 4.9,
    reviewCount: 87,
    category: "Women",
    description:
      "A statement coat in double-faced wool. Features a minimalist design with clean lines, notched lapels, and a belted waist. The epitome of understated elegance.",
    details: [
      "90% Virgin Wool, 10% Cashmere",
      "Double-faced wool construction",
      "Notched lapels with belted waist",
      "Professional dry clean",
    ],
    material: "90% Virgin Wool, 10% Cashmere",
    sizes: ["S", "M", "L", "XL"],
    isTrending: true,
    colors: [
      {
        name: "Camel",
        hex: "#C4A882",
        images: [
          "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop",
        ],
      },
    ],
  },
  {
    id: "8",
    name: "Relaxed Fit Denim",
    tagline: "Classic relaxed-fit denim from premium Japanese selvedge.",
    price: 99,
    rating: 4.6,
    reviewCount: 134,
    category: "Men",
    description:
      "Classic relaxed-fit denim crafted from premium Japanese selvedge fabric. Features a mid-rise waist and a straight leg. Designed to develop a unique patina over time.",
    details: [
      "100% Japanese Selvedge Cotton Denim, 14oz",
      "Mid-rise waist with straight leg",
      "Develops unique patina over time",
      "Classic five-pocket styling",
    ],
    material: "100% Japanese Selvedge Cotton Denim",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Indigo",
        hex: "#3F5277",
        images: [
          "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Light Wash",
        hex: "#A8B8C8",
        images: [
          "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&h=800&fit=crop",
        ],
      },
    ],
  },
  {
    id: "9",
    name: "Silk Blend Scarf",
    tagline: "Luxurious silk-wool blend scarf with herringbone pattern.",
    price: 79,
    rating: 4.3,
    reviewCount: 38,
    category: "Accessories",
    description:
      "A luxurious scarf in a silk-wool blend. Lightweight yet warm, with a subtle herringbone pattern. The perfect finishing touch to any outfit.",
    details: [
      "60% Silk, 40% Merino Wool",
      "Subtle herringbone pattern",
      "Lightweight yet warm",
      "Dry clean recommended",
    ],
    material: "60% Silk, 40% Merino Wool",
    sizes: ["M"],
    isNew: true,
    colors: [
      {
        name: "Ivory",
        hex: "#FFFFF0",
        images: [
          "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Grey",
        hex: "#808080",
        images: [
          "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Burgundy",
        hex: "#722F37",
        images: [
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop",
        ],
      },
    ],
  },
  {
    id: "10",
    name: "Kids Denim Jacket",
    tagline: "Cool denim jacket for little trendsetters.",
    price: 59,
    originalPrice: 79,
    rating: 4.5,
    reviewCount: 52,
    category: "Kids",
    description:
      "A cool denim jacket for little trendsetters. Features classic button closure, chest pockets, and a slightly oversized fit. Built to last through all adventures.",
    details: [
      "100% Cotton Denim, pre-washed",
      "Classic button closure",
      "Chest pockets",
      "Slightly oversized fit",
    ],
    material: "100% Cotton Denim",
    sizes: ["S", "M", "L"],
    colors: [
      {
        name: "Blue",
        hex: "#4A7CAC",
        images: [
          "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Light Wash",
        hex: "#A8B8C8",
        images: [
          "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&h=800&fit=crop",
        ],
      },
    ],
  },
  {
    id: "11",
    name: "Merino Polo Shirt",
    tagline: "Refined polo in fine merino wool.",
    price: 89,
    rating: 4.7,
    reviewCount: 76,
    category: "Men",
    description:
      "A refined polo shirt in fine merino wool. Naturally temperature-regulating and wrinkle-resistant. Transitions effortlessly from casual to smart-casual.",
    details: [
      "100% Extra-Fine Merino Wool, 16.5 micron",
      "Temperature-regulating",
      "Wrinkle-resistant",
      "Hand wash or dry clean",
    ],
    material: "100% Extra-Fine Merino Wool",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      {
        name: "Navy",
        hex: "#1B2A4A",
        images: [
          "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "White",
        hex: "#FFFFFF",
        images: [
          "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&h=800&fit=crop",
        ],
      },
    ],
  },
  {
    id: "12",
    name: "Linen Midi Dress",
    tagline: "Effortlessly chic midi dress in pure linen.",
    price: 139,
    rating: 4.8,
    reviewCount: 93,
    category: "Women",
    description:
      "An effortlessly chic midi dress in pure linen. Features a V-neckline, cinched waist, and flowing skirt. The ultimate summer wardrobe staple.",
    details: [
      "100% European Linen",
      "V-neckline with cinched waist",
      "Flowing skirt",
      "Machine washable",
    ],
    material: "100% European Linen",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isTrending: true,
    colors: [
      {
        name: "White",
        hex: "#FFFFFF",
        images: [
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Olive",
        hex: "#708238",
        images: [
          "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=800&fit=crop",
        ],
      },
    ],
  },
  {
    id: "13",
    name: "Canvas Sneakers",
    tagline: "Minimalist canvas sneakers with vulcanized rubber sole.",
    price: 79,
    rating: 4.4,
    reviewCount: 201,
    category: "Accessories",
    description:
      "Minimalist canvas sneakers with a vulcanized rubber sole. Clean design that pairs with everything. Features cushioned insole for all-day comfort.",
    details: [
      "Canvas upper with rubber sole",
      "Cotton lining",
      "Cushioned insole",
      "Vulcanized rubber sole",
    ],
    material: "Canvas",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      {
        name: "White",
        hex: "#FFFFFF",
        images: [
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=800&fit=crop",
        ],
      },
    ],
  },
  {
    id: "14",
    name: "Kids Knit Cardigan",
    tagline: "Cozy knit cardigan for children.",
    price: 45,
    rating: 4.6,
    reviewCount: 31,
    category: "Kids",
    description:
      "A cozy knit cardigan for children, made from soft organic cotton. Button-front closure with ribbed cuffs. Perfect for layering in cooler weather.",
    details: [
      "100% Organic Cotton Knit",
      "Button-front closure",
      "Ribbed cuffs",
      "Perfect for layering",
    ],
    material: "100% Organic Cotton",
    sizes: ["S", "M", "L"],
    isNew: true,
    colors: [
      {
        name: "Cream",
        hex: "#FFFDD0",
        images: [
          "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Grey",
        hex: "#808080",
        images: [
          "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=800&fit=crop",
        ],
      },
    ],
  },
  {
    id: "15",
    name: "Structured Tote Bag",
    tagline: "Sophisticated structured tote in pebbled leather.",
    price: 199,
    rating: 4.8,
    reviewCount: 112,
    category: "Accessories",
    description:
      "A sophisticated structured tote in pebbled leather. Features dual handles, a detachable shoulder strap, and organized interior compartments. The ultimate work-to-weekend bag.",
    details: [
      "Premium pebbled leather with suede lining",
      "Dual handles with detachable shoulder strap",
      "Organized interior compartments",
      "Work-to-weekend versatility",
    ],
    material: "Premium pebbled leather",
    sizes: ["M"],
    isTrending: true,
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Cognac",
        hex: "#9A463D",
        images: [
          "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Taupe",
        hex: "#B3A18E",
        images: [
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop",
        ],
      },
    ],
  },
  {
    id: "16",
    name: "Performance Track Pants",
    tagline:
      "Modern track pants blending athletic performance with street style.",
    price: 79,
    rating: 4.5,
    reviewCount: 64,
    category: "Men",
    description:
      "Modern track pants blending athletic performance with street style. Tapered fit with elastic cuffs, zip pockets, and a drawstring waist.",
    details: [
      "72% Nylon, 28% Elastane",
      "Quick-dry finish",
      "Tapered fit with elastic cuffs",
      "Zip pockets with drawstring waist",
    ],
    material: "72% Nylon, 28% Elastane",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop",
        ],
      },
      {
        name: "Olive",
        hex: "#708238",
        images: [
          "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&h=800&fit=crop",
        ],
      },
    ],
  },
];
