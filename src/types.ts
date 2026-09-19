export type PageId = 'home' | 'rooms-and-services' | 'gallery' | 'contact-us';

export interface Room {
  id: string;
  name: string;
  tagline: string;
  category: 'standard' | 'deluxe' | 'family' | 'premium';
  pricePKR: number;
  capacity: string;
  bedType: string;
  size: string;
  image: string;
  description: string;
  features: string[];
  isFeaturedOnHome?: boolean;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlightText?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Exterior' | 'Rooms' | 'Interior' | 'Facilities';
  image: string;
  description: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  checkInDate: string;
  checkOutDate: string;
  guestsCount: number;
  selectedRoomId: string;
  specialRequests: string;
}

export interface LocationLandmark {
  name: string;
  distance: string;
  driveTime: string;
  category: 'Airport' | 'Shopping' | 'Attraction' | 'Transport';
}
