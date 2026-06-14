// Mock property data for JOHN STATE CO
export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  priceFormatted: string;
  type: 'Villa' | 'Condo' | 'Apartment' | 'Commercial' | 'Land' | 'Luxury Villa';
  status: 'For Sale' | 'For Rent' | 'Featured' | 'Sold';
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  description: string;
  amenities: string[];
  featured: boolean;
  agent: string;
  yearBuilt: number;
}

export interface Agent {
  id: string;
  name: string;
  position: string;
  experience: string;
  phone: string;
  email: string;
  photo: string;
  properties: number;
  rating: number;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  photo: string;
  rating: number;
  text: string;
  property: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  authorPhoto: string;
  date: string;
  readTime: string;
}

// --- HIGH-QUALITY UNSPLASH IMAGES ---
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80',
  villa1: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
  villa2: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
  condo1: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  condo2: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
  apartment1: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
  apartment2: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
  commercial1: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  luxury1: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  luxury2: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  luxury3: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  luxury4: 'https://images.unsplash.com/photo-1600566753376-12c8ab7a5a34?w=800&q=80',
  interior1: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
  interior2: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  pool: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80',
  land: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
  catVilla: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80',
  catCondo: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
  catApartment: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
  catCommercial: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  catLand: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
  catInvestment: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&q=80',
  agent1: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  agent2: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  agent3: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  agent4: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  client1: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  client2: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  client3: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  client4: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  blog1: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  blog2: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&q=80',
  blog3: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&q=80',
  ctaBg: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
};

