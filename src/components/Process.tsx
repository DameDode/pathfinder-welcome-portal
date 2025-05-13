
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { number: 1, title: "Start", description: "Begin your academic journey with PathFinder" },
  { number: 2, title: "Login", description: "Create an account to save your progress" },
  { number: 3, title: "Begin Quiz", description: "Start the assessment to help us understand you better" },
  { number: 4, title: "Complete Assessment", description: "Answer questions about your interests, strengths, and goals" },
  { number: 5, title: "Results Analysis", description: "Our AI analyzes your responses to create personalized recommendations" },
  { number: 6, title: "Get Recommendations", description: "Review university programs tailored to your profile" }
];

const Process = () => {
  return (
    <section className="py-16 bg-gray-50" id="process">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pathfinder-800">
          Your Path to the Right Choice
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-4 bottom-4 w-1 bg-pathfinder-400 hidden md:block"></div>
            
            <div className="space-y-8">
              {steps.map((step) => (
                <Card key={step.number} className="border-0 shadow-md hover:shadow-lg transition-shadow animate-fade-in">
                  <CardContent className="p-0">
                    <div className="flex items-start p-6">
                      <div className="w-8 h-8 rounded-full bg-pathfinder-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0 z-10">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-pathfinder-800">{step.title}</h3>
                        <p className="text-gray-600 mt-1">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
