'use server';

/**
 * @fileOverview Provides personalized event recommendations based on user interests and past event attendance.
 *
 * - getPersonalizedEventRecommendations - A function that returns personalized event recommendations.
 * - PersonalizedEventRecommendationsInput - The input type for the getPersonalizedEventRecommendations function.
 * - PersonalizedEventRecommendationsOutput - The return type for the getPersonalizedEventRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedEventRecommendationsInputSchema = z.object({
  userInterests: z
    .array(z.string())
    .describe('A list of the user interests (e.g. music, art, sports).'),
  pastEventAttendance: z
    .array(z.string())
    .describe(
      'A list of event names the user has attended in the past (e.g. "Summer Music Festival", "Local Art Fair").'
    ),
});
export type PersonalizedEventRecommendationsInput = z.infer<
  typeof PersonalizedEventRecommendationsInputSchema
>;

const PersonalizedEventRecommendationsOutputSchema = z.object({
  recommendedEvents: z
    .array(z.string())
    .describe(
      'A list of event names recommended to the user based on their interests and past attendance.'
    ),
});
export type PersonalizedEventRecommendationsOutput = z.infer<
  typeof PersonalizedEventRecommendationsOutputSchema
>;

export async function getPersonalizedEventRecommendations(
  input: PersonalizedEventRecommendationsInput
): Promise<PersonalizedEventRecommendationsOutput> {
  return personalizedEventRecommendationsFlow(input);
}

const personalizedEventRecommendationsPrompt = ai.definePrompt({
  name: 'personalizedEventRecommendationsPrompt',
  input: {schema: PersonalizedEventRecommendationsInputSchema},
  output: {schema: PersonalizedEventRecommendationsOutputSchema},
  prompt: `You are an AI assistant that provides personalized event recommendations to users based on their interests and past event attendance.

  User Interests: {{userInterests}}
  Past Event Attendance: {{pastEventAttendance}}

  Based on the user's interests and past event attendance, recommend a list of events that they might be interested in.
  The events should be tailored to the user's specific preferences and should be diverse and engaging.
  Return only a list of event names. Do not include any additional information or explanations.
  `,
});

const personalizedEventRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedEventRecommendationsFlow',
    inputSchema: PersonalizedEventRecommendationsInputSchema,
    outputSchema: PersonalizedEventRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await personalizedEventRecommendationsPrompt(input);
    return output!;
  }
);
