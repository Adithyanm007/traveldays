/**
 * Represents hotel information.
 */
export interface Hotel {
  /** Unique identifier for the hotel */
  id: string;
  /** Name of the hotel */
  name: string;
  /** Price indication (e.g., per night) */
  price: string;
  /** URL for the hotel image */
  imageUrl: string;
  /** Brief description or key feature */
  description: string;
}


/**
 * Represents a travel destination.
 */
export interface Destination {
  /** Unique identifier for the destination */
  id: string;
  /**
   * The name of the destination.
   */
  name: string;
  /**
   * A brief description of the destination.
   */
  description: string;
  /**
   * An array of image URLs for the destination.
   */
  imageUrls: string[];
  /**
   * An array of tags or categories associated with the destination (e.g., adventure, relaxation, culture).
   */
  tags: string[];
  /**
   * An array of hotels available at the destination.
   */
  hotels: Hotel[];
}

// Enhanced mock data including hotels with INR prices
const mockDestinations: Destination[] = [
  {
    id: 'paris',
    name: 'Paris, France',
    description: 'The City of Love, known for its iconic Eiffel Tower, Louvre Museum, and romantic ambiance.',
    imageUrls: ['https://picsum.photos/seed/paris/400/300'],
    tags: ['culture', 'romance', 'city', 'history'],
    hotels: [
        { id: 'hotel-paris-1', name: 'Le Bristol Paris', price: '₹1,00,000/night', imageUrl: 'https://picsum.photos/seed/hotelparis1/200/150', description: 'Luxury palace hotel near Champs-Élysées.' },
        { id: 'hotel-paris-2', name: 'Hotel Marignan Champs-Elysées', price: '₹38,000/night', imageUrl: 'https://picsum.photos/seed/hotelparis2/200/150', description: 'Chic hotel with Eiffel Tower views.' },
    ],
  },
  {
    id: 'bora-bora',
    name: 'Bora Bora, French Polynesia',
    description: 'A tropical paradise with crystal-clear waters, overwater bungalows, and stunning volcanic peaks.',
    imageUrls: ['https://picsum.photos/seed/borabora/400/300'],
    tags: ['relaxation', 'beach', 'luxury', 'tropical'],
    hotels: [
        { id: 'hotel-bora-1', name: 'Four Seasons Resort Bora Bora', price: '₹1,50,000/night', imageUrl: 'https://picsum.photos/seed/hotelbora1/200/150', description: 'Iconic overwater bungalows and spa.' },
        { id: 'hotel-bora-2', name: 'The St. Regis Bora Bora Resort', price: '₹1,80,000/night', imageUrl: 'https://picsum.photos/seed/hotelbora2/200/150', description: 'Ultimate luxury with private butlers.' },
    ],
  },
  {
    id: 'mumbai',
    name: 'Mumbai, India',
    description: 'The vibrant financial capital of India, known for Bollywood, colonial architecture, and bustling street life.', // Removed price from description
    imageUrls: ['https://picsum.photos/seed/mumbai/400/300'],
    tags: ['culture', 'city', 'food', 'business'],
    hotels: [
        { id: 'hotel-mumbai-1', name: 'The Taj Mahal Palace', price: '₹28,000/night', imageUrl: 'https://picsum.photos/seed/hotelmumbai1/200/150', description: 'Historic luxury hotel overlooking the Gateway of India.' },
        { id: 'hotel-mumbai-2', name: 'Trident Nariman Point', price: '₹15,000/night', imageUrl: 'https://picsum.photos/seed/hotelmumbai2/200/150', description: 'Modern hotel with panoramic ocean views.' },
    ],
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu, Peru',
    description: 'An ancient Incan citadel set high in the Andes Mountains, offering breathtaking views and historical significance.',
    imageUrls: ['https://picsum.photos/seed/machupicchu/400/300'],
    tags: ['adventure', 'history', 'mountains', 'hiking'],
     hotels: [
        { id: 'hotel-machu-1', name: 'Belmond Sanctuary Lodge', price: '₹1,25,000/night', imageUrl: 'https://picsum.photos/seed/hotelmachu1/200/150', description: 'Only hotel located adjacent to the citadel.' },
        { id: 'hotel-machu-2', name: 'Inkaterra Machu Picchu Pueblo Hotel', price: '₹50,000/night', imageUrl: 'https://picsum.photos/seed/hotelmachu2/200/150', description: 'Luxury eco-lodge in Aguas Calientes.' },
    ],
  },
  {
    id: 'santorini',
    name: 'Santorini, Greece',
    description: 'A picturesque island known for its white-washed villages perched on cliffs overlooking the Aegean Sea.',
    imageUrls: ['https://picsum.photos/seed/santorini/400/300'],
    tags: ['romance', 'beach', 'island', 'views'],
     hotels: [
        { id: 'hotel-santorini-1', name: 'Canaves Oia Suites', price: '₹75,000/night', imageUrl: 'https://picsum.photos/seed/hotelsantorini1/200/150', description: 'Luxury suites with private plunge pools.' },
        { id: 'hotel-santorini-2', name: 'Katikies Santorini', price: '₹90,000/night', imageUrl: 'https://picsum.photos/seed/hotelsantorini2/200/150', description: 'Cliffside hotel with infinity pools.' },
    ],
  },
   {
    id: 'costa-rica',
    name: 'Costa Rica',
    description: 'A biodiverse haven offering lush rainforests, stunning beaches, volcanoes, and abundant wildlife.',
    imageUrls: ['https://picsum.photos/seed/costarica/400/300'],
    tags: ['adventure', 'nature', 'wildlife', 'beach', 'eco-tourism'],
     hotels: [
        { id: 'hotel-costa-1', name: 'Nayara Gardens', price: '₹40,000/night', imageUrl: 'https://picsum.photos/seed/hotelcosta1/200/150', description: 'Luxury bungalows near Arenal Volcano.' },
        { id: 'hotel-costa-2', name: 'Andaz Costa Rica Resort at Peninsula Papagayo', price: '₹55,000/night', imageUrl: 'https://picsum.photos/seed/hotelcosta2/200/150', description: 'Beachfront resort with modern design.' },
    ],
  },
  {
    id: 'kyoto', // Added Kyoto back
    name: 'Kyoto, Japan',
    description: 'The cultural heart of Japan, famous for its beautiful temples, traditional gardens, and geisha district.',
    imageUrls: ['https://picsum.photos/seed/kyoto/400/300'],
    tags: ['culture', 'history', 'nature', 'spiritual'],
    hotels: [
      { id: 'hotel-kyoto-1', name: 'Ritz-Carlton Kyoto', price: '₹85,000/night', imageUrl: 'https://picsum.photos/seed/hotelkyoto1/200/150', description: 'Riverside luxury with traditional aesthetics.' },
      { id: 'hotel-kyoto-2', name: 'Hyatt Regency Kyoto', price: '₹30,000/night', imageUrl: 'https://picsum.photos/seed/hotelkyoto2/200/150', description: 'Contemporary design in Higashiyama district.' },
    ],
  },
];


