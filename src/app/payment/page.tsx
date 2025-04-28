import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Lock } from 'lucide-react'; // Example icons

export default function PaymentPage() {
  // TODO: Implement actual payment processing logic (e.g., Stripe integration)
  // TODO: Fetch actual order details instead of using mock data

  const mockOrder = {
    packageName: "Parisian Dreams", // Example package name
    basePrice: 75000, // Example base price in INR
    taxesAndFees: 7500, // Example taxes in INR
    totalAmount: 82500 // Example total in INR
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(amount);
  };


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 flex justify-center">
         <Card className="w-full max-w-lg shadow-lg">
            <CardHeader className="text-center">
               <CardTitle className="text-3xl font-bold text-primary">Secure Payment</CardTitle>
               <CardDescription>Enter your payment details to confirm your booking.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Order Summary Placeholder */}
                 <div className="p-4 border rounded-md bg-secondary/50">
                    <h3 className="font-semibold text-lg text-secondary-foreground">Order Summary</h3>
                     <div className="flex justify-between text-sm mt-2">
                        <span>Package: {mockOrder.packageName}</span>
                        <span>{formatCurrency(mockOrder.basePrice)}</span>
                     </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Taxes & Fees</span>
                        <span>{formatCurrency(mockOrder.taxesAndFees)}</span>
                     </div>
                      <hr className="my-2 border-border"/>
                      <div className="flex justify-between font-semibold">
                        <span>Total Amount</span>
                        <span>{formatCurrency(mockOrder.totalAmount)}</span>
                     </div>
                 </div>

               <form className="space-y-4">
                  <div className="space-y-2">
                     <Label htmlFor="card-number">Card Number</Label>
                     <div className="relative">
                        <Input id="card-number" placeholder="•••• •••• •••• ••••" required />
                         <CreditCard className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                     </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                     <div className="space-y-2 col-span-2">
                        <Label htmlFor="expiry-date">Expiry Date</Label>
                        <Input id="expiry-date" placeholder="MM / YY" required />
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" required />
                     </div>
                  </div>
                   <div className="space-y-2">
                     <Label htmlFor="card-holder">Card Holder Name</Label>
                     <Input id="card-holder" placeholder="Name as on card" required />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                     <Lock className="mr-2 h-5 w-5"/> Pay {formatCurrency(mockOrder.totalAmount)} Securely
                  </Button>
               </form>
            </CardContent>
             <CardFooter className="text-center text-xs text-muted-foreground">
                <p>Your payment is processed securely. We do not store your card details.</p>
             </CardFooter>
         </Card>
      </main>
      <Footer />
    </div>
  );
}
