
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Personalized Recommendations",
    description: "Get tailored university recommendations based on your unique profile, interests and academic achievements."
  },
  {
    title: "Interactive Assessment",
    description: "Complete engaging quizzes that accurately capture your academic strengths and career aspirations."
  },
  {
    title: "AI-Powered Analysis",
    description: "Benefit from advanced artificial intelligence that processes your responses to suggest optimal academic paths."
  },
  {
    title: "Career Path Insights",
    description: "Discover potential career trajectories related to different academic programs."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pathfinder-800">
          How PathFinder Helps You
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 text-pathfinder-600">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-pathfinder-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
