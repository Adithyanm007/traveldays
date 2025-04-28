'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, LogIn } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    // TODO: Implement actual login logic (e.g., API call)
    console.log("Login attempt");
    setTimeout(() => {
      // Simulate API call
      // setError("Invalid username or password."); // Example error
      setIsLoading(false);
      // On success, redirect or update state
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
       <Header />
       <main className="flex-grow flex items-center justify-center py-12 px-4">
         <Card className="w-full max-w-sm shadow-lg">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold text-primary">Login</CardTitle>
              <CardDescription>Enter your email and password to access your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required disabled={isLoading} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required disabled={isLoading} />
                </div>
                 {error && <p className="text-sm text-destructive">{error}</p>}
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                    </>
                  ) : (
                    <>
                     <LogIn className="mr-2 h-4 w-4"/> Login
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col text-center text-sm">
               <p>
                  Don't have an account?{' '}
                  <Link href="/signup" className="underline text-primary hover:text-primary/80">
                     Sign up
                  </Link>
               </p>
            </CardFooter>
         </Card>
       </main>
       <Footer />
    </div>

  );
}
