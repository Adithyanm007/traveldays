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
}

// Enhanced mock data
const mockDestinations: Destination[] = [
  {
    id: 'paris',
    name: 'Paris, France',
    description: 'The City of Love, known for its iconic Eiffel Tower, Louvre Museum, and romantic ambiance.',
    imageUrls: ['https://picsum.photos/seed/paris/400/300'],
    tags: ['culture', 'romance', 'city', 'history'],
  },
  {
    id: 'bora-bora',
    name: 'Bora Bora, French Polynesia',
    description: 'A tropical paradise with crystal-clear waters, overwater bungalows, and stunning volcanic peaks.',
    imageUrls: ['https://picsum.photos/seed/borabora/400/300'],
    tags: ['relaxation', 'beach', 'luxury', 'tropical'],
  },
  {
    id: 'kyoto',
    name: 'Kyoto, Japan',
    description: 'The cultural heart of Japan, famous for its beautiful temples, traditional gardens, and geisha district.',
    imageUrls: ['https://picsum.photos/seed/kyoto/400/300'],
    tags: ['culture', 'history', 'nature', 'spiritual'],
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu, Peru',
    description: 'An ancient Incan citadel set high in the Andes Mountains, offering breathtaking views and historical significance.',
    imageUrls: ['https://picsum.photos/seed/machupicchu/400/300'],
    tags: ['adventure', 'history', 'mountains', 'hiking'],
  },
  {
    id: 'santorini',
    name: 'Santorini, Greece',
    description: 'A picturesque island known for its white-washed villages perched on cliffs overlooking the Aegean Sea.',
    imageUrls: ['https://picsum.photos/seed/santorini/400/300'],
    tags: ['romance', 'beach', 'island', 'views'],
  },
   {
    id: 'costa-rica',
    name: 'Costa Rica',
    description: 'A biodiverse haven offering lush rainforests, stunning beaches, volcanoes, and abundant wildlife.',
    imageUrls: ['https://picsum.photos/seed/costarica/400/300'],
    tags: ['adventure', 'nature', 'wildlife', 'beach', 'eco-tourism'],
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
  // if (filters?.interests && filters.interests.length > 0) {
  //   return mockDestinations.filter(dest =>
  //      filters.interests!.some(interest => dest.tags.includes(interest.toLowerCase()))
  //   );
  // }

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
