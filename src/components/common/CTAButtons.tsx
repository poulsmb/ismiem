import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/**
 * Пропсы компонента CTAButtons
 * 
 * @property buttons - Массив кнопок
 * @property buttons[].label - Текст кнопки
 * @property buttons[].href - Ссылка (React Router)
 * @property buttons[].variant - Стиль: "default" | "outline"
 * @property className - Дополнительные CSS классы
 */
interface CTAButtonsProps {
  buttons: {
    label: string;
    href: string;
    variant?: "default" | "outline";
  }[];
  className?: string;
}

/**
 * Блок CTA-кнопок (Call to Action)
 * 
 * @description Горизонтальный блок кнопок с автоматическим
 * переключением на вертикальный на мобильных.
 * Поддерживает стили default (синий) и outline.
 * 
 * @example
 * ```tsx
 * <CTAButtons
 *   buttons={[
 *     { label: "Подробнее", href: "/about" },
 *     { label: "Архив", href: "/archive", variant: "outline" }
 *   ]}
 * />
 * ```
 * 
 * @used-in About, Index, Mission
 */
export const CTAButtons = ({ buttons, className = "" }: CTAButtonsProps) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}>
      {buttons.map((button, index) => (
        <Link key={index} to={button.href}>
          <Button
            variant={button.variant || "default"}
            className={`px-8 ${button.variant !== "outline" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
          >
            {button.label}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default CTAButtons;
