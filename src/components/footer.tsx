export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} TRAVELDAYS. All rights reserved.</p>
        <p className="text-sm mt-2">Your journey starts here.</p>
      </div>
    </footer>
  );
}
