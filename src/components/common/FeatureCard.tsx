import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

/**
 * Пропсы компонента FeatureCard
 * 
 * @property icon - Иконка из lucide-react
 * @property title - Заголовок карточки
 * @property description - Краткое описание
 * @property link - Путь для перехода (React Router)
 */
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

/**
 * Карточка-ссылка на раздел сайта
 * 
 * @description Интерактивная карточка с иконкой, заголовком,
 * описанием и ссылкой "Перейти →". Имеет hover-эффекты.
 * 
 * @example
 * ```tsx
 * <FeatureCard
 *   icon={BookOpen}
 *   title="О семинаре"
 *   description="История и цели семинара"
 *   link="/about"
 * />
 * ```
 * 
 * @used-in Index (главная страница, разделы сайта)
 */
export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  link,
}: FeatureCardProps) => {
  return (
    <Link to={link}>
      <div className="h-full p-8 rounded-lg border border-gray-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:bg-blue-50 group cursor-pointer">
        <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors">
          <Icon className="w-7 h-7 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
          Перейти →
        </span>
      </div>
    </Link>
  );
};

export default FeatureCard;
