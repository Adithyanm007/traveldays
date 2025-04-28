import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getDestinationById, Hotel } from '@/services/destination'; // Assuming packages are linked to destinations, import Hotel
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, MapPin, Tag, Sun, Snowflake, BedDouble, Star } from 'lucide-react'; // More icons
import { Separator } from '@/components/ui/separator'; // Import Separator


export default async function PackageDetailPage({ params }: { params: { slug: string } }) {
  // The slug is assumed to be the destination ID for simplicity
  const destinationId = params.slug;
  const destination = await getDestinationById(destinationId);

  if (!destination) {
    notFound(); // Show 404 if destination/package not found
  }

  // Mock package details based on destination - Updated with INR prices
  const getMockPrice = () => {
    if (destination.tags.includes('luxury')) return '₹2,50,000+';
    if (destination.tags.includes('adventure') || destination.tags.includes('mountains')) return '₹1,20,000';
    if (destination.tags.includes('beach')) return '₹95,000';
    if (destination.tags.includes('city') || destination.tags.includes('culture')) return '₹75,000';
    return '₹80,000'; // Default price
  };

  const mockPackage = {
      name: `${destination.name} Explorer`,
      price: getMockPrice(),
      duration: destination.tags.includes('city') ? '5 Days' : (destination.tags.includes('beach') ? '7 Days' : 'Varies'),
      description: `An amazing package exploring the wonders of ${destination.name}. Immerse yourself in ${destination.tags.join(', ')}. ${destination.description}`,
      inclusions: ['Guided Tours', 'Airport Transfers', destination.tags.includes('beach') ? 'Snorkeling Gear' : 'Museum Passes', 'Accommodation Options Below'], // Updated inclusion
      bestTimeToVisit: destination.tags.includes('tropical') ? 'Dry Season (Dec-Apr)' : (destination.tags.includes('mountains') ? 'Shoulder Seasons (Apr-May, Sep-Oct)' : 'Year-round')
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="overflow-hidden shadow-lg w-full max-w-4xl mx-auto">
          <CardHeader className="p-0 relative h-64 md:h-96 w-full">
             <Image
                src={destination.imageUrls[0] || 'https://picsum.photos/800/600'}
                alt={destination.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority // Prioritize loading the main image
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
             <div className="absolute bottom-0 left-0 p-6 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{mockPackage.name}</h1>
                <div className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5"/>
                    <span>{destination.name}</span>
                </div>
             </div>
          </CardHeader>
          <CardContent className="p-6 grid md:grid-cols-3 gap-8">
             <div className="md:col-span-2 space-y-6">
                <h2 className="text-2xl font-semibold text-primary border-b pb-2">Package Details</h2>
                <p className="text-muted-foreground leading-relaxed">{mockPackage.description}</p>

                 <div>
                    <h3 className="font-semibold text-lg mb-2">Inclusions:</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {mockPackage.inclusions.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                 </div>

                 {/* Hotel Section */}
                {destination.hotels && destination.hotels.length > 0 && (
                <div className="pt-4">
                    <Separator className="my-4" />
                    <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                        <BedDouble className="h-6 w-6" /> Hotel Options
                    </h2>
                    <div className="space-y-4">
                        {destination.hotels.map((hotel) => (
                            <Card key={hotel.id} className="flex flex-col sm:flex-row gap-4 p-4 bg-secondary/30">
                                <div className="relative w-full sm:w-1/3 h-40 sm:h-auto shrink-0">
                                    <Image
                                        src={hotel.imageUrl || 'https://picsum.photos/200/150'}
                                        alt={hotel.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                        className="rounded-md"
                                    />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <CardTitle className="text-lg mb-1">{hotel.name}</CardTitle>
                                        <CardDescription className="text-sm text-muted-foreground mb-2">{hotel.description}</CardDescription>
                                        {/* Example: Add a placeholder rating */}
                                        <div className="flex items-center gap-1 text-yellow-500 mb-2">
                                            <Star className="h-4 w-4 fill-current"/>
                                            <Star className="h-4 w-4 fill-current"/>
                                            <Star className="h-4 w-4 fill-current"/>
                                            <Star className="h-4 w-4 fill-current"/>
                                            <Star className="h-4 w-4"/>
                                            <span className="text-xs text-muted-foreground ml-1">(Example Rating)</span>
                                        </div>
                                    </div>
                                    <p className="text-lg font-semibold text-primary mt-2">{hotel.price}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
                )}
                {/* End Hotel Section */}

             </div>
             <div className="md:col-span-1 space-y-4">
                 <Card className="bg-secondary/50 p-4 sticky top-4"> {/* Added sticky */}
                     <div className="flex justify-between items-center mb-3">
                         <span className="text-xl font-bold text-primary">Package Price:</span>
                         <span className="text-xl font-bold text-primary">{mockPackage.price}</span>
                     </div>
                      <p className="text-xs text-muted-foreground mb-3">per person, flights not included. Hotel costs may vary.</p>
                     <Separator className="mb-3"/>
                     <div className="space-y-2 text-sm">
                         <div className="flex items-center gap-2">
                             <CalendarDays className="h-4 w-4 text-primary" />
                             <span>Duration: {mockPackage.duration}</span>
                         </div>
                         <div className="flex items-center gap-2">
                             <Tag className="h-4 w-4 text-primary" />
                             <span>Interests: {destination.tags.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ')}</span>
                         </div>
                          <div className="flex items-center gap-2">
                            {destination.tags.includes('tropical') || destination.tags.includes('beach') ? <Sun className="h-4 w-4 text-primary" /> : <Snowflake className="h-4 w-4 text-primary" />}
                            <span>Best Time: {mockPackage.bestTimeToVisit}</span>
                         </div>
                     </div>
                     <Link href="/booking" passHref>
                        <Button size="lg" className="w-full mt-4 bg-accent hover:bg-accent/90">Book Now</Button>
                     </Link>
                 </Card>
             </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
