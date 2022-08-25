import { AxiosInstance } from 'axios';
import React from 'react';

export interface ScopeTwoAssetType {
  asset_name: string;
  asset_type: string;
  id: number;
  location: string;
  owner_id: number;
}

export interface ScopeTwoDataType {
  Date: string;
  'Energy Consumption': number;
  'Carbon Emission': number;
}

export interface ScopeOneDataType {
  Location: string;
  'Vehicle Reg': string;
  'Vehicle Reg Driver': string;
  'Fuel type'?: string;
  'Vehicle type'?: string;
  Data: {
    'CO2 Emission': number;
    'Transaction Date/Time': string;
    DistanceTraveled?: number;
    Litres?: number;
    Odometer?: number | string;
    Location?: string;
    Net?: number;
    VAT?: number;
    Gross?: number;
    'Price/Litre'?: number;
  }[];
}
export type ScopeTwoType = ScopeTwoDataType[][];
export type ScopeOneType = ScopeOneDataType[];
export type ScopeThreeData = any;
export interface userType {
  firstname: string;
  lastname: string;
  id: number;
  email: string;
  company: string;
}

export interface contextType {
  user: userType | null;
  loading: boolean;
  close: boolean;
  authToken: string;
  scopeOneData: ScopeOneDataType[];
  scopeTwoData: ScopeTwoType;
  scopeTwoAsset: ScopeTwoAssetType[];
  scopeThreeData: any;
  headText: React.ReactNode;
  fetchAxios?: AxiosInstance;
  getToken?: (username: string, password: string) => Promise<boolean>;
  getUser?: () => Promise<boolean>;
  getScopeOneData?: () => Promise<void>;
  getScopeTwoData?: () => Promise<void>;
  getScopeThreeData?: () => Promise<void>;
  getAllScopeData?: () => Promise<void>;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  setClose?: React.Dispatch<React.SetStateAction<boolean>>;
  setHead?: (item: React.ReactNode) => void;
}

export interface OrgFormFields {
  org_name: string;
  industry: string;
  address: string;
  country: string;
  state: string;
  zip_code: string;
  city: string;
  lei_id: string;
  org_email: string;
}
