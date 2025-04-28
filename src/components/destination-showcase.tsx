'use client';

import { useState, useEffect, useMemo } from 'react';
import type { Destination } from '@/services/destination';
import { getDestinations } from '@/services/destination';
import { DestinationCard } from '@/components/destination-card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'; // Ensured CardFooter is imported

export function DestinationShowcase() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDestinations() {
      try {
        setIsLoading(true);
        setError(null);
        // Pass selected interests to the API call (though the mock doesn't use it yet)
        const fetchedDestinations = await getDestinations({ interests: selectedInterests });
        setDestinations(fetchedDestinations);
        setFilteredDestinations(fetchedDestinations); // Initially show all
      } catch (err) {
        console.error("Failed to load destinations:", err);
        setError("Failed to load destinations. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    loadDestinations();
  }, []); // Load once on mount

  const allInterests = useMemo(() => {
    const interestsSet = new Set<string>();
    destinations.forEach(dest => dest.tags.forEach(tag => interestsSet.add(tag)));
    return Array.from(interestsSet);
  }, [destinations]);

  useEffect(() => {
    if (selectedInterests.length === 0) {
      setFilteredDestinations(destinations);
    } else {
      setFilteredDestinations(
        destinations.filter(dest =>
          selectedInterests.some(interest => dest.tags.includes(interest))
        )
      );
    }
  }, [selectedInterests, destinations]);

  const handleInterestChange = (interest: string, checked: boolean | string) => {
    // Ensure checked is boolean
    const isChecked = checked === true;

    setSelectedInterests(prev =>
      isChecked
        ? [...prev, interest]
        : prev.filter(i => i !== interest)
    );
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Explore Our Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filter Section */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Filter by Interest</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {isLoading ? (
                 <>
                    <Skeleton className="h-5 w-24 mb-2" />
                    <Skeleton className="h-5 w-20 mb-2" />
                    <Skeleton className="h-5 w-28" />
                 </>
              ) : error ? (
                 <p className="text-destructive">{error}</p>
              ): allInterests.length > 0 ? (
                 allInterests.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                        id={interest}
                        checked={selectedInterests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, checked)}
                    />
                    <Label htmlFor={interest} className="text-sm font-medium capitalize">
                        {interest}
                    </Label>
                    </div>
                ))
              ) : (
                 <p className="text-muted-foreground text-sm">No interests found.</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Destination Grid */}
        <div className="md:col-span-3">
            {error && !isLoading && <p className="text-destructive text-center col-span-full">{error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading
                ? Array.from({ length: 6 }).map((_, index) => (
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
                : filteredDestinations.length > 0
                ? filteredDestinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} /> // Use destination.id as key
                    ))
                : !error && <p className="text-muted-foreground text-center col-span-full">No destinations match your selected interests.</p>}
            </div>
        </div>
      </div>
    </section>
  );
}

