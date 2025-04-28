import type { Destination } from '@/services/destination';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { BedDouble } from 'lucide-react'; // Import hotel icon

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={destination.imageUrls[0] || 'https://picsum.photos/400/300'}
            alt={destination.name}
            fill // Use fill instead of layout
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Add sizes prop
            style={{ objectFit: 'cover' }} // Use style for objectFit
            className="transition-transform duration-300 group-hover:scale-105"
            priority={false} // Optional: set priority based on position
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-semibold mb-1">{destination.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground h-10 overflow-hidden mb-3">{destination.description}</CardDescription>
        <div className="flex flex-wrap gap-1 mb-3">
          {destination.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs capitalize">{tag}</Badge>
          ))}
        </div>
         {/* Display hotel count */}
         {destination.hotels && destination.hotels.length > 0 && (
            <div className="flex items-center text-sm text-muted-foreground mt-2">
                <BedDouble className="h-4 w-4 mr-1.5 text-primary"/>
                <span>{destination.hotels.length} Hotel Options</span>
            </div>
        )}
      </CardContent>
       <CardFooter className="p-4 pt-0 mt-auto"> {/* Use mt-auto to push footer down */}
         {/* Link to the specific package/destination detail page */}
         <Link href={`/packages/${destination.id}`} passHref>
            <Button variant="default" size="sm">View Details</Button>
         </Link>
      </CardFooter>
    </Card>
  );
}
