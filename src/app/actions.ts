"use server";

import { getPersonalizedEventRecommendations } from "@/ai/flows/personalized-event-recommendations";
import { z } from "zod";
import { events } from "@/lib/events-data";

const recommendationSchema = z.object({
  userInterests: z.array(z.string()).min(1, { message: "Please select at least one interest." }),
  pastEventAttendance: z.array(z.string()).min(1, { message: "Please select at least one past event." }),
});

type State = {
  message?: string | null;
  errors?: {
    userInterests?: string[];
    pastEventAttendance?: string[];
  } | null;
  recommendations?: string[] | null;
};

export async function getRecommendations(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = recommendationSchema.safeParse({
    userInterests: formData.getAll("userInterests"),
    pastEventAttendance: formData.getAll("pastEventAttendance"),
  });

  if (!validatedFields.success) {
    return {
      message: "Invalid form data.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const pastEventTitles = validatedFields.data.pastEventAttendance
    .map(eventId => events.find(e => e.id === eventId)?.title)
    .filter((title): title is string => !!title);

  try {
    const result = await getPersonalizedEventRecommendations({
        userInterests: validatedFields.data.userInterests,
        pastEventAttendance: pastEventTitles,
    });
    return {
      message: "Success",
      recommendations: result.recommendedEvents,
    };
  } catch (error) {
    console.error("AI service error:", error);
    return {
      message: "The recommendation service is currently unavailable. Please try again later.",
      errors: null,
    };
  }
}
