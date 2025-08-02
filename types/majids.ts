export type Masjid = {
  id: string;
  name: string;
  location: string;
  isVerified: boolean;
  address: {
    addressLine1: string;
    addressLine2?: string;
    zoneCode: string;
    postalCode: string;
    city: string;
    countryCode: string;
  };
  phoneNumber: {
    countryCode: string;
    number: string;
    extension?: string;
  };
  prayerConfig: {
    method: string;
    fajrAngle: number;
    ishaAngle: number;
    ishaInterval: number;
    asrMethod: string;
    highLatitudeRule: string;
    adjustments: {
      fajrAdjustment: number;
      dhuhrAdjustment: number;
      asrAdjustment: number;
      maghribAdjustment: number;
      ishaAdjustment: number;
    };
  };
  createTime?: string;
  updateTime?: string;
};