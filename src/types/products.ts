export interface ICategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

export interface IPriceChange {
  dir: "up" | "down" | "same";
  pct: number;
}

export interface IMarket {
  market: string;
  district: string;
  minPrice: number;
  maxPrice: number;
  price: number;
}

export interface IProduct {
  id: number;
  slug: string;
  nameBn: string;

  category: string;
  categoryNameBn: string;
  categoryIcon: string;

  unit: string;
  image: string;

  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;

  change: IPriceChange;

  markets: IMarket[];
}