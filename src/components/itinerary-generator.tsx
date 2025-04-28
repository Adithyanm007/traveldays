'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { generateTravelItinerary, GenerateTravelItineraryInput, GenerateTravelItineraryOutput } from '@/ai/flows/generate-travel-itinerary';
import { Loader2, Wand2 } from 'lucide-react';

const itineraryFormSchema = z.object({
  interests: z.string().min(3, { message: "Please describe your interests (e.g., adventure, beaches, history)." }),
  budget: z.enum(["low", "medium", "high"], { required_error: "Please select your budget level." }),
  travelDates: z.string().min(5, { message: "Please enter approximate travel dates (e.g., July 2024, next summer)." }),
});

type ItineraryFormValues = z.infer<typeof itineraryFormSchema>;

export function ItineraryGenerator() {
  const [itinerary, setItinerary] = useState<GenerateTravelItineraryOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ItineraryFormValues>({
    resolver: zodResolver(itineraryFormSchema),
    defaultValues: {
      interests: '',
      budget: undefined, // Explicitly undefined for enum
      travelDates: '',
    },
  });

  async function onSubmit(values: ItineraryFormValues) {
    setIsLoading(true);
    setError(null);
    setItinerary(null);

    try {
      const input: GenerateTravelItineraryInput = {
        interests: values.interests.split(',').map(s => s.trim()).filter(s => s), // Split interests string into array
        budget: values.budget,
        travelDates: values.travelDates,
      };
      const result = await generateTravelItinerary(input);
      setItinerary(result);
    } catch (err) {
      console.error("Error generating itinerary:", err);
      setError("Failed to generate itinerary. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="py-12 bg-secondary rounded-lg mt-12">
      <Card className="max-w-2xl mx-auto shadow-lg border-primary border">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary flex items-center justify-center gap-2">
             <Wand2 className="h-6 w-6 text-accent"/> AI Itinerary Generator
          </CardTitle>
          <CardDescription>Tell us your preferences, and we'll suggest a trip!</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interests</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., adventure, relaxation, culture, beaches" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget</FormLabel>
                    <FormControl>
                       {/* Using simple select for budget for now */}
                       <select
                          {...field}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="" disabled>Select budget</option>
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                        </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="travelDates"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Travel Dates</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., July 2024, Next Summer, 2 weeks in December" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
                {isLoading ? (
                   <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                   </>
                ) : (
                  'Generate Itinerary'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        {error && (
          <CardFooter className="flex justify-center p-4">
            <p className="text-destructive text-sm">{error}</p>
          </CardFooter>
        )}
        {itinerary && !isLoading && (
          <CardFooter className="flex flex-col items-start p-4 pt-0 space-y-4">
             <Separator className="my-4"/>
            <h3 className="text-lg font-semibold text-primary">Suggested Itinerary:</h3>
             <div>
                <h4 className="font-medium">Destinations:</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm">
                  {itinerary.destinations.map((dest, index) => <li key={index}>{dest}</li>)}
                </ul>
             </div>
             <div>
                <h4 className="font-medium">Activities:</h4>
                 <ul className="list-disc list-inside text-muted-foreground text-sm">
                  {itinerary.activities.map((activity, index) => <li key={index}>{activity}</li>)}
                </ul>
             </div>
          </CardFooter>
        )}
      </Card>
    </section>
  );
}

// Need separator component
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName
