"use client";

import { Sparkles, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';

export function EventSearchBar() {
    return (
        <div className="relative flex items-center gap-2">
            <div className="relative w-full">
                <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/80" />
                <Input 
                    placeholder="AI powered search..." 
                    className="pl-10 bg-primary text-primary-foreground placeholder:text-primary-foreground/80 focus-visible:ring-blue-500 focus-visible:ring-2 focus-visible:ring-offset-0"
                />
            </div>
            <Button size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-blue-500 focus-visible:ring-2 focus-visible:ring-offset-0 flex-shrink-0">
                <Send className="h-5 w-5" />
            </Button>
        </div>
    )
}
