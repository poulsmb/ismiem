import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Archive, BookOpen } from "lucide-react";

const NotFound = () => {
  const mathSymbols = ["∫", "∑", "∏", "√", "∞", "π", "θ", "Δ", "∇", "∂", "≈", "≠"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20 pb-16 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mathSymbols.map((symbol, i) => (
          <div
            key={i}
            className="absolute text-blue-100 text-4xl md:text-6xl font-serif opacity-60"
            style={{
              left: `${(i * 8) % 90}%`,
              top: `${(i * 15) % 80}%`,
              animation: `float ${6 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>

      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold text-blue-600 mb-4 font-mono animate-pulse-slow">
            4∅4
          </div>

        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Страница не найдена
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          К сожалению, запрашиваемая страница не существует. 
          Возможно, она была перемещена или удалена.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-gray-700 italic">
            «Если бы эта страница была уравнением, 
            то множество её решений было бы пустым»
          </p>
          <p className="text-sm text-gray-500 mt-2">
            — Неизвестный математик
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600 font-medium">Попробуйте:</p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                На главную
              </Button>
            </Link>
            <Link to="/archive">
              <Button variant="outline" className="w-full sm:w-auto">
                <Archive className="w-4 h-4 mr-2" />
                Архив семинаров
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link to="/about" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
              О семинаре
            </Link>
            <Link to="/committees" className="text-blue-600 hover:text-blue-800 text-sm">
              Руководители
            </Link>
            <Link to="/announcements" className="text-blue-600 hover:text-blue-800 text-sm">
              Объявления
            </Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-800 text-sm">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
