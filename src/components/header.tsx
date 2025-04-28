import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MountainSnow } from 'lucide-react'; // Using MountainSnow as a placeholder travel icon

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <MountainSnow className="h-6 w-6" />
          <span>TRAVELDAYS</span>
        </Link>
        <div className="flex items-center gap-2 md:gap-4"> {/* Adjusted gap for responsiveness */}
          <Link href="/destinations" passHref>
             <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 px-2 md:px-4">Destinations</Button> {/* Added padding */}
          </Link>
          <Link href="/packages" passHref>
             <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 px-2 md:px-4">Packages</Button> {/* Added padding */}
          </Link>
          <Link href="/about" passHref>
             <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 px-2 md:px-4">About</Button> {/* Added About link and padding */}
          </Link>
          <Link href="/login" passHref>
            <Button variant="secondary" size="sm" className="px-3 md:px-4">Login</Button> {/* Adjusted size and padding */}
          </Link>
        </div>
      </nav>
    </header>
  );
}
