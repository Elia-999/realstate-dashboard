export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Property {
  id: number;
  title: string;
  price: number;
  bedrooms: number;
  location: string;
  image: string;
  priceHistory?: number[];
  coordinates: Coordinates;
}
