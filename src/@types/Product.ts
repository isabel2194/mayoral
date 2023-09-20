export interface Product {
  sku: string;
  name: string;
  price: number;
  currency: string;
  offer_percentage: number | null;
  description: string;
  image: string;
  variants: any;
};

export interface APISEOResponse {
  products: Product[];
};

export interface Variant {
  sku:      string;
  price:    number;
  currency: string;
  image:    string;
  color:    string;
}
