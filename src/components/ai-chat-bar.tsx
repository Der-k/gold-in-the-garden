"use client";

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function AiChatBar() {
    return (
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
                placeholder="Ask questions, search for events and get recommendations" 
                className="pl-10 bg-card border shadow-sm"
            />
        </div>
    )
}
