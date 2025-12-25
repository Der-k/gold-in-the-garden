import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h2 className="text-4xl font-bold">Not Found</h2>
      <p className="mt-4 text-lg text-muted-foreground">Could not find the requested page.</p>
      <Link href="/" className="mt-8 px-4 py-2 bg-primary text-primary-foreground rounded-md">
        Return Home
      </Link>
    </div>
  )
}
