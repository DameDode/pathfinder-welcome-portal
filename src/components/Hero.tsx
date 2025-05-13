
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const { toast } = useToast();
  
  const handleGetStarted = () => {
    toast({
      title: "Наскоро!",
      description: "Целосната функционалност на квизот ќе биде имплементирана во следната фаза.",
    });
  };
  
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Патека до вистинскиот факултет
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 pl-4 border-l-4 border-yellow-400">
              Да ти помогнеме да ја донесеш правилната одлука
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleGetStarted}
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 text-lg px-8 py-6 h-auto animate-slide-up"
              >
                Започни
              </Button>
              <Button
                variant="outline"
                size="lg" 
                className="border-yellow-400 text-gray-700 hover:border-yellow-500 hover:bg-yellow-50 text-lg px-8 py-6 h-auto animate-slide-up flex items-center gap-2"
                onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Дознај повеќе <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <img 
              src="/lovable-uploads/a7206d0c-9b17-4454-af01-b6a41d7a43d3.png" 
              alt="Студенти кои истражуваат академски можности" 
              className="w-full h-auto max-w-md mx-auto"
            />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-30 z-0"></div>
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-200 rounded-full opacity-30 z-0"></div>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl w-full mx-auto">
          {[
            { value: '10,000+', label: 'Студенти добија помош' },
            { value: '500+', label: 'Факултети' },
            { value: '95%', label: 'Задоволство' },
            { value: '50+', label: 'Насоки' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-yellow-500">{stat.value}</p>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
