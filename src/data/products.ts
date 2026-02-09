import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Merino Wool Structured Coat",
    tagline: "Timeless elegance for the modern winter.",
    price: 249,
    originalPrice: 320,
    rating: 4.8,
    reviewCount: 124,
    category: "Men",
    description:
      "Crafted from 100% premium Merino wool, this structured coat defines sophistication. Features a tailored fit, notched lapels, and a sustainable lining.",
    details: [
      "100% Merino Wool",
      "Tailored Fit",
      "Dry Clean Only",
      "Internal Pockets",
    ],
    material: "Merino Wool",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isTrending: true,
    colors: [
      {
        name: "Charcoal",
        hex: "#36454F",
        images: [
          "https://images.unsplash.com/photo-1593030761757-71bd90dbe3e4?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Camel",
        hex: "#C19A6B",
        images: [
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Silk Blend Slip Dress",
    tagline: "Effortless grace for evening wear.",
    price: 189,
    rating: 4.9,
    reviewCount: 89,
    category: "Women",
    description:
      "A bias-cut slip dress that drapes beautifully over the body. Made from a luxurious silk-viscose blend for a subtle sheen and breathability.",
    details: [
      "Silk Viscose Blend",
      "Bias Cut",
      "Adjustable Straps",
      "Midi Length",
    ],
    material: "Silk Blend",
    sizes: ["XS", "S", "M", "L"],
    isTrending: true,
    colors: [
      {
        name: "Champagne",
        hex: "#F7E7CE",
        images: [
          "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Midnight Black",
        hex: "#000000",
        images: [
          "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Heavyweight Cotton Hoodie",
    tagline: "Street-ready comfort built to last.",
    price: 85,
    rating: 4.7,
    reviewCount: 450,
    category: "Men",
    description:
      "Our signature heavyweight hoodie featuring dropped shoulders and a boxy fit. Garment-dyed for a vintage look and soft feel.",
    details: [
      "100% Organic Cotton",
      "450GSM French Terry",
      "Pre-shrunk",
      "Made in Portugal",
    ],
    material: "Organic Cotton",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isTrending: true,
    colors: [
      {
        name: "Washed Black",
        hex: "#2C2C2C",
        images: [
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Concrete Grey",
        hex: "#959595",
        images: [
          "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Technical Cargo Trousers",
    tagline: "Utility meets modern streetwear.",
    price: 120,
    rating: 4.6,
    reviewCount: 210,
    category: "Men",
    description:
      "Water-repellent nylon cargo trousers with multiple functional pockets and adjustable ankle toggles for a versatile silhouette.",
    details: [
      "Nylon Tech Fabric",
      "Water Repellent",
      "6 Pockets",
      "Adjustable Fit",
    ],
    material: "Nylon",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    colors: [
      {
        name: "Olive",
        hex: "#556B2F",
        images: [
          "https://images.unsplash.com/photo-1517445312882-6e21074a3821?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Black",
        hex: "#000000",
        images: [
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    id: "5",
    name: "Oversized Blazer",
    tagline: "Power dressing with a relaxed edge.",
    price: 195,
    rating: 4.8,
    reviewCount: 76,
    category: "Women",
    description:
      "An oversized, double-breasted blazer with strong shoulders. Perfect for layering over hoodies or dressing up with trousers.",
    details: ["Wool Blend", "Oversized Fit", "Padded Shoulders", "Fully Lined"],
    material: "Wool Blend",
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
    colors: [
      {
        name: "Navy Pinstripe",
        hex: "#000080",
        images: [
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Beige",
        hex: "#F5F5DC",
        images: [
          "https://images.unsplash.com/photo-1578983542288-4f514b744d03?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    id: "6",
    name: "Kids Denim Jacket",
    tagline: "Classic cool for the little ones.",
    price: 55,
    rating: 4.9,
    reviewCount: 42,
    category: "Kids",
    description:
      "Soft, durable denim jacket with easy snap buttons and fun embroidered details on the back.",
    details: [
      "Soft Denim",
      "Snap Buttons",
      "Machine Washable",
      "Embroidered Art",
    ],
    material: "Cotton Denim",
    sizes: ["S", "M", "L"],
    isTrending: false,
    colors: [
      {
        name: "Light Wash",
        hex: "#ADD8E6",
        images: [
          "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    id: "7",
    name: "Leather Crossbody Bag",
    tagline: "Minimalist functionality.",
    price: 145,
    rating: 4.8,
    reviewCount: 150,
    category: "Accessories",
    description:
      "Full-grain leather crossbody bag with a structured shape and adjustable strap. Fits all daily essentials.",
    details: [
      "Full Grain Leather",
      "Magnetic Closure",
      "Inner Zip Pocket",
      "Adjustable Strap",
    ],
    material: "Leather",
    sizes: ["M"],
    isTrending: true,
    colors: [
      {
        name: "Tan",
        hex: "#D2B48C",
        images: [
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Black",
        hex: "#000000",
        images: [
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    id: "8",
    name: "Performance Running Shoes",
    tagline: "Speed meets style.",
    price: 130,
    rating: 4.7,
    reviewCount: 300,
    category: "Accessories",
    description:
      "Lightweight running shoes with responsive cushioning and a breathable knit upper.",
    details: [
      "Responsive Foam",
      "Breathable Knit",
      "Rubber Outsole",
      "Reflective Details",
    ],
    material: "Synthetic",
    sizes: ["M", "L", "XL"],
    isNew: true,
    colors: [
      {
        name: "Neon Lime",
        hex: "#CCFF00",
        images: [
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Stealth Black",
        hex: "#111111",
        images: [
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    id: "9",
    name: "Ribbed Knit Beanie",
    tagline: "Winter essential.",
    price: 35,
    rating: 4.5,
    reviewCount: 88,
    category: "Accessories",
    description:
      "Chunky ribbed knit beanie made from a soft wool blend to keep you warm on the coldest days.",
    details: ["Wool Blend", "Chunky Rib", "Fold-up Cuff", "One Size"],
    material: "Wool Blend",
    sizes: ["M"],
    colors: [
      {
        name: "Rust",
        hex: "#B7410E",
        images: [
          "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Grey",
        hex: "#808080",
        images: [
          "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    id: "10",
    name: "Linen Resort Shirt",
    tagline: "Vacation ready.",
    price: 75,
    rating: 4.6,
    reviewCount: 60,
    category: "Men",
    description:
      "Relaxed fit camp collar shirt made from breathable European linen. The perfect summer staple.",
    details: [
      "100% Linen",
      "Camp Collar",
      "Relaxed Fit",
      "Mother of Pearl Buttons",
    ],
    material: "Linen",
    sizes: ["S", "M", "L", "XL"],
    isTrending: true,
    colors: [
      {
        name: "White",
        hex: "#FFFFFF",
        images: [
          "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Sage",
        hex: "#BCB88A",
        images: [
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    id: "11",
    name: "High-Waist Wide Leg Jeans",
    tagline: "Retro silhouette, modern fit.",
    price: 95,
    rating: 4.8,
    reviewCount: 112,
    category: "Women",
    description:
      "Vintage-inspired wide leg jeans with a high waist and rigid denim construction that softens with wear.",
    details: ["100% Cotton", "High Rise", "Button Fly", "Wide Leg"],
    material: "Denim",
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
    colors: [
      {
        name: "Vintage Blue",
        hex: "#87CEEB",
        images: [
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    id: "12",
    name: "Kids Puffer Vest",
    tagline: "Layer up for adventures.",
    price: 45,
    rating: 4.7,
    reviewCount: 30,
    category: "Kids",
    description:
      "Lightweight yet warm puffer vest for active kids. Water-resistant finish and easy zipper.",
    details: [
      "Water Resistant",
      "Lightweight Insulation",
      "Zip Pockets",
      "Stand Collar",
    ],
    material: "Polyester",
    sizes: ["S", "M", "L"],
    colors: [
      {
        name: "Red",
        hex: "#FF0000",
        images: [
          "https://images.unsplash.com/photo-1519238263496-6362d74c1123?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Navy",
        hex: "#000080",
        images: [
          "https://images.unsplash.com/photo-1627577286370-1c0b31e9c20a?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    id: "13",
    name: "Cashmere Scarf",
    tagline: "Ultimate luxury.",
    price: 110,
    rating: 4.9,
    reviewCount: 200,
    category: "Accessories",
    description:
      "Incredibly soft 100% cashmere scarf. The perfect gift for yourself or a loved one.",
    details: [
      "100% Cashmere",
      "Fringed Ends",
      "Dry Clean Only",
      "Made in Scotland",
    ],
    material: "Cashmere",
    sizes: ["M"],
    colors: [
      {
        name: "Heather Grey",
        hex: "#B0C4DE",
        images: [
          "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Camel",
        hex: "#C19A6B",
        images: [
          "https://images.unsplash.com/photo-1601058268499-e52642d18d89?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    id: "14",
    name: "Graphic Print Tee",
    tagline: "Art you can wear.",
    price: 40,
    rating: 4.5,
    reviewCount: 95,
    category: "Men",
    description:
      "Heavyweight cotton t-shirt featuring exclusive artwork from local designers.",
    details: ["100% Cotton", "Screen Printed", "Relaxed Fit", "Crew Neck"],
    material: "Cotton",
    sizes: ["S", "M", "L", "XL"],
    isTrending: true,
    colors: [
      {
        name: "White",
        hex: "#FFFFFF",
        images: [
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    id: "15",
    name: "Satin Midi Skirt",
    tagline: "Sleek and versatile.",
    price: 89,
    rating: 4.7,
    reviewCount: 140,
    category: "Women",
    description:
      "High-waisted satin midi skirt that moves with you. Dress it up with heels or down with sneakers.",
    details: ["Satin Finish", "High Waist", "Elastic Waistband", "Midi Length"],
    material: "Polyester Satin",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      {
        name: "Emerald",
        hex: "#50C878",
        images: [
          "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Black",
        hex: "#000000",
        images: [
          "https://images.unsplash.com/photo-1575306656797-15d02336338e?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
  },
];
