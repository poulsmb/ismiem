import { ReactNode } from "react";

/**
 * Пропсы компонента PageHero
 * 
 * @property title - Основной заголовок страницы (h1)
 * @property subtitle - Подзаголовок крупным текстом (xl)
 * @property description - Описание обычным текстом
 * @property children - Дополнительный контент после заголовка
 */
interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
}

/**
 * Универсальный Hero-блок для страниц
 * 
 * @description Компонент шапки страницы с заголовком, декоративной линией
 * и опциональным подзаголовком/описанием.
 * 
 * @example
 * ```tsx
 * <PageHero
 *   title="О семинаре"
 *   subtitle="Международный семинар им. А. Г. Мордковича"
 * />
 * ```
 * 
 * @used-in About, Archive, Mission, Committees, Announcements, Contact
 */
export const PageHero = ({
  title,
  subtitle,
  description,
  children,
}: PageHeroProps) => {
  return (
    <div className="mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {title}
      </h1>
      <div className="h-1 w-24 bg-blue-600 rounded"></div>
      {subtitle && (
        <p className="mt-6 text-xl text-gray-600">{subtitle}</p>
      )}
      {description && (
        <p className="mt-4 text-gray-600">{description}</p>
      )}
      {children}
    </div>
  );
};

export default PageHero;
