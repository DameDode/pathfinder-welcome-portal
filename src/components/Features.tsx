
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Персонализирани препораки",
    description: "Добијте препораки за факултети прилагодени на вашиот уникатен профил, интереси и академски достигнувања."
  },
  {
    title: "Интерактивна проценка",
    description: "Завршете интересни квизови кои точно ги идентификуваат вашите академски силни страни и кариерни аспирации."
  },
  {
    title: "Анализа со ВИ",
    description: "Користете напредна вештачка интелигенција која ги процесира вашите одговори за да предложи оптимални академски патеки."
  },
  {
    title: "Увид во кариерни патеки",
    description: "Откријте потенцијални кариерни траектории поврзани со различни академски програми."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Карактеристики на FindPath
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 text-yellow-500">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
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
