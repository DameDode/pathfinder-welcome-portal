
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const { toast } = useToast();
  
  const handleGetStarted = () => {
    toast({
      title: "Coming Soon!",
      description: "The full quiz functionality will be implemented in the next phase.",
    });
  };
  
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-pattern">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pathfinder-900 mb-6 leading-tight">
              Find Your Perfect Academic Path
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              PathFinder helps high school students make informed decisions about their university education based on their personal interests, skills, and academic performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleGetStarted}
                size="lg" 
                className="bg-pathfinder-600 hover:bg-pathfinder-700 text-lg px-8 py-6 h-auto animate-slide-up"
              >
                Start Your Quiz
              </Button>
              <Button
                variant="outline"
                size="lg" 
                className="border-pathfinder-600 text-pathfinder-600 hover:text-pathfinder-700 hover:border-pathfinder-700 text-lg px-8 py-6 h-auto animate-slide-up"
                onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn How It Works
              </Button>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl w-full">
            {[
              { value: '10,000+', label: 'Students Helped' },
              { value: '500+', label: 'Universities' },
              { value: '95%', label: 'Satisfaction Rate' },
              { value: '50+', label: 'Career Paths' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-pathfinder-600">{stat.value}</p>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
