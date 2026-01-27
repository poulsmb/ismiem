import { Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * Карточка семинара для отображения краткой информации
 * 
 * @description Компактная карточка с номером, годом, городом и темой семинара.
 * Используется для списков семинаров на главной странице.
 * 
 * @example
 * ```tsx
 * <SeminarCard
 *   number={44}
 *   year={2025}
 *   city="Минск"
 *   theme="Творчество студентов и школьников..."
 * />
 * ```
 * 
 * @used-in Index (главная страница)
 */
interface SeminarCardProps {
  number: number;
  year: number;
  city: string;
  theme: string;
}

export const SeminarCard = ({
  number,
  year,
  city,
  theme,
}: SeminarCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-700 font-bold">
          №{number}
        </span>
        <div>
          <p className="font-bold text-gray-900">{year}</p>
          <p className="text-sm text-gray-600 flex items-center">
            <MapPin className="w-3 h-3 mr-1" />
            {city}
          </p>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{theme}</p>
    </Card>
  );
};

export default SeminarCard;
