import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Award,
  BookOpen,
  GraduationCap,
  MapPin,
} from "lucide-react";

/**
 * Данные руководителя для страницы-шаблона
 * 
 * @property name - Полное ФИО
 * @property shortName - Краткое имя для заголовков
 * @property role - Роль в семинаре
 * @property roleColor - Цветовая схема: "blue" | "amber" | "green" | "gray"
 * @property photo - Путь к фотографии
 * @property birthYear - Год рождения (опционально)
 * @property titles - Список званий и степеней
 * @property bio - Биография
 * @property achievements - Список достижений
 * @property seminarRole - Информация о роли в семинаре
 * @property publications - Список публикаций
 */
export interface LeaderData {
  name: string;
  shortName: string;
  role: string;
  roleColor?: "blue" | "amber" | "green" | "gray"; // цвет бейджа роли
  photo: string;
  birthYear?: string;
  titles: string[];
  bio: string;
  achievements: string[];
  seminarRole: {
    period: string;
    sessions: string;
    description: string;
  };
  publications: {
    title: string;
    type: string;
  }[];
}

interface LeaderPageProps {
  leader: LeaderData;
}

const roleColors = {
  blue: {
    badge: "bg-blue-100 text-blue-700",
    ring: "ring-blue-100",
    cardBorder: "border-blue-200",
    cardBg: "bg-blue-50",
    bg: "bg-blue-600",
    text: "text-blue-600",
  },
  amber: {
    badge: "bg-amber-100 text-amber-700",
    ring: "ring-amber-100",
    cardBorder: "border-amber-200",
    cardBg: "bg-amber-50",
    bg: "bg-amber-600",
    text: "text-amber-600",
  },
  green: {
    badge: "bg-green-100 text-green-700",
    ring: "ring-green-100",
    cardBorder: "border-green-200",
    cardBg: "bg-green-50",
    bg: "bg-green-600",
    text: "text-green-600",
  },
  gray: {
    badge: "bg-gray-100 text-gray-700",
    ring: "ring-gray-200",
    cardBorder: "border-gray-200",
    cardBg: "bg-gray-50",
    bg: "bg-gray-600",
    text: "text-gray-600",
  },
};

/**
 * Шаблон страницы руководителя семинара
 * 
 * @description Полная страница с фото, биографией, ролью в семинаре,
 * достижениями и публикациями. Поддерживает 4 цветовых схемы.
 * 
 * @example
 * ```tsx
 * const leaderData: LeaderData = {
 *   name: "Александр Григорьевич Мордкович",
 *   shortName: "А. Г. Мордкович",
 *   role: "Основатель семинара",
 *   roleColor: "blue",
 *   // ...
 * };
 * <LeaderPage leader={leaderData} />
 * ```
 * 
 * @used-in Mordkovich, Yastrebov, Malova, Drobyshev
 */
const LeaderPage = ({ leader }: LeaderPageProps) => {
  const color = leader.roleColor || "blue";
  const colors = roleColors[color];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/committees">
            <Button variant="ghost" className="text-gray-600 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Все руководители
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className={`aspect-[3/4] rounded-2xl overflow-hidden shadow-xl ring-4 ${colors.ring} mb-6`}>
              <img
                src={leader.photo}
                alt={leader.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${colors.badge}`}>
                {leader.role}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {leader.name}
              </h1>
            </div>

            <div className="space-y-2 mb-6">
              {leader.titles.map((title, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <Award className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                  <span>{title}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed">{leader.bio}</p>
          </div>
        </div>

        <Card className={`p-8 mb-8 border-2}`}>
          <div className="flex items-start gap-4 mb-4">
            <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Роль в семинаре
              </h2>
              <p className={`${colors.text} font-semibold`}>
                {leader.seminarRole.period}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Период руководства</p>
                <p className="font-semibold text-gray-900">
                  {leader.seminarRole.period}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">
                  Председательствовал на заседаниях
                </p>
                <p className="font-semibold text-gray-900">
                  {leader.seminarRole.sessions}
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {leader.seminarRole.description}
          </p>
        </Card>

        {leader.achievements.length > 0 && (
        <Card className="p-8 mb-8 border border-gray-200 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Достижения и вклад
              </h2>
            </div>
          </div>

          <ul className="space-y-4">
            {leader.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </Card>
        )}

        {leader.publications.length > 0 && (
        <Card className="p-8 mb-8 border border-gray-200 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Избранные публикации
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {leader.publications.map((pub, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-semibold text-gray-900">{pub.title}</p>
                  <p className="text-sm text-gray-600">{pub.type}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link to="/committees">
            <Button variant="outline" className="px-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Все руководители
            </Button>
          </Link>
          <Link to="/archive">
            <Button className="bg-blue-600 hover:bg-blue-700 px-8">
              Архив семинаров
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeaderPage;
