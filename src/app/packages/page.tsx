import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PackageSearch } from 'lucide-react'; // Example icon
import Link from 'next/link'; // Import Link
import { getDestinations } from '@/services/destination'; // Import service to get destinations
import Image from 'next/image'; // Import Image
import { Button } from '@/components/ui/button'; // Import Button


export default async function PackagesPage() {
  // Fetch destinations to create mock packages based on them
  const destinations = await getDestinations();

  // Map destinations to package structure with INR prices
  const packages = destinations.map((dest) => {
     // Define mock price based on destination tags (similar logic to detail page)
     const getMockPrice = () => {
        if (dest.tags.includes('luxury')) return '₹2,50,000+';
        if (dest.tags.includes('adventure') || dest.tags.includes('mountains')) return '₹1,20,000';
        if (dest.tags.includes('beach')) return '₹95,000';
        if (dest.tags.includes('city') || dest.tags.includes('culture')) return '₹75,000';
        return '₹80,000'; // Default price
     };

     // Define mock duration based on destination tags
     const getMockDuration = () => {
         if (dest.tags.includes('city')) return '5 Days';
         if (dest.tags.includes('beach') || dest.tags.includes('tropical')) return '7 Days';
         if (dest.tags.includes('adventure')) return '6 Days';
         return 'Varies'; // Default duration
     };


    return {
      id: dest.id, // Use destination ID as package ID
      name: `${dest.name} Explorer`, // Example package name
      price: getMockPrice(),
      duration: getMockDuration(),
      image: dest.imageUrls[0] || 'https://picsum.photos/400/300?random=' + Math.random(), // Use first image or random
      description: dest.description, // Use destination description
    };
  });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">Our Travel Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-0 relative h-48 w-full">
                <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                />
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <CardTitle className="text-xl mb-1">{pkg.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-2 h-10 overflow-hidden">{pkg.description}</CardDescription>
                 <CardDescription className="text-sm text-muted-foreground mb-4 font-medium">{pkg.duration}</CardDescription>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-lg font-semibold text-primary">{pkg.price}</span>
                  {/* Link to the package detail page */}
                   <Link href={`/packages/${pkg.id}`} passHref>
                    <Button variant="default" size="sm">View Details</Button>
                   </Link>
                </div>
              </CardContent>
            </Card>
          ))}
           {/* Placeholder if no packages */}
           {packages.length === 0 && (
             <Card className="col-span-full flex flex-col items-center justify-center p-10 border-dashed">
                <PackageSearch className="h-16 w-16 text-muted-foreground mb-4" />
                <CardTitle className="text-xl text-muted-foreground">No Packages Available Yet</CardTitle>
                <CardDescription>Check back soon for exciting travel deals!</CardDescription>
             </Card>
           )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Button component definition remains unchanged from the previous state
// import * as React from "react"
// import { Slot } from "@radix-ui/react-slot"
// import { cva, type VariantProps } from "class-variance-authority"
// import { cn } from "@/lib/utils"

// const buttonVariants = cva(...) // Keep existing definition

// export interface ButtonProps ... // Keep existing definition

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(...) // Keep existing definition
// Button.displayName = "Button"

// export { Button, buttonVariants }
