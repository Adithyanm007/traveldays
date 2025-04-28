import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CalendarClock } from 'lucide-react'; // Example icon

export default function BookingPage() {
  // TODO: Implement actual booking form logic
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 flex justify-center">
         <Card className="w-full max-w-2xl shadow-lg">
            <CardHeader className="text-center">
               <CardTitle className="text-3xl font-bold text-primary">Book Your Trip</CardTitle>
               <CardDescription>Fill in the details below to start your adventure.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Placeholder for package selection or details */}
                 <div className="p-4 border rounded-md bg-secondary/50">
                    <h3 className="font-semibold text-lg text-secondary-foreground">Selected Package: Parisian Dreams</h3>
                    <p className="text-sm text-muted-foreground">7 Days - $1200</p>
                 </div>

               <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Your Name" required />
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" required />
                     </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+1 234 567 890" />
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="travelers">Number of Travelers</Label>
                        <Input id="travelers" type="number" min="1" defaultValue="1" required />
                     </div>
                  </div>
                   <div className="space-y-2">
                        <Label htmlFor="date">Preferred Start Date</Label>
                        <Input id="date" type="date" required />
                     </div>
                  <div className="space-y-2">
                    <Label htmlFor="requests">Special Requests (Optional)</Label>
                    <Textarea id="requests" placeholder="Any allergies, preferences, etc.?" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                     <CalendarClock className="mr-2 h-5 w-5"/> Proceed to Payment
                  </Button>
               </form>
            </CardContent>
         </Card>
      </main>
      <Footer />
    </div>
  );
}


// Need Textarea Component if not already present
import * as React from 'react';
import {cn} from '@/lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({className, ...props}, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export {Textarea};
