
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { number: 1, title: "Почеток", description: "Започнете го вашето академско патување со FindPath" },
  { number: 2, title: "Најава", description: "Создадете профил за да го зачувате вашиот напредок" },
  { number: 3, title: "Започнете го квизот", description: "Започнете со проценка за да ни помогнете да ве разбереме подобро" },
  { number: 4, title: "Комплетирајте ја проценката", description: "Одговорете на прашања за вашите интереси, силни страни и цели" },
  { number: 5, title: "Анализа на резултатите", description: "Нашата вештачка интелигенција ги анализира вашите одговори за да создаде персонализирани препораки" },
  { number: 6, title: "Добијте препораки", description: "Прегледајте ги универзитетските програми приспособени на вашиот профил" }
];

const Process = () => {
  return (
    <section className="py-16 bg-gray-50" id="process">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Како работи FindPath?
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-4 bottom-4 w-1 bg-yellow-400 hidden md:block"></div>
            
            <div className="space-y-8">
              {steps.map((step) => (
                <Card key={step.number} className="border-0 shadow-md hover:shadow-lg transition-shadow animate-fade-in">
                  <CardContent className="p-0">
                    <div className="flex items-start p-6">
                      <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0 z-10">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
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
