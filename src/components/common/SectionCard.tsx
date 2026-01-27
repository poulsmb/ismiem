import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * Карточка-секция с иконкой и заголовком
 * 
 * @description Универсальная карточка для группировки контента с иконкой, заголовком и подзаголовком.
 * Поддерживает 5 цветовых схем для иконки.
 * 
 * @example
 * ```tsx
 * <SectionCard
 *   icon={BookOpen}
 *   iconColor="blue"
 *   title="История"
 *   subtitle="С 1987 года"
 * >
 *   <p>Содержимое секции...</p>
 * </SectionCard>
 * ```
 * 
 * @used-in About, Mission
 */
interface SectionCardProps {
  icon: LucideIcon;
  iconColor?: "blue" | "purple" | "green" | "orange" | "red";
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const colorClasses = {
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  green: "bg-green-100 text-green-600",
  orange: "bg-orange-100 text-orange-600",
  red: "bg-red-100 text-red-600",
};

export const SectionCard = ({
  icon: Icon,
  iconColor = "blue",
  title,
  subtitle,
  children,
  className = "",
}: SectionCardProps) => {
  return (
    <Card className={`p-8 border border-gray-200 shadow-sm ${className}`}>
      <div className="flex items-start gap-4 mb-6">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClasses[iconColor]}`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
      </div>
      {children}
    </Card>
  );
};

export default SectionCard;
