import { Room, Facility, GalleryItem, LocationLandmark } from '../types';

export const BUSINESS_INFO = {
  name: "The Guest House Islamabad",
  phone: "+92 304 3633536",
  phoneClean: "+923043633536",
  address: "House No. 430, Street 3, F-15/2, F-15 Jammu Kashmir Housing Scheme, Islamabad, 44150, Pakistan",
  sector: "F-15/2, Jammu Kashmir Housing Scheme, Islamabad",
  city: "Islamabad",
  country: "Pakistan",
  postalCode: "44150",
  email: "info@theguesthouseislamabad.pk",
  checkInTime: "12:00 PM",
  checkOutTime: "11:00 AM",
  whatsappUrl: "https://wa.me/923043633536?text=Hello%20The%20Guest%20House%20Islamabad%2C%20I%20would%20like%20to%20inquire%20about%20room%20availability.",
};

export const ROOMS: Room[] = [
  {
    id: "standard-room",
    name: "Standard Room",
    tagline: "Ideal for solo travelers and short business stays",
    category: "standard",
    pricePKR: 8500,
    capacity: "1 - 2 Guests",
    bedType: "1 Queen Bed or Twin Beds",
    size: "240 sq ft",
    image: "https://i.pinimg.com/1200x/e9/09/e3/e909e3385e3703ed1a49868727a53777.jpg",
    description: "A cozy and peaceful room equipped with all modern amenities. Designed for comfort with clean linens, work desk, and attached bathroom.",
    features: [
      "Inverter Air Conditioning & Heating",
      "Free High-Speed Wi-Fi",
      "Clean En-suite Bathroom",
      "32\" LED Smart TV",
      "Work Desk & Chair",
      "24/7 Power Backup",
      "Daily Housekeeping"
    ],
    isFeaturedOnHome: true
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    tagline: "Spacious luxury with premium comfort and seating",
    category: "deluxe",
    pricePKR: 12000,
    capacity: "2 Guests",
    bedType: "1 King Size Bed",
    size: "320 sq ft",
    image: "https://i.pinimg.com/736x/cc/a6/5f/cca65f78c3102152c062b51004ae5d8a.jpg",
    description: "Upgrade your stay in our Deluxe Room featuring a plush King size bed, elegant seating area, satellite TV, and refined interior decor.",
    features: [
      "King Size Master Bed",
      "Comfortable Lounge Chairs",
      "Inverter AC & Climate Control",
      "Free High-Speed Wi-Fi",
      "Hot & Cold Rain Shower",
      "Mini Fridge & Tea Maker",
      "24/7 Room Service Support"
    ],
    isFeaturedOnHome: true
  },
  {
    id: "family-room",
    name: "Family Room",
    tagline: "Generous space designed for families and group stays",
    category: "family",
    pricePKR: 16500,
    capacity: "3 - 4 Guests",
    bedType: "1 King Bed + 1 Queen Bed",
    size: "450 sq ft",
    image: "https://i.pinimg.com/1200x/a5/d2/e4/a5d2e459818049eda7ce5d1ee9cd2946.jpg",
    description: "Perfect for families traveling to Islamabad. Generously proportioned room with multiple bedding configurations, spacious wardrobe, and cozy atmosphere.",
    features: [
      "Multiple Bedding Layouts",
      "Spacious Family Living Area",
      "High-Speed Wi-Fi",
      "Large Wardrobe & Storage",
      "Smart TV with Netflix/Cable",
      "Attached Bathroom with Toiletries",
      "Dedicated Secure Parking"
    ],
    isFeaturedOnHome: true
  },
  {
    id: "premium-suite",
    name: "Premium Room",
    tagline: "The ultimate guest house experience with executive comfort",
    category: "premium",
    pricePKR: 19500,
    capacity: "2 - 3 Guests",
    bedType: "Super King Bed + Extra Sofa Bed",
    size: "520 sq ft",
    image: "https://i.pinimg.com/736x/91/35/ac/9135ac758f5547e7296bc2b73613ace3.jpg",
    description: "Our finest accommodation offering executive elegance, oversized bathroom with premium fittings, balcony view access, and dedicated guest assistant.",
    features: [
      "Executive Layout with Sofa Lounge",
      "Private Balcony / Garden View Access",
      "Inverter AC & Room Heater",
      "High-Speed Fiber Internet",
      "Luxury Bath Amenities & Hot Water 24/7",
      "Complimentary Morning Tea / Coffee",
      "Priority Concierge Assistance"
    ],
    isFeaturedOnHome: false
  }
];

export const HOME_FACILITIES: Facility[] = [
  {
    id: "fac-1",
    title: "Comfortable Rooms",
    description: "Well-furnished rooms with orthopedic mattresses, clean linens, and peaceful ambiance.",
    iconName: "Bed",
    highlightText: "Orthopedic Mattresses"
  },
  {
    id: "fac-2",
    title: "Free Wi-Fi",
    description: "High-speed optical fiber internet connection accessible throughout the guest house premises.",
    iconName: "Wifi",
    highlightText: "High-Speed Fiber"
  },
  {
    id: "fac-3",
    title: "Clean Bathrooms",
    description: "Hygienic, sparkling bathrooms with instant hot water geysers and daily fresh towels.",
    iconName: "Bath",
    highlightText: "24/7 Hot Water"
  },
  {
    id: "fac-4",
    title: "Air Conditioning",
    description: "Modern energy-efficient inverter AC units and room heating for year-round climate comfort.",
    iconName: "Wind",
    highlightText: "AC & Heating"
  },
  {
    id: "fac-5",
    title: "Parking",
    description: "Secure, dedicated parking space inside and in front of the guest house compound.",
    iconName: "Car",
    highlightText: "Secure & Monitored"
  },
  {
    id: "fac-6",
    title: "24/7 Guest Support",
    description: "Friendly and hospitable staff on call round the clock to assist with check-ins and inquiries.",
    iconName: "Headphones",
    highlightText: "Round-the-clock staff"
  }
];

