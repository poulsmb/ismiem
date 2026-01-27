/**
 * Пропсы компонента InfoBanner
 * 
 * @property title - Заголовок баннера (опционально)
 * @property children - Содержимое баннера
 * @property variant - Цветовая схема: "blue" | "green" | "orange" | "gray"
 * @property icon - Иконка в верхней части (опционально)
 */
interface InfoBannerProps {
  title?: string;
  children: React.ReactNode;
  variant?: "blue" | "green" | "orange" | "gray";
  icon?: React.ReactNode;
}

const variantClasses = {
  blue: "bg-blue-50 border-blue-200",
  green: "bg-green-50 border-green-200",
  orange: "bg-orange-50 border-orange-200",
  gray: "bg-gray-50 border-gray-200",
};

/**
 * Информационный баннер для выделения важной информации
 * 
 * @description Цветной блок с заголовком и контентом для привлечения
 * внимания к важным ссылкам или сообщениям.
 * 
 * @example
 * ```tsx
 * <InfoBanner title="Важно" variant="orange">
 *   <p>Текст сообщения</p>
 * </InfoBanner>
 * ```
 * 
 * @used-in Archive, Announcements, Contact
 */
export const InfoBanner = ({
  title,
  children,
  variant = "blue",
  icon,
}: InfoBannerProps) => {
  return (
    <div className={`p-6 rounded-lg border ${variantClasses[variant]}`}>
      {icon && <div className="mb-4">{icon}</div>}
      {title && (
        <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

export default InfoBanner;
