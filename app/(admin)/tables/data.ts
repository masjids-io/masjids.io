import avatar1 from '@/assets/images/users/avatar-1.jpg'


// avatar
import { Employee, Masjid, type ExpandableRecord, type NestedRecords, type ResponsiveTableType, type TableRecord } from './types'
import { currency } from '@/context/constants'

// basic tables
const records: TableRecord[] = [
  {
    id: 1,
    name: 'Risa D. Pearson',
    phoneNo: '336-508-2157',
    dob: 'July 24, 1950',
    country: 'India',
    accountNo: 'AC336 508 2157',
    image: avatar1,
    cell: 'Cell',
    activeClass: 'table-active',
  },
]

const expandableRecords: ExpandableRecord[] = [
  {
    product: 'ASOS Ridley High Waist',
    courier: 'FedEx',
    variant: 'success',
    now: 100,
    status: 'Delivered',
    price: `$${currency}9.49`,
    Quantity: '82',
    Amount: '6,518.18',
  },
]

const nestedRecords: NestedRecords[] = [
  {
    name: 'Risa D. Pearson',
    phoneNo: '336-508-2157',
    dob: 'July 24, 1950',
    country: 'india',
    children: [
      {
        name: 'Risa D. Pearson',
        phoneNo: '336-508-2157',
        dob: 'July 24, 1950',
        country: 'india',
      },
      {
        name: 'Ann C. Thompson',
        phoneNo: '646-473-2057',
        dob: 'January 25, 1959',
        country: 'Canada',
      },
    ],
  },
]

const expandableDataRecords: Employee[] = [
  {
    id: 1,
    name: 'Airi Satou',
    position: 'Accountant',
    office: 'Tokyo',
    age: 33,
    startDate: '2008/11/28',
    salary: `${currency}162,700`,
  },
]

const responsiveTableData: ResponsiveTableType[] = [
  {
    companyName: 'Google Inc.',
    lastTrade: 597.74,
    tradeTime: '12:12PM',
    change: '14.81 (2.54%)',
    prevClose: 582.93,
    open: 597.95,
    bid: '597.73 x 100',
    ask: '597.91 x 300',
    target: 731.1,
  },
]

const masjidsTableData: Masjid[] = [
   {
      "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
      "name": "Masjid Jami' Al-Huda Cakranegara",
      "location": "Indonesia",
      "isVerified": true,
      "address": {
        "addressLine1": "Jl. Selaparang No. 45",
        "addressLine2": "Cakranegara",
        "zoneCode": "83231",
        "postalCode": "83231",
        "city": "Mataram",
        "countryCode": "ID"
      },
      "phoneNumber": {
        "countryCode": "62",
        "number": "81234567890",
        "extension": ""
      },
      "prayerConfig": {
        "method": "EGYPTIAN",
        "fajrAngle": 20,
        "ishaAngle": 18,
        "highLatitudeRule": "MIDDLE_OF_THE_NIGHT",
        "adjustments": {
          "dhuhrAdjustment": 2,
          "ishaAdjustment": 2
        }
      },
      "createTime": "2024-02-15T10:05:12.345Z",
      "updateTime": "2025-06-20T11:30:00.000Z"
    },
    {
      "id": "fac6a64f-75c6-4e52-b0be-25968d4a1b4a",
      "name": "Masjid Agung At-Taqwa Mataram",
      "location": "Indonesia",
      "isVerified": true,
      "address": {
        "addressLine1": "Jl. Pejanggik No. 10",
        "addressLine2": "Mataram Barat",
        "zoneCode": "83125",
        "postalCode": "83125",
        "city": "Mataram",
        "countryCode": "ID"
      },
      "phoneNumber": {
        "countryCode": "62",
        "number": "87890123456",
        "extension": "office"
      },
      "prayerConfig": {
        "method": "MUSLIM_WORLD_LEAGUE",
        "fajrAngle": 18,
        "ishaAngle": 17,
        "highLatitudeRule": "MIDDLE_OF_THE_NIGHT",
        "adjustments": {
          "dhuhrAdjustment": 3,
          "ishaAdjustment": 0
        }
      },
      "createTime": "2023-11-01T08:00:21.112Z",
      "updateTime": "2025-07-11T14:22:05.876Z"
    },
    {
      "id": "11223344-5566-7788-99aa-bbccddeeff00",
      "name": "Musholla Al-Ikhlas Ampenan",
      "location": "Indonesia",
      "isVerified": false,
      "address": {
        "addressLine1": "Gang Mawar III No. 8",
        "addressLine2": "Ampenan Selatan",
        "zoneCode": "83114",
        "postalCode": "83114",
        "city": "Mataram",
        "countryCode": "ID"
      },
      "phoneNumber": {
        "countryCode": "62",
        "number": "85987654321",
        "extension": ""
      },
      "prayerConfig": {
        "method": "SINGAPORE",
        "fajrAngle": 20,
        "ishaAngle": 18,
        "highLatitudeRule": "TWILIGHT_ANGLE",
        "adjustments": {
          "dhuhrAdjustment": 0,
          "ishaAdjustment": 5
        }
      },
      "createTime": "2025-07-31T04:10:45.123Z",
      "updateTime": "2025-07-31T04:10:45.123Z"
    },
    {
      "id": "fedcba98-7654-3210-fedc-ba9876543210",
      "name": "Masjid Nurul Bilad Mandalika",
      "location": "Indonesia",
      "isVerified": true,
      "address": {
        "addressLine1": "Kawasan Ekonomi Khusus Mandalika",
        "addressLine2": "Kuta",
        "zoneCode": "83573",
        "postalCode": "83573",
        "city": "Praya",
        "countryCode": "ID"
      },
      "phoneNumber": {
        "countryCode": "62",
        "number": "81999888777",
        "extension": ""
      },
      "prayerConfig": {
        "method": "EGYPTIAN",
        "fajrAngle": 20,
        "ishaAngle": 18,
        "highLatitudeRule": "MIDDLE_OF_THE_NIGHT",
        "adjustments": {
          "dhuhrAdjustment": 2,
          "ishaAdjustment": 2
        }
      },
      "createTime": "2022-08-01T12:00:00.000Z",
      "updateTime": "2024-09-10T18:00:00.000Z"
    },
    {
      "id": "abcdef12-3456-7890-abcd-ef1234567890",
      "name": "Masjid Raya Hubbul Wathan",
      "location": "Indonesia",
      "isVerified": false,
      "address": {
        "addressLine1": "Jl. Udayana No. 1",
        "addressLine2": "Gomong",
        "zoneCode": "83125",
        "postalCode": "83125",
        "city": "Mataram",
        "countryCode": "ID"
      },
      "phoneNumber": {
        "countryCode": "62",
        "number": "87765432109",
        "extension": "sekretariat"
      },
      "prayerConfig": {
        "method": "MUSLIM_WORLD_LEAGUE",
        "fajrAngle": 18,
        "ishaAngle": 17,
        "highLatitudeRule": "MIDDLE_OF_THE_NIGHT",
        "adjustments": {
          "dhuhrAdjustment": 1,
          "ishaAdjustment": 1
        }
      },
      "createTime": "2025-01-05T15:30:10.555Z",
      "updateTime": "2025-05-15T09:45:15.678Z"
    }
]

export { expandableDataRecords, expandableRecords, nestedRecords, records, responsiveTableData, masjidsTableData }
