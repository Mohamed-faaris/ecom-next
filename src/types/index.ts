export type Category = "Men" | "Women" | "Kids" | "Accessories";

export type ProductSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export type ProductColor = {
  name: string;
  hex: string;
  images: string[]; // URLs
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: Category;
  description: string;
  details: string[]; // Bullet points
  material: string;
  colors: ProductColor[];
  sizes: ProductSize[];
  isNew?: boolean;
  isTrending?: boolean;
};

export type CartItem = {
  productId: string;
  name: string;
  price: number;
  image: string;
  colorName: string;
  size: ProductSize;
  quantity: number;
};
