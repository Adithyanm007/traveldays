// This file is machine-generated - edit with caution!
'use server';
/**
 * @fileOverview A travel itinerary generator AI agent.
 *
 * - generateTravelItinerary - A function that handles the travel itinerary generation process.
 * - GenerateTravelItineraryInput - The input type for the generateTravelItinerary function.
 * - GenerateTravelItineraryOutput - The return type for the generateTravelItinerary function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';
import {getDestinations, Destination} from '@/services/destination';

const GenerateTravelItineraryInputSchema = z.object({
  interests: z.array(z.string()).describe('The interests of the user, e.g. adventure, relaxation, culture.'),
  budget: z.string().describe('The budget of the user, e.g. low, medium, high.'),
  travelDates: z.string().describe('The travel dates of the user, e.g. 2024-01-01 to 2024-01-07.'),
});
export type GenerateTravelItineraryInput = z.infer<typeof GenerateTravelItineraryInputSchema>;

const GenerateTravelItineraryOutputSchema = z.object({
  destinations: z.array(z.string()).describe('The destinations that are suggested for the user.'),
  activities: z.array(z.string()).describe('The activities that are suggested for the user.'),
});
export type GenerateTravelItineraryOutput = z.infer<typeof GenerateTravelItineraryOutputSchema>;

export async function generateTravelItinerary(input: GenerateTravelItineraryInput): Promise<GenerateTravelItineraryOutput> {
  return generateTravelItineraryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTravelItineraryPrompt',
  input: {
    schema: z.object({
      interests: z.array(z.string()).describe('The interests of the user, e.g. adventure, relaxation, culture.'),
      budget: z.string().describe('The budget of the user, e.g. low, medium, high.'),
      travelDates: z.string().describe('The travel dates of the user, e.g. 2024-01-01 to 2024-01-07.'),
      destinations: z.array(z.string()).describe('The destinations that are available for the user.'),
    }),
  },
  output: {
    schema: z.object({
      destinations: z.array(z.string()).describe('The destinations that are suggested for the user.'),
      activities: z.array(z.string()).describe('The activities that are suggested for the user.'),
    }),
  },
  prompt: `You are a travel agent. A user is looking for a travel itinerary based on their interests, budget, and travel dates.

  Interests: {{{interests}}}
  Budget: {{{budget}}}
  Travel Dates: {{{travelDates}}}
  Available Destinations: {{{destinations}}}

  Suggest destinations and activities for the user. Return the destinations and activities in a JSON format. Focus on destinations that match the users interests, budget, and travel dates. 
  `,
});

const generateTravelItineraryFlow = ai.defineFlow<
  typeof GenerateTravelItineraryInputSchema,
  typeof GenerateTravelItineraryOutputSchema
>({
  name: 'generateTravelItineraryFlow',
  inputSchema: GenerateTravelItineraryInputSchema,
  outputSchema: GenerateTravelItineraryOutputSchema,
}, async input => {
  // Get the available destinations.
  const destinations = await getDestinations({interests: input.interests});

  const {output} = await prompt({
    ...input,
    destinations: destinations.map(destination => destination.name),
  });
  return output!;
});
