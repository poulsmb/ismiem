import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

/**
 * Пропсы компонента LeaderCard
 * 
 * @property name - Полное ФИО руководителя
 * @property role - Роль/должность
 * @property period - Период работы
 * @property sessions - Номера семинаров
 * @property photo - Путь к фото
 * @property link - Ссылка на детальную страницу (опционально)
 */
interface LeaderCardProps {
  name: string;
  role: string;
  period: string;
  sessions: string;
  photo: string;
  link?: string;
}

/**
 * Карточка руководителя семинара
 * 
 * @description Компактная карточка с фото, именем, ролью
 * и ссылкой на детальную страницу руководителя.
 * 
 * @example
 * ```tsx
 * <LeaderCard
 *   name="Александр Григорьевич Мордкович"
 *   role="Основатель семинара"
 *   period="с 1987 г."
 *   sessions="№№ 1–40"
 *   photo="/committees/Mordkovich.png"
 *   link="/leaders/mordkovich"
 * />
 * ```
 * 
 * @used-in Committees (страница руководителей)
 */
export const LeaderCard = ({
  name,
  role,
  period,
  sessions,
  photo,
  link,
}: LeaderCardProps) => {
  return (
    <Card className="p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group h-full">
      <div className="flex flex-col items-center text-center">
        {/* Photo */}
        <div className="w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all">
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 font-semibold mb-2">{role}</p>
        <p className="text-gray-600 text-sm mb-2">{period}</p>
        <p className="text-gray-500 text-sm mb-4">{sessions}</p>

        {/* Link */}
        {link && (
          <Link to={link}>
            <Button variant="outline" size="sm" className="mt-2">
              Подробнее
              <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </Link>
        )}
      </div>
    </Card>
  );
};

export default LeaderCard;
