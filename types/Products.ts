export interface Product {
  id: string;
  name: string;
  description: string;
  stock?: number;
  price: string;
  imageUrl?: string;
  variations?: Vartiations[];
}

export interface Vartiations{
    size?:string;
    color?:string;
    price?:number;
}