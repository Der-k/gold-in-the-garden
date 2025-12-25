"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { RecommendationsForm } from "./recommendations-form";
import { useState } from "react";

export function RecommendationsModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="w-full">
          <Sparkles className="mr-2 h-4 w-4" />
          Get AI Recommendations
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Smart Event Recommendations</DialogTitle>
          <DialogDescription>
            Tell us what you like, and we'll find events for you.
          </DialogDescription>
        </DialogHeader>
        <RecommendationsForm onFinished={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
