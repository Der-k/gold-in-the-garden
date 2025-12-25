'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function BackButton() {
  const router = useRouter();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => router.back()}
      className="absolute top-24 left-4 z-50"
    >
      <ArrowLeft className="h-5 w-5" />
    </Button>
  );
}
