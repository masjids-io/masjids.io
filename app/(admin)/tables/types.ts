import type { StaticImageData } from 'next/image'

export type Employee = {
  id: number
  name: string
  position: string
  office: string
  age: number
  startDate: string
  salary: string
}



export type TableRecord = {
  id: number
  name: string
  phoneNo: string
  dob: string
  country: string
  accountNo: string
  image: StaticImageData
  cell: string
  activeClass?: string
}

export type ExpandableRecord = {
  product: string
  courier: string
  variant: string
  now: number
  status: string
  price: string
  Quantity: string
  Amount: string
}

export type NestedRecords = {
  name: string
  phoneNo: string
  dob: string
  country: string
  children?: NestedRecords[]
}

export type ResponsiveTableType = {
  companyName: string
  lastTrade: number
  tradeTime: string
  change: string
  prevClose: number
  open: number
  bid: string
  ask: string
  target: number
}


// For the prayer calculation method. You can add more valid strings.
export type PrayerMethod = 'MUSLIM_WORLD_LEAGUE' | 'EGYPTIAN' | 'KARACHI' | 'NORTH_AMERICA' | string;

// For the high latitude adjustment rule. You can add more valid strings.
export type HighLatitudeRule = 'MIDDLE_OF_THE_NIGHT' | 'SEVENTH_OF_THE_NIGHT' | 'TWILIGHT_ANGLE';

// Represents the nested "adjustments" object inside prayerConfig
export type PrayerAdjustments = {
  dhuhrAdjustment: number;
  ishaAdjustment: number;
};

// Represents the "prayerConfig" object
export type PrayerConfig = {
  method: PrayerMethod;
  fajrAngle: number;
  ishaAngle: number;
  highLatitudeRule: HighLatitudeRule;
  adjustments: PrayerAdjustments;
};

// Represents the "address" object
export type Address = {
  addressLine1: string;
  addressLine2: string;
  zoneCode: string;
  postalCode: string;
  city: string;
  countryCode: string;
};

// Represents the "phoneNumber" object
export type PhoneNumber = {
  countryCode: string;
  number: string;
  extension: string;
};

// Represents a single masjid object from the array
export type Masjid = {
  id: string;
  name: string;
  location: string;
  isVerified: boolean;
  address: Address;
  phoneNumber: PhoneNumber;
  prayerConfig: PrayerConfig;
  createTime: string; // ISO 8601 date-time string
  updateTime: string; // ISO 8601 date-time string
};
