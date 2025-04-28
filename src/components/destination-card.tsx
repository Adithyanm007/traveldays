import type { Destination } from '@/services/destination';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={destination.imageUrls[0] || 'https://picsum.photos/400/300'}
            alt={destination.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold mb-1">{destination.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground h-10 overflow-hidden mb-3">{destination.description}</CardDescription>
        <div className="flex flex-wrap gap-1 mb-3">
          {destination.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardContent>
       <CardFooter className="p-4 pt-0">
         {/* Use destination ID for the link */}
         <Link href={`/packages/${destination.id}`} passHref>
            <Button variant="default" size="sm">View Package</Button>
         </Link>
      </CardFooter>
    </Card>
  );
}
