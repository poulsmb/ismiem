import { Calendar, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  PageHero,
  AnnouncementCard,
  UpcomingEventCard,
} from "@/components/common";
import type { AnnouncementData, UpcomingEventData } from "@/components/common";

const Announcements = () => {
  const announcements: AnnouncementData[] = [
    {
      id: 1,
      title: "44-й семинар в Минске успешно завершён",
      date: "Январь 2025",
      category: "Итоги",
      content: "Завершился 44-й Международный семинар преподавателей математики, который прошёл в Минске. Тема семинара: «Творчество студентов и школьников в области математики и информатики и методы его развития». По итогам работы опубликован сборник материалов.",
      hasCollection: true,
      collectionLink: "/sbornik-2025.pdf",
    },
    {
      id: 2,
      title: "Сборник материалов 43-го семинара",
      date: "2024",
      category: "Публикация",
      content: "Опубликован полный сборник материалов 43-го семинара (Сыктывкар, 2024). Тема: «Математическая подготовка в школе и вузе: содержание и технологии». Материалы доступны на портале mathedu.ru.",
      link: "https://www.mathedu.ru/text/materialy_43_seminara_prepodavateley_matematiki_2024/p0/",
    },
    {
      id: 3,
      title: "Обновление архива материалов",
      date: "2024",
      category: "Архив",
      content: "На портале mathedu.ru продолжается работа по оцифровке и публикации материалов прошедших семинаров. Коллекция постоянно пополняется.",
      link: "https://www.mathedu.ru/catalogue/collections/groups/#materialy_seminara_prepodavateley_matematiki_vuzov",
    },
  ];

  const upcomingEvents: UpcomingEventData[] = [
    {
      title: "45-й Международный семинар по математическому и информационному образованию А. Г. Мордковича",
      date: "1–3 октября 2026 года",
      location: "Самара",
      status: "Планируется",
      description: "«Цифровая трансформация образования: развитие традиций и новые возможности в обучении математике и информатике»",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHero
          title="Объявления"
          description="Новости, анонсы и материалы семинаров"
        />

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-blue-600" />
            Предстоящие события
          </h2>
          
          {upcomingEvents.map((event, index) => (
            <UpcomingEventCard
              key={index}
              event={event}
            />
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-blue-600" />
            Последние новости
          </h2>

          <div className="space-y-6">
            {announcements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Ищете материалы прошлых семинаров?
          </p>
          <Link to="/archive">
            <Button variant="outline" className="px-8">
              Перейти в архив →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