export const properties: Property[] = [
  {
    id: '1',
    title: 'The Royal Palm Estate',
    location: 'Palm Beach, Florida',
    price: 12500000,
    priceFormatted: '$12,500,000',
    type: 'Luxury Villa',
    status: 'Featured',
    bedrooms: 7,
    bathrooms: 9,
    area: 12500,
    images: [IMAGES.luxury1, IMAGES.interior1, IMAGES.pool],
    description: 'An extraordinary oceanfront estate featuring panoramic views, infinity pool, and world-class finishes throughout.',
    amenities: ['Pool', 'Gym', 'Wine Cellar', 'Home Theater', 'Smart Home', 'Ocean View'],
    featured: true,
    agent: '1',
    yearBuilt: 2023,
  },
  {
    id: '2',
    title: 'Manhattan Sky Penthouse',
    location: 'Upper East Side, New York',
    price: 28000000,
    priceFormatted: '$28,000,000',
    type: 'Condo',
    status: 'For Sale',
    bedrooms: 5,
    bathrooms: 6,
    area: 8200,
    images: [IMAGES.condo1, IMAGES.interior2, IMAGES.condo2],
    description: 'The pinnacle of Manhattan luxury living. Full-floor penthouse with 360° city skyline views.',
    amenities: ['Concierge', 'Rooftop Terrace', 'Private Elevator', 'Spa', 'Smart Home'],
    featured: true,
    agent: '2',
    yearBuilt: 2024,
  },
  {
    id: '3',
    title: 'Beverly Hills Modern Villa',
    location: 'Beverly Hills, California',
    price: 18750000,
    priceFormatted: '$18,750,000',
    type: 'Villa',
    status: 'Featured',
    bedrooms: 6,
    bathrooms: 8,
    area: 10800,
    images: [IMAGES.villa2, IMAGES.luxury3, IMAGES.interior1],
    description: 'A masterpiece of contemporary architecture nestled in the heart of Beverly Hills.',
    amenities: ['Infinity Pool', 'Guest House', 'Home Theater', 'Wine Room', 'City Views'],
    featured: true,
    agent: '1',
    yearBuilt: 2024,
  },
  {
    id: '4',
    title: 'Downtown Luxury Loft',
    location: 'Tribeca, New York',
    price: 4200000,
    priceFormatted: '$4,200,000',
    type: 'Apartment',
    status: 'For Sale',
    bedrooms: 3,
    bathrooms: 3,
    area: 3200,
    images: [IMAGES.apartment1, IMAGES.apartment2, IMAGES.interior2],
    description: 'Stunning Tribeca loft with soaring ceilings, designer finishes, and unmatched city views.',
    amenities: ['Doorman', 'Gym', 'Rooftop', 'Storage', 'Pet Friendly'],
    featured: false,
    agent: '3',
    yearBuilt: 2022,
  },
  {
    id: '5',
    title: 'Malibu Oceanfront Estate',
    location: 'Malibu, California',
    price: 35000000,
    priceFormatted: '$35,000,000',
    type: 'Luxury Villa',
    status: 'Featured',
    bedrooms: 8,
    bathrooms: 10,
    area: 15000,
    images: [IMAGES.luxury2, IMAGES.pool, IMAGES.luxury4],
    description: 'The ultimate beachfront retreat. Direct beach access with stunning Pacific Ocean panoramas.',
    amenities: ['Beach Access', 'Infinity Pool', 'Helipad', 'Tennis Court', 'Guest Houses'],
    featured: true,
    agent: '2',
    yearBuilt: 2025,
  },
  {
    id: '6',
    title: 'Prime Commercial Tower',
    location: 'Financial District, NYC',
    price: 95000000,
    priceFormatted: '$95,000,000',
    type: 'Commercial',
    status: 'For Sale',
    bedrooms: 0,
    bathrooms: 0,
    area: 125000,
    images: [IMAGES.commercial1, IMAGES.condo1, IMAGES.condo2],
    description: 'Class A commercial tower in the heart of the Financial District. Fully leased with premium tenants.',
    amenities: ['24/7 Security', 'Parking', 'Conference Center', 'Concierge', 'Fitness Center'],
    featured: false,
    agent: '4',
    yearBuilt: 2021,
  },
  {
    id: '7',
    title: 'Aspen Mountain Retreat',
    location: 'Aspen, Colorado',
    price: 22000000,
    priceFormatted: '$22,000,000',
    type: 'Villa',
    status: 'For Sale',
    bedrooms: 6,
    bathrooms: 7,
    area: 9500,
    images: [IMAGES.luxury3, IMAGES.interior1, IMAGES.luxury1],
    description: 'Ski-in/ski-out luxury mountain home with breathtaking Aspen Mountain views.',
    amenities: ['Ski Access', 'Hot Tub', 'Wine Cellar', 'Fireplace', 'Mountain Views'],
    featured: true,
    agent: '3',
    yearBuilt: 2023,
  },
  {
    id: '8',
    title: 'Miami Beach Penthouse',
    location: 'South Beach, Miami',
    price: 16500000,
    priceFormatted: '$16,500,000',
    type: 'Condo',
    status: 'For Rent',
    bedrooms: 4,
    bathrooms: 5,
    area: 6800,
    images: [IMAGES.condo2, IMAGES.interior2, IMAGES.pool],
    description: 'Ultra-luxury penthouse with wrap-around terraces and direct ocean views.',
    amenities: ['Pool', 'Spa', 'Concierge', 'Valet', 'Private Beach', 'Smart Home'],
    featured: true,
    agent: '4',
    yearBuilt: 2024,
  },
];

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Alexander Sterling',
    position: 'Principal Broker',
    experience: '18 Years',
    phone: '+1 (212) 555-0100',
    email: 'a.sterling@johnstateco.com',
    photo: IMAGES.agent1,
    properties: 145,
    rating: 4.9,
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    id: '2',
    name: 'Victoria Chen',
    position: 'Senior Luxury Agent',
    experience: '12 Years',
    phone: '+1 (212) 555-0200',
    email: 'v.chen@johnstateco.com',
    photo: IMAGES.agent2,
    properties: 98,
    rating: 4.8,
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    id: '3',
    name: 'Marcus Williams',
    position: 'Investment Specialist',
    experience: '15 Years',
    phone: '+1 (212) 555-0300',
    email: 'm.williams@johnstateco.com',
    photo: IMAGES.agent3,
    properties: 112,
    rating: 4.9,
    socials: { linkedin: '#', instagram: '#' },
  },
  {
    id: '4',
    name: 'Sophia Laurent',
    position: 'International Sales Director',
    experience: '10 Years',
    phone: '+1 (212) 555-0400',
    email: 's.laurent@johnstateco.com',
    photo: IMAGES.agent4,
    properties: 76,
    rating: 4.7,
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Robert & Amanda Kensington',
    role: 'Homeowners',
    photo: IMAGES.client1,
    rating: 5,
    text: 'John State Co exceeded every expectation. They found us our dream estate in Palm Beach. Their attention to detail and market expertise is unparalleled.',
    property: 'Palm Beach Estate',
  },
  {
    id: '2',
    name: 'Catherine Blackwell',
    role: 'Property Investor',
    photo: IMAGES.client2,
    rating: 5,
    text: 'As an international investor, I needed an agency I could trust implicitly. John State Co delivered exceptional ROI on every acquisition. Truly world-class service.',
    property: 'Manhattan Portfolio',
  },
  {
    id: '3',
    name: 'James Thornton III',
    role: 'Tech Entrepreneur',
    photo: IMAGES.client3,
    rating: 5,
    text: 'The level of discretion and professionalism is extraordinary. They handled our $35M Malibu purchase seamlessly. I wouldn\'t work with anyone else.',
    property: 'Malibu Oceanfront',
  },
  {
    id: '4',
    name: 'Isabella Rodriguez-Smith',
    role: 'CEO, Meridian Group',
    photo: IMAGES.client4,
    rating: 5,
    text: 'From the first consultation to closing, the experience was flawless. Their portfolio of luxury properties is simply the finest I\'ve encountered anywhere.',
    property: 'Beverly Hills Villa',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'luxury-market-trends-2025',
    title: 'Luxury Real Estate Market Trends to Watch in 2025',
    excerpt: 'Explore the emerging trends shaping the luxury property market, from sustainable design to AI-powered smart homes.',
    category: 'Market Trends',
    image: IMAGES.blog1,
    author: 'Alexander Sterling',
    authorPhoto: IMAGES.agent1,
    date: 'Jun 10, 2025',
    readTime: '8 min read',
  },
  {
    id: '2',
    slug: 'investment-strategies-high-net-worth',
    title: 'Top Investment Strategies for High-Net-Worth Property Buyers',
    excerpt: 'Discover proven strategies for maximizing returns on premium real estate investments across global markets.',
    category: 'Investment Tips',
    image: IMAGES.blog2,
    author: 'Marcus Williams',
    authorPhoto: IMAGES.agent3,
    date: 'Jun 5, 2025',
    readTime: '6 min read',
  },
  {
    id: '3',
    slug: 'ultimate-guide-buying-first-luxury-home',
    title: 'The Ultimate Guide to Buying Your First Luxury Home',
    excerpt: 'Everything you need to know about acquiring your first premium property, from financing to closing.',
    category: 'Buying Guide',
    image: IMAGES.blog3,
    author: 'Victoria Chen',
    authorPhoto: IMAGES.agent2,
    date: 'May 28, 2025',
    readTime: '10 min read',
  },
];

export const categories = [
  { name: 'Villas', image: IMAGES.catVilla, count: 245 },
  { name: 'Condominiums', image: IMAGES.catCondo, count: 512 },
  { name: 'Apartments', image: IMAGES.catApartment, count: 1230 },
  { name: 'Commercial', image: IMAGES.catCommercial, count: 89 },
  { name: 'Land', image: IMAGES.catLand, count: 156 },
  { name: 'Investment', image: IMAGES.catInvestment, count: 320 },
];

export const investmentData = [
  { year: '2019', roi: 8.2, appreciation: 5.1, rental: 4.8 },
  { year: '2020', roi: 6.5, appreciation: 3.2, rental: 5.1 },
  { year: '2021', roi: 12.8, appreciation: 9.5, rental: 5.6 },
  { year: '2022', roi: 10.4, appreciation: 7.8, rental: 5.9 },
  { year: '2023', roi: 14.2, appreciation: 11.1, rental: 6.2 },
  { year: '2024', roi: 15.8, appreciation: 12.5, rental: 6.8 },
  { year: '2025', roi: 17.1, appreciation: 13.8, rental: 7.2 },
];

export const HERO_IMAGE = IMAGES.hero;
export const CTA_BG_IMAGE = IMAGES.ctaBg;
