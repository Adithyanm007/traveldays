'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    // TODO: Implement actual signup logic (e.g., API call)
    console.log("Signup attempt");

    // Basic password match check
    const password = (event.target as HTMLFormElement).elements.namedItem('password') as HTMLInputElement;
    const confirmPassword = (event.target as HTMLFormElement).elements.namedItem('confirm-password') as HTMLInputElement;

    if (password.value !== confirmPassword.value) {
        setError("Passwords do not match.");
        setIsLoading(false);
        return;
    }


    setTimeout(() => {
      // Simulate API call
      // setError("Email already exists."); // Example error
      setIsLoading(false);
      // On success, maybe redirect to login or show success message
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
       <Header />
       <main className="flex-grow flex items-center justify-center py-12 px-4">
         <Card className="w-full max-w-sm shadow-lg">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold text-primary">Create Account</CardTitle>
              <CardDescription>Join TRAVELDAYS to start planning your next adventure.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your Full Name" required disabled={isLoading} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required disabled={isLoading} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" required disabled={isLoading} />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" name="confirm-password" type="password" required disabled={isLoading} />
                </div>
                 {error && <p className="text-sm text-destructive">{error}</p>}
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating Account...
                    </>
                  ) : (
                    <>
                     <UserPlus className="mr-2 h-4 w-4"/> Sign Up
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col text-center text-sm">
               <p>
                  Already have an account?{' '}
                  <Link href="/login" className="underline text-primary hover:text-primary/80">
                     Login
                  </Link>
               </p>
            </CardFooter>
         </Card>
       </main>
       <Footer />
    </div>

  );
}
