
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Закрываем меню при изменении маршрута
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Блокируем скролл body при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { name: "О семинаре", path: "/about" },
    { name: "Миссия", path: "/mission" },
    { name: "Руководители", path: "/committees" },
    { name: "Архив", path: "/archive" },
    { name: "Объявления", path: "/announcements" },
    { name: "Обратная связь", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-brand z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center text-xl font-semibold text-white hover:text-gray-300 transition-colors duration-200"
          >
            <BookOpen className="w-6 h-6 mr-2 text-white" />
            ISMIEM
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white hover:text-blue-300 transition-colors duration-200 whitespace-nowrap ${
                  location.pathname === item.path ? "border-b-2 border-blue-400 pb-1" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-12 h-12 -mr-2 rounded-lg text-white hover:bg-white/10 active:bg-white/20 focus:outline-none transition-colors"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            type="button"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "64px" }}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden fixed top-16 right-0 h-[calc(100vh-64px)] w-72 bg-brand shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 py-4 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-6 py-4 text-white hover:bg-white/10 transition-colors duration-200 border-b border-gray-700 ${
                  location.pathname === item.path ? "bg-blue-600/20 border-l-4 border-l-blue-400" : ""
                }`}
              >
                <span className="text-base font-medium">{item.name}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Link>
            ))}
          </div>
          
          {/* Footer в мобильном меню */}
          <div className="p-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm text-center">
              Семинар А. Г. Мордковича
            </p>
            <p className="text-gray-500 text-xs text-center mt-1">
              с 1987 года
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
