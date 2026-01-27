import { Link } from "react-router-dom";
import { BookOpen, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "О семинаре", path: "/about" },
    { name: "Миссия", path: "/mission" },
    { name: "Руководители", path: "/committees" },
    { name: "Архив", path: "/archive" },
    { name: "Объявления", path: "/announcements" },
    { name: "Контакты", path: "/contact" },
  ];

  return (
    <footer className="bg-brand text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center text-2xl font-bold mb-4 hover:text-blue-300 transition-colors">
              <BookOpen className="w-7 h-7 mr-2" />
              ISMIEM
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Международный семинар по математическому и информационному образованию А. Г. Мордковича
            </p>
            <p className="text-blue-300/60 text-xs">
              International Seminar on Mathematics and Informatics Education by Mordkovich
            </p>
          </div>

          <div className="max-w-sm">
            <h4 className="font-semibold text-lg mb-4">Разделы</h4>
            <ul className="grid grid-cols-2 gap-2 gap-x-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-sm">
            <h4 className="font-semibold text-lg mb-4">Ресурсы</h4>
            <div className="space-y-3">
              <a
                href="https://www.mathedu.ru/catalogue/collections/groups/#materialy_seminara_prepodavateley_matematiki_vuzov"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-200 hover:text-white transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Материалы семинаров
              </a>
              <Link
                to="/contact"
                className="flex items-center text-blue-200 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                Обратная связь
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;