export const ALL_SERVICES: Facility[] = [
  ...HOME_FACILITIES,
  {
    id: "fac-7",
    title: "Daily Housekeeping",
    description: "Professional cleaning staff ensure fresh bedding, spotless surfaces, and sanitized rooms every day.",
    iconName: "Sparkles",
    highlightText: "Daily Hygiene"
  },
  {
    id: "fac-8",
    title: "Guest Assistance & Guidance",
    description: "Local guidance for Islamabad sightseeing, taxi bookings, food delivery, and airport transfers.",
    iconName: "Compass",
    highlightText: "Travel Help"
  },
  {
    id: "fac-9",
    title: "Power Backup",
    description: "Uninterrupted power generator and UPS system ensuring continuous lighting, fans, and Wi-Fi.",
    iconName: "Zap",
    highlightText: "Uninterrupted Power"
  }
];

export const WHY_STAY_POINTS = [
  {
    title: "Peaceful & Quiet Environment",
    description: "Tucked away in the serene F-15/2 sector away from city noise, ensuring sound sleep and complete relaxation."
  },
  {
    title: "Comfortable Accommodation",
    description: "Thoughtfully decorated rooms equipped with premium bedding, study desks, and modern entertainment."
  },
  {
    title: "Spotless Clean Surroundings",
    description: "We take extreme pride in maintaining top-tier cleanliness across bedrooms, common lounges, and bathrooms."
  },
  {
    title: "Convenient Islamabad Location",
    description: "Easy access to Islamabad International Airport, CPEC Motorway interchanges, and key city sectors."
  },
  {
    title: "Warm Pakistani Hospitality",
    description: "Personalized guest-focused service where every guest is treated like family with utmost respect."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Standard Room Comfort",
    category: "Rooms",
    image: "https://i.pinimg.com/1200x/e9/09/e3/e909e3385e3703ed1a49868727a53777.jpg",
    description: "Neat, comfortable room layout with climate control and clean bedding.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-2",
    title: "Deluxe Bedroom Setup",
    category: "Rooms",
    image: "https://i.pinimg.com/736x/cc/a6/5f/cca65f78c3102152c062b51004ae5d8a.jpg",
    description: "Spacious Deluxe Room with King Bed and tasteful ambient lighting.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-3",
    title: "Main Sitting Lounge",
    category: "Interior",
    image: "https://i.pinimg.com/736x/61/73/52/617352260dc6e1bbee80fa0f7ba506e3.jpg",
    description: "Cozy common lounge for guests to unwind, read, or enjoy fresh tea.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-4",
    title: "Clean Modern Bathroom",
    category: "Facilities",
    image: "https://i.pinimg.com/1200x/77/9d/b8/779db86c4cc6e37270940a27ed8b5ce9.jpg",
    description: "Spotless attached bathroom with hot geyser and fresh white towels.",
    aspectRatio: "portrait"
  },
  {
    id: "gal-5",
    title: "Executive Suite View",
    category: "Rooms",
    image: "https://i.pinimg.com/736x/91/35/ac/9135ac758f5547e7296bc2b73613ace3.jpg",
    description: "Refined suite ambiance with plush furnishing and modern amenities.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-6",
    title: "Family Room Layout",
    category: "Rooms",
    image: "https://i.pinimg.com/1200x/a5/d2/e4/a5d2e459818049eda7ce5d1ee9cd2946.jpg",
    description: "Safe and spacious accommodation for families traveling to Islamabad.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-7",
    title: "Guest Lounge Corner",
    category: "Interior",
    image: "https://i.pinimg.com/736x/61/73/52/617352260dc6e1bbee80fa0f7ba506e3.jpg",
    description: "Welcoming interior lounge setup with comfortable seating.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-8",
    title: "Luxury Bedroom Detail",
    category: "Rooms",
    image: "https://i.pinimg.com/736x/cc/a6/5f/cca65f78c3102152c062b51004ae5d8a.jpg",
    description: "Clean bedding, plush pillows, and modern nightstands.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-9",
    title: "En-suite Bathroom & Vanity",
    category: "Facilities",
    image: "https://i.pinimg.com/1200x/77/9d/b8/779db86c4cc6e37270940a27ed8b5ce9.jpg",
    description: "Hygienic bathroom equipped with geyser and bath amenities.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-10",
    title: "Suite Sitting Area",
    category: "Interior",
    image: "https://i.pinimg.com/736x/91/35/ac/9135ac758f5547e7296bc2b73613ace3.jpg",
    description: "Executive suite sitting area for work and leisure.",
    aspectRatio: "landscape"
  }
];

export const ISLAMABAD_LANDMARKS: LocationLandmark[] = [
  {
    name: "Islamabad International Airport",
    distance: "18 km",
    driveTime: "~18 Mins via Motorway",
    category: "Airport"
  },
  {
    name: "M-1 / M-2 Motorway Interchange",
    distance: "4 km",
    driveTime: "~5 Mins Drive",
    category: "Transport"
  },
  {
    name: "Centaurus Mall & Blue Area",
    distance: "19 km",
    driveTime: "~20 Mins Drive",
    category: "Shopping"
  },
  {
    name: "Faisal Mosque Islamabad",
    distance: "22 km",
    driveTime: "~25 Mins Drive",
    category: "Attraction"
  },
  {
    name: "NUST University Campus H-12",
    distance: "11 km",
    driveTime: "~12 Mins Drive",
    category: "Attraction"
  }
];
