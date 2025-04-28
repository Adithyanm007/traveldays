'use client';

import { useState, useEffect } from 'react';
import type { Destination } from '@/services/destination'; // Ensure Hotel is imported if added there
import { getDestinations } from '@/services/destination';
import { DestinationCard } from '@/components/destination-card';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardFooter } from '@/components/ui/card'; // Ensured CardFooter is imported
import { PackageSearch } from 'lucide-react'; // Icon for empty state

// Removed imports related to filtering: Checkbox, Label, useMemo, CardHeader, CardTitle

export function DestinationShowcase() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Removed state related to filtering: filteredDestinations, selectedInterests

  useEffect(() => {
    async function loadDestinations() {
      try {
        setIsLoading(true);
        setError(null);
        // Fetch all destinations without filtering
        const fetchedDestinations = await getDestinations();
        setDestinations(fetchedDestinations);
      } catch (err) {
        console.error("Failed to load destinations:", err);
        setError("Failed to load destinations. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    loadDestinations();
  }, []); // Load once on mount

  // Removed useMemo for allInterests and useEffect for filtering

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Explore Our Destinations</h2>
      {/* Removed the grid wrapper and filter column */}
      {/* Destination Grid now takes full width */}
        {error && !isLoading && <p className="text-destructive text-center col-span-full">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {isLoading
            ? Array.from({ length: 8 }).map((_, index) => ( // Show more skeletons for full width
                <Card key={index} className="w-full max-w-sm">
                    <Skeleton className="h-48 w-full" />
                    <CardContent className="p-4 space-y-2">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                    <div className="flex gap-2 pt-2">
                        <Skeleton className="h-5 w-8" />
                        <Skeleton className="h-5 w-12" />
                    </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                        <Skeleton className="h-9 w-24" />
                    </CardFooter>
                </Card>
                ))
            : destinations.length > 0
            ? destinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} /> // Use destination.id as key
                ))
            : !error && (
                <div className="col-span-full flex flex-col items-center justify-center p-10 text-center">
                    <PackageSearch className="h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold text-muted-foreground">No Destinations Available</h3>
                    <p className="text-muted-foreground">Please check back later.</p>
                </div>
             )}
        </div>
    </section>
  );
}