/**
 * Asynchronously retrieves a list of travel destinations.
 * Currently uses mock data.
 * The filter parameter is present but not yet implemented in the mock retrieval.
 *
 * @param filters An object containing filter criteria such as interests. (Currently ignored in mock)
 * @returns A promise that resolves to an array of Destination objects.
 */
export async function getDestinations(filters?: {
  interests?: string[];
}): Promise<Destination[]> {
  console.log("Filtering by interests (mock):", filters?.interests); // Log filter attempt

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // In a real implementation, you would filter based on `filters.interests` here
  // For now, we return all mock destinations.
  // If filtering was implemented:
   if (filters?.interests && filters.interests.length > 0) {
     return mockDestinations.filter(dest =>
        filters.interests!.some(interest => dest.tags.includes(interest.toLowerCase()))
     );
   }

  return mockDestinations;
}

/**
 * Asynchronously retrieves details for a single destination by its ID.
 * Currently uses mock data.
 *
 * @param id The ID of the destination to retrieve.
 * @returns A promise that resolves to a Destination object or null if not found.
 */
export async function getDestinationById(id: string): Promise<Destination | null> {
   // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));

  const destination = mockDestinations.find(dest => dest.id === id);
  return destination || null;
}

// Optional: Function to get hotels for a specific destination
export async function getHotelsByDestinationId(destinationId: string): Promise<Hotel[]> {
   // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 200));
  const destination = mockDestinations.find(dest => dest.id === destinationId);
  return destination?.hotels || [];
}
