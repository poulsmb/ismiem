import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Archive, Bell, Mail, Lightbulb } from "lucide-react";
import { StatsBar, SeminarCard, PhotoGallery, FeatureCard } from "@/components/common";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "О семинаре",
      description: "История, цели и задачи семинара",
      link: "/about",
    },
    {
      icon: Lightbulb,
      title: "Миссия",
      description: "Узнайте о миссии и ценностях семинара",
      link: "/mission",
    },
    {
      icon: Users,
      title: "Руководители",
      description: "Познакомьтесь с руководителями",
      link: "/committees",
    },
    {
      icon: Archive,
      title: "Архив",
      description: "Материалы прошедших семинаров",
      link: "/archive",
    },
    {
      icon: Bell,
      title: "Объявления",
      description: "Новости и предстоящие события",
      link: "/announcements",
    },
    {
      icon: Mail,
      title: "Контакты",
      description: "Свяжитесь с нами",
      link: "/contact",
    },
  ];

  const recentSeminars = [
    { number: 42, year: 2023, city: "Смоленск", theme: "Математика и математическое образование: проблемы, технологии, перспективы" },
    { number: 43, year: 2024, city: "Сыктывкар", theme: "Математическая подготовка в школе и вузе: содержание и технологии" },
    { number: 44, year: 2025, city: "Минск", theme: "Творчество студентов и школьников в области математики и информатики" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                ISMIEM
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-semibold mb-6">
                Международный семинар по математическому и информационному образованию
                <span className="text-blue-600 mx-2">А. Г. Мордковича</span>
              </p>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Ежегодный международный семинар, объединяющий преподавателей, исследователей и специалистов в области математического образования с 1987 года.
              </p>
            </div>

            <div className="relative max-w-[280px] mx-auto lg:max-w-md">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img
                  src="/logo.jpeg"
                  alt="Семинар Мордковича"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-blue-600">44</p>
                <p className="text-xs text-gray-600">заседания</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-blue-600">1987</p>
                <p className="text-xs text-gray-600">год основания</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StatsBar
        stats={[
          { value: 44, label: "заседания" },
          { value: "40", label: "лет истории" },
          { value: "30", label: "городов" },
          { value: "1000+", label: "участников" },
        ]}
      />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Последние семинары
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            История семинара насчитывает более 40 заседаний в разных городах России и ближнего зарубежья
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {recentSeminars.map((seminar) => (
              <SeminarCard
                key={seminar.number}
                number={seminar.number}
                year={seminar.year}
                city={seminar.city}
                theme={seminar.theme}
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/archive">
              <Button variant="outline" className="px-8">
                Смотреть все семинары →
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Фотогалерея
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Моменты с прошедших семинаров
          </p>

          <PhotoGallery
            photos={[
              { src: "/seminar-photos/minsk-2025.jpg", label: "Минск 2025", large: true },
              { src: "/seminar-photos/syktyvkar-2024.jpg", label: "Сыктывкар 2024" },
              { src: "/seminar-photos/smolensk-2023.jpg", label: "Смоленск 2023" },
              { src: "/seminar-photos/bryansk-2021.jpg", label: "Брянск 2021", large: true },
              { src: "/seminar-photos/moscow-2020.jpg", label: "Москва 2020" },
              { src: "/seminar-photos/samara-2019.jpg", label: "Самара 2019" },
              { src: "/seminar-photos/naberezhnye-chelny-2018.jpg", label: "Наб. Челны 2018" },
              { src: "/seminar-photos/kazan-2017.jpg", label: "Казань 2017" },
            ]}
          />

          <div className="text-center mt-8">
            <Link to="/archive">
              <Button variant="outline" className="px-8">
                Смотреть все фото в архиве →
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Разделы сайта
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
            «Участники Семинара видят свою миссию в том, чтобы генерировать и поддерживать атмосферу,
            в которой всем членам педагогического сообщества было бы комфортно жить и дышать»
          </p>
          <Link to="/mission">
            <Button variant="secondary" className="px-8 py-6 text-lg">
              Узнать больше о миссии
            </Button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Index;