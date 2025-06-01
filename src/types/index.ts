export interface Product {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  images: string[];
  woodType: WoodType;
  finish: Finish;
  collection: Collection;
  dimensions: {
    width: number;
    depth: number;
    height: number;
  };
  weight: number;
  inStock: boolean;
  featured: boolean;
  story: string;
  craftingVideo?: string;
  reviews: Review[];
}

export enum WoodType {
  Oak = "Oak",
  Walnut = "Walnut",
  Maple = "Maple",
  Cherry = "Cherry",
  Mahogany = "Mahogany",
  Pine = "Pine",
  Birch = "Birch"
}

export enum Finish {
  Natural = "Natural",
  Matte = "Matte",
  Glossy = "Glossy",
  Distressed = "Distressed",
  Painted = "Painted",
  Oiled = "Oiled"
}

export enum Collection {
  Modern = "Modern",
  Rustic = "Rustic",
  Classic = "Classic",
  Minimalist = "Minimalist",
  Industrial = "Industrial",
  Farmhouse = "Farmhouse"
}

export interface Review {
  id: number;
  userId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  wishlist: number[];
  orders: Order[];
}

export interface Order {
  id: number;
  userId: number;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  date: string;
  shippingAddress: Address;
  paymentMethod: string;
}

export enum OrderStatus {
  Pending = "Pending",
  Processing = "Processing",
  Shipped = "Shipped",
  Delivered = "Delivered",
  Cancelled = "Cancelled"
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}