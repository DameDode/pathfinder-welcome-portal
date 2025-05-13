
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12" id="about">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-yellow-500"
              >
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
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
            <h3 className="font-semibold text-lg mb-4 text-gray-800">За нас</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-yellow-600">Нашата мисија</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600">Тим</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600">Кариера</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600">Партнери</a>
              </li>
            </ul>
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
