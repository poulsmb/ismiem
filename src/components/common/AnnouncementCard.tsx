import { Card } from "@/components/ui/card";
import { Calendar, Download, ExternalLink, MapPin } from "lucide-react";
import { ReactNode } from "react";

/**
 * Данные для карточки объявления
 * 
 * @property id - Уникальный идентификатор
 * @property title - Заголовок объявления
 * @property date - Дата в формате строки
 * @property category - Категория: "Итоги" | "Публикация" | "Архив" | "Анонс"
 * @property content - Текст объявления
 * @property hasCollection - Есть ли сборник для скачивания
 * @property collectionLink - Ссылка на PDF сборника
 * @property link - Внешняя ссылка на материалы
 */
export interface AnnouncementData {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
  hasCollection?: boolean;
  collectionLink?: string;
  link?: string;
}

interface AnnouncementCardProps {
  announcement: AnnouncementData;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Итоги":
      return "bg-green-100 text-green-800";
    case "Публикация":
      return "bg-blue-100 text-blue-800";
    case "Архив":
      return "bg-purple-100 text-purple-800";
    case "Анонс":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

/**
 * Карточка объявления/новости
 * 
 * @description Карточка с заголовком, датой, категорией и кнопками
 * для скачивания сборника или перехода по внешней ссылке.
 * Категории имеют разные цвета: Итоги, Публикация, Архив, Анонс.
 * 
 * @example
 * ```tsx
 * <AnnouncementCard
 *   announcement={{
 *     id: 1,
 *     title: "44-й семинар завершён",
 *     date: "Январь 2025",
 *     category: "Итоги",
 *     content: "Описание...",
 *     hasCollection: true,
 *     collectionLink: "/sbornik-2025.pdf"
 *   }}
 * />
 * ```
 * 
 * @used-in Announcements (страница объявлений)
 */
export const AnnouncementCard = ({ announcement }: AnnouncementCardProps) => {
  return (
    <Card className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {announcement.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {announcement.date}
            </span>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${getCategoryColor(
            announcement.category
          )}`}
        >
          {announcement.category}
        </span>
      </div>

      <p className="text-gray-700 mb-4 leading-relaxed">
        {announcement.content}
      </p>

      <div className="flex flex-wrap gap-3">
        {announcement.hasCollection && announcement.collectionLink && (
          <a
            href={announcement.collectionLink}
            download
            className="inline-flex items-center bg-green-50 hover:bg-green-100 text-green-700 px-4 py-2 rounded-lg transition-colors border border-green-200 text-sm font-medium"
          >
            <Download className="w-4 h-4 mr-2" />
            Скачать сборник (PDF)
          </a>
        )}
        {announcement.link && (
          <a
            href={announcement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg transition-colors border border-blue-200 text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Перейти к материалам
          </a>
        )}
      </div>
    </Card>
  );
};

/**
 * Данные для карточки предстоящего события
 * 
 * @property title - Название события
 * @property date - Дата/период
 * @property location - Место проведения
 * @property status - Статус (напр. "Планируется")
 * @property description - Описание события
 */
export interface UpcomingEventData {
  title: string;
  date: string;
  location: string;
  status: string;
  description: string;
}

interface UpcomingEventCardProps {
  event: UpcomingEventData;
  action?: ReactNode;
}

/**
 * Карточка предстоящего события
 * 
 * @description Выделенная карточка с синей рамкой и фоном
 * для анонса будущих семинаров.
 * 
 * @example
 * ```tsx
 * <UpcomingEventCard
 *   event={{
 *     title: "45-й семинар",
 *     date: "2026 год",
 *     location: "Будет объявлено",
 *     status: "Планируется",
 *     description: "Следите за объявлениями"
 *   }}
 * />
 * ```
 * 
 * @used-in Announcements (предстоящие события)
 */
export const UpcomingEventCard = ({ event, action }: UpcomingEventCardProps) => {
  return (
    <Card className="p-6 border-2 border-blue-200 shadow-sm bg-blue-50">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
              {event.status}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-2">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {event.date}
            </span>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {event.location}
            </span>
          </div>
          <p className="text-gray-600">{event.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default AnnouncementCard;
