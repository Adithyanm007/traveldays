import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PackageSearch } from 'lucide-react'; // Example icon

export default function PackagesPage() {
  // TODO: Fetch and display actual packages
  const packages = [
    { id: 1, name: "Parisian Dreams", price: "$1200", duration: "7 Days", image: "https://picsum.photos/400/300?random=1" },
    { id: 2, name: "Bora Bora Bliss", price: "$3500", duration: "10 Days", image: "https://picsum.photos/400/300?random=2" },
    { id: 3, name: "Roman Holiday", price: "$1500", duration: "6 Days", image: "https://picsum.photos/400/300?random=3" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">Our Travel Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover"/>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">{pkg.duration}</CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-primary">{pkg.price}</span>
                  <Button variant="default">View Details</Button>
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

// Need Button Component if not already present
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
