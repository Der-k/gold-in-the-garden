"use client";

import { useFormState, useFormStatus } from "react-dom";
import { getRecommendations } from "@/app/actions";
import { Button } from "./ui/button";
import { eventCategories, events } from "@/lib/events-data";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2, PartyPopper } from "lucide-react";

const initialState = {
  message: "",
  errors: null,
  recommendations: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Get My Recommendations
    </Button>
  );
}

export function RecommendationsForm({ onFinished }: { onFinished: () => void }) {
  const [state, formAction] = useFormState(getRecommendations, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && state.message !== "Success") {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: state.message,
      });
    }
  }, [state.message, toast]);

  const handleReset = () => {
    formRef.current?.reset();
    // This is a bit of a hack to reset the form state in the server action
    getRecommendations(initialState, new FormData()); 
  }

  if (state.recommendations) {
    return (
        <Card className="text-center">
            <CardHeader>
                <div className="mx-auto bg-primary/20 rounded-full p-3 w-fit">
                    <PartyPopper className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Here are your recommendations!</CardTitle>
                <CardDescription>Based on your preferences, you might like these:</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-left">
                    {state.recommendations.map((rec, index) => (
                        <li key={index}>{rec}</li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                 <Button onClick={onFinished} className="w-full">Great, thanks!</Button>
                 <Button onClick={handleReset} variant="ghost" className="w-full">Try again</Button>
            </CardFooter>
        </Card>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div>
        <Label className="text-base font-semibold">Your Interests</Label>
        <p className="text-sm text-muted-foreground mb-4">Select categories you enjoy.</p>
        <div className="grid grid-cols-2 gap-4">
          {eventCategories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={`interest-${category}`} name="userInterests" value={category} />
              <Label htmlFor={`interest-${category}`} className="font-normal">{category}</Label>
            </div>
          ))}
        </div>
        {state.errors?.userInterests && (
          <p className="text-sm font-medium text-destructive mt-2">{state.errors.userInterests[0]}</p>
        )}
      </div>
      <div>
        <Label className="text-base font-semibold">Events You've Attended</Label>
        <p className="text-sm text-muted-foreground mb-4">Select some events you liked in the past.</p>
        <div className="grid grid-cols-1 gap-2">
          {events.slice(0, 4).map((event) => (
            <div key={event.id} className="flex items-center space-x-2">
              <Checkbox id={`event-${event.id}`} name="pastEventAttendance" value={event.id} />
              <Label htmlFor={`event-${event.id}`} className="font-normal">{event.title}</Label>
            </div>
          ))}
        </div>
        {state.errors?.pastEventAttendance && (
          <p className="text-sm font-medium text-destructive mt-2">{state.errors.pastEventAttendance[0]}</p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
