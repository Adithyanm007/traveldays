import { DestinationShowcase } from "@/components/destination-showcase";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function DestinationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
         {/* Reusing the showcase component here, could be more specific later */}
        <DestinationShowcase />
      </main>
      <Footer />
    </div>
  );
}
