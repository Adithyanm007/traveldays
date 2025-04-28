import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Star, Users, MapPin, GraduationCap } from 'lucide-react'; // Icons for achievements, team, location, and education

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto shadow-lg border border-primary/20">
          <CardHeader className="text-center">
            <Users className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-3xl font-bold text-primary">About TRAVELDAYS</CardTitle>
            <CardDescription>Meet the team behind your journey.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-center md:text-left">
            <section>
              <h2 className="text-2xl font-semibold text-secondary-foreground mb-3">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                TRAVELDAYS was founded by a passionate team of travel enthusiasts and aspiring hospitality experts: Adithyan, Adithya, Harsha, and Shaaz. Based in Karnataka, India, and currently second-year students, we share a vision to redefine travel experiences. We embarked on a journey to create a platform that combines seamless booking with personalized adventures. Our dedication stems from our learning and a deep understanding of the intricate desires of modern travelers, inspired by our experience managing top-tier hotels.
              </p>
               <div className="flex items-center justify-center md:justify-start gap-2 mt-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary"/>
                  <span>Karnataka, India</span>
                  <span className="mx-1">|</span>
                  <GraduationCap className="h-4 w-4 text-primary"/>
                  <span>Second Year Students</span>
               </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary-foreground mb-3">Excellence & Recognition</h2>
              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 mb-4">
                 <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-5 w-5 fill-current"/>
                    <Star className="h-5 w-5 fill-current"/>
                    <Star className="h-5 w-5 fill-current"/>
                    <Star className="h-5 w-5 fill-current"/>
                    <Star className="h-5 w-5 fill-current"/>
                 </div>
                 <p className="text-sm text-muted-foreground font-medium">Consistently Top-Rated Across All Platforms</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our commitment to excellence is reflected in the outstanding ratings we consistently receive across all major review platforms. We take pride in the positive feedback from our travelers, which fuels our drive to constantly improve and innovate.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
                  <Award className="h-8 w-8 text-accent" />
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond ratings, our team members have garnered significant recognition in global hospitality and tourism contests, showcasing our leadership and expertise in the field. We are not just travel planners; we are award-winning hotel owners and managers dedicated to providing unparalleled service and unforgettable stays.
                  </p>
              </div>
            </section>

            <section>
               <h2 className="text-2xl font-semibold text-secondary-foreground mb-3">Why Choose Us?</h2>
               <p className="text-muted-foreground leading-relaxed">
                 At TRAVELDAYS, you benefit from the unique perspective of seasoned hotel owners. We understand hospitality from the ground up, ensuring every aspect of your trip, from accommodation to activities, meets the highest standards of quality and comfort. Trust the experts to craft your perfect getaway.
               </p>
            </section>

          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
