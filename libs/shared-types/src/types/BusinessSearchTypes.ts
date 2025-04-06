export interface BusinessSearchType {
  total: number;
  searched_Location: string;
  searched_Term: string;
  limit: string;
  offset: string;
  region: Region;
  business_search_result: BusinessSearchResult[];
  ad_business_search_result: AdBusinessSearchResult[];
}

export interface AdBusinessSearchResult {
  id: string;
  name: string;
  alias: string;
  address1: string;
  address2: string;
  address3: null | string;
  city: string;
  zip: string;
  country: Country;
  hours: any[];
  is_closed: boolean;
  latitude: number;
  longitude: number;
  review_count: number;
  state: State;
  avg_rating: number;
  unrounded_avg_rating: number;
  neighborhoods: string[];
  geo_accuracy: number;
  addresses: Addresses;
  price: number | null;
  localized_price: null | string;
  categories: Category[];
  is_yelp_guaranteed: null;
  platform_partner_ids: any[];
  fmode: number;
  phone: string;
  localized_phone?: string;
  dialable_phone?: string;
  photo_url: string;
  primary_photo: PrimaryPhoto;
  photos: Photo[];
  photo_count: number;
}

export interface Addresses {
  primary_language: PrimaryLanguage;
}

export interface PrimaryLanguage {
  long_form: string;
  short_form: string;
  cross_streets?: string;
}

export interface Category {
  name: string;
  category_filter: string;
  is_restaurant: boolean;
}

export enum Country {
  Us = 'US',
}

export interface Photo {
  id: string;
  type: Type;
  url_prefix: string;
  url_suffix: URLSuffix;
  fmode: number;
  time_created?: number;
  caption?: string;
  width?: number;
  height?: number;
  business_id?: string;
  share_url?: string;
  photo_category_id?: null | string;
  feedback_positive_count?: number;
}

export enum Type {
  Business = 'business',
}

export enum URLSuffix {
  Jpg = '.jpg',
}

export interface PrimaryPhoto {
  id: string;
  url_prefix: string;
  url_suffix: URLSuffix;
  fmode: number;
}

export enum State {
  Nj = 'NJ',
  Ny = 'NY',
}

export interface BusinessSearchResult {
  id: string;
  name: string;
  alias: string;
  address1: string;
  address2: Address2;
  address3: Address3 | null;
  city: string;
  zip: string;
  country: Country;
  hours: any[];
  is_closed: boolean;
  latitude: number;
  longitude: number;
  review_count: number;
  state: State;
  avg_rating: number;
  unrounded_avg_rating: number;
  neighborhoods: string[];
  geo_accuracy: number;
  addresses: Addresses;
  price: number | null;
  localized_price: LocalizedPrice | null;
  categories: Category[];
  is_yelp_guaranteed: null;
  platform_partner_ids: any[];
  fmode: number;
  phone: string;
  photo_url: string;
  primary_photo: PrimaryPhoto;
  photos: Photo[];
  photo_count: number;
  localized_phone?: string;
  dialable_phone?: string;
  menu_photos?: Photo[];
}

export enum Address2 {
  Empty = '',
  Ste111 = 'Ste 111',
  Ste12 = 'Ste 12',
}

export enum Address3 {
  Empty = '',
  FultonSt = 'Fulton St',
}

export enum LocalizedPrice {
  Empty = '$$',
  LocalizedPrice = '$',
  Purple = '$$$',
}

export interface Region {
  center: Center;
  span: Span;
}

export interface Center {
  longitude: number;
  latitude: number;
}

export interface Span {
  longitude_delta: number;
  latitude_delta: number;
}
