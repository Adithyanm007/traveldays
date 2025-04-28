import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getDestinationById } from '@/services/destination'; // Assuming packages are linked to destinations
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, MapPin, Tag, Users, Sun, Snowflake } from 'lucide-react'; // More icons

// This function tells Next.js which slugs to pre-render
// export async function generateStaticParams() {
//   const destinations = await getDestinations(); // Fetch all possible destinations/packages
//   return destinations.map((dest) => ({
//     slug: dest.id, // Use the destination ID as the slug
//   }));
// }
// Note: generateStaticParams disabled for now as getDestinations is mock and might change.
// Enable later for performance optimization if needed.


export default async function PackageDetailPage({ params }: { params: { slug: string } }) {
  // The slug is assumed to be the destination ID for simplicity
  const destinationId = params.slug;
  const destination = await getDestinationById(destinationId);

  if (!destination) {
    notFound(); // Show 404 if destination/package not found
  }

  // Mock package details based on destination
  const mockPackage = {
      name: `${destination.name} Explorer`,
      price: destination.tags.includes('luxury') ? '$3000+' : (destination.tags.includes('adventure') ? '$1500' : '$1000'),
      duration: destination.tags.includes('city') ? '5 Days' : (destination.tags.includes('beach') ? '7 Days' : 'Varies'),
      description: `An amazing package exploring the wonders of ${destination.name}. Immerse yourself in ${destination.tags.join(', ')}. ${destination.description}`,
      inclusions: ['Accommodation', 'Guided Tours', 'Airport Transfers', destination.tags.includes('beach') ? 'Snorkeling Gear' : 'Museum Passes'],
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
                layout="fill"
                objectFit="cover"
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
             </div>
             <div className="md:col-span-1 space-y-4">
                 <Card className="bg-secondary/50 p-4">
                     <div className="flex justify-between items-center mb-3">
                         <span className="text-2xl font-bold text-primary">{mockPackage.price}</span>
                         <span className="text-sm text-muted-foreground">per person</span>
                     </div>
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
