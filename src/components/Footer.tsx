
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/d355bb5f-64b8-4330-b4a6-35920b3075d2.png" 
                alt="FindPath Logo" 
                className="h-6 w-6 text-yellow-500"
              />
              <span className="text-lg font-bold text-gray-800">FindPath</span>
            </div>
            <p className="text-gray-600 mb-4">
              Помагаме на средношколците да ја најдат вистинската академска патека за нивната иднина.
            </p>
            <Button
              variant="outline"
              className="border-yellow-400 text-gray-700 hover:bg-yellow-50"
            >
              Контактирајте нè
            </Button>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Ресурси</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-yellow-600">Блог</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600">Водич за студенти</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600">Факултети</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600">Стипендии</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Правно</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-yellow-600">Услови за користење</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600">Политика за приватност</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600">Колачиња</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} FindPath. Сите права се задржани.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
